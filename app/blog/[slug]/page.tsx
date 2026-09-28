import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getAllPosts, getAllSlugs, getPostBySlug, formatDate } from "@/lib/blog";
import BlogTag from "@/components/marketing/blog-tag";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

// Closing call to action, chosen per post by `cta` in the front matter.
// "redesign" carries the rebuild intent, which lands signup on the upload screen.
const CLOSING_CTA = {
  redesign: { line: "Have slides that need work?", label: "Redesign My Slides", href: `${APP_URL}/signup?intent=rebuild` },
  build: { line: "Ready to turn it into slides?", label: "Start From Scratch", href: SIGNUP_URL },
  default: { line: "Ready to create your own pitch deck?", label: "Start Building Free", href: SIGNUP_URL },
};

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
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      ...(post.updated && { modifiedTime: post.updated }),
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

  const postUrl = `https://pitchboost.ai/blog/${slug}`;

  // Roundup posts get an in-body link to the matching comparison page.
  const COMPARE_LINK_BY_SLUG: Record<string, { href: string; label: string }> = {
    "gamma-alternatives": { href: "/compare/pitchboost-vs-gamma", label: "PitchBoost vs Gamma comparison" },
    "beautiful-ai-alternatives": { href: "/compare/pitchboost-vs-beautiful-ai", label: "PitchBoost vs Beautiful.ai comparison" },
    "best-ai-pitch-deck-generators": { href: "/compare", label: "full PitchBoost comparison hub" },
  };
  const compareLink = COMPARE_LINK_BY_SLUG[slug];
  const cta = CLOSING_CTA[post.cta ?? "default"];

  // Up to 3 other posts that share a tag with this one.
  const related = getAllPosts()
    .filter((p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: postUrl,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
    publisher: {
      "@type": "Organization",
      name: "PitchBoost",
      url: "https://pitchboost.ai",
      logo: { "@type": "ImageObject", url: "https://pitchboost.ai/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    image: post.image || `https://pitchboost.ai/blog/${slug}/opengraph-image`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://pitchboost.ai/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="blog-hero">
        <div className="mkt-container">
          <div className="blog-post-meta">
            {post.updated ? (
              <span>Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time></span>
            ) : (
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            )}
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

      <div className="blog-hero-image">
        <img
          src={`/blog/${slug}/opengraph-image`}
          alt={post.title}
          width={1200}
          height={630}
        />
      </div>

      <article className="blog-content">
        <MDXRemote source={post.content} />

        {compareLink && (
          <p>
            <strong>Compare PitchBoost:</strong> for a side-by-side look at output quality,
            brand control, and viewer analytics, see our{" "}
            <Link href={compareLink.href}>{compareLink.label}</Link>.
          </p>
        )}

        <hr />

        {related.length > 0 && (
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--ds-dark)", margin: "0 0 24px", lineHeight: 1.3 }}>
              Related articles
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} style={{ display: "flex", flexDirection: "column", background: "white", border: "1px solid var(--ds-border)", borderRadius: 14, padding: 24, textDecoration: "none", color: "inherit" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--ds-text-light)", marginBottom: 10 }}>{rp.readingTime}</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--ds-dark)", lineHeight: 1.35, marginBottom: 8 }}>{rp.title}</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--ds-text-light)", lineHeight: 1.6 }}>{rp.description}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ textAlign: "center", padding: "20px 0 40px" }}>
          <p style={{ fontWeight: 600, color: "var(--ds-dark)", fontSize: "1.15rem" }}>
            {cta.line}
          </p>
          <a href={cta.href} className="btn btn-primary btn-lg" style={{ marginTop: 12 }}>
            {cta.label}
          </a>
        </div>

        <div style={{ textAlign: "center", paddingBottom: 20 }}>
          <Link href="/blog" style={{ color: "var(--ds-text-secondary)", textDecoration: "none", fontWeight: 500 }}>
            &larr; Back to all articles
          </Link>
        </div>
      </article>
    </>
  );
}
