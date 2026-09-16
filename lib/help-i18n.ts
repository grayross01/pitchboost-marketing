/**
 * Chrome strings for the help center in each locale. Article copy is data
 * (lib/help*.ts); these are the labels around it.
 */
import type { Locale } from "./redesign-i18n";
import type { HelpCategory } from "./help";

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
      account: "Planos e créditos",
    },
  },
};
