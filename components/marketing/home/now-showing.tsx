// Part of the home page (home-view.tsx puts the sections together, in every language). The look was approved as a mockup in November 2026; the inline styles carry it over as drawn.
import { TEMPLATES_URL } from "./links";
import { arrow } from "./local-link";
import { HOME_COPY } from "@/lib/home-i18n";
import type { Locale } from "@/lib/redesign-i18n";

/** A row of example covers under the stage. They lead to the template gallery. The covers are drawings and keep their English words; what a screen reader hears and the caption under each are in the page's language. */
export default function NowShowing({ locale }: { locale: Locale }) {
  const t = HOME_COPY[locale].nowShowing;
  return (
    <section id="sample-deck" style={{ position: "relative", marginTop: "-1px", background: "#081F25", color: "#FFF8EC", padding: "30px 0 34px", overflow: "hidden" }}>
      <div className="sh-wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px 20px", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", padding: "8px 20px", border: "3px dotted #FFD15C", borderRadius: "14px", color: "#FFD15C", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "800", fontSize: "15px", letterSpacing: "0.22em" }}>{t.badge}</span>
          <span style={{ fontSize: "18px", color: "#C9DDDE" }}>{t.line}</span>
          <a href={TEMPLATES_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#FFD15C", fontWeight: "700", fontSize: "16px", padding: "12px 0" }}>{t.gallery} {arrow(locale)}</a>
        </div>
        <div style={{ maxWidth: "100%", boxSizing: "border-box", overflowX: "auto", padding: "10px 6px 4px" }}>
          <div style={{ display: "flex", gap: "24px", width: "max-content", margin: "0 auto" }}>
            <a href={TEMPLATES_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block", flex: "none", width: "200px", textDecoration: "none", color: "#A9C4C6", transform: "rotate(-3deg)" }}>
              <span className="sh-poster" style={{ display: "block" }}>
                <svg role="img" aria-label={t.posters[0].alt} viewBox="0 0 320 180" style={{ display: "block", width: "100%", height: "auto", boxSizing: "border-box", border: "4px solid #FFF8EC", borderRadius: "10px", overflow: "hidden", boxShadow: "0 16px 28px -14px rgba(0, 0, 0, 0.7)" }}>
                  <rect x="0" y="0" width="320" height="180" style={{ fill: "#1E88E5" }}></rect>
                  <circle cx="266" cy="42" r="24" style={{ fill: "#FFD15C" }}></circle>
                  <g style={{ fill: "#FFFFFF" }}>
                    <circle cx="132" cy="52" r="15"></circle><circle cx="152" cy="42" r="19"></circle><circle cx="174" cy="52" r="15"></circle><rect x="132" y="50" width="42" height="17" rx="8"></rect>
                    <ellipse cx="136" cy="82" rx="3" ry="5"></ellipse><ellipse cx="153" cy="90" rx="3" ry="5"></ellipse><ellipse cx="170" cy="82" rx="3" ry="5"></ellipse>
                  </g>
                  <path d="M 0 132 C 30 122 50 142 80 132 S 130 122 160 132 S 210 142 240 132 S 290 122 320 132 L 320 180 L 0 180 Z" style={{ fill: "#0D5CB6" }}></path>
                  <path d="M 240 124 C 254 110 262 94 264 78" style={{ fill: "none", stroke: "#FFFFFF", strokeWidth: "3", strokeLinecap: "round", strokeDasharray: "2 7" }}></path>
                  <path d="M 264 76 L 256 85 M 264 76 L 271 86" style={{ fill: "none", stroke: "#FFFFFF", strokeWidth: "3", strokeLinecap: "round" }}></path>
                  <text x="16" y="24" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "8px", fontWeight: "800", letterSpacing: "1.2px", fill: "#EAF6FF" }}>GRADE 6 SCIENCE</text>
                  <text x="16" y="124" style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: "800", fontSize: "34px", fill: "#FFFFFF" }}>The water</text>
                  <text x="16" y="160" style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: "800", fontSize: "34px", fill: "#FFFFFF" }}>cycle</text>
                </svg>
                <span style={{ display: "block", marginTop: "10px", fontSize: "14px", fontWeight: "600", textAlign: "center" }}>{t.posters[0].caption}</span>
              </span>
            </a>
            <a href={TEMPLATES_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block", flex: "none", width: "200px", textDecoration: "none", color: "#A9C4C6", transform: "rotate(2deg)" }}>
              <span className="sh-poster" style={{ display: "block" }}>
                <svg role="img" aria-label={t.posters[1].alt} viewBox="0 0 320 180" style={{ display: "block", width: "100%", height: "auto", boxSizing: "border-box", border: "4px solid #FFF8EC", borderRadius: "10px", overflow: "hidden", boxShadow: "0 16px 28px -14px rgba(0, 0, 0, 0.7)" }}>
                  <rect x="0" y="0" width="320" height="180" style={{ fill: "#FF7A59" }}></rect>
                  <circle cx="204" cy="198" r="152" style={{ fill: "none", stroke: "#FFA98F", strokeWidth: "3" }}></circle>
                  <circle cx="204" cy="198" r="129" style={{ fill: "none", stroke: "#FFC0AB", strokeWidth: "3" }}></circle>
                  <circle cx="204" cy="198" r="104" style={{ fill: "#FFD15C" }}></circle>
                  <text x="16" y="24" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "8px", fontWeight: "800", letterSpacing: "1.2px", fill: "#5A1E0E" }}>INTRODUCING</text>
                  <text x="16" y="62" style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: "800", fontSize: "32px", fill: "#2B120A" }}>Brightwell</text>
                  <text x="16" y="94" style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: "800", fontSize: "32px", fill: "#2B120A" }}>Solar</text>
                  <text x="16" y="114" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "11px", fontWeight: "700", fill: "#5A1E0E" }}>Cleaner power for 40 schools</text>
                </svg>
                <span style={{ display: "block", marginTop: "10px", fontSize: "14px", fontWeight: "600", textAlign: "center" }}>{t.posters[1].caption}</span>
              </span>
            </a>
            <a href={TEMPLATES_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block", flex: "none", width: "200px", textDecoration: "none", color: "#A9C4C6", transform: "rotate(-1.5deg)" }}>
              <span className="sh-poster" style={{ display: "block" }}>
                <svg role="img" aria-label={t.posters[2].alt} viewBox="0 0 320 180" style={{ display: "block", width: "100%", height: "auto", boxSizing: "border-box", border: "4px solid #FFF8EC", borderRadius: "10px", overflow: "hidden", boxShadow: "0 16px 28px -14px rgba(0, 0, 0, 0.7)" }}>
                  <rect x="0" y="0" width="320" height="180" style={{ fill: "#101B3D" }}></rect>
                  <text x="16" y="24" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "8px", fontWeight: "800", letterSpacing: "1.2px", fill: "#8FA0D8" }}>NORTHWIND ANALYTICS</text>
                  <text x="16" y="44" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "13px", fontWeight: "700", fill: "#FFFFFF" }}>Q3 business review</text>
                  <text x="13" y="138" style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: "800", fontSize: "86px", letterSpacing: "-2px", fill: "#C6F35E" }}>+18%</text>
                  <text x="16" y="162" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "9.5px", fontWeight: "600", fill: "#8FA0D8" }}>Revenue, quarter on quarter</text>
                  <g style={{ fill: "#34427A" }}><rect x="236" y="128" width="11" height="22" rx="3"></rect><rect x="251" y="114" width="11" height="36" rx="3"></rect><rect x="266" y="98" width="11" height="52" rx="3"></rect><rect x="281" y="82" width="11" height="68" rx="3"></rect></g>
                  <rect x="296" y="58" width="11" height="92" rx="3" style={{ fill: "#C6F35E" }}></rect>
                </svg>
                <span style={{ display: "block", marginTop: "10px", fontSize: "14px", fontWeight: "600", textAlign: "center" }}>{t.posters[2].caption}</span>
              </span>
            </a>
            <a href={TEMPLATES_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block", flex: "none", width: "200px", textDecoration: "none", color: "#A9C4C6", transform: "rotate(3deg)" }}>
              <span className="sh-poster" style={{ display: "block" }}>
                <svg role="img" aria-label={t.posters[3].alt} viewBox="0 0 320 180" style={{ display: "block", width: "100%", height: "auto", boxSizing: "border-box", border: "4px solid #FFF8EC", borderRadius: "10px", overflow: "hidden", boxShadow: "0 16px 28px -14px rgba(0, 0, 0, 0.7)" }}>
                  <rect x="0" y="0" width="320" height="180" style={{ fill: "#131313" }}></rect>
                  <circle cx="268" cy="58" r="36" style={{ fill: "none", stroke: "#FF4D8D", strokeWidth: "3" }}></circle>
                  <circle cx="268" cy="58" r="23" style={{ fill: "none", stroke: "#FF4D8D", strokeWidth: "3" }}></circle>
                  <circle cx="268" cy="58" r="9" style={{ fill: "#FF4D8D" }}></circle>
                  <text x="16" y="24" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "8px", fontWeight: "800", letterSpacing: "1.2px", fill: "#A6A6A6" }}>A TALK FOR TEAM LEADS</text>
                  <text x="16" y="72" style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: "800", fontSize: "38px", fill: "#FFFFFF" }}>Good ideas</text>
                  <text x="16" y="112" style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: "800", fontSize: "38px", fill: "#FF4D8D" }}>die in</text>
                  <text x="16" y="152" style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: "800", fontSize: "38px", fill: "#FFFFFF" }}>meetings.</text>
                </svg>
                <span style={{ display: "block", marginTop: "10px", fontSize: "14px", fontWeight: "600", textAlign: "center" }}>{t.posters[3].caption}</span>
              </span>
            </a>
            <a href={TEMPLATES_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block", flex: "none", width: "200px", textDecoration: "none", color: "#A9C4C6", transform: "rotate(-2deg)" }}>
              <span className="sh-poster" style={{ display: "block" }}>
                <svg role="img" aria-label={t.posters[4].alt} viewBox="0 0 320 180" style={{ display: "block", width: "100%", height: "auto", boxSizing: "border-box", border: "4px solid #FFF8EC", borderRadius: "10px", overflow: "hidden", boxShadow: "0 16px 28px -14px rgba(0, 0, 0, 0.7)" }}>
                  <rect x="0" y="0" width="320" height="180" style={{ fill: "#F6EFE2" }}></rect>
                  <rect x="188" y="30" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect><rect x="209" y="30" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect><rect x="230" y="30" width="18" height="18" rx="3" style={{ fill: "#FBD08E" }}></rect><rect x="251" y="30" width="18" height="18" rx="3" style={{ fill: "#FBD08E" }}></rect><rect x="272" y="30" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect><rect x="293" y="30" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect><rect x="188" y="51" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect><rect x="209" y="51" width="18" height="18" rx="3" style={{ fill: "#FBD08E" }}></rect><rect x="230" y="51" width="18" height="18" rx="3" style={{ fill: "#F9A34B" }}></rect><rect x="251" y="51" width="18" height="18" rx="3" style={{ fill: "#F9A34B" }}></rect><rect x="272" y="51" width="18" height="18" rx="3" style={{ fill: "#FBD08E" }}></rect><rect x="293" y="51" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect><rect x="188" y="72" width="18" height="18" rx="3" style={{ fill: "#FBD08E" }}></rect><rect x="209" y="72" width="18" height="18" rx="3" style={{ fill: "#F9A34B" }}></rect><rect x="230" y="72" width="18" height="18" rx="3" style={{ fill: "#E4572E" }}></rect><rect x="251" y="72" width="18" height="18" rx="3" style={{ fill: "#C2311F" }}></rect><rect x="272" y="72" width="18" height="18" rx="3" style={{ fill: "#F9A34B" }}></rect><rect x="293" y="72" width="18" height="18" rx="3" style={{ fill: "#FBD08E" }}></rect><rect x="188" y="93" width="18" height="18" rx="3" style={{ fill: "#FBD08E" }}></rect><rect x="209" y="93" width="18" height="18" rx="3" style={{ fill: "#F9A34B" }}></rect><rect x="230" y="93" width="18" height="18" rx="3" style={{ fill: "#C2311F" }}></rect><rect x="251" y="93" width="18" height="18" rx="3" style={{ fill: "#9B1D20" }}></rect><rect x="272" y="93" width="18" height="18" rx="3" style={{ fill: "#E4572E" }}></rect><rect x="293" y="93" width="18" height="18" rx="3" style={{ fill: "#FBD08E" }}></rect><rect x="188" y="114" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect><rect x="209" y="114" width="18" height="18" rx="3" style={{ fill: "#FBD08E" }}></rect><rect x="230" y="114" width="18" height="18" rx="3" style={{ fill: "#F9A34B" }}></rect><rect x="251" y="114" width="18" height="18" rx="3" style={{ fill: "#E4572E" }}></rect><rect x="272" y="114" width="18" height="18" rx="3" style={{ fill: "#F9A34B" }}></rect><rect x="293" y="114" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect><rect x="188" y="135" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect><rect x="209" y="135" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect><rect x="230" y="135" width="18" height="18" rx="3" style={{ fill: "#FBD08E" }}></rect><rect x="251" y="135" width="18" height="18" rx="3" style={{ fill: "#FBD08E" }}></rect><rect x="272" y="135" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect><rect x="293" y="135" width="18" height="18" rx="3" style={{ fill: "#FDE8C4" }}></rect>
                  <text x="16" y="26" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "8px", fontWeight: "800", letterSpacing: "1.2px", fill: "#9B1D20" }}>THESIS DEFENSE</text>
                  <text x="16" y="74" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "27px", fontWeight: "700", fill: "#2A1A12" }}>Urban heat</text>
                  <text x="16" y="104" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "27px", fontWeight: "700", fill: "#2A1A12" }}>islands</text>
                  <text x="16" y="124" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "9.5px", fontWeight: "600", fill: "#6B5A4E" }}>Mapping a hotter city</text>
                  <path d="M 16 146 L 150 146" style={{ fill: "none", stroke: "#D8CBB6", strokeWidth: "1.5" }}></path>
                  <text x="16" y="160" style={{ fontFamily: "var(--font-figtree), sans-serif", fontSize: "8px", fontWeight: "600", fill: "#6B5A4E" }}>Department of Geography</text>
                </svg>
                <span style={{ display: "block", marginTop: "10px", fontSize: "14px", fontWeight: "600", textAlign: "center" }}>{t.posters[4].caption}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
