import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getAllSlugs, getPostBySlug, formatDate } from "@/lib/blog";
import BlogTag from "@/components/marketing/blog-tag";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/auth/login?screen_hint=signup&returnTo=/dashboard`;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — PitchBoost Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://pitchboost.ai/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      ...(post.image && { images: [{ url: post.image }] }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "PitchBoost" },
    ...(post.image && { image: post.image }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="blog-hero">
        <div className="mkt-container">
          <div className="blog-post-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="blog-meta-sep">&middot;</span>
            <span>{post.readingTime}</span>
          </div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <BlogTag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </section>

      <article className="blog-content">
        <MDXRemote source={post.content} />

        <hr />

        <div style={{ textAlign: "center", padding: "20px 0 40px" }}>
          <p style={{ fontWeight: 600, color: "var(--ds-dark)", fontSize: "1.15rem" }}>
            Ready to create your own pitch deck?
          </p>
          <a href={SIGNUP_URL} className="btn btn-primary btn-lg" style={{ marginTop: 12 }}>
            Start Building Free
          </a>
        </div>

        <div style={{ textAlign: "center", paddingBottom: 20 }}>
          <Link href="/blog" style={{ color: "var(--ds-teal)", textDecoration: "none", fontWeight: 500 }}>
            &larr; Back to all articles
          </Link>
        </div>
      </article>
    </>
  );
}
