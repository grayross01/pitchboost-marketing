import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost: free AI presentation maker, no sign-up";

export default function Image() {
  return ogImage({ eyebrow: "Free tool, no sign-up", title: "Make a presentation free, in about two minutes.", subtitle: "Say what it is about and who it is for. Lessons, reports, talks and pitches, in any language." });
}
