/**
 * /pitch-deck and /pitch-deck/<company>: the app's programmatic sample pages,
 * served on this domain so they accrue authority to pitchboost.ai.
 *
 * This replaces a plain rewrite. The app's HTML loads its CSS, images and
 * scripts from relative /_next/... paths, which Vercel answers from this
 * deployment's own build (404) before any rewrite runs, so the pages rendered
 * unstyled. Here we fetch the page, point its stylesheets, images and
 * Cloudflare helpers at the app, and drop the app's JavaScript: the pages are
 * server-rendered content plus an iframe sample deck and work without it,
 * whereas the app's client runtime would try to load further chunks from this
 * domain and fail. Analytics and consent inline scripts are kept.
 */
const APP = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";

export const revalidate = 3600;

function rewriteHtml(html: string): string {
  return (
    html
      // The app's JS bundles and their preloads.
      .replace(/<script\b[^>]*\bsrc="\/_next\/[^"]*"[^>]*><\/script>/g, "")
      .replace(/<link\b[^>]*\bas="script"[^>]*\bhref="\/_next\/[^"]*"[^>]*\/?>/g, "")
      .replace(/<link\b[^>]*\bhref="\/_next\/[^"]*"[^>]*\bas="script"[^>]*\/?>/g, "")
      // React Server Components payload; inert without the app's runtime.
      .replace(/<script>\(?self\.__next_f[\s\S]*?<\/script>/g, "")
      // Stylesheets, optimized images and Cloudflare helpers live on the app.
      .replace(/(href|src|srcSet|imageSrcSet)="\/(_next|cdn-cgi)\//g, `$1="${APP}/$2/`)
      .replace(/(\s|,)\/_next\/image\?/g, `$1${APP}/_next/image?`)
      // Signup and login are app routes; skip the redirect hop.
      .replace(/href="\/(signup|login)\b/g, `href="${APP}/$1`)
  );
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const path = ["pitch-deck", ...(slug ?? []).map(encodeURIComponent)].join("/");
  const res = await fetch(`${APP}/${path}`, { next: { revalidate } });
  const type = res.headers.get("content-type") ?? "text/html; charset=utf-8";
  if (!type.includes("text/html")) {
    return new Response(res.body, { status: res.status, headers: { "content-type": type } });
  }
  return new Response(rewriteHtml(await res.text()), {
    status: res.status,
    headers: { "content-type": type },
  });
}
