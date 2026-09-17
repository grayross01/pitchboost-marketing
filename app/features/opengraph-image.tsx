import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost features";

export default function Image() {
  return ogImage({ eyebrow: "Features", title: "Everything PitchBoost does", subtitle: "AI deck generation with cited facts, PowerPoint redesign, brand kits, viewer analytics, teams, and an API." });
}
