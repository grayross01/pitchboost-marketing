import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPETITORS, getCompetitor } from "@/lib/competitors";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const competitor = getCompetitor(slug);
  if (!competitor) return {};
  return {
    title: competitor.metaTitle,
    description: competitor.metaDescription,
    openGraph: {
      title: competitor.metaTitle,
      description: competitor.metaDescription,
      images: [{ url: "https://pitchboost.ai/og-image.png", width: 1310, height: 820 }],
    },
  };
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, color: "#1F6B6B" }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0 }}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon />;
  if (value === false) return <XIcon />;
  return <span style={{ fontSize: 12, color: "var(--ds-text-secondary)", fontWeight: 500 }}>{value}</span>;
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const competitor = getCompetitor(slug);
  if (!competitor) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: competitor.metaTitle,
    description: competitor.metaDescription,
    url: `https://pitchboost.ai/compare/${competitor.slug}`,
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://pitchboost.ai/compare" },
      { "@type": "ListItem", position: 3, name: competitor.metaTitle, item: `https://pitchboost.ai/compare/${competitor.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: competitor.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href="/compare" style={{ color: "inherit", textDecoration: "none" }}>Compare</Link>
              <span style={{ opacity: 0.4 }}>→</span>
              <span>PitchBoost vs {competitor.name}</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 860, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            {competitor.heroHeadline}
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto 36px", lineHeight: 1.7 }}>
            {competitor.heroSubhead}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Try PitchBoost free</a>
            <a href="#comparison" className="btn btn-ghost btn-lg">See the comparison</a>
          </div>
        </div>
      </section>

      {/* ── Verdict ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, maxWidth: 860, margin: "0 auto" }}>
            <div style={{ background: "var(--ds-bg-light)", border: "2px solid #1F6B6B", borderRadius: 16, padding: "28px 32px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1F6B6B", marginBottom: 10 }}>PitchBoost</div>
              <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, margin: 0 }}>{competitor.verdict}</p>
            </div>
            <div style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ds-text-tertiary)", marginBottom: 10 }}>{competitor.name}</div>
              <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, margin: 0 }}>{competitor.competitorSummary}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section id="comparison" className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Feature comparison</span></div>
            <h2>PitchBoost vs {competitor.name}: Feature by feature</h2>
            <p>How the two tools stack up on the things that matter most for pitch decks, proposals, and sales materials.</p>
          </div>

          <div className="fade-up" style={{ maxWidth: 780, margin: "48px auto 0", borderRadius: 16, overflow: "hidden", border: "1px solid var(--ds-border)" }}>
            {/* Header row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 140px", background: "var(--ds-dark)", padding: "14px 24px", gap: 8 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Feature</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#5ECEAB", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center" }}>PitchBoost</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center" }}>{competitor.name}</div>
            </div>
            {/* Feature rows */}
            {competitor.features.map(({ label, pitchboost, competitor: comp }, i) => (
              <div key={label} style={{ display: "grid", gridTemplateColumns: "1fr 140px 140px", padding: "14px 24px", gap: 8, background: i % 2 === 0 ? "var(--ds-bg)" : "var(--ds-bg-light)", borderTop: "1px solid var(--ds-border)", alignItems: "center" }}>
                <span style={{ fontSize: 14, color: "var(--ds-text-primary)", fontWeight: 500 }}>{label}</span>
                <div style={{ display: "flex", justifyContent: "center" }}><FeatureValue value={pitchboost} /></div>
                <div style={{ display: "flex", justifyContent: "center" }}><FeatureValue value={comp} /></div>
              </div>
            ))}
            {/* Pricing row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 140px", padding: "16px 24px", gap: 8, background: "var(--ds-bg-light)", borderTop: "1px solid var(--ds-border)", alignItems: "center" }}>
              <span style={{ fontSize: 14, color: "var(--ds-text-primary)", fontWeight: 700 }}>Pricing</span>
              <div style={{ textAlign: "center", fontSize: 12, color: "#1F6B6B", fontWeight: 600, lineHeight: 1.4 }}>{competitor.pitchboostPricing}</div>
              <div style={{ textAlign: "center", fontSize: 12, color: "var(--ds-text-secondary)", fontWeight: 500, lineHeight: 1.4 }}>{competitor.competitorPricing}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Differences ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Key differences</span></div>
            <h2>What actually separates PitchBoost from {competitor.name}</h2>
            <p>Features lists only tell part of the story. Here&apos;s what the difference looks like in practice.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 48 }}>
            {competitor.keyDifferences.map(({ title, body }) => (
              <div key={title} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Each Is Best For ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Who it&apos;s for</span></div>
            <h2>Which tool is right for you?</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, maxWidth: 820, margin: "48px auto 0" }}>
            <div style={{ background: "var(--ds-bg)", border: "2px solid #1F6B6B", borderRadius: 16, padding: "28px 32px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1F6B6B", marginBottom: 20 }}>Choose PitchBoost if you…</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {competitor.pitchboostBestFor.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckIcon />
                    <span style={{ fontSize: 14, color: "var(--ds-text-primary)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <a href={SIGNUP_URL} className="btn btn-primary" style={{ width: "100%", textAlign: "center", display: "block" }}>Try PitchBoost free</a>
              </div>
            </div>
            <div style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 20 }}>Choose {competitor.name} if you…</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {competitor.competitorBestFor.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ width: 18, height: 18, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--ds-text-tertiary)", display: "block" }} />
                    </span>
                    <span style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>FAQ</span></div>
            <h2>PitchBoost vs {competitor.name}: Common questions</h2>
          </div>
          <div className="fade-up" style={{ maxWidth: 720, margin: "48px auto 0", display: "flex", flexDirection: "column", gap: 16 }}>
            {competitor.faqs.map(({ q, a }) => (
              <div key={q} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "24px 28px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 10 }}>{q}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box">
            <h2>{competitor.ctaHeadline}</h2>
            <p>Generate your first tailored pitch deck free — no design skills required, no credit card needed.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Get started free</a>
          </div>
        </div>
      </section>
    </>
  );
}
