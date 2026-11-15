import { getAllSlugs } from "@/lib/blog";
import { blogCard } from "@/lib/blog-card";

/** The post's card at a fixed address, /blog/<slug>/card.png, for the picture
 *  at the top of the post and the article's structured data. The og:image file
 *  next door is served at a hashed address inside the app/(en) route group,
 *  so nothing should name that one. */
export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return blogCard(slug);
}
