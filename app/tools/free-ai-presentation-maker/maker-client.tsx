"use client";

import { useEffect, useRef, useState } from "react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const TRY_API = `${APP_URL}/api/public/try-deck`;

type State =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "made"; shareUrl: string; prompt: string }
  | { kind: "error"; message: string };

/** The live deck page, scaled into a 16:9 box. It shows its own progress
 *  while the deck is being written and swaps itself in when it is ready. */
function DeckFrame({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => setScale(el.clientWidth / 1280);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: 14, border: "1px solid var(--ds-border)", background: "#fff" }}>
      <iframe
        src={src}
        title="Your presentation"
        style={{ position: "absolute", top: 0, left: 0, width: 1280, height: 720, border: 0, transform: `scale(${scale})`, transformOrigin: "0 0" }}
      />
    </div>
  );
}

export default function MakerClient() {
  const [prompt, setPrompt] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  async function make(e: React.FormEvent) {
    e.preventDefault();
    const p = prompt.trim();
    if (p.length < 3) return;
    setState({ kind: "sending" });
    try {
      const res = await fetch(TRY_API, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ prompt: p }) });
      const data = (await res.json().catch(() => ({}))) as { shareUrl?: string; error?: string };
      if (!res.ok || !data.shareUrl) {
        setState({ kind: "error", message: data.error || "That did not work. Try again in a minute, or sign up free and make it there." });
        return;
      }
      setState({ kind: "made", shareUrl: data.shareUrl, prompt: p });
    } catch {
      setState({ kind: "error", message: "We could not reach PitchBoost just now. Try again in a minute." });
    }
  }

  if (state.kind === "made") {
    const keep = `${APP_URL}/signup?${new URLSearchParams({ intent: "present", prompt: state.prompt })}`;
    return (
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <DeckFrame src={state.shareUrl} />
        <p style={{ textAlign: "center", fontSize: 14, color: "var(--ds-text-secondary)", marginTop: 14, lineHeight: 1.6 }}>
          It takes about two minutes, and the deck appears above when it is done.{" "}
          <a href={state.shareUrl} target="_blank" rel="noopener" style={{ color: "#1F6B6B", fontWeight: 600 }}>Open it full screen</a>. The link works for 7 days.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 18 }}>
          <a href={keep} className="btn btn-primary btn-lg">Keep it, edit it, make more</a>
          <button type="button" className="btn btn-ghost btn-lg" onClick={() => { setState({ kind: "idle" }); setPrompt(""); }}>Make another</button>
        </div>
        <p style={{ textAlign: "center", fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 10 }}>
          A free account builds the full version in your brand: your first deck each month is free.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={make} style={{ maxWidth: 720, margin: "0 auto", background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 18, padding: 18 }}>
      <label htmlFor="free-maker-prompt" style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--ds-text-primary)", marginBottom: 8 }}>
        What is your presentation about?
      </label>
      <textarea
        id="free-maker-prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        maxLength={1000}
        rows={4}
        placeholder="A 7-slide lesson on the causes of the French Revolution for my 10th grade history class, ending with three discussion questions"
        className="topic-input"
        style={{ width: "100%", resize: "vertical", padding: "12px 14px", fontSize: 15, lineHeight: 1.5, borderRadius: 12, border: "1px solid var(--ds-border)", background: "var(--ds-bg-light)", color: "var(--ds-text-primary)", fontFamily: "inherit" }}
      />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
        <span style={{ fontSize: 12.5, color: "var(--ds-text-tertiary)" }}>Say who it is for and how long. Two free decks a day, no account.</span>
        <button type="submit" className="btn btn-primary btn-lg" disabled={state.kind === "sending" || prompt.trim().length < 3}>
          {state.kind === "sending" ? "Starting..." : "Make my presentation"}
        </button>
      </div>
      {state.kind === "error" && <p role="alert" style={{ marginTop: 12, fontSize: 14, color: "#b42318" }}>{state.message}</p>}
    </form>
  );
}
