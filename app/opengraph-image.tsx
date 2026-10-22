import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost";

export default function Image() {
  return ogImage({ eyebrow: "AI presentation maker", title: "The deck that speaks their language.", subtitle: "Lessons, reports, talks and pitches, made from a prompt or redesigned from the deck you have, in your brand and in any language." });
}
