"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The public idea board (Oct 2026). Anyone can post an idea and vote for
 * any idea; the list ranks them by votes. The board itself lives in the
 * app (api/public/ideas): a post is checked there before it shows, the
 * same idea posted again becomes a vote, and admins mark ideas Planned or
 * Shipped. Votes are anonymous, one per idea per browser, keyed to a
 * random token kept in this browser.
 */

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const API = `${APP_URL}/api/public/ideas`;
const TOKEN_KEY = "pb.ideas.voter";

interface Idea {
  id: number;
  title: string;
  details: string | null;
  votes: number;
  stage: "open" | "planned" | "shipped";
  pending: boolean;
  createdAt: string;
  voted: boolean;
  mine: boolean;
}

type Sort = "top" | "new";
type Notice = { tone: "ok" | "warn" | "error"; text: string } | null;

let memoryToken = "";
/** This browser's anonymous voter token, made on first use. */
function voterToken(): string {
  try {
    const have = window.localStorage.getItem(TOKEN_KEY);
    if (have && /^[A-Za-z0-9-]{16,80}$/.test(have)) return have;
    const made = crypto.randomUUID();
    window.localStorage.setItem(TOKEN_KEY, made);
    return made;
  } catch {
    memoryToken ||= crypto.randomUUID();
    return memoryToken;
  }
}

/** Where the visitor came from (a newsletter's utm_campaign, say). */
function sourceFromUrl(): string {
  try {
    const p = new URLSearchParams(window.location.search);
    const raw = p.get("utm_campaign") || p.get("utm_source") || p.get("ref") || "site";
    return raw.replace(/[^\w.-]/g, "-").slice(0, 60) || "site";
  } catch {
    return "site";
  }
}

function ago(iso: string): string {
  const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 3600) return "just now";
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  const d = Math.floor(s / 86400);
  if (d < 30) return d === 1 ? "yesterday" : `${d} days ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

const STAGE: Record<string, { label: string; bg: string; fg: string }> = {
  planned: { label: "Planned", bg: "rgba(31,107,107,0.1)", fg: "var(--ds-teal)" },
  shipped: { label: "Shipped", bg: "rgba(22,163,74,0.12)", fg: "#15803d" },
};

function Chip({ text, bg, fg }: { text: string; bg: string; fg: string }) {
  return <span style={{ display: "inline-block", fontSize: 12, fontWeight: 600, padding: "2px 9px", borderRadius: 999, background: bg, color: fg }}>{text}</span>;
}

function VoteButton({ idea, onVote }: { idea: Idea; onVote: (idea: Idea) => void }) {
  const on = idea.voted;
  const disabled = idea.pending;
  return (
    <button
      type="button"
      className="idea-vote"
      aria-pressed={on}
      disabled={disabled}
      aria-label={`${on ? "Remove your vote for" : "Vote for"} ${idea.title}, ${idea.votes} ${idea.votes === 1 ? "vote" : "votes"}`}
      onClick={() => onVote(idea)}
      style={{
        width: 56,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: "8px 0 7px",
        borderRadius: 12,
        cursor: disabled ? "default" : "pointer",
        border: on ? "1.5px solid var(--ds-teal)" : "1px solid var(--ds-border)",
        background: on ? "var(--ds-teal)" : "var(--ds-bg)",
        color: on ? "#fff" : "var(--ds-text-primary)",
        opacity: disabled ? 0.5 : 1,
        font: "inherit",
        transition: "background .15s ease, border-color .15s ease",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 15l6-6 6 6" />
      </svg>
      <span style={{ fontSize: 15, fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>{idea.votes}</span>
    </button>
  );
}

function IdeaRow({ idea, onVote, highlight }: { idea: Idea; onVote: (idea: Idea) => void; highlight: boolean }) {
  const stage = STAGE[idea.stage];
  return (
    <li
      id={`idea-${idea.id}`}
      style={{
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        padding: "16px 18px",
        borderRadius: 16,
        background: "var(--ds-bg)",
        border: highlight ? "1.5px solid var(--ds-teal)" : "1px solid var(--ds-border)",
        boxShadow: "var(--ds-shadow)",
        transition: "border-color .3s ease",
      }}
    >
      <VoteButton idea={idea} onVote={onVote} />
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", lineHeight: 1.35, overflowWrap: "anywhere" }}>{idea.title}</div>
        {idea.details && (
          <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: "5px 0 0", whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>{idea.details}</p>
        )}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginTop: 9, fontSize: 12.5, color: "var(--ds-text-light)" }}>
          {stage && <Chip text={stage.label} bg={stage.bg} fg={stage.fg} />}
          {idea.pending && <Chip text="Waiting for a quick review" bg="rgba(232,102,90,0.12)" fg="#b4483f" />}
          {idea.mine && !idea.pending && <Chip text="Yours" bg="var(--ds-bg-alt)" fg="var(--ds-text-secondary)" />}
          <span>{ago(idea.createdAt)}</span>
        </div>
      </div>
    </li>
  );
}

const field = {
  width: "100%",
  padding: "11px 13px",
  fontSize: 15,
  borderRadius: 12,
  border: "1px solid var(--ds-border)",
  background: "var(--ds-bg-light)",
  color: "var(--ds-text-primary)",
  fontFamily: "inherit",
} as const;

function AddIdea({ onPosted }: { onPosted: (status: string, idea: Idea | null) => void }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);
  // On a phone the board sits under this form, so Details and Email stay
  // folded away until someone starts an idea (page.tsx shows them on desktop).
  const [open, setOpen] = useState(false);
  const ready = title.trim().length >= 4;

  async function post(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    if (!ready) {
      setOpen(true);
      setNotice({ tone: "warn", text: "Write your idea in a few words first." });
      document.getElementById("idea-title")?.focus();
      return;
    }
    setSending(true);
    setNotice(null);
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: title.trim(), details: details.trim(), email: email.trim(), source: sourceFromUrl(), voter: voterToken(), website }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; status?: string; idea?: Idea; error?: string };
      if (!res.ok || !data.ok) {
        setNotice({ tone: "error", text: data.error || "That didn't post. Try again in a minute." });
        return;
      }
      const msgs: Record<string, Notice> = {
        published: { tone: "ok", text: "Posted. It's on the board, with your vote." },
        duplicate: { tone: "ok", text: "Someone had that idea already, so we added your vote to it." },
        pending: { tone: "warn", text: "Thanks! It goes up after a quick review." },
        rejected: { tone: "error", text: "That one can't go on the board. If we got it wrong, email support@pitchboost.ai." },
      };
      setNotice(msgs[data.status ?? ""] ?? { tone: "ok", text: "Thanks!" });
      if (data.status !== "rejected") {
        setTitle("");
        setDetails("");
      }
      onPosted(data.status ?? "", data.idea ?? null);
    } catch {
      setNotice({ tone: "error", text: "We couldn't reach PitchBoost just now. Try again in a minute." });
    } finally {
      setSending(false);
    }
  }

  const tone = notice?.tone === "ok" ? { bg: "rgba(31,107,107,0.08)", fg: "var(--ds-teal)" } : notice?.tone === "warn" ? { bg: "rgba(232,102,90,0.1)", fg: "#9f3d35" } : { bg: "rgba(180,35,24,0.08)", fg: "#b42318" };
  return (
    <form onSubmit={post} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 18, padding: 18, boxShadow: "var(--ds-shadow)" }}>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: "var(--ds-dark)", margin: "0 0 4px" }}>Add an idea</h2>
      <p style={{ fontSize: 13.5, color: "var(--ds-text-light)", margin: "0 0 14px", lineHeight: 1.55 }}>What should PitchBoost do, or do better? One idea per post.</p>
      <label htmlFor="idea-title" style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--ds-text-primary)", marginBottom: 6 }}>Your idea</label>
      <input id="idea-title" value={title} onChange={(e) => { setTitle(e.target.value); setNotice(null); }} onFocus={() => setOpen(true)} maxLength={90} placeholder="Let me reuse my last deck's design" style={field} />
      <div className={open ? "idea-more is-open" : "idea-more"}>
        <label htmlFor="idea-details" style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--ds-text-primary)", margin: "12px 0 6px" }}>
          Details <span style={{ fontWeight: 400, color: "var(--ds-text-light)" }}>(optional)</span>
        </label>
        <textarea id="idea-details" value={details} onChange={(e) => setDetails(e.target.value)} maxLength={600} rows={3} placeholder="Why it matters, or what you do today instead." style={{ ...field, resize: "vertical", lineHeight: 1.5 }} />
        <label htmlFor="idea-email" style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--ds-text-primary)", margin: "12px 0 6px" }}>
          Email <span style={{ fontWeight: 400, color: "var(--ds-text-light)" }}>(optional, to hear when it ships)</span>
        </label>
        <input id="idea-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={254} placeholder="you@company.com" style={field} />
      </div>
      {/* Left empty by people, who never see it; a bot fills it in. */}
      <div aria-hidden="true" style={{ position: "absolute", left: -10000, width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="idea-website">Website</label>
        <input id="idea-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary" disabled={sending} style={{ width: "100%", marginTop: 14, justifyContent: "center", opacity: sending ? 0.6 : 1, cursor: sending ? "default" : "pointer" }}>
        {sending ? "Posting..." : "Post idea"}
      </button>
      <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)", margin: "10px 0 0", lineHeight: 1.5 }}>Posts are checked before they show. Your email is never shown.</p>
      <div aria-live="polite">
        {notice && <p style={{ margin: "12px 0 0", fontSize: 13.5, lineHeight: 1.5, padding: "9px 12px", borderRadius: 10, background: tone.bg, color: tone.fg }}>{notice.text}</p>}
      </div>
    </form>
  );
}

export default function IdeasBoard() {
  const [ideas, setIdeas] = useState<Idea[] | null>(null);
  const [sort, setSort] = useState<Sort>("top");
  const [loadError, setLoadError] = useState(false);
  const [voteError, setVoteError] = useState<string | null>(null);
  const [highlight, setHighlight] = useState<number | null>(null);
  const busy = useRef(new Set<number>());

  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`${API}?${new URLSearchParams({ voter: voterToken(), sort })}`, { cache: "no-store" });
        const data = (await res.json()) as { ideas?: Idea[] };
        if (!res.ok || !Array.isArray(data.ideas)) throw new Error("bad");
        if (!alive) return;
        setIdeas(data.ideas);
        setLoadError(false);
      } catch {
        if (alive) setLoadError(true);
      }
    })();
    return () => {
      alive = false;
    };
  }, [sort, attempt]);

  async function vote(idea: Idea) {
    if (idea.pending || busy.current.has(idea.id)) return;
    busy.current.add(idea.id);
    setVoteError(null);
    const on = !idea.voted;
    const apply = (votes: number, voted: boolean) => setIdeas((list) => list?.map((i) => (i.id === idea.id ? { ...i, votes, voted } : i)) ?? list);
    apply(idea.votes + (on ? 1 : -1), on);
    try {
      const res = await fetch(`${API}/vote`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ id: idea.id, voter: voterToken(), on }) });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; votes?: number; voted?: boolean; error?: string };
      if (!res.ok || !data.ok || typeof data.votes !== "number") {
        apply(idea.votes, idea.voted);
        setVoteError(data.error || "That vote didn't count. Try again.");
      } else apply(data.votes, !!data.voted);
    } catch {
      apply(idea.votes, idea.voted);
      setVoteError("We couldn't reach PitchBoost just now. Try again.");
    } finally {
      busy.current.delete(idea.id);
    }
  }

  function posted(status: string, idea: Idea | null) {
    if (!idea) return;
    setIdeas((list) => {
      const rest = (list ?? []).filter((i) => i.id !== idea.id);
      // A new idea goes to the top so its author sees it; a duplicate
      // keeps its place, with the new vote.
      return status === "duplicate" ? (list ?? []).map((i) => (i.id === idea.id ? idea : i)) : [idea, ...rest];
    });
    setHighlight(idea.id);
    setTimeout(() => document.getElementById(`idea-${idea.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 60);
    setTimeout(() => setHighlight(null), 2400);
  }

  const tab = (s: Sort, label: string) => (
    <button
      type="button"
      onClick={() => setSort(s)}
      aria-pressed={sort === s}
      style={{
        padding: "6px 14px",
        fontSize: 13.5,
        fontWeight: 600,
        borderRadius: 999,
        cursor: "pointer",
        border: "none",
        background: sort === s ? "var(--ds-dark)" : "transparent",
        color: sort === s ? "#fff" : "var(--ds-text-secondary)",
        font: "inherit",
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="ideas-layout">
      <aside className="ideas-add">
        <AddIdea onPosted={posted} />
      </aside>
      <section aria-label="Ideas" className="ideas-list">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)" }}>
            {ideas ? `${ideas.filter((i) => !i.pending).length} ideas` : "Ideas"}
            <span style={{ fontWeight: 400, color: "var(--ds-text-light)" }}> · vote for the ones you want</span>
          </div>
          <div role="group" aria-label="Sort" style={{ display: "flex", gap: 4, padding: 4, borderRadius: 999, background: "var(--ds-bg-alt)" }}>
            {tab("top", "Top")}
            {tab("new", "New")}
          </div>
        </div>
        <div aria-live="polite">{voteError && <p style={{ margin: "0 0 12px", fontSize: 13.5, color: "#b42318" }}>{voteError}</p>}</div>
        {loadError ? (
          <div style={{ padding: 24, borderRadius: 16, border: "1px solid var(--ds-border)", background: "var(--ds-bg)", textAlign: "center", fontSize: 14, color: "var(--ds-text-secondary)" }}>
            We couldn&apos;t load the ideas.{" "}
            <button type="button" onClick={() => { setLoadError(false); setIdeas(null); setAttempt((n) => n + 1); }} style={{ border: "none", background: "none", color: "var(--ds-teal)", fontWeight: 700, cursor: "pointer", font: "inherit" }}>
              Try again
            </button>
          </div>
        ) : !ideas ? (
          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }} aria-busy="true">
            {[0, 1, 2, 3].map((i) => (
              <li key={i} style={{ height: 84, borderRadius: 16, background: "var(--ds-bg-alt)", opacity: 0.7 }} />
            ))}
          </ol>
        ) : ideas.length === 0 ? (
          <p style={{ fontSize: 14, color: "var(--ds-text-secondary)" }}>No ideas yet. Be the first.</p>
        ) : (
          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            {ideas.map((idea) => (
              <IdeaRow key={idea.id} idea={idea} onVote={(i) => void vote(i)} highlight={highlight === idea.id} />
            ))}
          </ol>
        )}
      </section>
    </div>
  );
}
