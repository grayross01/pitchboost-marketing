import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost";

export default function Image() {
  return ogImage({ eyebrow: "AI presentation software", title: "The deck that speaks their language.", subtitle: "PitchBoost builds personalized pitch decks, presentations and proposals for a specific prospect in a few minutes, in your brand." });
}
