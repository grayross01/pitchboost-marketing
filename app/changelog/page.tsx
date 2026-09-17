import type { Metadata } from "next";
import Link from "next/link";
import { CHANGELOG } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog | What changed in PitchBoost",
  description: "Dated, customer-facing changes to PitchBoost: the deck rebuilder, exports, sharing, billing, emails and the ChatGPT and Claude connectors.",
  alternates: { canonical: "https://pitchboost.ai/changelog" },
  openGraph: {
    title: "PitchBoost changelog",
    description: "What changed in PitchBoost and when.",
  },
};

function fmt(d: string): string {
  return new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export default function ChangelogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "PitchBoost changelog",
    url: "https://pitchboost.ai/changelog",
    dateModified: CHANGELOG[0].date,
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: CHANGELOG.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: e.title, description: e.body })),
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="legal-hero">
        <div className="mkt-container">
          <h1>Changelog</h1>
          <p>What changed in PitchBoost, and when. Customer-facing changes only.</p>
        </div>
      </section>
      <div className="legal-content">
        {CHANGELOG.map((e) => (
          <article key={e.date + e.title} style={{ borderTop: "1px solid var(--ds-border)", padding: "22px 0" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap", marginBottom: 6 }}>
              <time dateTime={e.date} style={{ fontSize: 13, color: "var(--ds-text-tertiary)", fontVariantNumeric: "tabular-nums" }}>{fmt(e.date)}</time>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1F6B6B" }}>{e.area}</span>
            </div>
            <h2 style={{ margin: "0 0 8px", fontSize: "1.15rem" }}>{e.title}</h2>
            <p style={{ margin: 0 }}>{e.body}</p>
          </article>
        ))}
        <p style={{ marginTop: 28 }}>
          Plans and limits are on the <Link href="/pricing">pricing page</Link>; how each feature works is in the{" "}
          <Link href="/help">help center</Link>.
        </p>
      </div>
    </>
  );
}
