import type { Metadata } from "next";
import { IcsDownloadButton } from "./ics-button";

/**
 * Client-facing shared timeline: what a buyer or seller opens when their
 * agent sends the link. Deliberately QUIET: no navbar, no footer, no
 * signup CTAs (ChromeGate hides the marketing chrome on /t/*). The only
 * PitchBoost presence is one attribution line at the bottom. The whole
 * timeline arrives base64url-encoded in ?d= (contract shared with the
 * tool page and the app's src/lib/closing-timeline.ts), so nothing is
 * stored and links never expire.
 */

export const metadata: Metadata = {
  title: "Closing Timeline",
  robots: { index: false, follow: false },
};

interface Branding {
  n?: string; // agent name
  o?: string; // brokerage
  p?: string; // phone
  c?: string; // accent hex (validated, safe for inline style)
}

interface Decoded {
  title: string;
  milestones: { name: string; date: string }[];
  branding?: Branding;
}

const HEX = /^#[0-9a-fA-F]{3,8}$/;

function decodeShare(encoded: string): Decoded | null {
  try {
    const b64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const json = Buffer.from(b64, "base64").toString("utf8");
    const data = JSON.parse(json);
    if (!Array.isArray(data.m)) return null;
    const milestones = data.m
      .filter((row: unknown[]) => Array.isArray(row) && typeof row[0] === "string" && /^\d{4}-\d{2}-\d{2}$/.test(String(row[1])))
      .slice(0, 40)
      .map((row: [string, string]) => ({ name: String(row[0]).slice(0, 80), date: row[1] }));
    if (milestones.length === 0) return null;
    const raw = data.b && typeof data.b === "object" ? data.b : null;
    const branding: Branding | undefined = raw
      ? {
          n: typeof raw.n === "string" ? raw.n.slice(0, 60) : undefined,
          o: typeof raw.o === "string" ? raw.o.slice(0, 60) : undefined,
          p: typeof raw.p === "string" ? raw.p.slice(0, 40) : undefined,
          c: typeof raw.c === "string" && HEX.test(raw.c) ? raw.c : undefined,
        }
      : undefined;
    return { title: typeof data.t === "string" ? data.t.slice(0, 120) : "", milestones, branding };
  } catch {
    return null;
  }
}

function formatDate(iso: string): string {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function SharedTimelinePage({
  searchParams,
}: {
  searchParams: Promise<{ d?: string }>;
}) {
  const { d } = await searchParams;
  const decoded = d ? decodeShare(d) : null;

  if (!decoded) {
    return (
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--ds-dark)" }}>This timeline link is not valid</h1>
        <p style={{ color: "var(--ds-text-light)", marginTop: 10 }}>
          Ask whoever sent it for a fresh link.
        </p>
      </div>
    );
  }

  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const sorted = [...decoded.milestones].sort((a, b) => a.date.localeCompare(b.date));
  const b = decoded.branding;
  const accent = b?.c || "#0e5a64";
  const hasAgent = !!(b && (b.n || b.o || b.p));

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "48px 20px 60px" }}>
      <div style={{ background: "#fff", border: "1px solid #e5e9ef", borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 3px rgba(16,34,44,0.05)" }}>
        <div style={{ height: 6, background: accent }} />
        <div style={{ padding: "26px 28px 30px" }}>
          {hasAgent && (
            <div style={{ borderBottom: `2px solid ${accent}`, paddingBottom: 14, marginBottom: 18 }}>
              {b?.n && <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--ds-dark)" }}>{b.n}</div>}
              {(b?.o || b?.p) && (
                <div style={{ fontSize: "0.85rem", color: "var(--ds-text-light)", marginTop: 2 }}>
                  {[b?.o, b?.p].filter(Boolean).join("  ·  ")}
                </div>
              )}
            </div>
          )}
          <h1 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--ds-dark)", lineHeight: 1.25 }}>
            {decoded.title || "Closing timeline"}
          </h1>
          <p style={{ fontSize: "0.85rem", color: "var(--ds-text-light)", margin: "6px 0 22px" }}>
            Key dates on the way to closing. Deadlines follow the contract.
          </p>

        {sorted.map((m, i) => {
          const delta = Math.round((new Date(m.date + "T12:00:00").getTime() - today.getTime()) / 86400000);
          const past = delta < 0;
          return (
            <div key={i} style={{ display: "flex", gap: 14, position: "relative", paddingBottom: i === sorted.length - 1 ? 0 : 20 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 14 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: past ? "#c6ced8" : accent, marginTop: 5, flexShrink: 0 }} />
                {i < sorted.length - 1 && <span style={{ width: 2, flex: 1, background: "#e5e9ef", marginTop: 4 }} />}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: past ? "var(--ds-text-light)" : "var(--ds-dark)" }}>
                  {m.name}
                </div>
                <div style={{ fontSize: "0.88rem", color: "var(--ds-text-light)", marginTop: 2 }}>
                  {formatDate(m.date)}
                  <span style={{ marginLeft: 8, fontSize: "0.75rem" }}>
                    {delta === 0 ? "today" : past ? "done" : `in ${delta} day${delta === 1 ? "" : "s"}`}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

          <div style={{ marginTop: 26, paddingTop: 18, borderTop: "1px solid #eef1f5" }}>
            <IcsDownloadButton title={decoded.title} milestones={sorted} />
          </div>
        </div>
      </div>

      <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--ds-text-light)", marginTop: 18 }}>
        Made with{" "}
        <a href="https://pitchboost.ai/tools/closing-timeline" style={{ color: "var(--ds-primary, #0e5a64)", fontWeight: 600, textDecoration: "none" }}>
          PitchBoost
        </a>
      </p>
    </div>
  );
}
