import type { Metadata } from "next";
import Link from "next/link";
import { CHANGELOG } from "@/lib/changelog";
import IdeasBoard from "./ideas-client";

const TITLE = "PitchBoost Ideas Board: Vote on What We Build Next | PitchBoost";
const DESCRIPTION =
  "Vote for the PitchBoost features you want, add your own ideas, and see what everyone else asked for. The most-voted ideas move up our list.";
const URL = "https://pitchboost.ai/ideas";

export const metadata: Metadata = {
  alternates: { canonical: "/ideas" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: "Help decide what PitchBoost builds next", description: DESCRIPTION, url: URL },
};

const DATE = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" });

export default function IdeasPage() {
  const recent = CHANGELOG.slice(0, 4);
  return (
    <>
      <style>{`
.ideas-layout{display:grid;gap:24px;max-width:1040px;margin:0 auto;align-items:start}
.ideas-add{order:0}
.ideas-list{order:1;min-width:0}
.idea-more{display:none}
.idea-more.is-open{display:block}
@media(min-width:900px){.ideas-layout{grid-template-columns:minmax(0,1fr) 340px}.ideas-add{order:2;position:sticky;top:96px}.ideas-list{order:1}.idea-more{display:block}}
.idea-vote:not(:disabled):hover{border-color:var(--ds-teal)}
.idea-vote:focus-visible,.ideas-layout button:focus-visible,.ideas-layout input:focus-visible,.ideas-layout textarea:focus-visible{outline:2px solid var(--ds-teal);outline-offset:2px}
@media(prefers-reduced-motion:reduce){.idea-vote{transition:none!important}}
`}</style>

      <section style={{ padding: "120px 0 36px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label"><span>Ideas board</span></div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 780, margin: "0 auto 18px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Help decide what PitchBoost builds next
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            Vote for the ideas you want, add your own, and see what everyone else asked for. The most-voted ideas move up our list.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 64px", background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <IdeasBoard />
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Recently shipped</span></div>
            <h2>Ideas that already made it</h2>
          </div>
          <ul className="fade-up" style={{ listStyle: "none", padding: 0, margin: "36px 0 0", display: "grid", gap: 12 }}>
            {recent.map((e) => (
              <li key={`${e.date}-${e.title}`} style={{ display: "flex", gap: 16, alignItems: "baseline", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "14px 18px" }}>
                <span style={{ flexShrink: 0, width: 56, fontSize: 13, color: "var(--ds-text-light)", fontVariantNumeric: "tabular-nums" }}>{DATE.format(new Date(`${e.date}T12:00:00Z`))}</span>
                <span style={{ fontSize: 15, color: "var(--ds-text-primary)", fontWeight: 600 }}>{e.title}</span>
              </li>
            ))}
          </ul>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--ds-text-secondary)", marginTop: 24 }}>
            Everything else is in the <Link href="/changelog" style={{ color: "#1F6B6B" }}>changelog</Link>. Found a bug instead? Email <a href="mailto:support@pitchboost.ai" style={{ color: "#1F6B6B" }}>support@pitchboost.ai</a>.
          </p>
        </div>
      </section>
    </>
  );
}
