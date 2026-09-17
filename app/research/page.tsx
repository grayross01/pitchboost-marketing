import type { Metadata } from "next";
import Link from "next/link";
import { RESEARCH } from "@/lib/research";
import { STATIC_PAGE_DATES } from "@/lib/page-dates";

export const metadata: Metadata = {
  title: "Research | Original data from PitchBoost",
  description: "Numbers only PitchBoost can publish: what people upload, where AI-referred signups come from, and what they do next. Dated, with sample sizes and method.",
  alternates: { canonical: "https://pitchboost.ai/research" },
  openGraph: {
    title: "PitchBoost research",
    description: "Original, dated data from the product, with method and sample sizes.",
    images: [{ url: "https://pitchboost.ai/og-image.png", width: 1310, height: 820 }],
  },
};

export default function ResearchHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "PitchBoost research",
    url: "https://pitchboost.ai/research",
    dateModified: STATIC_PAGE_DATES["/research"],
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
    hasPart: RESEARCH.map((s) => ({ "@type": "Article", headline: s.title, url: `https://pitchboost.ai/research/${s.slug}`, datePublished: s.published })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="legal-hero">
        <div className="mkt-container">
          <h1>Research</h1>
          <p>Original data from the product. Every study is dated and states its sample and method, so it can be quoted.</p>
        </div>
      </section>
      <div className="legal-content">
        {RESEARCH.map((s) => (
          <article key={s.slug} style={{ borderTop: "1px solid var(--ds-border)", padding: "24px 0" }}>
            <p style={{ fontSize: 13, color: "var(--ds-text-tertiary)", margin: "0 0 6px" }}>
              <time dateTime={s.published}>{s.published}</time> · {s.sample} · {s.window}
            </p>
            <h2 style={{ margin: "0 0 10px", fontSize: "1.25rem" }}>
              <Link href={`/research/${s.slug}`}>{s.title}</Link>
            </h2>
            <p style={{ margin: 0 }}>{s.headline}</p>
          </article>
        ))}
        <p style={{ marginTop: 28 }}>
          Want a number that is not here? Email <a href="mailto:support@pitchboost.ai">support@pitchboost.ai</a>. If the product data can answer it without identifying anyone, we will publish it.
        </p>
      </div>
    </>
  );
}
