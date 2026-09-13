/**
 * Last-modified dates for every page family, used by the sitemap (lastmod)
 * and by each page's JSON-LD (dateModified). Answer engines weight recency;
 * a sitemap with no dates and pages with no dateModified read as frozen.
 *
 * Static pages carry the date their file (or the copy in it) last changed.
 * Data-driven families carry the date of their data file. Bump a date when
 * the visible content changes, not on every deploy: a page that claims to
 * change daily but does not gets discounted.
 */
export const STATIC_PAGE_DATES: Record<string, string> = {
  "": "2026-09-11",
  "/industries": "2026-09-12",
  "/compare": "2026-09-12",
  "/pricing": "2026-09-11",
  "/use-cases": "2026-09-12",
  "/real-estate": "2026-09-08",
  "/best-listing-presentation-software": "2026-07-11",
  "/tools": "2026-08-31",
  "/tools/deck-evaluator": "2026-08-31",
  "/tools/open-house-sign-in": "2026-07-12",
  "/tools/closing-timeline": "2026-07-12",
  "/tools/seller-net-sheet": "2026-07-16",
  "/tools/review-request": "2026-07-12",
  "/blog": "2026-07-12",
  "/privacy": "2026-09-12",
  "/terms": "2026-07-07",
  "/features": "2026-08-31",
  "/redesign": "2026-09-08",
};

export const FEATURE_PAGE_DATES: Record<string, string> = {
  "ai-deck-builder": "2026-09-12",
  "api-and-mcp": "2026-09-12",
  "brand-and-images": "2026-09-12",
  "bulk-rebuild": "2026-09-12",
  "output-types": "2026-09-12",
  "publishing-and-sharing": "2026-09-12",
  "research-and-fact-checking": "2026-08-24",
  "team-and-permissions": "2026-09-12",
  "templates-and-slides": "2026-09-12",
  "upload-and-redesign": "2026-09-12",
  "viewer-analytics": "2026-09-12",
};

export const INDUSTRIES_UPDATED = "2026-09-12";
export const COMPETITORS_UPDATED = "2026-09-12";
export const REDESIGNS_UPDATED = "2026-09-12";
export const CITIES_UPDATED = "2026-07-10";
export const NET_SHEET_UPDATED = "2026-07-16";

/** ISO date for a static path, falling back to the family date given. */
export function pageDate(path: string, fallback: string): string {
  return STATIC_PAGE_DATES[path] ?? fallback;
}
