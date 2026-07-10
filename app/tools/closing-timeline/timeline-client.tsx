"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * Free closing-timeline generator: the realtor lead magnet. Enter the
 * contract acceptance and closing dates, get every standard deadline
 * (editable), then share it with a client, print it, or drop every date
 * into a calendar via .ics. Generating requires an email (captured as a
 * lead via the app's /api/public/timeline-lead); the timeline itself is
 * still storageless: the shareable link carries the whole timeline
 * base64url-encoded in ?d=, so a timeline made here (or in the PitchBoost
 * app, which emits the same URLs) renders for anyone who opens it. The
 * shared-link view (?d=) is NOT gated.
 */

type Milestone = { id: number; name: string; date: string };

const APP_URL = "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup?intent=listing`;

/** Standard deadlines as day offsets. A = acceptance, C = closing. All
 *  editable in the UI; regional/contract variance is expected. */
function defaultMilestones(acceptance: string, closing: string): Milestone[] {
  const fromA = (days: number) => shiftDate(acceptance, days);
  const fromC = (days: number) => shiftDate(closing, days);
  return [
    { name: "Contract acceptance", date: acceptance },
    { name: "Earnest money due", date: fromA(3) },
    { name: "Inspection period ends", date: fromA(10) },
    { name: "Appraisal completed", date: fromC(-14) },
    { name: "Financing approved", date: fromC(-7) },
    { name: "Final walkthrough", date: fromC(-1) },
    { name: "Closing day", date: closing },
  ].map((m, i) => ({ ...m, id: i + 1 }));
}

function shiftDate(iso: string, days: number): string {
  const d = new Date(iso + "T12:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

function daysFromToday(iso: string): number {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const d = new Date(iso + "T12:00:00");
  return Math.round((d.getTime() - today.getTime()) / 86400000);
}

// Optional agent branding carried in the share payload. Kept short (single
// letters) because the whole timeline lives in the URL. `c` is a hex color
// only, so it's safe to drop straight into inline styles on the shared view.
interface Branding {
  n?: string; // agent name
  o?: string; // brokerage / org
  p?: string; // phone
  c?: string; // accent hex
}

const HEX = /^#[0-9a-fA-F]{3,8}$/;

// ---- Share-link encoding (mirrored in the PitchBoost app repo:
// src/lib/closing-timeline.ts encodeTimelineShare). Adding the optional `b`
// branding object is backward compatible: older/other decoders ignore it. ----
function encodeShare(title: string, milestones: Milestone[], branding?: Branding): string {
  const b: Branding = {};
  if (branding?.n?.trim()) b.n = branding.n.trim().slice(0, 60);
  if (branding?.o?.trim()) b.o = branding.o.trim().slice(0, 60);
  if (branding?.p?.trim()) b.p = branding.p.trim().slice(0, 40);
  if (branding?.c && HEX.test(branding.c)) b.c = branding.c;
  const payload = JSON.stringify({
    t: title,
    m: milestones.map((m) => [m.name, m.date]),
    ...(Object.keys(b).length ? { b } : {}),
  });
  return btoa(unescape(encodeURIComponent(payload))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decodeShare(encoded: string): { title: string; milestones: Milestone[]; branding?: Branding } | null {
  try {
    const b64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(escape(atob(b64)));
    const data = JSON.parse(json);
    if (!Array.isArray(data.m)) return null;
    const milestones = data.m
      .filter((row: unknown) => Array.isArray(row) && typeof row[0] === "string" && /^\d{4}-\d{2}-\d{2}$/.test(String(row[1])))
      .slice(0, 40)
      .map((row: [string, string], i: number) => ({ id: i + 1, name: String(row[0]).slice(0, 80), date: row[1] }));
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

function buildIcs(title: string, milestones: Milestone[]): string {
  const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const events = milestones
    .map((m, i) => {
      const day = m.date.replace(/-/g, "");
      return [
        "BEGIN:VEVENT",
        `UID:pb-timeline-${day}-${i}@pitchboost.ai`,
        `DTSTAMP:${stamp}`,
        `DTSTART;VALUE=DATE:${day}`,
        `SUMMARY:${(title ? title + ": " : "") + m.name.replace(/[\\;,]/g, " ")}`,
        "END:VEVENT",
      ].join("\r\n");
    })
    .join("\r\n");
  return `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//PitchBoost//Closing Timeline//EN\r\n${events}\r\nEND:VCALENDAR\r\n`;
}

export default function TimelineClient() {
  const [title, setTitle] = useState("");
  const [acceptance, setAcceptance] = useState("");
  const [closing, setClosing] = useState("");
  const [milestones, setMilestones] = useState<Milestone[] | null>(null);
  const [nextId, setNextId] = useState(100);
  const [copied, setCopied] = useState(false);
  const [fromShare, setFromShare] = useState(false);
  const [email, setEmail] = useState("");
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  // Optional agent branding shown on the client's shared copy.
  const [brandName, setBrandName] = useState("");
  const [brokerage, setBrokerage] = useState("");
  const [phone, setPhone] = useState("");
  const [accent, setAccent] = useState("#0e5a64");

  // Shared-link mode: hydrate the whole timeline from ?d= on first load.
  useEffect(() => {
    const encoded = new URLSearchParams(window.location.search).get("d");
    if (!encoded) return;
    const decoded = decodeShare(encoded);
    if (decoded && decoded.milestones.length > 0) {
      setTitle(decoded.title);
      setMilestones(decoded.milestones);
      setFromShare(true);
      if (decoded.branding?.n) setBrandName(decoded.branding.n);
      if (decoded.branding?.o) setBrokerage(decoded.branding.o);
      if (decoded.branding?.p) setPhone(decoded.branding.p);
      if (decoded.branding?.c) setAccent(decoded.branding.c);
    }
  }, []);

  // Lead capture: the tool now requires an email to generate. Send it (with
  // the dates for context) to the app so the lead lands in `timeline_leads`.
  // Fire-and-forget with keepalive: a capture hiccup must never stop a
  // realtor from getting their timeline.
  async function captureLead() {
    try {
      await fetch(`${APP_URL}/api/public/timeline-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), title, acceptance, closing }),
        keepalive: true,
      });
    } catch {
      /* non-blocking */
    }
  }

  function generate() {
    if (!acceptance || !closing || !emailValid) return;
    void captureLead();
    setMilestones(defaultMilestones(acceptance, closing));
  }

  function updateMilestone(id: number, patch: Partial<Milestone>) {
    setMilestones((prev) => (prev ? prev.map((m) => (m.id === id ? { ...m, ...patch } : m)) : prev));
  }

  function removeMilestone(id: number) {
    setMilestones((prev) => (prev ? prev.filter((m) => m.id !== id) : prev));
  }

  function addMilestone() {
    const last = sorted[sorted.length - 1];
    setMilestones((prev) => (prev ? [...prev, { id: nextId, name: "", date: last ? last.date : new Date().toISOString().slice(0, 10) }] : prev));
    setNextId((n) => n + 1);
  }

  async function copyShareLink() {
    if (!milestones) return;
    // Client links point at the QUIET /t/timeline view (no navbar, no
    // signup CTAs): a buyer or seller should see a document, not a pitch.
    const url = `https://pitchboost.ai/t/timeline?d=${encodeShare(title, milestones, { n: brandName, o: brokerage, p: phone, c: accent })}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  }

  function downloadIcs() {
    if (!milestones) return;
    const blob = new Blob([buildIcs(title, milestones)], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${(title || "closing-timeline").replace(/[^a-z0-9-_]/gi, "-").slice(0, 60)}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  }

  const sorted = useMemo(
    () => (milestones ? [...milestones].sort((a, b) => a.date.localeCompare(b.date)) : []),
    [milestones],
  );

  return (
    <>
      <style>{`
        @media print {
          .pb-no-print { display: none !important; }
          .pb-print-area { box-shadow: none !important; border: none !important; }
        }
        .pbtl-input { padding: 10px 12px; border: 1px solid #d8dee6; border-radius: 8px; font-size: 0.95rem; width: 100%; }
        .pbtl-row-input { padding: 8px 10px; border: 1px solid #d8dee6; border-radius: 6px; font-size: 0.9rem; }
      `}</style>

      <section className="legal-hero pb-no-print">
        <div className="mkt-container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", lineHeight: 1.15 }}>
            Closing timeline generator
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.05rem", maxWidth: 620, margin: "12px auto 0", lineHeight: 1.7 }}>
            Two dates in, every deadline out: earnest money, inspection, appraisal, financing,
            walkthrough, closing. Edit anything, send it to your client, or add it all to your
            calendar. Free to use, no account needed.
          </p>
        </div>
      </section>

      <div className="mkt-container" style={{ maxWidth: 760, padding: "32px 20px 80px" }}>
        {/* Inputs */}
        {!fromShare && (
          <div className="pb-no-print" style={{ background: "#fff", border: "1px solid #e5e9ef", borderRadius: 14, padding: 22, marginBottom: 26 }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)", marginBottom: 16 }}>
              Your email
              <input
                className="pbtl-input"
                style={{ marginTop: 6 }}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@brokerage.com"
                value={email}
                maxLength={254}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span style={{ display: "block", marginTop: 6, fontSize: "0.75rem", fontWeight: 400, color: "var(--ds-text-light)" }}>
                Required to generate. We&apos;ll only use it to share new realtor tools, never spam.
              </span>
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" }}>
                Property or client (optional)
                <input className="pbtl-input" style={{ marginTop: 6 }} placeholder="123 Main St" value={title} maxLength={120} onChange={(e) => setTitle(e.target.value)} />
              </label>
              <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" }}>
                Contract acceptance
                <input className="pbtl-input" style={{ marginTop: 6 }} type="date" value={acceptance} onChange={(e) => setAcceptance(e.target.value)} />
              </label>
              <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" }}>
                Closing date
                <input className="pbtl-input" style={{ marginTop: 6 }} type="date" value={closing} onChange={(e) => setClosing(e.target.value)} />
              </label>
            </div>
            <details style={{ marginTop: 16 }}>
              <summary style={{ cursor: "pointer", fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" }}>
                Add your branding (optional): it shows on the client&apos;s copy
              </summary>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginTop: 14 }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" }}>
                  Your name
                  <input className="pbtl-input" style={{ marginTop: 6 }} placeholder="Jane Agent" value={brandName} maxLength={60} onChange={(e) => setBrandName(e.target.value)} />
                </label>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" }}>
                  Brokerage
                  <input className="pbtl-input" style={{ marginTop: 6 }} placeholder="Keller Williams" value={brokerage} maxLength={60} onChange={(e) => setBrokerage(e.target.value)} />
                </label>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" }}>
                  Phone
                  <input className="pbtl-input" style={{ marginTop: 6 }} placeholder="(555) 123-4567" value={phone} maxLength={40} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" }}>
                  Accent color
                  <input
                    type="color"
                    style={{ marginTop: 6, display: "block", width: 56, height: 38, border: "1px solid #d8dee6", borderRadius: 8, background: "#fff", cursor: "pointer", padding: 2 }}
                    value={accent}
                    onChange={(e) => setAccent(e.target.value)}
                  />
                </label>
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--ds-text-light)", marginTop: 10 }}>
                Want your headshot and logo too, plus automatic reminders?{" "}
                <a href="https://app.pitchboost.ai/signup?intent=listing" style={{ color: "var(--ds-primary, #0e5a64)", fontWeight: 600 }}>
                  Do it in PitchBoost
                </a>
                .
              </p>
            </details>
            <button
              className="btn btn-primary"
              style={{ marginTop: 16, opacity: acceptance && closing && emailValid ? 1 : 0.5 }}
              disabled={!acceptance || !closing || !emailValid}
              onClick={generate}
            >
              {milestones ? "Regenerate standard deadlines" : "Generate timeline"}
            </button>
            {milestones && (
              <span style={{ marginLeft: 12, fontSize: "0.8rem", color: "var(--ds-text-light)" }}>
                Regenerating replaces your edits with the standard schedule.
              </span>
            )}
          </div>
        )}

        {/* Timeline */}
        {sorted.length > 0 && (
          <div className="pb-print-area" style={{ background: "#fff", border: "1px solid #e5e9ef", borderRadius: 14, padding: 26 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ds-dark)" }}>
                {title || "Closing timeline"}
              </h2>
              <span style={{ fontSize: "0.75rem", color: "var(--ds-text-light)" }}>
                Typical deadlines. Always follow your contract.
              </span>
            </div>

            <div style={{ marginTop: 14 }}>
              {sorted.map((m, i) => {
                const delta = daysFromToday(m.date);
                const past = delta < 0;
                return (
                  <div key={m.id} style={{ display: "flex", gap: 14, position: "relative", paddingBottom: i === sorted.length - 1 ? 0 : 18 }}>
                    {/* rail */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 14 }}>
                      <span style={{ width: 12, height: 12, borderRadius: "50%", background: past ? "#c6ced8" : "var(--ds-primary, #0e5a64)", marginTop: 6, flexShrink: 0 }} />
                      {i < sorted.length - 1 && <span style={{ width: 2, flex: 1, background: "#e5e9ef", marginTop: 4 }} />}
                    </div>
                    {/* content */}
                    <div style={{ flex: 1, paddingBottom: 2 }}>
                      {fromShare ? (
                        <>
                          <div style={{ fontWeight: 700, color: past ? "var(--ds-text-light)" : "var(--ds-dark)", fontSize: "0.98rem" }}>{m.name}</div>
                          <div style={{ fontSize: "0.85rem", color: "var(--ds-text-light)", marginTop: 2 }}>
                            {formatDate(m.date)}
                            <span style={{ marginLeft: 8, fontSize: "0.75rem" }}>
                              {delta === 0 ? "today" : past ? `${-delta}d ago` : `in ${delta}d`}
                            </span>
                          </div>
                        </>
                      ) : (
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                          <input
                            className="pbtl-row-input"
                            style={{ flex: "1 1 200px", fontWeight: 600 }}
                            value={m.name}
                            placeholder="Milestone"
                            maxLength={80}
                            onChange={(e) => updateMilestone(m.id, { name: e.target.value })}
                          />
                          <input
                            className="pbtl-row-input"
                            type="date"
                            value={m.date}
                            onChange={(e) => e.target.value && updateMilestone(m.id, { date: e.target.value })}
                          />
                          <span style={{ fontSize: "0.75rem", color: "var(--ds-text-light)", minWidth: 56 }}>
                            {delta === 0 ? "today" : past ? `${-delta}d ago` : `in ${delta}d`}
                          </span>
                          <button
                            className="pb-no-print"
                            onClick={() => removeMilestone(m.id)}
                            aria-label={`Remove ${m.name || "milestone"}`}
                            style={{ border: "none", background: "none", color: "#b6bfca", cursor: "pointer", fontSize: "1.1rem", lineHeight: 1 }}
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {!fromShare && (
              <button className="btn btn-ghost pb-no-print" style={{ marginTop: 16 }} onClick={addMilestone}>
                + Add milestone
              </button>
            )}

            {/* Output bar. On a SHARED view (someone opened a client link in
                the legacy ?d= format) the copy button is hidden: a client
                re-copying a copy link was a confusing loop. */}
            <div className="pb-no-print" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22, paddingTop: 18, borderTop: "1px solid #eef1f5" }}>
              {!fromShare && (
                <button className="btn btn-primary" onClick={copyShareLink}>
                  {copied ? "Link copied" : "Copy client link"}
                </button>
              )}
              <button className="btn btn-ghost" onClick={downloadIcs}>
                Add all to calendar (.ics)
              </button>
              <button className="btn btn-ghost" onClick={() => window.print()}>
                Print
              </button>
            </div>

            {fromShare && (
              <div style={{ marginTop: 14, fontSize: "0.8rem", color: "var(--ds-text-light)" }}>
                Shared with the PitchBoost closing timeline tool.{" "}
                <a href="/tools/closing-timeline" style={{ color: "var(--ds-primary, #0e5a64)", fontWeight: 600 }}>
                  Make your own
                </a>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="pb-no-print" style={{ marginTop: 30, background: "var(--ds-dark, #10222c)", borderRadius: 14, padding: "26px 24px", textAlign: "center" }}>
          <h3 style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 800 }}>
            Walking into a listing appointment?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.92rem", maxWidth: 480, margin: "8px auto 16px", lineHeight: 1.6 }}>
            PitchBoost turns a listing link into a polished, on-brand listing presentation in
            about a minute, with tracking so you know when the seller reads it.
          </p>
          <a href={SIGNUP_URL} className="btn btn-primary">
            Build a listing presentation free
          </a>
        </div>
      </div>
    </>
  );
}
