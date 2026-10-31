import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost pricing";

export default function Image() {
  return ogImage({ eyebrow: "Pricing", title: "Free to start. Starter at $7 a month, Pro at $29.", subtitle: "Business at $79 a month, or pay once for one deck: $9 up to 25 slides, $19 up to 60. No credit card to start." });
}
