/**
 * The root layout applies the title template "%s | PitchBoost". Pages whose
 * title already ends with the suffix (most data-driven metaTitles do) were
 * rendering "... | PitchBoost | PitchBoost". Route every page title through
 * this so the suffix appears exactly once.
 */
export function siteTitle(title: string): string | { absolute: string } {
  return /\|\s*PitchBoost\s*$/i.test(title) ? { absolute: title } : title;
}
