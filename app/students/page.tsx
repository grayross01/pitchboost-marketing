import type { Metadata } from "next";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;
// Rebuild intent lands the new account on the upload screen.
const SIGNUP_REBUILD = `${APP_URL}/signup?intent=rebuild`;
const URL = "https://pitchboost.ai/students";
// A real student deck redesigned in the app, embedded like the industry
// pages' samples. Empty shows the "coming soon" placeholder.
const SAMPLE_DECK_URL = "https://app.pitchboost.ai/d/2w2czfWSmK";

const TITLE = "PitchBoost for Students: Class Presentations That Look Professionally Designed";
const DESCRIPTION =
  "Upload the slides you already have, from PowerPoint, Google Slides, Keynote or Canva, and get them back as a clean, consistent, professionally designed presentation in minutes. Your content stays yours. Free for one deck a month.";

export const metadata: Metadata = {
  alternates: { canonical: "/students" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, color: "#1F6B6B" }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0 }}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const USES = [
  { title: "Class presentations", body: "The 10-minute presentation for a seminar or module, due this week, that needs to look finished." },
  { title: "Group projects", body: "Four people, four styles. Merge the slides into one file and get it back as one consistent deck." },
  { title: "Thesis and dissertation defenses", body: "A year of work deserves slides that look like it. Findings in the titles, charts you can read from the back." },
  { title: "Conference and research talks", body: "Readable from the back row and on the livestream, with your data carried over exactly." },
  { title: "Case competitions and pitch events", body: "Consulting cases, startup pitch nights and hackathon demos, judged partly on how the deck looks." },
  { title: "Clubs, societies and student government", body: "Recruitment decks, sponsorship pitches and event recaps in your club's colors." },
];

const BEFORE = [
  "Walls of text you end up reading aloud",
  "Three fonts and four color schemes from four group members",
  "Charts pasted as screenshots, too small to read",
  "The default template everyone in the class recognizes",
  "Text sizes set for a laptop, not a lecture hall",
];

const AFTER = [
  "One clean design on every slide",
  "Clear hierarchy, so each slide makes one point",
  "Charts sized to be read, with your numbers kept exactly",
  "Your university, club or personal colors, not a stock theme",
  "Text large enough for the back of the room",
];

const STEPS = [
  {
    step: "1",
    title: "Upload your slides",
    body: "Upload a PowerPoint file (.pptx, up to 50 MB). Google Slides, Keynote and Canva all export to PowerPoint in a couple of clicks: in Google Slides use File, Download, Microsoft PowerPoint.",
  },
  {
    step: "2",
    title: "Choose the look and how much to change",
    body: "Point PitchBoost at a website for the colors and logo: your university, department, club or your own site. Then choose whether to keep your wording exactly as written or let it tighten dense slides.",
  },
  {
    step: "3",
    title: "Get it back in minutes",
    body: "Every slide comes back redesigned, with your content and numbers kept. Download an editable PowerPoint to keep working on it, a PDF to submit, or share a link.",
  },
];

const GUIDES = [
  { label: "How to make a class presentation", href: "/blog/class-presentation", desc: "Slide count, structure, what professors grade, group work" },
  { label: "Thesis defense presentation", href: "/blog/thesis-defense-presentation", desc: "What your defense slides actually need" },
  { label: "Conference presentation design", href: "/blog/conference-presentation-design", desc: "A talk that reads from row 30" },
  { label: "Fix a slide with too much text", href: "/blog/fix-slides-with-too-much-text", desc: "Three quick ways to cut a dense slide" },
  { label: "Fix inconsistent fonts and layouts", href: "/blog/fix-inconsistent-fonts-and-layouts", desc: "Make a group deck look like one deck" },
  { label: "Fix a broken chart", href: "/blog/fix-broken-chart-in-powerpoint", desc: "Links, pictures, stale numbers, unreadable charts" },
];

const FAQS = [
  {
    q: "Is PitchBoost free for students?",
    a: "Yes. The free plan includes one deck a month of up to 10 slides, which fits a typical class presentation. Free decks carry a small PitchBoost badge. The Starter plan, $9 a month, removes the badge, allows decks up to 50 slides and covers about five decks a month. You can cancel anytime.",
  },
  {
    q: "Does it work with Google Slides, Keynote or Canva?",
    a: "Yes. PitchBoost reads PowerPoint files, and all three export to PowerPoint: in Google Slides choose File, Download, Microsoft PowerPoint; in Keynote choose File, Export To, PowerPoint; in Canva download the design as a PowerPoint file. Upload that file.",
  },
  {
    q: "Will it change what my slides say?",
    a: "Only if you want it to. You choose whether PitchBoost keeps your wording exactly as written and redesigns the layout around it, or tightens dense slides and sharpens titles. Either way your numbers are carried over exactly, and any figure it cannot trace back to your file is removed rather than invented.",
  },
  {
    q: "Is using PitchBoost allowed for coursework?",
    a: "That depends on your course. Many courses allow design tools but have rules about AI-written content. If yours does, keep your wording as written, so PitchBoost only changes the design, and check your syllabus or ask your instructor if you are unsure. The research and the argument should always be your own.",
  },
  {
    q: "How does it work for a group project?",
    a: "Put everyone's slides into one PowerPoint file and upload it. PitchBoost applies one design across every slide, so the finished deck looks like one person made it. Share the link or the downloaded file with your group.",
  },
  {
    q: "My presentation is longer than 10 slides. What can I do?",
    a: "On the free plan, PitchBoost can condense a longer deck to 10 slides, keeping the main points. Starter handles decks up to 50 slides as they are.",
  },
  {
    q: "Can I edit the result?",
    a: "Yes. Download the redesigned deck as a normal, editable PowerPoint file and open it in PowerPoint, Keynote or Google Slides to change anything you like.",
  },
];

export default function StudentsPage() {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: URL,
    about: "Redesigning class, group and academic presentations for students",
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
    publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pitchboost.ai" },
      { "@type": "ListItem", position: 2, name: "Who it's for", item: "https://pitchboost.ai/industries" },
      { "@type": "ListItem", position: 3, name: "Students", item: URL },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ padding: "120px 0 80px", background: "var(--ds-bg-light)", textAlign: "center" }}>
        <div className="mkt-container">
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <div className="section-label" style={{ gap: 6 }}>
              <Link href="/industries" style={{ color: "inherit", textDecoration: "none" }}>Who it&apos;s for</Link>
              <span style={{ opacity: 0.4 }}>→</span>
              <span>Students</span>
            </div>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 780, margin: "0 auto 20px", lineHeight: 1.15, fontFamily: "var(--font-inter, 'Inter'), sans-serif" }}>
            Class presentations that look professionally designed
          </h1>
          <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Upload the slides you already have and PitchBoost redesigns every one into a clean, consistent presentation in a few minutes. Your content stays yours. You get back an editable PowerPoint, a PDF, and a link to share with your group or your professor.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href={SIGNUP_REBUILD} className="btn btn-primary btn-lg">Redesign My Slides</a>
            <a href={SIGNUP_URL} className="btn btn-light btn-lg">Start From Scratch</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {["Your content and numbers kept", "One consistent design on every slide", "Free for one deck a month"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--ds-text-secondary)", fontWeight: 500 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1F6B6B", display: "inline-block", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample deck embed, same pattern as the industry pages */}
      <section id="sample-deck" className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>See it in action</span></div>
            <h2>A real student presentation, redesigned with PitchBoost</h2>
            <p>Uploaded as a plain class deck, rebuilt in a few minutes with the content kept.</p>
          </div>
          <div className="fade-up" style={{ marginTop: 48, borderRadius: 16, overflow: "hidden", border: "1px solid var(--ds-border)", background: "var(--ds-bg-light)", minHeight: 520, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {SAMPLE_DECK_URL ? (
              <iframe src={SAMPLE_DECK_URL} width="100%" height="520" frameBorder="0" allowFullScreen style={{ display: "block" }} />
            ) : (
              <div style={{ textAlign: "center", color: "var(--ds-text-tertiary)", padding: 40 }}>
                <div style={{ fontSize: 13 }}>Deck embed coming soon</div>
              </div>
            )}
          </div>
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--ds-text-tertiary)", marginTop: 16 }}>
            Interactive presentation, redesigned with PitchBoost in a few minutes.
          </p>
        </div>
      </section>

      {/* Uses */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What students use it for</span></div>
            <h2>Any presentation you have to give, and want to look good</h2>
            <p>From a first-year seminar to a final-year defense, the job is the same: your work, presented clearly, in slides that look like you took them seriously.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 48 }}>
            {USES.map(({ title, body }) => (
              <div key={title} style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "24px 26px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What it fixes</span></div>
            <h2>Same slides. A completely different impression.</h2>
            <p>Most student decks are not badly written. They are inconsistent, crowded and hard to read from the back of the room, which is exactly what a redesign fixes.</p>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 860, margin: "48px auto 0" }}>
            <div style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 20 }}>Your slides today</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {BEFORE.map((p) => (
                  <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <XIcon />
                    <span style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.5 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "linear-gradient(135deg, rgba(31,107,107,0.05), rgba(232,102,90,0.03))", border: "1px solid rgba(31,107,107,0.25)", borderRadius: 16, padding: "28px 32px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1F6B6B", marginBottom: 20 }}>After PitchBoost</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {AFTER.map((w) => (
                  <div key={w} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckIcon />
                    <span style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.5 }}>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>How it works</span></div>
            <h2>Upload, choose, done</h2>
            <p>No design skills and no starting over. It works the night before the deadline.</p>
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
        </div>
      </section>

      {/* Your work, your words + link */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 960, margin: "0 auto" }}>
            <div style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
              <div className="section-label" style={{ marginBottom: 14 }}><span>Your work, your words</span></div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 10 }}>You decide how much changes</h3>
              <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, margin: 0 }}>
                Keep your wording exactly as written and PitchBoost changes only the design, or let it tighten crowded slides. Your numbers are always carried over exactly. If your course has rules about AI-written content, the keep-my-wording option is the one to use, and the research and argument stay yours either way.
              </p>
            </div>
            <div style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "28px 32px" }}>
              <div className="section-label" style={{ marginBottom: 14 }}><span>Share it as a link</span></div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 10 }}>Know when it has been opened</h3>
              <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.7, margin: 0 }}>
                Send your professor or your group a link instead of an attachment and you can see when it has been opened. It looks the same on every laptop and phone, with no missing fonts, and you can still download a PowerPoint or PDF if the course site asks for a file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>What it costs</span></div>
            <h2>Free for your next class presentation</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, maxWidth: 760, margin: "40px auto 0" }}>
            <div style={{ background: "var(--ds-bg-light)", border: "1px solid var(--ds-border)", borderRadius: 16, padding: "26px 28px" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ds-text-primary)" }}>Free</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "var(--ds-dark)", margin: "6px 0 12px" }}>$0</div>
              <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>One deck a month, up to 10 slides, with a small PitchBoost badge. Enough for a typical class presentation.</p>
            </div>
            <div style={{ background: "linear-gradient(135deg, rgba(31,107,107,0.05), rgba(232,102,90,0.03))", border: "1px solid rgba(31,107,107,0.25)", borderRadius: 16, padding: "26px 28px" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#1F6B6B" }}>Starter</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "var(--ds-dark)", margin: "6px 0 12px" }}>$9<span style={{ fontSize: 15, fontWeight: 600, color: "var(--ds-text-secondary)" }}>/mo</span></div>
              <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", lineHeight: 1.65, margin: 0 }}>No badge, decks up to 50 slides, about five decks a month. Cancel anytime.</p>
            </div>
          </div>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--ds-text-secondary)", marginTop: 20 }}>
            All plans on the <Link href="/pricing" style={{ color: "#1F6B6B", fontWeight: 600 }}>pricing page</Link>.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="mkt-section" style={{ background: "var(--ds-bg-light)" }}>
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Guides</span></div>
            <h2>Presentation guides for students</h2>
          </div>
          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, maxWidth: 900, margin: "40px auto 0" }}>
            {GUIDES.map(({ label, desc, href }) => (
              <Link key={href} href={href} style={{ textDecoration: "none" }}>
                <div style={{ background: "var(--ds-bg)", border: "1px solid var(--ds-border)", borderRadius: 14, padding: "20px 22px", height: "100%" }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ds-text-primary)", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 13, color: "var(--ds-text-secondary)", lineHeight: 1.5 }}>{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="section-header wide-header fade-up">
            <div className="section-label"><span>Questions</span></div>
            <h2>Common questions from students</h2>
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
            Guías en{" "}
            <Link href="/es/redesign" hrefLang="es" style={{ color: "#1F6B6B", fontWeight: 600 }}>Español</Link>
            {" "}· Guias em{" "}
            <Link href="/pt/redesign" hrefLang="pt" style={{ color: "#1F6B6B", fontWeight: 600 }}>Português</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box fade-up">
            <h2>Presenting soon? Make the slides match the work.</h2>
            <p>Upload your presentation and get it back clean, consistent and ready to present, in a few minutes.</p>
            <a href={SIGNUP_REBUILD} className="btn btn-primary btn-lg">Redesign My Slides</a>
          </div>
        </div>
      </section>
    </>
  );
}
