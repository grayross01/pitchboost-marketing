import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  alternates: { canonical: "/features/research-and-fact-checking" },
  title: "Research & Fact-Checking: AI Decks With Cited Sources",
  description:
    "PitchBoost researches your prospect while it writes, cites every stat with a real source link on the slide, and removes anything it cannot source. Review every claim before you send.",
  openGraph: {
    title: "Research & Fact-Checking: AI Decks With Cited Sources",
    description:
      "Live research on every generation, citations rendered on the slide, and a fact audit that shows where every claim came from before you hit send.",
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
    title: "Live prospect research",
    body: "While your deck generates, PitchBoost searches for what matters right now: the prospect's latest funding, product launches, and the market numbers for their industry. Fresh context a template deck will never have, pulled in the minutes before your deck exists.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Citations on the slide",
    body: "Every stat the research turns up arrives with its source linked right on the slide, the way an analyst would present it. A citation next to a number tells your buyer you did the work. And when they click it, it holds up.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Nothing unsourced ships",
    body: "Most AI tools will happily invent a market size for you. PitchBoost refuses: a number that does not trace to your brief, your materials, or a cited source is removed automatically before the deck ever reaches you. No confident nonsense on slide two.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "The fact audit",
    body: "After generation, every checkable claim in the deck is listed with where it came from: your notes, your site, their site, or a linked source. Keep it, remove it with one click, or mark it as an example. You walk into the meeting knowing exactly what is on every slide and why.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

const BULLETS = [
  "Live web research on every generation, not a stale training snapshot",
  "Inline citations with real source links rendered on the slide",
  "Unsourced numbers are removed automatically before you see the deck",
  "Fact audit lists every claim with its origin: your notes, your site, their site, or a source",
  "One-click keep, remove, or mark-as-example on any claim",
  "Your own numbers from notes and uploaded decks are always trusted as yours",
];

const RELATED = [
  { label: "AI Deck Builder", desc: "Generate personalized decks from scratch", href: "/features/ai-deck-builder" },
  { label: "Upload & Redesign", desc: "Polish your existing PPT or PPTX", href: "/features/upload-and-redesign" },
  { label: "Viewer Analytics", desc: "Know which slides your prospect read", href: "/features/viewer-analytics" },
  { label: "Publishing & Sharing", desc: "Links, PDF, PPT export, and privacy controls", href: "/features/publishing-and-sharing" },
];

export default function ResearchAndFactCheckingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Research & Fact-Checking: AI Decks With Cited Sources",
    description:
      "PitchBoost researches your prospect while it writes, cites every stat on the slide, and removes anything it cannot source.",
    url: "https://pitchboost.ai/features/research-and-fact-checking",
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://pitchboost.ai/#features" },
      { "@type": "ListItem", position: 3, name: "Research & Fact-Checking", item: "https://pitchboost.ai/features/research-and-fact-checking" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href="/#features" style={{ color: "inherit", textDecoration: "none" }}>Features</Link>
              <span style={{ opacity: 0.4 }}>→</span>
              <span>Research &amp; Fact-Checking</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 760, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Every number sourced. Every source on the slide.
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto 36px", lineHeight: 1.7 }}>
            PitchBoost researches your prospect while it writes: recent news, funding, market stats. Anything it adds gets a citation your buyer can click. Anything it cannot source never makes the deck. Then a fact audit shows you where every claim came from before you send.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Generate a Researched Deck</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {["Live research on every generation", "Citations rendered on the slide", "Fact audit before you send"].map((item) => (
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
            <div className="section-label"><span>What&apos;s included</span></div>
            <h2>AI research you can actually put in front of a buyer</h2>
            <p>The fastest way to lose a deal is a number you cannot back up. PitchBoost does the research, shows its sources, and refuses to ship the rest. Your deck reads like someone did their homework, because something did.</p>
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

      {/* Bullets */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Capabilities</span></div>
            <h2>Everything in the research and fact system</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginTop: 40, maxWidth: 800, margin: "40px auto 0" }}>
            {BULLETS.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "16px 20px" }}>
                <CheckIcon />
                <span style={{ fontSize: 14, color: "var(--ds-text-primary)", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Keep exploring</span></div>
            <h2>More ways PitchBoost helps you win</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 40, maxWidth: 860, margin: "40px auto 0" }}>
            {RELATED.map(({ label, desc, href }) => (
              <Link key={label} href={href} style={{ textDecoration: "none" }}>
                <div style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "20px 22px" }}>
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
            <h2>Send decks you can defend.</h2>
            <p>Real research, real citations, and a claim-by-claim audit before anything goes out. Your prospect can challenge any number on the deck. That is the point.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Build a Deck With Receipts</a>
          </div>
        </div>
      </section>
    </>
  );
}
