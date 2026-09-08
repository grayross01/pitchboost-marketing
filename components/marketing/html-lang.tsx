"use client";

import { useEffect } from "react";

/** The root layout renders <html lang="en"> for the whole site. Localized
 *  pages correct the document language on mount so assistive tech and
 *  translation tools read them as Spanish or Portuguese; the wrapper's own
 *  lang attribute covers the server-rendered HTML. */
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev || "en";
    };
  }, [lang]);
  return null;
}
