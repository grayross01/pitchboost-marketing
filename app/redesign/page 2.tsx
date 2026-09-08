import type { Metadata } from "next";
import Link from "next/link";
import { REDESIGNS } from "@/lib/redesigns";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup?intent=rebuild`;

export const metadata: Metadata = {
  title: "Deck Redesign — Upload Any PowerPoint, Get It Back in Your Brand | PitchBoost",
  description:
    "Redesign any presentation with AI: upload the .pptx, keep the content, get back professional design in your brand in minutes. PowerPoint redesigns, pitch deck makeovers, rebrands, and sales deck refreshes.",
  alternates: { canonical: "/redesign" },
};

export default function RedesignHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Deck redesign with PitchBoost",
    description: metadata.description,
    url: "https://pitchboost.ai/redesign",
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 820, margin: "0 auto 20px", lineHeight: 1.15 }}>
            Bring us the deck you have. Leave with the deck you meant.
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            PitchBoost reads your PowerPoint, keeps the story, and rebuilds the design in your brand — pulled straight from your website. A few minutes, not a few weeks.
          </p>
          <div style={{ marginTop: 36 }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Upload Your Deck Free</a>
          </div>
          <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 14 }}>
            Free plan includes three deck generations. No credit card.
          </p>
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Pick your situation</span></div>
            <h2>Every version of &ldquo;this deck needs help&rdquo;</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20, marginTop: 48 }}>
            {REDESIGNS.map((r) => (
              <Link key={r.slug} href={`/redesign/${r.slug}`} style={{ textDecoration: "none", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "24px 28px", display: "block" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{r.navLabel}</h3>
                <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{r.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
