import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  title: "Team & Permissions — Collaborative Pitch Deck Software for Teams | PitchBoost",
  description:
    "Add unlimited team members with the right roles for their access level. Share brand assets, templates, and image libraries across your team. Connect to your own AI tooling via the API and MCP server.",
  openGraph: {
    title: "Team & Permissions — Collaborative Pitch Deck Software for Teams | PitchBoost",
    description:
      "Add unlimited team members, share brand assets and templates, and connect PitchBoost to your own AI tooling via API.",
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
    title: "Unlimited team members",
    body: "Add as many people as your team needs — reps, managers, designers, account executives. Everyone gets their own login and access to the tools appropriate for their role.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Roles and access levels",
    body: "Assign each team member the right level of access — admin for full control, member for building and editing, viewer for reviewing and sharing. Manage permissions without creating workarounds.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Shared libraries",
    body: "Brand assets, templates, and saved slides are available to the entire team — not locked to the person who created them. Everyone pitches from the same approved foundation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "API and MCP server",
    body: "Advanced users can connect PitchBoost to their own AI tooling via the API or MCP server. Trigger deck generation, pull analytics, and integrate PitchBoost into existing workflows — without leaving the tools your team already uses.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const ROLES = [
  {
    role: "Admin",
    description: "Full access — manage team members, permissions, brand kit, billing, and all shared libraries. Create, edit, and delete any deck across the workspace.",
    capabilities: ["Manage team members and roles", "Configure brand kit and shared libraries", "Access all decks and analytics across the workspace", "Manage billing and subscription"],
  },
  {
    role: "Member",
    description: "Standard access for reps, AEs, and anyone building and sending decks. Can create and manage their own decks and access shared team assets.",
    capabilities: ["Build and edit decks using AI", "Access shared templates, slides, and brand assets", "Publish, share, and track their own decks", "View analytics for their own decks"],
  },
  {
    role: "Viewer",
    description: "Read-only access for stakeholders who need to review and share decks without editing them — managers reviewing output, clients with workspace access, or external collaborators.",
    capabilities: ["View and share existing decks", "Access analytics for decks they&apos;re shared on", "No editing or generation capabilities", "No access to billing or team settings"],
  },
];

const BULLETS = [
  "Unlimited team members on Business plan",
  "Three roles: admin, member, and viewer",
  "Shared brand kit, template library, and slide library",
  "Per-deck permissions and sharing controls",
  "REST API for programmatic deck generation and management",
  "MCP server for AI-native integrations",
];

const RELATED = [
  { label: "Brand & Image Library", desc: "Shared brand assets across your team", href: "/features/brand-and-images" },
  { label: "Templates & Saved Slides", desc: "Shared libraries your team builds from", href: "/features/templates-and-slides" },
  { label: "Viewer Analytics", desc: "Track engagement across all your decks", href: "/features/viewer-analytics" },
  { label: "Publishing & Sharing", desc: "Control who can access each deck", href: "/features/publishing-and-sharing" },
];

export default function TeamAndPermissionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Team & Permissions — Collaborative Pitch Deck Software for Teams",
    description: "Add unlimited team members, share brand assets and templates, and connect PitchBoost to your own AI tooling via API.",
    url: "https://pitchboost.ai/features/team-and-permissions",
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
              <span>Team &amp; Permissions</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 760, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Give your whole team the tools to pitch and present well
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Add unlimited team members with the right roles for their needs. Share brand assets, templates, and image libraries across the workspace. And for advanced users, connect PitchBoost to your own AI tooling via the API or MCP server.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Set Up Your Team Free</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {["Unlimited team members", "Roles suited to every access level", "API and MCP server access"].map((item) => (
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
            <h2>Built for teams that pitch at scale</h2>
            <p>Individual reps shouldn&apos;t have to build everything from scratch. Team features give everyone access to the same assets, the same quality baseline, and the same tools — regardless of their role or technical ability.</p>
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

      {/* Roles */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Roles</span></div>
            <h2>Three roles. Every access level covered.</h2>
            <p>Assign the right role to each team member based on what they actually need to do — not a one-size-fits-all permission model.</p>
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 48, maxWidth: 800, margin: "48px auto 0" }}>
            {ROLES.map(({ role, description, capabilities }) => (
              <div key={role} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#1F6B6B", background: "rgba(31,107,107,0.08)", padding: "4px 12px", borderRadius: 100 }}>{role}</span>
                </div>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "0 0 16px" }}>{description}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 8 }}>
                  {capabilities.map((c) => (
                    <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckIcon />
                      <span style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: c }} />
                    </div>
                  ))}
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
            <div className="section-label"><span>Full capability list</span></div>
            <h2>Everything in team and permissions</h2>
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
            <h2>Your whole team. One platform. Better pitches.</h2>
            <p>Start free and add your team when you&apos;re ready. No per-seat limits on the Business plan.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Set Up Your Team Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
