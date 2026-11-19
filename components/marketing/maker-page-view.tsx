import type { Metadata } from "next";
import Link from "next/link";
import DeckMaker from "@/components/marketing/deck-maker";
import { MAKERS, MAKERS_UPDATED, getMaker, type MakerPage } from "@/lib/makers";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
// A file needs an account: straight to the upload screen.
const SIGNUP_UPLOAD = `${APP_URL}/signup?intent=rebuild`;
const BASE = "https://pitchboost.ai";

const UI = {
  home: "Home",
  hub: "Free Tools",
  getLabel: "What you get",
  getTitle: "A real deck, not a mockup",
  faqLabel: "FAQ",
  faqTitle: "Questions people ask",
  moreLabel: "More free tools",
  moreTitle: "Starting from something else?",
  guidesLabel: "Worth reading next",
  toBox: "Make mine now",
};

export function makerPageMetadata(slug: string): Metadata {
  const page = getMaker(slug);
  if (!page) return {};
  const path = `/tools/${slug}`;
  return {
    // metaTitle already ends in "| PitchBoost"; the layout template would add it twice.
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: page.ogTitle, description: page.metaDescription, url: `${BASE}${path}` },
  };
}

const card = { background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 24px" } as const;

export default function MakerPageView({ page }: { page: MakerPage }) {
  const pageUrl = `${BASE}/tools/${page.slug}`;
  const others = MAKERS.filter((m) => m.slug !== page.slug);

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `PitchBoost ${page.navLabel}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: pageUrl,
    description: page.metaDescription,
    dateModified: page.updated ?? MAKERS_UPDATED,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "PitchBoost", url: BASE },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: UI.home, item: BASE },
      { "@type": "ListItem", position: 2, name: UI.hub, item: `${BASE}/tools` },
      { "@type": "ListItem", position: 3, name: page.navLabel, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{ padding: "120px 0 40px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href="/tools" style={{ color: "inherit", textDecoration: "none" }}>{UI.hub}</Link>
              <span style={{ opacity: 0.4 }}>{"›"}</span>
              <span>{page.eyebrow}</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 860, margin: "0 auto 18px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            {page.heroHeadline}
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>
            {page.heroSubhead}
          </p>
          {page.upload && (
            <div style={{ marginTop: 28 }}>
              <a href={SIGNUP_UPLOAD} className="btn btn-primary btn-lg">{page.upload.button}</a>
              <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", marginTop: 12 }}>{page.upload.note}</p>
            </div>
          )}
        </div>
      </section>

      {/* The box. It makes a real deck, so it sits above everything that explains it. */}
      <section id="make" style={{ padding: "0 0 64px", background: "var(--ds-bg-light)", scrollMarginTop: 90 }}>
        <div className="mkt-container">
          {page.upload && (
            <p style={{ textAlign: "center", fontSize: 14, fontWeight: 600, color: "var(--ds-text-secondary)", margin: "0 0 14px" }}>{page.upload.tryLabel}</p>
          )}
          <DeckMaker
            tool={page.slug}
            label={page.box.label}
            placeholder={page.box.placeholder}
            button={page.box.button}
            hint={page.box.hint}
            kind={page.box.kind}
            forLabel={page.box.forLabel}
            examples={page.examples}
            id={`maker-${page.slug}`}
          />
        </div>
      </section>

      {/* Numbered because the order is the point. */}
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 860 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{page.outlineLabel}</span></div>
            <h2>{page.outlineTitle}</h2>
            <p>{page.outlineBody}</p>
          </div>
          <ol className="fade-up" style={{ listStyle: "none", padding: 0, margin: "40px 0 0", display: "grid", gap: 12 }}>
            {page.outline.map((o, i) => (
              <li key={o.title} style={{ ...card, display: "flex", gap: 16, alignItems: "flex-start", padding: "18px 22px" }}>
                <span style={{ width: 30, height: 30, borderRadius: 9, background: "#1F6B6B", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{i + 1}</span>
                <span>
                  <span style={{ display: "block", fontWeight: 700, fontSize: 15, color: "var(--ds-text-primary)" }}>{o.title}</span>
                  <span style={{ display: "block", fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.6, marginTop: 2 }}>{o.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{UI.getLabel}</span></div>
            <h2>{UI.getTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginTop: 40 }}>
            {page.gets.map(({ title, body }) => (
              <div key={title} style={{ ...card, background: "var(--ds-bg)" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{UI.faqLabel}</span></div>
            <h2>{UI.faqTitle}</h2>
          </div>
          <div className="fade-up" style={{ marginTop: 40, display: "grid", gap: 12 }}>
            {page.faqs.map(({ q, a }) => (
              <details key={q} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "18px 22px" }}>
                <summary style={{ fontWeight: 600, fontSize: 15, color: "var(--ds-text-primary)", cursor: "pointer" }}>{q}</summary>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, marginTop: 12, marginBottom: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{UI.moreLabel}</span></div>
            <h2>{UI.moreTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18, marginTop: 40 }}>
            {others.map((m) => (
              <Link key={m.slug} href={`/tools/${m.slug}`} style={{ ...card, background: "var(--ds-bg)", textDecoration: "none", display: "block" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{m.navLabel}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{m.hubDesc}</p>
              </Link>
            ))}
          </div>
          <div className="fade-up" style={{ marginTop: 28 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ds-text-secondary)", marginBottom: 10 }}>{UI.guidesLabel}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
              {page.guides.map((g) => (
                <li key={g.href}>
                  <Link href={g.href} style={{ color: "var(--ds-text-primary)", fontWeight: 600, fontSize: 14.5, textDecoration: "none" }}>{g.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mkt-section" style={{ background: "var(--ds-dark)", textAlign: "center" }}>
        <div className="mkt-container">
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, maxWidth: 720, margin: "0 auto 28px" }}>{page.ctaHeadline}</h2>
          {page.upload ? (
            <a href={SIGNUP_UPLOAD} className="btn btn-primary btn-lg">{page.upload.button}</a>
          ) : (
            <a href="#make" className="btn btn-primary btn-lg">{UI.toBox}</a>
          )}
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 13, marginTop: 16 }}>{page.upload ? page.upload.note : page.box.hint}</p>
        </div>
      </section>
    </>
  );
}
