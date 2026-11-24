/* eslint-disable @next/next/no-img-element -- these pictures are pre-sized WebP files in /public, and the site serves images as they are */
// Part of the home page (home-view.tsx puts the sections together, in every language). The look was approved as a mockup in November 2026; the inline styles carry it over as drawn.
import HomeMaker from "./home-maker";
import { HOME_COPY } from "@/lib/home-i18n";
import { localeDir } from "@/lib/locale-dir";
import type { Locale } from "@/lib/redesign-i18n";

/** The top of the page: the headline, the two ways in (redesign or make new), and a small stage holding a real deck, website, post and ad. The section is light teal; the front row of the audience is the dark of the page below, so the stage runs into it. */
export default function Hero({ locale }: { locale: Locale }) {
  const t = HOME_COPY[locale].hero;
  const { ooh, awake, encore } = t.bubbles;
  // The four pictures are part of the drawing: on a right-to-left page they keep their places, and so does the small browser bar.
  const drawn = localeDir(locale) === "rtl" ? "ltr" : undefined;
  return (
    <section className="sh-hero">
      <div className="sh-hero-copy">
        <div>
          <h1 className="sh-h1" style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "800", fontSize: "clamp(38px, 4.4vw, 64px)", lineHeight: "1.06", letterSpacing: "-0.025em", textWrap: "balance" }}>{t.h1.lead} <span style={{ position: "relative", display: "inline-block", color: "#0E5A64" }}>{t.h1.mark}<svg aria-hidden="true" viewBox="0 0 300 20" preserveAspectRatio="none" style={{ position: "absolute", left: "0", bottom: "-0.14em", width: "100%", height: "0.2em", overflow: "visible" }}><path d="M 3 12 C 40 2 70 20 110 10 S 190 2 230 11 S 280 16 297 8" style={{ fill: "none", stroke: "#F0604F", strokeWidth: "5", strokeLinecap: "round", vectorEffect: "non-scaling-stroke" }}></path></svg></span>{t.h1.tail}</h1>
        </div>
        <p className="sh-sub" style={{ margin: "0", maxWidth: "780px", fontSize: "20px", lineHeight: "1.5", color: "#2F4A50", textWrap: "pretty" }}>{t.body}</p>
        <HomeMaker t={HOME_COPY[locale].maker} />
        <p className="sh-fine">{t.fine}</p>
      </div>

      {/* The stage scales as one drawing: the pictures sit between the scenery behind and the curtains and audience in front. */}
      <div className="sh-stage">
        <svg aria-hidden="true" className="sh-stage-layer" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice">
          <g className="sh-glow">
            <polygon points="640,0 800,0 1030,452 410,452" style={{ fill: "#FFFFFF", opacity: "0.55" }}></polygon>
            <polygon points="270,0 350,0 500,452 110,452" style={{ fill: "#FFFFFF", opacity: "0.35" }}></polygon>
            <polygon points="1090,0 1170,0 1330,452 940,452" style={{ fill: "#FFFFFF", opacity: "0.35" }}></polygon>
          </g>
          <path d="M 100 452 Q 720 396 1340 452 L 1340 600 L 100 600 Z" style={{ fill: "#0E5A64" }}></path>
          <path d="M 100 452 Q 720 396 1340 452" style={{ fill: "none", stroke: "#1C7B87", strokeWidth: "6", strokeLinecap: "round" }}></path>
          <ellipse cx="720" cy="446" rx="300" ry="20" style={{ fill: "#FFD15C", opacity: "0.28" }}></ellipse>
          <ellipse cx="720" cy="448" rx="210" ry="9" style={{ fill: "#062028", opacity: "0.45" }}></ellipse>
          <ellipse cx="306" cy="462" rx="140" ry="8" style={{ fill: "#062028", opacity: "0.4" }}></ellipse>
          <ellipse cx="1130" cy="462" rx="150" ry="8" style={{ fill: "#062028", opacity: "0.4" }}></ellipse>
        </svg>
        <div className="sh-stage-layer" dir={drawn}>
          <div className="sh-piece sh-piece-deck">
            <div className="sh-bob sh-frame sh-frame-deck">
              <img src="/home/deck-cover.webp" width={1000} height={563} alt={t.alt.deck} />
            </div>
          </div>
          <div className="sh-piece sh-piece-site">
            <div className="sh-bob sh-frame sh-frame-site" style={{ animationDelay: "-1.6s" }}>
              <div className="sh-bar" aria-hidden="true"><span /><span /><span /><span /></div>
              <img src="/home/site-top.webp" width={800} height={488} alt={t.alt.site} />
            </div>
          </div>
          <div className="sh-piece sh-piece-post">
            <div className="sh-bob sh-frame" style={{ animationDelay: "-3.1s" }}>
              <img src="/home/post-c2.webp" width={432} height={540} alt={t.alt.post} />
            </div>
          </div>
          <div className="sh-piece sh-piece-ad">
            <div className="sh-bob sh-frame" style={{ animationDelay: "-2.2s" }}>
              <img src="/home/ad-square.webp" width={480} height={480} alt={t.alt.ad} />
            </div>
          </div>
        </div>
        {/* On a phone the big drawing shows only its middle, so the curtains get a narrow pair of their own. */}
        <svg aria-hidden="true" className="sh-curtain-sm sh-curtain-sm-l" viewBox="0 0 40 322" preserveAspectRatio="none">
          <path d="M 0 0 L 40 0 C 40 80 14 112 18 156 C 22 204 36 230 32 300 L 32 322 L 0 322 Z" fill="#F0604F" />
          <path d="M 14 0 C 14 76 6 116 8 156 C 10 204 18 234 15 300 L 15 322" fill="none" stroke="#C9483A" strokeWidth="3" strokeLinecap="round" />
          <rect x="2" y="150" width="20" height="9" rx="4.5" fill="#FFD15C" />
        </svg>
        <svg aria-hidden="true" className="sh-curtain-sm sh-curtain-sm-r" viewBox="0 0 40 322" preserveAspectRatio="none">
          <path d="M 0 0 L 40 0 C 40 80 14 112 18 156 C 22 204 36 230 32 300 L 32 322 L 0 322 Z" fill="#F0604F" />
          <path d="M 14 0 C 14 76 6 116 8 156 C 10 204 18 234 15 300 L 15 322" fill="none" stroke="#C9483A" strokeWidth="3" strokeLinecap="round" />
          <rect x="2" y="150" width="20" height="9" rx="4.5" fill="#FFD15C" />
        </svg>
        <svg aria-hidden="true" className="sh-stage-layer sh-stage-front" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice">
          <text className="sh-hide-sm" x="720" y="74" style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", textAnchor: "middle", fill: "#0E5A64" }}>{t.labels.deck}</text>
          <g className="sh-hide-sm">
            <text x="262" y="160" transform="rotate(-5 262 160)" style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", textAnchor: "middle", fill: "#0E5A64" }}>{t.labels.site}</text>
            <text x="1066" y="128" transform="rotate(5 1066 128)" style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", textAnchor: "middle", fill: "#0E5A64" }}>{t.labels.posts}</text>
            <text x="1236" y="206" transform="rotate(-4 1236 206)" style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", textAnchor: "middle", fill: "#0E5A64" }}>{t.labels.ad}</text>
          </g>
          <g className="sh-open-l">
            <rect x="-40" y="0" width="520" height="600" style={{ fill: "#F0604F" }}></rect>
            <path d="M 60 0 L 60 600 M 150 0 L 150 600 M 240 0 L 240 600 M 330 0 L 330 600 M 420 0 L 420 600" style={{ fill: "none", stroke: "#C9483A", strokeWidth: "5", strokeLinecap: "round" }}></path>
            <rect x="468" y="0" width="12" height="600" style={{ fill: "#C9483A" }}></rect>
          </g>
          <g className="sh-open-r">
            <rect x="960" y="0" width="520" height="600" style={{ fill: "#F0604F" }}></rect>
            <path d="M 1020 0 L 1020 600 M 1110 0 L 1110 600 M 1200 0 L 1200 600 M 1290 0 L 1290 600 M 1380 0 L 1380 600" style={{ fill: "none", stroke: "#C9483A", strokeWidth: "5", strokeLinecap: "round" }}></path>
            <rect x="960" y="0" width="12" height="600" style={{ fill: "#C9483A" }}></rect>
          </g>
          <g>
            <path d="M 0 0 L 132 0 C 132 150 52 210 60 292 C 68 380 118 430 108 560 L 108 600 L 0 600 Z" style={{ fill: "#F0604F" }}></path>
            <path d="M 46 0 C 46 140 22 220 26 292 C 30 380 54 440 48 560 L 48 600" style={{ fill: "none", stroke: "#C9483A", strokeWidth: "5", strokeLinecap: "round" }}></path>
            <path d="M 92 0 C 92 150 40 214 46 292 C 52 380 90 436 82 560 L 82 600" style={{ fill: "none", stroke: "#C9483A", strokeWidth: "5", strokeLinecap: "round" }}></path>
            <rect x="8" y="282" width="62" height="20" rx="10" style={{ fill: "#FFD15C" }}></rect>
          </g>
          <g transform="translate(1440 0) scale(-1 1)">
            <path d="M 0 0 L 132 0 C 132 150 52 210 60 292 C 68 380 118 430 108 560 L 108 600 L 0 600 Z" style={{ fill: "#F0604F" }}></path>
            <path d="M 46 0 C 46 140 22 220 26 292 C 30 380 54 440 48 560 L 48 600" style={{ fill: "none", stroke: "#C9483A", strokeWidth: "5", strokeLinecap: "round" }}></path>
            <path d="M 92 0 C 92 150 40 214 46 292 C 52 380 90 436 82 560 L 82 600" style={{ fill: "none", stroke: "#C9483A", strokeWidth: "5", strokeLinecap: "round" }}></path>
            <rect x="8" y="282" width="62" height="20" rx="10" style={{ fill: "#FFD15C" }}></rect>
          </g>
          <g style={{ fill: "#3E7F83" }}>
            <circle cx="152" cy="492" r="26"></circle><ellipse cx="152" cy="542" rx="52" ry="32"></ellipse>
            <circle cx="280" cy="494" r="26"></circle><ellipse cx="280" cy="544" rx="52" ry="32"></ellipse>
            <circle cx="408" cy="490" r="26"></circle><ellipse cx="408" cy="540" rx="52" ry="32"></ellipse>
            <circle cx="535" cy="493" r="26"></circle><ellipse cx="535" cy="543" rx="52" ry="32"></ellipse>
            <circle cx="662" cy="491" r="26"></circle><ellipse cx="662" cy="541" rx="52" ry="32"></ellipse>
            <circle cx="788" cy="494" r="26"></circle><ellipse cx="788" cy="544" rx="52" ry="32"></ellipse>
            <circle cx="915" cy="490" r="26"></circle><ellipse cx="915" cy="540" rx="52" ry="32"></ellipse>
            <circle cx="1042" cy="493" r="26"></circle><ellipse cx="1042" cy="543" rx="52" ry="32"></ellipse>
            <circle cx="1170" cy="491" r="26"></circle><ellipse cx="1170" cy="541" rx="52" ry="32"></ellipse>
            <circle cx="1298" cy="494" r="26"></circle><ellipse cx="1298" cy="544" rx="52" ry="32"></ellipse>
          </g>
          <g style={{ fill: "#081F25" }}>
            <circle cx="90" cy="520" r="40"></circle><ellipse cx="90" cy="598" rx="80" ry="50"></ellipse>
            <circle cx="215" cy="524" r="40"></circle><ellipse cx="215" cy="602" rx="80" ry="50"></ellipse>
            <circle cx="345" cy="519" r="40"></circle><ellipse cx="345" cy="597" rx="80" ry="50"></ellipse>
            <circle cx="345" cy="473" r="15"></circle>
            <circle cx="470" cy="525" r="40"></circle><ellipse cx="470" cy="603" rx="80" ry="50"></ellipse>
            <circle cx="600" cy="521" r="40"></circle><ellipse cx="600" cy="599" rx="80" ry="50"></ellipse>
            <circle cx="725" cy="523" r="40"></circle><ellipse cx="725" cy="601" rx="80" ry="50"></ellipse>
            <circle cx="850" cy="519" r="40"></circle><ellipse cx="850" cy="597" rx="80" ry="50"></ellipse>
            <circle cx="980" cy="524" r="40"></circle><ellipse cx="980" cy="602" rx="80" ry="50"></ellipse>
            <circle cx="1105" cy="523" r="40"></circle><ellipse cx="1105" cy="601" rx="80" ry="50"></ellipse>
            <circle cx="1235" cy="520" r="40"></circle><ellipse cx="1235" cy="598" rx="80" ry="50"></ellipse>
            <circle cx="1360" cy="524" r="40"></circle><ellipse cx="1360" cy="602" rx="80" ry="50"></ellipse>
          </g>
          <path d="M 642 544 L 654 468" style={{ fill: "none", stroke: "#081F25", strokeWidth: "18", strokeLinecap: "round" }}></path>
          <path d="M 685 519 A 40 40 0 0 1 765 519 Z" style={{ fill: "#F0604F" }}></path>
          <circle cx="725" cy="477" r="10" style={{ fill: "#FFD15C" }}></circle>
          <path d="M 1061 523 A 44 44 0 0 1 1149 523" style={{ fill: "none", stroke: "#FFD15C", strokeWidth: "7", strokeLinecap: "round" }}></path>
          <rect x="1054" y="512" width="14" height="30" rx="7" style={{ fill: "#FFD15C" }}></rect>
          <rect x="1142" y="512" width="14" height="30" rx="7" style={{ fill: "#FFD15C" }}></rect>
          {/* The bubbles keep their centres and tails; each one's width comes with its words. */}
          <g className="sh-wob">
            <rect x={459 - ooh.width / 2} y="404" width={ooh.width} height="46" rx="23" style={{ fill: "#FFFFFF" }}></rect>
            <polygon points="450,448 472,448 464,468" style={{ fill: "#FFFFFF" }}></polygon>
            <text x="459" y="436" style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", textAnchor: "middle", fill: "#0B2E36" }}>{ooh.text}</text>
          </g>
          <g className="sh-wob" style={{ animationDelay: "-1.3s" }}>
            <rect x={940 - awake.width / 2} y="404" width={awake.width} height="46" rx="23" style={{ fill: "#FFFFFF" }}></rect>
            <polygon points="962,448 984,448 978,468" style={{ fill: "#FFFFFF" }}></polygon>
            <text x="940" y="436" style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", textAnchor: "middle", fill: "#0B2E36" }}>{awake.text}</text>
          </g>
          <g className="sh-wob sh-hide-sm" style={{ animationDelay: "-2.4s" }}>
            <rect x={1235 - encore.width / 2} y="430" width={encore.width} height="44" rx="22" style={{ fill: "#FFFFFF" }}></rect>
            <polygon points="1222,472 1244,472 1236,490" style={{ fill: "#FFFFFF" }}></polygon>
            <text x="1235" y="461" style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "28px", fontWeight: "700", textAnchor: "middle", fill: "#0B2E36" }}>{encore.text}</text>
          </g>
        </svg>
      </div>
    </section>
  );
}
