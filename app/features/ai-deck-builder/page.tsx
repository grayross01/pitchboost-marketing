import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  title: "AI Deck Builder — Personalized Pitch Decks, Presentations & Proposals | PitchBoost",
  description:
    "PitchBoost's AI deck builder generates personalized pitch decks, sales presentations, and proposals in under 60 seconds — written for your specific prospect, not a generic template.",
  openGraph: {
    title: "AI Deck Builder — Personalized Pitch Decks, Presentations & Proposals | PitchBoost",
    description:
      "PitchBoost's AI deck builder generates personalized pitch decks, sales presentations, and proposals in under 60 seconds — written for your specific prospect, not a generic template.",
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

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0 }}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const OUTPUT_TYPES = [
  {
    label: "Pitch Decks",
    description:
      "Structured sales decks built around your prospect's specific pain points, priorities, and buying criteria — not a standard capabilities overview with their name swapped in.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Sales Presentations",
    description:
      "Walkthrough-ready presentations with a narrative arc built for the specific conversation — whether that's a discovery call, a product demo, or a final decision meeting.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: "Business Proposals",
    description:
      "Professional proposals that frame your approach, your experience, and your pricing in the context of this client's actual situation — not a repurposed template from your last engagement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    label: "One-Sheets & Buyer FAQs",
    description:
      "Concise sales leave-behinds and FAQ documents that address the specific objections and questions most likely to come up with this prospect — built from what you know about their situation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const GENERIC_PROBLEMS = [
  "Same deck sent to every prospect with the logo and name swapped",
  "Capabilities overview that doesn't connect to their specific situation",
  "Generic pain points that may not apply to this buyer at all",
  "Hours of manual editing to make a template feel remotely personalized",
  "No way to know whether it resonated or got filed away unread",
];

const PITCHBOOST_WINS = [
  "Copy written specifically for this prospect's business, priorities, and deal",
  "Structure determined by the type of conversation, not the template",
  "Pain points pulled from your prospect context and deal notes",
  "Your credentials positioned around what this specific buyer cares about",
  "Fully built in under 60 seconds — not a starting point you have to gut",
];

const STEPS = [
  {
    step: 1,
    title: "Tell PitchBoost about the deal",
    body: "Add your brand assets, existing credentials, and supporting docs once. Then for each deck, describe the prospect — their company, their priorities, the opportunity, and what you want them to believe by the end of the presentation.",
  },
  {
    step: 2,
    title: "Get a deck built around this specific opportunity",
    body: "PitchBoost structures the presentation, writes the copy, applies your branding, and organizes your supporting material in the order most likely to land with this buyer — all in under 60 seconds.",
  },
  {
    step: 3,
    title: "Edit, share, and track how it lands",
    body: "Refine any slide with AI guidance. Share a branded link, export to PDF or PPT, and track exactly who opened it, which slides held their attention, and when they came back for a second look.",
  },
];

const WHO_ITS_FOR = [
  {
    title: "B2B Sales Teams",
    body: "Give every rep a personalized pitch deck for every deal — without the hours of manual customization. Go from CRM notes to a finished deck before the next call.",
    href: "/industries/b2b-sales",
  },
  {
    title: "Agencies & Consultancies",
    body: "Win new clients with proposals that feel built specifically for them. Show up to every pitch looking like you've already done your homework on their business.",
    href: "/industries/agencies",
  },
  {
    title: "Founders & Startups",
    body: "Pitch investors, customers, and partners with presentations that look like you have a full team behind you — without the design agency budget.",
    href: "/industries/startups",
  },
  {
    title: "Contractors & Service Businesses",
    body: "Win more bids with polished proposals that explain your process and your fit for this specific job — not a price quote on a standard form.",
    href: "/industries/home-services",
  },
];

const CAPABILITY_BULLETS = [
  "Generate a full pitch deck from a prospect URL and a few notes",
  "Choose your output format — pitch deck, proposal, one-sheet, or buyer FAQ",
  "Apply your brand automatically — logo, colors, and voice, every time",
  "Edit any slide or the full deck using plain-language AI instructions",
  "Export as PDF or PPT, or share as a live branded link",
  "Track who opened it, which slides they spent time on, and when they came back",
];

export default function AIDeckBuilderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Deck Builder — Personalized Pitch Decks, Presentations & Proposals",
    description:
      "PitchBoost's AI deck builder generates personalized pitch decks, sales presentations, and proposals in under 60 seconds.",
    url: "https://pitchboost.ai/features/ai-deck-builder",
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href="/#features" style={{ color: "inherit", textDecoration: "none" }}>Features</Link>
              <span style={{ opacity: 0.4 }}>→</span>
              <span>AI Deck Builder</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 820, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            The AI deck builder that writes for this deal, not every deal
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Describe your prospect, your opportunity, and your goals. PitchBoost generates a fully structured pitch deck, presentation, or proposal in under 60 seconds — with copy written for this specific buyer, not a template you have to gut and rewrite.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Building Free</a>
            <Link href="/#sample-deck" className="btn btn-ghost btn-lg">See a sample deck</Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {[
              "Personalized to this prospect's specific situation",
              "Fully structured in under 60 seconds",
              "Your brand, automatically applied",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--ds-text-secondary)", fontWeight: 500 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1F6B6B", display: "inline-block", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Output Types ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What you can build</span></div>
            <h2>One builder. Every format you need to win the deal.</h2>
            <p>
              PitchBoost isn&apos;t limited to one output type. Whether you need a pitch deck for a sales call, a proposal for a new client, or a one-sheet to leave behind after the meeting, the AI builds each format around the specific opportunity in front of you.
            </p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 48 }}>
            {OUTPUT_TYPES.map(({ label, description, icon }) => (
              <div key={label} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 28px" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, rgba(31,107,107,0.1), rgba(232,102,90,0.08))", display: "flex", alignItems: "center", justifyContent: "center", color: "#1F6B6B", marginBottom: 16 }}>
                  {icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 10 }}>{label}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Generic vs PitchBoost ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>The problem</span></div>
            <h2>Most decks fail because they weren&apos;t built for the person reading them</h2>
            <p>
              A pitch deck, presentation, or proposal that sounds generic tells your prospect one thing: you send this to everyone. Buyers can tell when the materials weren&apos;t built for them — and so do the win rates.
            </p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48, maxWidth: 920, margin: "48px auto 0" }}>
            <div style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 20 }}>The generic approach</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {GENERIC_PROBLEMS.map((p) => (
                  <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <XIcon />
                    <span style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.5 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "linear-gradient(135deg, rgba(31,107,107,0.05), rgba(232,102,90,0.03))", border: "1px solid rgba(31,107,107,0.25)", borderRadius: 16, padding: "28px 32px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1F6B6B", marginBottom: 20 }}>With PitchBoost</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {PITCHBOOST_WINS.map((w) => (
                  <div key={w} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckIcon />
                    <span style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.5 }}>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>How it works</span></div>
            <h2>From deal notes to a deck worth sending — in three steps</h2>
            <p>
              No blank slides. No templates to gut. No waiting on a designer. PitchBoost handles the structure, the copy, and the branding — you handle the deal.
            </p>
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720, margin: "48px auto 0" }}>
            {STEPS.map(({ step, title, body }) => (
              <div key={step} style={{ display: "flex", gap: 24, alignItems: "flex-start", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #1F6B6B, #E8665A)", color: "white", fontWeight: 800, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{step}</div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What&apos;s included</span></div>
            <h2>Everything you need from first draft to sent</h2>
            <p>The AI deck builder is the starting point for every PitchBoost workflow — from generation through editing, exporting, sharing, and tracking.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14, marginTop: 48, maxWidth: 860, margin: "48px auto 0" }}>
            {CAPABILITY_BULLETS.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "16px 20px" }}>
                <CheckIcon />
                <span style={{ fontSize: 14, color: "var(--ds-text-primary)", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Who it&apos;s for</span></div>
            <h2>Built for anyone who sells, pitches, or proposes</h2>
            <p>If winning the deal depends on your materials reflecting the specific situation in the room, PitchBoost is built for you.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 48 }}>
            {WHO_ITS_FOR.map(({ title, body, href }) => (
              <div key={title} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "24px 28px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "0 0 16px" }}>{body}</p>
                <Link href={href} style={{ fontSize: 13, fontWeight: 600, color: "#1F6B6B", textDecoration: "none" }}>See how it works →</Link>
              </div>
            ))}
          </div>
          <div className="fade-up" style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/industries" style={{ fontSize: 14, fontWeight: 600, color: "#1F6B6B", textDecoration: "none" }}>
              Explore all industry pages →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box fade-up">
            <h2>Stop sending the same deck twice.</h2>
            <p>Generate your first personalized pitch deck, presentation, or proposal free — no design skills required, no credit card needed.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Building Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
