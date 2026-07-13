import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Tools for Real Estate Agents",
  description:
    "Free, no-signup tools for real estate agents: a closing-timeline generator, a seller net-sheet calculator, and an open-house sign-in page with a QR code. Branded to you, built to win business.",
  alternates: { canonical: "/tools" },
};

const TOOLS = [
  {
    href: "/tools/open-house-sign-in",
    title: "Open house sign-in + QR code",
    desc: "Print one QR code for the door. Visitors scan and sign in on their phone, and every lead is emailed straight to you.",
    tag: "Lead capture",
  },
  {
    href: "/tools/closing-timeline",
    title: "Closing timeline generator",
    desc: "Two dates in, every deadline out. Share a clean, branded timeline with your client and add it all to a calendar.",
    tag: "Client experience",
  },
  {
    href: "/tools/seller-net-sheet",
    title: "Seller net sheet calculator",
    desc: "Show a seller what they'll actually net. Enter the numbers, get a branded breakdown to hand over on the spot.",
    tag: "Win the listing",
  },
  {
    href: "/tools/review-request",
    title: "Thank-you & review request",
    desc: "Just closed? Send a branded thank-you with a one-tap review button and a warm referral ask. Reviews and referrals grow your business.",
    tag: "After the close",
  },
];

export default function ToolsIndexPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free tools for real estate agents",
    itemListElement: TOOLS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.title,
      description: t.desc,
      url: `https://pitchboost.ai${t.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="legal-hero">
        <div className="mkt-container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "var(--ds-dark)", lineHeight: 1.15 }}>
            Free tools for real estate agents
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.05rem", maxWidth: 640, margin: "12px auto 0", lineHeight: 1.7 }}>
            No signup, no fluff. Each one is branded to you and built to win business, then it flows
            right into PitchBoost when you want tracking and follow-up.
          </p>
        </div>
      </section>

      <div className="mkt-container" style={{ maxWidth: 900, padding: "32px 20px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {TOOLS.map((t) => (
            <Link key={t.href} href={t.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "#fff", border: "1px solid #e5e9ef", borderRadius: 14, padding: "22px 20px", height: "100%", transition: "box-shadow .2s, transform .2s", boxShadow: "0 1px 3px rgba(16,34,44,0.05)" }}>
                <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, color: "var(--ds-primary, #0e5a64)", background: "rgba(14,90,100,0.08)", borderRadius: 999, padding: "3px 10px", marginBottom: 12 }}>
                  {t.tag}
                </span>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--ds-dark)" }}>{t.title}</h2>
                <p style={{ fontSize: "0.92rem", color: "var(--ds-text-light)", lineHeight: 1.65, marginTop: 8 }}>{t.desc}</p>
                <span style={{ display: "inline-block", marginTop: 14, fontSize: "0.9rem", fontWeight: 600, color: "var(--ds-primary, #0e5a64)" }}>Open the tool →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
