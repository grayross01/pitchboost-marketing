import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  title: "API & MCP — Build Pitch Decks and Proposals with Claude or Any AI Tool | PitchBoost",
  description:
    "Use the PitchBoost API or MCP server to generate personalized pitch decks, presentations, and proposals directly from Claude, Cursor, or your own AI workflows — no manual UI required.",
  openGraph: {
    title: "API & MCP — Build Pitch Decks and Proposals with Claude or Any AI Tool | PitchBoost",
    description:
      "Generate pitch decks, presentations, and proposals from Claude, Cursor, or your own AI stack via the PitchBoost API and MCP server.",
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

const USE_CASES = [
  {
    title: "Build a pitch deck with Claude",
    body: "Connect the PitchBoost MCP server to Claude and describe the prospect, the deal, and your goals in plain language. Claude calls PitchBoost to generate a fully personalized, branded pitch deck — without opening the app.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Generate proposals from your CRM or workflow",
    body: "Use the REST API to trigger pitch deck and proposal generation directly from your CRM, sales automation tool, or internal workflow. Pass prospect context, get back a branded, shareable deck link.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Integrate into your existing AI stack",
    body: "If you've built internal AI tooling for sales, prospecting, or client work, the PitchBoost API drops into your stack. Pass deal context from wherever it lives and get a finished presentation back automatically.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Use with Cursor, Windsurf, or other AI coding tools",
    body: "MCP-compatible AI development tools can connect to PitchBoost directly. Build deck generation into internal apps, automate outbound sequences, or create presentation workflows without leaving your dev environment.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const API_VS_MCP = [
  {
    label: "REST API",
    who: "Developers building integrations",
    description: "A standard REST API for triggering deck generation, retrieving published links, and pulling analytics programmatically. Works with any language or platform that can make HTTP requests.",
    bullets: [
      "Trigger personalized deck generation from any system",
      "Pass prospect context, deal notes, and output format",
      "Retrieve shareable links and analytics data",
      "Works with CRMs, automation tools, and internal apps",
    ],
  },
  {
    label: "MCP Server",
    who: "AI-native users and teams",
    description: "An MCP (Model Context Protocol) server that connects PitchBoost to Claude and other compatible AI assistants. Lets you create pitch decks and proposals conversationally — just describe the deal and the AI handles the rest.",
    bullets: [
      "Works natively with Claude (Anthropic) and MCP-compatible tools",
      "Generate decks through natural language — no structured inputs required",
      "Claude can pull prospect context, pick the right output format, and build the deck",
      "No code required for end users once the server is connected",
    ],
  },
];

const BULLETS = [
  "REST API for programmatic deck and proposal generation",
  "MCP server compatible with Claude and other AI assistants",
  "Pass prospect context in any format — structured or freeform",
  "All output types supported: pitch decks, proposals, one-sheets, FAQs",
  "Generated decks use your team's brand kit automatically",
  "Returns shareable links, PDF export URLs, and analytics endpoints",
];

const FAQS = [
  {
    q: "Can I build a pitch deck using Claude?",
    a: "Yes. Connect the PitchBoost MCP server to Claude and you can generate personalized pitch decks and proposals through natural conversation. Describe the prospect, the opportunity, and what you want to achieve — Claude calls PitchBoost and returns a finished, branded deck you can share immediately.",
  },
  {
    q: "What is an MCP server and how does PitchBoost use it?",
    a: "MCP (Model Context Protocol) is an open standard that lets AI assistants like Claude connect to external tools and services. The PitchBoost MCP server exposes deck generation, publishing, and analytics as tools that any MCP-compatible AI assistant can call. It's how you make Claude aware of PitchBoost and able to use it on your behalf.",
  },
  {
    q: "How do I make a presentation through Claude using MCP?",
    a: "Add the PitchBoost MCP server to your Claude configuration, then ask Claude to build a deck. You can be as specific or as freeform as you like — 'Build a pitch deck for a discovery call with Acme Corp, a 200-person fintech company focused on reducing payment fraud' — and Claude will call PitchBoost to generate it.",
  },
  {
    q: "Can I generate a client proposal using Claude or another AI tool?",
    a: "Yes. The MCP server supports all PitchBoost output types, including proposals, one-sheets, and buyer FAQs — not just pitch decks. Tell Claude what kind of document you need and it will pass the right parameters to PitchBoost.",
  },
  {
    q: "Is there a REST API for generating pitch decks programmatically?",
    a: "Yes. The PitchBoost REST API lets you trigger deck generation, retrieve published links, and pull analytics data from any system that can make HTTP requests. You can integrate it with your CRM, sales automation platform, or internal tooling.",
  },
  {
    q: "What AI tools work with the PitchBoost MCP server?",
    a: "Any AI assistant or development tool that supports the Model Context Protocol. This currently includes Claude (Anthropic), Cursor, Windsurf, and other MCP-compatible environments. The list is growing as MCP adoption expands.",
  },
  {
    q: "Can I trigger pitch deck generation from my CRM or sales automation tool?",
    a: "Yes, via the REST API. Pass prospect data from your CRM — company name, industry, deal context, contact details — and the API returns a finished, branded deck link you can drop into your outreach or share directly with the prospect.",
  },
  {
    q: "Do I need to be a developer to use the API or MCP?",
    a: "For the REST API, basic API familiarity is helpful. For the MCP server, non-developers can often connect it directly through Claude's interface without writing any code — just configure the server endpoint and start asking Claude to build decks.",
  },
  {
    q: "How is generating a deck via API or MCP different from using the PitchBoost app?",
    a: "The output is identical — the same branded, personalized deck you'd get building in the app. The difference is workflow: the API and MCP let you trigger generation from wherever prospect data already lives, without switching tools or copying information manually.",
  },
  {
    q: "Can I use the API to automate personalized outbound pitch decks at scale?",
    a: "Yes. Teams use the API to generate a customized pitch deck or proposal for every new prospect as part of their outbound sequence — pulling context from the CRM and automatically producing a deck tailored to each company before the first call.",
  },
];

const RELATED = [
  { label: "AI Deck Builder", desc: "Build personalized decks in the app", href: "/features/ai-deck-builder" },
  { label: "Team & Permissions", desc: "Manage team access and shared libraries", href: "/features/team-and-permissions" },
  { label: "Output Types", desc: "Pitch decks, proposals, one-sheets, and more", href: "/features/output-types" },
  { label: "Viewer Analytics", desc: "Track who reads what and when", href: "/features/viewer-analytics" },
];

export default function ApiAndMcpPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "API & MCP — Build Pitch Decks and Proposals with Claude or Any AI Tool",
    description:
      "Use the PitchBoost API or MCP server to generate personalized pitch decks, presentations, and proposals from Claude or your own AI workflows.",
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
            Build pitch decks and proposals directly from Claude or your own AI stack
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.7 }}>
            The PitchBoost API and MCP server let you generate personalized pitch decks, presentations, and proposals from Claude, Cursor, your CRM, or any AI workflow — without opening the app. The same branded, prospect-specific output, triggered from wherever your work already happens.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Get API Access</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {["Works with Claude and MCP-compatible tools", "REST API for any integration", "Same branded output as the app"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--ds-text-secondary)", fontWeight: 500 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1F6B6B", display: "inline-block", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What you can do</span></div>
            <h2>Four ways teams use the API and MCP server</h2>
            <p>Whether you want to ask Claude to build a deck in plain language or trigger generation automatically from your existing tools, the API and MCP server fit into the workflow you already have.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 48 }}>
            {USE_CASES.map(({ title, body, icon }) => (
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
            <p>Both give you the same PitchBoost output. The difference is how you connect and who uses it.</p>
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
            <h2>Build pitch decks from wherever your work happens.</h2>
            <p>Get API access and connect PitchBoost to Claude, your CRM, or your own AI tooling.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Get API Access</a>
          </div>
        </div>
      </section>
    </>
  );
}
