import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import localFont from "next/font/local";
import "@/app/(en)/home.css";
import Hero from "./hero";
import NowShowing from "./now-showing";
import Lineup from "./lineup";
import Cast from "./cast";
import AlsoPlaying from "./also-playing";
import BoxOffice from "./box-office";
import HouseRules from "./house-rules";
import Heckles from "./heckles";
import Finale from "./finale";
import { HOME_COPY, homeLanguages } from "@/lib/home-i18n";
import { LOCALE_PREFIX, OG_LOCALE, type Locale } from "@/lib/redesign-i18n";
import { localeDir, sharedCard } from "@/lib/locale-dir";

const BASE = "https://pitchboost.ai";

/**
 * The home page's title, description, canonical address and its address in
 * every other language. The English page says what it always has and keeps
 * its card (app/(en)/opengraph-image.tsx). The other languages carry their own
 * address and locale for sharing, as the other translated pages do: Spanish,
 * Portuguese and French have a card of their own beside their page, and
 * Arabic shares the site's card (lib/locale-dir.ts).
 */
export function homeMetadata(locale: Locale): Metadata {
  const { title, description } = HOME_COPY[locale].meta;
  const alternates = { canonical: LOCALE_PREFIX[locale] || "/", languages: homeLanguages() };
  if (locale === "en") return { title: { absolute: title }, description, alternates, openGraph: { title, description } };
  return {
    title: { absolute: title },
    description,
    alternates,
    openGraph: { title, description, url: `${BASE}${LOCALE_PREFIX[locale]}`, locale: OG_LOCALE[locale], ...sharedCard(locale) },
  };
}

// The home page's own faces: the app's display and text faces, and a
// handwriting face for the audience's remarks. Only this page loads them.
const display = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz"], variable: "--font-bricolage", display: "swap" });
const text = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });
// The handwriting face ships with the site (Nov 2026): Google Fonts began answering
// Caveat, some of the time, with addresses next/font could not download, and every
// deploy failed with it. Its Latin file (Caveat v23, SIL Open Font License) holds
// every letter of English, Spanish, Portuguese, French and German; Arabic has a face
// of its own (withArabic below). One variable file for both weights the page uses.
const hand = localFont({ src: "./fonts/caveat-latin.woff2", weight: "400 700", variable: "--font-caveat", display: "swap" });

/**
 * None of the three faces has Arabic letters. Left alone, a browser would draw
 * Arabic with the stand-in each face names for the moment before it loads
 * (Arial, resized to that face's proportions, and Arial has Arabic letters of
 * its own). So on the Arabic page the site's Arabic face goes straight after
 * each face, ahead of its stand-in: Latin words keep the page's faces and
 * Arabic is drawn in IBM Plex Sans Arabic.
 */
function withArabic(fontFamily: string): string {
  const [face, ...standIns] = fontFamily.split(",");
  return [face, " var(--font-arabic)", ...standIns].join(",");
}
const ARABIC_FACES = {
  "--font-bricolage": withArabic(display.style.fontFamily),
  "--font-figtree": withArabic(text.style.fontFamily),
  "--font-caveat": withArabic(hand.style.fontFamily),
} as React.CSSProperties;

/**
 * The home page, in one language: a small theatre that sells decks, social
 * posts, ads and websites. app/(en)/page.tsx shows it in English and
 * app/(es)/es/page.tsx and its siblings in Spanish, Portuguese, French and
 * Arabic. Every word comes from lib/home-i18n.ts; the sections are the same,
 * in the same order, with the same pictures.
 */
export default function HomeView({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];
  const rtl = localeDir(locale) === "rtl";

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PitchBoost",
    url: `${BASE}${LOCALE_PREFIX[locale]}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: copy.meta.schemaDescription,
    ...(locale !== "en" ? { inLanguage: locale } : {}),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      offerCount: "4",
    },
    publisher: { "@type": "Organization", name: "PitchBoost", url: BASE },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(locale !== "en" ? { inLanguage: locale } : {}),
    mainEntity: copy.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  // English is the page as it has always been. The other languages say which language they are in and which way they read (home.css keys its right-to-left rules, and the phone layout of the box, on these).
  const language = locale === "en" ? {} : { lang: locale, dir: localeDir(locale) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div {...language} className={`sh-home ${display.variable} ${text.variable} ${hand.variable}`} style={rtl ? ARABIC_FACES : undefined}>
        <Hero locale={locale} />
        <NowShowing locale={locale} />
        <Lineup locale={locale} />
        <Cast locale={locale} />
        <AlsoPlaying locale={locale} />
        <BoxOffice locale={locale} />
        <HouseRules locale={locale} />
        <Heckles locale={locale} />
        <Finale locale={locale} />
      </div>
    </>
  );
}
