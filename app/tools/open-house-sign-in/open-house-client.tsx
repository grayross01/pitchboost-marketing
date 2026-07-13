"use client";

import { useState } from "react";
import QRCode from "qrcode";
import { trackLead } from "@/lib/analytics";

/**
 * Free open-house sign-in tool: the highest-value realtor lead magnet. The
 * agent enters the property + their branding; we create a branded sign-in page
 * on the app (keyed by an unguessable token so their email stays private) and
 * hand back a QR code to print for the door. Visitors scan, sign in, and each
 * lead is emailed to the agent. Creating one captures the agent as our lead.
 */

const APP_URL = "https://app.pitchboost.ai";

export default function OpenHouseClient() {
  const [property, setProperty] = useState("");
  const [email, setEmail] = useState("");
  const [agentName, setAgentName] = useState("");
  const [brokerage, setBrokerage] = useState("");
  const [phone, setPhone] = useState("");
  const [accent, setAccent] = useState("#0e5a64");

  const [state, setState] = useState<"idle" | "creating" | "done" | "error">("idle");
  const [signInUrl, setSignInUrl] = useState("");
  const [qr, setQr] = useState("");
  const [copied, setCopied] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const canCreate = property.trim() && emailValid && state !== "creating";

  async function create() {
    if (!canCreate) return;
    setState("creating");
    try {
      const res = await fetch(`${APP_URL}/api/public/open-house`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ property: property.trim(), email: email.trim(), agentName: agentName.trim(), brokerage: brokerage.trim(), phone: phone.trim(), accent }),
      });
      const data = await res.json();
      if (!res.ok || !data.token) {
        setState("error");
        return;
      }
      trackLead("open_house_setup");
      const url = `${APP_URL}/oh/${data.token}`;
      setSignInUrl(url);
      const dataUrl = await QRCode.toDataURL(url, { width: 640, margin: 1, color: { dark: "#101828", light: "#ffffff" } });
      setQr(dataUrl);
      setState("done");
    } catch {
      setState("error");
    }
  }

  const input: React.CSSProperties = { padding: "10px 12px", border: "1px solid #d8dee6", borderRadius: 8, fontSize: "0.95rem", width: "100%" };
  const label: React.CSSProperties = { fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" };

  return (
    <>
      <style>{`@media print { .pb-no-print { display:none !important; } .pb-print-sheet { box-shadow:none !important; border:none !important; } body { background:#fff !important; } }`}</style>

      <section className="legal-hero pb-no-print">
        <div className="mkt-container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", lineHeight: 1.15 }}>
            Open house sign-in, with a QR code
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.05rem", maxWidth: 640, margin: "12px auto 0", lineHeight: 1.7 }}>
            Print one QR code for the door. Visitors scan, sign in on their own phone, and every lead
            lands in your inbox. No clipboard, no lost sheets, no app to download. Free.
          </p>
        </div>
      </section>

      <div className="mkt-container" style={{ maxWidth: 760, padding: "32px 20px 80px" }}>
        {state !== "done" && (
          <div className="pb-no-print" style={{ background: "#fff", border: "1px solid #e5e9ef", borderRadius: 14, padding: 22 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
              <label style={{ ...label, gridColumn: "1 / -1" }}>
                Property address
                <input style={{ ...input, marginTop: 6 }} placeholder="123 Main St, Springfield" value={property} maxLength={120} onChange={(e) => setProperty(e.target.value)} />
              </label>
              <label style={label}>
                Your email
                <input style={{ ...input, marginTop: 6 }} type="email" inputMode="email" autoComplete="email" placeholder="you@brokerage.com" value={email} maxLength={254} onChange={(e) => setEmail(e.target.value)} />
                <span style={{ display: "block", marginTop: 6, fontSize: "0.72rem", fontWeight: 400, color: "var(--ds-text-light)" }}>
                  Where every sign-in gets sent. Never shown to visitors.
                </span>
              </label>
              <label style={label}>Your name<input style={{ ...input, marginTop: 6 }} placeholder="Jane Agent" value={agentName} maxLength={60} onChange={(e) => setAgentName(e.target.value)} /></label>
              <label style={label}>Brokerage<input style={{ ...input, marginTop: 6 }} placeholder="Keller Williams" value={brokerage} maxLength={60} onChange={(e) => setBrokerage(e.target.value)} /></label>
              <label style={label}>Phone<input style={{ ...input, marginTop: 6 }} placeholder="(555) 123-4567" value={phone} maxLength={40} onChange={(e) => setPhone(e.target.value)} /></label>
              <label style={label}>Accent color<input type="color" style={{ marginTop: 6, display: "block", width: 56, height: 38, border: "1px solid #d8dee6", borderRadius: 8, background: "#fff", cursor: "pointer", padding: 2 }} value={accent} onChange={(e) => setAccent(e.target.value)} /></label>
            </div>
            <button className="btn btn-primary" style={{ marginTop: 18, opacity: canCreate ? 1 : 0.5 }} disabled={!canCreate} onClick={create}>
              {state === "creating" ? "Creating…" : "Create my sign-in page"}
            </button>
            {state === "error" && <p style={{ color: "#c0392b", fontSize: "0.85rem", marginTop: 10 }}>Something went wrong. Please try again.</p>}
          </div>
        )}

        {state === "done" && (
          <>
            <div className="pb-print-sheet" style={{ background: "#fff", border: "1px solid #e5e9ef", borderRadius: 16, overflow: "hidden", textAlign: "center" }}>
              <div style={{ height: 8, background: accent }} />
              <div style={{ padding: "34px 28px 40px" }}>
                {agentName && <div style={{ fontWeight: 800, fontSize: "1.15rem", color: "var(--ds-dark)" }}>{agentName}</div>}
                {(brokerage || phone) && <div style={{ fontSize: "0.9rem", color: "var(--ds-text-light)", marginTop: 2 }}>{[brokerage, phone].filter(Boolean).join("  ·  ")}</div>}
                <h2 style={{ fontSize: "1.9rem", fontWeight: 900, color: "var(--ds-dark)", margin: "18px 0 4px" }}>Sign in here</h2>
                <p style={{ color: "var(--ds-text-light)", fontSize: "1rem", maxWidth: 380, margin: "0 auto" }}>
                  Scan with your phone camera to sign in for {property}.
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {qr && <img src={qr} alt="Open house sign-in QR code" style={{ width: 260, height: 260, margin: "22px auto 0", display: "block" }} />}
                <p style={{ fontSize: "0.8rem", color: "var(--ds-text-light)", marginTop: 12, wordBreak: "break-all" }}>{signInUrl.replace("https://", "")}</p>
              </div>
            </div>

            <div className="pb-no-print" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18, justifyContent: "center" }}>
              <button className="btn btn-primary" onClick={() => window.print()}>Print the sign-in sheet</button>
              <a className="btn btn-ghost" href={signInUrl} target="_blank" rel="noopener noreferrer">Preview the sign-in page</a>
              <button
                className="btn btn-ghost"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(signInUrl);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  } catch { /* ignore */ }
                }}
              >
                {copied ? "Link copied" : "Copy the link"}
              </button>
            </div>
            <p className="pb-no-print" style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--ds-text-light)", marginTop: 16, lineHeight: 1.6 }}>
              Every sign-in is emailed to you. Want them to flow into a pipeline with follow-up reminders and tracking?{" "}
              <a href={`${APP_URL}/signup?intent=listing&utm_source=pitchboost&utm_medium=lead_magnet&utm_campaign=open_house`} style={{ color: "var(--ds-primary, #0e5a64)", fontWeight: 600 }}>Do it in PitchBoost</a>.
            </p>
          </>
        )}
      </div>
    </>
  );
}
