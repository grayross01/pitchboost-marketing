import type { Metadata } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "PitchBoost pricing: a free plan to try it out, Pro at $29/mo for active dealmakers, and Business at $79/mo for teams. Every plan includes a monthly AI budget. No credit card to start.",
  alternates: { canonical: "/pricing" },
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is there a free plan?",
    a: "Yes. The Free plan is free forever: one AI-generated deck a month (up to 10 slides), a few AI edits, PDF and PowerPoint export with a small PitchBoost badge, and a shareable link. No credit card required.",
  },
  {
    q: "How do credits work?",
    a: "Every plan includes a monthly credit allowance and every AI action has a fixed price: a deck costs 100 credits, a slide edit 10, a full-deck edit 50, a website scan 10. Fact checking and chart extraction are free. Paid plans roll unused credits over for a month and can buy top-up packs. In the app you see a simple percentage of your allowance, never a running dollar figure.",
  },
  {
    q: "What does Starter add over Free?",
    a: "Starter is $9 a month: 800 credits (about five decks plus edits), decks up to 25 slides, no PitchBoost badge on any deck or export, clean editable PowerPoint downloads, and top-up packs when you need more.",
  },
  {
    q: "What is the difference between Starter, Pro and Business?",
    a: "Starter removes the badge and covers occasional decks. Pro is for people who do this for a living: 2,500 credits, decks up to 60 slides, full viewer analytics, saved templates, custom domains, and API access. Business adds team collaboration, analytics export and 7,000 credits for teams.",
  },
  {
    q: "Can I buy more credits?",
    a: "On Starter, Pro and Business, yes: packs of 250 ($5), 900 ($15) and 2,800 ($40) credits that never expire while you are subscribed. The Free plan does not offer packs; the first step up is Starter.",
  },
  {
    q: "Can I change or cancel my plan anytime?",
    a: "Yes. You can upgrade, downgrade, or cancel at any time from your account settings. Changes take effect immediately and there is no long-term contract.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Starter is $7/mo, Pro $24/mo and Business $66/mo when billed annually.",
  },
  {
    q: "Do I need design or PowerPoint skills?",
    a: "No. PitchBoost generates the deck for you, on your brand, and you can export to PDF or PowerPoint on every plan. No design work required.",
  },
];

export default function PricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://pitchboost.ai/pricing" },
    ],
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PitchBoost",
    description: "AI pitch deck and sales presentation builder that generates personalized, on-brand decks and tracks who opens them.",
    brand: { "@type": "Brand", name: "PitchBoost" },
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", url: "https://pitchboost.ai/pricing" },
      { "@type": "Offer", name: "Pro", price: "29", priceCurrency: "USD", url: "https://pitchboost.ai/pricing" },
      { "@type": "Offer", name: "Business", price: "79", priceCurrency: "USD", url: "https://pitchboost.ai/pricing" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />

      {/* ── Hero ── */}
      <section style={{ padding: "120px 0 40px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div className="section-label" style={{ justifyContent: "center", marginBottom: 16 }}><span>Pricing</span></div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.6rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 720, margin: "0 auto 18px", lineHeight: 1.12 }}>
            Simple, transparent pricing
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Start free and upgrade when you&apos;re ready. Every plan includes a monthly AI budget that resets automatically.
          </p>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)", paddingTop: 24 }}>
        <div className="mkt-container">
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Free</div>
              <div className="plan-desc">Perfect for trying PitchBoost</div>
              <div className="plan-price">$0<span>/mo</span></div>
              <div className="plan-period">Free forever</div>
              <ul className="pricing-features">
                <li><CheckIcon /> 150 credits a month (1 AI deck)</li>
                <li><CheckIcon /> Decks up to 10 slides</li>
                <li><CheckIcon /> PDF and PowerPoint export, with badge</li>
                <li><CheckIcon /> Shareable link and basic analytics</li>
                <li><CheckIcon /> Research and fact checking included</li>
              </ul>
              <a href={SIGNUP_URL} className="btn btn-secondary">Get Started</a>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-desc">Your decks, without the badge</div>
              <div className="plan-price">$9<span>/mo</span></div>
              <div className="plan-period">or $7/mo billed annually</div>
              <ul className="pricing-features">
                <li><CheckIcon /> 800 credits a month (about 5 decks)</li>
                <li><CheckIcon /> Decks up to 25 slides</li>
                <li><CheckIcon /> No PitchBoost badge, anywhere</li>
                <li><CheckIcon /> Clean, editable PowerPoint downloads</li>
                <li><CheckIcon /> Top-up credit packs</li>
              </ul>
              <a href={SIGNUP_URL} className="btn btn-secondary">Start with Starter</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="plan-name">Pro</div>
              <div className="plan-desc">For active dealmakers</div>
              <div className="plan-price">$29<span>/mo</span></div>
              <div className="plan-period">or $24/mo billed annually</div>
              <ul className="pricing-features">
                <li><CheckIcon /> 2,500 credits a month (about 20 decks)</li>
                <li><CheckIcon /> Decks up to 60 slides</li>
                <li><CheckIcon /> Full viewer analytics and read receipts</li>
                <li><CheckIcon /> Custom domains and saved templates</li>
                <li><CheckIcon /> API and MCP access</li>
                <li><CheckIcon /> Unlimited deals, no badge</li>
              </ul>
              <a href={SIGNUP_URL} className="btn btn-primary">Start Free Trial</a>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Business</div>
              <div className="plan-desc">For teams closing deals at scale</div>
              <div className="plan-price">$79<span>/mo</span></div>
              <div className="plan-period">or $66/mo billed annually</div>
              <ul className="pricing-features">
                <li><CheckIcon /> Everything in Pro</li>
                <li><CheckIcon /> 7,000 credits a month</li>
                <li><CheckIcon /> Team collaboration</li>
                <li><CheckIcon /> Analytics export</li>
                <li><CheckIcon /> Sending from your own domain</li>
              </ul>
              <a href={SIGNUP_URL} className="btn btn-secondary">Get Started</a>
            </div>
          </div>
          <p style={{ textAlign: "center", color: "var(--ds-text-light)", fontSize: "0.9rem", marginTop: 28 }}>
            No credit card required to start. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header" style={{ textAlign: "center" }}>
            <div className="section-label" style={{ justifyContent: "center" }}><span>FAQ</span></div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--ds-dark)" }}>Pricing questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
            {FAQS.map(({ q, a }) => (
              <div key={q} style={{ background: "#fff", border: "1px solid var(--ds-border, #e5e9ef)", borderRadius: 14, padding: "20px 24px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ds-dark)", marginBottom: 8 }}>{q}</h3>
                <p style={{ fontSize: "0.92rem", color: "var(--ds-text-light, #5b6b7a)", lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
          <p className="mkt-muted" style={{ textAlign: "center", fontSize: 13, marginTop: 20 }}>Prices are in US dollars. Checkout shows the amount in your local currency.</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box">
            <h2>Ready to build your next deck?</h2>
            <p>Generate a polished, personalized pitch deck free. No design skills, no credit card.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Building Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
