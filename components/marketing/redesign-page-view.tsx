import { REDESIGNS_UPDATED } from "@/lib/page-dates";
import type { Metadata } from "next";
import Link from "next/link";
import HtmlLang from "@/components/marketing/html-lang";
import { getRedesigns, getRedesignFor, getRedesignSteps, type RedesignPage } from "@/lib/redesigns";
import { LOCALE_NAME, LOCALE_PREFIX, LOCALES, OG_LOCALE, REDESIGN_UI, languageAlternates, type Locale } from "@/lib/redesign-i18n";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
// Every CTA in this cluster carries the rebuild intent: the app reads it and
// lands the signup directly on the file-upload screen.
const SIGNUP_URL = `${APP_URL}/signup?intent=rebuild`;
const BASE = "https://pitchboost.ai";

export function redesignPageMetadata(locale: Locale, slug: string): Metadata {
  const page = getRedesignFor(locale, slug);
  if (!page) return {};
  const path = `/redesign/${slug}`;
  return {
    // metaTitle already ends in "| PitchBoost"; the layout template would add it twice.
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `${LOCALE_PREFIX[locale]}${path}`, languages: languageAlternates(path) },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      locale: OG_LOCALE[locale],
      images: [{ url: `${BASE}/og-image.png`, width: 1310, height: 820 }],
    },
  };
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, color: "#1F6B6B" }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/** "Also in: Español · Português" for the same slug in the other locales. */
export function LocaleSwitch({ locale, path }: { locale: Locale; path: string }) {
  const ui = REDESIGN_UI[locale];
  const others = LOCALES.filter((l) => l !== locale);
  return (
    <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 8 }}>
      {ui.alsoIn}{" "}
      {others.map((l, i) => (
        <span key={l}>
          {i > 0 && " · "}
          <Link href={`${LOCALE_PREFIX[l]}${path}`} hrefLang={l} style={{ color: "inherit" }}>{LOCALE_NAME[l]}</Link>
        </span>
      ))}
    </p>
  );
}

export default function RedesignPageView({ locale, page }: { locale: Locale; page: RedesignPage }) {
  const ui = REDESIGN_UI[locale];
  const prefix = LOCALE_PREFIX[locale];
  const steps = getRedesignSteps(locale);
  const related = getRedesigns(locale).filter((r) => r.slug !== page.slug).slice(0, 3);
  const pageUrl = `${BASE}${prefix}/redesign/${page.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    description: page.metaDescription,
    url: pageUrl,
    inLanguage: locale,
    dateModified: page.updated ?? REDESIGNS_UPDATED,
    publisher: { "@type": "Organization", name: "PitchBoost", url: BASE },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.breadcrumbHome, item: `${BASE}${prefix || "/"}` },
      { "@type": "ListItem", position: 2, name: ui.breadcrumbHub, item: `${BASE}${prefix}/redesign` },
      { "@type": "ListItem", position: 3, name: page.navLabel, item: pageUrl },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: page.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <div lang={locale}>
      {locale !== "en" && <HtmlLang lang={locale} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href={`${prefix}/redesign`} style={{ color: "inherit", textDecoration: "none" }}>{ui.breadcrumbHub}</Link>
              <span style={{ opacity: 0.4 }}>&rsaquo;</span>
              <span>{page.navLabel}</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 860, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            {page.heroHeadline}
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            {page.heroSubhead}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">{ui.ctaPrimary}</a>
            <Link href="/features/upload-and-redesign" className="btn btn-ghost btn-lg">{ui.ctaSecondary}</Link>
          </div>
          <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 14 }}>{ui.finePrint}</p>
          <LocaleSwitch locale={locale} path={`/redesign/${page.slug}`} />
        </div>
      </section>

      {/* How it works */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{ui.howLabel}</span></div>
            <h2>{ui.howTitle}</h2>
            <p>{ui.howBody}</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
            {steps.map(({ step, title, body }) => (
              <div key={step} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "26px 28px" }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: "#1F6B6B", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, marginBottom: 14 }}>{step}</div>
                <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{ui.whyLabel}</span></div>
            <h2>{ui.whyTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
            {page.painPoints.map(({ title, body }) => (
              <div key={title} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{ui.getLabel}</span></div>
            <h2>{ui.getTitle}</h2>
          </div>
          <ul className="fade-up" style={{ listStyle: "none", padding: 0, marginTop: 40, display: "grid", gap: 14 }}>
            {page.outcomes.map((o) => (
              <li key={o} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, color: "var(--ds-text-primary)", lineHeight: 1.6 }}>
                <CheckIcon />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{ui.faqLabel}</span></div>
            <h2>{ui.faqTitle}</h2>
          </div>
          <div className="fade-up" style={{ marginTop: 40, display: "grid", gap: 12 }}>
            {page.faqs.map(({ q, a }) => (
              <details key={q} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "18px 22px" }}>
                <summary style={{ fontWeight: 600, fontSize: 15, color: "var(--ds-text-primary)", cursor: "pointer" }}>{q}</summary>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, marginTop: 12, marginBottom: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{ui.relatedLabel}</span></div>
            <h2>{ui.relatedTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
            {related.map((r) => (
              <Link key={r.slug} href={`${prefix}/redesign/${r.slug}`} style={{ textDecoration: "none", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px", display: "block" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{r.navLabel}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{r.heroSubhead.slice(0, 110)}&hellip;</p>
              </Link>
            ))}
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: 20 }}>
            <Link href="/features/upload-and-redesign" style={{ textDecoration: "none", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px", display: "block" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{ui.relatedFeatureTitle}</h3>
              <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{ui.relatedFeatureBody}</p>
            </Link>
            <Link href="/features/bulk-rebuild" style={{ textDecoration: "none", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px", display: "block" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{ui.relatedBulkTitle}</h3>
              <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{ui.relatedBulkBody}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-section" style={{ background: "var(--ds-dark)", textAlign: "center" }}>
        <div className="mkt-container">
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, maxWidth: 700, margin: "0 auto 16px" }}>{page.ctaHeadline}</h2>
          <p style={{ color: "rgba(255,255,255,.75)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>{ui.ctaBody}</p>
          <a href={SIGNUP_URL} className="btn btn-primary btn-lg">{ui.ctaPrimary}</a>
        </div>
      </section>
    </div>
  );
}
