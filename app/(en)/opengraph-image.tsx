import { ogImage, OG_SIZE, OG_CONTENT_TYPE, SITE_CARD } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost";

/** The card for English pages that have none of their own. Inside the app/(en)
 *  route group Next serves it at a hashed address (/opengraph-image-35z9bs);
 *  app/opengraph-image.tsx serves the same picture at the plain address. */
export default function Image() {
  return ogImage(SITE_CARD);
}
