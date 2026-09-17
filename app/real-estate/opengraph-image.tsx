import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost for real estate agents";

export default function Image() {
  return ogImage({ eyebrow: "Real estate", title: "Listing presentations for real estate agents", subtitle: "Win the listing. Wow the client. Close on time. AI listing presentations, branded closing timelines, and read receipts for every deal." });
}
