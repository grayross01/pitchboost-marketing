import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getMakerFor, getMakers } from "@/lib/makers-i18n";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost";

const LOCALE = "pt" as const;

export function generateStaticParams() {
  return getMakers(LOCALE).map((m) => ({ slug: m.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getMakerFor(LOCALE, slug);
  return ogImage({ eyebrow: m?.eyebrow ?? "PitchBoost", title: m?.ogTitle ?? "", subtitle: m?.hubDesc ?? "" });
}
