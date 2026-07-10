import type { Metadata } from "next";

/**
 * Client-facing thank-you + review + referral page, opened from the link an
 * agent sends after closing. Quiet (ChromeGate hides marketing chrome on /t/*).
 * Everything rides in ?d= (storageless). Branded to the agent; one "Made with
 * PitchBoost" line is the only marketing presence. The review URL is validated
 * to http(s) before it becomes a button, so a bad payload can't inject a
 * javascript: link.
 */

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

const HEX = /^#[0-9a-fA-F]{3,8}$/;
const HTTP = /^https?:\/\//i;

interface Decoded {
  n: string;
  o?: string;
  p?: string;
  c?: string;
  m?: string;
  r?: string;
  rl?: string;
}

function decode(encoded: string): Decoded | null {
  try {
    const b64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const data = JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
    const s = (v: unknown, n: number) => (typeof v === "string" ? v.slice(0, n) : undefined);
    const n = s(data.n, 60);
    if (!n) return null;
    return {
      n,
      o: s(data.o, 60),
      p: s(data.p, 40),
      c: typeof data.c === "string" && HEX.test(data.c) ? data.c : undefined,
      m: s(data.m, 500),
      r: typeof data.r === "string" && HTTP.test(data.r) ? data.r.slice(0, 400) : undefined,
      rl: s(data.rl, 40),
    };
  } catch {
    return null;
  }
}

export default async function ThanksPage({ searchParams }: { searchParams: Promise<{ d?: string }> }) {
  const { d } = await searchParams;
  const data = d ? decode(d) : null;

  if (!data) {
    return (
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "80px 20px", textAlign: "center", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--ds-dark)" }}>This link is not valid</h1>
        <p style={{ color: "var(--ds-text-light)", marginTop: 10 }}>Ask whoever sent it for a fresh link.</p>
      </div>
    );
  }

  const accent = data.c || "#0e5a64";
  const agentLine = [data.o, data.p].filter(Boolean).join("  ·  ");

  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "48px 20px 60px" }}>
      <div style={{ background: "#fff", border: "1px solid #e5e9ef", borderRadius: 18, overflow: "hidden", boxShadow: "0 6px 24px rgba(16,34,44,0.08)" }}>
        <div style={{ height: 8, background: accent }} />
        <div style={{ padding: "30px 28px 34px", textAlign: "center" }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: accent }}>Thank you</div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--ds-dark)", margin: "8px 0 4px" }}>{data.n}</h1>
          {agentLine && <div style={{ fontSize: "0.85rem", color: "var(--ds-text-light)" }}>{agentLine}</div>}

          {data.m && (
            <p style={{ fontSize: "1rem", color: "var(--ds-text, #2d2d3a)", lineHeight: 1.7, margin: "22px auto 0", maxWidth: 440 }}>{data.m}</p>
          )}

          {data.r && (
            <a
              href={data.r}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: 26, background: accent, color: "#fff", fontWeight: 700, fontSize: "1.05rem", padding: "14px 28px", borderRadius: 12, textDecoration: "none" }}
            >
              {data.rl || "Leave a review"}
            </a>
          )}

          <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid #eef1f5" }}>
            <div style={{ fontWeight: 700, color: "var(--ds-dark)", fontSize: "0.95rem" }}>Know someone buying or selling?</div>
            <p style={{ fontSize: "0.9rem", color: "var(--ds-text-light)", marginTop: 4, lineHeight: 1.6 }}>
              {data.p
                ? `The best compliment is an introduction. Send them my way at ${data.p} and I'll take great care of them.`
                : "The best compliment is an introduction. Send them my way and I'll take great care of them."}
            </p>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--ds-text-light)", marginTop: 18 }}>
        Made with{" "}
        <a href="https://pitchboost.ai/tools/review-request" style={{ color: accent, fontWeight: 600, textDecoration: "none" }}>PitchBoost</a>
      </p>
    </div>
  );
}
