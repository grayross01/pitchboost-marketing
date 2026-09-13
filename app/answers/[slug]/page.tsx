import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ANSWERS, getAnswer } from "@/lib/answers";
import { getRedesign } from "@/lib/redesigns";
import { siteTitle } from "@/lib/site-title";

interface Props { params: Promise<{ slug: string }> }
const BASE = "https://pitchboost.ai";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup?intent=rebuild`;

export async function generateStaticParams() {
  return ANSWERS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getAnswer(slug);
  if (!a) return {};
  return {
    title: siteTitle(a.metaTitle),
    description: a.metaDescription,
    alternates: { canonical: `/answers/${a.slug}` },
    openGraph: { title: a.metaTitle, description: a.metaDescription, url: `${BASE}/answers/${a.slug}`, type: "article" },
  };
}

export default async function AnswerPage({ params }: Props) {
  const { slug } = await params;
  const a = getAnswer(slug);
  if (!a) notFound();
  const related = getRedesign(a.related);
  const url = `${BASE}/answers/${a.slug}`;
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: a.metaTitle,
    description: a.metaDescription,
    url,
    datePublished: a.updated,
    dateModified: a.updated,
    publisher: { "@type": "Organization", name: "PitchBoost", url: BASE },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [{ "@type": "Question", name: a.question, acceptedAnswer: { "@type": "Answer", text: a.shortAnswer } }, ...a.faqs.map(({ q, a: ans }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: ans } }))],
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Answers", item: `${BASE}/answers` },
      { "@type": "ListItem", position: 3, name: a.question, item: url },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section style={{ padding: "120px 0 56px", background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 820 }}>
          <div className="section-label" style={{ gap: 6, marginBottom: 20 }}>
            <Link href="/answers" style={{ color: "inherit", textDecoration: "none" }}>Answers</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>{a.navLabel}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", lineHeight: 1.15, margin: "0 0 24px" }}>{a.question}</h1>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--ds-text-primary)", background: "var(--ds-bg)", border: "2px solid #1F6B6B", borderRadius: 16, padding: "24px 28px", margin: 0 }}>{a.shortAnswer}</p>
          <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 12 }}>Updated {a.updated}. Prices are list prices in USD.</p>
        </div>
      </section>
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 820 }}>
          {a.sections.map((s) => (
            <div key={s.title} style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 12 }}>{s.title}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ds-text-secondary)", margin: 0 }}>{s.body}</p>
            </div>
          ))}
          {related && (
            <div style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "24px 28px", marginTop: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1F6B6B", marginBottom: 8 }}>The page that does the work</div>
              <Link href={`/redesign/${related.slug}`} style={{ fontSize: 17, fontWeight: 700, color: "var(--ds-dark)", textDecoration: "none" }}>{related.heroHeadline}</Link>
              <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "8px 0 0" }}>{related.metaDescription}</p>
            </div>
          )}
        </div>
      </section>
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 20 }}>Related questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {a.faqs.map(({ q, a: ans }) => (
              <div key={q} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "20px 24px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{q}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, margin: 0 }}>{ans}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 12 }}>More answers</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ds-text-secondary)", fontSize: 14, lineHeight: 1.9 }}>
              {ANSWERS.filter((x) => x.slug !== a.slug).map((x) => (
                <li key={x.slug}><Link href={`/answers/${x.slug}`} style={{ color: "#1F6B6B" }}>{x.question}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box">
            <h2>Upload the deck. Get it back redesigned.</h2>
            <p>One AI deck a month is free. Bring the PowerPoint you have and see the result in a few minutes.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Redesign my deck free</a>
          </div>
        </div>
      </section>
    </>
  );
}
