import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCity } from "@/lib/cities";

/**
 * Programmatic per-city landing pages for real estate agents. Statically
 * generated from lib/cities. Substantive (full value prop + tools), not thin
 * doorway pages: each targets local search intent for a real metro.
 */

const APP_URL = "https://app.pitchboost.ai";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  const place = `${c.name}, ${c.state}`;
  return {
    title: `Real Estate Agent Software in ${place}: Listing Presentations & Timelines | PitchBoost`,
    description: `PitchBoost helps ${place} real estate agents win more listings with AI listing presentations, branded closing timelines, and read receipts on every deal. Free tools included. Start free.`,
    alternates: { canonical: `/real-estate/${c.slug}` },
    openGraph: {
      title: `PitchBoost for real estate agents in ${place}`,
      description: `Win the listing, wow the client, close on time. Built for ${place} agents.`,
      url: `https://pitchboost.ai/real-estate/${c.slug}`,
      type: "website",
    },
  };
}

const card: React.CSSProperties = { background: "#fff", border: "1px solid #e5e9ef", borderRadius: 16, padding: "24px 22px", boxShadow: "0 1px 3px rgba(16,34,44,0.05)" };

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();
  const place = `${c.name}, ${c.state}`;

  return (
    <>
      <section className="hero">
        <div className="hero-orb" />
        <div className="hero-orb" />
        <div className="mkt-container">
          <div className="fade-up">
            <div className="hero-badge">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg, #1F6B6B, #E8665A)", display: "inline-block" }} />
              For real estate agents in {c.name}
            </div>
          </div>
          <h1 className="fade-up fade-up-delay-1">
            The tools {c.name} agents use to<br />
            <span className="gradient-text">win the listing.</span>
          </h1>
          <p className="fade-up fade-up-delay-2">
            Whether you list in {c.name} or the wider {c.state} market, PitchBoost turns a property
            link into a polished, on-brand listing presentation in about a minute, drafts a
            client-ready closing timeline, and tells you the moment a seller opens either one.
          </p>
          <div className="hero-actions fade-up fade-up-delay-3">
            <a href={`${APP_URL}/signup?intent=listing`} className="btn btn-primary btn-lg">Build a listing presentation free</a>
            <a href="/tools" className="btn btn-ghost btn-lg">Try the free tools</a>
          </div>
        </div>
      </section>

      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>Built for {c.name} agents</span></div>
            <h2>Win the listing. Wow the client. Close on time.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { t: "Win the listing", d: `Walk into your next ${c.name} listing appointment with an AI-built presentation: your pricing story, marketing plan, comps, and track record, on your brand.` },
              { t: "Wow the client", d: "Hand every buyer and seller a clean, branded closing timeline with no login, so they always know what is next and you look like the pro you are." },
              { t: "Close on time", d: "Send it all as one link and see who opened it, what they read, and when, so you follow up at exactly the right moment." },
            ].map((x, i) => (
              <div key={i} className="fade-up" style={card}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--ds-dark)" }}>{x.t}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-light)", lineHeight: 1.7, marginTop: 8 }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>Free, no signup</span></div>
            <h2>Free tools you can use on your next {c.name} appointment</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {[
              { href: "/tools/open-house-sign-in", t: "Open house sign-in + QR", d: "Print one QR for the door. Visitors scan, sign in, and every lead is emailed to you." },
              { href: "/tools/closing-timeline", t: "Closing timeline generator", d: "Two dates in, every deadline out. Share a clean, branded timeline with your client." },
              { href: "/tools/seller-net-sheet", t: "Seller net sheet calculator", d: "Show a seller what they net. Enter the numbers, hand over a branded breakdown." },
              { href: "/tools/review-request", t: "Thank-you & review request", d: "Just closed? Send a branded thank-you with a one-tap review button and a referral ask." },
            ].map((x, i) => (
              <a key={i} href={x.href} className="fade-up" style={{ textDecoration: "none", ...card }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--ds-dark)" }}>{x.t}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-light)", lineHeight: 1.65, marginTop: 8 }}>{x.d}</p>
                <span style={{ display: "inline-block", marginTop: 12, fontSize: "0.9rem", fontWeight: 600, color: "#1F6B6B" }}>Open the tool →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-section cta-section">
        <div className="mkt-container" style={{ textAlign: "center" }}>
          <h2 className="fade-up" style={{ color: "#fff" }}>Ready to win your next {c.name} listing?</h2>
          <p className="fade-up" style={{ color: "rgba(255,255,255,0.8)", maxWidth: 560, margin: "12px auto 22px", fontSize: 15, lineHeight: 1.7 }}>
            Start free, build your first presentation, and send a branded closing timeline today. No credit card, no design work.
          </p>
          <div className="hero-actions fade-up" style={{ justifyContent: "center" }}>
            <a href={`${APP_URL}/signup?intent=listing`} className="btn btn-primary btn-lg">Start free</a>
            <a href="/real-estate" className="btn btn-ghost btn-lg">See everything for agents</a>
          </div>
        </div>
      </section>
    </>
  );
}
