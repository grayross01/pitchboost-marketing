import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { REDESIGNS, REDESIGN_STEPS, getRedesign } from "@/lib/redesigns";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
// Every CTA in this cluster carries the rebuild intent: the app reads it and
// lands the signup directly on the file-upload screen.
const SIGNUP_URL = `${APP_URL}/signup?intent=rebuild`;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return REDESIGNS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getRedesign(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/redesign/${slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
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

export default async function RedesignPage({ params }: Props) {
  const { slug } = await params;
  const page = getRedesign(slug);
  if (!page) notFound();

  const related = REDESIGNS.filter((r) => r.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    description: page.metaDescription,
    url: `https://pitchboost.ai/redesign/${page.slug}`,
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Redesign", item: "https://pitchboost.ai/redesign" },
      { "@type": "ListItem", position: 3, name: page.navLabel, item: `https://pitchboost.ai/redesign/${page.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(({ q, a }) => ({
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
              <Link href="/redesign" style={{ color: "inherit", textDecoration: "none" }}>Redesign</Link>
              <span style={{ opacity: 0.4 }}>→</span>
              <span>{page.navLabel}</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 860, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            {page.heroHeadline}
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            {page.heroSubhead}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Upload Your Deck Free</a>
            <Link href="/features/upload-and-redesign" className="btn btn-ghost btn-lg">How the redesign works</Link>
          </div>
          <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 14 }}>
            Free plan includes three deck generations. No credit card.
          </p>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>How it works</span></div>
            <h2>Upload, point at your website, done</h2>
            <p>The whole thing takes a few minutes, and you review the captured brand before anything generates.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
            {REDESIGN_STEPS.map(({ step, title, body }) => (
              <div key={step} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "26px 28px" }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: "#1F6B6B", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, marginBottom: 14 }}>{step}</div>
                <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Why now</span></div>
            <h2>The situation this page exists for</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
            {page.painPoints.map(({ title, body }) => (
              <div key={title} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What you get</span></div>
            <h2>What comes back</h2>
          </div>
          <ul className="fade-up" style={{ listStyle: "none", padding: 0, marginTop: 40, display: "grid", gap: 14 }}>
            {page.outcomes.map((o) => (
              <li key={o} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, color: "var(--ds-text-primary)", lineHeight: 1.6 }}>
                <CheckIcon />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>FAQ</span></div>
            <h2>Common questions</h2>
          </div>
          <div className="fade-up" style={{ marginTop: 40, display: "grid", gap: 12 }}>
            {page.faqs.map(({ q, a }) => (
              <details key={q} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "18px 22px" }}>
                <summary style={{ fontWeight: 600, fontSize: 15, color: "var(--ds-text-primary)", cursor: "pointer" }}>{q}</summary>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, marginTop: 12, marginBottom: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Related</span></div>
            <h2>More ways teams use the redesign</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
            {related.map((r) => (
              <Link key={r.slug} href={`/redesign/${r.slug}`} style={{ textDecoration: "none", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px", display: "block" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{r.navLabel}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{r.heroSubhead.slice(0, 110)}…</p>
              </Link>
            ))}
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: 20 }}>
            <Link href="/features/upload-and-redesign" style={{ textDecoration: "none", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px", display: "block" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>Upload &amp; Redesign</h3>
              <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>The feature behind every page here — how the rebuild actually works.</p>
            </Link>
            <Link href="/features/bulk-rebuild" style={{ textDecoration: "none", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px", display: "block" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>Bulk Rebuild</h3>
              <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>Convert a whole folder of PowerPoints into your brand in one run.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mkt-section" style={{ background: "var(--ds-dark)", textAlign: "center" }}>
        <div className="mkt-container">
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, maxWidth: 700, margin: "0 auto 16px" }}>{page.ctaHeadline}</h2>
          <p style={{ color: "rgba(255,255,255,.75)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Upload the deck, point PitchBoost at your website, and see the redesign for yourself. Three free generations, no credit card.
          </p>
          <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Upload Your Deck Free</a>
        </div>
      </section>
    </>
  );
}
