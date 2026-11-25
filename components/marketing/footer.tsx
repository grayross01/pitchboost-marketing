import Link from "next/link";
import Image from "next/image";
import { getPresentations } from "@/lib/presentations-i18n";
import { FOOTER_COPY, MENU_COPY, PRESENTATION_NAMES, chromeArrow, chromeLink } from "@/lib/chrome-i18n";
import { localeDir } from "@/lib/locale-dir";
import { hasPresentations, type Locale } from "@/lib/locales";
import { PAGE_LANGUAGES } from "@/lib/page-languages";
import LanguageList from "./language-list";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

/** The feature pages the footer lists, by slug. The ChatGPT page follows them. */
const FEATURE_SLUGS = ["ai-deck-builder", "upload-and-redesign", "output-types", "templates-and-slides", "brand-and-images", "publishing-and-sharing", "viewer-analytics", "team-and-permissions", "api-and-mcp"];

/** The products the comparison pages set PitchBoost against. */
const COMPETITORS = [
  { name: "Gamma", href: "/compare/pitchboost-vs-gamma" },
  { name: "Beautiful.ai", href: "/compare/pitchboost-vs-beautiful-ai" },
  { name: "Pitch", href: "/compare/pitchboost-vs-pitch" },
  { name: "Tome", href: "/compare/pitchboost-vs-tome" },
];

type FooterLink = { label: string; href: string };

/**
 * The footer, in the page's language (app/root-shell.tsx hands it over; the
 * words are in lib/chrome-i18n.ts). A link leads to the page in that language
 * where the site has one, and otherwise to the English page, marked
 * hreflang="en"; a column whose links all lead to English pages says so once,
 * under them. Arabic reads right to left. At the bottom, every language by its
 * own name, each leading to this page in it (language-list.tsx).
 */
export default function MarketingFooter({ locale }: { locale: Locale }) {
  const menu = MENU_COPY[locale];
  const names = menu.names;
  const t = FOOTER_COPY[locale];
  const go = chromeArrow(locale);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const dir = localeDir(locale) === "rtl" ? { dir: "rtl" as const } : {};
  const home = chromeLink(locale, "/");
  const maker = chromeLink(locale, "/ai-presentation-maker");
  const allIndustries = chromeLink(locale, "/industries");
  const allComparisons = chromeLink(locale, "/compare");
  // The presentation pages in this language, or, in a language that has none yet (German), the English ones under their names in this language, marked as English.
  const presentationLinks: { label: string; href: string; hrefLang: "en" | undefined }[] = hasPresentations(locale)
    ? getPresentations(locale).map(({ navLabel, slug }) => ({ label: navLabel, href: `${prefix}/presentations/${slug}`, hrefLang: undefined }))
    : getPresentations("en").map(({ navLabel, slug }) => ({ label: PRESENTATION_NAMES[locale]?.[slug] ?? navLabel, href: `/presentations/${slug}`, hrefLang: "en" as const }));

  const productLinks: FooterLink[] = [
    { label: menu.pricing, href: "/pricing" },
    { label: t.templates, href: `${APP_URL}/templates` },
    { label: menu.blog, href: "/blog" },
    { label: t.research, href: "/research" },
    { label: menu.start, href: SIGNUP_URL },
  ];
  const featureLinks: FooterLink[] = [
    ...FEATURE_SLUGS.map((slug) => ({ label: names.features[slug], href: `/features/${slug}` })),
    { label: names.featureExtras["/chatgpt"], href: "/chatgpt" },
  ];
  const compareLinks: FooterLink[] = COMPETITORS.map(({ name, href }) => ({ label: t.versus.replace("{name}", name), href }));
  const companyLinks: FooterLink[] = [
    { label: t.company.about, href: "/about" },
    { label: t.company.help, href: "/help" },
    { label: t.company.changelog, href: "/changelog" },
    { label: t.company.ideas, href: "/ideas" },
    { label: t.company.security, href: "/security" },
    { label: t.company.contact, href: "mailto:support@pitchboost.ai" },
    { label: t.company.privacy, href: "/privacy" },
    { label: t.company.terms, href: "/terms" },
  ];
  // The footer's own short list: the menu's names, except two it shortens.
  const industryLinks: FooterLink[] = [
    { label: names.audiences["/students"], href: "/students" },
    { label: names.industries["b2b-sales"], href: "/industries/b2b-sales" },
    { label: t.agencies, href: "/industries/agencies" },
    { label: names.industries.saas, href: "/industries/saas" },
    { label: names.industries.startups, href: "/industries/startups" },
    { label: t.homeServices, href: "/industries/home-services" },
    { label: names.industries["commercial-real-estate"], href: "/industries/commercial-real-estate" },
    { label: names.industries["real-estate-agents"], href: "/industries/real-estate-agents" },
    { label: names.industries.consultancies, href: "/industries/consultancies" },
    { label: names.industries.nonprofits, href: "/industries/nonprofits" },
  ];
  const realEstateLinks: FooterLink[] = [
    { label: t.realEstate.tools, href: "/tools" },
    { label: t.realEstate.openHouse, href: "/tools/open-house-sign-in" },
    { label: t.realEstate.netSheet, href: "/tools/seller-net-sheet" },
    { label: t.realEstate.closingTimeline, href: "/tools/closing-timeline" },
    { label: t.realEstate.agents, href: "/real-estate" },
    { label: t.realEstate.bestSoftware, href: "/best-listing-presentation-software" },
  ];

  /** One link in a column: an email address as it is, a page in this language where the site has one. */
  const item = ({ label, href }: FooterLink) => {
    const link = chromeLink(locale, href);
    return (
      <li key={href}>
        {href.startsWith("mailto:") ? <a href={href}>{label}</a> : <Link href={link.href} hrefLang={link.hrefLang}>{label}</Link>}
      </li>
    );
  };
  /** The line under a column whose links all lead to pages published only in English. An English page never has one. */
  const inEnglish = (hrefs: string[]) => hrefs.every((href) => chromeLink(locale, href).hrefLang === "en") && <p className="footer-note">{t.inEnglish}</p>;

  return (
    <footer className="footer" {...dir}>
      <div className="mkt-container">
        {/* German words are long ("Forschungspräsentationen"): seven columns in one row ran past the page, so there they take two rows (globals.css). */}
        <div className={`footer-grid${locale === "de" ? " footer-grid-two-rows" : ""}`} style={{ gridTemplateColumns: "1.6fr repeat(7, 1fr)", gap: 32 }}>
          <div className="footer-brand">
            <Link href={home.href} className="nav-logo" style={{ color: "white" }}>
              <Image src="/icon.png" alt="PitchBoost" width={28} height={28} />
              PitchBoost
            </Link>
            <p>{t.about}</p>
          </div>

          <div className="footer-col">
            <p className="footer-heading">{menu.features}</p>
            <ul>{featureLinks.map(item)}</ul>
            {inEnglish(featureLinks.map((l) => l.href))}
          </div>

          <div className="footer-col">
            <p className="footer-heading">{menu.presentations}</p>
            <ul>
              {presentationLinks.map(({ label, href, hrefLang }) => (
                <li key={href}>
                  <Link href={href} hrefLang={hrefLang}>{label}</Link>
                </li>
              ))}
              <li>
                <Link href={maker.href} hrefLang={maker.hrefLang} style={{ fontWeight: 600 }}>{`${t.presentationMaker} ${go}`}</Link>
              </li>
            </ul>
            {presentationLinks.every((l) => l.hrefLang === "en") && maker.hrefLang === "en" && <p className="footer-note">{t.inEnglish}</p>}
          </div>

          <div className="footer-col">
            <p className="footer-heading">{t.headings.product}</p>
            <ul>{productLinks.map(item)}</ul>
            {inEnglish(productLinks.map((l) => l.href))}
          </div>

          <div className="footer-col">
            <p className="footer-heading">{menu.whoFor}</p>
            <ul>
              {industryLinks.map(item)}
              <li>
                <Link href={allIndustries.href} hrefLang={allIndustries.hrefLang} style={{ fontWeight: 600 }}>{`${t.viewAll} ${go}`}</Link>
              </li>
            </ul>
            {inEnglish([...industryLinks.map((l) => l.href), "/industries"])}
          </div>

          <div className="footer-col">
            <p className="footer-heading">{t.headings.realEstate}</p>
            <ul>{realEstateLinks.map(item)}</ul>
            {inEnglish(realEstateLinks.map((l) => l.href))}
          </div>

          <div className="footer-col">
            <p className="footer-heading">{menu.compare}</p>
            <ul>
              {compareLinks.map(item)}
              <li>
                <Link href={allComparisons.href} hrefLang={allComparisons.hrefLang} style={{ fontWeight: 600 }}>{`${t.viewAll} ${go}`}</Link>
              </li>
            </ul>
            {inEnglish([...compareLinks.map((l) => l.href), "/compare"])}
          </div>

          <div className="footer-col">
            <p className="footer-heading">{t.headings.company}</p>
            <ul>{companyLinks.map(item)}</ul>
            {inEnglish(companyLinks.map((l) => l.href))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()}{` PitchBoost. ${t.rights}`}</p>
          <LanguageList pages={PAGE_LANGUAGES} label={t.language} />
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="https://www.linkedin.com/company/pitchboost-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/pitchboost.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/people/PitchBoost/61574324925190/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
