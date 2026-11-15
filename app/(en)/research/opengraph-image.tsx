import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost research";

export default function Image() {
  return ogImage({ eyebrow: "Research", title: "Original data from PitchBoost", subtitle: "What people upload, where AI-referred signups come from, and what they do next. Dated, with sample sizes and method." });
}
