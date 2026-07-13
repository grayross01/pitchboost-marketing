import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES, INDUSTRY_GROUPS } from "@/lib/industries";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Pitch Deck Software by Industry | PitchBoost",
  description:
    "PitchBoost works for B2B sales teams, agencies, startups, contractors, commercial real estate, nonprofits, and more. See how teams in your industry use PitchBoost to create professional pitch decks and win more business.",
};

const industryMap = Object.fromEntries(INDUSTRIES.map((i) => [i.slug, i]));

export default function IndustriesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pitch Deck Software by Industry",
    itemListElement: INDUSTRIES.map((ind, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: ind.label,
      url: `https://pitchboost.ai/industries/${ind.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div className="section-label" style={{ display: "inline-flex", marginBottom: 20 }}>
            <span>By Industry</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 600, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            PitchBoost works for anyone who pitches
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            From enterprise sales teams to solo contractors — if you need to look polished and win business, PitchBoost builds the deck.
          </p>
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container">
          {INDUSTRY_GROUPS.map((group) => (
            <div key={group.label} style={{ marginBottom: 64 }}>
              <div className="section-label" style={{ display: "inline-flex", marginBottom: 24 }}>
                <span>{group.label}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {group.slugs.map((slug) => {
                  const ind = industryMap[slug];
                  if (!ind) return null;
                  return (
                    <Link key={slug} href={`/industries/${slug}`} style={{ textDecoration: "none" }}>
                      <div className="industry-card">
                        <div style={{ fontWeight: 700, fontSize: 16, color: "var(--ds-text-primary)", marginBottom: 8 }}>{ind.label}</div>
                        <div style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>{ind.metaDescription.split(".")[0]}.</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#1F6B6B" }}>See how it works →</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
