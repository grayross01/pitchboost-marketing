import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  title: "Upload & Redesign — Polish Any Existing Pitch Deck or Presentation | PitchBoost",
  description:
    "Upload your existing PPT or PPTX and PitchBoost redesigns it with your brand, cleans up the layout, and personalizes the content for your specific prospect — without losing the work you've already done.",
  openGraph: {
    title: "Upload & Redesign — Polish Any Existing Pitch Deck or Presentation | PitchBoost",
    description:
      "Upload your existing PPT or PPTX and PitchBoost redesigns it with your brand, cleans up the layout, and personalizes the content for your specific prospect.",
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

const WHAT_IT_DOES = [
  {
    title: "Clean up the layout and design",
    body: "PitchBoost applies consistent spacing, typography, and visual hierarchy to your existing slides — so the deck looks intentional and professional, not assembled slide by slide over three years.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Apply your brand automatically",
    body: "Your logo, colors, and fonts get applied across every slide. The result looks like your design team rebuilt it from scratch — without the turnaround time or the brief.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" /><path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" />
      </svg>
    ),
  },
  {
    title: "Personalize for your specific prospect",
    body: "Once the design is polished, PitchBoost rewrites and adapts the copy for the specific prospect you're pitching — so the content of your existing deck maps to their situation, not a generic audience.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const BEFORE = [
  "Good content buried in inconsistent, amateur-looking slides",
  "Off-brand colors, mismatched fonts, and awkward spacing",
  "Generic copy that wasn't written for the specific prospect",
  "Hours of work to manually redesign it for every new deal",
];

const AFTER = [
  "The same content, presented in a clean and polished layout",
  "Fully on-brand with your logo, colors, and design system",
  "Copy adapted for this prospect's situation and priorities",
  "Ready to send in minutes, not hours",
];

const STEPS = [
  {
    step: 1,
    title: "Upload your existing PPT or PPTX",
    body: "Drag in any existing PowerPoint file — a capabilities deck, a proposal template, a past pitch, whatever you've been working from. PitchBoost reads the content and structure.",
  },
  {
    step: 2,
    title: "Choose how much to change",
    body: "Tell PitchBoost whether you want a full redesign with brand applied, a layout cleanup only, or a full personalization pass for a specific prospect. You control how much the AI changes.",
  },
  {
    step: 3,
    title: "Get a polished, prospect-ready deck",
    body: "PitchBoost returns a redesigned version — clean layout, on-brand design, and copy adapted for the opportunity — ready to publish as a link, export as PDF, or download as PPT.",
  },
];

const BULLETS = [
  "Upload any .ppt or .pptx file",
  "Full brand application — logo, colors, fonts",
  "AI-assisted layout cleanup and visual consistency",
  "Optional prospect-specific copy adaptation",
  "Keep, edit, or regenerate any individual slide",
  "Export back to PPT, PDF, or share as a branded link",
];

const RELATED = [
  { label: "AI Deck Builder", desc: "Build a new deck from scratch", href: "/features/ai-deck-builder" },
  { label: "Brand & Image Library", desc: "Manage your brand assets", href: "/features/brand-and-images" },
  { label: "Publishing & Sharing", desc: "Links, PDF, PPT, custom domains", href: "/features/publishing-and-sharing" },
  { label: "Templates & Saved Slides", desc: "Save and reuse your best work", href: "/features/templates-and-slides" },
];

export default function UploadAndRedesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Upload & Redesign — Polish Any Existing Pitch Deck or Presentation",
    description: "Upload your existing PPT or PPTX and PitchBoost redesigns it with your brand and personalizes it for your prospect.",
    url: "https://pitchboost.ai/features/upload-and-redesign",
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
              <span>Upload &amp; Redesign</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 780, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Your existing deck, redesigned and ready to win
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto 36px", lineHeight: 1.7 }}>
            You have a deck with good content — it just doesn&apos;t look the part. Upload your existing PPT or PPTX and PitchBoost redesigns it with your brand, cleans up the layout, and personalizes it for your specific prospect — without starting over.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Try It Free</a>
            <Link href="/features/ai-deck-builder" className="btn btn-ghost btn-lg">Build from scratch instead</Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {["Keeps your existing content intact", "Applies your brand automatically", "Personalizes for each prospect"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--ds-text-secondary)", fontWeight: 500 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1F6B6B", display: "inline-block", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What it does</span></div>
            <h2>Three things PitchBoost does to your existing deck</h2>
            <p>Most teams have a deck that&apos;s been patched together over time — good bones, messy execution. PitchBoost fixes the execution without making you rebuild from scratch.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 48 }}>
            {WHAT_IT_DOES.map(({ title, body, icon }) => (
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

      {/* Before / After */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Before &amp; after</span></div>
            <h2>Same deck. Completely different impression.</h2>
            <p>The content that took you hours to write deserves a presentation that does it justice. PitchBoost closes the gap between what you know and how you look on paper.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48, maxWidth: 860, margin: "48px auto 0" }}>
            <div style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 20 }}>Your deck today</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {BEFORE.map((p) => (
                  <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <XIcon />
                    <span style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.5 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "linear-gradient(135deg, rgba(31,107,107,0.05), rgba(232,102,90,0.03))", border: "1px solid rgba(31,107,107,0.25)", borderRadius: 16, padding: "28px 32px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1F6B6B", marginBottom: 20 }}>After PitchBoost</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {AFTER.map((w) => (
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

      {/* How it works */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>How it works</span></div>
            <h2>Upload, choose, done</h2>
            <p>No rebuilding from scratch. No design back-and-forth. Upload what you have and get back something worth sending.</p>
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

      {/* Capabilities */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What&apos;s included</span></div>
            <h2>Everything the redesign covers</h2>
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
            <h2>Your best deck is the one you already have — polished.</h2>
            <p>Upload your existing presentation and get back a version that&apos;s branded, clean, and ready to send.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Try It Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
