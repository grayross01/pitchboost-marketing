// Part of the home page (home-view.tsx puts the sections together, in every language). The look was approved as a mockup in November 2026; the inline styles carry it over as drawn.
import { SIGNUP_REBUILD, SIGNUP_URL } from "./links";
import { arrow } from "./local-link";
import { HOME_COPY } from "@/lib/home-i18n";
import type { Locale } from "@/lib/redesign-i18n";

/** The last word: the same box as the top, and the way in for a file. */
export default function Finale({ locale }: { locale: Locale }) {
  const t = HOME_COPY[locale].finale;
  return (
    <section style={{ position: "relative", marginTop: "-1px", background: "#0B2E36", color: "#FFF8EC", padding: "76px 0 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", textAlign: "center" }}>
        <h2 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "800", fontSize: "clamp(40px, 5vw, 72px)", lineHeight: "1.04", letterSpacing: "-0.025em", textWrap: "balance" }}>{t.lead} <span style={{ color: "#FFD15C" }}>{t.mark}</span></h2>
        <p style={{ margin: "0", fontSize: "20px", color: "#C9DDDE" }}>{t.body}</p>
        <form action={SIGNUP_URL} method="get" style={{ width: "100%", maxWidth: "640px", boxSizing: "border-box", marginTop: "10px", padding: "12px", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
          <input type="hidden" name="intent" value="present" />
          <label htmlFor="sh-topic-2" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clipPath: "inset(50%)" }}>{t.label}</label>
          <input id="sh-topic-2" name="prompt" type="text" required maxLength={300} autoComplete="off" placeholder={t.label} style={{ flex: "999 1 260px", minWidth: "0", height: "58px", boxSizing: "border-box", padding: "0 18px", border: "2px solid #D5E7E9", borderRadius: "16px", background: "#F6FAF9", font: "inherit", fontSize: "18px", color: "#0B2E36" }} />
          <button className="sh-btn" type="submit" style={{ flex: "1 0 auto", height: "58px", padding: "0 26px", border: "0", borderRadius: "16px", background: "#FFD15C", color: "#0B2E36", font: "inherit", fontWeight: "700", fontSize: "18px", cursor: "pointer" }}>{t.submit}</button>
        </form>
        <a href={SIGNUP_REBUILD} className="sh-finale-file">{t.file} {arrow(locale)}</a>
        <p style={{ margin: "0", fontSize: "14px", color: "#A9C4C6" }}>{t.fine}</p>
      </div>
      <svg role="img" aria-label={t.audienceAlt} viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax slice" style={{ display: "block", width: "100%", height: "clamp(190px, 21vw, 300px)", marginTop: "44px" }}>
        <rect className="sh-fall" x="75" y="30" width="10" height="20" rx="3" transform="rotate(20 80 40)" style={{ fill: "#FFD15C" }}></rect>
        <circle cx="150" cy="110" r="6" style={{ fill: "#F0604F" }}></circle>
        <rect x="205" y="12" width="10" height="20" rx="3" transform="rotate(-30 210 22)" style={{ fill: "#BFE0E3" }}></rect>
        <rect className="sh-fall" x="260" y="130" width="10" height="20" rx="3" transform="rotate(45 265 140)" style={{ fill: "#FFF8EC", animationDelay: "-2s" }}></rect>
        <circle cx="330" cy="60" r="7" style={{ fill: "#FFD15C" }}></circle>
        <rect x="387" y="108" width="10" height="20" rx="3" transform="rotate(-15 392 118)" style={{ fill: "#F0604F" }}></rect>
        <rect className="sh-fall" x="445" y="20" width="10" height="20" rx="3" transform="rotate(60 450 30)" style={{ fill: "#FFD15C", animationDelay: "-4s" }}></rect>
        <circle cx="505" cy="146" r="5" style={{ fill: "#BFE0E3" }}></circle>
        <rect x="555" y="68" width="10" height="20" rx="3" transform="rotate(10 560 78)" style={{ fill: "#FFF8EC" }}></rect>
        <rect className="sh-fall" x="615" y="10" width="10" height="20" rx="3" transform="rotate(-40 620 20)" style={{ fill: "#F0604F", animationDelay: "-1s" }}></rect>
        <circle cx="668" cy="128" r="6" style={{ fill: "#FFD15C" }}></circle>
        <rect x="725" y="46" width="10" height="20" rx="3" transform="rotate(30 730 56)" style={{ fill: "#BFE0E3" }}></rect>
        <rect className="sh-fall" x="785" y="136" width="10" height="20" rx="3" transform="rotate(-20 790 146)" style={{ fill: "#FFD15C", animationDelay: "-3s" }}></rect>
        <circle cx="842" cy="34" r="7" style={{ fill: "#F0604F" }}></circle>
        <rect x="895" y="90" width="10" height="20" rx="3" transform="rotate(50 900 100)" style={{ fill: "#FFF8EC" }}></rect>
        <rect className="sh-fall" x="953" y="14" width="10" height="20" rx="3" transform="rotate(-10 958 24)" style={{ fill: "#FFD15C", animationDelay: "-5s" }}></rect>
        <circle cx="1010" cy="138" r="5" style={{ fill: "#BFE0E3" }}></circle>
        <rect x="1061" y="56" width="10" height="20" rx="3" transform="rotate(25 1066 66)" style={{ fill: "#F0604F" }}></rect>
        <rect className="sh-fall" x="1119" y="142" width="10" height="20" rx="3" transform="rotate(-35 1124 152)" style={{ fill: "#FFD15C", animationDelay: "-2.5s" }}></rect>
        <circle cx="1178" cy="44" r="6" style={{ fill: "#FFF8EC" }}></circle>
        <rect x="1227" y="102" width="10" height="20" rx="3" transform="rotate(15 1232 112)" style={{ fill: "#BFE0E3" }}></rect>
        <rect className="sh-fall" x="1285" y="18" width="10" height="20" rx="3" transform="rotate(-55 1290 28)" style={{ fill: "#F0604F", animationDelay: "-4.5s" }}></rect>
        <circle cx="1340" cy="130" r="7" style={{ fill: "#FFD15C" }}></circle>
        <rect x="1383" y="62" width="10" height="20" rx="3" transform="rotate(35 1388 72)" style={{ fill: "#FFF8EC" }}></rect>
        <g style={{ fill: "none", stroke: "#164B56", strokeWidth: "18", strokeLinecap: "round" }}>
          <path d="M 62 280 L 30 188"></path><path d="M 158 280 L 190 188"></path>
          <path d="M 242 280 L 210 180"></path><path d="M 338 280 L 370 180"></path>
          <path d="M 422 280 L 390 194"></path><path d="M 518 280 L 550 194"></path>
          <path d="M 602 280 L 570 176"></path><path d="M 698 280 L 730 176"></path>
          <path d="M 782 280 L 750 190"></path><path d="M 878 280 L 910 190"></path>
          <path d="M 962 280 L 930 182"></path><path d="M 1058 280 L 1090 182"></path>
          <path d="M 1142 280 L 1110 196"></path><path d="M 1238 280 L 1266 196"></path>
          <path d="M 1302 280 L 1288 186"></path><path d="M 1398 280 L 1420 186"></path>
        </g>
        <g style={{ fill: "#164B56" }}>
          <ellipse cx="110" cy="334" rx="80" ry="72"></ellipse><circle cx="110" cy="236" r="38"></circle>
          <ellipse cx="290" cy="334" rx="80" ry="72"></ellipse><circle cx="290" cy="228" r="38"></circle><circle cx="290" cy="184" r="14"></circle>
          <ellipse cx="470" cy="334" rx="80" ry="72"></ellipse><circle cx="470" cy="240" r="38"></circle>
          <ellipse cx="650" cy="334" rx="80" ry="72"></ellipse><circle cx="650" cy="226" r="38"></circle>
          <ellipse cx="830" cy="334" rx="80" ry="72"></ellipse><circle cx="830" cy="238" r="38"></circle>
          <ellipse cx="1010" cy="334" rx="80" ry="72"></ellipse><circle cx="1010" cy="230" r="38"></circle>
          <ellipse cx="1190" cy="334" rx="80" ry="72"></ellipse><circle cx="1190" cy="242" r="38"></circle>
          <ellipse cx="1350" cy="334" rx="80" ry="72"></ellipse><circle cx="1350" cy="232" r="38"></circle>
        </g>
        <path d="M 612 224 A 38 38 0 0 1 688 224 Z" style={{ fill: "#F0604F" }}></path>
        <circle cx="650" cy="183" r="10" style={{ fill: "#FFD15C" }}></circle>
        <path d="M 968 230 A 42 42 0 0 1 1052 230" style={{ fill: "none", stroke: "#FFD15C", strokeWidth: "7", strokeLinecap: "round" }}></path>
        <rect x="961" y="220" width="14" height="30" rx="7" style={{ fill: "#FFD15C" }}></rect>
        <rect x="1045" y="220" width="14" height="30" rx="7" style={{ fill: "#FFD15C" }}></rect>
      </svg>
    </section>
  );
}
