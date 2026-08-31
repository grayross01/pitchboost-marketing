"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const EVAL_API = `${APP_URL}/api/public/evaluate-deck`;
const LEAD_API = `${APP_URL}/api/public/tool-lead`;
const SIGNUP = `${APP_URL}/signup?intent=rebuild&utm_source=deck_evaluator`;

interface Dimension { key: string; label: string; score: number; note: string }
interface Claim { slide: number; claim: string; context: string }
interface Report {
  grade: string;
  overall: number;
  verdict: string;
  dimensions: Dimension[];
  topFixes: string[];
  claimsToVerify: Claim[];
  stats: {
    slideCount: number;
    avgWordsPerSlide: number;
    wordiestSlide: { slide: number; words: number } | null;
    denseSlides: number;
    untitledSlides: number;
    slidesWithVisuals: number;
  };
}

const gradeColor = (g: string) =>
  g.startsWith("A") ? "#1F6B6B" : g.startsWith("B") ? "#3C8A6E" : g.startsWith("C") ? "#B07C24" : "#C24E3E";

function Bar({ d }: { d: Dimension }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 4 }}>
        <span style={{ fontWeight: 600, color: "var(--ds-text-primary)" }}>{d.label}</span>
        <span style={{ fontWeight: 700, color: gradeColor(d.score >= 80 ? "A" : d.score >= 65 ? "B" : d.score >= 50 ? "C" : "D") }}>{d.score}</span>
      </div>
      <div style={{ height: 8, borderRadius: 999, background: "var(--ds-border)", overflow: "hidden" }}>
        <div style={{ width: `${Math.max(3, d.score)}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #1F6B6B, #3C8A6E)" }} />
      </div>
      <div style={{ fontSize: 13, color: "var(--ds-text-secondary)", marginTop: 5, lineHeight: 1.5 }}>{d.note}</div>
    </div>
  );
}

export default function EvaluatorClient() {
  const [phase, setPhase] = useState<"idle" | "working" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [report, setReport] = useState<Report | null>(null);
  const [evalId, setEvalId] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailBusy, setEmailBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem("pb_eval_unlocked") === "1") setUnlocked(true);
    } catch {}
    const id = new URLSearchParams(window.location.search).get("id");
    if (id) {
      setPhase("working");
      fetch(`${EVAL_API}?id=${encodeURIComponent(id)}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.report) {
            setReport(data.report);
            setEvalId(id);
            setFileName(data.filename || "");
            setPhase("done");
          } else {
            setPhase("idle");
          }
        })
        .catch(() => setPhase("idle"));
    }
  }, []);

  const evaluate = useCallback(async (file: File) => {
    if (!/\.pptx$/i.test(file.name)) {
      setError("Only .pptx files are supported. Export your deck as PowerPoint first.");
      setPhase("error");
      return;
    }
    setPhase("working");
    setError("");
    setFileName(file.name);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch(EVAL_API, { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Try again.");
        setPhase("error");
        return;
      }
      setReport(data.report);
      setEvalId(data.id);
      setPhase("done");
      try {
        window.history.replaceState(null, "", `?id=${data.id}`);
      } catch {}
    } catch {
      setError("Could not reach the evaluator. Check your connection and try again.");
      setPhase("error");
    }
  }, []);

  const submitEmail = useCallback(async () => {
    const e = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return;
    setEmailBusy(true);
    try {
      await fetch(LEAD_API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: e, tool: "deck_evaluator", context: { evalId, grade: report?.grade } }),
      });
    } catch {}
    try {
      localStorage.setItem("pb_eval_unlocked", "1");
    } catch {}
    setUnlocked(true);
    setEmailBusy(false);
  }, [email, evalId, report]);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const f = e.dataTransfer.files?.[0];
      if (f) evaluate(f);
    },
    [evaluate],
  );

  if (phase === "idle" || phase === "error" || phase === "working") {
    return (
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        style={{ maxWidth: 620, margin: "0 auto", background: "var(--ds-bg)", border: "2px dashed var(--ds-border)", borderRadius: 18, padding: "44px 28px", textAlign: "center" }}
      >
        {phase === "working" ? (
          <>
            <div style={{ fontSize: 17, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>
              Reading {fileName || "your deck"}&hellip;
            </div>
            <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", margin: 0 }}>
              Scoring clarity, narrative, persuasion, and credibility. About 20 seconds.
            </p>
          </>
        ) : (
          <>
            <div style={{ fontSize: 17, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>
              Drop your .pptx here
            </div>
            <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", margin: "0 0 20px" }}>
              Up to 4MB. Your file is analyzed and discarded, never stored.
            </p>
            <button className="btn btn-primary btn-lg" onClick={() => inputRef.current?.click()}>
              Choose a deck to evaluate
            </button>
            {phase === "error" && (
              <p style={{ color: "#C24E3E", fontSize: 14, marginTop: 16, marginBottom: 0 }}>{error}</p>
            )}
          </>
        )}
        <input
          ref={inputRef}
          type="file"
          accept=".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation"
          style={{ display: "none" }}
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) evaluate(f);
            e.target.value = "";
          }}
        />
      </div>
    );
  }

  if (!report) return null;
  const locked = !unlocked;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 18, padding: "32px 28px" }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", marginBottom: 22 }}>
          <div style={{ width: 92, height: 92, borderRadius: "50%", background: gradeColor(report.grade), color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: 34, fontWeight: 800, lineHeight: 1 }}>{report.grade}</div>
            <div style={{ fontSize: 12, opacity: 0.85 }}>{report.overall}/100</div>
          </div>
          <div style={{ minWidth: 220, flex: 1 }}>
            <div style={{ fontSize: 13, color: "var(--ds-text-secondary)", marginBottom: 4 }}>{fileName || "Your deck"} &middot; {report.stats.slideCount} slides</div>
            <div style={{ fontSize: 15.5, color: "var(--ds-text-primary)", lineHeight: 1.55 }}>{report.verdict}</div>
          </div>
        </div>

        <div style={{ marginBottom: 6 }}>
          {report.dimensions.map((d) => <Bar key={d.key} d={d} />)}
        </div>

        <div style={{ position: "relative" }}>
          <div style={locked ? { filter: "blur(7px)", userSelect: "none", pointerEvents: "none" } : undefined}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", margin: "18px 0 10px" }}>Your 5 highest-impact fixes</h3>
            <ol style={{ margin: 0, paddingLeft: 22 }}>
              {report.topFixes.map((f, i) => (
                <li key={i} style={{ fontSize: 14.5, color: "var(--ds-text-primary)", lineHeight: 1.6, marginBottom: 8 }}>{f}</li>
              ))}
            </ol>
            {report.claimsToVerify.length > 0 && (
              <>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", margin: "20px 0 6px" }}>
                  {report.claimsToVerify.length} numbers your audience may challenge
                </h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", margin: "0 0 10px" }}>
                  Make sure you can cite a source for each of these before you present.
                </p>
                <ul style={{ margin: 0, paddingLeft: 22 }}>
                  {report.claimsToVerify.map((c, i) => (
                    <li key={i} style={{ fontSize: 14, color: "var(--ds-text-primary)", lineHeight: 1.55, marginBottom: 6 }}>
                      <strong>{c.claim}</strong> <span style={{ color: "var(--ds-text-secondary)" }}>(slide {c.slide}): &ldquo;&hellip;{c.context}&hellip;&rdquo;</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", margin: "20px 0 10px" }}>Slide hygiene</h3>
            <p style={{ fontSize: 14, color: "var(--ds-text-primary)", lineHeight: 1.7, margin: 0 }}>
              Average {report.stats.avgWordsPerSlide} words per slide.
              {report.stats.wordiestSlide ? ` Wordiest: slide ${report.stats.wordiestSlide.slide} at ${report.stats.wordiestSlide.words} words.` : ""}
              {report.stats.denseSlides > 0 ? ` ${report.stats.denseSlides} slide(s) over 110 words read as walls of text.` : " No wall-of-text slides. Nice."}
              {` ${report.stats.slidesWithVisuals} of ${report.stats.slideCount} slides carry imagery.`}
            </p>
          </div>

          {locked && (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 24px", maxWidth: 380, textAlign: "center", boxShadow: "0 8px 30px rgba(0,0,0,.12)" }}>
                <div style={{ fontSize: 15.5, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>
                  Unlock the full report
                </div>
                <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", margin: "0 0 14px" }}>
                  The fix list, the claims to verify, and slide-by-slide hygiene. Free, no account.
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") submitEmail(); }}
                    placeholder="you@company.com"
                    style={{ flex: 1, padding: "10px 12px", borderRadius: 9, border: "1px solid var(--ds-border)", fontSize: 14 }}
                  />
                  <button className="btn btn-primary" onClick={submitEmail} disabled={emailBusy} style={{ whiteSpace: "nowrap" }}>
                    {emailBusy ? "…" : "Unlock"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 22 }}>
        <a href={SIGNUP} className="btn btn-primary btn-lg">Fix these issues: rebuild it free</a>
        <button
          className="btn"
          style={{ border: "1px solid var(--ds-border)" }}
          onClick={() => {
            try {
              navigator.clipboard.writeText(window.location.href);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            } catch {}
          }}
        >
          {copied ? "Link copied" : "Copy report link"}
        </button>
        <button className="btn" style={{ border: "1px solid var(--ds-border)" }} onClick={() => { setPhase("idle"); setReport(null); setEvalId(null); try { window.history.replaceState(null, "", window.location.pathname); } catch {} }}>
          Evaluate another deck
        </button>
      </div>
    </div>
  );
}
