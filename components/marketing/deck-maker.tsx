"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const TRY_API = `${APP_URL}/api/public/try-deck`;
/** The most the quick maker takes in one request (the app refuses more). */
const MAX_SENT = 1000;

type State =
  | { kind: "idle" }
  | { kind: "empty" }
  | { kind: "sending" }
  | { kind: "made"; shareUrl: string; typed: string }
  | { kind: "error"; message: string };

/** The words around the box. English unless a page passes its own. */
export interface DeckMakerStrings {
  examplesLabel: string;
  sending: string;
  progress: string;
  openFull: string;
  linkLife: string;
  keep: string;
  another: string;
  keepNote: string;
  frameTitle: string;
  failed: string;
  unreachable: string;
  /** Shown when the box holds all it takes, so a paste that was cut short is not a mystery. */
  full: string;
  /** Shown when the button is pressed with nothing in the box. */
  empty: string;
}

export const DECK_MAKER_STRINGS: DeckMakerStrings = {
  examplesLabel: "Or start from one of these",
  sending: "Starting...",
  progress: "It takes about two minutes, and the deck appears above when it is done.",
  openFull: "Open it full screen",
  linkLife: "The link works for 7 days.",
  keep: "Keep it, edit it, make more",
  another: "Make another",
  keepNote: "A free account builds the full version in your brand: your first deck each month is free.",
  frameTitle: "Your presentation",
  failed: "That did not work. Try again in a minute, or sign up free and make it there.",
  unreachable: "We could not reach PitchBoost just now. Try again in a minute.",
  full: "This box is full. A free account takes much longer text.",
  empty: "Add a line or two in the box first.",
};

/** The live deck page, scaled into a 16:9 box. It shows its own progress
 *  while the deck is being written and swaps itself in when it is ready. */
function DeckFrame({ src, title }: { src: string; title: string }) {
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
    <div ref={ref} dir="ltr" style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: 14, border: "1px solid var(--ds-border)", background: "#fff" }}>
      <iframe
        src={src}
        title={title}
        style={{ position: "absolute", top: 0, left: 0, width: 1280, height: 720, border: 0, transform: `scale(${scale})`, transformOrigin: "0 0" }}
      />
    </div>
  );
}

/**
 * The box that makes a real deck with no account: what is typed goes to the
 * app's quick maker, and the deck's own page is shown while it is written.
 *
 * `kind` is sent beside what is typed, as `shape` (a pitch deck generator's
 * box says which slides it wants). The app puts it in front of the visitor's
 * words for the writer, so the room left for typing is what the quick maker
 * takes less that. `forLabel` is what the app is told the deck is when it is
 * kept. `tool` names the page in the events.
 */
export default function DeckMaker({
  tool,
  label,
  placeholder,
  button,
  hint,
  kind = "",
  forLabel,
  examples = [],
  id = "deck-maker",
  strings = DECK_MAKER_STRINGS,
}: {
  tool: string;
  label: string;
  placeholder: string;
  button: string;
  hint: string;
  kind?: string;
  forLabel?: string;
  examples?: string[];
  id?: string;
  strings?: DeckMakerStrings;
}) {
  const [typed, setTyped] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });
  const box = useRef<HTMLTextAreaElement>(null);
  const room = MAX_SENT - (kind ? kind.length + 2 : 0);

  /** New words in the box, typed or from an example: the note about an empty box has done its job. */
  function write(value: string) {
    setTyped(value);
    if (state.kind === "empty") setState({ kind: "idle" });
  }

  async function make(e: React.FormEvent) {
    e.preventDefault();
    const t = typed.trim().slice(0, room);
    // The button is never greyed out for an empty box: pressed, it says what is missing and puts the cursor there.
    if (t.length < 3) {
      setState({ kind: "empty" });
      box.current?.focus();
      return;
    }
    setState({ kind: "sending" });
    try {
      // The instruction travels beside the visitor's words, not in front of them: the app hands both to the
      // writer, and names the deck by the words alone.
      const res = await fetch(TRY_API, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(kind ? { prompt: t, shape: kind } : { prompt: t }) });
      const data = (await res.json().catch(() => ({}))) as { shareUrl?: string; error?: string };
      if (!res.ok || !data.shareUrl) {
        setState({ kind: "error", message: data.error || strings.failed });
        return;
      }
      trackEvent("tool_deck_made", { tool });
      setState({ kind: "made", shareUrl: data.shareUrl, typed: t });
    } catch {
      setState({ kind: "error", message: strings.unreachable });
    }
  }

  if (state.kind === "made") {
    const q = new URLSearchParams({ intent: "present", prompt: state.typed.slice(0, 600) });
    if (forLabel) q.set("for", forLabel);
    const keep = `${APP_URL}/signup?${q.toString()}`;
    return (
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <DeckFrame src={state.shareUrl} title={strings.frameTitle} />
        <p style={{ textAlign: "center", fontSize: 14, color: "var(--ds-text-secondary)", marginTop: 14, lineHeight: 1.6 }}>
          {strings.progress}{" "}
          <a href={state.shareUrl} target="_blank" rel="noopener" style={{ color: "#1F6B6B", fontWeight: 600 }}>{strings.openFull}</a>. {strings.linkLife}
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 18 }}>
          <a href={keep} className="btn btn-primary btn-lg" onClick={() => trackEvent("tool_keep_clicked", { tool })}>{strings.keep}</a>
          <button type="button" className="btn btn-ghost btn-lg" onClick={() => { setState({ kind: "idle" }); setTyped(""); }}>{strings.another}</button>
        </div>
        <p style={{ textAlign: "center", fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 10 }}>{strings.keepNote}</p>
      </div>
    );
  }

  return (
    <form onSubmit={make} style={{ maxWidth: 720, margin: "0 auto", background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 18, padding: 18, textAlign: "start" }}>
      <label htmlFor={id} style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--ds-text-primary)", marginBottom: 8 }}>
        {label}
      </label>
      <textarea
        id={id}
        ref={box}
        value={typed}
        onChange={(e) => write(e.target.value)}
        maxLength={room}
        rows={5}
        placeholder={placeholder}
        className="topic-input"
        style={{ width: "100%", resize: "vertical", padding: "12px 14px", fontSize: 15, lineHeight: 1.5, borderRadius: 12, border: "1px solid var(--ds-border)", background: "var(--ds-bg-light)", color: "var(--ds-text-primary)", fontFamily: "inherit" }}
      />
      {typed.length >= room && <p role="status" style={{ margin: "8px 0 0", fontSize: 12.5, fontWeight: 600, color: "var(--ds-text-secondary)" }}>{strings.full}</p>}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
        <span style={{ fontSize: 12.5, color: "var(--ds-text-tertiary)", flex: "1 1 260px" }}>{hint}</span>
        <button type="submit" className="btn btn-primary btn-lg" disabled={state.kind === "sending"}>
          {state.kind === "sending" ? strings.sending : button}
        </button>
      </div>
      {(state.kind === "error" || state.kind === "empty") && (
        <p role="alert" style={{ marginTop: 12, fontSize: 14, color: "#b42318" }}>{state.kind === "error" ? state.message : strings.empty}</p>
      )}
      {examples.length > 0 && (
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--ds-border)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ds-text-secondary)", marginBottom: 8 }}>{strings.examplesLabel}</div>
          <div style={{ display: "grid", gap: 8 }}>
            {examples.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => { write(ex.slice(0, room)); box.current?.focus(); }}
                style={{ textAlign: "start", fontSize: 13.5, lineHeight: 1.55, color: "var(--ds-text-primary)", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 10, padding: "10px 12px", cursor: "pointer", fontFamily: "inherit" }}
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      )}
    </form>
  );
}
