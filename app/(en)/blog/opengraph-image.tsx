import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost blog";

export default function Image() {
  return ogImage({ eyebrow: "Blog", title: "Guides for people who present", subtitle: "Class presentations, lectures, reports, pitch decks, and fixing the slides you already have." });
}
