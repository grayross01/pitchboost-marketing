import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost changelog";

export default function Image() {
  return ogImage({ eyebrow: "Changelog", title: "What changed in PitchBoost", subtitle: "Dated, customer-facing changes: the deck rebuilder, exports, sharing, billing, emails and the ChatGPT and Claude connectors." });
}
