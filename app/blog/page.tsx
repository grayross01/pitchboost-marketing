import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/marketing/blog-card";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: { absolute: "Presentation Guides: Class Talks, Reports, Pitches and Redesigns | PitchBoost" },
  description:
    "Plain-English guides to presentations that land: class presentations, lectures and thesis defenses, board updates and reports, pitch decks, and fixing the slides you already have.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PitchBoost blog",
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: post.title,
      description: post.description,
      url: `https://pitchboost.ai/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="blog-hero">
        <div className="mkt-container">
          <div className="section-label">
            <span>Blog</span>
          </div>
          <h1>Guides for people who present</h1>
          <p>
            How to make a class presentation, a lecture, a board update or a pitch
            that people remember, and how to fix the slides you already have.
          </p>
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container">
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
