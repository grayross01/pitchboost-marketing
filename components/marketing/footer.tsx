import Link from "next/link";
import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

const PRODUCT_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Get Started", href: SIGNUP_URL },
] as const;

const COMPANY_LINKS = [
  { label: "Contact", href: "mailto:support@pitchboost.ai" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;

const INDUSTRY_LINKS = [
  { label: "B2B Sales Teams", href: "/industries/b2b-sales" },
  { label: "Agencies", href: "/industries/agencies" },
  { label: "SaaS & Technology", href: "/industries/saas" },
  { label: "Startups", href: "/industries/startups" },
  { label: "Home Services", href: "/industries/home-services" },
  { label: "Commercial Real Estate", href: "/industries/commercial-real-estate" },
  { label: "Real Estate Agents", href: "/industries/real-estate-agents" },
  { label: "Consultancies", href: "/industries/consultancies" },
  { label: "Nonprofits", href: "/industries/nonprofits" },
] as const;

export default function MarketingFooter() {
  return (
    <footer className="footer">
      <div className="mkt-container">
        <div className="footer-grid" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
          <div className="footer-brand">
            <Link href="/" className="nav-logo" style={{ color: "white" }}>
              <Image src="/icon.png" alt="PitchBoost" width={28} height={28} />
              PitchBoost
            </Link>
            <p>
              AI-powered pitch deck builder for anyone who pitches. Create personalized,
              branded presentations in under 60 seconds, publish instantly, and track viewer engagement.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>By Industry</h4>
            <ul>
              {INDUSTRY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
              <li>
                <Link href="/industries" style={{ fontWeight: 600 }}>View all →</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  {href.startsWith("mailto:") ? (
                    <a href={href}>{label}</a>
                  ) : (
                    <Link href={href}>{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PitchBoost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
