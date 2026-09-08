/**
 * Locale scaffolding for the /redesign cluster, the pages ChatGPT sends
 * "redesign my PowerPoint" traffic to from everywhere. English lives at the
 * root, Spanish under /es, Brazilian Portuguese under /pt; every page links
 * to its siblings with hreflang. Page copy is data (lib/redesigns*.ts); the
 * strings here are the shared chrome around it.
 */
export type Locale = "en" | "es" | "pt";

export const LOCALES: Locale[] = ["en", "es", "pt"];

export const LOCALE_PREFIX: Record<Locale, string> = { en: "", es: "/es", pt: "/pt" };

export const OG_LOCALE: Record<Locale, string> = { en: "en_US", es: "es_ES", pt: "pt_BR" };

export const LOCALE_NAME: Record<Locale, string> = { en: "English", es: "Español", pt: "Português" };

export interface RedesignUi {
  breadcrumbHome: string;
  breadcrumbHub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  finePrint: string;
  howLabel: string;
  howTitle: string;
  howBody: string;
  whyLabel: string;
  whyTitle: string;
  getLabel: string;
  getTitle: string;
  faqLabel: string;
  faqTitle: string;
  relatedLabel: string;
  relatedTitle: string;
  relatedFeatureTitle: string;
  relatedFeatureBody: string;
  relatedBulkTitle: string;
  relatedBulkBody: string;
  ctaBody: string;
  alsoIn: string;
}

export const REDESIGN_UI: Record<Locale, RedesignUi> = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbHub: "Redesign",
    ctaPrimary: "Upload Your Deck Free",
    ctaSecondary: "How the redesign works",
    finePrint: "The free plan includes one AI deck a month. No credit card.",
    howLabel: "How it works",
    howTitle: "Upload, point at your website, done",
    howBody: "The whole thing takes a few minutes, and you review the captured brand before anything generates.",
    whyLabel: "Why now",
    whyTitle: "The situation this page exists for",
    getLabel: "What you get",
    getTitle: "What comes back",
    faqLabel: "FAQ",
    faqTitle: "Common questions",
    relatedLabel: "Related",
    relatedTitle: "More ways teams use the redesign",
    relatedFeatureTitle: "Upload & Redesign",
    relatedFeatureBody: "The feature behind every page here: how the rebuild actually works.",
    relatedBulkTitle: "Bulk Rebuild",
    relatedBulkBody: "Convert a whole folder of PowerPoints into your brand in one run.",
    ctaBody: "Upload the deck, point PitchBoost at your website, and see the redesign for yourself. One free deck a month, no credit card.",
    alsoIn: "Also in",
  },
  es: {
    breadcrumbHome: "Inicio",
    breadcrumbHub: "Rediseño",
    ctaPrimary: "Sube tu presentación gratis",
    ctaSecondary: "Cómo funciona el rediseño",
    finePrint: "El plan gratuito incluye una presentación con IA al mes. Sin tarjeta de crédito.",
    howLabel: "Cómo funciona",
    howTitle: "Sube el archivo, indica tu sitio web, listo",
    howBody: "Todo tarda unos minutos, y revisas la marca detectada antes de que se genere nada.",
    whyLabel: "Por qué ahora",
    whyTitle: "La situación para la que existe esta página",
    getLabel: "Qué obtienes",
    getTitle: "Lo que recibes de vuelta",
    faqLabel: "Preguntas frecuentes",
    faqTitle: "Preguntas habituales",
    relatedLabel: "Relacionado",
    relatedTitle: "Más formas en que los equipos usan el rediseño",
    relatedFeatureTitle: "Subir y rediseñar",
    relatedFeatureBody: "La función detrás de cada página de esta sección: cómo funciona realmente la reconstrucción.",
    relatedBulkTitle: "Reconstrucción masiva",
    relatedBulkBody: "Convierte una carpeta entera de PowerPoints a tu marca en una sola pasada.",
    ctaBody: "Sube la presentación, indica a PitchBoost tu sitio web y comprueba el rediseño por ti mismo. Una presentación gratis al mes, sin tarjeta de crédito.",
    alsoIn: "También en",
  },
  pt: {
    breadcrumbHome: "Início",
    breadcrumbHub: "Redesign",
    ctaPrimary: "Envie sua apresentação grátis",
    ctaSecondary: "Como funciona o redesign",
    finePrint: "O plano gratuito inclui uma apresentação com IA por mês. Sem cartão de crédito.",
    howLabel: "Como funciona",
    howTitle: "Envie o arquivo, aponte para o seu site, pronto",
    howBody: "Tudo leva alguns minutos, e você revisa a marca capturada antes de qualquer coisa ser gerada.",
    whyLabel: "Por que agora",
    whyTitle: "A situação para a qual esta página existe",
    getLabel: "O que você recebe",
    getTitle: "O que volta para você",
    faqLabel: "Perguntas frequentes",
    faqTitle: "Dúvidas comuns",
    relatedLabel: "Relacionado",
    relatedTitle: "Outras formas de usar o redesign",
    relatedFeatureTitle: "Enviar e redesenhar",
    relatedFeatureBody: "O recurso por trás de cada página desta seção: como a reconstrução realmente funciona.",
    relatedBulkTitle: "Reconstrução em lote",
    relatedBulkBody: "Converta uma pasta inteira de PowerPoints para a sua marca de uma vez.",
    ctaBody: "Envie a apresentação, aponte o PitchBoost para o seu site e veja o redesign com seus próprios olhos. Uma apresentação grátis por mês, sem cartão de crédito.",
    alsoIn: "Também em",
  },
};

export interface RedesignHubCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subhead: string;
  sectionLabel: string;
  sectionTitle: string;
}

export const HUB_EN: RedesignHubCopy = {
  metaTitle: "PowerPoint Deck Redesign in Your Brand | PitchBoost",
  metaDescription:
    "Redesign any presentation with AI: upload the .pptx, keep the content, get back professional design in your brand in minutes. PowerPoint redesigns, pitch deck makeovers, rebrands, and sales deck refreshes.",
  h1: "Bring us the deck you have. Leave with the deck you meant.",
  subhead:
    "PitchBoost reads your PowerPoint, keeps the story, and rebuilds the design in your brand, pulled straight from your website. A few minutes, not a few weeks.",
  sectionLabel: "Pick your situation",
  sectionTitle: "Every version of “this deck needs help”",
};

/** hreflang map for a redesign path ("/redesign" or "/redesign/<slug>"). */
export function languageAlternates(path: string): Record<string, string> {
  return {
    en: path,
    es: `/es${path}`,
    pt: `/pt${path}`,
    "x-default": path,
  };
}
