import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { ANSWERS, getAnswer } from "@/lib/answers";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost answers";

export function generateStaticParams() {
  return ANSWERS.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getAnswer(slug);
  return ogImage({ eyebrow: "Answers", title: a?.question ?? "PitchBoost answers", subtitle: a?.shortAnswer });
}
