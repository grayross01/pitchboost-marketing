import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Security at PitchBoost";

export default function Image() {
  return ogImage({ eyebrow: "Security", title: "Security at PitchBoost", subtitle: "A plain description of how customer decks and data are stored, processed and protected." });
}
