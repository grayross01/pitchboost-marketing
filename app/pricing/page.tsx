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
    a: "Yes. The Free plan is free forever and covers up to 3 deals with AI deck generation, basic analytics, PDF export, and shareable links. No credit card required to start.",
  },
  {
    q: "What is the monthly AI budget?",
    a: "Every plan includes a monthly allowance of AI generation that resets automatically each month. Higher plans include a larger budget, so heavier users can generate and refine more decks.",
  },
  {
    q: "Can I change or cancel my plan anytime?",
    a: "Yes. You can upgrade, downgrade, or cancel at any time from your account settings. Changes take effect immediately and there is no long-term contract.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Pro is $24/mo and Business is $66/mo when billed annually, which works out cheaper than paying monthly.",
  },
  {
    q: "What is the difference between Pro and Business?",
    a: "Pro is built for active individual dealmakers: unlimited deals, full viewer analytics, custom domains, and saved templates. Business adds team collaboration, analytics export, and the highest AI budget for teams closing deals at scale.",
  },
  {
    q: "Do I need design or PowerPoint skills?",
    a: "No. PitchBoost generates the deck for you, on your brand, and you can export to PDF or PowerPoint on paid plans. No design work required.",
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
                <li><CheckIcon /> Up to 3 deals</li>
                <li><CheckIcon /> AI deck generation</li>
                <li><CheckIcon /> Basic analytics</li>
                <li><CheckIcon /> PDF export</li>
                <li><CheckIcon /> Shareable links</li>
              </ul>
              <a href={SIGNUP_URL} className="btn btn-secondary">Get Started</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="plan-name">Pro</div>
              <div className="plan-desc">For active dealmakers</div>
              <div className="plan-price">$29<span>/mo</span></div>
              <div className="plan-period">or $24/mo billed annually</div>
              <ul className="pricing-features">
                <li><CheckIcon /> Unlimited deals</li>
                <li><CheckIcon /> Larger AI budget</li>
                <li><CheckIcon /> Full viewer analytics</li>
                <li><CheckIcon /> Custom domains</li>
                <li><CheckIcon /> Saved templates</li>
                <li><CheckIcon /> Priority generation</li>
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
                <li><CheckIcon /> Team collaboration</li>
                <li><CheckIcon /> Analytics export</li>
                <li><CheckIcon /> Highest AI budget</li>
                <li><CheckIcon /> Custom domains</li>
                <li><CheckIcon /> Saved templates</li>
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
