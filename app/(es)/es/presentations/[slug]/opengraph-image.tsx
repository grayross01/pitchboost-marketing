import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { PRESENTATION_UI, getPresentationFor, getPresentations } from "@/lib/presentations-i18n";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost: AI presentation maker";

const LOCALE = "es" as const;

export function generateStaticParams() {
  return getPresentations(LOCALE).map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPresentationFor(LOCALE, slug);
  return ogImage({ eyebrow: p?.navLabel ?? PRESENTATION_UI[LOCALE].breadcrumbHub, title: p?.heroHeadline ?? "", subtitle: p?.heroSubhead ?? "" });
}
