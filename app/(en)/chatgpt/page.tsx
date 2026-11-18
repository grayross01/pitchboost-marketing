import type { Metadata } from "next";
import Link from "next/link";
import { ChatGptPluginButton } from "@/components/marketing/chatgpt-plugin-button";
import { ChatGptStickyCta } from "@/components/marketing/chatgpt-sticky-cta";
import { STATIC_PAGE_DATES } from "@/lib/page-dates";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP = `${APP_URL}/signup`;
const SIGNUP_REBUILD = `${APP_URL}/signup?intent=rebuild`;
const URL = "https://pitchboost.ai/chatgpt";

const TITLE = "PitchBoost and ChatGPT: ChatGPT Writes It, PitchBoost Designs It";
const DESCRIPTION =
  "How PitchBoost works with ChatGPT. Add the plugin and redesign a PowerPoint without leaving the chat, or bring the outline or .pptx ChatGPT made to PitchBoost and get a designed deck with your numbers kept. Free ChatGPT accounts included.";

export const metadata: Metadata = {
  alternates: { canonical: "/chatgpt" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
};

function ArrowIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: size, height: size, flexShrink: 0 }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 18, height: 18, flexShrink: 0, color: "#1F6B6B" }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/** Who does what. Each side is the half that tool is good at; nothing on
 *  the PitchBoost side is a promise the plugin alone cannot keep. */
const CHATGPT_DOES = [
  { term: "The outline", body: "A slide-by-slide structure from your topic, your audience and your time limit." },
  { term: "The wording", body: "Tighter titles and shorter slides. It will happily cut your favorite paragraph." },
  { term: "Speaker notes", body: "What to say on each slide, so you are not reading the screen out loud." },
  { term: "Rehearsal", body: "It plays the skeptical investor, client or professor and asks the hard questions first." },
  { term: "Research", body: "Background on a topic, a company or an industry before you build." },
];

const PITCHBOOST_DOES = [
  { term: "The layout", body: "Each slide gets a layout that fits what it says, not a title and six bullets." },
  { term: "Your brand", body: "Logo, colors and fonts, read from your website." },
  { term: "Your numbers", body: "Carried over exactly. Anything it cannot trace is removed, not invented." },
  { term: "Files you can send", body: "An editable PowerPoint, a PDF and a link." },
  { term: "A read receipt", body: "The link shows when your deck was opened." },
];

const WAYS = [
  {
    key: "chat",
    tag: "In ChatGPT",
    title: "Add the plugin and ask",
    body: "Add PitchBoost from ChatGPT's plugin directory. Attach your PowerPoint, or just describe the deck you need, and ask in plain words. A few minutes later ChatGPT replies with a link to the finished deck.",
    best: "You are already in ChatGPT and the deck is mostly words and numbers.",
    know: "ChatGPT passes along the text on your slides, so pictures in the file do not make the trip. Redesigns use the brand saved in your PitchBoost account.",
  },
  {
    key: "web",
    tag: "On pitchboost.ai",
    title: "Upload the file or paste the outline",
    body: "Did ChatGPT hand you a .pptx, or an outline you like? Upload the file or paste the text. PitchBoost reads it, takes your logo and colors from your website, and builds every slide. You can watch them land.",
    best: "The deck has pictures or charts worth keeping, or you want to edit slides the moment they are built.",
    know: "Takes PowerPoint and PDF files up to 50 MB and 75 slides. Google Slides and Keynote export to PowerPoint in one step.",
  },
];

const DRAFT_PROMPTS = [
  "Outline a 10-slide presentation on [topic] for [audience]. One idea per slide, and a title that states the point.",
  "Here are my numbers. Use them exactly and do not add any I did not give you.",
  "Cut every slide to under 30 words.",
  "Play a skeptical investor and ask me the five hardest questions about this deck.",
];

const DECK_PROMPTS = [
  "Here is my PowerPoint. Make it look professional.",
  "Every slide in this deck has too much text. Clean it up and keep my numbers.",
  "This deck is 40 slides. Condense it and keep my numbers.",
  "Turn that outline into a 10-slide presentation.",
  "List my recent PitchBoost decks and give me the link to the newest one.",
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
    q: "Does PitchBoost work with ChatGPT?",
    a: "Yes, two ways. Inside ChatGPT, add the PitchBoost plugin from the plugin directory, sign in to PitchBoost once, then attach a PowerPoint or describe a deck. Or work on pitchboost.ai: upload the .pptx ChatGPT made, or paste the outline it wrote, and PitchBoost builds the designed deck.",
  },
  {
    q: "Does it work on a free ChatGPT account?",
    a: "Yes. The plugin works on free ChatGPT accounts as well as paid plans, and a free PitchBoost account includes one deck a month of up to 10 slides.",
  },
  {
    q: "How is this different from asking ChatGPT to make a PowerPoint?",
    a: "ChatGPT on its own can write the content and produce a basic .pptx with plain layouts. With PitchBoost the deck is designed: real layouts, your brand, your numbers kept exactly, and a share link that shows when it is opened. For a deck you already have, PitchBoost rebuilds every slide instead of regenerating it as a new plain file.",
  },
  {
    q: "Should I use the plugin or the website?",
    a: "Use the plugin when you are already in ChatGPT and the deck is mostly text: ChatGPT sends PitchBoost the words on your slides. Use the website when the file has pictures or charts you want kept, when you want your brand read from your website on the spot, or when you want to edit as soon as the deck is built. Both put the deck in the same PitchBoost account.",
  },
  {
    q: "What can ChatGPT do with PitchBoost, and what can it not do?",
    a: "It can redesign a deck you attach, build a new one from a description, check whether a deck is ready, list your recent decks, fetch a deck's link and turn a share link back on. Before you sign in it can make a sample deck, with a badge, that you can claim later. It cannot change your plan, delete anything or see decks outside your account.",
  },
  {
    q: "What does ChatGPT send to PitchBoost?",
    a: "The text ChatGPT reads from your slides and what you asked for. It is stored in your PitchBoost account with the finished deck. The privacy policy covers retention and deletion.",
  },
  {
    q: "What does it cost?",
    a: "The free plan includes one deck a month of up to 10 slides, with a small PitchBoost badge. Every deck can be shared as a live link for free. To download one as a PowerPoint or PDF with no badge, there is a one-time payment for that deck, from $9, with no subscription. Starter is $7 a month for regular use; all plans are on the pricing page.",
  },
  {
    q: "Where do my decks go?",
    a: "Into your PitchBoost account. ChatGPT gives you a link to each deck; you can also ask it to list your recent decks. Open any deck in PitchBoost to edit it, download the PowerPoint or PDF, or share it.",
  },
  {
    q: "Is PitchBoost made by OpenAI?",
    a: "No. PitchBoost is an independent product that connects to ChatGPT through its plugin directory. ChatGPT is made by OpenAI.",
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
    dateModified: STATIC_PAGE_DATES["/chatgpt"],
    about: "How PitchBoost works with ChatGPT: the PitchBoost plugin inside ChatGPT, and bringing what ChatGPT wrote to PitchBoost to be designed",
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

      {/* Hero. The page says how the two work together; the one big button is
          still the plugin, because that is what someone arriving from inside
          ChatGPT came for. The web path gets its own section below. */}
      <section className="chatgpt-hero">
        <div className="mkt-container chatgpt-hero-grid">
          <div className="chatgpt-hero-copy">
            <div className="section-label" style={{ marginBottom: 20 }}><span>PitchBoost + ChatGPT</span></div>
            <h1>ChatGPT writes it. PitchBoost designs it.</h1>
            <p className="chatgpt-hero-lede">
              ChatGPT is good at the thinking: the outline, the wording, the hard questions. PitchBoost does what a chat cannot: real layouts, your numbers kept exactly, a deck you can send. Use both inside the chat, or bring what ChatGPT wrote over here.
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
              No plugin? <a href={SIGNUP_REBUILD}>Upload a deck</a> or <a href={SIGNUP}>paste an outline</a> on the web.
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
            <p className="chatgpt-hero-shot-caption">The plugin in ChatGPT: choose Try in chat.</p>
          </div>
        </div>
      </section>

      {/* Mobile: keep the one action in reach while scrolling. */}
      <ChatGptStickyCta watchId="chatgpt-hero-cta" />

      {/* Who does what: the hand-off, drawn as one. */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header chatgpt-head fade-up">
            <div className="section-label"><span>Who does what</span></div>
            <h2>Each one does the half it is good at</h2>
            <p>Draft it with ChatGPT. Hand the result to PitchBoost. Send the deck.</p>
          </div>
          <div className="chatgpt-split fade-up">
            <div className="chatgpt-split-card">
              <p className="chatgpt-split-kicker">The thinking</p>
              <h3>ChatGPT</h3>
              <dl>
                {CHATGPT_DOES.map(({ term, body }) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{body}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="chatgpt-split-join" aria-hidden="true"><ArrowIcon size={20} /></div>
            <div className="chatgpt-split-card is-ours">
              <p className="chatgpt-split-kicker">The deck</p>
              <h3>PitchBoost</h3>
              <dl>
                {PITCHBOOST_DOES.map(({ term, body }) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <p className="chatgpt-foot fade-up">
            ChatGPT can also make a .pptx by itself, and for a quick internal draft that is often enough. The longer answer: <Link href="/blog/can-chatgpt-make-slides">Can ChatGPT make a PowerPoint?</Link>
          </p>
        </div>
      </section>

      {/* What "designed" means: one real slide, twice. */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header chatgpt-head fade-up">
            <div className="section-label"><span>The difference</span></div>
            <h2>The same slide, before and after</h2>
            <p className="chatgpt-narrow">
              From a six-slide sample deck for a fictional fleet-analytics company, built the way most first drafts are: a title, a navy bar, five long bullets. PitchBoost rebuilt it one slide to one. Nothing was retyped.
            </p>
          </div>
          <figure className="chatgpt-pair fade-up">
            <div className="chatgpt-pair-grid">
              <div>
                <div className="chatgpt-pair-label">Before</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/redesign/makeover/before-3.webp" alt="Before: a slide with a navy title bar and five long bullet points" width={1280} height={720} loading="lazy" />
              </div>
              <div>
                <div className="chatgpt-pair-label is-after">After PitchBoost</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="is-after" src="/redesign/makeover/after-3.webp" alt="After: the same slide as six cards, each led by one of the slide's figures" width={1280} height={720} loading="lazy" />
              </div>
            </div>
            <figcaption>
              Five long bullets became a layout, and every figure in them (23%, 3.4 days, 61%, 34%, $4,200, 11 hours) is still there. <Link href="/redesign/powerpoint-makeover-before-and-after">See all the slides</Link>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Two ways to use them together */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header chatgpt-head fade-up">
            <div className="section-label"><span>Two ways to pair them</span></div>
            <h2>Stay in the chat, or bring it over</h2>
            <p className="chatgpt-narrow">Both end with a finished deck in your PitchBoost account. Pick by where you would rather work and what is in your file.</p>
          </div>
          <div className="chatgpt-ways fade-up">
            {WAYS.map((w) => (
              <div key={w.key} className="chatgpt-way">
                <span className="chatgpt-way-tag">{w.tag}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                <dl>
                  <div>
                    <dt>Best when</dt>
                    <dd>{w.best}</dd>
                  </div>
                  <div>
                    <dt>Good to know</dt>
                    <dd>{w.know}</dd>
                  </div>
                </dl>
                <div className="chatgpt-way-actions">
                  {w.key === "chat" ? (
                    <ChatGptPluginButton via="chatgpt_ways" className="btn btn-primary">Add PitchBoost to ChatGPT</ChatGptPluginButton>
                  ) : (
                    <>
                      <a href={SIGNUP_REBUILD} className="btn btn-primary">Upload a deck</a>
                      <a href={SIGNUP} className="chatgpt-way-link">or start from an outline</a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example prompts: the draft, then the deck. */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header chatgpt-head fade-up">
            <div className="section-label"><span>What to ask</span></div>
            <h2>Prompts that work</h2>
            <p className="chatgpt-narrow">The first set is for ChatGPT by itself. The second needs PitchBoost added, and your .pptx attached where it mentions one.</p>
          </div>
          <div className="chatgpt-prompts fade-up">
            <div>
              <h3>For the draft</h3>
              <p className="chatgpt-prompts-sub">ChatGPT by itself</p>
              <ul>
                {DRAFT_PROMPTS.map((p) => <li key={p}>&ldquo;{p}&rdquo;</li>)}
              </ul>
            </div>
            <div>
              <h3>For the deck</h3>
              <p className="chatgpt-prompts-sub">With PitchBoost added</p>
              <ul className="is-ours">
                {DECK_PROMPTS.map((p) => <li key={p}>&ldquo;{p}&rdquo;</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header chatgpt-head fade-up">
            <div className="section-label"><span>Set up the plugin</span></div>
            <h2>Three steps, about a minute</h2>
          </div>
          <div className="chatgpt-steps fade-up">
            {STEPS.map(({ step, title, body }) => (
              <div key={step} className="chatgpt-step">
                <div className="chatgpt-step-num">{step}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="chatgpt-foot">
            Full steps and troubleshooting in the <Link href="/help/connect-chatgpt">help center</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header chatgpt-head fade-up">
            <div className="section-label"><span>Questions</span></div>
            <h2>PitchBoost and ChatGPT, answered</h2>
          </div>
          <div className="chatgpt-faq fade-up">
            {FAQS.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box fade-up">
            <h2>Write it there. Finish it here.</h2>
            <p>Add PitchBoost in ChatGPT, or bring what ChatGPT wrote to the web. Either way, your first deck is free.</p>
            <ChatGptPluginButton via="chatgpt_footer_cta">Add PitchBoost to ChatGPT</ChatGptPluginButton>
            <p className="chatgpt-cta-alt">
              <a href={SIGNUP_REBUILD}>Or upload a deck on the web</a>
            </p>
            <p className="chatgpt-legal">ChatGPT is a trademark of OpenAI. PitchBoost is an independent product and is not affiliated with OpenAI.</p>
          </div>
        </div>
      </section>
    </>
  );
}
