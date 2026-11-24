import type { Metadata } from "next";
import Link from "next/link";
import DeckMaker from "@/components/marketing/deck-maker";
import { LocaleLinks } from "@/components/marketing/presentation-hub-view";
import { MAKERS_UPDATED, type MakerPage } from "@/lib/makers";
import { MAKER_UI, getMakerFor, getMakers, makerLocales } from "@/lib/makers-i18n";
import { PRESENTATION_UI, getPresentationFor } from "@/lib/presentations-i18n";
import { LOCALE_PREFIX, OG_LOCALE, type Locale } from "@/lib/redesign-i18n";
import { getRedesignFor } from "@/lib/redesigns";
import { localeDir, sharedCard } from "@/lib/locale-dir";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
// A file needs an account: straight to the upload screen.
const SIGNUP_UPLOAD = `${APP_URL}/signup?intent=rebuild`;
const BASE = "https://pitchboost.ai";
/** The English pages sit under the tools hub. No other language has that hub, so theirs sit under the presentation maker. */
const HUB_EN = { name: "Free Tools", path: "/tools" };

/** hreflang alternates limited to the locales that actually have this page. */
function availableAlternates(slug: string): Record<string, string> {
  const path = `/tools/${slug}`;
  const out: Record<string, string> = { en: path, "x-default": path };
  for (const l of makerLocales(slug)) if (l !== "en") out[l] = `${LOCALE_PREFIX[l]}${path}`;
  return out;
}

export function makerPageMetadata(locale: Locale, slug: string): Metadata {
  const page = getMakerFor(locale, slug);
  if (!page) return {};
  const path = `${LOCALE_PREFIX[locale]}/tools/${slug}`;
  return {
    // metaTitle already ends in "| PitchBoost"; the layout template would add it twice.
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: path, languages: availableAlternates(slug) },
    openGraph: { title: page.ogTitle, description: page.metaDescription, url: `${BASE}${path}`, locale: OG_LOCALE[locale], ...sharedCard(locale) },
  };
}

/**
 * Where a link written for the English page leads on this language's page:
 * the same page in the language when the site has one, and the English page,
 * marked as English, when it does not (the blog is English only).
 */
function localLink(locale: Locale, href: string): { href: string; english: boolean } {
  if (locale === "en") return { href, english: false };
  const prefix = LOCALE_PREFIX[locale];
  const [, family, slug] = /^\/(tools|presentations|redesign)\/([^/]+)$/.exec(href) ?? [];
  const here =
    href === "/ai-presentation-maker" ||
    (family === "tools" && !!getMakerFor(locale, slug)) ||
    (family === "presentations" && !!getPresentationFor(locale, slug)) ||
    (family === "redesign" && !!getRedesignFor(locale, slug));
  return here ? { href: `${prefix}${href}`, english: false } : { href, english: true };
}

const card = { background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 24px" } as const;

export default function MakerPageView({ locale = "en", page }: { locale?: Locale; page: MakerPage }) {
  const ui = MAKER_UI[locale];
  const chrome = PRESENTATION_UI[locale];
  const prefix = LOCALE_PREFIX[locale];
  const rtl = localeDir(locale) === "rtl";
  const pageUrl = `${BASE}${prefix}/tools/${page.slug}`;
  const hub = locale === "en" ? HUB_EN : { name: chrome.breadcrumbHub, path: `${prefix}/ai-presentation-maker` };
  const others = getMakers(locale).filter((m) => m.slug !== page.slug);

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `PitchBoost ${page.navLabel}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: pageUrl,
    description: page.metaDescription,
    inLanguage: locale,
    dateModified: page.updated ?? MAKERS_UPDATED,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "PitchBoost", url: BASE },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: page.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: chrome.breadcrumbHome, item: `${BASE}${prefix || ""}` },
      { "@type": "ListItem", position: 2, name: hub.name, item: `${BASE}${hub.path}` },
      { "@type": "ListItem", position: 3, name: page.navLabel, item: pageUrl },
    ],
  };

  return (
    <div lang={locale} dir={localeDir(locale)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{ padding: "120px 0 40px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href={hub.path} style={{ color: "inherit", textDecoration: "none" }}>{hub.name}</Link>
              <span style={{ opacity: 0.4 }}>{rtl ? "‹" : "›"}</span>
              <span>{page.eyebrow}</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 860, margin: "0 auto 18px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), var(--font-arabic), sans-serif" }}>
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
          <LocaleLinks locale={locale} path={`/tools/${page.slug}`} available={makerLocales(page.slug)} />
        </div>
      </section>

      {/* The box. It makes a real deck, so it sits above everything that explains it. */}
      <section id="make" style={{ padding: "0 0 64px", background: "var(--ds-bg-light)", scrollMarginTop: 90 }}>
        <div className="mkt-container">
          {page.upload && (
            <p style={{ textAlign: "center", fontSize: 14, fontWeight: 600, color: "var(--ds-text-secondary)", margin: "0 0 14px" }}>{page.upload.tryLabel}</p>
          )}
          <DeckMaker
            tool={locale === "en" ? page.slug : `${locale}/${page.slug}`}
            label={page.box.label}
            placeholder={page.box.placeholder}
            button={page.box.button}
            hint={page.box.hint}
            kind={page.box.kind}
            forLabel={page.box.forLabel}
            examples={page.examples}
            id={`maker-${page.slug}`}
            strings={ui.box}
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
              <li key={o.title} style={{ ...card, display: "flex", gap: 16, alignItems: "flex-start", padding: "18px 22px", textAlign: "start" }}>
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
            <div className="section-label"><span>{ui.getLabel}</span></div>
            <h2>{ui.getTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginTop: 40 }}>
            {page.gets.map(({ title, body }) => (
              <div key={title} style={{ ...card, background: "var(--ds-bg)", textAlign: "start" }}>
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
            <div className="section-label"><span>{ui.faqLabel}</span></div>
            <h2>{ui.faqTitle}</h2>
          </div>
          <div className="fade-up" style={{ marginTop: 40, display: "grid", gap: 12 }}>
            {page.faqs.map(({ q, a }) => (
              <details key={q} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "18px 22px", textAlign: "start" }}>
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
            <div className="section-label"><span>{ui.moreLabel}</span></div>
            <h2>{ui.moreTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18, marginTop: 40 }}>
            {others.map((m) => (
              <Link key={m.slug} href={`${prefix}/tools/${m.slug}`} style={{ ...card, background: "var(--ds-bg)", textDecoration: "none", display: "block", textAlign: "start" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{m.navLabel}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{m.hubDesc}</p>
              </Link>
            ))}
          </div>
          <div className="fade-up" style={{ marginTop: 28, textAlign: "start" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: rtl ? undefined : ".06em", textTransform: "uppercase", color: "var(--ds-text-secondary)", marginBottom: 10 }}>{ui.guidesLabel}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
              {page.guides.map((g) => {
                const to = localLink(locale, g.href);
                return (
                  <li key={g.href}>
                    <Link href={to.href} hrefLang={to.english ? "en" : undefined} style={{ color: "var(--ds-text-primary)", fontWeight: 600, fontSize: 14.5, textDecoration: "none" }}>{g.label}{to.english ? chrome.inEnglish : ""}</Link>
                  </li>
                );
              })}
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
            <a href="#make" className="btn btn-primary btn-lg">{ui.toBox}</a>
          )}
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 13, marginTop: 16 }}>{page.upload ? page.upload.note : page.box.hint}</p>
        </div>
      </section>
    </div>
  );
}
