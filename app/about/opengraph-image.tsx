import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "About PitchBoost";

export default function Image() {
  return ogImage({ eyebrow: "Company", title: "About PitchBoost", subtitle: "What PitchBoost is, who makes it, and the rules the product is built to." });
}
