import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPETITORS, peersOf, type Competitor } from "@/lib/competitors";
import { COMPETITORS_UPDATED } from "@/lib/page-dates";

/**
 * "<Competitor> alternatives": one page per tool we already compare against,
 * built from the same checked comparison data (specs, pricing, best-for lists,
 * checked dates). PitchBoost is listed first and labelled as ours; the other
 * tools are described with the same facts their own comparison pages use, and
 * every page says when the competitor is the better choice.
 */

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const BASE = "https://pitchboost.ai";

interface Props {
  params: Promise<{ slug: string }>;
}

function byAlt(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.altSlug === slug);
}

export async function generateStaticParams() {
  return COMPETITORS.filter((c) => c.altSlug).map((c) => ({ slug: c.altSlug as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = byAlt(slug);
  if (!c) return {};
  const count = peersOf(c).length + 2; // the tool, PitchBoost, and the others on its shelf
  const title = `${c.name} alternatives (2026): ${count} tools compared, prices checked`;
  const description = `${count} alternatives to ${c.name} including PitchBoost, with checked prices, free plans, PowerPoint export, brand handling and when to stay with ${c.name}. Last checked ${c.updated ?? COMPETITORS_UPDATED}.`;
  return {
    title: { absolute: `${title} | PitchBoost` },
    description,
    alternates: { canonical: `${BASE}/alternatives/${slug}` },
    openGraph: { title, description },
  };
}

export default async function AlternativesPage({ params }: Props) {
  const { slug } = await params;
  const c = byAlt(slug);
  if (!c) notFound();
  const others = peersOf(c);
  const count = others.length + 2;
  const updated = c.updated ?? COMPETITORS_UPDATED;
  const url = `${BASE}/alternatives/${slug}`;
  const labels = (c.specs ?? []).map((s) => s.label);
  const cell = (comp: Competitor, label: string) => comp.specs?.find((s) => s.label === label)?.competitor ?? "n/a";
  const pbCell = (label: string) => c.specs?.find((s) => s.label === label)?.pitchboost ?? "n/a";

  const faqs = [
    {
      q: `Is there a free alternative to ${c.name}?`,
      a: `PitchBoost has a free plan: one AI deck a month, up to 10 slides, with a small badge, plus PDF and PowerPoint export. ${others.map((o) => `${o.name}: ${o.competitorPricing.split(".")[0]}.`).join(" ")}`,
    },
    {
      q: `When is ${c.name} the better choice?`,
      a: `${c.name} is the better fit for ${c.competitorBestFor.slice(0, 3).map((x) => x.toLowerCase()).join(", ")}. PitchBoost is built for one job, rebuilding or building a deck for a specific prospect in your brand, and does not try to be a general workspace.`,
    },
    {
      q: `Can I move my existing decks to an alternative?`,
      a: `Export them from ${c.name} as .pptx first. PitchBoost rebuilds a .pptx in your brand and keeps the content; the other tools import a .pptx as a starting point with varying fidelity. Nothing here reads a ${c.name} link directly.`,
    },
    {
      q: "How current is this page?",
      a: `Prices and limits were checked on ${updated} against each tool's published pricing. If a number here is out of date, email support@pitchboost.ai and it will be corrected with a new date.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${c.name} alternatives`,
    url,
    dateModified: updated,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "PitchBoost", url: BASE },
      ...others.map((o, i) => ({ "@type": "ListItem", position: i + 2, name: o.name, url: `${BASE}/compare/${o.slug}` })),
    ],
  };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Compare", item: `${BASE}/compare` },
      { "@type": "ListItem", position: 3, name: `${c.name} alternatives`, item: url },
    ],
  };

  const card: React.CSSProperties = { background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 24px" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <section style={{ padding: "120px 0 64px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href="/compare" style={{ color: "inherit", textDecoration: "none" }}>Compare</Link>
              <span style={{ opacity: 0.4 }}>/</span>
              <span>{c.name} alternatives</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 820, margin: "0 auto 16px", lineHeight: 1.15, textWrap: "balance" }}>
            Alternatives to {c.name} in 2026
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.05rem", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            {count} tools, one of them ours, compared on the things that decide a purchase: free plan, first paid tier, what happens to a deck you already have, and who each tool is actually for. Checked on {updated}.
          </p>
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 900 }}>
          <div className="legal-content" style={{ padding: 0 }}>
            <h2>Why people look for a {c.name} alternative</h2>
            <p>{c.competitorSummary}</p>
            {c.keyDifferences.slice(0, 2).map((d) => (
              <p key={d.title}><strong>{d.title}.</strong> {d.body}</p>
            ))}

            <h2>When {c.name} is the better choice</h2>
            <p>Not everyone should switch. {c.name} remains the better fit for:</p>
            <ul>{c.competitorBestFor.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--ds-dark)", margin: "40px 0 16px" }}>The alternatives</h2>
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ ...card, borderColor: "rgba(31,107,107,0.35)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "baseline" }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--ds-text-primary)" }}>1. PitchBoost <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1F6B6B", marginLeft: 8 }}>ours</span></h3>
                <span style={{ fontSize: 13, color: "var(--ds-text-secondary)" }}>{c.pitchboostPricing}</span>
              </div>
              <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "10px 0" }}>
                Upload the deck you have, point PitchBoost at your website, and get it back redesigned in your brand with every number checked against your original. Also builds new decks from a brief, publishes a tracked link, exports editable PowerPoint, and works from inside ChatGPT and Claude.
              </p>
              <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", margin: 0 }}><strong>Best for:</strong> {c.pitchboostBestFor.join("; ")}.</p>
              <p style={{ fontSize: 13, margin: "10px 0 0" }}><Link href={`/compare/${c.slug}`}>PitchBoost vs {c.name} in detail</Link></p>
            </div>
            {others.map((o, i) => (
              <div key={o.slug} style={card}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "baseline" }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--ds-text-primary)" }}>{i + 2}. {o.name}</h3>
                  <span style={{ fontSize: 13, color: "var(--ds-text-secondary)" }}>{o.competitorPricing}</span>
                </div>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "10px 0" }}>{o.competitorSummary}</p>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", margin: 0 }}><strong>Best for:</strong> {o.competitorBestFor.join("; ")}.</p>
                <p style={{ fontSize: 13, margin: "10px 0 0" }}>
                  <Link href={`/compare/${o.slug}`}>PitchBoost vs {o.name}</Link>
                  {o.pricingUrl && <> · <a href={o.pricingUrl} target="_blank" rel="noopener noreferrer">{o.name} pricing</a></>}
                </p>
              </div>
            ))}
          </div>

          {labels.length > 0 && (
            <>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--ds-dark)", margin: "44px 0 12px" }}>Side by side</h2>
              <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", marginBottom: 14 }}>List prices in USD, checked on {updated}. Sources: {[c, ...others].filter((x) => x.pricingUrl).map((x, i, arr) => <span key={x.slug}><a href={x.pricingUrl} target="_blank" rel="noopener noreferrer">{x.name}</a>{i < arr.length - 1 ? ", " : ""}</span>)}.</p>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 720 }}>
                  <thead>
                    <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ds-border)" }}>
                      <th style={{ padding: "8px 10px 8px 0" }}></th>
                      <th style={{ padding: "8px 10px", color: "#1F6B6B" }}>PitchBoost</th>
                      <th style={{ padding: "8px 10px" }}>{c.name}</th>
                      {others.map((o) => <th key={o.slug} style={{ padding: "8px 10px" }}>{o.name}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {labels.map((label) => (
                      <tr key={label} style={{ borderTop: "1px solid var(--ds-border)", verticalAlign: "top" }}>
                        <th scope="row" style={{ textAlign: "left", padding: "10px 10px 10px 0", fontWeight: 600, color: "var(--ds-text)", whiteSpace: "nowrap" }}>{label}</th>
                        <td style={{ padding: "10px", color: "var(--ds-text-light)", lineHeight: 1.5 }}>{pbCell(label)}</td>
                        <td style={{ padding: "10px", color: "var(--ds-text-light)", lineHeight: 1.5 }}>{cell(c, label)}</td>
                        {others.map((o) => <td key={o.slug} style={{ padding: "10px", color: "var(--ds-text-light)", lineHeight: 1.5 }}>{cell(o, label)}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          <div className="legal-content" style={{ padding: "40px 0 0" }}>
            <h2>Questions</h2>
            {faqs.map((f) => (
              <div key={f.q} style={{ marginBottom: 16 }}>
                <p style={{ marginBottom: 4 }}><strong>{f.q}</strong></p>
                <p style={{ marginTop: 0 }}>{f.a}</p>
              </div>
            ))}
            <p style={{ fontSize: 13, color: "var(--ds-text-tertiary)" }}>Last checked {updated}. Other pages in this series: {COMPETITORS.filter((o) => o.altSlug && o.slug !== c.slug).map((o, i, arr) => <span key={o.slug}><Link href={`/alternatives/${o.altSlug}`}>{o.name} alternatives</Link>{i < arr.length - 1 ? ", " : ""}</span>)}.</p>
          </div>
        </div>
      </section>

      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box fade-up">
            <h2>Try the one that starts with your deck</h2>
            <p>Upload the PowerPoint you have and see it rebuilt in your brand. One free deck a month, no credit card.</p>
            <a href={`${APP_URL}/signup?intent=rebuild`} className="btn btn-primary btn-lg">Upload Your Deck Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
