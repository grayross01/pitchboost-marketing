import type { Metadata } from "next";
import EvaluatorClient from "./evaluator-client";

export const metadata: Metadata = {
  alternates: { canonical: "/tools/deck-evaluator" },
  title: "Free Pitch Deck Evaluator | PitchBoost",
  description:
    "Upload your pitch deck and get an instant graded evaluation: clarity, narrative, persuasion, and credibility scores, your five highest-impact fixes, and every number your audience might challenge. Free, no account.",
  openGraph: {
    title: "Free Pitch Deck Evaluator",
    description:
      "Instant graded feedback on any .pptx: four scored dimensions, your five highest-impact fixes, and the claims to verify before you present.",
    images: [{ url: "https://pitchboost.ai/og-image.png", width: 1310, height: 820 }],
  },
};

const FAQ = [
  {
    q: "Is the deck evaluator really free?",
    a: "Yes. Upload a .pptx and get the graded report with no account and no payment. Entering an email unlocks the full fix list.",
  },
  {
    q: "Is my deck stored or used for training?",
    a: "No. The file is parsed in memory, evaluated, and discarded. Only the text-level report is kept so your shareable link works.",
  },
  {
    q: "What does the evaluation score?",
    a: "Four dimensions from the slide text: clarity, narrative structure, persuasion and specificity, and evidence and credibility. It also flags every numeric claim your audience could challenge, and measures slide hygiene like words per slide. It does not judge visual design from text alone.",
  },
  {
    q: "What file types are supported?",
    a: "PowerPoint .pptx up to 4MB. Using Google Slides or Keynote? Export to PowerPoint first. Bigger decks: create a free account, which has no size limit.",
  },
];

export default function DeckEvaluatorPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PitchBoost Deck Evaluator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://pitchboost.ai/tools/deck-evaluator",
    description:
      "Free instant pitch deck evaluation: graded scores for clarity, narrative, persuasion, and credibility, plus prioritized fixes.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://pitchboost.ai/tools" },
      { "@type": "ListItem", position: 3, name: "Deck Evaluator", item: "https://pitchboost.ai/tools/deck-evaluator" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{ padding: "120px 0 48px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label"><span>Free tool</span></div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 760, margin: "0 auto 18px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            How good is your pitch deck, really?
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto 34px", lineHeight: 1.7 }}>
            Upload your .pptx and get a graded evaluation in about twenty seconds: clarity, narrative, persuasion, and credibility, your five highest-impact fixes, and every number your audience might challenge.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 60px", background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <EvaluatorClient />
          <p style={{ textAlign: "center", fontSize: 13, color: "var(--ds-text-secondary)", marginTop: 18 }}>
            Your file is analyzed and discarded, never stored or used for training.
          </p>
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What you get</span></div>
            <h2>Feedback you can act on before the meeting</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginTop: 40 }}>
            {[
              { t: "A grade you can trust", d: "Four dimensions scored 0-100 by an AI trained on what makes decks land, calibrated so most real decks score in the 50s-70s. An A here means something." },
              { t: "Your five highest-impact fixes", d: "Not generic advice. Each fix references your actual slides, ordered by how much it would move the deck." },
              { t: "Claims your audience may challenge", d: "Every percentage, dollar figure, and count in your deck, listed so you can attach a source before someone asks for one." },
              { t: "Slide hygiene", d: "Words per slide, wall-of-text offenders, untitled slides, and how much of the deck carries visuals." },
            ].map(({ t, d }) => (
              <div key={t} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 24px" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{t}</div>
                <div style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>FAQ</span></div>
            <h2>Common questions</h2>
          </div>
          <div className="fade-up" style={{ marginTop: 32 }}>
            {FAQ.map((f) => (
              <div key={f.q} style={{ borderBottom: "1px solid var(--ds-border)", padding: "18px 0" }}>
                <div style={{ fontSize: 15.5, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>{f.q}</div>
                <div style={{ fontSize: 14.5, color: "var(--ds-text-secondary)", lineHeight: 1.65 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box fade-up">
            <h2>Do not just grade it. Fix it.</h2>
            <p>Upload the same deck to PitchBoost and get it back redesigned in your brand, personalized to your prospect, with every number backed by a source.</p>
            <a href="https://app.pitchboost.ai/signup?intent=rebuild&utm_source=deck_evaluator" className="btn btn-primary btn-lg">Rebuild Your Deck Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
