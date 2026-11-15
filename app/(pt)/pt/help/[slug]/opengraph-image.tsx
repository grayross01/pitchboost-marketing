import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getHelpArticleFor, getHelpArticles } from "@/lib/help";
import { HELP_UI } from "@/lib/help-i18n";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost help center";

const LOCALE = "pt" as const;

export function generateStaticParams() {
  return getHelpArticles(LOCALE).map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getHelpArticleFor(LOCALE, slug);
  const ui = HELP_UI[LOCALE];
  return ogImage({ eyebrow: ui.hubTitle, title: a?.title ?? ui.hubTitle, subtitle: a?.metaDescription ?? ui.hubMetaDescription });
}
