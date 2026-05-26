import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustry } from "@/lib/industries";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      images: [{ url: "https://pitchboost.ai/og-image.png", width: 1310, height: 820 }],
    },
  };
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, color: "#1F6B6B" }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0 }}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const { shortLabel, shortLabelPlural, industryTerm } = industry;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: industry.metaTitle,
    description: industry.metaDescription,
    url: `https://pitchboost.ai/industries/${industry.slug}`,
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href="/industries" style={{ color: "inherit", textDecoration: "none" }}>By Industry</Link>
              <span style={{ opacity: 0.4 }}>→</span>
              <span>{industry.navLabel}</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 860, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            {industry.heroHeadline}
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            {industry.heroSubhead}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">
              Generate your {shortLabel} {industryTerm}
            </a>
            <a href="#sample-deck" className="btn btn-ghost btn-lg">
              See a sample {industryTerm}
            </a>
          </div>
        </div>
      </section>

      {/* ── Sample Deck Embed ── */}
      <section id="sample-deck" className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>See it in action</span></div>
            <h2>A real {shortLabel} {industryTerm}, built with PitchBoost</h2>
            <p>Personalized to a specific prospect and their business — generated in under 60 seconds.</p>
          </div>
          <div className="fade-up" style={{ marginTop: 48, borderRadius: 16, overflow: "hidden", border: "1px solid var(--ds-border)", background: "var(--ds-bg-light)", minHeight: 520, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {industry.sampleDeckUrl ? (
              <iframe src={industry.sampleDeckUrl} width="100%" height="520" frameBorder="0" allowFullScreen style={{ display: "block" }} />
            ) : (
              <div style={{ textAlign: "center", color: "var(--ds-text-tertiary)", padding: 40 }}>
                <div style={{ fontSize: 13 }}>Deck embed coming soon</div>
              </div>
            )}
          </div>
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 16 }}>
            Interactive {industryTerm} — built with PitchBoost in under 60 seconds.
          </p>
        </div>
      </section>

      {/* ── Common Sales Materials ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Sales materials</span></div>
            <h2>Common {shortLabel} sales materials — and where most fall short</h2>
            <p>Most {shortLabelPlural} rely on a mix of documents to win new business. The challenge is making each one feel like it was built for the specific client in the room.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
            {industry.salesMaterials.map(({ name, description }) => (
              <div key={name} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{name}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Generic Fails ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>The problem</span></div>
            <h2>Why generic {industryTerm}s lose deals</h2>
            <p>It&apos;s rarely about the quality of your work or your offering. It&apos;s about how well the materials reflect the specific situation in the room.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 48 }}>
            {industry.painPoints.map(({ title, body }) => (
              <div key={title} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                  <XIcon />
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", margin: 0 }}>{title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Include ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What to include</span></div>
            <h2>What to include in a strong {shortLabel} {industryTerm}</h2>
            <p>The difference between a {industryTerm} that wins and one that gets &ldquo;we&apos;ll think about it&rdquo; is how specifically it addresses this client&apos;s situation — not how polished the template looks.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, marginTop: 48, maxWidth: 900, margin: "48px auto 0" }}>
            {industry.whatToInclude.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "16px 20px" }}>
                <CheckIcon />
                <span style={{ fontSize: 14, color: "var(--ds-text-primary)", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="fade-up" style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{ fontSize: 15, color: "var(--ds-text-secondary)", marginBottom: 20 }}>
              PitchBoost pulls all of this from your existing credentials and the prospect&apos;s context — automatically.
            </p>
            <a href={SIGNUP_URL} className="btn btn-primary">Build your first {industryTerm} free</a>
          </div>
        </div>
      </section>

      {/* ── How PitchBoost Helps ── */}
      <section id="how-it-works" className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>How it works</span></div>
            <h2>How PitchBoost turns your credentials into a tailored {shortLabel} {industryTerm}</h2>
            <p>No design tools. No starting from a blank slide. No generic templates you have to gut and rebuild for every prospect.</p>
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720, margin: "48px auto 0" }}>
            {industry.howItWorks.map(({ step, title, body }) => (
              <div key={step} style={{ display: "flex", gap: 24, alignItems: "flex-start", background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #1F6B6B, #E8665A)", color: "white", fontWeight: 800, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{step}</div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Who it&apos;s for</span></div>
            <h2>Built for {industry.label.toLowerCase()}</h2>
            <p>Whether you&apos;re a solo operator or managing a full team, PitchBoost adapts to how your business pitches and scales as you grow.</p>
          </div>
          <div className="fade-up" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 40 }}>
            {industry.whoItsFor.map((type) => (
              <span key={type} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 100, padding: "8px 18px", fontSize: 14, color: "var(--ds-text-secondary)", fontWeight: 500 }}>
                {type}
              </span>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href={SIGNUP_URL} className="btn btn-primary">Start building free</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>FAQ</span></div>
            <h2>Common questions about {shortLabel} {industryTerm}s and PitchBoost</h2>
          </div>
          <div className="fade-up" style={{ maxWidth: 720, margin: "48px auto 0", display: "flex", flexDirection: "column", gap: 16 }}>
            {industry.faqs.map(({ q, a }) => (
              <div key={q} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "24px 28px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 10 }}>{q}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box">
            <h2>{industry.ctaHeadline}</h2>
            <p>
              Stop adapting generic templates. Generate your first tailored {industryTerm} free — no design skills required, no credit card needed.
            </p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">
              Generate your {shortLabel} {industryTerm} free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
