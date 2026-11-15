import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS } from "@/lib/answers";
import { siteTitle } from "@/lib/site-title";

export const metadata: Metadata = {
  title: siteTitle("Straight Answers About Pitch Decks and Redesigns"),
  description: "Short, numbered answers to the questions people ask about pitch deck cost, length, timing and design, each with the number in the first sentence.",
  alternates: { canonical: "/answers" },
};

export default function AnswersHub() {
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PitchBoost answers",
    itemListElement: ANSWERS.map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.question, url: `https://pitchboost.ai/answers/${a.slug}` })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(list) }} />
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label"><span>Answers</span></div>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 760, margin: "0 auto 20px", lineHeight: 1.15 }}>Straight answers about pitch decks</h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>Cost, length, timing and what professional actually means. The number is in the first sentence; the reasoning follows.</p>
        </div>
      </section>
      <section className="mkt-section">
        <div className="mkt-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 960, margin: "0 auto" }}>
            {ANSWERS.map((a) => (
              <Link key={a.slug} href={`/answers/${a.slug}`} style={{ textDecoration: "none" }}>
                <div className="industry-card" style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 30px", height: "100%" }}>
                  <h2 style={{ fontSize: 18, fontWeight: 800, color: "var(--ds-dark)", marginBottom: 12, lineHeight: 1.3 }}>{a.question}</h2>
                  <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "0 0 16px" }}>{a.shortAnswer.split(". ")[0]}.</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#1F6B6B" }}>Read the answer</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
