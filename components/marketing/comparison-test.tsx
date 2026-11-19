import Image from "next/image";
import type { ComparisonTest, TestFlag } from "@/lib/comparison-tests";

const LINK = { color: "#1F6B6B", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3 } as const;

const FLAG: Record<TestFlag, { label: string; color: string; bg: string }> = {
  kept: { label: "Figures kept", color: "#1F6B6B", bg: "#E5F2EF" },
  changed: { label: "One figure rounded", color: "#9A5B06", bg: "#FDF3E1" },
  invented: { label: "Figures not in the deck", color: "#B3261E", bg: "#FCEBEA" },
};

/**
 * "We ran the same PowerPoint through both": one row per slide, the original
 * and each tool's version side by side, each picture opening full size, and
 * a line under it saying what happened. The captions carry the facts, so the
 * row still reads when the pictures are thumbnail-sized.
 */
export default function ComparisonTestSection({ test }: { test: ComparisonTest }) {
  return (
    <section id="side-by-side" className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
      <div className="mkt-container">
        <div className="section-header wide-header fade-up">
          <div className="section-label"><span>Tested on {test.dateLabel}</span></div>
          <h2>{test.heading}</h2>
          <p>{test.intro}</p>
          <p style={{ marginTop: 12, display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            <a href={test.sourceHref} download style={LINK}>Download the original PowerPoint</a>
            {test.oursHref && <a href={test.oursHref} target="_blank" rel="noopener noreferrer" style={LINK}>See all nine slides of PitchBoost&apos;s version</a>}
          </p>
        </div>

        <div className="fade-up" style={{ maxWidth: 1180, margin: "40px auto 0", display: "flex", flexDirection: "column", gap: 40 }}>
          {test.rows.map((row) => (
            <div key={row.title}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", margin: "0 0 14px" }}>{row.title}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
                {test.columns.map((col) => {
                  const cell = row.cells[col.key];
                  if (!cell) return null;
                  const flag = cell.flag ? FLAG[cell.flag] : null;
                  return (
                    <figure key={col.key} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                      <figcaption style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: col.ours ? "#1F6B6B" : "var(--ds-text-tertiary)" }}>{col.label}</span>
                        <span style={{ fontSize: 12, color: "var(--ds-text-tertiary)" }}>{col.detail}</span>
                      </figcaption>
                      {cell.img ? (
                        <a href={cell.img} target="_blank" rel="noopener noreferrer" aria-label={`${col.label}, ${row.title}: open full size`} style={{ display: "block", borderRadius: 10, overflow: "hidden", border: col.ours ? "2px solid #1F6B6B" : "1px solid var(--ds-border)", background: "#fff", lineHeight: 0 }}>
                          <Image src={cell.img} alt={cell.alt ?? `${col.label}, ${row.title}`} width={960} height={540} loading="lazy" style={{ width: "100%", height: "auto" }} />
                        </a>
                      ) : (
                        <div style={{ aspectRatio: "16 / 9", borderRadius: 10, border: "1px dashed var(--ds-border)", background: "var(--ds-bg)", padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 6 }}>
                          {(cell.lines ?? []).map((line) => (
                            <span key={line} style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.4, fontVariantNumeric: "tabular-nums" }}>{line}</span>
                          ))}
                        </div>
                      )}
                      {flag && (
                        <span style={{ alignSelf: "flex-start", fontSize: 11, fontWeight: 700, color: flag.color, background: flag.bg, borderRadius: 999, padding: "3px 10px" }}>{flag.label}</span>
                      )}
                      <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.55, margin: 0 }}>{cell.note}</p>
                    </figure>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ maxWidth: 1180, margin: "48px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {test.findings.map(({ title, body }) => (
            <div key={title} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "24px 28px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ maxWidth: 780, margin: "32px auto 0" }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>How we ran it</h3>
          <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc", display: "flex", flexDirection: "column", gap: 6 }}>
            {test.method.map((line) => (
              <li key={line} style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6 }}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
