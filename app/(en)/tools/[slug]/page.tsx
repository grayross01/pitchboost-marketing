import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MakerPageView, { makerPageMetadata } from "@/components/marketing/maker-page-view";
import { MAKERS, getMaker } from "@/lib/makers";

interface Props {
  params: Promise<{ slug: string }>;
}

// Only the pages in lib/makers: any other address under /tools that has no
// folder of its own is a missing page, not an empty one.
export const dynamicParams = false;

export function generateStaticParams() {
  return MAKERS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return makerPageMetadata(slug);
}

export default async function MakerPage({ params }: Props) {
  const { slug } = await params;
  const page = getMaker(slug);
  if (!page) notFound();
  return <MakerPageView page={page} />;
}
