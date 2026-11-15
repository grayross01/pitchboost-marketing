import { ogImage, OG_SIZE, OG_CONTENT_TYPE, SITE_CARD } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost";

/** The site-wide card at its plain address, /opengraph-image. Outside the
 *  language route groups it is attached to no page; it exists because
 *  lib/locale-dir.ts names this address for the Arabic pages, and cards
 *  shared before Nov 2026 point here. English pages get the same picture from
 *  app/(en)/opengraph-image.tsx. */
export default function Image() {
  return ogImage(SITE_CARD);
}
