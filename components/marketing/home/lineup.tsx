/* eslint-disable @next/next/no-img-element -- these pictures are pre-sized WebP files in /public, and the site serves images as they are */
// Part of the home page (home-view.tsx puts the sections together, in every language). The look was approved as a mockup in November 2026; the inline styles carry it over as drawn.
import Link from "next/link";
import { SIGNUP_URL } from "./links";
import { arrow, localLink } from "./local-link";
import { HOME_COPY } from "@/lib/home-i18n";
import { localeDir } from "@/lib/locale-dir";
import type { Locale } from "@/lib/redesign-i18n";

/** Where the small links under the decks lead, in the order the dictionary lists their words. */
const MORE_ON_DECKS = [
  "/features/ai-deck-builder",
  "/features/upload-and-redesign",
  "/redesign/powerpoint-redesign",
  "/features/brand-and-images",
  "/features/research-and-fact-checking",
  "/features/output-types",
  "/features/viewer-analytics",
];

/** The four things PitchBoost makes, each with real output for the same made-up company. */
export default function Lineup({ locale }: { locale: Locale }) {
  const t = HOME_COPY[locale].lineup;
  const go = arrow(locale);
  const rtl = localeDir(locale) === "rtl";
  // The example is an English-language company and its pieces are real output, so they stay as they were made: its caption keeps its language on every page.
  const example = locale === "en" ? {} : ({ lang: "en", dir: "ltr" } as const);
  return (
    <section id="features" style={{ position: "relative", marginTop: "-1px", background: "#FFF8EC", padding: "64px 0 48px", overflow: "hidden" }}>
      <div className="sh-wrap">
        <div style={{ maxWidth: "1000px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
          <span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.12em", color: "#A93A2C" }}>{t.eyebrow}</span>
          <h2 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.06", letterSpacing: "-0.02em", textWrap: "balance" }}>{t.title}</h2>
          <p style={{ margin: "0", fontSize: "19px", color: "#33474C", textWrap: "pretty" }}>{t.body}</p>
        </div>
        <span id="how-it-works" className="sh-anchor" />
        <span id="redesign" className="sh-anchor" />
        <div id="act-decks" style={{ marginTop: "44px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "36px 64px" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", borderRadius: "999px", background: "#FFD15C", color: "#0B2E36", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em" }}>{t.decks.tag}</span>
            <h3 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.04", letterSpacing: "-0.02em" }}>{t.decks.title}</h3>
            <p style={{ margin: "0", fontSize: "18px", color: "#33474C", textWrap: "pretty" }}>{t.decks.body}</p>
            <ul style={{ listStyle: "none", margin: "2px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.decks.points[0]}</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.decks.points[1]}</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.decks.points[2]}</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.decks.points[3]}</li>
            </ul>
            <a className="sh-btn" href="#make" style={{ display: "inline-flex", alignItems: "center", minHeight: "46px", marginTop: "4px", padding: "0 20px", border: "2px solid #0B2E36", borderRadius: "999px", color: "#0B2E36", fontWeight: "700", fontSize: "16px", textDecoration: "none" }}>{t.decks.cta} {go}</a>
          </div>
          <div style={{ flex: "1 1 520px", minWidth: "0" }}>
            <div style={{ position: "relative", maxWidth: "620px", margin: "0 auto", aspectRatio: "620 / 400" }}>
              <div style={{ position: "absolute", left: "0", top: "5%", width: "55%", transform: "rotate(-5deg)" }}>
                <img className="sh-poster" src="/home/deck-highlights.webp" width={800} height={450} loading="lazy" decoding="async" alt={t.decks.alts[0]} style={{ display: "block", width: "100%", height: "auto", boxSizing: "border-box", border: "5px solid #FFFFFF", borderRadius: "12px", boxShadow: "0 18px 34px -18px rgba(11, 46, 54, 0.6)" }} />
              </div>
              <div style={{ position: "absolute", right: "0", top: "2%", width: "55%", transform: "rotate(4deg)" }}>
                <img className="sh-poster" src="/home/deck-chart.webp" width={800} height={450} loading="lazy" decoding="async" alt={t.decks.alts[1]} style={{ display: "block", width: "100%", height: "auto", boxSizing: "border-box", border: "5px solid #FFFFFF", borderRadius: "12px", boxShadow: "0 18px 34px -18px rgba(11, 46, 54, 0.6)" }} />
              </div>
              <div style={{ position: "absolute", left: "11%", top: "28%", width: "78%" }}>
                <img className="sh-poster" src="/home/deck-cover.webp" width={1000} height={563} loading="lazy" decoding="async" alt={t.decks.alts[2]} style={{ display: "block", width: "100%", height: "auto", boxSizing: "border-box", border: "5px solid #FFFFFF", borderRadius: "14px", boxShadow: "0 26px 46px -22px rgba(11, 46, 54, 0.7)" }} />
              </div>
            </div>
          </div>
        </div>
        <p className="sh-more">
          <span>{t.decks.moreLabel}</span>
          {MORE_ON_DECKS.map((href, i) => {
            const to = localLink(locale, href);
            return <Link key={href} href={to.href} hrefLang={to.hrefLang}>{t.decks.more[i]}{to.inEnglish}</Link>;
          })}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "12px 0 8px" }}>
          <svg aria-hidden="true" viewBox="0 0 80 56" style={{ width: "66px", height: "46px", flex: "none", transform: rtl ? "scaleX(-1)" : undefined }}><path d="M 8 6 C 30 8 46 20 50 44" style={{ fill: "none", stroke: "#A93A2C", strokeWidth: "3", strokeLinecap: "round", strokeDasharray: "2 9" }}></path><path d="M 40 36 L 50 46 L 58 34" style={{ fill: "none", stroke: "#A93A2C", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>
          <span style={{ fontFamily: "var(--font-caveat), cursive", fontWeight: "700", fontSize: "30px", lineHeight: "1", color: "#A93A2C", transform: "rotate(-2deg)" }}>{t.thenPosts}</span>
        </div>
        <div id="act-posts" style={{ display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", alignItems: "center", gap: "36px 64px" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", borderRadius: "999px", background: "#FFDAD3", color: "#0B2E36", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em" }}>{t.posts.tag}</span>
            <h3 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.04", letterSpacing: "-0.02em" }}>{t.posts.title}</h3>
            <p style={{ margin: "0", fontSize: "18px", color: "#33474C", textWrap: "pretty" }}>{t.posts.body}</p>
            <ul style={{ listStyle: "none", margin: "2px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.posts.points[0]}</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.posts.points[1]}</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.posts.points[2]}</li>
            </ul>
            <a className="sh-btn" href={SIGNUP_URL} style={{ display: "inline-flex", alignItems: "center", minHeight: "46px", marginTop: "4px", padding: "0 20px", border: "2px solid #0B2E36", borderRadius: "999px", color: "#0B2E36", fontWeight: "700", fontSize: "16px", textDecoration: "none" }}>{t.posts.cta} {go}</a>
          </div>
          <div style={{ flex: "1 1 520px", minWidth: "0" }}>
            <div style={{ maxWidth: "620px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "22px" }}>
              <div style={{ position: "relative", aspectRatio: "620 / 196" }}>
                <div style={{ position: "absolute", left: "0", top: "5%", width: "22.4%", transform: "rotate(-4deg)" }}><img className="sh-poster" src="/home/post-c1.webp" width={432} height={540} loading="lazy" decoding="async" alt={t.posts.cards[0]} style={{ display: "block", width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 16px 28px -16px rgba(11, 46, 54, 0.65)" }} /></div>
                <div style={{ position: "absolute", left: "19.4%", top: "0", width: "22.4%", transform: "rotate(2deg)" }}><img className="sh-poster" src="/home/post-c2.webp" width={432} height={540} loading="lazy" decoding="async" alt={t.posts.cards[1]} style={{ display: "block", width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 16px 28px -16px rgba(11, 46, 54, 0.65)" }} /></div>
                <div style={{ position: "absolute", left: "38.8%", top: "6%", width: "22.4%", transform: "rotate(-2deg)" }}><img className="sh-poster" src="/home/post-c3.webp" width={432} height={540} loading="lazy" decoding="async" alt={t.posts.cards[2]} style={{ display: "block", width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 16px 28px -16px rgba(11, 46, 54, 0.65)" }} /></div>
                <div style={{ position: "absolute", left: "58.2%", top: "1%", width: "22.4%", transform: "rotate(3deg)" }}><img className="sh-poster" src="/home/post-c4.webp" width={432} height={540} loading="lazy" decoding="async" alt={t.posts.cards[3]} style={{ display: "block", width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 16px 28px -16px rgba(11, 46, 54, 0.65)" }} /></div>
                <div style={{ position: "absolute", left: "77.6%", top: "5%", width: "22.4%", transform: "rotate(-3deg)" }}><img className="sh-poster" src="/home/post-c5.webp" width={432} height={540} loading="lazy" decoding="async" alt={t.posts.cards[4]} style={{ display: "block", width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 16px 28px -16px rgba(11, 46, 54, 0.65)" }} /></div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "16px" }}>
                <div style={{ flex: "1 1 250px", minWidth: "0", boxSizing: "border-box", padding: "16px 18px", border: "2px solid #F0E6D2", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.1em", color: "#5E7378" }}>{t.posts.captionLabel}</span>
                  <span {...example} style={{ fontSize: "15px", lineHeight: "1.45", color: "#33474C" }}>Brightwell Solar finished Q3 2026 with 412 residential installs, up 18% on Q2. Revenue came in at $9.8M, 6% above plan.</span>
                  <span {...example} style={{ fontSize: "14px", fontWeight: "600", color: "#0E5A64" }}>#SolarEnergy #ResidentialSolar</span>
                </div>
                <div style={{ flex: "1.2 1 270px", minWidth: "0", boxSizing: "border-box", padding: "16px 18px", border: "2px dashed #9CC3C7", borderRadius: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.1em", color: "#5E7378" }}>{t.posts.weekLabel}</span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <img src="/home/post-w1.webp" width={216} height={270} loading="lazy" decoding="async" alt={t.posts.week[0]} style={{ display: "block", flex: "1", minWidth: "0", width: "0", height: "auto", aspectRatio: "4 / 5", borderRadius: "6px" }} />
                    <img src="/home/post-w2.webp" width={216} height={270} loading="lazy" decoding="async" alt={t.posts.week[1]} style={{ display: "block", flex: "1", minWidth: "0", width: "0", height: "auto", aspectRatio: "4 / 5", borderRadius: "6px" }} />
                    <img src="/home/post-w3.webp" width={216} height={270} loading="lazy" decoding="async" alt={t.posts.week[2]} style={{ display: "block", flex: "1", minWidth: "0", width: "0", height: "auto", aspectRatio: "4 / 5", borderRadius: "6px" }} />
                    <img src="/home/post-w4.webp" width={216} height={270} loading="lazy" decoding="async" alt={t.posts.week[3]} style={{ display: "block", flex: "1", minWidth: "0", width: "0", height: "auto", aspectRatio: "4 / 5", borderRadius: "6px" }} />
                    <img src="/home/post-w5.webp" width={216} height={270} loading="lazy" decoding="async" alt={t.posts.week[4]} style={{ display: "block", flex: "1", minWidth: "0", width: "0", height: "auto", aspectRatio: "4 / 5", borderRadius: "6px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "12px 0 8px" }}>
          <svg aria-hidden="true" viewBox="0 0 80 56" style={{ width: "66px", height: "46px", flex: "none", transform: rtl ? undefined : "scaleX(-1)" }}><path d="M 8 6 C 30 8 46 20 50 44" style={{ fill: "none", stroke: "#A93A2C", strokeWidth: "3", strokeLinecap: "round", strokeDasharray: "2 9" }}></path><path d="M 40 36 L 50 46 L 58 34" style={{ fill: "none", stroke: "#A93A2C", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>
          <span style={{ fontFamily: "var(--font-caveat), cursive", fontWeight: "700", fontSize: "30px", lineHeight: "1", color: "#A93A2C", transform: "rotate(2deg)" }}>{t.thenAds}</span>
        </div>
        <div id="act-ads" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "36px 64px" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", borderRadius: "999px", background: "#CFE8E6", color: "#0B2E36", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em" }}>{t.ads.tag}</span>
            <h3 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.04", letterSpacing: "-0.02em" }}>{t.ads.title}</h3>
            <p style={{ margin: "0", fontSize: "18px", color: "#33474C", textWrap: "pretty" }}>{t.ads.body}</p>
            <ul style={{ listStyle: "none", margin: "2px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.ads.points[0]}</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.ads.points[1]}</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.ads.points[2]}</li>
            </ul>
            <a className="sh-btn" href={SIGNUP_URL} style={{ display: "inline-flex", alignItems: "center", minHeight: "46px", marginTop: "4px", padding: "0 20px", border: "2px solid #0B2E36", borderRadius: "999px", color: "#0B2E36", fontWeight: "700", fontSize: "16px", textDecoration: "none" }}>{t.ads.cta} {go}</a>
          </div>
          <div style={{ flex: "1 1 520px", minWidth: "0" }}>
            <div style={{ maxWidth: "620px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "14px" }}>
                <figure style={{ flex: "1 1 0", minWidth: "0", margin: "0" }}><img className="sh-poster" src="/home/ad-feed.webp" width={720} height={405} loading="lazy" decoding="async" alt={t.ads.sizes[0].alt} style={{ display: "block", width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 14px 26px -16px rgba(11, 46, 54, 0.65)" }} /><figcaption style={{ marginTop: "7px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.02em", color: "#5E7378" }}>{t.ads.sizes[0].caption}</figcaption></figure>
                <figure style={{ flex: "1 1 0", minWidth: "0", margin: "0" }}><img className="sh-poster" src="/home/ad-linkedin.webp" width={720} height={376} loading="lazy" decoding="async" alt={t.ads.sizes[1].alt} style={{ display: "block", width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 14px 26px -16px rgba(11, 46, 54, 0.65)" }} /><figcaption style={{ marginTop: "7px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.02em", color: "#5E7378" }}>{t.ads.sizes[1].caption}</figcaption></figure>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <figure style={{ flex: "1000 1 0", minWidth: "0", margin: "0" }}><img className="sh-poster" src="/home/ad-square.webp" width={480} height={480} loading="lazy" decoding="async" alt={t.ads.sizes[2].alt} style={{ display: "block", width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 14px 26px -16px rgba(11, 46, 54, 0.65)" }} /><figcaption style={{ marginTop: "7px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.02em", color: "#5E7378" }}>{t.ads.sizes[2].caption}</figcaption></figure>
                <figure style={{ flex: "800 1 0", minWidth: "0", margin: "0" }}><img className="sh-poster" src="/home/ad-portrait.webp" width={384} height={480} loading="lazy" decoding="async" alt={t.ads.sizes[3].alt} style={{ display: "block", width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 14px 26px -16px rgba(11, 46, 54, 0.65)" }} /><figcaption style={{ marginTop: "7px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.02em", color: "#5E7378" }}>{t.ads.sizes[3].caption}</figcaption></figure>
                <figure style={{ flex: "562 1 0", minWidth: "0", margin: "0" }}><img className="sh-poster" src="/home/ad-story.webp" width={270} height={480} loading="lazy" decoding="async" alt={t.ads.sizes[4].alt} style={{ display: "block", width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 14px 26px -16px rgba(11, 46, 54, 0.65)" }} /><figcaption style={{ marginTop: "7px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.02em", color: "#5E7378" }}>{t.ads.sizes[4].caption}</figcaption></figure>
                <div className="sh-hide-sm" style={{ flex: "900 1 0", minWidth: "0", alignSelf: "center", fontFamily: "var(--font-caveat), cursive", fontWeight: "700", fontSize: "28px", lineHeight: "1.05", color: "#A93A2C", transform: "rotate(-4deg)" }}>{t.ads.note[0]}<br />{t.ads.note[1]}<br />{t.ads.note[2]}</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "12px 0 8px" }}>
          <svg aria-hidden="true" viewBox="0 0 80 56" style={{ width: "66px", height: "46px", flex: "none", transform: rtl ? "scaleX(-1)" : undefined }}><path d="M 8 6 C 30 8 46 20 50 44" style={{ fill: "none", stroke: "#A93A2C", strokeWidth: "3", strokeLinecap: "round", strokeDasharray: "2 9" }}></path><path d="M 40 36 L 50 46 L 58 34" style={{ fill: "none", stroke: "#A93A2C", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>
          <span style={{ fontFamily: "var(--font-caveat), cursive", fontWeight: "700", fontSize: "30px", lineHeight: "1", color: "#A93A2C", transform: "rotate(-2deg)" }}>{t.thenSites}</span>
        </div>
        <div id="act-sites" style={{ display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", alignItems: "center", gap: "36px 64px" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", borderRadius: "999px", background: "#0B2E36", color: "#FFF8EC", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em" }}>{t.sites.tag}</span>
            <h3 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.04", letterSpacing: "-0.02em" }}>{t.sites.title}</h3>
            <p style={{ margin: "0", fontSize: "18px", color: "#33474C", textWrap: "pretty" }}>{t.sites.body}</p>
            <ul style={{ listStyle: "none", margin: "2px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.sites.points[0]}</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.sites.points[1]}</li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#33474C" }}><svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "22px", height: "22px", flex: "none", marginTop: "2px" }}><circle cx="12" cy="12" r="11" style={{ fill: "#E3F2F1" }}></circle><path d="M 7 12.5 L 10.5 16 L 17 8.5" style={{ fill: "none", stroke: "#0E5A64", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}></path></svg>{t.sites.points[2]}</li>
            </ul>
            <a className="sh-btn" href={SIGNUP_URL} style={{ display: "inline-flex", alignItems: "center", minHeight: "46px", marginTop: "4px", padding: "0 20px", border: "2px solid #0B2E36", borderRadius: "999px", color: "#0B2E36", fontWeight: "700", fontSize: "16px", textDecoration: "none" }}>{t.sites.cta} {go}</a>
          </div>
          <div style={{ flex: "1 1 520px", minWidth: "0" }}>
            {/* A drawn browser window with a phone at its right-hand corner: it stays as drawn on a right-to-left page. */}
            <div dir={rtl ? "ltr" : undefined} style={{ position: "relative", maxWidth: "620px", margin: "0 auto", padding: "0 0 28px" }}>
              <div style={{ width: "88%", boxSizing: "border-box", border: "2px solid #DCE7E6", borderRadius: "16px", overflow: "hidden", background: "#FFFFFF", boxShadow: "0 26px 46px -24px rgba(11, 46, 54, 0.7)" }}>
                <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "7px", height: "36px", padding: "0 14px", background: "#EEF3F3" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F0604F" }}></span>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFD15C" }}></span>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#7CC4A8" }}></span>
                  <span style={{ flex: "1", maxWidth: "300px", marginLeft: "10px", height: "22px", boxSizing: "border-box", padding: "0 12px", borderRadius: "999px", background: "#FFFFFF", display: "flex", alignItems: "center", fontSize: "12px", color: "#5E7378" }}>brightwell-solar.example</span>
                </div>
                <div style={{ aspectRatio: "600 / 384", overflow: "hidden" }}>
                  <img className="sh-scroll" src="/home/site-full.webp" width={1200} height={3424} loading="lazy" decoding="async" alt={t.sites.altFull} style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
              <div style={{ position: "absolute", right: "0", bottom: "0", width: "23%", boxSizing: "border-box", border: "6px solid #0B2E36", borderRadius: "22px", overflow: "hidden", background: "#0B2E36", boxShadow: "0 22px 36px -20px rgba(11, 46, 54, 0.8)", transform: "rotate(3deg)" }}>
                <img src="/home/site-phone.webp" width={585} height={1170} loading="lazy" decoding="async" alt={t.sites.altPhone} style={{ display: "block", width: "100%", height: "auto", borderRadius: "16px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
