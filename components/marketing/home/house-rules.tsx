// Part of the home page (home-view.tsx puts the sections together, in every language). The look was approved as a mockup in November 2026; the inline styles carry it over as drawn.
import { HOME_COPY } from "@/lib/home-i18n";
import type { Locale } from "@/lib/redesign-i18n";

/** What PitchBoost will not do with someone's work. */
export default function HouseRules({ locale }: { locale: Locale }) {
  const t = HOME_COPY[locale].houseRules;
  return (
    <section style={{ position: "relative", marginTop: "-1px", background: "#FFF8EC", padding: "60px 0 0" }}>
      <div className="sh-wrap">
        <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
          <span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.12em", color: "#A93A2C" }}>{t.eyebrow}</span>
          <h2 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.06", letterSpacing: "-0.02em", textWrap: "balance" }}>{t.title}</h2>
        </div>
        <div style={{ marginTop: "44px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "20px" }}>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
            <span style={{ display: "inline-flex", padding: "2px 10px", border: "3px solid #A93A2C", borderRadius: "8px", color: "#A93A2C", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "800", fontSize: "14px", letterSpacing: "0.14em", transform: "rotate(-6deg)" }}>{t.stamp}</span>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "24px", lineHeight: "1.15" }}>{t.rules[0].title}</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>{t.rules[0].body}</span>
          </div>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
            <span style={{ display: "inline-flex", padding: "2px 10px", border: "3px solid #A93A2C", borderRadius: "8px", color: "#A93A2C", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "800", fontSize: "14px", letterSpacing: "0.14em", transform: "rotate(4deg)" }}>{t.stamp}</span>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "24px", lineHeight: "1.15" }}>{t.rules[1].title}</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>{t.rules[1].body}</span>
          </div>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
            <span style={{ display: "inline-flex", padding: "2px 10px", border: "3px solid #A93A2C", borderRadius: "8px", color: "#A93A2C", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "800", fontSize: "14px", letterSpacing: "0.14em", transform: "rotate(-3deg)" }}>{t.stamp}</span>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "24px", lineHeight: "1.15" }}>{t.rules[2].title}</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>{t.rules[2].body}</span>
          </div>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
            <span style={{ display: "inline-flex", padding: "2px 10px", border: "3px solid #A93A2C", borderRadius: "8px", color: "#A93A2C", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "800", fontSize: "14px", letterSpacing: "0.14em", transform: "rotate(5deg)" }}>{t.stamp}</span>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "24px", lineHeight: "1.15" }}>{t.rules[3].title}</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>{t.rules[3].body}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
