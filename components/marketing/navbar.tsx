"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AUDIENCE_GROUPS, INDUSTRIES, INDUSTRY_GROUPS } from "@/lib/industries";
import { FEATURES, FEATURE_EXTRA_LINKS, FEATURE_GROUPS } from "@/lib/features";
import { MENU_COPY, chromeArrow, chromeLink, localeOfPath } from "@/lib/chrome-i18n";
import { localeDir } from "@/lib/locale-dir";

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
  // The /es, /pt, /fr and /ar pages are in the visitor's language, and so is
  // the menu around them (its words are in lib/chrome-i18n.ts). A link leads to
  // the page in that language where the site has one, and to the English page,
  // marked hreflang="en", where it does not. Arabic reads right to left.
  const navLocale = localeOfPath(pathname);
  const t = MENU_COPY[navLocale];
  const to = (href: string) => chromeLink(navLocale, href);
  const go = chromeArrow(navLocale);
  const rtl = localeDir(navLocale) === "rtl";
  const dir = rtl ? { dir: "rtl" as const } : {};
  const home = to("/");
  const presentations = to("/ai-presentation-maker");
  const pricing = to("/pricing");
  const everyone = to("/industries");
  const compare = to("/compare");
  const blog = to("/blog");

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
    // Indented on the side the menu reads from.
    padding: rtl ? "12px 36px 12px 24px" : "12px 24px 12px 36px",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "var(--ds-text-secondary)",
    textDecoration: "none",
    borderBottom: "1px solid var(--ds-border)",
  };

  const dot = (
    <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#1F6B6B", ...(rtl ? { marginLeft: 9 } : { marginRight: 9 }), flexShrink: 0, verticalAlign: "middle", position: "relative", top: -1 }} />
  );

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar" {...dir}>
        <div className="mkt-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Link href={home.href} className="nav-logo">
            <Image src="/icon.png" alt="PitchBoost" width={34} height={34} priority />
            PitchBoost
          </Link>

          {/* Centred on the page in English. The other languages' words are longer, so there the links take the room between the logo and the buttons, and centre in that. */}
          <div className="nav-links" style={navLocale === "en" ? { position: "absolute", left: "50%", transform: "translateX(-50%)" } : { flex: "1 1 auto", justifyContent: "center" }}>

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
                {`${t.features} `}<ChevronDown />
              </button>

              {/* In English this hangs centred under its button. In the other languages the links sit nearer the logo, so it
                  opens from the button's start edge toward the middle of the page (leftward in Arabic) and stays on screen. */}
              {activeDropdown === "features" && (
                <div className="nav-dropdown" style={navLocale === "en" ? { gridTemplateColumns: "auto auto auto" } : { gridTemplateColumns: "auto auto auto", insetInlineStart: 0, insetInlineEnd: "auto", transform: "none" }}>
                  {FEATURE_GROUPS.map((group) => (
                    <div key={group.label}>
                      <div className="nav-dropdown-group-label">{t.names.featureGroups[group.label]}</div>
                      {group.slugs.map((slug) => {
                        const feat = featureMap[slug];
                        if (!feat) return null;
                        const link = to(`/features/${slug}`);
                        return (
                          <Link key={slug} href={link.href} hrefLang={link.hrefLang} onClick={() => setActiveDropdown(null)}>
                            {dot}
                            {t.names.features[slug]}
                          </Link>
                        );
                      })}
                      {FEATURE_EXTRA_LINKS.filter((l) => l.group === group.label).map((l) => {
                        const link = to(l.href);
                        return (
                          <Link key={l.href} href={link.href} hrefLang={link.hrefLang} onClick={() => setActiveDropdown(null)}>
                            {dot}
                            {t.names.featureExtras[l.href]}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href={presentations.href} hrefLang={presentations.hrefLang}>{t.presentations}</Link>
            <Link href={pricing.href} hrefLang={pricing.hrefLang}>{t.pricing}</Link>

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
                {`${t.whoFor} `}<ChevronDown />
              </button>

              {activeDropdown === "industry" && (
                <div className="nav-dropdown">
                  {INDUSTRY_GROUPS.slice(0, 3).map((group, gi) => (
                    <div key={group.label}>
                      <div className="nav-dropdown-group-label">{t.names.industryGroups[group.label]}</div>
                      {group.slugs.map((slug) => {
                        const ind = industryMap[slug];
                        if (!ind) return null;
                        const link = to(`/industries/${slug}`);
                        return (
                          <Link key={slug} href={link.href} hrefLang={link.hrefLang} onClick={() => setActiveDropdown(null)}>
                            {dot}
                            {t.names.industries[slug]}
                          </Link>
                        );
                      })}
                      {/* Groups past the third stack under the first column. */}
                      {gi === 0 && INDUSTRY_GROUPS.slice(3).map((extra) => (
                        <div key={extra.label} style={{ marginTop: 14 }}>
                          <div className="nav-dropdown-group-label">{t.names.industryGroups[extra.label]}</div>
                          {extra.slugs.map((slug) => {
                            const ind = industryMap[slug];
                            if (!ind) return null;
                            const link = to(`/industries/${slug}`);
                            return (
                              <Link key={slug} href={link.href} hrefLang={link.hrefLang} onClick={() => setActiveDropdown(null)}>
                                {dot}
                                {t.names.industries[slug]}
                              </Link>
                            );
                          })}
                        </div>
                      ))}
                      {/* The grid is three columns; the non-industry audiences
                          stack under the second, the shortest group. */}
                      {gi === 1 && AUDIENCE_GROUPS.map((aud) => (
                        <div key={aud.label} style={{ marginTop: 14 }}>
                          <div className="nav-dropdown-group-label">{t.names.industryGroups[aud.label]}</div>
                          {aud.links.map((l) => {
                            const link = to(l.href);
                            return (
                              <Link key={l.href} href={link.href} hrefLang={link.hrefLang} onClick={() => setActiveDropdown(null)}>
                                {dot}
                                {t.names.audiences[l.href]}
                              </Link>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="nav-dropdown-footer">
                    <Link href={everyone.href} hrefLang={everyone.hrefLang} onClick={() => setActiveDropdown(null)}>
                      {`${t.everyone} ${go}`}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href={compare.href} hrefLang={compare.hrefLang}>{t.compare}</Link>
            <Link href={blog.href} hrefLang={blog.hrefLang}>{t.blog}</Link>

          </div>

          <div className="nav-actions">
            <a href={LOGIN_URL} className="btn btn-secondary">{t.logIn}</a>
            <a href={SIGNUP_URL} className="btn btn-primary">{t.start}</a>
          </div>

          <button className="mobile-toggle" id="mobileToggle" aria-label={t.openMenu} onClick={() => setMobileOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        id="mobileMenu"
        {...dir}
        style={{
          display: mobileOpen ? "flex" : "none",
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "white", zIndex: 1001,
          flexDirection: "column", alignItems: "stretch",
          overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 72, borderBottom: "1px solid var(--ds-border)", flexShrink: 0 }}>
          <Link href={home.href} className="nav-logo" onClick={closeMobile} style={{ fontSize: 16 }}>
            <Image src="/icon.png" alt="PitchBoost" width={28} height={28} priority />
            PitchBoost
          </Link>
          <button onClick={closeMobile} aria-label={t.closeMenu} style={{ background: "none", border: "none", fontSize: "1.75rem", cursor: "pointer", color: "var(--ds-dark)", lineHeight: 1, padding: "4px 8px" }}>&times;</button>
        </div>

        {/* Features accordion */}
        <button
          onClick={() => setMobileSection((v) => v === "features" ? null : "features")}
          aria-expanded={mobileSection === "features"}
          style={{ ...navItemStyle, display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", borderBottom: "1px solid var(--ds-border)", cursor: "pointer", fontFamily: "inherit" }}
        >
          {t.features}
          <span style={{ transition: "transform 0.2s", display: "inline-block", transform: mobileSection === "features" ? "rotate(180deg)" : "none" }}>
            <ChevronDown size={16} />
          </span>
        </button>

        {mobileSection === "features" && (
          <div style={{ background: "var(--ds-bg-light)", borderBottom: "1px solid var(--ds-border)" }}>
            {FEATURE_EXTRA_LINKS.map((l) => {
              const link = to(l.href);
              return (
                <Link key={l.href} href={link.href} hrefLang={link.hrefLang} onClick={closeMobile} style={subItemStyle}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1F6B6B", flexShrink: 0, display: "inline-block" }} />
                  {t.names.featureExtras[l.href]}
                </Link>
              );
            })}
            {FEATURES.map((feat) => {
              const link = to(`/features/${feat.slug}`);
              return (
                <Link key={feat.slug} href={link.href} hrefLang={link.hrefLang} onClick={closeMobile} style={subItemStyle}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1F6B6B", flexShrink: 0, display: "inline-block" }} />
                  {t.names.features[feat.slug]}
                </Link>
              );
            })}
          </div>
        )}

        <Link href={presentations.href} hrefLang={presentations.hrefLang} onClick={closeMobile} style={navItemStyle}>{t.presentations}</Link>
        <Link href={pricing.href} hrefLang={pricing.hrefLang} onClick={closeMobile} style={navItemStyle}>{t.pricing}</Link>

        {/* Who it's for accordion */}
        <button
          onClick={() => setMobileSection((v) => v === "industry" ? null : "industry")}
          aria-expanded={mobileSection === "industry"}
          style={{ ...navItemStyle, display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", borderBottom: "1px solid var(--ds-border)", cursor: "pointer", fontFamily: "inherit" }}
        >
          {t.whoFor}
          <span style={{ transition: "transform 0.2s", display: "inline-block", transform: mobileSection === "industry" ? "rotate(180deg)" : "none" }}>
            <ChevronDown size={16} />
          </span>
        </button>

        {mobileSection === "industry" && (
          <div style={{ background: "var(--ds-bg-light)", borderBottom: "1px solid var(--ds-border)" }}>
            {AUDIENCE_GROUPS.flatMap((aud) => aud.links).map((l) => {
              const link = to(l.href);
              return (
                <Link key={l.href} href={link.href} hrefLang={link.hrefLang} onClick={closeMobile} style={subItemStyle}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1F6B6B", flexShrink: 0, display: "inline-block" }} />
                  {t.names.audiences[l.href]}
                </Link>
              );
            })}
            {INDUSTRIES.map((ind) => {
              const link = to(`/industries/${ind.slug}`);
              return (
                <Link key={ind.slug} href={link.href} hrefLang={link.hrefLang} onClick={closeMobile} style={subItemStyle}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1F6B6B", flexShrink: 0, display: "inline-block" }} />
                  {t.names.industries[ind.slug]}
                </Link>
              );
            })}
            <Link href={everyone.href} hrefLang={everyone.hrefLang} onClick={closeMobile} style={{ ...subItemStyle, fontWeight: 700, color: "#1F6B6B" }}>
              {`${t.everyone} ${go}`}
            </Link>
          </div>
        )}

        <Link href={compare.href} hrefLang={compare.hrefLang} onClick={closeMobile} style={navItemStyle}>{t.compare}</Link>
        <Link href={blog.href} hrefLang={blog.hrefLang} onClick={closeMobile} style={navItemStyle}>{t.blog}</Link>

        <div style={{ padding: "24px 24px 40px", display: "flex", flexDirection: "column", gap: 12, marginTop: "auto" }}>
          <a href={LOGIN_URL} className="btn btn-secondary" onClick={closeMobile} style={{ width: "100%", textAlign: "center" }}>{t.logIn}</a>
          <a href={SIGNUP_URL} className="btn btn-primary" onClick={closeMobile} style={{ width: "100%", textAlign: "center", color: "white" }}>{t.start}</a>
        </div>
      </div>
    </>
  );
}
