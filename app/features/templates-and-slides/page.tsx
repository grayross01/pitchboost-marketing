import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  title: "Templates & Saved Slides — Reuse Your Best Work | PitchBoost",
  description:
    "Save any deck as a reusable template or save individual slides to a library. Build once, reuse for every new prospect — with AI personalization applied each time.",
  openGraph: {
    title: "Templates & Saved Slides — Reuse Your Best Work | PitchBoost",
    description:
      "Save any deck as a reusable template or save individual slides to a library. Build once, reuse for every new prospect.",
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

const FEATURES = [
  {
    title: "Template library",
    body: "Save any completed deck as a template — the structure, the slide order, the section logic — and use it as the starting point for your next build. PitchBoost personalizes the copy for each new prospect while keeping the framework you've refined.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Saved slide library",
    body: "Some slides should appear in every deck — a specific case study, a team credentials slide, a pricing overview. Save individual slides to your library and insert them into any new deck without rebuilding or reformatting.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
      </svg>
    ),
  },
  {
    title: "Shared team libraries",
    body: "Templates and saved slides are available to your entire team — not locked to the person who built them. Everyone pitches from the same approved baseline, and quality stays consistent whether a rep builds their own deck or uses a team template.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    step: 1,
    title: "Build and refine your deck",
    body: "Use the AI deck builder to create a presentation you're happy with — the structure, the flow, the sections. Refine it until it represents how you want to pitch.",
  },
  {
    step: 2,
    title: "Save it as a template or save individual slides",
    body: "Save the full deck as a reusable template, or pick specific slides to add to your slide library. Both are available to you and your team immediately.",
  },
  {
    step: 3,
    title: "Start every new deck from what's already worked",
    body: "When building a new deck for a new prospect, choose your template as the starting point. PitchBoost keeps the structure and personalizes the copy for the new opportunity — no starting over.",
  },
];

const BULLETS = [
  "Save any deck as a named, reusable template",
  "Save individual slides to a shared library",
  "Insert saved slides into any new deck",
  "AI personalizes template content for each new prospect",
  "Templates and slides shared across your whole team",
  "Edit templates without affecting existing decks built from them",
];

const RELATED = [
  { label: "AI Deck Builder", desc: "Generate personalized decks from scratch", href: "/features/ai-deck-builder" },
  { label: "Brand & Image Library", desc: "Keep your brand consistent", href: "/features/brand-and-images" },
  { label: "Team & Permissions", desc: "Manage who can access what", href: "/features/team-and-permissions" },
  { label: "Output Types", desc: "Pitch decks, proposals, one-sheets, and more", href: "/features/output-types" },
];

export default function TemplatesAndSlidesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Templates & Saved Slides — Reuse Your Best Work",
    description: "Save any deck as a reusable template or save individual slides to a library. Build once, reuse for every new prospect.",
    url: "https://pitchboost.ai/features/templates-and-slides",
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
              <span>Templates &amp; Saved Slides</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 760, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Build your best pitch once. Reuse it for every prospect.
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Save any deck as a reusable template and save individual slides to a shared library. PitchBoost personalizes the content for each new prospect — so you compound the work you&apos;ve already done instead of starting from scratch every time.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Building Free</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {["Save full decks as templates", "Save individual slides to a library", "Shared across your whole team"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--ds-text-secondary)", fontWeight: 500 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1F6B6B", display: "inline-block", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>How it works</span></div>
            <h2>Two libraries that compound your best work</h2>
            <p>Every deck you build and every slide you create is an asset. Templates and the slide library turn that work into a foundation the whole team builds from.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 48 }}>
            {FEATURES.map(({ title, body, icon }) => (
              <div key={title} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 28px" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, rgba(31,107,107,0.1), rgba(232,102,90,0.08))", display: "flex", alignItems: "center", justifyContent: "center", color: "#1F6B6B", marginBottom: 16 }}>
                  {icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>The workflow</span></div>
            <h2>From first deck to a library that scales</h2>
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720, margin: "48px auto 0" }}>
            {STEPS.map(({ step, title, body }) => (
              <div key={step} style={{ display: "flex", gap: 24, alignItems: "flex-start", background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
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

      {/* Bullets */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What&apos;s included</span></div>
            <h2>Everything in the template and slide system</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginTop: 40, maxWidth: 800, margin: "40px auto 0" }}>
            {BULLETS.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "16px 20px" }}>
                <CheckIcon />
                <span style={{ fontSize: 14, color: "var(--ds-text-primary)", lineHeight: 1.6 }}>{item}</span>
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
            <h2>Stop starting from scratch.</h2>
            <p>Build a deck worth keeping, save it as a template, and let PitchBoost personalize it for every new prospect.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Building Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
