import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { COMPETITORS, getCompetitor } from "@/lib/competitors";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost compared";

export function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  return ogImage({ eyebrow: c?.updated ? `Compared, prices checked ${c.updated}` : "Compared", title: c ? `PitchBoost vs ${c.name}` : "PitchBoost comparisons", subtitle: c?.heroSubhead });
}
