import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RedesignPageView, { redesignPageMetadata } from "@/components/marketing/redesign-page-view";
import { getRedesignFor, getRedesigns } from "@/lib/redesigns";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getRedesigns("fr").map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return redesignPageMetadata("fr", slug);
}

export default async function RedesignPage({ params }: Props) {
  const { slug } = await params;
  const page = getRedesignFor("fr", slug);
  if (!page) notFound();
  return <RedesignPageView locale="fr" page={page} />;
}
