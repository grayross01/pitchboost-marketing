import type { Metadata } from "next";
import PricingPlans from "@/components/marketing/pricing-plans";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "PitchBoost pricing: a free plan to try it, Starter at $7/mo without the badge, Pro at $29/mo for people who present every week, Business at $79/mo for teams, or pay once for a single deck: $9 up to 25 slides, $19 up to 60. No credit card to start.",
  alternates: { canonical: "/pricing" },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is there a free plan?",
    a: "Yes. The Free plan is free forever: one AI-generated deck a month (up to 10 slides), a few AI edits, a small PitchBoost badge, and a shareable live link, free. Downloading the deck as a PowerPoint, PDF or Google Slides file takes a paid plan or a one-time payment for that deck: $9 up to 25 slides, $19 up to 60. No credit card required.",
  },
  {
    q: "How do credits work?",
    a: "Every plan includes a monthly credit allowance and every AI action has a fixed price: a deck of up to 10 slides costs 100 credits, each slide past 10 adds 8 (4 on the new deck engine), an AI image is 10, a slide edit 10, a full-deck edit 50, a website scan 10. Fact checking and chart extraction are free. Paid plans roll unused credits over for a month and can buy top-up packs. In the app you see a simple percentage of your allowance, never a running dollar figure.",
  },
  {
    q: "What does Starter add over Free?",
    a: "Starter is $7 a month: 300 credits (about three decks plus edits), decks up to 25 slides, no PitchBoost badge on any deck or export, PowerPoint, PDF and Google Slides downloads, and top-up packs when you need more. Cancel anytime.",
  },
  {
    q: "Can I pay once instead of subscribing?",
    a: "Yes. Finish this deck is a one-time payment for the deck in front of you: $9 for decks up to 25 slides, $19 up to 60. It opens every slide of that deck plus the PowerPoint, PDF and Google Slides downloads, removes the badge from that deck, and includes 100 credits for edits. If you start Starter or Pro within 30 days, it counts toward the first month. It is offered in the app once your deck is built: a free upload longer than 10 slides is built in full with the extra slides locked, the free link always works and shows the free slides, and the share screen offers the same choice for any deck.",
  },
  {
    q: "What is the difference between Starter, Pro and Business?",
    a: "Starter removes the badge and covers occasional decks. Pro is for people who do this for a living: 1,200 credits (about 12 decks), decks up to 60 slides, full viewer analytics, saved templates, custom domains, and API access. Business adds team collaboration, analytics export and 3,300 credits for teams.",
  },
  {
    q: "Can I buy more credits?",
    a: "On Starter, Pro and Business, yes: packs of 200 ($5), 700 ($15) and 1,900 ($40) credits that never expire while you are subscribed. The Free plan does not offer packs; the first step up is Starter.",
  },
  {
    q: "Can I change or cancel my plan anytime?",
    a: "Yes. You can upgrade, downgrade, or cancel at any time from your account settings. Changes take effect immediately and there is no long-term contract.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Starter is $70 a year (about $5.83/mo), Pro $24/mo and Business $66/mo when billed annually.",
  },
  {
    q: "Do I need design or PowerPoint skills?",
    a: "No. PitchBoost generates the deck for you, on your brand. Every plan shares it as a live link; PDF and PowerPoint downloads come with any paid plan or a one-time payment for that deck ($9 up to 25 slides, $19 up to 60). No design work required.",
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
    description: "AI presentation maker that builds new presentations from a prompt and redesigns existing PowerPoint and PDF decks in your brand, with shareable links that show who opened them.",
    brand: { "@type": "Brand", name: "PitchBoost" },
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", url: "https://pitchboost.ai/pricing" },
      { "@type": "Offer", name: "Starter", price: "7", priceCurrency: "USD", url: "https://pitchboost.ai/pricing" },
      { "@type": "Offer", name: "Finish this deck, up to 25 slides (one time)", price: "9", priceCurrency: "USD", url: "https://pitchboost.ai/pricing" },
      { "@type": "Offer", name: "Finish this deck, up to 60 slides (one time)", price: "19", priceCurrency: "USD", url: "https://pitchboost.ai/pricing" },
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
          <PricingPlans oneDeckNote={false} />
          <p style={{ textAlign: "center", color: "var(--ds-text-light)", fontSize: "0.9rem", marginTop: 28 }}>
            No credit card required to start. Upgrade, downgrade, or cancel anytime.
          </p>

          {/* ── Just one deck? Always below the plans: plans lead, paying once is second. ── */}
          <div style={{ maxWidth: 760, margin: "40px auto 0", background: "#fff", border: "1px solid var(--ds-border, #e5e9ef)", borderRadius: 14, padding: "28px 24px", textAlign: "center" }}>
            <div className="section-label" style={{ marginBottom: 14 }}><span>Just one deck?</span></div>
            <h2 style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontWeight: 700, color: "var(--ds-dark)", lineHeight: 1.3, margin: "0 0 12px" }}>
              Pay once for the deck in front of you: $9 up to 25 slides, $19 up to 60.
            </h2>
            <p style={{ fontSize: "0.92rem", color: "var(--ds-text-light, #5b6b7a)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 20px" }}>
              Every slide rebuilt in your brand, the PowerPoint, PDF and Google Slides, no badge on that deck, and 100 credits for edits. If you start Starter or Pro within 30 days, it counts toward the first month. Most people who finish one deck are back for another within a month, and Pro costs less than two long-deck unlocks.
            </p>
            <a href={SIGNUP_URL} className="btn btn-secondary">Upload a deck to see it</a>
            <p className="mkt-muted" style={{ textAlign: "center", fontSize: 13, color: "var(--ds-text-light)", marginTop: 12, marginBottom: 0 }}>Offered in the app once your deck is built.</p>
          </div>
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
