import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  title: "API & MCP — Build Better Pitch Decks from Claude or Your AI Stack | PitchBoost",
  description:
    "Connect PitchBoost to Claude, Cursor, or your own AI workflows. Get professionally structured decks with your brand, templates, and team libraries — not raw AI slide files.",
  openGraph: {
    title: "API & MCP — Build Better Pitch Decks from Claude or Your AI Stack | PitchBoost",
    description:
      "Connect PitchBoost to Claude, Cursor, or your own AI workflows. Get professionally structured decks with your brand, templates, and team libraries — not raw AI slide files.",
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

const BENEFITS = [
  {
    title: "Your brand, automatically applied",
    body: "Every deck generated through the API or MCP uses your team's brand kit — logo, colors, fonts, and design system. You get a finished presentation, not a raw file you have to clean up.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
  {
    title: "Built on templates your team has already approved",
    body: "Generated decks pull from your saved template library — the same foundation your team uses when building in the app. Consistent structure, consistent quality, every time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Shared across your whole team",
    body: "Decks generated via API or MCP land in your team workspace — visible to admins, trackable in analytics, and sharable from a single place. Not siloed to whoever triggered the generation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Published with viewer analytics",
    body: "Every generated deck gets a shareable link with full tracking — who opened it, which slides they spent time on, and when they came back. You close the loop on every deck you send.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Output quality built over thousands of decks",
    body: "PitchBoost's prompts, structure, and output formats have been refined across thousands of real pitch decks, proposals, and presentations. You get that experience baked into every deck your AI generates — not a generic slide template.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Custom domain hosting included",
    body: "Decks publish to your custom domain — not a generic pitchboost.ai link. Prospects open a URL that looks like yours, with the professionalism that matches the quality of the deck.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const API_VS_MCP = [
  {
    label: "REST API",
    who: "Developers and integrations",
    description: "A standard REST API for triggering deck generation from any system that can make HTTP requests — CRMs, automation tools, internal apps, or outbound sequences.",
    bullets: [
      "Trigger personalized deck generation from any system",
      "Pass prospect context, deal notes, and output format",
      "Retrieve shareable links and analytics data",
      "Works with HubSpot, Salesforce, Clay, and custom tooling",
    ],
  },
  {
    label: "MCP Server",
    who: "Claude, Cursor, and AI-native workflows",
    description: "Connect the PitchBoost MCP server to Claude or any MCP-compatible tool and generate decks through natural language. Describe the deal — the AI handles the rest.",
    bullets: [
      "Works with Claude, Cursor, Windsurf, and other MCP tools",
      "Generate decks through plain language — no structured inputs",
      "Claude picks output format, structure, and content automatically",
      "No code required for end users once the server is configured",
    ],
  },
];

const BULLETS = [
  "REST API for programmatic deck and proposal generation",
  "MCP server compatible with Claude and MCP-compatible tools",
  "All output types: pitch decks, proposals, one-sheets, buyer FAQs",
  "Generated decks use your team's brand kit automatically",
  "Templates and saved slides available to API-generated decks",
  "Returns shareable links with full viewer analytics",
  "Decks visible to your whole team in the shared workspace",
  "Custom domain hosting on every generated deck",
];

const FAQS = [
  {
    q: "Why use PitchBoost's API instead of just prompting Claude directly?",
    a: "When you prompt Claude directly, you get text or a rough slide structure. When you use PitchBoost through the API or MCP, you get a finished, branded deck — your logo, your colors, your templates, published to a shareable link with viewer analytics. The AI handles content; PitchBoost handles everything that makes it look and function like a real sales asset.",
  },
  {
    q: "Do generated decks use my team's brand kit and templates?",
    a: "Yes. Every deck generated via API or MCP pulls from your team's brand kit and template library — the same assets your team uses when building in the app. You don't get a generic output you have to clean up; you get something ready to send.",
  },
  {
    q: "Can I see analytics on decks generated through the API?",
    a: "Yes. Every generated deck gets a shareable link with full viewer tracking — opens, time per slide, return visits. Decks also appear in your team workspace so admins can see performance across everything that's been sent.",
  },
  {
    q: "Can I build a pitch deck using Claude?",
    a: "Yes. Connect the PitchBoost MCP server to Claude and generate personalized pitch decks and proposals through natural conversation. Describe the prospect, the opportunity, and what you want to achieve — Claude calls PitchBoost and returns a finished, branded deck you can share immediately.",
  },
  {
    q: "Can I generate a client proposal using Claude or another AI tool?",
    a: "Yes. The MCP server supports all PitchBoost output types, including proposals, one-sheets, and buyer FAQs. Tell Claude what kind of document you need and it will pass the right parameters to PitchBoost.",
  },
  {
    q: "Is there a REST API for generating pitch decks programmatically?",
    a: "Yes. The PitchBoost REST API lets you trigger deck generation, retrieve published links, and pull analytics data from any system. Integrate it with your CRM, sales automation platform, or internal tooling.",
  },
  {
    q: "Can I trigger pitch deck generation from my CRM or sales automation tool?",
    a: "Yes, via the REST API. Pass prospect data from your CRM — company name, industry, deal context, contact details — and the API returns a finished, branded deck link you can drop into your outreach or share directly with the prospect.",
  },
  {
    q: "What AI tools work with the PitchBoost MCP server?",
    a: "Any AI assistant or development tool that supports the Model Context Protocol. This currently includes Claude (Anthropic), Cursor, Windsurf, and other MCP-compatible environments.",
  },
  {
    q: "Do I need to be a developer to use the API or MCP?",
    a: "For the REST API, basic API familiarity is helpful. For the MCP server, non-developers can often connect it through Claude's interface without writing code — just configure the server endpoint and start asking Claude to build decks.",
  },
  {
    q: "Can I use the API to automate personalized outbound pitch decks at scale?",
    a: "Yes. Teams use the API to generate a customized pitch deck or proposal for every new prospect as part of their outbound sequence — pulling context from the CRM and automatically producing a deck tailored to each company before the first call.",
  },
];

const RELATED = [
  { label: "AI Deck Builder", desc: "Build personalized decks in the app", href: "/features/ai-deck-builder" },
  { label: "Team & Permissions", desc: "Manage team access and shared libraries", href: "/features/team-and-permissions" },
  { label: "Brand & Image Library", desc: "The brand kit that powers every generated deck", href: "/features/brand-and-images" },
  { label: "Viewer Analytics", desc: "Track who reads what and when", href: "/features/viewer-analytics" },
];

export default function ApiAndMcpPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "API & MCP — Build Better Pitch Decks from Claude or Your AI Stack",
    description:
      "Connect PitchBoost to Claude, Cursor, or your own AI workflows. Get professionally structured decks with your brand, templates, and team libraries.",
    url: "https://pitchboost.ai/features/api-and-mcp",
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href="/#features" style={{ color: "inherit", textDecoration: "none" }}>Features</Link>
              <span style={{ opacity: 0.4 }}>→</span>
              <span>API &amp; MCP</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 820, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Use Claude or your AI stack to build decks. Get a finished sales asset back.
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.7 }}>
            You already know you can build a pitch deck with Claude. The question is what you get back. With PitchBoost, the answer is a fully branded, structured deck — built on your templates, shared with your team, published to your custom domain, with viewer analytics on every open.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Get API Access</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {["Your brand on every generated deck", "Team libraries and templates included", "Analytics on every deck you send"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--ds-text-secondary)", fontWeight: 500 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1F6B6B", display: "inline-block", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Why PitchBoost</span></div>
            <h2>What you get that a raw AI output doesn&apos;t</h2>
            <p>Generating slide content with an AI is the easy part. PitchBoost adds everything that makes the output worth sending.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 48 }}>
            {BENEFITS.map(({ title, body, icon }) => (
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

      {/* API vs MCP */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Two ways to connect</span></div>
            <h2>REST API or MCP server — pick what fits your workflow</h2>
            <p>Both give you the same PitchBoost output. The difference is how you connect and who&apos;s using it.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginTop: 48 }}>
            {API_VS_MCP.map(({ label, who, description, bullets }) => (
              <div key={label} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "32px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#1F6B6B", background: "rgba(31,107,107,0.08)", padding: "4px 14px", borderRadius: 100 }}>{label}</span>
                  <span style={{ fontSize: 13, color: "var(--ds-text-tertiary)" }}>{who}</span>
                </div>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "0 0 20px" }}>{description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {bullets.map((b) => (
                    <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckIcon />
                      <span style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What&apos;s included</span></div>
            <h2>Everything in the API and MCP server</h2>
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

      {/* FAQ */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>FAQ</span></div>
            <h2>Common questions about the PitchBoost API and MCP server</h2>
          </div>
          <div className="fade-up" style={{ maxWidth: 760, margin: "48px auto 0", display: "flex", flexDirection: "column", gap: 16 }}>
            {FAQS.map(({ q, a }) => (
              <div key={q} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "24px 28px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 10 }}>{q}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, margin: 0 }}>{a}</p>
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
            <h2>Your AI stack, with a real pitch deck at the end.</h2>
            <p>Get API access and connect PitchBoost to Claude, your CRM, or your own AI tooling.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Get API Access</a>
          </div>
        </div>
      </section>
    </>
  );
}
