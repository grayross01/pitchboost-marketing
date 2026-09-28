import { getAllPosts, type BlogPostMeta } from "@/lib/blog";

/**
 * Blog guides to show on specific /redesign and /answers pages, most relevant
 * first. Pages not listed here (and any leftover slots) fall back to the
 * newest posts tagged "Redesign". Add a new guide here when it answers the
 * same question a page is cited for, so the guide is not an orphan.
 */
const GUIDES_BY_REDESIGN: Record<string, string[]> = {
  "powerpoint-redesign": ["class-presentation", "fix-slides-with-too-much-text", "fix-inconsistent-fonts-and-layouts", "fix-broken-chart-in-powerpoint"],
  "make-powerpoint-look-professional": ["fix-slides-with-too-much-text", "fix-inconsistent-fonts-and-layouts", "fix-broken-chart-in-powerpoint", "class-presentation"],
  "fix-ugly-powerpoint": ["fix-slides-with-too-much-text", "fix-inconsistent-fonts-and-layouts", "fix-broken-chart-in-powerpoint"],
  "beautify-powerpoint": ["fix-slides-with-too-much-text", "fix-inconsistent-fonts-and-layouts", "class-presentation"],
  "modernize-old-powerpoint": ["fix-inconsistent-fonts-and-layouts", "fix-slides-with-too-much-text"],
  "powerpoint-makeover-before-and-after": ["fix-slides-with-too-much-text", "fix-broken-chart-in-powerpoint", "fix-inconsistent-fonts-and-layouts"],
  "data-heavy-deck-redesign": ["fix-broken-chart-in-powerpoint", "fix-slides-with-too-much-text"],
  "rebrand-presentation": ["fix-inconsistent-fonts-and-layouts", "how-to-rebrand-a-presentation"],
  "change-powerpoint-template": ["fix-inconsistent-fonts-and-layouts", "how-to-rebrand-a-presentation"],
  "board-deck-redesign": ["board-presentation", "fix-broken-chart-in-powerpoint", "fix-slides-with-too-much-text"],
  "qbr-deck-redesign": ["qbr-deck", "fix-broken-chart-in-powerpoint"],
  "training-deck-redesign": ["lecture-academic-slides", "fix-slides-with-too-much-text"],
  "conference-talk-slides-redesign": ["conference-presentation-design", "fix-broken-chart-in-powerpoint"],
  "consulting-slides-redesign": ["fix-slides-with-too-much-text", "fix-broken-chart-in-powerpoint"],
  "google-slides-and-keynote-redesign": ["how-to-redesign-google-slides-or-keynote-with-ai", "fix-inconsistent-fonts-and-layouts"],
  "google-slides-to-powerpoint": ["how-to-redesign-google-slides-or-keynote-with-ai", "fix-broken-chart-in-powerpoint"],
  "keynote-to-powerpoint": ["how-to-redesign-google-slides-or-keynote-with-ai", "fix-inconsistent-fonts-and-layouts"],
  "powerpoint-designer-alternative": ["fix-slides-with-too-much-text", "fix-inconsistent-fonts-and-layouts", "word-document-to-powerpoint"],
  "proposal-deck-redesign": ["word-document-to-powerpoint", "pdf-to-editable-powerpoint"],
};

const GUIDES_BY_ANSWER: Record<string, string[]> = {
  "can-ai-redesign-an-existing-powerpoint": ["can-chatgpt-make-slides", "how-to-redesign-an-existing-powerpoint-with-ai", "class-presentation"],
  "can-claude-make-a-powerpoint": ["can-chatgpt-make-slides", "powerpoint-from-claude-code-mcp"],
  "can-copilot-redesign-a-powerpoint": ["word-document-to-powerpoint", "can-chatgpt-make-slides"],
  "what-is-a-powerpoint-mcp-server": ["powerpoint-from-claude-code-mcp", "cursor-pitch-deck-workflow"],
  "what-makes-a-pitch-deck-look-professional": ["fix-slides-with-too-much-text", "fix-inconsistent-fonts-and-layouts", "fix-broken-chart-in-powerpoint"],
  "how-to-rebrand-a-presentation": ["how-to-rebrand-a-presentation", "fix-inconsistent-fonts-and-layouts"],
};

function resolve(slugs: string[] | undefined, fallbackTag: string | null, limit: number): BlogPostMeta[] {
  const posts = getAllPosts();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const out: BlogPostMeta[] = [];
  for (const s of slugs ?? []) {
    const p = bySlug.get(s);
    if (p && !out.includes(p)) out.push(p);
  }
  if (fallbackTag) {
    for (const p of posts) {
      if (out.length >= limit) break;
      if (p.tags.includes(fallbackTag) && !out.includes(p)) out.push(p);
    }
  }
  return out.slice(0, limit);
}

export function guidesForRedesign(slug: string, limit = 6): BlogPostMeta[] {
  return resolve(GUIDES_BY_REDESIGN[slug], "Redesign", limit);
}

export function guidesForAnswer(slug: string, limit = 4): BlogPostMeta[] {
  return resolve(GUIDES_BY_ANSWER[slug], null, limit);
}
