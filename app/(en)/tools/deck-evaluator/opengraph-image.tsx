import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Free pitch deck evaluator";

export default function Image() {
  return ogImage({ eyebrow: "Free tool", title: "Free Pitch Deck Evaluator", subtitle: "Instant graded feedback on any .pptx: four scored dimensions, your five highest-impact fixes, and the claims to verify before you present." });
}
