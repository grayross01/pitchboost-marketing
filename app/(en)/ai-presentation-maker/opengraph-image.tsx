import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost: AI presentation maker";

export default function Image() {
  return ogImage({ eyebrow: "AI presentation maker", title: "Say what it's for. Get a deck built for that room.", subtitle: "Lessons, reports, talks and pitches from a prompt, or the deck you have redesigned. Any language, your brand." });
}
