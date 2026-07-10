import type { Metadata } from "next";

/**
 * Ads landing page for real estate agents. Distinct from the data-driven
 * /industries/real-estate-agents SEO page: this one is conversion-first,
 * built to be the destination for paid campaigns. Three pillars agents care
 * about (win the listing, wow the client, close on time) plus the free
 * closing-timeline tool as a lead hook. Standard site chrome (nav/footer)
 * from the marketing layout.
 */

const APP_URL = "https://app.pitchboost.ai";
const START_FREE = `${APP_URL}/signup?intent=listing`;
const SAMPLE_DECK = `${APP_URL}/p/real-estate/sample`;
const TIMELINE_TOOL = "/tools/closing-timeline";

export const metadata: Metadata = {
  title: "Listing Presentations & Closing Timelines for Real Estate Agents | PitchBoost",
  description:
    "Win more listings and keep every deal on track. PitchBoost turns a Zillow or Redfin link into a polished, on-brand listing presentation in about a minute, builds a client-ready closing timeline, and tells you the moment a seller opens it. Start free.",
  alternates: { canonical: "/real-estate" },
  openGraph: {
    title: "PitchBoost for Real Estate Agents",
    description:
      "Win the listing. Wow the client. Close on time. AI listing presentations, branded closing timelines, and read receipts for every deal.",
    url: "https://pitchboost.ai/real-estate",
    type: "website",
  },
};

const cardStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #e5e9ef",
  borderRadius: 16,
  padding: "26px 24px",
  boxShadow: "0 1px 3px rgba(16,34,44,0.05)",
};

function StepBadge({ n }: { n: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 34,
        height: 34,
        borderRadius: "50%",
        background: "var(--ds-gradient)",
        color: "#fff",
        fontWeight: 800,
        fontSize: "0.95rem",
        flexShrink: 0,
      }}
    >
      {n}
    </span>
  );
}

const FAQS: { q: string; a: string }[] = [
  {
    q: "How does PitchBoost build a listing presentation?",
    a: "Paste a Zillow or Redfin link (or type the address), and PitchBoost pulls the property details and photos, then generates a complete, on-brand listing presentation: pricing story, marketing plan, comps, and your track record. You edit anything before you send it.",
  },
  {
    q: "Is it really branded to me?",
    a: "Yes. Add your name, brokerage, license, headshot, logo, and accent color once, and every presentation and client-facing page uses them automatically. Your clients see you, not us.",
  },
  {
    q: "What is the closing timeline tool?",
    a: "Enter the contract acceptance and closing dates and PitchBoost drafts every deadline in between: earnest money, inspection, appraisal, financing, walkthrough. Share a clean, branded page with your client (no login), and on paid plans turn on email reminders. There is a free version anyone can try.",
  },
  {
    q: "Can I tell if a seller actually looked at it?",
    a: "Yes. Send your presentation or timeline from PitchBoost and every recipient gets a personal link. You see who opened it, how long they spent, and get notified the moment it happens, so you follow up while you are top of mind.",
  },
  {
    q: "Do I need design skills or PowerPoint?",
    a: "No. Everything is generated for you and shares as a link. You can also export to PDF or PowerPoint if you want a file to hand over.",
  },
  {
    q: "Is there really a free plan?",
    a: "Yes. Start free, build your first presentation, and try the closing-timeline tool with no credit card. Upgrade when you are winning enough listings to want reminders, unlimited deals, and read receipts.",
  },
];

export default function RealEstateLandingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-orb" />
        <div className="hero-orb" />
        <div className="hero-orb" />
        <div className="mkt-container">
          <div className="fade-up">
            <div className="hero-badge">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg, #1F6B6B, #E8665A)", display: "inline-block" }} />
              Built for real estate agents
            </div>
          </div>

          <h1 className="fade-up fade-up-delay-1">
            Win the listing. Wow the client.<br />
            <span className="gradient-text">Close on time.</span>
          </h1>

          <p className="fade-up fade-up-delay-2">
            PitchBoost turns a property link into a polished, on-brand listing presentation in about a
            minute, drafts a client-ready closing timeline, and tells you the second a seller opens
            either one. Everything is branded to you, not us.
          </p>

          <div className="hero-actions fade-up fade-up-delay-3">
            <a href={START_FREE} className="btn btn-primary btn-lg">Build a listing presentation free</a>
            <a href={TIMELINE_TOOL} className="btn btn-ghost btn-lg">Try the free timeline tool</a>
          </div>

          <div className="hero-proof-bar fade-up fade-up-delay-4">
            <div className="proof-item">
              <span className="proof-icon">◎</span>
              <span>A presentation in<br />about a minute</span>
            </div>
            <div className="proof-sep" />
            <div className="proof-item">
              <span className="proof-icon">◎</span>
              <span>Your name, brokerage,<br />and colors on everything</span>
            </div>
            <div className="proof-sep" />
            <div className="proof-item">
              <span className="proof-icon">◎</span>
              <span>Know the moment<br />a seller opens it</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillar 1: Win the listing ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>Win the listing</span></div>
            <h2>Walk into the appointment with a presentation that closes</h2>
          </div>
          <div className="fade-up" style={{ maxWidth: 760, margin: "0 auto 30px", textAlign: "center" }}>
            <p style={{ fontSize: 15, color: "var(--ds-text-light)", lineHeight: 1.7 }}>
              Paste a Zillow or Redfin link (or just the address) and PitchBoost pulls the property
              details and photos, then writes a complete listing presentation: your pricing story,
              a marketing plan, comps, and your track record. Edit anything, then present it on your
              phone, screen-share it, or send the link ahead of time.
            </p>
          </div>
          <div className="fade-up">
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--ds-border)", background: "var(--ds-bg)", minHeight: 640 }}>
              <iframe
                src={SAMPLE_DECK}
                width="100%"
                height="640"
                frameBorder="0"
                allowFullScreen
                style={{ display: "block" }}
                title="Sample listing presentation"
              />
            </div>
            <div style={{ textAlign: "center", marginTop: 18 }}>
              <a href={SAMPLE_DECK} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600, color: "#1F6B6B", textDecoration: "none" }}>
                Open the full sample presentation →
              </a>
              <p style={{ fontSize: 12, color: "var(--ds-text-light)", marginTop: 8 }}>Fictional sample for a property on Linden Avenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillar 2: Closing timelines (lead hook) ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>Wow the client</span></div>
            <h2>Give every client a closing timeline with your name on it</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22, marginTop: 8 }}>
            <div className="fade-up" style={cardStyle}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--ds-dark)" }}>Two dates in, every deadline out</h3>
              <p style={{ fontSize: 14, color: "var(--ds-text-light)", lineHeight: 1.7, marginTop: 8 }}>
                Enter the contract and closing dates and PitchBoost drafts earnest money, inspection,
                appraisal, financing, and the final walkthrough. Edit any date, add your own steps.
              </p>
            </div>
            <div className="fade-up" style={cardStyle}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--ds-dark)" }}>Branded, and no login for them</h3>
              <p style={{ fontSize: 14, color: "var(--ds-text-light)", lineHeight: 1.7, marginTop: 8 }}>
                Share a clean page carrying your name, brokerage, and color. Your client just opens
                the link, sees a professional at work, and adds every date to their calendar.
              </p>
            </div>
            <div className="fade-up" style={cardStyle}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--ds-dark)" }}>Reminders that keep the deal moving</h3>
              <p style={{ fontSize: 14, color: "var(--ds-text-light)", lineHeight: 1.7, marginTop: 8 }}>
                On paid plans, turn on automatic email reminders (day of, days before) for you and
                your client, so no deadline is a surprise and nothing slips.
              </p>
            </div>
          </div>
          <div className="fade-up" style={{ textAlign: "center", marginTop: 28 }}>
            <a href={TIMELINE_TOOL} className="btn btn-primary btn-lg">Try the free timeline tool</a>
            <p style={{ fontSize: 13, color: "var(--ds-text-light)", marginTop: 10 }}>
              Free to use. Build one in under a minute and send it to a client today.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pillar 3: Deal rooms + tracking ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>Close on time</span></div>
            <h2>Stop guessing whether they read it</h2>
          </div>
          <div className="fade-up" style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 15, color: "var(--ds-text-light)", lineHeight: 1.7 }}>
              Send your presentation, timeline, and documents as one link. PitchBoost tells you who
              opened it, what they looked at, and how long they stayed, and pings you the moment it
              happens. Your clients can even ask a question right on the page. So instead of
              &ldquo;I think they saw it,&rdquo; you get &ldquo;the seller opened it twice this
              morning&rdquo; and you follow up while it is hot.
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>How it works</span></div>
            <h2>From a property link to a client-ready deliverable</h2>
          </div>
          <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { t: "Paste a link or address", d: "Drop in a Zillow or Redfin URL, or type the address. PitchBoost pulls the details and photos." },
              { t: "AI builds it, on your brand", d: "A complete listing presentation (and a closing timeline when you need one) in about a minute, in your colors." },
              { t: "Share, and watch it land", d: "Send one link. See who opened it, get notified instantly, and follow up at exactly the right moment." },
            ].map((s, i) => (
              <div key={i} className="fade-up" style={{ ...cardStyle, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <StepBadge n={i + 1} />
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--ds-dark)" }}>{s.t}</h3>
                  <p style={{ fontSize: 14, color: "var(--ds-text-light)", lineHeight: 1.7, marginTop: 4 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free tools ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>Free, no signup</span></div>
            <h2>Free tools you can use on your next appointment</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {[
              { href: "/tools/open-house-sign-in", t: "Open house sign-in + QR", d: "Print one QR for the door. Visitors scan, sign in, and every lead is emailed to you." },
              { href: "/tools/closing-timeline", t: "Closing timeline generator", d: "Two dates in, every deadline out. Share a clean, branded timeline with your client." },
              { href: "/tools/seller-net-sheet", t: "Seller net sheet calculator", d: "Show a seller what they net. Enter the numbers, hand over a branded breakdown." },
            ].map((x, i) => (
              <a key={i} href={x.href} className="fade-up" style={{ textDecoration: "none", ...cardStyle }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--ds-dark)" }}>{x.t}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-light)", lineHeight: 1.65, marginTop: 8 }}>{x.d}</p>
                <span style={{ display: "inline-block", marginTop: 12, fontSize: "0.9rem", fontWeight: 600, color: "#1F6B6B" }}>Open the tool →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 780 }}>
          <div className="section-header fade-up">
            <div className="section-label"><span>Questions</span></div>
            <h2>Everything agents ask before they start</h2>
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ ...cardStyle, padding: "0" }}>
                <summary
                  style={{
                    cursor: "pointer",
                    listStyle: "none",
                    padding: "18px 22px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--ds-dark)",
                  }}
                >
                  {f.q}
                </summary>
                <p style={{ padding: "0 22px 20px", margin: 0, fontSize: 14, color: "var(--ds-text-light)", lineHeight: 1.7 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="mkt-section cta-section">
        <div className="mkt-container" style={{ textAlign: "center" }}>
          <h2 className="fade-up" style={{ color: "#fff" }}>Your next listing appointment is coming. Be the agent who shows up ready.</h2>
          <p className="fade-up" style={{ color: "rgba(255,255,255,0.8)", maxWidth: 560, margin: "12px auto 22px", fontSize: 15, lineHeight: 1.7 }}>
            Start free, build your first presentation, and send a branded closing timeline today. No
            credit card, no design work, no PowerPoint.
          </p>
          <div className="hero-actions fade-up" style={{ justifyContent: "center" }}>
            <a href={START_FREE} className="btn btn-primary btn-lg">Start free</a>
            <a href={TIMELINE_TOOL} className="btn btn-ghost btn-lg">Try the timeline tool</a>
          </div>
        </div>
      </section>
    </>
  );
}
