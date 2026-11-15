import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getHubCopy, getRedesignFor, getRedesigns } from "@/lib/redesigns";
import { REDESIGN_UI } from "@/lib/redesign-i18n";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost: redesign your PowerPoint";

const LOCALE = "pt" as const;

export function generateStaticParams() {
  return getRedesigns(LOCALE).map((r) => ({ slug: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRedesignFor(LOCALE, slug);
  const hub = getHubCopy(LOCALE);
  return ogImage({ eyebrow: REDESIGN_UI[LOCALE].breadcrumbHub, title: r?.heroHeadline ?? hub.h1, subtitle: r?.heroSubhead ?? hub.subhead });
}
