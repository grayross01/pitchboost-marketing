"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES, INDUSTRY_GROUPS } from "@/lib/industries";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const LOGIN_URL = `${APP_URL}/login`;
const SIGNUP_URL = `${APP_URL}/signup`;

const industryMap = Object.fromEntries(INDUSTRIES.map((i) => [i.slug, i]));

function smoothScrollTo(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function ChevronDown({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function MarketingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

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
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  }

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileIndustriesOpen(false);
  }, []);

  function handleHash(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    if (!isHome) return;
    e.preventDefault();
    closeMobile();
    smoothScrollTo(hash);
    window.history.pushState(null, "", hash);
  }

  function hashHref(hash: string) {
    return isHome ? hash : `/${hash}`;
  }

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
        <div className="mkt-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Link href="/" className="nav-logo">
            <Image src="/icon.png" alt="PitchBoost" width={34} height={34} priority />
            PitchBoost
          </Link>

          <div className="nav-links" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <a href={hashHref("#features")} onClick={(e) => handleHash(e, "#features")}>Features</a>
            <a href={hashHref("#how-it-works")} onClick={(e) => handleHash(e, "#how-it-works")}>How It Works</a>
            <a href={hashHref("#pricing")} onClick={(e) => handleHash(e, "#pricing")}>Pricing</a>

            {/* By Industry dropdown */}
            <div
              ref={dropdownRef}
              style={{ position: "relative" }}
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`nav-industry-trigger${dropdownOpen ? " open" : ""}`}
                aria-expanded={dropdownOpen}
              >
                By Industry <ChevronDown />
              </button>

              {dropdownOpen && (
                <div className="nav-dropdown">
                  {INDUSTRY_GROUPS.map((group) => (
                    <div key={group.label}>
                      <div className="nav-dropdown-group-label">{group.label}</div>
                      {group.slugs.map((slug) => {
                        const ind = industryMap[slug];
                        if (!ind) return null;
                        return (
                          <Link key={slug} href={`/industries/${slug}`} onClick={() => setDropdownOpen(false)}>
                            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#1F6B6B", marginRight: 9, flexShrink: 0, verticalAlign: "middle", position: "relative", top: -1 }} />
                            {ind.navLabel}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                  <div className="nav-dropdown-footer">
                    <Link href="/industries" onClick={() => setDropdownOpen(false)}>
                      View all industries →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog">Blog</Link>
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

      <div className={`mobile-menu${mobileOpen ? " active" : ""}`} id="mobileMenu">
        <button className="mobile-menu-close" id="mobileClose" aria-label="Close menu" onClick={closeMobile}>&times;</button>

        <a href={hashHref("#features")} className="mobile-menu-link" onClick={(e) => handleHash(e, "#features")}>Features</a>
        <a href={hashHref("#how-it-works")} className="mobile-menu-link" onClick={(e) => handleHash(e, "#how-it-works")}>How It Works</a>
        <a href={hashHref("#pricing")} className="mobile-menu-link" onClick={(e) => handleHash(e, "#pricing")}>Pricing</a>

        {/* Mobile industries expand */}
        <button
          className="mobile-industry-toggle"
          onClick={() => setMobileIndustriesOpen((v) => !v)}
          aria-expanded={mobileIndustriesOpen}
        >
          By Industry
          <span style={{ transition: "transform 0.2s", display: "inline-block", transform: mobileIndustriesOpen ? "rotate(180deg)" : "none" }}>
            <ChevronDown size={16} />
          </span>
        </button>

        {mobileIndustriesOpen && (
          <div className="mobile-industry-list">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} onClick={closeMobile}>
                {ind.navLabel}
              </Link>
            ))}
            <Link href="/industries" onClick={closeMobile} style={{ fontWeight: 600, color: "#1F6B6B", marginTop: 4 }}>
              View all →
            </Link>
          </div>
        )}

        <Link href="/blog" className="mobile-menu-link" onClick={closeMobile}>Blog</Link>

        <a href={LOGIN_URL} className="btn btn-secondary" onClick={closeMobile}>Log In</a>
        <a href={SIGNUP_URL} className="btn btn-primary" onClick={closeMobile}>Get Started</a>
      </div>
    </>
  );
}
