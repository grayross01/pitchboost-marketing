import { NextResponse, type NextRequest } from "next/server";
import { LANG_COOKIE, pageIn, siteLocale } from "@/lib/language-choice";
import { PAGE_LANGUAGES } from "@/lib/page-languages";

/**
 * The first visit in the visitor's own language. ChatGPT sends almost
 * everyone to an English page; when that page also exists in the language
 * the browser asks for first, the visitor gets that page instead.
 *
 * The matcher (config, below) keeps this away from nearly every request, so
 * English-first visitors never wait for it: it runs only for the English
 * pages that can have a translation, only when the browser lists Spanish,
 * Portuguese, French, Arabic or German first, and never with the language
 * cookie, for a prefetch or the data of a client-side navigation, or for a
 * link followed from this site.
 *
 * Here, a page load gets a temporary redirect (307) to the same page in the
 * browser's first language (the highest q, region ignored), query string
 * kept, when that exact page exists in it, the user agent is not a known
 * crawler, and the referrer is neither this site nor a search engine (search
 * engines already pick the version by hreflang, and the language prompt still
 * offers it). The redirect sets no cookie: the language cookie records an
 * explicit choice only (lib/language-choice.ts). Everyone else gets the
 * English page as it is, with its canonical and hreflang tags unchanged.
 */

/** Crawlers, answer engines, link previews and scripts: a second guard after the Accept-Language most of them do not send. */
const BOTS =
  /\bbot\b|bot\/|crawl|spider|slurp|googlebot|bingbot|adsbot|googleother|google-inspectiontool|mediapartners-google|storebot-google|gptbot|oai-searchbot|chatgpt-user|perplexitybot|perplexity-user|claudebot|claude-user|claude-searchbot|claude-web|anthropic-ai|applebot|facebookexternalhit|meta-externalagent|bytespider|ccbot|cohere-ai|duckduckbot|yandexbot|baiduspider|semrushbot|ahrefsbot|petalbot|amazonbot|twitterbot|linkedinbot|slackbot|discordbot|telegrambot|whatsapp|skypeuripreview|headless|lighthouse|python-requests|curl\/|wget|axios|node-fetch|go-http-client|okhttp/i;

/** Search engines, by the referrer's host: they choose a page's language by hreflang already. */
const SEARCH_ENGINES = /(^|\.)(google|bing|duckduckgo|ecosia|yahoo|yandex|baidu|startpage|qwant)\.|^search\.brave\.com$/i;

/** The language an Accept-Language header asks for first: the highest q, the earliest of equals. */
function firstLanguage(header: string): string | null {
  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim().toLowerCase()).find((p) => p.startsWith("q="));
      return { tag: tag.trim(), q: q ? Number(q.slice(2)) : 1, index };
    })
    .filter((l) => l.tag && l.tag !== "*" && l.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);
  return ranked[0]?.tag ?? null;
}

/** Where a link was followed from: this site (pitchboost.ai, its subdomains, or this request's own host), a search engine, or anywhere else. */
function referrerKind(referer: string | null, host: string | null): "site" | "search" | "other" {
  if (!referer) return "other";
  try {
    const url = new URL(referer);
    const from = url.hostname.toLowerCase();
    if (from === "pitchboost.ai" || from.endsWith(".pitchboost.ai") || from === (host ?? "").split(":")[0].toLowerCase()) return "site";
    // An Android app names itself by package: only Google's search app counts as a search engine (not, say, Gmail).
    if (url.protocol === "android-app:") return from === "com.google.android.googlequicksearchbox" ? "search" : "other";
    return SEARCH_ENGINES.test(from) ? "search" : "other";
  } catch {
    return "other";
  }
}

/**
 * A page being loaded rather than fetched ahead. Next removes the RSC and
 * router-prefetch headers before a proxy sees the request
 * (next/dist/server/web/adapter.js), so the matcher skips those requests;
 * what is left to tell is a browser prefetch or prerender and a fetch that
 * is not for a document.
 */
function isPageLoad(request: NextRequest): boolean {
  const h = request.headers;
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
  const first = siteLocale(firstLanguage(acceptLanguage));
  if (!first || first === "en" || !languages.includes(first)) return;
  if (referrerKind(request.headers.get("referer"), request.headers.get("host")) !== "other" || !isPageLoad(request)) return;
  const url = request.nextUrl.clone();
  url.pathname = pageIn(first, pathname);
  const response = NextResponse.redirect(url, 307);
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

// Written out in full for each entry, as a matcher must be (no shared constants). Next and Vercel match every value as
// new RegExp(`^${value}$`), case-sensitively, so the patterns anchor themselves and spell out both cases:
//   has      Accept-Language whose first listed language is es, pt, fr, ar or de (any region, any case);
//   missing  the language cookie (any value; "pb_lang" is LANG_COOKIE), the data of a client-side navigation (rsc),
//            a router prefetch, a browser prefetch (purpose, sec-purpose), and a referrer on pitchboost.ai or a subdomain.
export const config = {
  matcher: [
    {
      source: "/",
      has: [{ type: "header", key: "accept-language", value: "^\\s*(?:[Ee][Ss]|[Pp][Tt]|[Ff][Rr]|[Aa][Rr]|[Dd][Ee])(?:[-_][^,;]*)?(?:\\s*[,;].*)?$" }],
      missing: [
        { type: "cookie", key: "pb_lang" },
        { type: "header", key: "rsc" },
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "^prefetch$" },
        { type: "header", key: "sec-purpose", value: "^.*prefetch.*$" },
        { type: "header", key: "referer", value: "^https?://(?:[^/]+\\.)?pitchboost\\.ai(?:[:/].*)?$" },
      ],
    },
    {
      source: "/(redesign|help|ai-presentation-maker|presentations|tools)/:path*",
      has: [{ type: "header", key: "accept-language", value: "^\\s*(?:[Ee][Ss]|[Pp][Tt]|[Ff][Rr]|[Aa][Rr]|[Dd][Ee])(?:[-_][^,;]*)?(?:\\s*[,;].*)?$" }],
      missing: [
        { type: "cookie", key: "pb_lang" },
        { type: "header", key: "rsc" },
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "^prefetch$" },
        { type: "header", key: "sec-purpose", value: "^.*prefetch.*$" },
        { type: "header", key: "referer", value: "^https?://(?:[^/]+\\.)?pitchboost\\.ai(?:[:/].*)?$" },
      ],
    },
  ],
};
