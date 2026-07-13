"use client";

import { useMemo, useState } from "react";
import { trackLead } from "@/lib/analytics";

/**
 * Free seller net-sheet calculator: a realtor lead magnet. Enter the sale
 * price, payoff, commission, and closing costs and get an estimated
 * net-proceeds breakdown to hand a seller. Requires an email to calculate
 * (lead capture via the app's /api/public/tool-lead). All math is client-side;
 * nothing is stored except the lead.
 */

const APP_URL = "https://app.pitchboost.ai";

type Field = { key: string; label: string; hint?: string };
const COST_FIELDS: Field[] = [
  { key: "payoff", label: "Mortgage payoff" },
  { key: "titleEscrow", label: "Title & escrow" },
  { key: "transferTax", label: "Transfer / excise tax" },
  { key: "concessions", label: "Seller concessions" },
  { key: "repairs", label: "Repairs / staging" },
  { key: "prorations", label: "Prorated taxes / HOA" },
  { key: "other", label: "Other costs" },
];

function money(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function num(v: string): number {
  const n = parseFloat(v.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export default function NetSheetClient() {
  const [email, setEmail] = useState("");
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const [salePrice, setSalePrice] = useState("");
  const [commissionPct, setCommissionPct] = useState("5");
  const [costs, setCosts] = useState<Record<string, string>>({});
  const [agent, setAgent] = useState("");
  const [brokerage, setBrokerage] = useState("");
  const [accent, setAccent] = useState("#0e5a64");
  const [shown, setShown] = useState(false);

  const setCost = (k: string, v: string) => setCosts((p) => ({ ...p, [k]: v }));

  const calc = useMemo(() => {
    const price = num(salePrice);
    const commission = price * (num(commissionPct) / 100);
    const otherCosts = COST_FIELDS.reduce((sum, f) => sum + num(costs[f.key] || ""), 0);
    const totalCosts = commission + otherCosts;
    return { price, commission, otherCosts, totalCosts, net: price - totalCosts };
  }, [salePrice, commissionPct, costs]);

  async function captureLead() {
    trackLead("seller_net_sheet");
    try {
      await fetch(`${APP_URL}/api/public/tool-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), tool: "seller_net_sheet", context: { salePrice: calc.price, net: calc.net } }),
        keepalive: true,
      });
    } catch {
      /* non-blocking */
    }
  }

  function calculate() {
    if (!emailValid || calc.price <= 0) return;
    void captureLead();
    setShown(true);
  }

  const input: React.CSSProperties = { padding: "10px 12px", border: "1px solid #d8dee6", borderRadius: 8, fontSize: "0.95rem", width: "100%" };
  const label: React.CSSProperties = { fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" };

  return (
    <>
      <style>{`@media print { .pb-no-print { display:none !important; } .pb-print-area { box-shadow:none !important; border:none !important; } }`}</style>

      <section className="legal-hero pb-no-print">
        <div className="mkt-container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", lineHeight: 1.15 }}>
            Seller net sheet calculator
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.05rem", maxWidth: 620, margin: "12px auto 0", lineHeight: 1.7 }}>
            Show your seller what they&apos;ll actually walk away with. Enter the numbers, get a clean
            breakdown to share. Free to use, no account needed.
          </p>
        </div>
      </section>

      <div className="mkt-container" style={{ maxWidth: 760, padding: "32px 20px 80px" }}>
        <div className="pb-no-print" style={{ background: "#fff", border: "1px solid #e5e9ef", borderRadius: 14, padding: 22, marginBottom: 26 }}>
          <label style={{ ...label, display: "block", marginBottom: 16 }}>
            Your email
            <input style={{ ...input, marginTop: 6 }} type="email" inputMode="email" autoComplete="email" placeholder="you@brokerage.com" value={email} maxLength={254} onChange={(e) => setEmail(e.target.value)} />
            <span style={{ display: "block", marginTop: 6, fontSize: "0.75rem", fontWeight: 400, color: "var(--ds-text-light)" }}>
              Required to calculate. We&apos;ll only use it to share new realtor tools, never spam.
            </span>
          </label>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
            <label style={label}>
              Sale price
              <input style={{ ...input, marginTop: 6 }} inputMode="decimal" placeholder="$500,000" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
            </label>
            <label style={label}>
              Commission (%)
              <input style={{ ...input, marginTop: 6 }} inputMode="decimal" placeholder="5" value={commissionPct} onChange={(e) => setCommissionPct(e.target.value)} />
            </label>
            {COST_FIELDS.map((f) => (
              <label key={f.key} style={label}>
                {f.label}
                <input style={{ ...input, marginTop: 6 }} inputMode="decimal" placeholder="$0" value={costs[f.key] || ""} onChange={(e) => setCost(f.key, e.target.value)} />
              </label>
            ))}
          </div>

          <details style={{ marginTop: 16 }}>
            <summary style={{ cursor: "pointer", fontSize: "0.85rem", fontWeight: 600, color: "var(--ds-dark)" }}>
              Add your branding (optional): it shows on the breakdown
            </summary>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginTop: 14 }}>
              <label style={label}>Your name<input style={{ ...input, marginTop: 6 }} placeholder="Jane Agent" value={agent} maxLength={60} onChange={(e) => setAgent(e.target.value)} /></label>
              <label style={label}>Brokerage<input style={{ ...input, marginTop: 6 }} placeholder="Keller Williams" value={brokerage} maxLength={60} onChange={(e) => setBrokerage(e.target.value)} /></label>
              <label style={label}>Accent color<input type="color" style={{ marginTop: 6, display: "block", width: 56, height: 38, border: "1px solid #d8dee6", borderRadius: 8, background: "#fff", cursor: "pointer", padding: 2 }} value={accent} onChange={(e) => setAccent(e.target.value)} /></label>
            </div>
          </details>

          <button className="btn btn-primary" style={{ marginTop: 18, opacity: emailValid && calc.price > 0 ? 1 : 0.5 }} disabled={!emailValid || calc.price <= 0} onClick={calculate}>
            {shown ? "Update breakdown" : "Calculate net proceeds"}
          </button>
        </div>

        {shown && calc.price > 0 && (
          <div className="pb-print-area" style={{ background: "#fff", border: "1px solid #e5e9ef", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ height: 6, background: accent }} />
            <div style={{ padding: "24px 26px 26px" }}>
              {(agent || brokerage) && (
                <div style={{ borderBottom: `2px solid ${accent}`, paddingBottom: 12, marginBottom: 16 }}>
                  {agent && <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--ds-dark)" }}>{agent}</div>}
                  {brokerage && <div style={{ fontSize: "0.85rem", color: "var(--ds-text-light)", marginTop: 2 }}>{brokerage}</div>}
                </div>
              )}
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--ds-dark)" }}>Estimated seller net proceeds</h2>
              <div style={{ marginTop: 16 }}>
                {[
                  { l: "Sale price", v: calc.price, plus: true },
                  { l: `Agent commission (${num(commissionPct)}%)`, v: -calc.commission },
                  ...COST_FIELDS.filter((f) => num(costs[f.key] || "") > 0).map((f) => ({ l: f.label, v: -num(costs[f.key] || "") })),
                ].map((row, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f0f2f5", fontSize: "0.95rem" }}>
                    <span style={{ color: "var(--ds-text-light)" }}>{row.l}</span>
                    <span style={{ fontWeight: 600, color: row.v < 0 ? "#c0392b" : "var(--ds-dark)" }}>{row.v < 0 ? `- ${money(-row.v)}` : money(row.v)}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 18, paddingTop: 14, borderTop: `2px solid ${accent}` }}>
                <span style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--ds-dark)" }}>Estimated net to seller</span>
                <span style={{ fontWeight: 800, fontSize: "1.35rem", color: accent }}>{money(calc.net)}</span>
              </div>
              <p style={{ fontSize: "0.72rem", color: "var(--ds-text-light)", marginTop: 14 }}>
                Estimate only. Actual proceeds depend on the final settlement statement. Not a guarantee or legal/financial advice.
              </p>
              <div className="pb-no-print" style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button className="btn btn-ghost" onClick={() => window.print()}>Print / Save PDF</button>
              </div>
            </div>
          </div>
        )}

        <div className="pb-no-print" style={{ marginTop: 30, background: "var(--ds-dark, #10222c)", borderRadius: 14, padding: "24px", textAlign: "center" }}>
          <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 800 }}>Win the listing this net sheet is for</h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.92rem", maxWidth: 480, margin: "8px auto 16px", lineHeight: 1.6 }}>
            PitchBoost turns a listing link into a polished, on-brand listing presentation in about a minute.
          </p>
          <a href={`${APP_URL}/signup?intent=listing&utm_source=pitchboost&utm_medium=lead_magnet&utm_campaign=seller_net_sheet`} className="btn btn-primary">Build a listing presentation free</a>
        </div>
      </div>
    </>
  );
}
