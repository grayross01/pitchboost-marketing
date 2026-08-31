import type { Metadata } from "next";
import Link from "next/link";
import { FEATURES, FEATURE_GROUPS, type FeatureMeta } from "@/lib/features";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  alternates: { canonical: "/features" },
  title: "PitchBoost Features | AI Pitch Decks, Redesign, Analytics",
  description:
    "Everything PitchBoost does: AI deck generation with researched, cited facts, upload-and-redesign for existing PowerPoints, brand kits, viewer analytics, team workspaces, and an API.",
  openGraph: {
    title: "PitchBoost Features",
    description:
      "AI deck generation with cited facts, PowerPoint redesign, brand kits, viewer analytics, teams, and an API.",
    images: [{ url: "https://pitchboost.ai/og-image.png", width: 1310, height: 820 }],
  },
};

const byatSlug = (slug: string): FeatureMeta | undefined => FEATURES.find((f) => f.slug === slug);

export default function FeaturesHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "PitchBoost Features",
    description:
      "Every PitchBoost capability: AI generation with cited facts, redesign, brand, sharing, analytics, teams, API.",
    url: "https://pitchboost.ai/features",
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
    hasPart: FEATURES.map((f) => ({
      "@type": "WebPage",
      name: f.navLabel,
      url: `https://pitchboost.ai/features/${f.slug}`,
      description: f.shortDescription,
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://pitchboost.ai/features" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{ padding: "120px 0 60px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label"><span>Features</span></div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 720, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Everything PitchBoost does
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.7 }}>
            From the first AI draft to the follow-up after your prospect reads it. Every capability below has its own page with the details.
          </p>
          <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Get Started Free</a>
        </div>
      </section>

      {FEATURE_GROUPS.map((group) => (
        <section key={group.label} className="mkt-section" style={{ paddingTop: 40, paddingBottom: 24 }}>
          <div className="mkt-container">
            <div className="section-header wide-header fade-up" style={{ marginBottom: 8 }}>
              <div className="section-label"><span>{group.label}</span></div>
            </div>
            <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 20 }}>
              {group.slugs.map((slug) => {
                const f = byatSlug(slug);
                if (!f) return null;
                return (
                  <Link key={slug} href={`/features/${slug}`} style={{ textDecoration: "none" }}>
                    <div style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 24px", height: "100%" }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>{f.navLabel}</div>
                      <div style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.6 }}>{f.shortDescription}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box fade-up">
            <h2>See it on your own deck.</h2>
            <p>Upload an existing PowerPoint or start from scratch. The first one is free.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Build a Deck Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
