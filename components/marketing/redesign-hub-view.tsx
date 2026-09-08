import type { Metadata } from "next";
import Link from "next/link";
import HtmlLang from "@/components/marketing/html-lang";
import { LocaleSwitch } from "@/components/marketing/redesign-page-view";
import { getHubCopy, getRedesigns } from "@/lib/redesigns";
import { LOCALE_PREFIX, OG_LOCALE, REDESIGN_UI, languageAlternates, type Locale } from "@/lib/redesign-i18n";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup?intent=rebuild`;
const BASE = "https://pitchboost.ai";

export function hubMetadata(locale: Locale): Metadata {
  const hub = getHubCopy(locale);
  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    alternates: { canonical: `${LOCALE_PREFIX[locale]}/redesign`, languages: languageAlternates("/redesign") },
    openGraph: { title: hub.metaTitle, description: hub.metaDescription, locale: OG_LOCALE[locale] },
  };
}

export default function RedesignHubView({ locale }: { locale: Locale }) {
  const ui = REDESIGN_UI[locale];
  const hub = getHubCopy(locale);
  const prefix = LOCALE_PREFIX[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: hub.metaTitle,
    description: hub.metaDescription,
    url: `${BASE}${prefix}/redesign`,
    inLanguage: locale,
    publisher: { "@type": "Organization", name: "PitchBoost", url: BASE },
  };
  return (
    <div lang={locale}>
      {locale !== "en" && <HtmlLang lang={locale} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 820, margin: "0 auto 20px", lineHeight: 1.15 }}>{hub.h1}</h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>{hub.subhead}</p>
          <div style={{ marginTop: 36 }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">{ui.ctaPrimary}</a>
          </div>
          <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 14 }}>{ui.finePrint}</p>
          <LocaleSwitch locale={locale} path="/redesign" />
        </div>
      </section>
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>{hub.sectionLabel}</span></div>
            <h2>{hub.sectionTitle}</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20, marginTop: 48 }}>
            {getRedesigns(locale).map((r) => (
              <Link key={r.slug} href={`${prefix}/redesign/${r.slug}`} style={{ textDecoration: "none", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "24px 28px", display: "block" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{r.navLabel}</h3>
                <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{r.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
