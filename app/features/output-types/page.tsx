import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  title: "Output Types — Pitch Decks, Proposals, One-Sheets & More | PitchBoost",
  description:
    "PitchBoost builds the right format for every sales situation — pitch decks, business proposals, one-sheets, buyer FAQs, and more. Each output is structured for its specific purpose and personalized to your prospect.",
  openGraph: {
    title: "Output Types — Pitch Decks, Proposals, One-Sheets & More | PitchBoost",
    description:
      "PitchBoost builds the right format for every sales situation — pitch decks, business proposals, one-sheets, buyer FAQs, and more.",
    images: [{ url: "https://pitchboost.ai/og-image.png", width: 1310, height: 820 }],
  },
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, color: "#1F6B6B" }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const OUTPUT_TYPES = [
  {
    label: "Pitch Decks",
    when: "Best for: sales calls, demos, and first meetings",
    description:
      "A structured deck that walks your prospect through the problem, your solution, why you're the right fit, and what happens next. PitchBoost builds the narrative around this specific buyer — their industry, their pain points, and what they've told you matters.",
    bullets: [
      "Problem/solution narrative tailored to this prospect",
      "Capability highlights most relevant to their situation",
      "Case studies matched to their industry or company size",
      "Clear next step and call to action",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Sales Presentations",
    when: "Best for: walkthroughs, product demos, and executive reviews",
    description:
      "A longer-form presentation designed to be walked through live — with a narrative that builds as the meeting progresses. PitchBoost structures the flow for the specific type of conversation you're having, whether that's a discovery call, a demo, or a final review.",
    bullets: [
      "Flow designed for a live walkthrough, not passive reading",
      "Discovery-aligned framing based on what you know about the prospect",
      "Supporting data and proof points positioned for this audience",
      "Executive-ready or technical-depth versions based on who's in the room",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: "Business Proposals",
    when: "Best for: new client pitches, RFP responses, and service engagements",
    description:
      "A professional proposal that frames your approach, your experience, your process, and your pricing in the context of this client&apos;s specific situation. Agencies, consultancies, and service businesses use this to win engagements without spending a day on each document.",
    bullets: [
      "Scope and approach framed around this client's stated needs",
      "Relevant credentials and past work highlighted for their industry",
      "Clear investment and engagement structure",
      "Professional enough to stand alone after the meeting",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    label: "One-Sheets",
    when: "Best for: leave-behinds, email attachments, and follow-ups",
    description:
      "A single-page summary of why you&apos;re the right fit for this opportunity — designed to be shared after a meeting or attached to an email. Concise, visually clean, and personalized to reinforce the specific points that came up in the conversation.",
    bullets: [
      "Single-page format optimized for quick reading",
      "Highlights the most relevant capabilities for this prospect",
      "Works as a standalone leave-behind or email attachment",
      "Consistent with the full deck in brand and messaging",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    label: "Buyer FAQs",
    when: "Best for: complex sales cycles, technical buyers, and multi-stakeholder deals",
    description:
      "A structured FAQ document that anticipates and answers the questions this specific prospect is most likely to have — based on their industry, their role, and the deal context you provide. Helps you get ahead of objections before they stall the deal.",
    bullets: [
      "Questions anticipated based on prospect context and deal stage",
      "Answers written in plain language, not sales language",
      "Addresses technical, commercial, and implementation concerns",
      "Shareable as a link or PDF alongside the main deck",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const RELATED = [
  { label: "AI Deck Builder", desc: "Generate any format from scratch", href: "/features/ai-deck-builder" },
  { label: "Upload & Redesign", desc: "Polish your existing PPT or PPTX", href: "/features/upload-and-redesign" },
  { label: "Publishing & Sharing", desc: "Links, PDF, PPT, custom domains", href: "/features/publishing-and-sharing" },
  { label: "Templates & Saved Slides", desc: "Save and reuse your best work", href: "/features/templates-and-slides" },
];

export default function OutputTypesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Output Types — Pitch Decks, Proposals, One-Sheets & More",
    description: "PitchBoost builds the right format for every sales situation — pitch decks, proposals, one-sheets, buyer FAQs, and more.",
    url: "https://pitchboost.ai/features/output-types",
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href="/#features" style={{ color: "inherit", textDecoration: "none" }}>Features</Link>
              <span style={{ opacity: 0.4 }}>→</span>
              <span>Output Types</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 780, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            The right format for every deal — built for the specific conversation
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Different opportunities call for different materials. PitchBoost builds pitch decks, sales presentations, business proposals, one-sheets, and buyer FAQs — each structured for its purpose and personalized to the prospect in front of you.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Building Free</a>
            <Link href="/features/ai-deck-builder" className="btn btn-ghost btn-lg">How the builder works</Link>
          </div>
        </div>
      </section>

      {/* Output types */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Formats</span></div>
            <h2>Five formats. One platform. Every deal covered.</h2>
            <p>PitchBoost knows the difference between a pitch deck and a proposal — and builds each one with the structure, flow, and content that format actually needs.</p>
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 48 }}>
            {OUTPUT_TYPES.map(({ label, when, description, bullets, icon }) => (
              <div key={label} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "32px 36px", display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 28px" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg, rgba(31,107,107,0.1), rgba(232,102,90,0.08))", display: "flex", alignItems: "center", justifyContent: "center", color: "#1F6B6B", flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
                    <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--ds-text-primary)", margin: 0 }}>{label}</h2>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#1F6B6B", background: "rgba(31,107,107,0.08)", padding: "3px 10px", borderRadius: 100 }}>{when}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "0 0 16px" }}>{description}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 8 }}>
                    {bullets.map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <CheckIcon />
                        <span style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.5 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Keep exploring</span></div>
            <h2>More ways PitchBoost helps you win</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 40, maxWidth: 860, margin: "40px auto 0" }}>
            {RELATED.map(({ label, desc, href }) => (
              <Link key={label} href={href} style={{ textDecoration: "none" }}>
                <div style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "20px 22px" }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.5 }}>{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box fade-up">
            <h2>Every format you need. Every prospect covered.</h2>
            <p>Build your first pitch deck, proposal, or one-sheet free — no design skills required, no credit card needed.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Building Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
