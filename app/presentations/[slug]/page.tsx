import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PresentationPageView, { presentationPageMetadata } from "@/components/marketing/presentation-page-view";
import { PRESENTATIONS, getPresentation } from "@/lib/presentations";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRESENTATIONS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return presentationPageMetadata(slug);
}

export default async function PresentationPage({ params }: Props) {
  const { slug } = await params;
  const page = getPresentation(slug);
  if (!page) notFound();
  return <PresentationPageView page={page} />;
}
