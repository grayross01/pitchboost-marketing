import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  title: "Publishing & Sharing — Share Pitch Decks as Links, PDF, PPT & More | PitchBoost",
  description:
    "Publish your deck as a branded interactive link, export to PDF or PPT, host on your own custom domain, and control access with public, private, or password-protected settings.",
  openGraph: {
    title: "Publishing & Sharing — Share Pitch Decks as Links, PDF, PPT & More | PitchBoost",
    description:
      "Publish your deck as a branded link, export to PDF or PPT, host on your custom domain, and control who can view it.",
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

const SHARING_OPTIONS = [
  {
    title: "Branded shareable link",
    body: "Publish your deck as a live, interactive link your prospect opens in the browser — no download required, no account needed on their end. The link carries your branding and looks intentional, not like a Google Drive share.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "PDF export",
    body: "Export any deck as a PDF for email attachments, print leave-behinds, or situations where a live link isn't appropriate. The PDF preserves your layout and branding exactly as it appears in the interactive version.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    title: "PowerPoint export",
    body: "Export as a .pptx file when your prospect needs an editable version, when you&apos;re presenting from someone else&apos;s laptop, or when a deal requires submitting a file format. Everything transfers cleanly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Custom domain hosting",
    body: "Host your presentations on your own domain instead of a pitchboost.ai URL. Your prospect sees your brand URL in the address bar — not a third-party platform — which adds professionalism and reinforces trust at the moment they open it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const PRIVACY_OPTIONS = [
  {
    title: "Fully public",
    body: "Anyone with the link can view the deck. Best for presentations you want to be easily shareable or discoverable — like a product overview or a general capabilities deck.",
  },
  {
    title: "Private tokenized link",
    body: "The deck is accessible only via a unique, unguessable link. It doesn&apos;t appear in search results and can&apos;t be accessed without the exact URL. Best for prospect-specific pitches and proposals.",
  },
  {
    title: "Password protected",
    body: "Add a password to your deck for situations that require an additional layer of access control — confidential proposals, sensitive pricing information, or deals where you need to verify who&apos;s viewing.",
  },
];

const BULLETS = [
  "Publish as a live branded link — no download required",
  "Export to PDF, preserving all layout and branding",
  "Export to .pptx for editable PowerPoint delivery",
  "Host on your own custom domain",
  "Public, private tokenized, or password-protected access",
  "Revoke or update a link without resending",
];

const RELATED = [
  { label: "Viewer Analytics", desc: "Track who reads what and when", href: "/features/viewer-analytics" },
  { label: "AI Deck Builder", desc: "Generate personalized decks from scratch", href: "/features/ai-deck-builder" },
  { label: "Team & Permissions", desc: "Manage access across your team", href: "/features/team-and-permissions" },
  { label: "Brand & Image Library", desc: "Keep your brand consistent", href: "/features/brand-and-images" },
];

export default function PublishingAndSharingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Publishing & Sharing — Share Pitch Decks as Links, PDF, PPT & More",
    description: "Publish your deck as a branded link, export to PDF or PPT, host on your custom domain, and control who can view it.",
    url: "https://pitchboost.ai/features/publishing-and-sharing",
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
              <span>Publishing &amp; Sharing</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 780, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Professional delivery for every pitch, proposal, and presentation
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Publish a branded interactive link, export to PDF or PowerPoint, host on your own domain, and control exactly who can access it. Every format, every privacy setting — from the same place you built the deck.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Publish Your First Deck Free</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {["Link, PDF, or PPT", "Your domain, your brand", "Public, private, or password-protected"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--ds-text-secondary)", fontWeight: 500 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1F6B6B", display: "inline-block", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sharing options */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>How to share</span></div>
            <h2>Four ways to deliver your deck — all included</h2>
            <p>Different deals and different prospects call for different delivery methods. PitchBoost gives you all four without requiring different tools or workflows.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 48 }}>
            {SHARING_OPTIONS.map(({ title, body, icon }) => (
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

      {/* Privacy options */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Access control</span></div>
            <h2>Control exactly who can see your deck</h2>
            <p>Not every deck should be accessible to everyone. PitchBoost gives you three levels of access control so you can match the privacy of your materials to the sensitivity of the deal.</p>
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 48, maxWidth: 720, margin: "48px auto 0" }}>
            {PRIVACY_OPTIONS.map(({ title, body }) => (
              <div key={title} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "24px 28px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
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
            <h2>Everything in publishing and sharing</h2>
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
            <h2>Built, published, and in their inbox — in minutes.</h2>
            <p>Generate your first personalized pitch deck free and share it as a branded link, PDF, or PowerPoint.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Publish Your First Deck Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
