"use client";

import { useState } from "react";
import Link from "next/link";
import { IDEAS } from "@/lib/ideas";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const IDEAS_API = `${APP_URL}/api/public/feature-request`;

type State = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

/** Where the visitor came from (a newsletter's utm_campaign, say), in the
 *  shape the app accepts: letters, digits, dots, dashes and underscores. */
function sourceFromUrl(): string {
  try {
    const p = new URLSearchParams(window.location.search);
    const raw = p.get("utm_campaign") || p.get("utm_source") || p.get("ref") || "site";
    return raw.replace(/[^\w.-]/g, "-").slice(0, 60) || "site";
  } catch {
    return "site";
  }
}

function Check({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: 22,
        height: 22,
        flexShrink: 0,
        borderRadius: 7,
        border: on ? "none" : "1.5px solid var(--ds-border)",
        background: on ? "var(--ds-teal)" : "var(--ds-bg)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background .15s ease",
      }}
    >
      {on && (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      )}
    </span>
  );
}

export default function IdeasClient() {
  const [picked, setPicked] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const ready = picked.length > 0 || message.trim().length >= 3;

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || state.kind === "sending") return;
    setState({ kind: "sending" });
    try {
      const res = await fetch(IDEAS_API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ picks: picked, message: message.trim(), email: email.trim(), source: sourceFromUrl(), website }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setState({ kind: "error", message: data.error || "That didn't send. Try again in a minute." });
        return;
      }
      setState({ kind: "sent" });
    } catch {
      setState({ kind: "error", message: "We couldn't reach PitchBoost just now. Try again in a minute." });
    }
  }

  if (state.kind === "sent") {
    return (
      <div role="status" style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 18, padding: "36px 28px" }}>
        <div style={{ width: 48, height: 48, borderRadius: 999, background: "rgba(31,107,107,0.1)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ds-teal)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--ds-dark)", margin: "0 0 8px" }}>Got it. Thank you.</h2>
        <p style={{ fontSize: 15, color: "var(--ds-text-light)", lineHeight: 1.65, margin: 0 }}>
          A real person reads every one, and the most-picked ideas move up the list.
          {email.trim() ? " We'll email you when something you asked for ships." : ""}
        </p>
        <p style={{ fontSize: 14, marginTop: 18, marginBottom: 0 }}>
          <Link href="/changelog" style={{ color: "var(--ds-teal)", fontWeight: 600 }}>See what shipped recently</Link>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={send} style={{ maxWidth: 880, margin: "0 auto" }}>
      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <legend style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 4 }}>Ideas we&apos;re weighing</legend>
        <p style={{ fontSize: 14, color: "var(--ds-text-light)", margin: "0 0 16px" }}>Pick any you&apos;d actually use. As many as you like.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 12 }}>
          {IDEAS.map((idea) => {
            const on = picked.includes(idea.id);
            return (
              <button
                key={idea.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(idea.id)}
                className="idea-card"
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  textAlign: "left",
                  padding: "16px 16px 16px 14px",
                  borderRadius: 14,
                  cursor: "pointer",
                  background: on ? "rgba(31,107,107,0.06)" : "var(--ds-bg)",
                  border: on ? "1.5px solid var(--ds-teal)" : "1px solid var(--ds-border)",
                  boxShadow: on ? "none" : "var(--ds-shadow)",
                  font: "inherit",
                  color: "inherit",
                  transition: "border-color .15s ease, background .15s ease",
                }}
              >
                <Check on={on} />
                <span>
                  <span style={{ display: "block", fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 4 }}>{idea.title}</span>
                  <span style={{ display: "block", fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.55 }}>{idea.blurb}</span>
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div style={{ marginTop: 28, background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 18, padding: 18 }}>
        <label htmlFor="idea-message" style={{ display: "block", fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>
          What else should we build, or fix?
        </label>
        <textarea
          id="idea-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={2000}
          rows={4}
          placeholder="The thing that made you sigh at your screen last week."
          style={{ width: "100%", resize: "vertical", padding: "12px 14px", fontSize: 15, lineHeight: 1.5, borderRadius: 12, border: "1px solid var(--ds-border)", background: "var(--ds-bg-light)", color: "var(--ds-text-primary)", fontFamily: "inherit" }}
        />
        <label htmlFor="idea-email" style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--ds-text-primary)", margin: "14px 0 6px" }}>
          Email <span style={{ fontWeight: 400, color: "var(--ds-text-light)" }}>(optional, so we can tell you when it ships)</span>
        </label>
        <input
          id="idea-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={254}
          placeholder="you@company.com"
          style={{ width: "100%", maxWidth: 420, padding: "11px 14px", fontSize: 15, borderRadius: 12, border: "1px solid var(--ds-border)", background: "var(--ds-bg-light)", color: "var(--ds-text-primary)", fontFamily: "inherit" }}
        />
        {/* Left empty by people, who never see it; a bot fills it in. */}
        <div aria-hidden="true" style={{ position: "absolute", left: -10000, width: 1, height: 1, overflow: "hidden" }}>
          <label htmlFor="idea-website">Website</label>
          <input id="idea-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
          <span style={{ fontSize: 12.5, color: "var(--ds-text-tertiary)" }}>
            {picked.length > 0 ? `${picked.length} picked. ` : ""}We only use your email to reply about this.
          </span>
          <button type="submit" className="btn btn-primary btn-lg" disabled={!ready || state.kind === "sending"}>
            {state.kind === "sending" ? "Sending..." : "Send it"}
          </button>
        </div>
        {state.kind === "error" && (
          <p role="alert" style={{ marginTop: 12, marginBottom: 0, fontSize: 14, color: "#b42318" }}>
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
