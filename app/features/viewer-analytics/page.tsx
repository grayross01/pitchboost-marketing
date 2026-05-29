import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  title: "Viewer Analytics — Know How Your Pitch Deck Landed | PitchBoost",
  description:
    "See who opened your deck, which slides they spent time on, and when they came back for a second look. Follow up at the right moment with the right message.",
  openGraph: {
    title: "Viewer Analytics — Know How Your Pitch Deck Landed | PitchBoost",
    description:
      "See who opened your deck, which slides they spent time on, and when they came back for a second look.",
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

const METRICS = [
  {
    title: "Who opened it and when",
    body: "Know the moment your prospect opens your deck — so you can follow up while it&apos;s top of mind. If they haven&apos;t opened it in three days, you know to follow up differently than if they just finished reading it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Slide-by-slide time spent",
    body: "See exactly which slides held your prospect&apos;s attention and which ones they skimmed past. If they spent four minutes on your pricing slide, that&apos;s a signal. If they skipped past your case studies, that&apos;s a different signal.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Return visits",
    body: "Know when your prospect comes back to the deck for a second or third look. Return visits are one of the strongest buying signals — and they tell you when to reach out and what to emphasize.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-3.51" />
      </svg>
    ),
  },
  {
    title: "Completion rate",
    body: "See what percentage of your deck each viewer actually read. A high completion rate on a long deck is meaningful. A low rate tells you something about the deck, the audience, or the timing of the send.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const FOLLOWUP_SCENARIOS = [
  {
    signal: "They just opened it",
    action: "Follow up within the hour — the deck is fresh and you&apos;re top of mind.",
  },
  {
    signal: "They spent 5+ minutes on pricing",
    action: "Lead your follow-up with pricing clarity and ROI — they&apos;re evaluating the investment.",
  },
  {
    signal: "They skipped the case studies",
    action: "Bring a more relevant example to the next conversation.",
  },
  {
    signal: "They came back three days later",
    action: "Someone new is reviewing it — find out who and whether they need a separate conversation.",
  },
];

const BULLETS = [
  "See every view — time, device, and duration",
  "Slide-by-slide time tracking across the full deck",
  "Return visit notifications",
  "Completion rate per viewer and per deck",
  "Analytics for all your decks in one dashboard",
  "Works automatically — no setup required per deck",
];

const RELATED = [
  { label: "Publishing & Sharing", desc: "Links, PDF, PPT, custom domains", href: "/features/publishing-and-sharing" },
  { label: "AI Deck Builder", desc: "Generate personalized decks from scratch", href: "/features/ai-deck-builder" },
  { label: "Team & Permissions", desc: "Share analytics access with your team", href: "/features/team-and-permissions" },
  { label: "Output Types", desc: "Pitch decks, proposals, one-sheets, and more", href: "/features/output-types" },
];

export default function ViewerAnalyticsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Viewer Analytics — Know How Your Pitch Deck Landed",
    description: "See who opened your deck, which slides they spent time on, and when they came back for a second look.",
    url: "https://pitchboost.ai/features/viewer-analytics",
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
              <span>Viewer Analytics</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 760, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Stop guessing. Know exactly how your deck landed.
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Every time someone opens your deck, PitchBoost tracks who viewed it, which slides held their attention, how long they spent, and when they came back. Follow up with the right message at exactly the right moment — based on what they actually read.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Tracking Free</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {["Who opened it and when", "Slide-by-slide time tracking", "Return visit notifications"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--ds-text-secondary)", fontWeight: 500 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1F6B6B", display: "inline-block", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What you can track</span></div>
            <h2>Four signals that change how you follow up</h2>
            <p>Sending a deck without analytics is like making a call and hanging up before they answer. PitchBoost tells you what happened after you hit send — so you know what to do next.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 48 }}>
            {METRICS.map(({ title, body, icon }) => (
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

      {/* Follow-up scenarios */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>How to use it</span></div>
            <h2>What the signals tell you — and what to do next</h2>
            <p>Analytics are only useful if you know what to do with them. Here&apos;s how to turn viewer data into better follow-ups.</p>
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 48, maxWidth: 720, margin: "48px auto 0" }}>
            {FOLLOWUP_SCENARIOS.map(({ signal, action }) => (
              <div key={signal} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#1F6B6B", marginBottom: 6 }}>Signal</div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--ds-text-primary)", margin: 0, lineHeight: 1.5 }}>{signal}</p>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ds-text-tertiary)", marginBottom: 6 }}>What to do</div>
                  <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", margin: 0, lineHeight: 1.5 }}>{action}</p>
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
            <h2>Everything in viewer analytics</h2>
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
            <h2>Follow up smarter. Close more deals.</h2>
            <p>Build your first personalized deck free and see exactly how it lands — every view, every slide, every return visit.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Tracking Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
