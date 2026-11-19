import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MakerPageView, { makerPageMetadata } from "@/components/marketing/maker-page-view";
import { getMakerFor, getMakers } from "@/lib/makers-i18n";

const LOCALE = "ar" as const;

interface Props {
  params: Promise<{ slug: string }>;
}

// Only the pages this language has: any other address here is a missing page.
export const dynamicParams = false;

export function generateStaticParams() {
  return getMakers(LOCALE).map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return makerPageMetadata(LOCALE, slug);
}

export default async function MakerPage({ params }: Props) {
  const { slug } = await params;
  const page = getMakerFor(LOCALE, slug);
  if (!page) notFound();
  return <MakerPageView locale={LOCALE} page={page} />;
}
