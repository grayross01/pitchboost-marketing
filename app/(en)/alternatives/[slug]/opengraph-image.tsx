import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { COMPETITORS } from "@/lib/competitors";
import { COMPETITORS_UPDATED } from "@/lib/page-dates";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Alternatives compared by PitchBoost";

export function generateStaticParams() {
  return COMPETITORS.filter((c) => c.altSlug).map((c) => ({ slug: c.altSlug as string }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = COMPETITORS.find((x) => x.altSlug === slug);
  const count = COMPETITORS.length;
  return ogImage({
    eyebrow: `Alternatives, prices checked ${c?.updated ?? COMPETITORS_UPDATED}`,
    title: c ? `${c.name} alternatives (2026): ${count} tools compared` : "Presentation tool alternatives",
    subtitle: c ? `${count} alternatives to ${c.name} including PitchBoost, with checked prices, free plans, PowerPoint export and brand handling.` : undefined,
  });
}
