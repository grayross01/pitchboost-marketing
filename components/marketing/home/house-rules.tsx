// Part of the home page (app/(en)/page.tsx). The look was approved as a mockup in November 2026; the inline styles carry it over as drawn.

/** What PitchBoost will not do with someone's work. */
export default function HouseRules() {
  return (
    <section style={{ position: "relative", marginTop: "-1px", background: "#FFF8EC", padding: "60px 0 0" }}>
      <div className="sh-wrap">
        <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
          <span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.12em", color: "#A93A2C" }}>HOUSE RULES</span>
          <h2 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.06", letterSpacing: "-0.02em", textWrap: "balance" }}>Things PitchBoost won&apos;t do to your work.</h2>
        </div>
        <div style={{ marginTop: "44px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "20px" }}>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
            <span style={{ display: "inline-flex", padding: "2px 10px", border: "3px solid #A93A2C", borderRadius: "8px", color: "#A93A2C", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "800", fontSize: "14px", letterSpacing: "0.14em", transform: "rotate(-6deg)" }}>NOPE</span>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "24px", lineHeight: "1.15" }}>No shrugging at your numbers.</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>A redesign keeps the figures from your original and checks them against it.</span>
          </div>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
            <span style={{ display: "inline-flex", padding: "2px 10px", border: "3px solid #A93A2C", borderRadius: "8px", color: "#A93A2C", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "800", fontSize: "14px", letterSpacing: "0.14em", transform: "rotate(4deg)" }}>NOPE</span>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "24px", lineHeight: "1.15" }}>No mystery facts.</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>Anything it looks up comes with its source, so you can check it too.</span>
          </div>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
            <span style={{ display: "inline-flex", padding: "2px 10px", border: "3px solid #A93A2C", borderRadius: "8px", color: "#A93A2C", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "800", fontSize: "14px", letterSpacing: "0.14em", transform: "rotate(-3deg)" }}>NOPE</span>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "24px", lineHeight: "1.15" }}>No off-brand anything.</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>Your logo, colors and fonts on every slide, post, ad and page, picked up from your website or set by you.</span>
          </div>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
            <span style={{ display: "inline-flex", padding: "2px 10px", border: "3px solid #A93A2C", borderRadius: "8px", color: "#A93A2C", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "800", fontSize: "14px", letterSpacing: "0.14em", transform: "rotate(5deg)" }}>NOPE</span>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "24px", lineHeight: "1.15" }}>No posting behind your back.</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>Posts and ads are yours to download and run. Nothing goes out until you send it.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
