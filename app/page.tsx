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
                  <div style={{ height: 300, background: "linear-gradient(135deg, #f0f7f7, #e8f0f0)", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
                    <div style={{ textAlign: "center", color: "#6b7280" }}>
                      <div style={{ marginBottom: 12 }}>
                        <Image src="/icon.png" alt="" width={64} height={64} />
                      </div>
                      <div style={{ fontWeight: 600, color: "#1F6B6B" }}>Deal Dashboard</div>
                      <div style={{ fontSize: 13, marginTop: 4 }}>Your brand, your data, one workspace</div>
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
                  <div style={{ height: 300, background: "linear-gradient(135deg, #e8f0f0, #f5eae9)", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
                    <div style={{ textAlign: "center", color: "#6b7280" }}>
                      <div style={{ marginBottom: 12 }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1F6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <div style={{ fontWeight: 600, color: "#1F6B6B" }}>AI Slide Generation</div>
                      <div style={{ fontSize: 13, marginTop: 4 }}>Professional decks in seconds</div>
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
                  <div className="browser-url">yourcompany.pitchboost.ai/deck</div>
                </div>
                <div className="browser-content">
                  <div style={{ height: 300, background: "linear-gradient(135deg, #f5eae9, #fce8e6)", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
                    <div style={{ textAlign: "center", color: "#6b7280" }}>
                      <div style={{ marginBottom: 12 }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8665A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                      <div style={{ fontWeight: 600, color: "#E8665A" }}>Live Analytics</div>
                      <div style={{ fontSize: 13, marginTop: 4 }}>Know who&apos;s viewing in real time</div>
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
