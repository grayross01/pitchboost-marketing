/**
 * The words on the plan cards (components/marketing/pricing-plans.tsx) in every
 * language the site is published in. English is the source and is what /pricing
 * and the English home page show. The plan names (Free, Starter, Pro, Business)
 * and the four prices are not here: they are the same in every language and
 * stay in the component. The terms follow the "credits and plans" help article
 * in each language (lib/help.*.ts), so a plan reads the same in both places.
 */
import type { Locale } from "./redesign-i18n";

export interface PlanCopy {
  desc: string;
  /** The line under the price: what the plan costs when billed yearly. */
  period: string;
  features: string[];
  cta: string;
}

export interface PlansCopy {
  /** Follows the price: "$7" then "/mo". */
  perMonth: string;
  /** The badge on the Pro card. On the home page it shares a line with the label printed on that ticket ("FRONT ROW"), and neither can wrap, so keep both short: the two together should be no longer than the English pair. */
  popular: string;
  free: PlanCopy;
  starter: PlanCopy;
  pro: PlanCopy;
  business: PlanCopy;
  /** The line under the cards for someone with one deck to fix: the question in bold, then the rest. */
  oneDeck: { question: string; body: string };
}

export const PLANS_COPY: Record<Locale, PlansCopy> = {
  en: {
    perMonth: "/mo",
    popular: "Most Popular",
    free: {
      desc: "Perfect for trying PitchBoost",
      period: "Free forever",
      features: [
        "150 credits a month (1 AI deck)",
        "Decks up to 10 slides",
        "Share as a live link, with badge",
        "Full viewer analytics and saved templates",
        "Research and fact checking included",
        "Your team, at no charge per person",
      ],
      cta: "Get Started",
    },
    starter: {
      desc: "Your decks, without the badge",
      period: "or $5.83/mo billed annually",
      features: [
        "More AI credits: 300 a month",
        "Decks up to 25 slides",
        "No PitchBoost badge, anywhere",
        "PowerPoint, PDF and Google Slides downloads",
        "Top-up credit packs",
        "Full viewer analytics and saved templates",
        "Your team, at no charge per person",
      ],
      cta: "Start with Starter",
    },
    pro: {
      desc: "For people who present every week",
      period: "or $24/mo billed annually",
      features: [
        "Even more AI credits: 1,200 a month",
        "Decks up to 60 slides",
        "Custom domains",
        "API and MCP access",
        "Unlimited deals, no badge",
        "Full viewer analytics and saved templates",
        "Your team, at no charge per person",
      ],
      cta: "Start Free Trial",
    },
    business: {
      desc: "For teams that share a brand",
      period: "or $66/mo billed annually",
      features: [
        "Everything in Pro",
        "Our largest AI credit allowance: 3,300 a month",
        "Analytics export",
        "Sending from your own domain",
        "Your team, at no charge per person",
      ],
      cta: "Get Started",
    },
    oneDeck: {
      question: "Just one deck?",
      body: "Pay once for that deck, no subscription: $9 up to 25 slides, $19 up to 60. Every slide rebuilt, no PitchBoost badge, the PowerPoint, PDF and Google Slides downloads, and 100 credits for edits. Start Starter or Pro within 30 days and it counts toward the first month.",
    },
  },
  es: {
    perMonth: "/mes",
    popular: "El favorito",
    free: {
      desc: "Ideal para probar PitchBoost",
      period: "Gratis para siempre",
      features: [
        "150 créditos al mes (1 presentación con IA)",
        "Presentaciones de hasta 10 diapositivas",
        "Comparte como enlace en vivo, con insignia",
        "Analíticas completas de visualización y plantillas guardadas",
        "Investigación y verificación de datos incluidas",
        "Tu equipo, sin costo por persona",
      ],
      cta: "Empezar",
    },
    starter: {
      desc: "Tus presentaciones, sin la insignia",
      period: "o $5.83/mes con facturación anual",
      features: [
        "Más créditos de IA: 300 al mes",
        "Presentaciones de hasta 25 diapositivas",
        "Sin insignia de PitchBoost en ningún lugar",
        "Descargas de PowerPoint, PDF y Google Slides",
        "Paquetes de créditos adicionales",
        "Analíticas completas de visualización y plantillas guardadas",
        "Tu equipo, sin costo por persona",
      ],
      cta: "Empezar con Starter",
    },
    pro: {
      desc: "Para quienes presentan todas las semanas",
      period: "o $24/mes con facturación anual",
      features: [
        "Aún más créditos de IA: 1,200 al mes",
        "Presentaciones de hasta 60 diapositivas",
        "Dominios personalizados",
        "Acceso a la API y al MCP",
        "Negocios ilimitados, sin insignia",
        "Analíticas completas de visualización y plantillas guardadas",
        "Tu equipo, sin costo por persona",
      ],
      cta: "Empezar la prueba gratis",
    },
    business: {
      desc: "Para equipos que comparten una marca",
      period: "o $66/mes con facturación anual",
      features: [
        "Todo lo de Pro",
        "Nuestra mayor asignación de créditos de IA: 3,300 al mes",
        "Exportación de analíticas",
        "Envío desde tu propio dominio",
        "Tu equipo, sin costo por persona",
      ],
      cta: "Empezar",
    },
    oneDeck: {
      question: "¿Solo una presentación?",
      body: "Paga una sola vez por esa presentación, sin suscripción: $9 hasta 25 diapositivas, $19 hasta 60. Todas las diapositivas rehechas, sin insignia de PitchBoost, las descargas de PowerPoint, PDF y Google Slides, y 100 créditos para ediciones. Si empiezas Starter o Pro en los 30 días siguientes, cuenta para el primer mes.",
    },
  },
  pt: {
    perMonth: "/mês",
    popular: "O favorito",
    free: {
      desc: "Perfeito para experimentar o PitchBoost",
      period: "Grátis para sempre",
      features: [
        "150 créditos por mês (1 apresentação com IA)",
        "Apresentações de até 10 slides",
        "Compartilhe como link ao vivo, com selo",
        "Análises completas dos visualizadores e modelos salvos",
        "Pesquisa e checagem de fatos incluídas",
        "Sua equipe, sem custo por pessoa",
      ],
      cta: "Começar",
    },
    starter: {
      desc: "Suas apresentações, sem o selo",
      period: "ou $5,83/mês com cobrança anual",
      features: [
        "Mais créditos de IA: 300 por mês",
        "Apresentações de até 25 slides",
        "Sem selo do PitchBoost em lugar nenhum",
        "Downloads em PowerPoint, PDF e Google Slides",
        "Pacotes extras de créditos",
        "Análises completas dos visualizadores e modelos salvos",
        "Sua equipe, sem custo por pessoa",
      ],
      cta: "Começar com o Starter",
    },
    pro: {
      desc: "Para quem apresenta toda semana",
      period: "ou $24/mês com cobrança anual",
      features: [
        "Ainda mais créditos de IA: 1.200 por mês",
        "Apresentações de até 60 slides",
        "Domínios personalizados",
        "Acesso à API e ao MCP",
        "Negócios ilimitados, sem selo",
        "Análises completas dos visualizadores e modelos salvos",
        "Sua equipe, sem custo por pessoa",
      ],
      cta: "Começar o teste grátis",
    },
    business: {
      desc: "Para equipes que compartilham uma marca",
      period: "ou $66/mês com cobrança anual",
      features: [
        "Tudo do Pro",
        "Nossa maior cota de créditos de IA: 3.300 por mês",
        "Exportação de análises",
        "Envio a partir do seu próprio domínio",
        "Sua equipe, sem custo por pessoa",
      ],
      cta: "Começar",
    },
    oneDeck: {
      question: "Só uma apresentação?",
      body: "Pague uma vez por essa apresentação, sem assinatura: $9 até 25 slides, $19 até 60. Todos os slides refeitos, sem selo do PitchBoost, os downloads em PowerPoint, PDF e Google Slides e 100 créditos para edições. Se você assinar o Starter ou o Pro em até 30 dias, o valor conta para o primeiro mês.",
    },
  },
  fr: {
    perMonth: "/mois",
    popular: "Le favori",
    free: {
      desc: "Parfait pour essayer PitchBoost",
      period: "Gratuit pour toujours",
      features: [
        "150 crédits par mois (1 présentation IA)",
        "Présentations jusqu'à 10 diapositives",
        "Partage par lien en direct, avec badge",
        "Statistiques de lecture complètes et modèles enregistrés",
        "Recherche et vérification des faits incluses",
        "Votre équipe, sans frais par personne",
      ],
      cta: "Commencer",
    },
    starter: {
      desc: "Vos présentations, sans le badge",
      period: "ou $5.83/mois en facturation annuelle",
      features: [
        "Plus de crédits IA : 300 par mois",
        "Présentations jusqu'à 25 diapositives",
        "Aucun badge PitchBoost, nulle part",
        "Téléchargements PowerPoint, PDF et Google Slides",
        "Packs de recharge de crédits",
        "Statistiques de lecture complètes et modèles enregistrés",
        "Votre équipe, sans frais par personne",
      ],
      cta: "Commencer avec Starter",
    },
    pro: {
      desc: "Pour ceux qui présentent chaque semaine",
      period: "ou $24/mois en facturation annuelle",
      features: [
        "Encore plus de crédits IA : 1 200 par mois",
        "Présentations jusqu'à 60 diapositives",
        "Domaines personnalisés",
        "Accès API et MCP",
        "Deals illimités, sans badge",
        "Statistiques de lecture complètes et modèles enregistrés",
        "Votre équipe, sans frais par personne",
      ],
      cta: "Démarrer l'essai gratuit",
    },
    business: {
      desc: "Pour les équipes qui partagent une marque",
      period: "ou $66/mois en facturation annuelle",
      features: [
        "Tout ce que comprend Pro",
        "Notre plus grande allocation de crédits IA : 3 300 par mois",
        "Export des statistiques",
        "Envoi depuis votre propre domaine",
        "Votre équipe, sans frais par personne",
      ],
      cta: "Commencer",
    },
    oneDeck: {
      question: "Une seule présentation ?",
      body: "Payez une fois pour cette présentation, sans abonnement : $9 jusqu'à 25 diapositives, $19 jusqu'à 60. Toutes les diapositives reconstruites, aucun badge PitchBoost, les téléchargements PowerPoint, PDF et Google Slides, et 100 crédits pour les modifications. Si vous passez à Starter ou à Pro dans les 30 jours, ce paiement compte pour le premier mois.",
    },
  },
  ar: {
    perMonth: "شهريًا",
    popular: "الأكثر رواجًا",
    free: {
      desc: "مثالية لتجربة PitchBoost",
      period: "مجانية دائمًا",
      features: [
        "150 رصيدًا شهريًا (عرض واحد بالذكاء الاصطناعي)",
        "عروض حتى 10 شرائح",
        "مشاركة برابط منشور، مع شارة",
        "تحليلات كاملة للمشاهدين وقوالب محفوظة",
        "البحث والتحقق من الحقائق مشمولان",
        "فريقك، دون رسوم عن كل شخص",
      ],
      cta: "ابدأ الآن",
    },
    starter: {
      desc: "عروضك، من دون الشارة",
      period: "أو $5.83 شهريًا عند الدفع سنويًا",
      features: [
        "أرصدة ذكاء اصطناعي أكثر: 300 شهريًا",
        "عروض حتى 25 شريحة",
        "لا شارة PitchBoost في أي مكان",
        "تنزيلات PowerPoint وPDF وGoogle Slides",
        "حزم أرصدة إضافية",
        "تحليلات كاملة للمشاهدين وقوالب محفوظة",
        "فريقك، دون رسوم عن كل شخص",
      ],
      cta: "ابدأ مع Starter",
    },
    pro: {
      desc: "لمن يقدّمون عروضًا كل أسبوع",
      period: "أو $24 شهريًا عند الدفع سنويًا",
      features: [
        "أرصدة ذكاء اصطناعي أكثر وأكثر: 1,200 شهريًا",
        "عروض حتى 60 شريحة",
        "نطاقات مخصّصة",
        "الوصول إلى API وMCP",
        "صفقات غير محدودة، بلا شارة",
        "تحليلات كاملة للمشاهدين وقوالب محفوظة",
        "فريقك، دون رسوم عن كل شخص",
      ],
      cta: "ابدأ التجربة المجانية",
    },
    business: {
      desc: "للفرق التي تتشارك علامة تجارية واحدة",
      period: "أو $66 شهريًا عند الدفع سنويًا",
      features: [
        "كل ما في Pro",
        "أكبر حصة لدينا من أرصدة الذكاء الاصطناعي: 3,300 شهريًا",
        "تصدير التحليلات",
        "الإرسال من نطاقك الخاص",
        "فريقك، دون رسوم عن كل شخص",
      ],
      cta: "ابدأ الآن",
    },
    oneDeck: {
      question: "عرض واحد فقط؟",
      body: "ادفع مرة واحدة عن ذلك العرض، دون اشتراك: $9 حتى 25 شريحة، و$19 حتى 60. يُعاد بناء كل شريحة، بلا شارة PitchBoost، مع تنزيلات PowerPoint وPDF وGoogle Slides و100 رصيد للتعديلات. وإن بدأت Starter أو Pro خلال 30 يومًا، يُحتسب ما دفعته من الشهر الأول.",
    },
  },
};
