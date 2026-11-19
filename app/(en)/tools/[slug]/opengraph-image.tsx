import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { MAKERS, getMaker } from "@/lib/makers";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost: free tools that start a presentation";

export function generateStaticParams() {
  return MAKERS.map((m) => ({ slug: m.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getMaker(slug);
  return ogImage({ eyebrow: m?.eyebrow ?? "Free tool", title: m?.ogTitle ?? "Start a presentation, free.", subtitle: m?.hubDesc ?? "" });
}
