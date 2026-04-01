"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";

function smoothScrollTo(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function MarketingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  function handleHash(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    e.preventDefault();
    closeMobile();
    smoothScrollTo(hash);
    window.history.pushState(null, "", hash);
  }

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
        <div className="mkt-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Link href="/" className="nav-logo">
            <Image src="/icon.png" alt="PitchBoost" width={34} height={34} priority />
            PitchBoost
          </Link>

          <div className="nav-links">
            <a href="#how-it-works" onClick={(e) => handleHash(e, "#how-it-works")}>How It Works</a>
            <a href="#pricing" onClick={(e) => handleHash(e, "#pricing")}>Pricing</a>
          </div>

          <div className="nav-actions">
            <a href={`${APP_URL}/auth/login`} className="btn btn-secondary">Log In</a>
            <a href={`${APP_URL}/auth/signup`} className="btn btn-primary">Get Started</a>
          </div>

          <button className="mobile-toggle" id="mobileToggle" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " active" : ""}`} id="mobileMenu">
        <button className="mobile-menu-close" id="mobileClose" aria-label="Close menu" onClick={closeMobile}>&times;</button>

        <a href="#how-it-works" className="mobile-menu-link" onClick={(e) => handleHash(e, "#how-it-works")}>How It Works</a>
        <a href="#pricing" className="mobile-menu-link" onClick={(e) => handleHash(e, "#pricing")}>Pricing</a>

        <a href={`${APP_URL}/auth/login`} className="btn btn-secondary" onClick={closeMobile}>Log In</a>
        <a href={`${APP_URL}/auth/signup`} className="btn btn-primary" onClick={closeMobile}>Get Started</a>
      </div>
    </>
  );
}
