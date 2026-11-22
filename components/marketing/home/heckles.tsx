// Part of the home page (app/(en)/page.tsx). The look was approved as a mockup in November 2026; the inline styles carry it over as drawn.
import { HOME_FAQS } from "./faqs";

const HEADS = ["#0B2E36", "#0E5A64", "#F0604F"];

/** The questions, as heckles from the back row. Every answer is on the page, none folded away. */
export default function Heckles() {
  return (
    <section id="heckles" style={{ position: "relative", marginTop: "-1px", background: "#FFF8EC", padding: "64px 0 68px" }}>
      <div className="sh-wrap">
        <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
          <span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.12em", color: "#A93A2C" }}>HECKLES FROM THE BACK ROW</span>
          <h2 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.06", letterSpacing: "-0.02em", textWrap: "balance" }}>Fair questions, shouted politely.</h2>
        </div>
        <div style={{ marginTop: "44px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", gap: "20px" }}>
          {HOME_FAQS.map(({ q, a }, i) => (
            <div key={q} style={{ boxSizing: "border-box", padding: "26px", borderRadius: "26px", background: "#FFFFFF", display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <svg aria-hidden="true" viewBox="0 0 32 32" style={{ width: "34px", height: "34px", flex: "none" }}><circle cx="16" cy="12" r="8" style={{ fill: HEADS[i % HEADS.length] }}></circle><path d="M 3 32 A 13 12 0 0 1 29 32 Z" style={{ fill: HEADS[i % HEADS.length] }}></path></svg>
              <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "21px", lineHeight: "1.2" }}>{q}</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#33474C" }}>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
