import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost comparisons";

export default function Image() {
  return ogImage({ eyebrow: "Comparisons", title: "How PitchBoost stacks up against the alternatives", subtitle: "Gamma, Beautiful.ai, Pitch, Tome, Canva and Copilot, compared for sales decks, proposals and pitch materials." });
}
