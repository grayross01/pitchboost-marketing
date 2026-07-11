"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES, INDUSTRY_GROUPS } from "@/lib/industries";
import { FEATURES, FEATURE_GROUPS } from "@/lib/features";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const LOGIN_URL = `${APP_URL}/login`;
const SIGNUP_URL = `${APP_URL}/signup`;

const industryMap = Object.fromEntries(INDUSTRIES.map((i) => [i.slug, i]));
const featureMap = Object.fromEntries(FEATURES.map((f) => [f.slug, f]));

function ChevronDown({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

type ActiveDropdown = "features" | "industry" | null;

export default function MarketingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);
  const [mobileSection, setMobileSection] = useState<"features" | "industry" | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  function openDropdown(name: ActiveDropdown) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  }

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, []);

  const navItemStyle: React.CSSProperties = {
    display: "block",
    padding: "18px 24px",
    fontSize: "1rem",
    fontWeight: 600,
    color: "var(--ds-dark)",
    textDecoration: "none",
    borderBottom: "1px solid var(--ds-border)",
  };

  const subItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 24px 12px 36px",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "var(--ds-text-secondary)",
    textDecoration: "none",
    borderBottom: "1px solid var(--ds-border)",
  };

  const dot = (
    <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#1F6B6B", marginRight: 9, flexShrink: 0, verticalAlign: "middle", position: "relative", top: -1 }} />
  );

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
        <div className="mkt-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Link href="/" className="nav-logo">
            <Image src="/icon.png" alt="PitchBoost" width={34} height={34} priority />
            PitchBoost
          </Link>

          <div className="nav-links" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>

            {/* Features dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => openDropdown("features")}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`nav-industry-trigger${activeDropdown === "features" ? " open" : ""}`}
                aria-expanded={activeDropdown === "features"}
              >
                Features <ChevronDown />
              </button>

              {activeDropdown === "features" && (
                <div className="nav-dropdown" style={{ gridTemplateColumns: "auto auto auto" }}>
                  {FEATURE_GROUPS.map((group) => (
                    <div key={group.label}>
                      <div className="nav-dropdown-group-label">{group.label}</div>
                      {group.slugs.map((slug) => {
                        const feat = featureMap[slug];
                        if (!feat) return null;
                        return (
                          <Link key={slug} href={`/features/${slug}`} onClick={() => setActiveDropdown(null)}>
                            {dot}
                            {feat.navLabel}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing">Pricing</Link>

            {/* By Industry dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => openDropdown("industry")}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`nav-industry-trigger${activeDropdown === "industry" ? " open" : ""}`}
                aria-expanded={activeDropdown === "industry"}
              >
                By Industry <ChevronDown />
              </button>

              {activeDropdown === "industry" && (
                <div className="nav-dropdown">
                  {INDUSTRY_GROUPS.map((group) => (
                    <div key={group.label}>
                      <div className="nav-dropdown-group-label">{group.label}</div>
                      {group.slugs.map((slug) => {
                        const ind = industryMap[slug];
                        if (!ind) return null;
                        return (
                          <Link key={slug} href={`/industries/${slug}`} onClick={() => setActiveDropdown(null)}>
                            {dot}
                            {ind.navLabel}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                  <div className="nav-dropdown-footer">
                    <Link href="/industries" onClick={() => setActiveDropdown(null)}>
                      View all industries →
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </div>

          <div className="nav-actions">
            <a href={LOGIN_URL} className="btn btn-secondary">Log In</a>
            <a href={SIGNUP_URL} className="btn btn-primary">Get Started</a>
          </div>

          <button className="mobile-toggle" id="mobileToggle" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        id="mobileMenu"
        style={{
          display: mobileOpen ? "flex" : "none",
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "white", zIndex: 1001,
          flexDirection: "column", alignItems: "stretch",
          overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 72, borderBottom: "1px solid var(--ds-border)", flexShrink: 0 }}>
          <Link href="/" className="nav-logo" onClick={closeMobile} style={{ fontSize: 16 }}>
            <Image src="/icon.png" alt="PitchBoost" width={28} height={28} priority />
            PitchBoost
          </Link>
          <button onClick={closeMobile} aria-label="Close menu" style={{ background: "none", border: "none", fontSize: "1.75rem", cursor: "pointer", color: "var(--ds-dark)", lineHeight: 1, padding: "4px 8px" }}>&times;</button>
        </div>

        {/* Features accordion */}
        <button
          onClick={() => setMobileSection((v) => v === "features" ? null : "features")}
          aria-expanded={mobileSection === "features"}
          style={{ ...navItemStyle, display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", borderBottom: "1px solid var(--ds-border)", cursor: "pointer", fontFamily: "inherit" }}
        >
          Features
          <span style={{ transition: "transform 0.2s", display: "inline-block", transform: mobileSection === "features" ? "rotate(180deg)" : "none" }}>
            <ChevronDown size={16} />
          </span>
        </button>

        {mobileSection === "features" && (
          <div style={{ background: "var(--ds-bg-light)", borderBottom: "1px solid var(--ds-border)" }}>
            {FEATURES.map((feat) => (
              <Link key={feat.slug} href={`/features/${feat.slug}`} onClick={closeMobile} style={subItemStyle}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1F6B6B", flexShrink: 0, display: "inline-block" }} />
                {feat.navLabel}
              </Link>
            ))}
          </div>
        )}

        <Link href="/pricing" onClick={closeMobile} style={navItemStyle}>Pricing</Link>

        {/* By Industry accordion */}
        <button
          onClick={() => setMobileSection((v) => v === "industry" ? null : "industry")}
          aria-expanded={mobileSection === "industry"}
          style={{ ...navItemStyle, display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", borderBottom: "1px solid var(--ds-border)", cursor: "pointer", fontFamily: "inherit" }}
        >
          By Industry
          <span style={{ transition: "transform 0.2s", display: "inline-block", transform: mobileSection === "industry" ? "rotate(180deg)" : "none" }}>
            <ChevronDown size={16} />
          </span>
        </button>

        {mobileSection === "industry" && (
          <div style={{ background: "var(--ds-bg-light)", borderBottom: "1px solid var(--ds-border)" }}>
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} onClick={closeMobile} style={subItemStyle}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1F6B6B", flexShrink: 0, display: "inline-block" }} />
                {ind.navLabel}
              </Link>
            ))}
            <Link href="/industries" onClick={closeMobile} style={{ ...subItemStyle, fontWeight: 700, color: "#1F6B6B" }}>
              View all industries →
            </Link>
          </div>
        )}

        <div style={{ padding: "24px 24px 40px", display: "flex", flexDirection: "column", gap: 12, marginTop: "auto" }}>
          <a href={LOGIN_URL} className="btn btn-secondary" onClick={closeMobile} style={{ width: "100%", textAlign: "center" }}>Log In</a>
          <a href={SIGNUP_URL} className="btn btn-primary" onClick={closeMobile} style={{ width: "100%", textAlign: "center", color: "white" }}>Get Started</a>
        </div>
      </div>
    </>
  );
}
