import type { Metadata } from "next";
import Link from "next/link";
import HtmlLang from "@/components/marketing/html-lang";
import { LocaleLinks } from "@/components/marketing/presentation-hub-view";
import TopicBox, { presentSignupUrl } from "@/components/marketing/topic-box";
import { PRESENTATIONS_UPDATED, type PresentationPage } from "@/lib/presentations";
import { PRESENTATION_UI, getPresentationFor, getPresentations } from "@/lib/presentations-i18n";
import { LOCALES, LOCALE_PREFIX, OG_LOCALE, type Locale } from "@/lib/redesign-i18n";
import { getRedesignFor } from "@/lib/redesigns";
import { guidesForPresentation } from "@/lib/guides";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
// The other way in: a deck they already have, straight to the upload screen.
const SIGNUP_REBUILD = `${APP_URL}/signup?intent=rebuild`;
const BASE = "https://pitchboost.ai";

export function presentationPageMetadata(locale: Locale, slug: string): Metadata {
  const page = getPresentationFor(locale, slug);
  if (!page) return {};
  const path = `${LOCALE_PREFIX[locale]}/presentations/${slug}`;
  return {
    // metaTitle already ends in "| PitchBoost"; the layout template would add it twice.
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: path, languages: availableAlternates(slug) },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `${BASE}${path}`, locale: OG_LOCALE[locale] },
  };
}

/** The locales that have this page; a new English page ships before its translations. */
export function presentationLocales(slug: string): Locale[] {
  return LOCALES.filter((l) => !!getPresentationFor(l, slug));
}

/** hreflang alternates limited to the locales that actually have this page. */
function availableAlternates(slug: string): Record<string, string> {
  const path = `/presentations/${slug}`;
  const out: Record<string, string> = { en: path, "x-default": path };
  for (const l of presentationLocales(slug)) if (l !== "en") out[l] = `${LOCALE_PREFIX[l]}${path}`;
  return out;
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, color: "#1F6B6B" }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const card = { background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px" } as const;

export default function PresentationPageView({ locale, page }: { locale: Locale; page: PresentationPage }) {
  const ui = PRESENTATION_UI[locale];
  const prefix = LOCALE_PREFIX[locale];
  const pageUrl = `${BASE}${prefix}/presentations/${page.slug}`;
  const others = getPresentations(locale).filter((p) => p.slug !== page.slug).slice(0, 3);
  const redesigns = page.relatedRedesigns.map((s) => getRedesignFor(locale, s)).filter((r): r is NonNullable<typeof r> => !!r);
  // The guides are English blog posts.
  const guides = locale === "en" ? guidesForPresentation(page.slug) : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    description: page.metaDescription,
    url: pageUrl,
    inLanguage: locale,
    dateModified: page.updated ?? PRESENTATIONS_UPDATED,
    publisher: { "@type": "Organization", name: "PitchBoost", url: BASE },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.breadcrumbHome, item: `${BASE}${prefix || "/"}` },
      { "@type": "ListItem", position: 2, name: ui.breadcrumbHub, item: `${BASE}${prefix}/ai-presentation-maker` },
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

      {/* Hero: the topic box is the call to action */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href={`${prefix}/ai-presentation-maker`} style={{ color: "inherit", textDecoration: "none" }}>{ui.breadcrumbHub}</Link>
              <span style={{ opacity: 0.4 }}>&rsaquo;</span>
              <span>{page.navLabel}</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 860, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            {page.heroHeadline}
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 640, margin: "0 auto 32px", lineHeight: 1.7 }}>
            {page.heroSubhead}
          </p>
          <TopicBox placeholder={page.promptPlaceholder} forLabel={page.forLabel} label={ui.topicLabel} buttonLabel={ui.topicButton} />
          <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", marginTop: 16 }}>
            {ui.haveSlides} <a href={SIGNUP_REBUILD} style={{ color: "#1F6B6B", fontWeight: 600 }}>{ui.redesignLink}</a>{ui.redesignTail}
          </p>
          <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 6 }}>{ui.freeNote}</p>
          <LocaleLinks locale={locale} path={`/presentations/${page.slug}`} available={presentationLocales(page.slug)} />
        </div>
      </section>

      {/* The shape of the deck. Numbered because the order is the point. */}
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 860 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{ui.deckLabel}</span></div>
            <h2>{ui.deckTitle.replace("{forLabel}", page.forLabel)}</h2>
            <p>{ui.deckBody}</p>
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

      {/* The problem */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{ui.whyLabel}</span></div>
            <h2>{ui.whyTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 48 }}>
            {page.painPoints.map(({ title, body }) => (
              <div key={title} style={{ ...card, background: "var(--ds-bg)" }}>
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

      {/* Example prompts: each one opens the builder with it typed in */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 860 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{ui.tryLabel}</span></div>
            <h2>{ui.tryTitle}</h2>
            <p>{ui.tryBody}</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gap: 12, marginTop: 40 }}>
            {page.examplePrompts.map((p) => (
              <a key={p} href={presentSignupUrl(p, page.forLabel)} style={{ ...card, background: "var(--ds-bg)", display: "block", textDecoration: "none", color: "var(--ds-text-primary)", fontSize: 14.5, lineHeight: 1.6 }}>
                &ldquo;{p}&rdquo;
                <span style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "#1F6B6B", marginTop: 6 }}>{ui.tryLink} &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{ui.faqLabel}</span></div>
            <h2>{ui.faqTitle}</h2>
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

      {/* Related */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{ui.relatedLabel}</span></div>
            <h2>{ui.relatedTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 48 }}>
            {others.map((r) => (
              <Link key={r.slug} href={`${prefix}/presentations/${r.slug}`} style={{ ...card, background: "var(--ds-bg)", textDecoration: "none", display: "block" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{r.navLabel}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{r.heroSubhead.slice(0, 110).replace(/\s+\S*$/, "")}&hellip;</p>
              </Link>
            ))}
          </div>
          {redesigns.length > 0 && (
            <div className="fade-up" style={{ marginTop: 28 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ds-text-secondary)", marginBottom: 10 }}>{ui.haveSlides}</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
                {redesigns.map((r) => (
                  <li key={r.slug}>
                    <Link href={`${prefix}/redesign/${r.slug}`} style={{ color: "var(--ds-text-primary)", fontWeight: 600, fontSize: 14.5, textDecoration: "none" }}>{r.navLabel}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {guides.length > 0 && (
            <div className="fade-up" style={{ marginTop: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ds-text-secondary)", marginBottom: 10 }}>{ui.guidesLabel}</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/blog/${g.slug}`} style={{ color: "var(--ds-text-primary)", fontWeight: 600, fontSize: 14.5, textDecoration: "none" }}>{g.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-section" style={{ background: "var(--ds-dark)", textAlign: "center" }}>
        <div className="mkt-container">
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, maxWidth: 700, margin: "0 auto 28px" }}>{page.ctaHeadline}</h2>
          <TopicBox placeholder={page.promptPlaceholder} forLabel={page.forLabel} label={ui.topicLabel} buttonLabel={ui.topicButton} dark id="topic-bottom" />
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 13, marginTop: 16 }}>{ui.ctaNote}</p>
        </div>
      </section>
    </div>
  );
}
