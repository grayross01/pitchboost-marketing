import type { Metadata } from "next";
import Link from "next/link";
import TopicBox from "@/components/marketing/topic-box";
import { PRESENTATIONS } from "@/lib/presentations";
import { STATIC_PAGE_DATES } from "@/lib/page-dates";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_REBUILD = `${APP_URL}/signup?intent=rebuild`;
const BASE = "https://pitchboost.ai";
const URL = `${BASE}/ai-presentation-maker`;

const TITLE = "AI Presentation Maker: Make or Redesign Any Deck | PitchBoost";
const DESCRIPTION =
  "Make a presentation from a prompt or redesign the one you have. Lessons, reports, talks and pitches, shaped for their purpose, in your brand and any language.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/ai-presentation-maker" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
};

const STEPS = [
  { title: "Say what it's for", body: "Type the topic, who will see it and how long you have. Paste your notes or attach a PDF if you have them; the more of your own material, the less guessing." },
  { title: "PitchBoost builds the whole deck", body: "It picks the shape the purpose needs, writes every slide, cites the figures it adds, and designs it in your brand, lifted from a website you point it at." },
  { title: "Edit, share, download", body: "Change any slide with a sentence. Share a link and see when it is opened, or download PowerPoint, PDF or Google Slides." },
];

const WHY = [
  { title: "Shaped for the purpose", body: "A lecture is not a pitch. PitchBoost changes the structure, not just the words: a lesson ends on takeaways and questions, a report on the decision it needs, a pitch on a next step." },
  { title: "Facts you can stand behind", body: "Figures it adds come with a source on the slide. Anything it cannot trace is flagged for you to check before you present, and pitches and reports drop untraceable numbers outright." },
  { title: "Keeps the deck you already have", body: "Upload a PowerPoint or PDF and get one redesigned slide per original slide, with your words and your numbers intact. Ugly slides in, clean slides out." },
  { title: "A PowerPoint that opens cleanly", body: "Download an exact-look PowerPoint, or an editable one with real text boxes and speaker notes. PDF and Google Slides too, so the classroom computer is not a problem." },
  { title: "Any language", body: "Decks come out in the language you write in, right-to-left scripts like Arabic, Persian and Hebrew included, all the way into the editable PowerPoint." },
  { title: "One deck, one price", body: "Your first deck each month is free. Finishing one deck for download is $9 once, no subscription to remember to cancel. Plans start at $7 a month." },
];

const COMPARE = [
  { name: "Gamma", body: "A fast, web-first canvas for decks, docs and simple sites, great when you present from Gamma itself. PitchBoost is the pick when the deck has to work as a PowerPoint or PDF, or starts from one you already have.", href: "/compare/pitchboost-vs-gamma", link: "PitchBoost vs Gamma" },
  { name: "ChatGPT on its own", body: "Writes a solid outline, then leaves the slides to you. PitchBoost turns that outline into a designed deck, and it runs inside ChatGPT, free accounts included.", href: "/chatgpt", link: "PitchBoost in ChatGPT" },
  { name: "Copilot in PowerPoint", body: "Builds inside PowerPoint if your Microsoft 365 plan includes it. PitchBoost works in any browser, redesigns the deck you have slide for slide, and does not need a subscription for a single deck.", href: "/alternatives/copilot-in-powerpoint", link: "Copilot alternatives" },
];

const FAQS = [
  { q: "Is PitchBoost free?", a: "Your first AI deck each month is free, up to 10 slides with a small badge, shared as a link. Downloading files (PowerPoint, PDF, Google Slides) takes a paid plan from $7 a month, or $9 once to finish that one deck." },
  { q: "What kinds of presentations can it make?", a: "Lessons and lectures, class presentations, thesis defenses, research talks, training sessions, reports and board updates, investor updates, conference talks, and sales or investor pitches. It changes the structure to fit the purpose instead of pouring every topic into the same template." },
  { q: "Does it make things up?", a: "It is built not to. Figures it adds carry a source on the slide; anything it cannot trace is flagged in a facts panel for you to check, and in pitches and reports untraceable numbers are removed before you see the deck. Read the facts panel before you present, as you would with any AI tool." },
  { q: "Can it redesign the PowerPoint I already have?", a: "Yes. Upload a .pptx or a PDF deck, up to 50 MB and 75 slides. You get one redesigned slide per original slide, in your brand, with your words and numbers kept. Google Slides and Keynote decks work after exporting to .pptx." },
  { q: "What languages does it work in?", a: "The language you write in, including right-to-left scripts such as Arabic, Persian, Hebrew and Urdu. Right-to-left decks stay right-to-left in the editable PowerPoint." },
  { q: "Can I use it inside ChatGPT or Claude?", a: "Yes. PitchBoost is in ChatGPT's app directory and works on free ChatGPT accounts, and Claude can use it through its MCP server. Ask for a presentation in the chat and you get a link back." },
  { q: "How is it different from Gamma?", a: "Gamma is a fast, web-first canvas for decks, docs and simple sites. PitchBoost only makes presentations, and it is built for the deck that has to work as a file: redesigned from the one you have, figures checked, exported to a PowerPoint that opens cleanly, and $9 for a single deck instead of a subscription." },
];

const card = { background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "22px 26px" } as const;

export default function AiPresentationMakerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: URL,
    inLanguage: "en",
    dateModified: STATIC_PAGE_DATES["/ai-presentation-maker"],
    publisher: { "@type": "Organization", name: "PitchBoost", url: BASE },
  };
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Presentations PitchBoost makes",
    itemListElement: PRESENTATIONS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.navLabel, url: `${BASE}/presentations/${p.slug}` })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label"><span>AI presentation maker</span></div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 860, margin: "0 auto 20px", lineHeight: 1.12, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Say what it&apos;s for. Get a deck built for that room.
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 680, margin: "0 auto 32px", lineHeight: 1.7 }}>
            PitchBoost writes and designs the whole presentation: a lesson that ends on takeaways, a board update that leads with the result, a pitch written for one buyer. Or bring the deck you already have and get it back redesigned, every number kept.
          </p>
          <TopicBox placeholder="Photosynthesis for my 9th grade biology class, 10 slides" />
          <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", marginTop: 16 }}>
            Already have slides? <a href={SIGNUP_REBUILD} style={{ color: "#1F6B6B", fontWeight: 600 }}>Redesign the deck you have</a> instead.
          </p>
          <p style={{ fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 6 }}>Free for your first deck. No credit card.</p>
        </div>
      </section>

      {/* What are you making? */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Pick yours</span></div>
            <h2>What are you making?</h2>
            <p>Each kind of presentation runs a different way. Here is how PitchBoost builds the common ones.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 40 }}>
            {PRESENTATIONS.map((p) => (
              <Link key={p.slug} href={`/presentations/${p.slug}`} style={{ ...card, textDecoration: "none", display: "block" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>{p.navLabel}</h3>
                <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>{p.heroHeadline}</p>
              </Link>
            ))}
            <Link href="/redesign" style={{ ...card, textDecoration: "none", display: "block" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>A deck you already have</h3>
              <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>Redesigned in your brand, one slide per original slide, every number kept.</p>
            </Link>
            <Link href="/industries" style={{ ...card, textDecoration: "none", display: "block" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>Sales and investor pitches</h3>
              <p style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.6, margin: 0 }}>Written for one specific prospect or investor, with a clear next step.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works. Numbered because it is a sequence. */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>How it works</span></div>
            <h2>A few minutes, start to finish</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 40 }}>
            {STEPS.map((s, i) => (
              <div key={s.title} style={{ ...card, background: "var(--ds-bg)" }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: "#1F6B6B", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, marginBottom: 14 }}>{i + 1}</div>
                <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PitchBoost */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Why PitchBoost</span></div>
            <h2>What the generic slide generators skip</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}>
            {WHY.map((w) => (
              <div key={w.title} style={card}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{w.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest comparison */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container" style={{ maxWidth: 860 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Compared honestly</span></div>
            <h2>When something else is the better fit</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gap: 14, marginTop: 40 }}>
            {COMPARE.map((c) => (
              <div key={c.name} style={{ ...card, background: "var(--ds-bg)" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 6 }}>{c.name}</h3>
                <p style={{ fontSize: 13.5, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "0 0 8px" }}>{c.body}</p>
                <Link href={c.href} style={{ fontSize: 13, fontWeight: 600, color: "#1F6B6B" }}>{c.link} &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mkt-section">
        <div className="mkt-container" style={{ maxWidth: 760 }}>
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>FAQ</span></div>
            <h2>Questions people ask</h2>
          </div>
          <div className="fade-up" style={{ marginTop: 40, display: "grid", gap: 12 }}>
            {FAQS.map(({ q, a }) => (
              <details key={q} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "18px 22px" }}>
                <summary style={{ fontWeight: 600, fontSize: 15, color: "var(--ds-text-primary)", cursor: "pointer" }}>{q}</summary>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, marginTop: 12, marginBottom: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-section" style={{ background: "var(--ds-dark)", textAlign: "center" }}>
        <div className="mkt-container">
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, maxWidth: 700, margin: "0 auto 28px" }}>Your next presentation, minus the formatting.</h2>
          <TopicBox placeholder="Q3 results for the board: revenue, churn, and the hiring decision" dark id="topic-bottom" />
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 13, marginTop: 16 }}>Free for your first deck. $9 once to download a finished one, or plans from $7 a month.</p>
        </div>
      </section>
    </div>
  );
}
