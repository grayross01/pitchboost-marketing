"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const PREVIEW_API = `${APP_URL}/api/public/redesign-preview`;
const SIGNUP = `${APP_URL}/signup?intent=rebuild&utm_source=redesign_preview`;

interface SourceSlide { slideNumber: number; title: string | null; body: string; bullets: string[] }
interface Preview {
  id: string;
  status: "pending" | "ready" | "failed";
  sourceSlides: SourceSlide[];
  thumbnail: string | null;
  totalSlides: number;
  filename: string;
  error?: string | null;
}

/** A 1920x1080 slide page, scaled to whatever width it gets. */
function SlideFrame({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => setScale(el.clientWidth / 1920);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ position: "relative", width: "100%", minWidth: 0, maxWidth: "100%", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: 12, border: "1px solid var(--ds-border)", background: "#0f1220" }}>
      <iframe
        src={src}
        title={label}
        loading="lazy"
        // Absolutely positioned so the 1920px intrinsic width never feeds the
        // grid's min-content size (which is how slide 1 rendered unscaled).
        style={{ position: "absolute", top: 0, left: 0, width: 1920, height: 1080, border: 0, transform: `scale(${scale})`, transformOrigin: "top left", pointerEvents: "none", display: "block" }}
      />
    </div>
  );
}

function firstLine(s: SourceSlide): string {
  const t = (s.title || s.body.split("\n").map((l) => l.trim()).find(Boolean) || "").trim();
  return t.length > 90 ? t.slice(0, 87) + "..." : t || `Slide ${s.slideNumber}`;
}

export default function PreviewClient() {
  const [phase, setPhase] = useState<"idle" | "uploading" | "generating" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [preview, setPreview] = useState<Preview | null>(null);
  const [fileName, setFileName] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const pollRef = useRef<number | null>(null);

  const stopPolling = () => {
    if (pollRef.current) window.clearInterval(pollRef.current);
    pollRef.current = null;
  };

  const poll = useCallback((id: string) => {
    stopPolling();
    const started = Date.now();
    pollRef.current = window.setInterval(async () => {
      setElapsed(Math.round((Date.now() - started) / 1000));
      try {
        const res = await fetch(`${PREVIEW_API}?id=${encodeURIComponent(id)}`, { cache: "no-store" });
        const data = (await res.json()) as Preview & { error?: string };
        if (!res.ok) throw new Error(data.error || "lost");
        if (data.status === "ready") {
          stopPolling();
          setPreview(data);
          setPhase("done");
        } else if (data.status === "failed") {
          stopPolling();
          setError(data.error || "The preview did not finish. Try again.");
          setPhase("error");
        }
      } catch {
        /* keep polling; the stale check on the server ends it after five minutes */
      }
    }, 3000);
  }, []);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    if (!id) return;
    setPhase("generating");
    fetch(`${PREVIEW_API}?id=${encodeURIComponent(id)}`)
      .then((r) => r.json())
      .then((data: Preview) => {
        if (data.status === "ready") {
          setPreview(data);
          setFileName(data.filename || "");
          setPhase("done");
        } else if (data.status === "pending") {
          setPreview(data);
          setFileName(data.filename || "");
          poll(id);
        } else {
          setPhase("idle");
        }
      })
      .catch(() => setPhase("idle"));
    return stopPolling;
  }, [poll]);

  const start = useCallback(
    async (file: File) => {
      if (!/\.pptx$/i.test(file.name)) {
        setError("Only .pptx files are supported. Export your deck as PowerPoint first.");
        setPhase("error");
        return;
      }
      setPhase("uploading");
      setError("");
      setFileName(file.name);
      setElapsed(0);
      try {
        const form = new FormData();
        form.append("file", file);
        const res = await fetch(PREVIEW_API, { method: "POST", body: form });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Something went wrong. Try again.");
          setPhase("error");
          return;
        }
        setPreview(data);
        setPhase("generating");
        try {
          window.history.replaceState(null, "", `?id=${data.id}`);
        } catch {}
        poll(data.id);
      } catch {
        setError("Could not reach the preview service. Check your connection and try again.");
        setPhase("error");
      }
    },
    [poll],
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const f = e.dataTransfer.files?.[0];
      if (f) start(f);
    },
    [start],
  );

  if (phase !== "done" || !preview) {
    const working = phase === "uploading" || phase === "generating";
    return (
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        style={{ maxWidth: 620, margin: "0 auto", background: "var(--ds-bg)", border: "2px dashed var(--ds-border)", borderRadius: 18, padding: "44px 28px", textAlign: "center" }}
      >
        {working ? (
          <>
            <div style={{ fontSize: 17, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>
              {phase === "uploading" ? `Reading ${fileName || "your deck"}...` : `Redesigning two slides of ${fileName || "your deck"}...`}
            </div>
            <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", margin: 0 }}>
              {phase === "uploading"
                ? "Pulling out the text, the numbers and the layout."
                : `The title slide and your busiest content slide. Usually 40 to 70 seconds${elapsed > 0 ? `, ${elapsed}s so far` : ""}.`}
            </p>
            {preview && phase === "generating" && (
              <ul style={{ listStyle: "none", padding: 0, margin: "18px auto 0", maxWidth: 440, textAlign: "left" }}>
                {preview.sourceSlides.map((s) => (
                  <li key={s.slideNumber} style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", padding: "6px 0", borderTop: "1px solid var(--ds-border)" }}>
                    <span style={{ fontWeight: 600, color: "var(--ds-text-primary)" }}>Slide {s.slideNumber}</span> {firstLine(s)}
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <>
            <div style={{ fontSize: 17, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>
              Drop your .pptx here
            </div>
            <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", margin: "0 0 20px" }}>
              Up to 4MB. No account. Your file is read in memory and discarded; only the two rebuilt slides are kept for this link.
            </p>
            <button className="btn btn-primary btn-lg" onClick={() => inputRef.current?.click()}>
              Choose a deck to preview
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
            if (f) start(f);
            e.target.value = "";
          }}
        />
      </div>
    );
  }

  const [cover, content] = preview.sourceSlides;
  const slideUrl = (n: number) => `${APP_URL}/api/public/redesign-preview/${preview.id}/slide/${n}`;
  const remaining = Math.max(0, preview.totalSlides - preview.sourceSlides.length);

  return (
    <div style={{ maxWidth: 1040, margin: "0 auto" }}>
      <div style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 18, padding: "28px 24px" }}>
        <div style={{ fontSize: 13, color: "var(--ds-text-secondary)", marginBottom: 18 }}>
          {preview.filename} &middot; {preview.totalSlides} slides &middot; two rebuilt as a preview
        </div>

        {/* slide 1: before (the file's own thumbnail when it has one) and after */}
        <div style={{ display: "grid", gridTemplateColumns: preview.thumbnail ? "repeat(auto-fit, minmax(300px, 1fr))" : "1fr", gap: 18, alignItems: "start" }}>
          {preview.thumbnail && (
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ds-text-secondary)", marginBottom: 8 }}>Slide 1, as uploaded</div>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: 12, border: "1px solid var(--ds-border)", background: "#fff" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={preview.thumbnail} alt="Your first slide, as saved in the file" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>
            </div>
          )}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#1F6B6B", marginBottom: 8 }}>Slide 1, redesigned</div>
            <SlideFrame src={slideUrl(1)} label="Slide 1, redesigned" />
          </div>
        </div>

        {/* slide 2: what was on it, and after */}
        {content && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18, alignItems: "start", marginTop: 26 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ds-text-secondary)", marginBottom: 8 }}>Slide {content.slideNumber}, what it said</div>
              <div style={{ border: "1px solid var(--ds-border)", borderRadius: 12, padding: "16px 18px", background: "var(--ds-bg-light)", fontSize: 14, color: "var(--ds-text-primary)", lineHeight: 1.6, maxHeight: 320, overflow: "auto" }}>
                {content.title && <div style={{ fontWeight: 700, marginBottom: 8 }}>{content.title}</div>}
                {content.bullets.length > 1 ? (
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {content.bullets.slice(0, 12).map((b, i) => <li key={i} style={{ marginBottom: 4 }}>{b}</li>)}
                  </ul>
                ) : (
                  <div style={{ whiteSpace: "pre-wrap" }}>{content.body.slice(0, 1200)}</div>
                )}
              </div>
              <p style={{ fontSize: 12.5, color: "var(--ds-text-secondary)", margin: "8px 0 0" }}>Every word and number carried over; only the design changed.</p>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#1F6B6B", marginBottom: 8 }}>Slide {content.slideNumber}, redesigned</div>
              <SlideFrame src={slideUrl(2)} label={`Slide ${content.slideNumber}, redesigned`} />
            </div>
          </div>
        )}

        <div style={{ marginTop: 28, padding: "22px 20px", borderRadius: 14, background: "linear-gradient(135deg, #12121f 0%, #1a1a2e 60%, #1F6B6B 100%)", color: "#fff", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ minWidth: 240, flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>
              {remaining > 0 ? `${remaining} more slides to go.` : "That is the whole deck."}
            </div>
            <div style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.5 }}>
              A free account rebuilds the full deck in your brand, pulled from your website, and gives you the PowerPoint back. No card.
            </div>
          </div>
          <a href={SIGNUP} className="btn btn-primary btn-lg" style={{ whiteSpace: "nowrap" }}>Rebuild the whole deck free</a>
        </div>
      </div>

      <p style={{ textAlign: "center", fontSize: 13, color: "var(--ds-text-secondary)", marginTop: 18 }}>
        Preview built without your brand. The full rebuild reads your logo, colours and type from your website first.{" "}
        <button type="button" onClick={() => { setPreview(null); setPhase("idle"); try { window.history.replaceState(null, "", window.location.pathname); } catch {} }} style={{ background: "none", border: 0, padding: 0, color: "#1F6B6B", cursor: "pointer", font: "inherit", textDecoration: "underline" }}>
          Try another deck
        </button>
      </p>
    </div>
  );
}
