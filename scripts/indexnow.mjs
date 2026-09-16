/**
 * IndexNow: tell Bing (which feeds ChatGPT search), Yandex and Naver about
 * our URLs right after a production deploy, instead of waiting for a crawl.
 * Reads the live sitemap and submits every URL in one request. The key file
 * lives at /<key>.txt on this host, as the protocol requires.
 *
 * Runs as the production postbuild (see package.json) and can be run by hand:
 *   node scripts/indexnow.mjs
 */
const HOST = "pitchboost.ai";
const KEY = "50d3c7a805abe7b8b58806ea247d790f";
const SITEMAP = `https://${HOST}/sitemap.xml`;

if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
  console.log("[indexnow] not a production build, skipping");
  process.exit(0);
}

const xml = await (await fetch(SITEMAP)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.startsWith(`https://${HOST}/`));
if (urls.length === 0) { console.log("[indexnow] no urls found"); process.exit(0); }
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(0, 10000) }),
});
console.log(`[indexnow] submitted ${urls.length} urls: HTTP ${res.status}`);
