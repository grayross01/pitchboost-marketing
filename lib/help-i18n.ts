/**
 * Chrome strings for the help center in each locale. Article copy is data
 * (lib/help*.ts); these are the labels around it.
 */
import type { Locale } from "./redesign-i18n";
import type { HelpCategory } from "./help";
import { HELP_UI_AR } from "./i18n.ar";

export interface HelpUi {
  hubTitle: string;
  hubMetaTitle: string;
  hubMetaDescription: string;
  hubSubhead: string;
  breadcrumbHome: string;
  breadcrumbHub: string;
  stepsLabel: string;
  faqLabel: string;
  relatedLabel: string;
  updatedLabel: string;
  supportTitle: string;
  supportBody: string;
  supportCta: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  alsoIn: string;
  categories: Record<HelpCategory, string>;
}

export const HELP_UI: Record<Locale, HelpUi> = {
  en: {
    hubTitle: "Help center",
    hubMetaTitle: "PitchBoost Help Center: Redesign, Download, Share, ChatGPT and Claude",
    hubMetaDescription:
      "Short, literal answers to how PitchBoost works: redesigning a PowerPoint, slide limits by plan, downloading PowerPoint or PDF, sharing links, using it from ChatGPT or Claude, and credits.",
    hubSubhead: "Straight answers with the real steps and the real numbers. If yours is not here, email us and we will add it.",
    breadcrumbHome: "Home",
    breadcrumbHub: "Help",
    stepsLabel: "Steps",
    faqLabel: "Questions",
    relatedLabel: "Related",
    updatedLabel: "Updated",
    supportTitle: "Still stuck?",
    supportBody: "Email support@pitchboost.ai with the link to the deck or deal. A person answers, usually within one business day.",
    supportCta: "Email support",
    ctaTitle: "Try it on your own deck",
    ctaBody: "One free AI deck a month, no credit card. Upload a PowerPoint and see the redesign for yourself.",
    ctaButton: "Upload Your Deck Free",
    alsoIn: "Also in",
    categories: {
      redesign: "Redesigning a deck",
      output: "Downloads and files",
      sharing: "Sharing and analytics",
      assistants: "ChatGPT and Claude",
      integrations: "CRM and integrations",
      account: "Plans and credits",
    },
  },
  es: {
    hubTitle: "Centro de ayuda",
    hubMetaTitle: "Centro de ayuda de PitchBoost: rediseño, descargas, enlaces, ChatGPT y Claude",
    hubMetaDescription:
      "Respuestas breves y literales sobre cómo funciona PitchBoost: rediseñar un PowerPoint, límites de diapositivas por plan, descargar PowerPoint o PDF, compartir enlaces, usarlo desde ChatGPT o Claude, y los créditos.",
    hubSubhead: "Respuestas directas con los pasos reales y las cifras reales. Si la tuya no está, escríbenos y la añadimos.",
    breadcrumbHome: "Inicio",
    breadcrumbHub: "Ayuda",
    stepsLabel: "Pasos",
    faqLabel: "Preguntas",
    relatedLabel: "Relacionado",
    updatedLabel: "Actualizado",
    supportTitle: "¿Sigues atascado?",
    supportBody: "Escribe a support@pitchboost.ai con el enlace de la presentación o del deal. Te responde una persona, normalmente en un día laborable.",
    supportCta: "Escribir a soporte",
    ctaTitle: "Pruébalo con tu propia presentación",
    ctaBody: "Una presentación con IA gratis al mes, sin tarjeta. Sube un PowerPoint y comprueba el rediseño por ti mismo.",
    ctaButton: "Sube tu presentación gratis",
    alsoIn: "También en",
    categories: {
      redesign: "Rediseñar una presentación",
      output: "Descargas y archivos",
      sharing: "Compartir y analíticas",
      assistants: "ChatGPT y Claude",
      integrations: "CRM e integraciones",
      account: "Planes y créditos",
    },
  },
  pt: {
    hubTitle: "Central de ajuda",
    hubMetaTitle: "Central de ajuda do PitchBoost: redesign, downloads, links, ChatGPT e Claude",
    hubMetaDescription:
      "Respostas curtas e diretas sobre como o PitchBoost funciona: redesenhar um PowerPoint, limites de slides por plano, baixar PowerPoint ou PDF, compartilhar links, usar pelo ChatGPT ou Claude, e créditos.",
    hubSubhead: "Respostas diretas com os passos reais e os números reais. Se a sua não está aqui, escreva para nós e adicionamos.",
    breadcrumbHome: "Início",
    breadcrumbHub: "Ajuda",
    stepsLabel: "Passos",
    faqLabel: "Perguntas",
    relatedLabel: "Relacionado",
    updatedLabel: "Atualizado",
    supportTitle: "Ainda com dúvida?",
    supportBody: "Escreva para support@pitchboost.ai com o link da apresentação ou do deal. Uma pessoa responde, normalmente em um dia útil.",
    supportCta: "Falar com o suporte",
    ctaTitle: "Teste com a sua própria apresentação",
    ctaBody: "Uma apresentação com IA grátis por mês, sem cartão. Envie um PowerPoint e veja o redesign com seus próprios olhos.",
    ctaButton: "Envie sua apresentação grátis",
    alsoIn: "Também em",
    categories: {
      redesign: "Redesenhar uma apresentação",
      output: "Downloads e arquivos",
      sharing: "Compartilhar e análises",
      assistants: "ChatGPT e Claude",
      integrations: "CRM e integrações",
      account: "Planos e créditos",
    },
  },
  fr: {
    hubTitle: "Centre d'aide",
    hubMetaTitle: "Centre d'aide PitchBoost : refonte, téléchargements, partage, ChatGPT et Claude",
    hubMetaDescription:
      "Des réponses courtes et précises sur le fonctionnement de PitchBoost : refondre un PowerPoint, limites de diapositives selon l'offre, télécharger en PowerPoint ou PDF, partager des liens, l'utiliser depuis ChatGPT ou Claude, et les crédits.",
    hubSubhead: "Des réponses directes, avec les vraies étapes et les vrais chiffres. Si la vôtre n'y figure pas, écrivez-nous et nous l'ajouterons.",
    breadcrumbHome: "Accueil",
    breadcrumbHub: "Aide",
    stepsLabel: "Étapes",
    faqLabel: "Questions",
    relatedLabel: "Voir aussi",
    updatedLabel: "Mis à jour",
    supportTitle: "Toujours besoin d'aide ?",
    supportBody: "Écrivez à support@pitchboost.ai avec le lien de la présentation ou du deal. Une vraie personne vous répond, généralement sous un jour ouvré.",
    supportCta: "Écrire au support",
    ctaTitle: "Essayez avec votre propre présentation",
    ctaBody: "Une présentation IA gratuite par mois, sans carte bancaire. Importez un PowerPoint et jugez la refonte par vous-même.",
    ctaButton: "Importez votre présentation gratuitement",
    alsoIn: "Aussi en",
    categories: {
      redesign: "Refondre une présentation",
      output: "Téléchargements et fichiers",
      sharing: "Partage et statistiques",
      assistants: "ChatGPT et Claude",
      integrations: "CRM et intégrations",
      account: "Offres et crédits",
    },
  },
  ar: HELP_UI_AR,
  de: {
    hubTitle: "Hilfe-Center",
    hubMetaTitle: "PitchBoost Hilfe-Center: Redesign, Download, Teilen, ChatGPT und Claude",
    hubMetaDescription:
      "Kurze, präzise Antworten darauf, wie PitchBoost funktioniert: PowerPoint neu gestalten, Folienlimits je Tarif, Download als PowerPoint oder PDF, Links teilen, ChatGPT, Claude und Credits.",
    hubSubhead: "Klare Antworten mit den echten Schritten und den echten Zahlen. Fehlt deine Frage, schreib uns, und wir ergänzen sie.",
    breadcrumbHome: "Startseite",
    breadcrumbHub: "Hilfe",
    stepsLabel: "Schritte",
    faqLabel: "Fragen",
    relatedLabel: "Mehr zum Thema",
    updatedLabel: "Aktualisiert am",
    supportTitle: "Kommst du nicht weiter?",
    supportBody: "Schreib an support@pitchboost.ai und schick den Link zur Präsentation oder zum Deal mit. Antworten bekommst du von einem Menschen, meist innerhalb eines Werktags.",
    supportCta: "E-Mail an den Support",
    ctaTitle: "Probier es mit deiner eigenen Präsentation",
    ctaBody: "Jeden Monat 150 Credits gratis, ohne Kreditkarte. Lade eine PowerPoint hoch und sieh dir das Redesign selbst an.",
    ctaButton: "Präsentation kostenlos hochladen",
    alsoIn: "Auch auf",
    categories: {
      redesign: "Präsentationen neu gestalten",
      output: "Downloads und Dateien",
      sharing: "Teilen und Statistiken",
      assistants: "ChatGPT und Claude",
      integrations: "CRM und Integrationen",
      account: "Tarife und Credits",
    },
  },
};

/** What follows an article's title in the browser tab and in search, where a language has its own words for it; the others keep "PitchBoost Help". */
const TITLE_SUFFIX: Partial<Record<Locale, string>> = { de: "PitchBoost Hilfe" };

/** An article's page title: "How credits and plans work | PitchBoost Help", in German "… | PitchBoost Hilfe". */
export function helpArticleTitle(locale: Locale, title: string): string {
  return `${title} | ${TITLE_SUFFIX[locale] ?? "PitchBoost Help"}`;
}

/** Languages that write the date under an article's title out in words, by their Intl tag. The others show the ISO date, as they always have. */
const LONG_DATES: Partial<Record<Locale, string>> = { de: "de-DE" };

/** The date under a help article's title: "10. November 2026" in German, "2026-11-10" where the language writes no long date. */
export function updatedDate(locale: Locale, iso: string): string {
  const tag = LONG_DATES[locale];
  if (!tag) return iso;
  return new Intl.DateTimeFormat(tag, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
}
