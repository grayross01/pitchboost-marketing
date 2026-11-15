import type { Metadata } from "next";
import Link from "next/link";
import { ChatGptPluginButton } from "@/components/marketing/chatgpt-plugin-button";
import { ChatGptStickyCta } from "@/components/marketing/chatgpt-sticky-cta";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_REBUILD = `${APP_URL}/signup?intent=rebuild`;
const URL = "https://pitchboost.ai/chatgpt";

const TITLE = "PitchBoost in ChatGPT: Redesign Your PowerPoint Without Leaving the Chat";
const DESCRIPTION =
  "PitchBoost is a plugin in ChatGPT's plugin directory, free ChatGPT accounts included. Attach your PowerPoint, ask in plain words, and get it back redesigned in your brand as an editable PowerPoint, a PDF and a link you can track.";

export const metadata: Metadata = {
  alternates: { canonical: "/chatgpt" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 22, height: 22, flexShrink: 0 }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, color: "#1F6B6B" }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const WHY = [
  {
    title: "You are already there",
    body: "Most people draft the content of a presentation in ChatGPT. With the plugin, the same chat turns that draft, or the PowerPoint you already have, into a designed deck. No new tool to learn and no copying between tabs.",
  },
  {
    title: "Ask in plain words",
    body: "Attach the .pptx and say what you want: make it look professional, use my university's colors, cut the text on every slide. ChatGPT passes your file and your request to PitchBoost.",
  },
  {
    title: "ChatGPT writes, PitchBoost designs",
    body: "ChatGPT is good at outlines and wording. PitchBoost does the part a chat cannot: real layouts, your brand taken from a website, and every number in your deck carried over exactly, with anything it cannot trace removed rather than invented.",
  },
  {
    title: "A deck you can send, not a draft",
    body: "The result is a finished deck: an editable PowerPoint, a PDF, and a share link that tells you when it has been opened. A file made by ChatGPT on its own uses plain default layouts and tells you nothing once you send it.",
  },
];

const PROMPTS = [
  "Here is my PowerPoint. Make it look professional.",
  "Redesign this class presentation in my university's colors.",
  "Every slide in this deck has too much text. Clean it up and keep my numbers.",
  "Turn these notes into a 10-slide presentation.",
  "Redesign this sales deck in our brand. Use acme.com for the logo and colors.",
];

const STEPS = [
  {
    step: "1",
    title: "Add the PitchBoost plugin",
    body: "In ChatGPT, open the plugin directory, search for PitchBoost and add it. It works on free ChatGPT accounts as well as paid plans.",
  },
  {
    step: "2",
    title: "Sign in to PitchBoost once",
    body: "The first time you use it, ChatGPT asks you to sign in to PitchBoost or create a free account. After that it remembers the connection.",
  },
  {
    step: "3",
    title: "Attach a deck and ask",
    body: "Attach your .pptx (Google Slides, Keynote and Canva all export to PowerPoint) and ask. A few minutes later ChatGPT replies with a link: open the deck in PitchBoost for the full preview, the downloads and the share link.",
  },
];

const FAQS = [
  {
    q: "Is PitchBoost available in ChatGPT?",
    a: "Yes. PitchBoost is a plugin in ChatGPT's plugin directory. Add it, sign in to PitchBoost once, then attach a PowerPoint in any chat and ask for a redesign, or describe a new deck.",
  },
  {
    q: "Does it work on a free ChatGPT account?",
    a: "Yes. The plugin works on free ChatGPT accounts as well as paid plans, and a free PitchBoost account includes one deck a month of up to 10 slides.",
  },
  {
    q: "How is this different from asking ChatGPT to make a PowerPoint?",
    a: "ChatGPT on its own can write the content and produce a basic .pptx with plain layouts. With PitchBoost, the deck is designed: real layouts, your brand from a website, your numbers kept exactly, and a share link that shows when it is opened. For a deck you already have, PitchBoost rebuilds every slide instead of regenerating it as a new plain file.",
  },
  {
    q: "What does it cost?",
    a: "The free plan includes one deck a month of up to 10 slides, with a small PitchBoost badge. Every deck can be shared as a live link for free; to download one as a PowerPoint or PDF with no badge, there is a one-time $9 option with no subscription. Starter is $7 a month for regular use; all plans are on the pricing page.",
  },
  {
    q: "Where do my decks go?",
    a: "Into your PitchBoost account. ChatGPT gives you a link to each deck; you can also ask it to list your recent decks. Open any deck in PitchBoost to edit it, download the PowerPoint or PDF, or share it.",
  },
  {
    q: "Can I do the same in Claude?",
    a: "Yes. In Claude, add PitchBoost as a custom connector with the address https://app.pitchboost.ai/api/mcp. It works the same way: attach a deck, ask, get a link back.",
  },
];

export default function ChatGptPage() {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: URL,
    about: "Using the PitchBoost plugin inside ChatGPT to redesign or build presentations",
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to redesign a PowerPoint inside ChatGPT with PitchBoost",
    step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.body })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero: built for visitors arriving from an ad inside ChatGPT. One job:
          get them to the plugin listing. */}
      <section className="chatgpt-hero">
        <div className="mkt-container chatgpt-hero-grid">
          <div className="chatgpt-hero-copy">
            <div className="section-label" style={{ marginBottom: 20 }}><span>A plugin for ChatGPT</span></div>
            <h1>Redesign your PowerPoint without leaving ChatGPT</h1>
            <p className="chatgpt-hero-lede">
              Add PitchBoost, attach your slides and ask in plain words. You get them back redesigned in your brand, with your content and numbers kept.
            </p>
            <ChatGptPluginButton via="chatgpt_hero" className="btn btn-primary btn-primary-animated chatgpt-cta">
              Add PitchBoost to ChatGPT
              <ArrowIcon />
            </ChatGptPluginButton>
            {/* Marks the bottom of the hero button for the sticky phone bar. */}
            <span id="chatgpt-hero-cta" style={{ display: "block", height: 1 }} />
            <p className="chatgpt-cta-note">Free, and works on free ChatGPT accounts. Opens the plugin in ChatGPT.</p>
            <ul className="chatgpt-hero-points">
              {["Your first deck is free", "Editable PowerPoint, PDF and a trackable link", "Keeps your text and numbers"].map((item) => (
                <li key={item}><CheckIcon />{item}</li>
              ))}
            </ul>
            <p className="chatgpt-hero-alt">
              Prefer the web? <a href={SIGNUP_REBUILD}>Upload your slides here</a>
            </p>
          </div>
          <div className="chatgpt-hero-shot">
            <ChatGptPluginButton via="chatgpt_hero_image" className="chatgpt-hero-shot-link">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/chatgpt/pitchboost-plugin-listing.jpg"
                alt="The PitchBoost plugin listing in ChatGPT's plugin directory, with example prompts and a Try in chat button"
                width={1200}
                height={1022}
              />
            </ChatGptPluginButton>
            <p className="chatgpt-hero-shot-caption">This is what opens: choose Try in chat.</p>
          </div>
        </div>
      </section>

      {/* Mobile: keep the one action in reach while scrolling. */}
      <ChatGptStickyCta watchId="chatgpt-hero-cta" />

      {/* Why work in ChatGPT */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Why do it in ChatGPT</span></div>
            <h2>The chat you already use, with a designer attached</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 48 }}>
            {WHY.map(({ title, body }) => (
              <div key={title} style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "24px 26px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example prompts */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What to ask</span></div>
            <h2>Prompts that work</h2>
            <p>Attach your .pptx first, then ask in your own words. These are good starting points.</p>
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 720, margin: "40px auto 0" }}>
            {PROMPTS.map((p) => (
              <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "16px 20px" }}>
                <CheckIcon />
                <span style={{ fontSize: 15, color: "var(--ds-text-primary)", lineHeight: 1.55 }}>&ldquo;{p}&rdquo;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Set it up</span></div>
            <h2>Three steps, about a minute</h2>
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720, margin: "48px auto 0" }}>
            {STEPS.map(({ step, title, body }) => (
              <div key={step} style={{ display: "flex", gap: 24, alignItems: "flex-start", background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #1F6B6B, #E8665A)", color: "white", fontWeight: 800, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{step}</div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--ds-text-secondary)", marginTop: 24 }}>
            Full steps and troubleshooting in the <Link href="/help/connect-chatgpt" style={{ color: "#1F6B6B", fontWeight: 600 }}>help center</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Questions</span></div>
            <h2>PitchBoost in ChatGPT, answered</h2>
          </div>
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 760, margin: "40px auto 0" }}>
            {FAQS.map(({ q, a }) => (
              <details key={q} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 12, padding: "16px 20px" }}>
                <summary style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", cursor: "pointer" }}>{q}</summary>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: "10px 0 0" }}>{a}</p>
              </details>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--ds-text-secondary)", marginTop: 28 }}>
            More on what ChatGPT can do with slides on its own: <Link href="/blog/can-chatgpt-make-slides" style={{ color: "#1F6B6B", fontWeight: 600 }}>Can ChatGPT make a PowerPoint?</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box fade-up">
            <h2>Your next deck, designed from the chat.</h2>
            <p>Add PitchBoost in ChatGPT, or upload your slides on the web. Either way, free for your first deck.</p>
            <ChatGptPluginButton via="chatgpt_footer_cta">Add PitchBoost to ChatGPT</ChatGptPluginButton>
          </div>
        </div>
      </section>
    </>
  );
}
