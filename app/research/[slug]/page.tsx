import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESEARCH, getStudy } from "@/lib/research";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RESEARCH.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getStudy(slug);
  if (!s) return {};
  return {
    title: { absolute: `${s.title} | PitchBoost Research` },
    description: s.metaDescription,
    alternates: { canonical: `https://pitchboost.ai/research/${s.slug}` },
    openGraph: { title: s.title, description: s.metaDescription, type: "article", images: [{ url: "https://pitchboost.ai/og-image.png", width: 1310, height: 820 }] },
  };
}

function Bar({ pct }: { pct: number }) {
  return (
    <div aria-hidden="true" style={{ height: 8, background: "var(--ds-border)", borderRadius: 4, overflow: "hidden", marginTop: 6 }}>
      <div style={{ width: `${Math.max(pct, 0.5)}%`, height: "100%", background: "linear-gradient(90deg, #1F6B6B, #2a8f8f)", borderRadius: 4 }} />
    </div>
  );
}

export default async function ResearchStudyPage({ params }: Props) {
  const { slug } = await params;
  const s = getStudy(slug);
  if (!s) notFound();
  const url = `https://pitchboost.ai/research/${s.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: s.title,
    description: s.metaDescription,
    url,
    datePublished: s.published,
    dateModified: s.updated,
    isAccessibleForFree: true,
    author: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
    publisher: { "@type": "Organization", name: "PitchBoost", legalName: "ARK Holdings, LLC", url: "https://pitchboost.ai", logo: { "@type": "ImageObject", url: "https://pitchboost.ai/logo.png" } },
    about: { "@type": "Thing", name: "Presentation software usage data" },
  };
  const datasetLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: s.title,
    description: `${s.headline} Sample: ${s.sample}. Window: ${s.window}.`,
    url,
    creator: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
    datePublished: s.published,
    dateModified: s.updated,
    temporalCoverage: s.window,
    isAccessibleForFree: true,
    license: "https://creativecommons.org/licenses/by/4.0/",
    variableMeasured: s.sections.flatMap((sec) => (sec.stats ?? []).map((st) => ({ "@type": "PropertyValue", name: st.label, value: st.value }))),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Research", item: "https://pitchboost.ai/research" },
      { "@type": "ListItem", position: 3, name: s.title, item: url },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <section className="legal-hero">
        <div className="mkt-container">
          <div style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}>
            <div className="section-label"><Link href="/research" style={{ color: "inherit", textDecoration: "none" }}>Research</Link></div>
          </div>
          <h1 style={{ textWrap: "balance" }}>{s.title}</h1>
          <p style={{ fontSize: 13, color: "var(--ds-text-tertiary)" }}>
            Published <time dateTime={s.published}>{s.published}</time>
            {s.updated !== s.published && <> · Updated <time dateTime={s.updated}>{s.updated}</time></>}
            {" "}· Sample: {s.sample} · {s.window}
          </p>
        </div>
      </section>
      <article className="legal-content">
        <p style={{ fontSize: "1.05rem", color: "var(--ds-text)", lineHeight: 1.75, fontWeight: 500 }}>{s.headline}</p>
        {s.intro.map((p, i) => <p key={i}>{p}</p>)}

        {s.sections.map((sec) => (
          <section key={sec.heading}>
            <h2>{sec.heading}</h2>
            {sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {sec.stats && (
              <dl style={{ display: "grid", gap: 14, margin: "18px 0 8px" }}>
                {sec.stats.map((st) => (
                  <div key={st.label} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "12px 16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                      <dt style={{ fontSize: 14, color: "var(--ds-text-secondary)" }}>{st.label}</dt>
                      <dd style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "var(--ds-text)", fontVariantNumeric: "tabular-nums" }}>{st.value}</dd>
                    </div>
                    {typeof st.pct === "number" && <Bar pct={st.pct} />}
                  </div>
                ))}
              </dl>
            )}
          </section>
        ))}

        <h2>Method</h2>
        <ul>{s.method.map((m, i) => <li key={i}>{m}</li>)}</ul>

        <h2>Limitations</h2>
        <ul>{s.limitations.map((m, i) => <li key={i}>{m}</li>)}</ul>

        <h2>How to cite</h2>
        <p>Free to quote and reproduce with attribution (CC BY 4.0). Suggested citation:</p>
        <pre style={{ whiteSpace: "pre-wrap", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 10, padding: "12px 14px", fontSize: 13 }}>{s.cite}</pre>
        <p>
          Questions about the data: <a href="mailto:support@pitchboost.ai">support@pitchboost.ai</a>. Other studies: <Link href="/research">the research index</Link>.
        </p>
      </article>
    </>
  );
}
