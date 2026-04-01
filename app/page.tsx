import Image from "next/image";
import FAQ from "@/components/marketing/faq";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/auth/login?screen_hint=signup&returnTo=/dashboard`;

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
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
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1F6B6B, #E8665A)",
                  display: "inline-block",
                }}
              />
              AI-Powered Pitch Deck Builder
            </div>
          </div>

          <h1 className="fade-up fade-up-delay-1">
            Create Deal Decks That{" "}
            <span className="gradient-text">Close</span>
          </h1>

          <p className="fade-up fade-up-delay-2">
            PitchBoost uses AI to generate stunning, interactive pitch decks
            from your deal info and brand assets. Publish, share, and track
            engagement — all in one platform.
          </p>

          <div className="hero-actions fade-up fade-up-delay-3">
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">
              Start Building Free
            </a>
            <a href="#how-it-works" className="btn btn-ghost btn-lg">
              See How It Works
            </a>
          </div>

          <div className="hero-stats-bar fade-up fade-up-delay-4">
            <div className="stat">
              <div className="stat-number" data-count="500">0</div>
              <div className="stat-label">Decks Created</div>
            </div>
            <div className="stat">
              <div className="stat-number" data-count="120">0</div>
              <div className="stat-label">Teams Onboarded</div>
            </div>
            <div className="stat">
              <div className="stat-number" data-count="30">0</div>
              <div className="stat-label">Seconds Avg. Generation</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="mkt-section">
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label">
              <span>How It Works</span>
            </div>
            <h2>From deal info to polished deck in minutes</h2>
            <p>
              Three simple steps to a professional, branded pitch deck — no
              design skills required.
            </p>
          </div>

          {/* Step 1 */}
          <div className="step-showcase fade-up" style={{ marginBottom: 80 }}>
            <div>
              <div className="step-number">1</div>
              <h3>Set up your deal</h3>
              <p>
                Create a deal workspace, upload your logo, set brand colors, and
                add any supporting documents. PitchBoost learns your brand
                instantly.
              </p>
              <ul className="step-highlights">
                <li><CheckIcon /> Upload logos &amp; brand colors</li>
                <li><CheckIcon /> Add deal details &amp; key metrics</li>
                <li><CheckIcon /> Attach supporting documents</li>
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
                      {[["Series B Capital Raise", "Acme Corp", "3 decks"], ["Q4 Investor Update", "Beacon Fund", "2 decks"], ["Growth Equity Pitch", "NovaTech", "1 deck"]].map(([name, co, decks]) => (
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
              <h3>Generate with AI</h3>
              <p>
                Describe what you need — &quot;Create a 10-slide investment
                overview&quot; — and AI builds a complete deck with your
                branding, data, and messaging.
              </p>
              <ul className="step-highlights">
                <li><CheckIcon /> AI-written professional copy</li>
                <li><CheckIcon /> Auto-branded slides with your colors</li>
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
                      <div style={{ fontWeight: 700, fontSize: 16, color: "#0f172a" }}>Series B Capital Raise</div>
                      <div style={{ display: "flex", gap: 8 }}>
                        <div style={{ background: "white", border: "1px solid #e2e8f0", padding: "6px 14px", borderRadius: 8, fontSize: 11, fontWeight: 600, color: "#0f172a" }}>PDF</div>
                        <div style={{ background: "linear-gradient(135deg, #1F6B6B, #E8665A)", color: "white", padding: "6px 14px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>Publish</div>
                      </div>
                    </div>
                    {/* Slide 1 */}
                    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 14px", borderBottom: "1px solid #f1f5f9", fontSize: 11, color: "#94a3b8" }}>
                        <span>Slide 1 &middot; Title</span>
                        <span style={{ color: "#cbd5e1" }}>Edit</span>
                      </div>
                      <div style={{ background: "linear-gradient(135deg, #4338ca, #7c3aed)", padding: "28px 24px", color: "white" }}>
                        <div style={{ fontSize: 10, opacity: 0.7, marginBottom: 4 }}>ACME CORP</div>
                        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Series B Capital Raise</div>
                        <div style={{ fontSize: 10, opacity: 0.6 }}>Scaling next-gen infrastructure for enterprise clients</div>
                      </div>
                    </div>
                    {/* Slide 2 */}
                    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 14px", borderBottom: "1px solid #f1f5f9", fontSize: 11, color: "#94a3b8" }}>
                        <span>Slide 2 &middot; The Problem</span>
                        <span style={{ color: "#cbd5e1" }}>Edit</span>
                      </div>
                      <div style={{ padding: "20px 24px" }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>Enterprise Infrastructure Is Broken</div>
                        <div style={{ display: "flex", gap: 12 }}>
                          {["68% report downtime", "3.2M avg. annual cost", "Manual scaling"].map(s => (
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
              <h3>Publish &amp; track</h3>
              <p>
                Publish your deck with one click. Share a branded link.
                Track who views it and which slides they spend time on.
              </p>
              <ul className="step-highlights">
                <li><CheckIcon /> One-click publishing</li>
                <li><CheckIcon /> Shareable branded links</li>
                <li><CheckIcon /> Viewer analytics &amp; engagement tracking</li>
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
                    {/* Chart area */}
                    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px", marginBottom: 14 }}>
                      <div style={{ fontWeight: 600, fontSize: 12, color: "#0f172a", marginBottom: 12 }}>Views Over Time</div>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60 }}>
                        {[20, 35, 28, 45, 52, 38, 65, 48, 72, 58, 80, 63].map((h, i) => (
                          <div key={i} style={{ flex: 1, background: `linear-gradient(to top, #1F6B6B, #2A8A8A)`, borderRadius: "3px 3px 0 0", height: `${h}%`, opacity: 0.7 + (i * 0.025) }} />
                        ))}
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#94a3b8", marginTop: 6 }}>
                        <span>Mar 1</span><span>Mar 31</span>
                      </div>
                    </div>
                    {/* Deck table */}
                    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px" }}>
                      <div style={{ fontWeight: 600, fontSize: 12, color: "#0f172a", marginBottom: 10 }}>Deck Performance</div>
                      {[["Series B Pitch", "142 views", "2m 48s"], ["Q4 Update", "68 views", "1m 52s"], ["Growth Equity", "37 views", "3m 12s"]].map(([name, views, time]) => (
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

      {/* ── Features ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>Features</span></div>
            <h2>Everything you need to win deals</h2>
            <p>PitchBoost combines AI generation, brand consistency, and engagement tracking in one platform built for dealmakers.</p>
          </div>

          <div className="features-grid fade-up">
            <div className="feature-card">
              <div className="feature-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
              </div>
              <h3>AI Deck Generation</h3>
              <p>Describe your deal and get a fully structured, professionally written slide deck in under a minute.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5" /><path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" /></svg>
              </div>
              <h3>Brand Consistency</h3>
              <p>Upload your logo and colors once. Every deck you generate is automatically branded to match your identity.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3>Viewer Analytics</h3>
              <p>See exactly who opens your deck, which slides they view, and how long they spend on each — so you can follow up smarter.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
              <h3>Interactive Presentations</h3>
              <p>Decks are live web pages — not static files. Viewers get a smooth, responsive experience on any device.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
              </div>
              <h3>Visual Slide Editor</h3>
              <p>Fine-tune any slide with a rich text editor after generation. Change copy, reorder slides, or tweak layouts with ease.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
              </div>
              <h3>PDF Export</h3>
              <p>Need a file for email or print? Export any deck to a high-quality PDF in one click.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="mkt-section comparison">
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>Why PitchBoost</span></div>
            <h2>Stop wasting time on slides</h2>
            <p>Traditional decks take hours of design work. PitchBoost gives you professional results in minutes.</p>
          </div>
          <div className="comparison-grid fade-up">
            <div className="comparison-card">
              <h3>The Old Way</h3>
              <ul>
                <li><XIcon /> Hours in PowerPoint or Google Slides</li>
                <li><XIcon /> Inconsistent branding across decks</li>
                <li><XIcon /> No idea who viewed your deck</li>
                <li><XIcon /> Static files get outdated fast</li>
                <li><XIcon /> Expensive design agency retainers</li>
              </ul>
            </div>
            <div className="comparison-card highlight">
              <h3>With PitchBoost</h3>
              <ul>
                <li><CheckIcon /> AI generates decks in under 60 seconds</li>
                <li><CheckIcon /> Auto-branded with your logo &amp; colors</li>
                <li><CheckIcon /> Real-time viewer analytics</li>
                <li><CheckIcon /> Living decks you can update anytime</li>
                <li><CheckIcon /> Fraction of the cost of agencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="mkt-section">
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
              <a href={SIGNUP_URL} className="btn btn-primary">Start Free Trial</a>
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
              <a href={SIGNUP_URL} className="btn btn-secondary">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header fade-up">
            <div className="section-label"><span>What People Say</span></div>
            <h2>Trusted by dealmakers</h2>
            <p>Teams are using PitchBoost to create better pitch materials faster.</p>
          </div>
          <div className="testimonials-grid fade-up">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <blockquote>&ldquo;PitchBoost cut our deck creation time from hours to minutes. The AI understands deal language and the output is genuinely professional.&rdquo;</blockquote>
              <div className="author">
                <div className="author-avatar">JM</div>
                <div><div className="author-name">Jake Morrison</div><div className="author-role">VP of Capital Markets</div></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <blockquote>&ldquo;The analytics alone are worth it. We can see exactly which slides investors spend time on and tailor our follow-up accordingly.&rdquo;</blockquote>
              <div className="author">
                <div className="author-avatar">SR</div>
                <div><div className="author-name">Sarah Reyes</div><div className="author-role">Managing Director, RE Fund</div></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <blockquote>&ldquo;We used to spend $5k per deck with our design agency. PitchBoost delivers comparable quality for a fraction of the cost.&rdquo;</blockquote>
              <div className="author">
                <div className="author-avatar">DK</div>
                <div><div className="author-name">David Kim</div><div className="author-role">Principal, Growth Equity</div></div>
              </div>
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
            <h2>Ready to build your next pitch deck?</h2>
            <p>Join dealmakers using PitchBoost to create professional presentations in minutes, not days.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Building Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
