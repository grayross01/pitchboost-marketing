import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost pricing";

export default function Image() {
  return ogImage({ eyebrow: "Pricing", title: "Free to start. $9 for one deck. Starter at $7 a month.", subtitle: "Pro at $29 and Business at $79 a month. No credit card to start." });
}
