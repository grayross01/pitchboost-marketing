// Part of the home page (app/(en)/page.tsx). The look was approved as a mockup in November 2026; the inline styles carry it over as drawn.
import Link from "next/link";

/** Who it is for. */
export default function Cast() {
  return (
    <section id="cast" style={{ position: "relative", marginTop: "-1px", background: "#FFF8EC", padding: "0 0 64px" }}>
      <div className="sh-wrap">
        <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}>
          <span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.12em", color: "#A93A2C" }}>THE CAST</span>
          <h2 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.06", letterSpacing: "-0.02em", textWrap: "balance" }}>For people with something to show, and no design team.</h2>
        </div>
        <div style={{ marginTop: "36px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "20px" }}>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
            <svg aria-hidden="true" viewBox="0 0 88 88" style={{ width: "84px", height: "84px", borderRadius: "50%", overflow: "hidden" }}>
              <circle cx="44" cy="44" r="44" style={{ fill: "#FFE7A3" }}></circle>
              <path d="M 14 88 A 30 26 0 0 1 74 88 Z" style={{ fill: "#0E5A64" }}></path>
              <circle cx="44" cy="46" r="22" style={{ fill: "#FFF8EC" }}></circle>
              <circle cx="36" cy="51" r="2.6" style={{ fill: "#0B2E36" }}></circle>
              <circle cx="52" cy="51" r="2.6" style={{ fill: "#0B2E36" }}></circle>
              <path d="M 37 58 Q 44 64 51 58" style={{ fill: "none", stroke: "#0B2E36", strokeWidth: "2.5", strokeLinecap: "round" }}></path>
              <path d="M 22 44 A 22 22 0 0 1 66 44 Z" style={{ fill: "#F0604F" }}></path>
              <rect x="20" y="40" width="48" height="8" rx="4" style={{ fill: "#C9483A" }}></rect>
              <circle cx="44" cy="19" r="6" style={{ fill: "#FFD15C" }}></circle>
            </svg>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "23px", lineHeight: "1.15" }}>Founders and small teams</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>Raising, selling and hiring, usually all before lunch.</span>
          </div>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
            <svg aria-hidden="true" viewBox="0 0 88 88" style={{ width: "84px", height: "84px", borderRadius: "50%", overflow: "hidden" }}>
              <circle cx="44" cy="44" r="44" style={{ fill: "#BFE0E3" }}></circle>
              <path d="M 14 88 A 30 26 0 0 1 74 88 Z" style={{ fill: "#F0604F" }}></path>
              <circle cx="44" cy="48" r="22" style={{ fill: "#FFF8EC" }}></circle>
              <circle cx="36" cy="49" r="2.6" style={{ fill: "#0B2E36" }}></circle>
              <circle cx="52" cy="49" r="2.6" style={{ fill: "#0B2E36" }}></circle>
              <path d="M 36 57 Q 44 64 52 57" style={{ fill: "none", stroke: "#0B2E36", strokeWidth: "2.5", strokeLinecap: "round" }}></path>
              <path d="M 18 28 L 44 16 L 70 28 L 44 40 Z" style={{ fill: "#0B2E36" }}></path>
              <path d="M 65 30 L 65 42" style={{ fill: "none", stroke: "#F0604F", strokeWidth: "3", strokeLinecap: "round" }}></path>
              <circle cx="65" cy="44" r="3.5" style={{ fill: "#F0604F" }}></circle>
            </svg>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "23px", lineHeight: "1.15" }}>Students and academics</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>Thesis defenses, lectures, and the group project that is somehow yours.</span>
          </div>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
            <svg aria-hidden="true" viewBox="0 0 88 88" style={{ width: "84px", height: "84px", borderRadius: "50%", overflow: "hidden" }}>
              <circle cx="44" cy="44" r="44" style={{ fill: "#FFC9BF" }}></circle>
              <path d="M 14 88 A 30 26 0 0 1 74 88 Z" style={{ fill: "#0B2E36" }}></path>
              <circle cx="44" cy="46" r="22" style={{ fill: "#FFF8EC" }}></circle>
              <circle cx="35" cy="44" r="2.4" style={{ fill: "#0B2E36" }}></circle>
              <circle cx="53" cy="44" r="2.4" style={{ fill: "#0B2E36" }}></circle>
              <circle cx="35" cy="44" r="7" style={{ fill: "none", stroke: "#0B2E36", strokeWidth: "2.5" }}></circle>
              <circle cx="53" cy="44" r="7" style={{ fill: "none", stroke: "#0B2E36", strokeWidth: "2.5" }}></circle>
              <path d="M 42 44 L 46 44" style={{ fill: "none", stroke: "#0B2E36", strokeWidth: "2.5", strokeLinecap: "round" }}></path>
              <path d="M 37 56 Q 44 61 51 56" style={{ fill: "none", stroke: "#0B2E36", strokeWidth: "2.5", strokeLinecap: "round" }}></path>
            </svg>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "23px", lineHeight: "1.15" }}>Agencies and consultants</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>Client decks, posts, ads and sites that look like you keep a designer on staff.</span>
          </div>
          <div style={{ boxSizing: "border-box", padding: "26px", border: "2px solid #F0E6D2", borderRadius: "26px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
            <svg aria-hidden="true" viewBox="0 0 88 88" style={{ width: "84px", height: "84px", borderRadius: "50%", overflow: "hidden" }}>
              <circle cx="44" cy="44" r="44" style={{ fill: "#0E5A64" }}></circle>
              <path d="M 14 88 A 30 26 0 0 1 74 88 Z" style={{ fill: "#FFD15C" }}></path>
              <circle cx="44" cy="46" r="22" style={{ fill: "#FFF8EC" }}></circle>
              <circle cx="36" cy="44" r="2.6" style={{ fill: "#0B2E36" }}></circle>
              <circle cx="52" cy="44" r="2.6" style={{ fill: "#0B2E36" }}></circle>
              <path d="M 36 53 Q 44 60 52 53" style={{ fill: "none", stroke: "#0B2E36", strokeWidth: "2.5", strokeLinecap: "round" }}></path>
              <path d="M 21 46 A 23 23 0 0 1 67 46" style={{ fill: "none", stroke: "#0B2E36", strokeWidth: "4", strokeLinecap: "round" }}></path>
              <rect x="16" y="42" width="9" height="15" rx="4" style={{ fill: "#0B2E36" }}></rect>
              <rect x="63" y="42" width="9" height="15" rx="4" style={{ fill: "#0B2E36" }}></rect>
              <path d="M 20 57 Q 24 67 36 65" style={{ fill: "none", stroke: "#0B2E36", strokeWidth: "3", strokeLinecap: "round" }}></path>
            </svg>
            <span style={{ fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "23px", lineHeight: "1.15" }}>Sales teams</span>
            <span style={{ fontSize: "16px", lineHeight: "1.45", color: "#33474C" }}>A deck built for each prospect, and the posts and ads to warm them up first.</span>
          </div>
        </div>
        <p className="sh-castlinks">
          <Link href="/ai-presentation-maker">Lessons, reports and talks →</Link>
          <Link href="/industries">Pages for your industry →</Link>
        </p>
      </div>
    </section>
  );
}
