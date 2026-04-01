import Link from "next/link";
import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/auth/login?screen_hint=signup&returnTo=/dashboard`;

const PRODUCT_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
] as const;

const COMPANY_LINKS = [
  { label: "Contact", href: "mailto:support@pitchboost.ai" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;

export default function MarketingFooter() {
  return (
    <footer className="footer">
      <div className="mkt-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo" style={{ color: "white" }}>
              <Image src="/icon.png" alt="PitchBoost" width={28} height={28} />
              PitchBoost
            </Link>
            <p>
              AI-powered pitch deck builder for dealmakers. Create stunning,
              interactive presentations from your deal info and brand assets,
              publish them instantly, and track viewer engagement.
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
              <li>
                <a href={SIGNUP_URL}>Get Started</a>
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
