import Link from "next/link";
import FAQ from "@/components/marketing/faq";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;
const SIGNUP_PRO = `${APP_URL}/signup`;
const SIGNUP_BIZ = `${APP_URL}/signup`;

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function MarketingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-orb" />
        <div className="hero-orb" />
        <div className="hero-orb" />

        <div className="mkt-container">
          <div className="fade-up">
            <div className="hero-badge">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg, #1F6B6B, #E8665A)", display: "inline-block" }} />
              AI-powered pitch decks that win deals
            </div>
          </div>

          <h1 className="fade-up fade-up-delay-1">
            The deck that speaks<br />
            <span className="gradient-text">their language.</span>
          </h1>

          <p className="fade-up fade-up-delay-2">
            PitchBoost builds personalized pitch decks, presentations, and proposals for specific prospects, deals, and use cases — so your materials reflect their priorities, not a generic template.
          </p>

          <div className="hero-actions fade-up fade-up-delay-3">
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Building Free</a>
            <a href="#sample-deck" className="btn btn-ghost btn-lg">View Sample Deck</a>
          </div>

          <div className="hero-proof-bar fade-up fade-up-delay-4">
            <div className="proof-item">
              <span className="proof-icon">◎</span>
              <span>Relevant to this prospect, not every prospect</span>
            </div>
            <div className="proof-sep" />
            <div className="proof-item">
              <span className="proof-icon">◎</span>
              <span>Your brand, case studies, and supporting docs</span>
            </div>
            <div className="proof-sep" />
            <div className="proof-item">
              <span className="proof-icon">◎</span>
              <span>Know who engaged and follow up with confidence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sample Deck ── */}
      <section id="sample-deck" className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>See it in action</span></div>
            <h2>A real PitchBoost deck — built for a specific prospect</h2>
          </div>
          <div className="fade-up">
            <p style={{ fontSize: 15, color: "var(--ds-text-secondary)", lineHeight: 1.7, textAlign: "center", marginBottom: 12 }}>
              This is a fictional sample deck showing how PitchBoost could tailor a sales presentation for a B2B SaaS prospect like Gong — pulling in brand context, prospect priorities, and deal notes to produce a personalized deck ready to send.
            </p>
            <p style={{ fontSize: 13, color: "var(--ds-text-tertiary)", lineHeight: 1.6, textAlign: "center", marginBottom: 32 }}>
              This sample is not affiliated with or endorsed by Gong.
            </p>
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--ds-border)", background: "var(--ds-bg)", minHeight: 720 }}>
              <iframe
                src="https://app.pitchboost.ai/p/gong/sample"
                width="100%"
                height="720"
                frameBorder="0"
                allowFullScreen
                style={{ display: "block" }}
              />
            </div>
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <a
                href="https://app.pitchboost.ai/p/gong/sample"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14, fontWeight: 600, color: "#1F6B6B", textDecoration: "none" }}
              >
                View full sample deck →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="mkt-section">
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>How It Works</span></div>
            <h2>From deal notes to a deck worth sending</h2>
            <p>Three steps to a presentation that speaks directly to your prospect — not a generic template with their name dropped in.</p>
          </div>

          {/* Step 1 */}
          <div className="step-showcase fade-up" style={{ marginBottom: 80 }}>
            <div>
              <div className="step-number">1</div>
              <h3>Tell PitchBoost who you&apos;re pitching</h3>
              <p>Upload your logo, brand assets, and supporting docs. Add context about the prospect — their priorities, the opportunity, and what you want them to walk away believing.</p>
              <ul className="step-highlights">
                <li><CheckIcon /> Upload logo and brand assets</li>
                <li><CheckIcon /> Add prospect context and deal details</li>
                <li><CheckIcon /> Attach credentials and supporting docs</li>
              </ul>
            </div>
            <div className="step-visual">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="browser-dots"><span /><span /><span /></div>
                  <div className="browser-url">pitchboost.ai/dashboard</div>
                </div>
                <div className="browser-content">
                  <div style={{ background: "#f8f9fb", padding: "20px 24px", minHeight: 300 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 18, color: "#0f172a" }}>Dashboard</div>
                        <div style={{ fontSize: 12, color: "#64748b" }}>Welcome back, Sarah</div>
                      </div>
                      <div style={{ background: "linear-gradient(135deg, #1F6B6B, #E8665A)", color: "white", padding: "8px 16px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>+ New Deal</div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
                      {[["Active Deals", "6"], ["Total Decks", "12"], ["Published", "8"]].map(([label, val]) => (
                        <div key={label} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px" }}>
                          <div style={{ fontSize: 11, color: "#64748b" }}>{label}</div>
                          <div style={{ fontSize: 22, fontWeight: 800, color: "#0f172a" }}>{val}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px" }}>
                      <div style={{ fontWeight: 600, fontSize: 13, color: "#0f172a", marginBottom: 12 }}>Recent Deals</div>
                      {[["Q2 Enterprise Proposal", "Acme Corp", "3 decks"], ["Partnership One-Sheet", "Meridian Group", "2 decks"], ["Product Capabilities Deck", "NovaTech", "1 deck"]].map(([name, co, decks]) => (
                        <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderTop: "1px solid #f1f5f9" }}>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: 12, color: "#0f172a" }}>{name}</div>
                            <div style={{ fontSize: 11, color: "#94a3b8" }}>{co} &middot; {decks}</div>
                          </div>
                          <div style={{ fontSize: 11, color: "#1F6B6B", fontWeight: 500 }}>active</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-showcase reverse fade-up" style={{ marginBottom: 80 }}>
            <div>
              <div className="step-number">2</div>
              <h3>Get a deck built around this deal</h3>
              <p>PitchBoost generates a structured pitch deck with copy written for this specific prospect — their language, their priorities, your credentials presented in the way most likely to land.</p>
              <ul className="step-highlights">
                <li><CheckIcon /> Copy written for this prospect, not a template</li>
                <li><CheckIcon /> Auto-branded with your colors and logo</li>
                <li><CheckIcon /> Edit any slide after generation</li>
              </ul>
            </div>
            <div className="step-visual">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="browser-dots"><span /><span /><span /></div>
                  <div className="browser-url">pitchboost.ai/deck/edit</div>
                </div>
                <div className="browser-content">
                  <div style={{ background: "#f8f9fb", padding: "20px 24px", minHeight: 300 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                      <div style={{ fontWeight: 700, fontSize: 16, color: "#0f172a" }}>Acme Corp — Enterprise Proposal</div>
                      <div style={{ display: "flex", gap: 8 }}>
                        <div style={{ background: "white", border: "1px solid #e2e8f0", padding: "6px 14px", borderRadius: 8, fontSize: 11, fontWeight: 600, color: "#0f172a" }}>PDF</div>
                        <div style={{ background: "linear-gradient(135deg, #1F6B6B, #E8665A)", color: "white", padding: "6px 14px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>Publish</div>
                      </div>
                    </div>
                    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 14px", borderBottom: "1px solid #f1f5f9", fontSize: 11, color: "#94a3b8" }}>
                        <span>Slide 1 &middot; Title</span><span style={{ color: "#cbd5e1" }}>Edit</span>
                      </div>
                      <div style={{ background: "linear-gradient(135deg, #4338ca, #7c3aed)", padding: "28px 24px", color: "white" }}>
                        <div style={{ fontSize: 10, opacity: 0.7, marginBottom: 4 }}>ACME CORP</div>
                        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Enterprise Solutions Overview</div>
                        <div style={{ fontSize: 10, opacity: 0.6 }}>Tailored capabilities for your team&apos;s needs</div>
                      </div>
                    </div>
                    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 14px", borderBottom: "1px solid #f1f5f9", fontSize: 11, color: "#94a3b8" }}>
                        <span>Slide 2 &middot; The Problem</span><span style={{ color: "#cbd5e1" }}>Edit</span>
                      </div>
                      <div style={{ padding: "20px 24px" }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>Your Team Deserves Better Tools</div>
                        <div style={{ display: "flex", gap: 12 }}>
                          {["87% say onboarding is too slow", "$2.4M avg. cost of poor tooling", "Siloed workflows"].map(s => (
                            <div key={s} style={{ flex: 1, background: "#f8f9fb", borderRadius: 6, padding: "10px 12px", fontSize: 10, color: "#64748b", textAlign: "center" }}>{s}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-showcase fade-up">
            <div>
              <div className="step-number">3</div>
              <h3>Share it, then know exactly how it landed</h3>
              <p>Publish a branded link, export a PDF, and track exactly who opened it, which slides held their attention, and when they came back — so your follow-up is based on what they actually read.</p>
              <ul className="step-highlights">
                <li><CheckIcon /> Publish a branded shareable link</li>
                <li><CheckIcon /> Export to PDF for email or print</li>
                <li><CheckIcon /> See which slides they spent time on</li>
              </ul>
            </div>
            <div className="step-visual">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="browser-dots"><span /><span /><span /></div>
                  <div className="browser-url">pitchboost.ai/analytics</div>
                </div>
                <div className="browser-content">
                  <div style={{ background: "#f8f9fb", padding: "20px 24px", minHeight: 300 }}>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#0f172a", marginBottom: 4 }}>Analytics</div>
                    <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>Track performance across all your decks</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
                      {[["Total Views", "247", "#0f172a"], ["Unique Viewers", "83", "#0f172a"], ["Avg. Time", "2m 34s", "#1F6B6B"], ["Completion", "72%", "#1F6B6B"]].map(([label, val, color]) => (
                        <div key={label} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "12px 14px" }}>
                          <div style={{ fontSize: 10, color: "#64748b" }}>{label}</div>
                          <div style={{ fontSize: 18, fontWeight: 800, color }}>{val}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px", marginBottom: 14 }}>
                      <div style={{ fontWeight: 600, fontSize: 12, color: "#0f172a", marginBottom: 12 }}>Views Over Time</div>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60 }}>
                        {[20, 35, 28, 45, 52, 38, 65, 48, 72, 58, 80, 63].map((h, i) => (
                          <div key={i} style={{ flex: 1, background: "linear-gradient(to top, #1F6B6B, #2A8A8A)", borderRadius: "3px 3px 0 0", height: `${h}%`, opacity: 0.7 + (i * 0.025) }} />
                        ))}
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#94a3b8", marginTop: 6 }}>
                        <span>Mar 1</span><span>Mar 31</span>
                      </div>
                    </div>
                    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px" }}>
                      <div style={{ fontWeight: 600, fontSize: 12, color: "#0f172a", marginBottom: 10 }}>Deck Performance</div>
                      {[["Acme Corp Proposal", "142 views", "2m 48s"], ["Partnership One-Sheet", "68 views", "1m 52s"], ["NovaTech Overview", "37 views", "3m 12s"]].map(([name, views, time]) => (
                        <div key={name} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderTop: "1px solid #f1f5f9", fontSize: 11 }}>
                          <span style={{ fontWeight: 500, color: "#0f172a" }}>{name}</span>
                          <div style={{ display: "flex", gap: 16 }}>
                            <span style={{ color: "#64748b" }}>{views}</span>
                            <span style={{ color: "#64748b" }}>{time}</span>
                            <span style={{ color: "#1F6B6B", fontWeight: 500 }}>published</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>Who It&apos;s For</span></div>
            <h2>Built for people who pitch, but don&apos;t have a design team</h2>
            <p>Generic decks lose deals. PitchBoost gives anyone who pitches the ability to show up with materials that feel built for the specific person, company, or opportunity they&apos;re trying to win.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 48 }}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                ),
                title: "Founders and small teams",
                body: "Show up to every sales conversation with a deck that makes you look like you have a full team behind you — because the quality of your materials shouldn&apos;t depend on headcount.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>
                ),
                title: "Agencies and consultants",
                body: "Win more pitches by showing prospects you understand their specific situation — not just that you do good work in general.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                ),
                title: "Sales and business development teams",
                body: "Send a deck that reflects what you learned about this account — not the same slide sequence you sent the last ten prospects.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                ),
                title: "Contractors and service businesses",
                body: "A polished, specific proposal signals professionalism and attention to detail before the job even starts — and wins more bids because of it.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "24px 28px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, rgba(31,107,107,0.1), rgba(232,102,90,0.08))", display: "flex", alignItems: "center", justifyContent: "center", color: "#1F6B6B", marginBottom: 16 }}>
                  {icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
          <div className="fade-up" style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/industries" style={{ fontSize: 14, fontWeight: 600, color: "#1F6B6B", textDecoration: "none" }}>
              Explore industry-specific pages →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="mkt-section">
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>Features</span></div>
            <h2>Everything you need to win the deal</h2>
            <p>From first draft to follow-up — PitchBoost covers the full workflow for creating and delivering sales materials that actually move deals forward.</p>
          </div>
          <div className="features-grid fade-up">
            {[
              {
                color: "blue",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
                title: "AI-generated pitch decks",
                body: "Describe your opportunity and get a fully structured deck with copy written for this specific prospect — not a blank template to fill in.",
              },
              {
                color: "purple",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5" /><path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" /></svg>,
                title: "Brand-aware content and design",
                body: "Every deck looks like it came from your team — your logo, your colors, your voice — without any manual design work.",
              },
              {
                color: "pink",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
                title: "Prospect-specific messaging",
                body: "The difference between a deck that gets a response and one that gets ghosted is whether it sounds like it was written for them. PitchBoost makes that the default.",
              },
              {
                color: "blue",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
                title: "AI slide-by-slide editing",
                body: "If a slide isn't landing the way you want, rewrite it with AI guidance — without touching the rest of the deck.",
              },
              {
                color: "purple",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
                title: "Share as a link or export to PDF",
                body: "Send a branded interactive link your prospect opens in the browser, or export a PDF for email and print — whichever fits the situation.",
              },
              {
                color: "pink",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
                title: "Viewer analytics",
                body: "Know which slides your prospect spent time on before you pick up the phone. Follow up with the right message, at the right moment.",
              },
            ].map(({ color, icon, title, body }) => (
              <div key={title} className="feature-card">
                <div className={`feature-icon ${color}`}>{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>Pricing</span></div>
            <h2>Simple, transparent pricing</h2>
            <p>Start free and upgrade when you&apos;re ready. Every plan includes a monthly AI budget that resets automatically.</p>
          </div>
          <div className="pricing-grid fade-up">
            <div className="pricing-card">
              <div className="plan-name">Free</div>
              <div className="plan-desc">Perfect for trying PitchBoost</div>
              <div className="plan-price">$0<span>/mo</span></div>
              <div className="plan-period">Free forever</div>
              <ul className="pricing-features">
                <li><CheckIcon /> Up to 3 deals</li>
                <li><CheckIcon /> AI deck generation</li>
                <li><CheckIcon /> Basic analytics</li>
                <li><CheckIcon /> PDF export</li>
                <li><CheckIcon /> Shareable links</li>
              </ul>
              <a href={SIGNUP_URL} className="btn btn-secondary">Get Started</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="plan-name">Pro</div>
              <div className="plan-desc">For active dealmakers</div>
              <div className="plan-price">$29<span>/mo</span></div>
              <div className="plan-period">or $24/mo billed annually</div>
              <ul className="pricing-features">
                <li><CheckIcon /> Unlimited deals</li>
                <li><CheckIcon /> Larger AI budget</li>
                <li><CheckIcon /> Full viewer analytics</li>
                <li><CheckIcon /> Custom domains</li>
                <li><CheckIcon /> Saved templates</li>
                <li><CheckIcon /> Priority generation</li>
              </ul>
              <a href={SIGNUP_PRO} className="btn btn-primary">Start Free Trial</a>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Business</div>
              <div className="plan-desc">For teams closing deals at scale</div>
              <div className="plan-price">$79<span>/mo</span></div>
              <div className="plan-period">or $66/mo billed annually</div>
              <ul className="pricing-features">
                <li><CheckIcon /> Everything in Pro</li>
                <li><CheckIcon /> Team collaboration</li>
                <li><CheckIcon /> Analytics export</li>
                <li><CheckIcon /> Highest AI budget</li>
                <li><CheckIcon /> Custom domains</li>
                <li><CheckIcon /> Saved templates</li>
              </ul>
              <a href={SIGNUP_BIZ} className="btn btn-secondary">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>FAQ</span></div>
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about PitchBoost.</p>
          </div>
          <div className="fade-up">
            <FAQ />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box fade-up">
            <h2>Stop sending the same deck twice.</h2>
            <p>Create a polished, personalized sales deck for your next prospect in minutes.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Building Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
