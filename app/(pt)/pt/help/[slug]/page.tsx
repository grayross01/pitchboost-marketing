import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HelpArticleView, helpArticleMetadata } from "@/components/marketing/help-views";
import { getHelpArticleFor, getHelpArticles } from "@/lib/help";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getHelpArticles("pt").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return helpArticleMetadata("pt", slug);
}

export default async function HelpArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getHelpArticleFor("pt", slug);
  if (!article) notFound();
  return <HelpArticleView locale="pt" article={article} />;
}
