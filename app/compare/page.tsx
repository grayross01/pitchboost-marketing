import type { Metadata } from "next";
import Link from "next/link";
import { COMPETITORS } from "@/lib/competitors";

export const metadata: Metadata = {
  alternates: { canonical: "/compare" },
  title: "PitchBoost Comparisons: How We Stack Up Against the Alternatives",
  description: "See how PitchBoost compares to Gamma, Beautiful.ai, Pitch, and other AI presentation tools. Find the best alternative for sales decks, proposals, and pitch materials.",
};

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export default function ComparePage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PitchBoost comparisons",
    itemListElement: COMPETITORS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `PitchBoost vs ${c.name}`,
      url: `https://pitchboost.ai/compare/${c.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label"><span>Comparisons</span></div>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 760, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            How PitchBoost compares to the alternatives
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            PitchBoost is the AI-native alternative built specifically for pitch decks, proposals, and sales materials — not general presentations.
          </p>
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 900, margin: "0 auto" }}>
            {COMPETITORS.map((c) => (
              <Link key={c.slug} href={`/compare/${c.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px", height: "100%", transition: "border-color 0.15s, box-shadow 0.15s", cursor: "pointer" }}
                  className="industry-card">
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ds-text-tertiary)", marginBottom: 10 }}>vs</div>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--ds-dark)", marginBottom: 12 }}>PitchBoost vs {c.name}</h2>
                  <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "0 0 20px" }}>{c.heroSubhead}</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#1F6B6B" }}>See comparison →</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }}>
            <p style={{ fontSize: 15, color: "var(--ds-text-secondary)", marginBottom: 20 }}>Ready to see the difference for yourself?</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Try PitchBoost free</a>
          </div>
        </div>
      </section>
    </>
  );
}
