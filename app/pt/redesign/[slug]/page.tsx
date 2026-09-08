import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RedesignPageView, { redesignPageMetadata } from "@/components/marketing/redesign-page-view";
import { getRedesignFor, getRedesigns } from "@/lib/redesigns";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getRedesigns("pt").map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return redesignPageMetadata("pt", slug);
}

export default async function RedesignPage({ params }: Props) {
  const { slug } = await params;
  const page = getRedesignFor("pt", slug);
  if (!page) notFound();
  return <RedesignPageView locale="pt" page={page} />;
}
