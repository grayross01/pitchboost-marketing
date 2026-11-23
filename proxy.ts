import { NextResponse, type NextRequest } from "next/server";
import { HINT_COOKIE, HINT_COOKIE_MAX_AGE, LANG_COOKIE, LANG_COOKIE_MAX_AGE, pageIn, siteLocale } from "@/lib/language-choice";
import { PAGE_LANGUAGES } from "@/lib/page-languages";
import type { Locale } from "@/lib/locales";

/**
 * The first visit in the visitor's own language. ChatGPT and search send
 * almost everyone to an English page; when that page also exists in the
 * language the browser asks for first, the visitor gets that page instead,
 * once, and from then on the language cookie decides (lib/language-choice.ts).
 *
 * A GET for an English page that exists in other languages is answered with
 * a temporary redirect (307) to the same page in the browser's first
 * Accept-Language language, query string kept, and the cookie is set to that
 * language, when all of this holds: no language cookie yet (whatever it says,
 * English included), an Accept-Language header whose first language (region
 * ignored) is Spanish, Portuguese, French, Arabic or German and has this
 * exact page, a browser rather than a known crawler, a page load rather than
 * a prefetch or a client-side navigation, and a referrer that is not this
 * site (moving around the site never bounces). Everyone else gets the
 * English page as it is, with its canonical and hreflang tags unchanged.
 *
 * Location is only a hint: when the browser's first language is English or
 * one the site does not have but the visitor's country (Vercel's
 * x-vercel-ip-country) suggests one of its languages, nothing redirects; a
 * short-lived cookie tells the language prompt on the page which language to
 * offer (the pages are static, so it cannot be written into them).
 */

/** Crawlers, answer engines and scripts: a second guard after the missing Accept-Language most of them already show. */
const BOTS =
  /bot\b|bot\/|crawl|spider|slurp|googlebot|bingbot|gptbot|oai-searchbot|chatgpt-user|perplexity|claude|anthropic|applebot|facebookexternalhit|meta-externalagent|bytespider|ccbot|cohere|duckduck|yandex|baidu|semrush|ahrefs|petalbot|headless|lighthouse|python-requests|curl\/|wget|axios|node-fetch|go-http-client|okhttp/i;

/** The language a country suggests, where it is one of the site's: a hint for the prompt, never a redirect. */
const COUNTRY_LANGUAGE: Record<string, Locale> = {
  DE: "de", AT: "de", CH: "de", LI: "de",
  FR: "fr", BE: "fr", LU: "fr", MC: "fr",
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", EC: "es", GT: "es", CU: "es", BO: "es", DO: "es",
  HN: "es", PY: "es", SV: "es", NI: "es", CR: "es", PA: "es", UY: "es", PR: "es",
  BR: "pt", PT: "pt",
  SA: "ar", AE: "ar", EG: "ar", QA: "ar", KW: "ar", BH: "ar", OM: "ar", JO: "ar", LB: "ar", SY: "ar", IQ: "ar", YE: "ar",
  PS: "ar", MA: "ar", DZ: "ar", TN: "ar", LY: "ar", SD: "ar", MR: "ar",
};

/** The language an Accept-Language header asks for first: the highest q, the earliest of equals. */
function firstLanguage(header: string): string | null {
  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { tag: tag.trim(), q: q ? Number(q.slice(2)) : 1, index };
    })
    .filter((l) => l.tag && l.tag !== "*" && l.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);
  return ranked[0]?.tag ?? null;
}

/** A link followed from a page of this site (pitchboost.ai, its subdomains, or the address this request came to). */
function fromThisSite(referer: string | null, host: string | null): boolean {
  if (!referer) return false;
  try {
    const from = new URL(referer).hostname;
    return from === "pitchboost.ai" || from.endsWith(".pitchboost.ai") || from === (host ?? "").split(":")[0];
  } catch {
    return false;
  }
}

/** A page being loaded, not fetched behind the scenes (a prefetch, or the data of a client-side navigation). */
function isPageLoad(request: NextRequest): boolean {
  const h = request.headers;
  if (h.has("rsc") || h.has("next-router-prefetch") || h.has("next-router-state-tree") || h.has("x-middleware-prefetch")) return false;
  if (/prefetch|prerender/i.test(`${h.get("purpose") ?? ""} ${h.get("sec-purpose") ?? ""}`)) return false;
  const dest = h.get("sec-fetch-dest");
  return !dest || dest === "document";
}

export function proxy(request: NextRequest) {
  if (request.method !== "GET") return;
  const { pathname } = request.nextUrl;
  // Only an English page that exists in another language; everything else (other pages, files, the sitemap, robots, llms.txt) passes untouched.
  const languages = PAGE_LANGUAGES[pathname]?.split(" ") ?? [];
  if (languages.length === 0) return;
  if (request.cookies.has(LANG_COOKIE)) return;
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage || BOTS.test(request.headers.get("user-agent") ?? "")) return;
  const secure = request.nextUrl.protocol === "https:";

  const first = siteLocale(firstLanguage(acceptLanguage));
  if (first && first !== "en") {
    if (!languages.includes(first) || fromThisSite(request.headers.get("referer"), request.headers.get("host")) || !isPageLoad(request)) return;
    const url = request.nextUrl.clone();
    url.pathname = pageIn(first, pathname);
    const response = NextResponse.redirect(url, 307);
    response.cookies.set(LANG_COOKIE, first, { path: "/", maxAge: LANG_COOKIE_MAX_AGE, sameSite: "lax", secure });
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }

  // The browser's first language is English or one the site does not have: the country may suggest one, for the prompt only.
  const hint = COUNTRY_LANGUAGE[(request.headers.get("x-vercel-ip-country") ?? "").toUpperCase()];
  if (!hint || request.cookies.get(HINT_COOKIE)?.value === hint) return;
  const response = NextResponse.next();
  response.cookies.set(HINT_COOKIE, hint, { path: "/", maxAge: HINT_COOKIE_MAX_AGE, sameSite: "lax", secure });
  return response;
}

// Only English pages that can have a translation, only for requests that say which languages they want, and only
// until the visitor has a language ("pb_lang" is LANG_COOKIE; a matcher has to be written out in full).
export const config = {
  matcher: [
    { source: "/", has: [{ type: "header", key: "accept-language" }], missing: [{ type: "cookie", key: "pb_lang" }] },
    {
      source: "/(redesign|help|ai-presentation-maker|presentations|tools)/:path*",
      has: [{ type: "header", key: "accept-language" }],
      missing: [{ type: "cookie", key: "pb_lang" }],
    },
  ],
};
