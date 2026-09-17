import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost pricing";

export default function Image() {
  return ogImage({ eyebrow: "Pricing", title: "Free to start. Pro at $29 a month. Business at $79.", subtitle: "Every plan includes a monthly AI budget. No credit card to start." });
}
