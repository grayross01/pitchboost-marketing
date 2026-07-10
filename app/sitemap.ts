import type { MetadataRoute } from "next";
import { INDUSTRIES } from "@/lib/industries";
import { COMPETITORS } from "@/lib/competitors";
import { FEATURES } from "@/lib/features";
import { getAllSlugs } from "@/lib/blog";
import { CITIES } from "@/lib/cities";

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
    { path: "/use-cases", changeFrequency: "monthly", priority: 0.6 },
    { path: "/real-estate", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tools", changeFrequency: "monthly", priority: 0.7 },
    { path: "/tools/open-house-sign-in", changeFrequency: "monthly", priority: 0.7 },
    { path: "/tools/closing-timeline", changeFrequency: "monthly", priority: 0.7 },
    { path: "/tools/seller-net-sheet", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${BASE}${p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  for (const f of FEATURES) {
    entries.push({ url: `${BASE}/features/${f.slug}`, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const i of INDUSTRIES) {
    entries.push({ url: `${BASE}/industries/${i.slug}`, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const c of COMPETITORS) {
    entries.push({ url: `${BASE}/compare/${c.slug}`, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const slug of getAllSlugs()) {
    entries.push({ url: `${BASE}/blog/${slug}`, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const c of CITIES) {
    entries.push({ url: `${BASE}/real-estate/${c.slug}`, changeFrequency: "monthly", priority: 0.7 });
  }

  return entries;
}
