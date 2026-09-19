import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Free PowerPoint redesign preview";

export default function Image() {
  return ogImage({ eyebrow: "Free tool, no sign-up", title: "See two of your slides redesigned first", subtitle: "Drop a .pptx, get the title slide and your busiest slide back redesigned in about a minute. Every number kept." });
}
