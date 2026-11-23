import { FAQS } from "@/components/marketing/faq-data";

/**
 * The home page's questions: the site's shared list, plus the one the newer
 * formats raise. The page's FAQ schema is written from this same list.
 */
export const HOME_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  ...FAQS,
  {
    q: "Does PitchBoost post things or run the ads for me?",
    a: "It makes them; you post them. Posts and ads download sized and named for where they go. A website is the exception: press publish and we host it.",
  },
];
