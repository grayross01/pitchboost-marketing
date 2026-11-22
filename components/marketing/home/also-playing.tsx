// Part of the home page (app/(en)/page.tsx). The look was approved as a mockup in November 2026; the inline styles carry it over as drawn.
import Link from "next/link";

/** PitchBoost inside ChatGPT, Claude and Cursor. */
export default function AlsoPlaying() {
  return (
    <section style={{ position: "relative", marginTop: "-1px", background: "#0B2E36", color: "#FFF8EC", padding: "60px 0" }}>
      <div className="sh-wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px 72px" }}>
        <div style={{ flex: "1.1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "18px" }}>
          <span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.12em", color: "#FFD15C" }}>ALSO PLAYING AT</span>
          <h2 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.06", letterSpacing: "-0.02em", textWrap: "balance" }}>Already talking to a robot? Bring ours along.</h2>
          <p style={{ margin: "0", fontSize: "18px", color: "#C9DDDE", textWrap: "pretty" }}>Add the PitchBoost plugin in ChatGPT, or connect it to Claude or Cursor, and get a finished, branded deck back on a shareable link. No copying and pasting between tabs.</p>
          <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px" }}>
            <Link className="sh-btn" href="/chatgpt" style={{ display: "inline-flex", alignItems: "center", minHeight: "50px", padding: "0 24px", border: "2px solid #FFF8EC", borderRadius: "999px", color: "#FFF8EC", fontWeight: "700", fontSize: "16px", textDecoration: "none" }}>See how it works with ChatGPT</Link>
            <Link href="/features/api-and-mcp" style={{ color: "#FFD15C", fontWeight: "700", fontSize: "16px", padding: "12px 0" }}>API and MCP →</Link>
          </div>
        </div>
        <div style={{ flex: "1 1 400px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ alignSelf: "flex-end", maxWidth: "85%", boxSizing: "border-box", padding: "14px 18px", borderRadius: "22px 22px 6px 22px", background: "#12414B", fontSize: "17px" }}>Redesign this deck in our brand. It&apos;s for Thursday.</div>
          <div style={{ alignSelf: "flex-start", maxWidth: "92%", boxSizing: "border-box", padding: "16px 18px", borderRadius: "22px 22px 22px 6px", background: "#FFF8EC", color: "#0B2E36", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "17px" }}>Done. 14 slides, your colors, your numbers kept.</span>
            <div aria-hidden="true" style={{ display: "flex", gap: "8px" }}>
              <span style={{ width: "92px", height: "54px", borderRadius: "8px", background: "#0E5A64" }}></span>
              <span style={{ width: "92px", height: "54px", boxSizing: "border-box", border: "2px solid #D5E7E9", borderRadius: "8px", background: "#FFFFFF" }}></span>
              <span style={{ width: "92px", height: "54px", borderRadius: "8px", background: "#FFC9BF" }}></span>
            </div>
            <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", minHeight: "40px", padding: "0 14px", borderRadius: "999px", background: "#E3F2F1", color: "#0E5A64", fontWeight: "700", fontSize: "15px" }}>app.pitchboost.ai/d/q3-review</span>
          </div>
          <span style={{ alignSelf: "flex-end", fontFamily: "var(--font-caveat), cursive", fontWeight: "700", fontSize: "30px", lineHeight: "1", color: "#FFD15C", transform: "rotate(-4deg)" }}>Thursday? bold.</span>
        </div>
      </div>
    </section>
  );
}
