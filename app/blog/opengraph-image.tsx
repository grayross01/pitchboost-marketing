import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost blog";

export default function Image() {
  return ogImage({ eyebrow: "Blog", title: "AI pitch deck and deal deck insights", subtitle: "Guides on creating personalized pitch decks and deal decks for B2B sales teams, agencies and dealmakers." });
}
