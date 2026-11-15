import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup?intent=listing`;

export const metadata: Metadata = {
  title: "Best Listing Presentation Software for Real Estate Agents (2026)",
  description:
    "An honest 2026 roundup of listing presentation software for real estate agents: Highnote, Cloud CMA, MoxiPresent, Canva, and PitchBoost. See which tool fits CMAs, interactive presentations, or a deck generated from a listing link.",
  alternates: { canonical: "/best-listing-presentation-software" },
};

interface Tool {
  name: string;
  tagline: string;
  bestFor: string;
  mlsData: string;
  autoBuilt: string;
  tracking: string;
  freeOption: string;
  priceNote: string;
  blurb: string;
  href?: string;
  featured?: boolean;
}

const TOOLS: Tool[] = [
  {
    name: "PitchBoost",
    tagline: "A branded listing presentation generated from a listing link",
    bestFor: "Agents who want a polished, on-brand presentation in about a minute and want to know when the seller opens it",
    mlsData: "No (uses the listing link + your inputs)",
    autoBuilt: "Yes",
    tracking: "Yes (seller opens, slide by slide)",
    freeOption: "Yes",
    priceNote: "Free plan; Pro $29/mo",
    blurb:
      "PitchBoost turns a Zillow or Redfin link into a complete, on-brand listing presentation: the pricing story, a marketing plan, comps, and your track record, written and laid out for you. You can edit anything, then share it as a link and get notified the moment the seller opens it. It is not an MLS or CMA engine; its strengths are speed, personalization, and seller open-tracking, and it also builds buyer and seller pitch decks beyond the listing appointment.",
    href: "/real-estate",
    featured: true,
  },
  {
    name: "Highnote",
    tagline: "Interactive, web-based presentations you build yourself",
    bestFor: "Agents who want a sleek, interactive presentation with read analytics and drag-and-drop content",
    mlsData: "No",
    autoBuilt: "No (drag-and-drop builder)",
    tracking: "Yes (read analytics)",
    freeOption: "Yes (free tier + 14-day trial)",
    priceNote: "Free tier + paid plans",
    blurb:
      "Highnote is purpose-built for real estate presentations, with 50+ templates and a drag-and-drop builder for adding floor plans, virtual tours, PDFs, and testimonials. It also tells you when and how long your materials were viewed. You assemble the presentation yourself, so it is a great fit if you want full creative control over a beautiful, interactive result.",
  },
  {
    name: "Cloud CMA",
    tagline: "Live MLS-data CMAs and net sheets",
    bestFor: "Agents who want data-rich comparative market analyses pulled straight from the MLS",
    mlsData: "Yes (500+ MLS systems)",
    autoBuilt: "Yes (from MLS data)",
    tracking: "Limited",
    freeOption: "Often free or discounted through your MLS",
    priceNote: "From around $35/mo (varies by MLS)",
    blurb:
      "Cloud CMA, from Lone Wolf, is a category standard for comparative market analyses. It pulls live MLS data to generate CMA reports, buyer tours, seller net sheets, and a live presentation mode you can run on a call. If your listing appointment lives or dies on MLS-backed pricing data, this is built for exactly that, and many MLSs offer it free or discounted to members.",
  },
  {
    name: "MoxiPresent",
    tagline: "Brokerage-standardized CMAs and presentations",
    bestFor: "Agents at brokerages that want consistent, brand-controlled presentations powered by live MLS data",
    mlsData: "Yes",
    autoBuilt: "Yes",
    tracking: "Limited",
    freeOption: "Usually provided through your brokerage",
    priceNote: "Typically brokerage or enterprise pricing",
    blurb:
      "MoxiPresent is a CMA and listing presentation tool built for brokerages that value speed, consistency, and brand control. Agents can produce seller CMAs, buyer tours, and annual property reviews in minutes, all on the brokerage brand and powered by live MLS data. It is most common as part of a brokerage technology package rather than a solo purchase.",
  },
  {
    name: "Canva",
    tagline: "Fully custom, design-forward presentations",
    bestFor: "Agents who want total design freedom and already work in Canva",
    mlsData: "No",
    autoBuilt: "No",
    tracking: "No",
    freeOption: "Yes (free tier)",
    priceNote: "Free + Pro plans",
    blurb:
      "Canva gives you a huge template library and complete design flexibility to build a listing presentation by hand. It is a general design tool, not a real estate tool, so there is no MLS data, no auto-generation from a listing, and no seller tracking. The payoff is creative control if you enjoy designing and have the time.",
  },
  {
    name: "PowerPoint or Google Slides",
    tagline: "Total control if you have a template and time",
    bestFor: "Agents with a strong existing template who want to do everything manually",
    mlsData: "No",
    autoBuilt: "No",
    tracking: "No",
    freeOption: "Google Slides is free",
    priceNote: "Free (Slides) or bundled (PowerPoint)",
    blurb:
      "The classics still work. If you already have a great template and the time to keep it current for each listing, PowerPoint and Google Slides give you complete control at no extra cost. The tradeoff is that everything, from comps to pricing to design polish, is on you, and there is no view tracking after you send.",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the best listing presentation software for real estate agents?",
    a: "There is no single best tool; it depends on the job. Cloud CMA and MoxiPresent lead on live MLS-data CMAs. Highnote leads on interactive presentations you build yourself. PitchBoost is the fastest way to get a branded presentation generated from a listing link, with seller open-tracking. Canva and Google Slides give you full manual control.",
  },
  {
    q: "Is there free listing presentation software?",
    a: "Yes. PitchBoost has a free plan, Highnote has a free tier and a 14-day trial, Google Slides is free, and Cloud CMA is often free or discounted through your MLS. Free tiers vary in limits, so check each tool for what is included.",
  },
  {
    q: "What is the difference between a CMA tool and a listing presentation tool?",
    a: "A CMA tool like Cloud CMA pulls live MLS data to produce comparative market analyses and pricing reports. A listing presentation tool wraps that story, along with your marketing plan and track record, into a polished deck for the seller. Some tools focus on one, some do both. PitchBoost focuses on the presentation and generates it from a listing link rather than pulling MLS data directly.",
  },
  {
    q: "Can I tell when a seller opens my listing presentation?",
    a: "With some tools, yes. PitchBoost and Highnote both show engagement, so you can follow up when the seller is actually looking. Most general design tools, like Canva and Google Slides, do not offer this.",
  },
  {
    q: "How fast can I create a listing presentation?",
    a: "It ranges from minutes to hours depending on the tool. Manual tools like Canva or PowerPoint take the longest. CMA tools are quick once connected to your MLS. PitchBoost generates a full first draft from a listing link in about a minute, which you then edit.",
  },
];

function CheckCell({ value }: { value: string }) {
  const negative = /^no\b/i.test(value.trim());
  return (
    <span style={{ fontSize: 13, color: negative ? "var(--ds-text-tertiary, #94a3b8)" : "var(--ds-text-secondary, #475569)", fontWeight: 500 }}>
      {value}
    </span>
  );
}

export default function BestListingPresentationSoftwarePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Best Listing Presentation Software", item: "https://pitchboost.ai/best-listing-presentation-software" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Listing Presentation Software for Real Estate Agents (2026)",
    itemListElement: TOOLS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      description: t.tagline,
    })),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section style={{ padding: "120px 0 56px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div className="section-label" style={{ justifyContent: "center", marginBottom: 16 }}><span>Real estate</span></div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.6rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 820, margin: "0 auto 18px", lineHeight: 1.14 }}>
            Best listing presentation software for real estate agents (2026)
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>
            An honest look at the tools agents use to win listings, from live MLS-data CMAs to interactive presentations to a deck generated straight from a listing link. Here is what each one is best at, and how to choose.
          </p>
        </div>
      </section>

      {/* ── What to look for ── */}
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--ds-dark)", marginBottom: 14 }}>What to look for</h2>
          <p style={{ color: "var(--ds-text-light)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 12 }}>
            The right listing presentation tool depends on the job you need it to do. Three questions sort most of the field:
          </p>
          <ul style={{ color: "var(--ds-text-light)", lineHeight: 1.8, fontSize: "1rem", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <li><strong style={{ color: "var(--ds-dark)" }}>Do you need live MLS data?</strong> If the pricing story has to come straight from the MLS, a CMA engine like Cloud CMA or MoxiPresent is the category standard.</li>
            <li><strong style={{ color: "var(--ds-dark)" }}>Do you want it built for you, or by you?</strong> Some tools hand you a builder; others generate a full first draft you refine.</li>
            <li><strong style={{ color: "var(--ds-dark)" }}>Do you want to know when the seller opens it?</strong> Engagement tracking turns a presentation into a follow-up signal, and only some tools offer it.</li>
          </ul>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header">
            <div className="section-label"><span>At a glance</span></div>
            <h2>The tools, side by side</h2>
          </div>
          <div style={{ marginTop: 40, overflowX: "auto", borderRadius: 14, border: "1px solid var(--ds-border)" }}>
            <table style={{ width: "100%", minWidth: 820, borderCollapse: "collapse", background: "var(--ds-bg)", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "var(--ds-dark)", color: "#fff", textAlign: "left" }}>
                  <th style={{ padding: "12px 16px", fontWeight: 700 }}>Tool</th>
                  <th style={{ padding: "12px 16px", fontWeight: 600 }}>MLS data</th>
                  <th style={{ padding: "12px 16px", fontWeight: 600 }}>Auto-built</th>
                  <th style={{ padding: "12px 16px", fontWeight: 600 }}>Seller tracking</th>
                  <th style={{ padding: "12px 16px", fontWeight: 600 }}>Free option</th>
                  <th style={{ padding: "12px 16px", fontWeight: 600 }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {TOOLS.map((t, i) => (
                  <tr key={t.name} style={{ borderTop: "1px solid var(--ds-border)", background: t.featured ? "rgba(31,107,107,0.06)" : i % 2 === 0 ? "var(--ds-bg)" : "var(--ds-bg-light)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 700, color: "var(--ds-dark)" }}>{t.name}</td>
                    <td style={{ padding: "12px 16px" }}><CheckCell value={t.mlsData} /></td>
                    <td style={{ padding: "12px 16px" }}><CheckCell value={t.autoBuilt} /></td>
                    <td style={{ padding: "12px 16px" }}><CheckCell value={t.tracking} /></td>
                    <td style={{ padding: "12px 16px" }}><CheckCell value={t.freeOption} /></td>
                    <td style={{ padding: "12px 16px", color: "var(--ds-text-secondary, #475569)" }}>{t.priceNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: "var(--ds-text-light)", marginTop: 12 }}>
            Features and pricing change often. Verify current details on each tool&apos;s own site before you buy.
          </p>
        </div>
      </section>

      {/* ── Per-tool detail ── */}
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 860 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {TOOLS.map((t) => (
              <div key={t.name} style={{ background: "var(--ds-bg-light)", border: t.featured ? "2px solid #1F6B6B" : "1px solid var(--ds-border)", borderRadius: 16, padding: "26px 30px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--ds-dark)" }}>{t.name}</h3>
                  <span style={{ fontSize: 13, color: "var(--ds-text-light)" }}>{t.tagline}</span>
                </div>
                <p style={{ fontSize: 13, color: "#1F6B6B", fontWeight: 600, margin: "8px 0 12px" }}>Best for: {t.bestFor}</p>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary, #475569)", lineHeight: 1.75, margin: 0 }}>{t.blurb}</p>
                {t.href && (
                  <div style={{ marginTop: 16 }}>
                    <Link href={t.href} className="btn btn-primary">See PitchBoost for real estate</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to choose ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 820 }}>
          <div className="section-header wide-header">
            <div className="section-label"><span>How to choose</span></div>
            <h2>Which one is right for you?</h2>
          </div>
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14, color: "var(--ds-text-light)", lineHeight: 1.8, fontSize: "1rem" }}>
            <p><strong style={{ color: "var(--ds-dark)" }}>You live in the MLS numbers:</strong> Cloud CMA or MoxiPresent. Live data is their whole point.</p>
            <p><strong style={{ color: "var(--ds-dark)" }}>You want to design an interactive experience yourself:</strong> Highnote, or Canva if you want maximum design freedom.</p>
            <p><strong style={{ color: "var(--ds-dark)" }}>You want a branded presentation generated fast, and you want to know when the seller opens it:</strong> PitchBoost. Paste the listing link, edit the draft, share, and watch the opens.</p>
            <p><strong style={{ color: "var(--ds-dark)" }}>You already have a template you love:</strong> PowerPoint or Google Slides still get the job done.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header" style={{ textAlign: "center" }}>
            <div className="section-label" style={{ justifyContent: "center" }}><span>FAQ</span></div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--ds-dark)" }}>Listing presentation software FAQ</h2>
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
            <h2>Win the listing with a presentation built in a minute</h2>
            <p>Paste a Zillow or Redfin link and PitchBoost drafts a polished, on-brand listing presentation, then shows you when the seller opens it. Free to start.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Build a listing presentation free</a>
          </div>
        </div>
      </section>
    </>
  );
}
