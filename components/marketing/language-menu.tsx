"use client";

import { useEffect, useRef } from "react";
import { LOCALE_NAME, type Locale } from "@/lib/locales";
import { rememberLanguage, type LanguageLink } from "@/lib/language-choice";

/** A globe: the sign for "language" that needs no language to read. */
export function GlobeIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.5 3.9 5.5 3.9 9s-1.3 6.5-3.9 9c-2.6-2.5-3.9-5.5-3.9-9S9.4 5.5 12 3z" />
    </svg>
  );
}

/**
 * The language menu in the top bar: a globe with the page's language, on
 * every page and at every width. It does nothing until it is pressed. Then it
 * lists the site's languages by their own names; picking one leads to this
 * page in that language (that language's home page where the page has no
 * such version) and is remembered for the app (lib/language-choice.ts).
 *
 * The top bar holds which of its menus is open, so opening one closes the
 * others: `open` and `onOpenChange` come from it (navbar.tsx). `label` is
 * the word "Language" in the page's language, for a screen reader.
 */
export default function LanguageMenu({
  links,
  current,
  label,
  open,
  onOpenChange,
}: {
  links: LanguageLink[];
  current: Locale;
  label: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  // Open, it closes on a press anywhere else and on Escape.
  useEffect(() => {
    if (!open) return;
    const onPress = (e: PointerEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) onOpenChange(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      onOpenChange(false);
      trigger.current?.focus();
    };
    document.addEventListener("pointerdown", onPress);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPress);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  return (
    <div className="nav-language" ref={root}>
      <button
        ref={trigger}
        type="button"
        className={`nav-language-trigger${open ? " open" : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${label}: ${LOCALE_NAME[current]}`}
        onClick={() => onOpenChange(!open)}
      >
        <GlobeIcon />
        <span className="nav-language-code">{current.toUpperCase()}</span>
        <svg className="nav-language-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul className="nav-language-menu" aria-label={label}>
          {links.map(({ locale, href, current: here }) => (
            <li key={locale}>
              <a
                href={href}
                hrefLang={locale}
                lang={locale}
                aria-current={here ? "true" : undefined}
                onClick={(e) => {
                  rememberLanguage(locale);
                  // Already on this language: remember it and stay put.
                  if (here) {
                    e.preventDefault();
                    onOpenChange(false);
                  }
                }}
              >
                <span>{LOCALE_NAME[locale]}</span>
                {here && (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="5 12.5 10 17.5 19 7" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
