import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

export const metadata: Metadata = {
  alternates: { canonical: "/features/bulk-rebuild" },
  title: "Bulk Rebuild: Convert a Folder of Old PowerPoints Into Modern Decks",
  description:
    "Drop in up to twelve .pptx files and PitchBoost rebuilds each one into its own modern deck, keeping every word of your content. Download them back as editable PowerPoint, not flattened images.",
  openGraph: {
    title: "Bulk Rebuild: Convert a Folder of Old PowerPoints Into Modern Decks",
    description:
      "Rebuild a whole back catalogue of PowerPoints in one run, and get editable .pptx files back.",
    images: [{ url: "https://pitchboost.ai/og-image.png", width: 1310, height: 820 }],
  },
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, color: "#1F6B6B" }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const WHO_ITS_FOR = [
  {
    title: "Trainers and coaches with a course",
    body: "A curriculum is rarely one deck. It is Module 1 through Module 8, built over years, in whatever style you were using at the time. Rebuild the set in one run and they finally look like one course.",
  },
  {
    title: "Consultants with a template library",
    body: "The same methodology deck, re-skinned for every client. Rebuild them together so the framework stays identical and only the branding moves.",
  },
  {
    title: "Anyone inheriting a shared drive",
    body: "New role, new brand, and a folder of decks nobody wants to touch. Convert the lot instead of rebuilding them one evening at a time.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Drop in your files",
    body: "Up to twelve .pptx files at once. Each becomes its own deck, named from the file so you can still tell them apart afterwards.",
  },
  {
    step: "2",
    title: "They rebuild one after another",
    body: "PitchBoost reads every slide, keeps the content, and redesigns the layout and typography. Files run sequentially, so one awkward deck never takes the rest down with it. Leave the tab open and come back.",
  },
  {
    step: "3",
    title: "Take them back as editable PowerPoint",
    body: "Every deck downloads as a .pptx with real text and shapes you can edit in PowerPoint or Keynote. There is also a pixel-perfect export if you would rather have an exact copy of the web version.",
  },
];

const WHAT_YOU_KEEP = [
  "Every word of your original content, unless you ask for it to be cut",
  "Images pulled out of the source file and placed back into the rebuilt deck",
  "Your brand colors and logo applied consistently across the whole set",
  "Speaker notes carried through to the rebuilt slides",
];

export default function BulkRebuildPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bulk Rebuild — Convert a Folder of Old PowerPoints Into Modern Decks",
    description:
      "Rebuild up to twelve .pptx files in one run, keeping your content, and download them back as editable PowerPoint.",
    url: "https://pitchboost.ai/features/bulk-rebuild",
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://pitchboost.ai/#features" },
      { "@type": "ListItem", position: 3, name: "Bulk Rebuild", item: "https://pitchboost.ai/features/bulk-rebuild" },
    ],
  };

  // Written as the questions people actually type, so answer engines can lift
  // them straight out. This page exists because the job "I have a folder of old
  // PowerPoints" is a different question from "make me a pitch deck".
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I convert multiple PowerPoint files at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. PitchBoost's bulk rebuild takes up to twelve .pptx files in a single run. Each file becomes its own deck, named after the file, and they process one after another so you can leave it running.",
        },
      },
      {
        "@type": "Question",
        name: "Will the rebuilt deck still be editable in PowerPoint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every deck can be downloaded as a .pptx built from real text boxes and shapes, so you can edit it in PowerPoint or Keynote. There is also a pixel-perfect export that matches the web version exactly, where each slide is an image.",
        },
      },
      {
        "@type": "Question",
        name: "Does it keep the content of my original slides?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The default rebuild preserves your wording and structure and changes the design: layout, typography, spacing, and colors. Images in the source file are extracted and placed back into the rebuilt deck. You can optionally ask it to condense a long deck instead.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to rebuild a set of decks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PitchBoost is free to start and each rebuild costs AI credits. You can buy credits without a subscription, and the app shows your remaining balance and an estimate before a bulk run starts.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href="/#features" style={{ color: "inherit", textDecoration: "none" }}>Features</Link>
              <span style={{ opacity: 0.4 }}>→</span>
              <span>Bulk Rebuild</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 820, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            A folder of old PowerPoints, rebuilt in one run
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 660, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Rebuilding decks one at a time is the reason it never gets done. Drop in up to twelve .pptx files, keep every word of your content, and get them back as editable PowerPoint.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Rebuild Your Decks Free</a>
            <Link href="/features/upload-and-redesign" className="btn btn-ghost btn-lg">Just one deck?</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "80px 0" }}>
        <div className="mkt-container">
          <h2 style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", fontWeight: 800, color: "var(--ds-dark)", textAlign: "center", marginBottom: 48 }}>
            How a bulk rebuild works
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, maxWidth: 1040, margin: "0 auto" }}>
            {HOW_IT_WORKS.map((s) => (
              <div key={s.step} style={{ background: "#fff", border: "1px solid var(--ds-border, #e6e8ec)", borderRadius: 14, padding: "28px 26px" }}>
                <div style={{ width: 34, height: 34, borderRadius: 999, background: "#1F6B6B", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, marginBottom: 16 }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--ds-dark)", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "var(--ds-text-light)", lineHeight: 1.7, fontSize: "0.97rem" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What survives the rebuild */}
      <section style={{ padding: "80px 0", background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", fontWeight: 800, color: "var(--ds-dark)", textAlign: "center", marginBottom: 16 }}>
            What survives the rebuild
          </h2>
          <p style={{ color: "var(--ds-text-light)", textAlign: "center", maxWidth: 620, margin: "0 auto 40px", lineHeight: 1.7 }}>
            The point is to change how the deck looks, not what it says.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
            {WHAT_YOU_KEEP.map((item) => (
              <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#fff", border: "1px solid var(--ds-border, #e6e8ec)", borderRadius: 12, padding: "16px 18px" }}>
                <CheckIcon />
                <span style={{ color: "var(--ds-text)", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ padding: "80px 0" }}>
        <div className="mkt-container">
          <h2 style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", fontWeight: 800, color: "var(--ds-dark)", textAlign: "center", marginBottom: 48 }}>
            Who rebuilds in bulk
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, maxWidth: 1040, margin: "0 auto" }}>
            {WHO_ITS_FOR.map((w) => (
              <div key={w.title} style={{ background: "#fff", border: "1px solid var(--ds-border, #e6e8ec)", borderRadius: 14, padding: "28px 26px" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--ds-dark)", marginBottom: 10 }}>{w.title}</h3>
                <p style={{ color: "var(--ds-text-light)", lineHeight: 1.7, fontSize: "0.97rem" }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editable export callout */}
      <section style={{ padding: "80px 0", background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 760, textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", fontWeight: 800, color: "var(--ds-dark)", marginBottom: 16 }}>
            You get editable files back
          </h2>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: 28 }}>
            Most AI deck tools hand you something you cannot change. Every PitchBoost deck downloads as a .pptx built from real text boxes and shapes, so you can fix a typo, update a number, or re-brand it next year without coming back to us. If you would rather have an exact copy of the web version, that export is there too.
          </p>
          <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Try It Free</a>
        </div>
      </section>
    </>
  );
}
