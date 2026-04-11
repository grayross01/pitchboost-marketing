import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/marketing/blog-card";

export const metadata: Metadata = {
  title: "Blog | AI Pitch Deck & Deal Deck Insights",
  description:
    "Expert guides on creating personalized pitch decks and deal decks. Tips, best practices, and insights for B2B sales teams, agencies, and dealmakers.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="blog-hero">
        <div className="mkt-container">
          <div className="section-label">
            <span>Blog</span>
          </div>
          <h1>Insights for Dealmakers</h1>
          <p>
            Guides, tips, and best practices for creating pitch decks and deal
            decks that win.
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
