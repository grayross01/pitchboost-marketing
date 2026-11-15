import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { PRESENTATIONS, getPresentation } from "@/lib/presentations";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost: AI presentation maker";

export function generateStaticParams() {
  return PRESENTATIONS.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPresentation(slug);
  return ogImage({ eyebrow: p?.navLabel ?? "AI presentation maker", title: p?.heroHeadline ?? "Presentations, made or redesigned", subtitle: p?.heroSubhead ?? "" });
}
