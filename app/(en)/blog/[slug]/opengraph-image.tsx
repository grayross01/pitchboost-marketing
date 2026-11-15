import { getAllSlugs } from "@/lib/blog";
import { blogCard, BLOG_CARD_SIZE } from "@/lib/blog-card";

export const size = BLOG_CARD_SIZE;
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return blogCard(slug);
}
