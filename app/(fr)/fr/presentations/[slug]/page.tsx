import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PresentationPageView, { presentationPageMetadata } from "@/components/marketing/presentation-page-view";
import { getPresentationFor, getPresentations } from "@/lib/presentations-i18n";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPresentations("fr").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return presentationPageMetadata("fr", slug);
}

export default async function PresentationPage({ params }: Props) {
  const { slug } = await params;
  const page = getPresentationFor("fr", slug);
  if (!page) notFound();
  return <PresentationPageView locale="fr" page={page} />;
}
