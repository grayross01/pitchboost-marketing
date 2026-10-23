import type { Metadata } from "next";
import Link from "next/link";
import MakerClient from "./maker-client";

const TITLE = "Free AI Presentation Maker, No Sign-Up | PitchBoost";
const DESCRIPTION =
  "Type what your presentation is about and get a designed deck in about two minutes, free and with no account. Lessons, reports, talks and pitches, any language.";
const URL = "https://pitchboost.ai/tools/free-ai-presentation-maker";

export const metadata: Metadata = {
  alternates: { canonical: "/tools/free-ai-presentation-maker" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: "Free AI presentation maker, no sign-up", description: DESCRIPTION, url: URL },
};

const FAQ = [
  {
    q: "Is it really free, with no sign-up?",
    a: "Yes. Type what the presentation is about and a designed deck appears in about two minutes, hosted at a link you can open anywhere. No account, no email, no card. Each connection gets two a day, and the deck carries a small PitchBoost credit.",
  },
  {
    q: "How is this different from making it with an account?",
    a: "The free tool makes a quick version: a clean design, no research and no brand. A free account builds the full version: your colors and logo from a website, figures checked and cited, any slide editable, and your first deck each month free. Downloads take Starter at $7 a month or $9 once for that deck.",
  },
  {
    q: "How long does the link work?",
    a: "Seven days. Sign up from the deck's own banner to keep it in your account, where you can edit it, share it and see who opened it.",
  },
  {
    q: "Can I download it as PowerPoint?",
    a: "Not from the free tool. Keep the deck by signing up, then download it as PowerPoint, PDF or Google Slides with a paid plan or $9 once for that one deck.",
  },
  {
    q: "What kinds of presentations can it make?",
    a: "Lessons and lectures, class presentations, reports and updates, talks, and sales or investor pitches, in any language. Say who it is for and how long it should be, and it shapes the deck to fit: a lesson ends on takeaways and questions, a pitch on a next step.",
  },
  {
    q: "Is what I type kept?",
    a: "Your prompt is saved with the deck so the link works, and it becomes the deck's title. Leave out anything private.",
  },
];

export default function FreePresentationMakerPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PitchBoost Free AI Presentation Maker",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: URL,
    description: DESCRIPTION,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://pitchboost.ai/tools" },
      { "@type": "ListItem", position: 3, name: "Free AI Presentation Maker", item: URL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{ padding: "120px 0 40px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label"><span>Free tool, no sign-up</span></div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 780, margin: "0 auto 18px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Make a presentation free. No account, no card, no catch you need to read twice.
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Say what it is about and who it is for. A designed deck appears in about two minutes, shaped for the job: a lesson, a report, a talk or a pitch.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 64px", background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <MakerClient />
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What you get</span></div>
            <h2>A real deck, not a mockup</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginTop: 40 }}>
            {[
              { t: "Shaped for the purpose", d: "Lessons end on takeaways and questions, reports lead with the result, pitches end on a next step. Only pitches get a sales ask." },
              { t: "Hosted at a link", d: "Open it on any laptop or phone, present from the browser, or send the link. It works for seven days." },
              { t: "Any language", d: "Write the prompt in Spanish, Arabic or Vietnamese and the deck comes back in it, right-to-left scripts included." },
              { t: "Keep it with a free account", d: "Sign up from the deck to keep it, edit any slide and make the full version in your brand. Your first deck each month is free." },
            ].map(({ t, d }) => (
              <div key={t} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 24px" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{t}</div>
                <div style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65 }}>{d}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--ds-text-secondary)", marginTop: 28 }}>
            Already have slides? The <Link href="/tools/redesign-preview" style={{ color: "#1F6B6B" }}>free redesign preview</Link> rebuilds two of them, no account either. Or see <Link href="/ai-presentation-maker" style={{ color: "#1F6B6B" }}>how PitchBoost builds each kind of presentation</Link>.
          </p>
        </div>
      </section>

      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>FAQ</span></div>
            <h2>Questions people ask</h2>
          </div>
          <div className="fade-up" style={{ marginTop: 40, display: "grid", gap: 12 }}>
            {FAQ.map(({ q, a }) => (
              <details key={q} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "18px 22px" }}>
                <summary style={{ fontWeight: 600, fontSize: 15, color: "var(--ds-text-primary)", cursor: "pointer" }}>{q}</summary>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, marginTop: 12, marginBottom: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
