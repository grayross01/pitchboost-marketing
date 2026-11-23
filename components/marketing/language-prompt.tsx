"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LANGUAGE_PROMPT, PROMPT_STORAGE_KEY, pageIn, promptLanguage, type OtherLocale, type PageLanguages } from "@/lib/language-choice";
import { localeDir } from "@/lib/locale-dir";

function readStored(): string | null {
  try {
    return window.localStorage.getItem(PROMPT_STORAGE_KEY);
  } catch {
    return null;
  }
}

function store(value: string) {
  try {
    window.localStorage.setItem(PROMPT_STORAGE_KEY, value);
  } catch {
    // Storage blocked: the prompt simply comes back on the next page.
  }
}

/**
 * A small, quiet note on an English page for a visitor whose browser prefers
 * a language this page also exists in: "Diese Seite gibt es auch auf
 * Deutsch." with a link to that page and a close button. It is worked out in
 * the browser after the page has loaded (navigator.languages), so the page's
 * own markup, and what search engines read, is the English page unchanged,
 * and it never redirects. It sits over the corner of the page instead of
 * pushing anything down, speaks the visitor's language (right to left for
 * Arabic), and stays away once closed or followed. app/root-shell.tsx puts it
 * on every English page; `pages` says which pages exist in which languages.
 */
export default function LanguagePrompt({ pages }: { pages: PageLanguages }) {
  const pathname = usePathname();
  const [offer, setOffer] = useState<OtherLocale | null>(null);
  // The words arrive a moment after the (empty) box, so a screen reader announces them.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
    setOffer(
      promptLanguage({
        pathname: pathname ?? "/",
        languages: navigator.languages?.length ? navigator.languages : [navigator.language],
        pages,
        referrer: document.referrer,
        origin: window.location.origin,
        stored: readStored(),
      }),
    );
  }, [pathname, pages]);

  useEffect(() => {
    if (!offer) return;
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, [offer]);

  if (!offer) return null;
  const t = LANGUAGE_PROMPT[offer];
  const close = () => {
    store("closed");
    setOffer(null);
  };
  return (
    <div
      className="lang-prompt"
      role="region"
      aria-label={t.label}
      aria-live="polite"
      lang={offer}
      dir={localeDir(offer)}
      onKeyDown={(e) => {
        if (e.key === "Escape") close();
      }}
    >
      {ready && (
        <>
          <p>
            {t.text}{" "}
            <a href={pageIn(offer, pathname ?? "/")} hrefLang={offer} onClick={() => store(offer)}>
              {t.link}
            </a>
          </p>
          <button type="button" onClick={close} aria-label={t.close} title={t.close}>
            <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M 6 6 L 18 18 M 18 6 L 6 18" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
