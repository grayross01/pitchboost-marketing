import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HelpArticleView, helpArticleMetadata } from "@/components/marketing/help-views";
import { getHelpArticleFor, getHelpArticles } from "@/lib/help";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getHelpArticles("de").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return helpArticleMetadata("de", slug);
}

export default async function HelpArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getHelpArticleFor("de", slug);
  if (!article) notFound();
  return <HelpArticleView locale="de" article={article} />;
}
