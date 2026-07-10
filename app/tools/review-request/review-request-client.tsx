"use client";

import { useState } from "react";

/**
 * Free "thank-you + review + referral" tool: the post-close flywheel as a
 * branded lead magnet. Just closed a deal? Send your client a branded page
 * with a one-tap review button and a warm referral ask. Reviews and referrals
 * are how agents grow, and every page carries a "Made with PitchBoost" footer.
 * Email-gated for lead capture; the whole page rides in the ?d= share link
 * (storageless), rendered at /t/thanks.
 */

const APP_URL = "https://app.pitchboost.ai";
const HEX = /^#[0-9a-fA-F]{3,8}$/;
const HTTP = /^https?:\/\//i;

function encode(payload: object): string {
  return btoa(unescape(encodeURIComponent(JSON.stringify(payload)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export default function ReviewRequestClient() {
  const [email, setEmail] = useState("");
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const [name, setName] = useState("");
  const [brokerage, setBrokerage] = useState("");
  const [phone, setPhone] = useState("");
  const [accent, setAccent] = useState("#0e5a64");
  const [reviewUrl, setReviewUrl] = useState("");
  const [reviewLabel, setReviewLabel] = useState("Leave me a review");
  const [message, setMessage] = useState(
    "It was a genuine pleasure helping you through this move. If you have a minute, a quick review means the world and helps other families find their way home.",
  );

  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

  const reviewValid = HTTP.test(reviewUrl.trim());
  const canCreate = emailValid && name.trim() && reviewValid;

  async function captureLead() {
    try {
      await fetch(`${APP_URL}/api/public/tool-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), tool: "review_request", context: { name: name.trim(), brokerage: brokerage.trim() } }),
        keepalive: true,
      });
    } catch {
      /* non-blocking */
    }
  }

  function create() {
    if (!canCreate) return;
    void captureLead();
    const payload: Record<string, unknown> = {
      n: name.trim().slice(0, 60),
      m: message.trim().slice(0, 500),
      r: reviewUrl.trim().slice(0, 400),
      rl: reviewLabel.trim().slice(0, 40) || "Leave a review",
    };
    if (brokerage.trim()) payload.o = brokerage.trim().slice(0, 60);
    if (phone.trim()) payload.p = phone.trim().slice(0, 40);
    if (HEX.test(accent)) payload.c = accent;
    setLink(`https://pitchboost.ai/t/thanks?d=${encode(payload)}`);
  }

  const input: React.CSSProperties = { padding: "10px 12px", border: "1px solid #d8dee6", borderRadius: 8, fontSize: "0.95rem", width: "100%" };
  const label: React.CSSProperties = { fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" };

  return (
    <>
      <section className="legal-hero">
        <div className="mkt-container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", lineHeight: 1.15 }}>
            Turn a happy close into your next deal
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.05rem", maxWidth: 640, margin: "12px auto 0", lineHeight: 1.7 }}>
            Send your client a branded thank-you with a one-tap review button and a warm referral
            ask. Reviews and referrals are how agents grow. Free to use, no account needed.
          </p>
        </div>
      </section>

      <div className="mkt-container" style={{ maxWidth: 720, padding: "32px 20px 80px" }}>
        <div style={{ background: "#fff", border: "1px solid #e5e9ef", borderRadius: 14, padding: 22 }}>
          <label style={{ ...label, display: "block", marginBottom: 16 }}>
            Your email
            <input style={{ ...input, marginTop: 6 }} type="email" inputMode="email" autoComplete="email" placeholder="you@brokerage.com" value={email} maxLength={254} onChange={(e) => setEmail(e.target.value)} />
            <span style={{ display: "block", marginTop: 6, fontSize: "0.72rem", fontWeight: 400, color: "var(--ds-text-light)" }}>Required to create. We only use it to share new realtor tools, never spam.</span>
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
            <label style={label}>Your name<input style={{ ...input, marginTop: 6 }} placeholder="Jane Agent" value={name} maxLength={60} onChange={(e) => setName(e.target.value)} /></label>
            <label style={label}>Brokerage<input style={{ ...input, marginTop: 6 }} placeholder="Keller Williams" value={brokerage} maxLength={60} onChange={(e) => setBrokerage(e.target.value)} /></label>
            <label style={label}>Phone (for referrals)<input style={{ ...input, marginTop: 6 }} placeholder="(555) 123-4567" value={phone} maxLength={40} onChange={(e) => setPhone(e.target.value)} /></label>
            <label style={label}>Accent color<input type="color" style={{ marginTop: 6, display: "block", width: 56, height: 38, border: "1px solid #d8dee6", borderRadius: 8, background: "#fff", cursor: "pointer", padding: 2 }} value={accent} onChange={(e) => setAccent(e.target.value)} /></label>
          </div>
          <label style={{ ...label, display: "block", marginTop: 14 }}>
            Review link (Google, Zillow, etc.)
            <input style={{ ...input, marginTop: 6 }} type="url" inputMode="url" placeholder="https://g.page/r/..." value={reviewUrl} maxLength={400} onChange={(e) => setReviewUrl(e.target.value)} />
            {reviewUrl && !reviewValid && <span style={{ display: "block", marginTop: 6, fontSize: "0.72rem", color: "#c0392b" }}>Enter a full link starting with https://</span>}
          </label>
          <label style={{ ...label, display: "block", marginTop: 14 }}>
            Button label
            <input style={{ ...input, marginTop: 6 }} placeholder="Leave me a review" value={reviewLabel} maxLength={40} onChange={(e) => setReviewLabel(e.target.value)} />
          </label>
          <label style={{ ...label, display: "block", marginTop: 14 }}>
            Your message
            <textarea style={{ ...input, marginTop: 6, minHeight: 90, resize: "vertical", fontFamily: "inherit" }} value={message} maxLength={500} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <button className="btn btn-primary" style={{ marginTop: 18, opacity: canCreate ? 1 : 0.5 }} disabled={!canCreate} onClick={create}>
            {link ? "Update the link" : "Create the thank-you page"}
          </button>
        </div>

        {link && (
          <div style={{ marginTop: 22, background: "#fff", border: "1px solid #e5e9ef", borderRadius: 14, padding: "20px 22px" }}>
            <div style={{ fontWeight: 800, color: "var(--ds-dark)" }}>Your thank-you page is ready</div>
            <p style={{ fontSize: "0.9rem", color: "var(--ds-text-light)", marginTop: 6, wordBreak: "break-all" }}>{link.replace("https://", "")}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
              <a className="btn btn-primary" href={link} target="_blank" rel="noopener noreferrer">Preview it</a>
              <button
                className="btn btn-ghost"
                onClick={async () => { try { await navigator.clipboard.writeText(link); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* ignore */ } }}
              >
                {copied ? "Link copied" : "Copy the link"}
              </button>
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--ds-text-light)", marginTop: 12, lineHeight: 1.6 }}>
              Text or email it to your client the day you close.{" "}
              <a href={`${APP_URL}/signup?intent=listing`} style={{ color: "var(--ds-primary, #0e5a64)", fontWeight: 600 }}>Track who opens it in PitchBoost</a>.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
