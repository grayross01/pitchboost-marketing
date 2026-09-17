import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { FEATURES } from "@/lib/features";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost feature";

const f = FEATURES.find((x) => x.slug === "brand-and-images");

export default function Image() {
  return ogImage({ eyebrow: "Feature", title: f?.navLabel ?? "PitchBoost", subtitle: f?.shortDescription });
}
