import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { INDUSTRIES, getIndustry } from "@/lib/industries";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost by industry";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = getIndustry(slug);
  return ogImage({ eyebrow: i ? `PitchBoost for ${i.label}` : "PitchBoost", title: i?.heroHeadline ?? "PitchBoost", subtitle: i?.heroSubhead });
}
