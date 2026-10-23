import type { Metadata } from "next";
import Link from "next/link";
import HtmlLang from "@/components/marketing/html-lang";
import TopicBox from "@/components/marketing/topic-box";
import { STATIC_PAGE_DATES } from "@/lib/page-dates";
import { PRESENTATION_HUB, PRESENTATION_UI, getPresentations } from "@/lib/presentations-i18n";
import { LOCALES, LOCALE_NAME, LOCALE_PREFIX, OG_LOCALE, REDESIGN_UI, languageAlternates, type Locale } from "@/lib/redesign-i18n";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_REBUILD = `${APP_URL}/signup?intent=rebuild`;
const BASE = "https://pitchboost.ai";
const PATH = "/ai-presentation-maker";

// The comparison pages are English only; localized hubs mark the links.
const COMPARE_LINKS = ["/compare/pitchboost-vs-gamma", "/chatgpt", "/alternatives/copilot-in-powerpoint"];

export function presentationHubMetadata(locale: Locale): Metadata {
  const hub = PRESENTATION_HUB[locale];
  return {
    title: { absolute: hub.title },
    description: hub.description,
    alternates: { canonical: `${LOCALE_PREFIX[locale]}${PATH}`, languages: languageAlternates(PATH) },
    openGraph: { title: hub.title, description: hub.description, url: `${BASE}${LOCALE_PREFIX[locale]}${PATH}`, locale: OG_LOCALE[locale] },
  };
}

const card = { background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px" } as const;

export default function PresentationHubView({ locale }: { locale: Locale }) {
  const hub = PRESENTATION_HUB[locale];
  const ui = PRESENTATION_UI[locale];
  const prefix = LOCALE_PREFIX[locale];
  const pages = getPresentations(locale);
  const url = `${BASE}${prefix}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: hub.title,
    description: hub.description,
    url,
    inLanguage: locale,
    dateModified: STATIC_PAGE_DATES[PATH],
    publisher: { "@type": "Organization", name: "PitchBoost", url: BASE },
  };
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: hub.listName,
    itemListElement: pages.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.navLabel, url: `${BASE}${prefix}/presentations/${p.slug}` })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(locale !== "en" ? { inLanguage: locale } : {}),
    mainEntity: hub.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <div lang={locale}>
      {locale !== "en" && <HtmlLang lang={locale} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label"><span>{ui.breadcrumbHub}</span></div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 860, margin: "0 auto 20px", lineHeight: 1.12, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            {hub.h1}
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 680, margin: "0 auto 32px", lineHeight: 1.7 }}>
            {hub.subhead}
          </p>
          <TopicBox placeholder={hub.placeholder} label={ui.topicLabel} buttonLabel={ui.topicButton} />
          <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", marginTop: 16 }}>
            {ui.haveSlides} <a href={SIGNUP_REBUILD} style={{ color: "#1F6B6B", fontWeight: 600 }}>{ui.redesignLink}</a>{ui.redesignTail}
          </p>
          <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 6 }}>{ui.freeNote}</p>
          <LocaleLinks locale={locale} path={PATH} />
        </div>
      </section>

      {/* What are you making? */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{hub.pickLabel}</span></div>
            <h2>{hub.pickTitle}</h2>
            <p>{hub.pickBody}</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 40 }}>
            {pages.map((p) => (
              <Link key={p.slug} href={`${prefix}/presentations/${p.slug}`} style={{ ...card, textDecoration: "none", display: "block" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>{p.navLabel}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{p.heroHeadline}</p>
              </Link>
            ))}
            <Link href={`${prefix}/redesign`} style={{ ...card, textDecoration: "none", display: "block" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>{hub.redesignCard.title}</h3>
              <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{hub.redesignCard.body}</p>
            </Link>
            <Link href="/industries" hrefLang={locale !== "en" ? "en" : undefined} style={{ ...card, textDecoration: "none", display: "block" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>{hub.pitchCard.title}{ui.inEnglish}</h3>
              <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{hub.pitchCard.body}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works. Numbered because it is a sequence. */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{hub.howLabel}</span></div>
            <h2>{hub.howTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 40 }}>
            {hub.steps.map((s, i) => (
              <div key={s.title} style={{ ...card, background: "var(--ds-bg)" }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: "#1F6B6B", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, marginBottom: 14 }}>{i + 1}</div>
                <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PitchBoost */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{hub.whyLabel}</span></div>
            <h2>{hub.whyTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}>
            {hub.why.map((w) => (
              <div key={w.title} style={card}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{w.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest comparison */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 860 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{hub.compareLabel}</span></div>
            <h2>{hub.compareTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gap: 14, marginTop: 40 }}>
            {hub.compare.map((c, i) => (
              <div key={c.name} style={{ ...card, background: "var(--ds-bg)" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>{c.name}</h3>
                <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "0 0 8px" }}>{c.body}</p>
                <Link href={COMPARE_LINKS[i]} hrefLang={locale !== "en" ? "en" : undefined} style={{ fontSize: 13, fontWeight: 600, color: "#1F6B6B" }}>{c.link}{ui.inEnglish} &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{ui.faqLabel}</span></div>
            <h2>{ui.faqTitle}</h2>
          </div>
          <div className="fade-up" style={{ marginTop: 40, display: "grid", gap: 12 }}>
            {hub.faqs.map(({ q, a }) => (
              <details key={q} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "18px 22px" }}>
                <summary style={{ fontWeight: 600, fontSize: 15, color: "var(--ds-text-primary)", cursor: "pointer" }}>{q}</summary>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, marginTop: 12, marginBottom: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-section" style={{ background: "var(--ds-dark)", textAlign: "center" }}>
        <div className="mkt-container">
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, maxWidth: 700, margin: "0 auto 28px" }}>{hub.ctaHeadline}</h2>
          <TopicBox placeholder={hub.ctaPlaceholder} label={ui.topicLabel} buttonLabel={ui.topicButton} dark id="topic-bottom" />
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 13, marginTop: 16 }}>{ui.ctaNote}</p>
        </div>
      </section>
    </div>
  );
}

/** "Also in: Español · Português" (or English), limited to the locales that have the page. */
export function LocaleLinks({ locale, path, available = LOCALES }: { locale: Locale; path: string; available?: Locale[] }) {
  const others = available.filter((l) => l !== locale);
  if (others.length === 0) return null;
  return (
    <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 8 }}>
      {REDESIGN_UI[locale].alsoIn}{" "}
      {others.map((l, i) => (
        <span key={l}>
          {i > 0 && " · "}
          <Link href={`${LOCALE_PREFIX[l]}${path}`} hrefLang={l} style={{ color: "inherit" }}>{LOCALE_NAME[l]}</Link>
        </span>
      ))}
    </p>
  );
}
