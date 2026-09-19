import type { Metadata } from "next";
import Link from "next/link";
import PreviewClient from "./preview-client";

export const metadata: Metadata = {
  alternates: { canonical: "/tools/redesign-preview" },
  title: "Free PowerPoint Redesign Preview: Two Slides Rebuilt, No Sign-up",
  description:
    "Upload a .pptx and see two of your slides redesigned by AI in about a minute: the title slide and your busiest content slide, every word and number kept. Free, no account, file never stored.",
  openGraph: {
    title: "Free PowerPoint redesign preview, no sign-up",
    description:
      "See two of your own slides redesigned before you decide anything. Title slide plus your busiest slide, every number kept, about a minute.",
  },
};

const FAQ = [
  {
    q: "Is the redesign preview really free, with no account?",
    a: "Yes. Drop a .pptx and two slides come back redesigned in about a minute. No account, no email, no card. The full deck, in your brand and as a downloadable PowerPoint, needs a free account.",
  },
  {
    q: "Which two slides does it redesign?",
    a: "The title slide and the content slide with the most on it. One shows the cover treatment, the other shows what happens to a dense working slide. A random pair would tell you less.",
  },
  {
    q: "Does it change what my slides say?",
    a: "No. Every fact, figure and name is carried over as written. Wording is tightened only where a slide is a wall of text, and no number is ever dropped or invented. The full rebuild checks each figure against your file.",
  },
  {
    q: "Why does the preview not use my brand?",
    a: "The preview skips the website step to stay fast and anonymous, so it uses a clean neutral design. A free account reads your logo, colours and typography from your website first and rebuilds every slide in them.",
  },
  {
    q: "Is my deck stored or used for training?",
    a: "The file is read in memory and discarded. What is kept is the text of the two chosen slides and the two rebuilt slides, so the link to your preview keeps working. Nothing is used for training.",
  },
  {
    q: "What file types work?",
    a: "PowerPoint .pptx up to 4MB. Google Slides and Keynote users: export to PowerPoint first (File, Download, Microsoft PowerPoint). Bigger files: create a free account, which has no size limit.",
  },
];

export default function RedesignPreviewPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PitchBoost Redesign Preview",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://pitchboost.ai/tools/redesign-preview",
    description:
      "Free AI redesign preview for PowerPoint: upload a .pptx and see the title slide and your busiest content slide rebuilt, with every number kept. No account.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to preview an AI redesign of your PowerPoint",
    totalTime: "PT2M",
    step: [
      { "@type": "HowToStep", name: "Export as .pptx", text: "PowerPoint files work as they are. From Google Slides or Keynote, export to Microsoft PowerPoint first." },
      { "@type": "HowToStep", name: "Drop the file", text: "Drag the .pptx onto the box or choose it. The text, numbers and layout are read in memory." },
      { "@type": "HowToStep", name: "Wait about a minute", text: "The title slide and the busiest content slide are rebuilt with a clean design, every number kept." },
      { "@type": "HowToStep", name: "Compare, then decide", text: "See the slide as uploaded next to the redesign. Rebuild the whole deck in your brand with a free account." },
    ],
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://pitchboost.ai/tools" },
      { "@type": "ListItem", position: 3, name: "Redesign Preview", item: "https://pitchboost.ai/tools/redesign-preview" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{ padding: "120px 0 48px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label"><span>Free tool, no sign-up</span></div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 780, margin: "0 auto 18px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            See two of your slides redesigned before you decide anything
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 640, margin: "0 auto 34px", lineHeight: 1.7 }}>
            Drop a .pptx. In about a minute you get back your title slide and your busiest content slide, redesigned, with every word and number exactly where you left it. Then you know what the whole deck would look like.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 60px", background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <PreviewClient />
          <p style={{ textAlign: "center", fontSize: 13, color: "var(--ds-text-secondary)", marginTop: 18 }}>
            Your file is read in memory and discarded. Only the two rebuilt slides are kept, so your preview link works.
          </p>
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>How it works</span></div>
            <h2>The preview is the product, minus your brand</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginTop: 40 }}>
            {[
              { t: "Reads the slides, not the pixels", d: "Titles, body text, bullets, chart values and tables are pulled out of the .pptx so the rebuild works from what the slide says, not a screenshot of it." },
              { t: "Keeps every number", d: "Figures, dates and names are carried over as written. The full rebuild checks each one against your file and flags anything it cannot source." },
              { t: "Picks the two slides that tell you most", d: "The title slide shows the cover treatment. The busiest content slide shows what happens to a wall of text, which is the slide you were worried about." },
              { t: "The whole deck needs a free account", d: "That is where your website is read for logo, colours and type, every slide is rebuilt in them, and the editable PowerPoint comes back. No card." },
            ].map(({ t, d }) => (
              <div key={t} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 24px" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{t}</div>
                <div style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65 }}>{d}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--ds-text-secondary)", marginTop: 28 }}>
            Curious how the full rebuild treats a longer deck? Read <Link href="/help/redesign-a-powerpoint" style={{ color: "#1F6B6B" }}>how to redesign a PowerPoint with PitchBoost</Link> and <Link href="/help/slide-limits-by-plan" style={{ color: "#1F6B6B" }}>how many slides each plan rebuilds</Link>.
          </p>
        </div>
      </section>

      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>FAQ</span></div>
            <h2>Common questions</h2>
          </div>
          <div className="fade-up" style={{ marginTop: 32 }}>
            {FAQ.map((f) => (
              <div key={f.q} style={{ borderBottom: "1px solid var(--ds-border)", padding: "18px 0" }}>
                <div style={{ fontSize: 15.5, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>{f.q}</div>
                <div style={{ fontSize: 14.5, color: "var(--ds-text-secondary)", lineHeight: 1.65 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box fade-up">
            <h2>Liked the two? Do the other twenty.</h2>
            <p>A free account rebuilds the whole deck in your brand, pulled from your website, keeps every number, and hands you back an editable PowerPoint.</p>
            <a href="https://app.pitchboost.ai/signup?intent=rebuild&utm_source=redesign_preview" className="btn btn-primary btn-lg">Rebuild Your Deck Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
