import type { Metadata } from "next";
import Link from "next/link";
import HtmlLang from "@/components/marketing/html-lang";
import { HELP_CATEGORY_ORDER, getHelpArticleFor, getHelpArticles, type HelpArticle } from "@/lib/help";
import { HELP_UI } from "@/lib/help-i18n";
import { HELP_UPDATED } from "@/lib/page-dates";
import { LOCALES, LOCALE_NAME, LOCALE_PREFIX, OG_LOCALE, languageAlternates, type Locale } from "@/lib/redesign-i18n";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup?intent=rebuild`;
const BASE = "https://pitchboost.ai";

/** Every help article exists in all three locales (the translation job
 *  refuses to write a partial file), so hreflang can list all siblings. */
export function helpHubMetadata(locale: Locale): Metadata {
  const ui = HELP_UI[locale];
  return {
    title: { absolute: `${ui.hubMetaTitle} | PitchBoost` },
    description: ui.hubMetaDescription,
    alternates: { canonical: `${LOCALE_PREFIX[locale]}/help`, languages: languageAlternates("/help") },
    openGraph: { title: ui.hubMetaTitle, description: ui.hubMetaDescription, locale: OG_LOCALE[locale] },
  };
}

export function helpArticleMetadata(locale: Locale, slug: string): Metadata {
  const a = getHelpArticleFor(locale, slug);
  if (!a) return {};
  const path = `/help/${slug}`;
  return {
    title: { absolute: `${a.title} | PitchBoost Help` },
    description: a.metaDescription,
    alternates: { canonical: `${LOCALE_PREFIX[locale]}${path}`, languages: languageAlternates(path) },
    openGraph: { title: a.title, description: a.metaDescription, locale: OG_LOCALE[locale], type: "article" },
  };
}

function LocaleSwitch({ locale, path }: { locale: Locale; path: string }) {
  const ui = HELP_UI[locale];
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

const cardStyle = {
  textDecoration: "none",
  background: "var(--ds-bg-light)",
  border: "1px solid var(--ds-border)",
  borderRadius: 14,
  padding: "22px 24px",
  display: "block",
} as const;

export function HelpHubView({ locale }: { locale: Locale }) {
  const ui = HELP_UI[locale];
  const prefix = LOCALE_PREFIX[locale];
  const articles = getHelpArticles(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: ui.hubMetaTitle,
    description: ui.hubMetaDescription,
    url: `${BASE}${prefix}/help`,
    inLanguage: locale,
    dateModified: HELP_UPDATED,
    publisher: { "@type": "Organization", name: "PitchBoost", url: BASE },
    hasPart: articles.map((a) => ({ "@type": "TechArticle", headline: a.title, url: `${BASE}${prefix}/help/${a.slug}` })),
  };
  return (
    <div lang={locale}>
      {locale !== "en" && <HtmlLang lang={locale} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section style={{ padding: "120px 0 64px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 820, margin: "0 auto 16px", lineHeight: 1.15 }}>{ui.hubTitle}</h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>{ui.hubSubhead}</p>
          <LocaleSwitch locale={locale} path="/help" />
        </div>
      </section>
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 960 }}>
          {HELP_CATEGORY_ORDER.map((cat) => {
            const items = articles.filter((a) => a.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} style={{ marginBottom: 44 }}>
                <h2 style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--ds-text-tertiary)", marginBottom: 14 }}>{ui.categories[cat]}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                  {items.map((a) => (
                    <Link key={a.slug} href={`${prefix}/help/${a.slug}`} style={cardStyle}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8, lineHeight: 1.35 }}>{a.title}</h3>
                      <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{a.metaDescription}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <SupportBox locale={locale} />
        </div>
      </section>
    </div>
  );
}

function SupportBox({ locale }: { locale: Locale }) {
  const ui = HELP_UI[locale];
  return (
    <div style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "24px 28px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
      <div style={{ maxWidth: 560 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--ds-text-primary)", margin: "0 0 6px" }}>{ui.supportTitle}</h2>
        <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{ui.supportBody}</p>
      </div>
      <a href="mailto:support@pitchboost.ai" className="btn btn-ghost">{ui.supportCta}</a>
    </div>
  );
}

export function HelpArticleView({ locale, article }: { locale: Locale; article: HelpArticle }) {
  const ui = HELP_UI[locale];
  const prefix = LOCALE_PREFIX[locale];
  const path = `/help/${article.slug}`;
  const pageUrl = `${BASE}${prefix}${path}`;
  const related = article.related.map((s) => getHelpArticleFor(locale, s)).filter((a): a is HelpArticle => Boolean(a));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.metaDescription,
    url: pageUrl,
    inLanguage: locale,
    dateModified: article.updated,
    author: { "@type": "Organization", name: "PitchBoost", url: BASE },
    publisher: { "@type": "Organization", name: "PitchBoost", url: BASE },
    about: { "@type": "SoftwareApplication", name: "PitchBoost", applicationCategory: "BusinessApplication", url: BASE },
  };
  const howToSchema = article.steps
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: article.title,
        description: article.answer,
        inLanguage: locale,
        step: article.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.body })),
      }
    : null;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.breadcrumbHome, item: `${BASE}${prefix || "/"}` },
      { "@type": "ListItem", position: 2, name: ui.breadcrumbHub, item: `${BASE}${prefix}/help` },
      { "@type": "ListItem", position: 3, name: article.title, item: pageUrl },
    ],
  };

  return (
    <div lang={locale}>
      {locale !== "en" && <HtmlLang lang={locale} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="legal-hero">
        <div className="mkt-container">
          <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href={`${prefix}/help`} style={{ color: "inherit", textDecoration: "none" }}>{ui.breadcrumbHub}</Link>
              <span style={{ opacity: 0.4 }}>/</span>
              <span>{ui.categories[article.category]}</span>
            </div>
          </div>
          <h1 style={{ textWrap: "balance" }}>{article.title}</h1>
          <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)" }}>
            {ui.updatedLabel} {article.updated}
          </p>
          <LocaleSwitch locale={locale} path={path} />
        </div>
      </section>

      <article className="legal-content">
        <p style={{ fontSize: "1.05rem", color: "var(--ds-text)", lineHeight: 1.75, fontWeight: 500 }}>{article.answer}</p>

        {article.steps && (
          <>
            <h2>{ui.stepsLabel}</h2>
            <ol>
              {article.steps.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}.</strong> {s.body}
                </li>
              ))}
            </ol>
          </>
        )}

        {article.sections?.map((sec) => (
          <div key={sec.heading}>
            <h2>{sec.heading}</h2>
            {sec.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ))}

        <h2>{ui.faqLabel}</h2>
        {article.faqs.map((f) => (
          <div key={f.q} style={{ marginBottom: 18 }}>
            <p style={{ marginBottom: 4 }}><strong>{f.q}</strong></p>
            <p style={{ marginTop: 0 }}>{f.a}</p>
          </div>
        ))}

        {related.length > 0 && (
          <>
            <h2>{ui.relatedLabel}</h2>
            <ul>
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`${prefix}/help/${r.slug}`}>{r.title}</Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <div style={{ marginTop: 40 }}>
          <SupportBox locale={locale} />
        </div>
      </article>

      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box fade-up">
            <h2>{ui.ctaTitle}</h2>
            <p>{ui.ctaBody}</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">{ui.ctaButton}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
