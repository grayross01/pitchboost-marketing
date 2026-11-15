import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { RESEARCH, getStudy } from "@/lib/research";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost research";

export function generateStaticParams() {
  return RESEARCH.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getStudy(slug);
  return ogImage({ eyebrow: s ? `PitchBoost research, ${s.sample}` : "PitchBoost research", title: s?.title ?? "PitchBoost research", subtitle: s?.headline });
}
