import type { MetadataRoute } from "next";
import { INDUSTRIES } from "@/lib/industries";
import { COMPETITORS } from "@/lib/competitors";
import { FEATURES } from "@/lib/features";
import { CITIES } from "@/lib/cities";
import { NET_SHEET_STATES } from "@/lib/net-sheet-states";
import { REDESIGNS, getRedesigns } from "@/lib/redesigns";
import { ANSWERS } from "@/lib/answers";
import { getAllPosts } from "@/lib/blog";
import { STATIC_PAGE_DATES, FEATURE_PAGE_DATES, INDUSTRIES_UPDATED, COMPETITORS_UPDATED, REDESIGNS_UPDATED, CITIES_UPDATED, NET_SHEET_UPDATED } from "@/lib/page-dates";

const BASE = "https://pitchboost.ai";

/**
 * Dynamic sitemap, served at /sitemap.xml.
 *
 * Derived from the same data libs the pages render from, so every industry,
 * feature, competitor comparison, and blog post is always included and can
 * never drift out of date. (The previous hand-maintained public/sitemap.xml
 * had already dropped an industry.) Search engines and AI crawlers read this
 * to discover everything we publish.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/industries", changeFrequency: "monthly", priority: 0.9 },
    { path: "/compare", changeFrequency: "monthly", priority: 0.8 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/use-cases", changeFrequency: "monthly", priority: 0.6 },
    { path: "/real-estate", changeFrequency: "monthly", priority: 0.9 },
    { path: "/best-listing-presentation-software", changeFrequency: "monthly", priority: 0.8 },
    { path: "/tools", changeFrequency: "monthly", priority: 0.7 },
    { path: "/tools/deck-evaluator", changeFrequency: "monthly", priority: 0.8 },
    { path: "/tools/open-house-sign-in", changeFrequency: "monthly", priority: 0.7 },
    { path: "/tools/closing-timeline", changeFrequency: "monthly", priority: 0.7 },
    { path: "/tools/seller-net-sheet", changeFrequency: "monthly", priority: 0.7 },
    ...NET_SHEET_STATES.map((s) => ({ path: `/tools/seller-net-sheet/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.65 })),
    { path: "/tools/review-request", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${BASE}${p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    lastModified: STATIC_PAGE_DATES[p.path.startsWith("/tools/seller-net-sheet/") ? "/tools/seller-net-sheet" : p.path] ?? NET_SHEET_UPDATED,
  }));

  entries.push({ url: `${BASE}/features`, changeFrequency: "monthly", priority: 0.85, lastModified: STATIC_PAGE_DATES["/features"] });
  for (const f of FEATURES) {
    entries.push({ url: `${BASE}/features/${f.slug}`, changeFrequency: "monthly", priority: 0.8, lastModified: FEATURE_PAGE_DATES[f.slug] ?? STATIC_PAGE_DATES["/features"] });
  }
  // The redesign cluster exists in English, Spanish (/es) and Brazilian
  // Portuguese (/pt); every URL lists its siblings as hreflang alternates.
  // Only locales that actually have the page are listed as alternates: a new
  // English entry whose translation has not landed yet must not advertise a
  // Spanish URL that 404s.
  const esSlugs = new Set(getRedesigns("es").map((r) => r.slug));
  const ptSlugs = new Set(getRedesigns("pt").map((r) => r.slug));
  const redesignPaths = ["/redesign", ...REDESIGNS.map((r) => `/redesign/${r.slug}`)];
  for (const path of redesignPaths) {
    const slug = path.replace("/redesign/", "");
    const hasEs = path === "/redesign" || esSlugs.has(slug);
    const hasPt = path === "/redesign" || ptSlugs.has(slug);
    const languages: Record<string, string> = { en: `${BASE}${path}`, "x-default": `${BASE}${path}` };
    if (hasEs) languages.es = `${BASE}/es${path}`;
    if (hasPt) languages.pt = `${BASE}/pt${path}`;
    const entry = REDESIGNS.find((r) => r.slug === slug);
    const lastModified = entry?.updated ?? REDESIGNS_UPDATED;
    for (const prefix of ["", ...(hasEs ? ["/es"] : []), ...(hasPt ? ["/pt"] : [])]) {
      entries.push({
        url: `${BASE}${prefix}${path}`,
        changeFrequency: "monthly",
        priority: path === "/redesign" ? (prefix ? 0.8 : 0.85) : prefix ? 0.75 : 0.8,
        lastModified,
        alternates: { languages },
      });
    }
  }
  entries.push({ url: `${BASE}/answers`, changeFrequency: "monthly", priority: 0.8, lastModified: STATIC_PAGE_DATES["/answers"] });
  for (const a of ANSWERS) {
    entries.push({ url: `${BASE}/answers/${a.slug}`, changeFrequency: "monthly", priority: 0.8, lastModified: a.updated });
  }
  for (const i of INDUSTRIES) {
    entries.push({ url: `${BASE}/industries/${i.slug}`, changeFrequency: "monthly", priority: 0.8, lastModified: INDUSTRIES_UPDATED });
  }
  for (const c of COMPETITORS) {
    entries.push({ url: `${BASE}/compare/${c.slug}`, changeFrequency: "monthly", priority: 0.8, lastModified: c.updated ?? COMPETITORS_UPDATED });
  }
  for (const post of getAllPosts()) {
    entries.push({ url: `${BASE}/blog/${post.slug}`, changeFrequency: "monthly", priority: 0.6, lastModified: post.date || undefined });
  }
  for (const c of CITIES) {
    entries.push({ url: `${BASE}/real-estate/${c.slug}`, changeFrequency: "monthly", priority: 0.7, lastModified: CITIES_UPDATED });
  }

  return entries;
}
