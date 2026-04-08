import type { Metadata } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/auth/login?screen_hint=signup&returnTo=/dashboard`;

export const metadata: Metadata = {
  title: "Use Cases — PitchBoost",
  description:
    "See how B2B sales teams, agencies, SaaS companies, and consultancies use PitchBoost to create personalized pitch decks that win deals.",
};

const USE_CASES = [
  {
    id: "sales-teams",
    label: "B2B Sales Teams",
    headline: "Give every rep a personalized deck for every deal",
    description:
      "Your reps know the prospect — but building a custom deck for each one takes hours they don't have. PitchBoost pulls out the capabilities most relevant to that buyer and builds a deck that speaks directly to their business, so reps pitch smarter without touching a slide.",
    painPoints: [
      "Reps send the same generic deck to every prospect",
      "Hours lost customizing slides instead of selling",
      "No visibility into what resonates with buyers",
    ],
    outcomes: [
      "Each prospect gets a deck mapped to their specific pain points",
      "Reps go from prospect URL to finished deck in minutes",
      "Analytics show which slides drive engagement so reps follow up smarter",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "agencies",
    label: "Agencies",
    headline: "Pitch prospective clients with decks that speak their language",
    description:
      "When you're pitching a new client, the deck needs to feel like it was built just for them. PitchBoost maps your agency's services to what each prospect actually needs — so every pitch feels bespoke without the hours of research and design.",
    painPoints: [
      "Every pitch deck starts from scratch or a stale template",
      "Designers are bottlenecked with deck requests",
      "Hard to scale personalized pitches across multiple prospects",
    ],
    outcomes: [
      "Generate client-ready decks without waiting on design",
      "Each deck leads with the services most relevant to that prospect",
      "Consistent brand quality across every pitch, every time",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "saas",
    label: "SaaS Companies",
    headline: "Turn every enterprise prospect into a tailored pitch",
    description:
      "Enterprise deals demand more than a product overview. PitchBoost builds a deck that positions your platform as the answer to each prospect's specific challenges — so your AEs walk into every call with a pitch that already resonates.",
    painPoints: [
      "One product deck for vastly different buyer personas",
      "AEs spend more time on slides than on discovery calls",
      "Generic pitches don't land with technical or executive buyers",
    ],
    outcomes: [
      "Every prospect sees how your platform solves their problems specifically",
      "AEs generate tailored decks in minutes between calls",
      "Track which prospects engage and which slides they care about",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "consultancies",
    label: "Consultancies & Professional Services",
    headline: "Show every prospect you already understand their business",
    description:
      "When you're pitching an engagement, demonstrating that you get the client's world is half the battle. PitchBoost connects your expertise to each prospect's specific situation — so you walk in looking prepared, not generic.",
    painPoints: [
      "Proposals and pitch decks require hours of prospect research",
      "Hard to personalize at scale when pitching multiple prospects",
      "No way to know if prospects actually read your materials",
    ],
    outcomes: [
      "Walk into every pitch with a deck that shows you've done your homework",
      "Scale personalized outreach without scaling your team",
      "Viewer analytics tell you who's engaged before you follow up",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

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

export default function UseCasesPage() {
  return (
    <>
      <section className="blog-hero">
        <div className="mkt-container">
          <div className="section-label"><span>Use Cases</span></div>
          <h1>Built for teams that pitch to win</h1>
          <p>
            PitchBoost analyzes your website and your prospect&apos;s to build
            a deck that maps your strengths to their needs. Here&apos;s how
            teams are using it.
          </p>
        </div>
      </section>

      <section className="mkt-section">
        <div className="mkt-container">
          <div className="use-cases-grid">
            {USE_CASES.map((uc) => (
              <div key={uc.id} id={uc.id} className="use-case-card">
                <div className="use-case-header">
                  <div className="use-case-icon">{uc.icon}</div>
                  <div className="use-case-label">{uc.label}</div>
                </div>
                <h2>{uc.headline}</h2>
                <p className="use-case-desc">{uc.description}</p>

                <div className="use-case-columns">
                  <div className="use-case-pain">
                    <h3>The problem</h3>
                    <ul>
                      {uc.painPoints.map((p) => (
                        <li key={p}><XIcon /> {p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="use-case-outcome">
                    <h3>With PitchBoost</h3>
                    <ul>
                      {uc.outcomes.map((o) => (
                        <li key={o}><CheckIcon /> {o}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-section cta-section">
        <div className="mkt-container">
          <div className="cta-box">
            <h2>Stop sending the same deck twice</h2>
            <p>Every prospect has different pain points. Start building deal decks that speak directly to each one.</p>
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start Building Free</a>
          </div>
        </div>
      </section>
    </>
  );
}
