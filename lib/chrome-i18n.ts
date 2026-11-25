/**
 * The words of the site's top menu (components/marketing/navbar.tsx) and its
 * footer (components/marketing/footer.tsx) in every language the site is
 * published in. English is the source, and what every page outside /es, /pt,
 * /fr, /ar and /de shows, exactly as before; the pages under those five show
 * the menu and the footer in their own language.
 *
 * The names of the feature and industry pages are the site's data: English
 * takes them from lib/features.tsx and lib/industries.tsx, and the other
 * languages hold theirs here, under the same keys. The words follow the
 * translated pages and the app: presentación, apresentação, présentation,
 * عرض تقديمي and Präsentation for a deck, the redesign pages' names for upload
 * and redesign and for bulk rebuild, and the help center's own name in each
 * language.
 *
 * The menu is drawn in the browser, so it reads MENU_COPY only; the footer is
 * drawn on the server and reads FOOTER_COPY as well.
 */
import { FEATURES, FEATURE_EXTRA_LINKS, FEATURE_GROUPS } from "./features";
import { AUDIENCE_GROUPS, INDUSTRIES, INDUSTRY_GROUPS } from "./industries";
import { localeDir } from "./locale-dir";
import { hasPresentations, type Locale } from "./locales";

export { localeOfPath } from "./locales";

/** The names of the pages the menu and the footer list. */
export interface PageNames {
  /** The Features menu's three headings, by their English names in lib/features.tsx. */
  featureGroups: Record<string, string>;
  /** Each feature page, by its slug in lib/features.tsx. */
  features: Record<string, string>;
  /** The pages listed with the features that are not feature pages, by address. */
  featureExtras: Record<string, string>;
  /** The "Who it's for" menu's headings, by their English names in lib/industries.tsx: the industry groups, then the audience groups. */
  industryGroups: Record<string, string>;
  /** Each industry page, by its slug in lib/industries.tsx. */
  industries: Record<string, string>;
  /** The audiences with a page of their own, by address. */
  audiences: Record<string, string>;
}

export interface MenuCopy {
  features: string;
  presentations: string;
  pricing: string;
  whoFor: string;
  compare: string;
  blog: string;
  /** The link at the foot of the "Who it's for" menu, to every industry and audience. The arrow is added after it. */
  everyone: string;
  logIn: string;
  start: string;
  /** What a screen reader calls the button that opens the menu on a phone, and the one that closes it. */
  openMenu: string;
  closeMenu: string;
  /** What a screen reader calls the language menu; the footer's list uses the same word (FOOTER_COPY). */
  language: string;
  names: PageNames;
}

export interface FooterCopy {
  /** The paragraph under the logo. */
  about: string;
  /** The column headings the menu does not already name (Features, Presentations, Who it's for and Compare are the menu's words). */
  headings: { product: string; realEstate: string; company: string };
  /** The last link under the presentations, to the presentation maker. The arrow is added after it. */
  presentationMaker: string;
  /** The last link under the industries and under the comparisons. The arrow is added after it. */
  viewAll: string;
  templates: string;
  research: string;
  /** The footer's shorter names for two industries the menu names in full. */
  agencies: string;
  homeServices: string;
  realEstate: { tools: string; openHouse: string; netSheet: string; closingTimeline: string; agents: string; bestSoftware: string };
  /** A comparison page's link: {name} is the other product. */
  versus: string;
  company: { about: string; help: string; changelog: string; ideas: string; security: string; contact: string; privacy: string; terms: string };
  /** Follows "© 2026 PitchBoost." at the very bottom. */
  rights: string;
  /** What a screen reader calls the list of languages at the bottom (each language is shown by its own name). */
  language: string;
  /** One line under a column whose links all lead to pages published only in English. */
  inEnglish: string;
}

/** English names come from the data they belong to, so the menu and footer say what the pages say. */
const NAMES_EN: PageNames = {
  featureGroups: Object.fromEntries(FEATURE_GROUPS.map((g) => [g.label, g.label] as const)),
  features: Object.fromEntries(FEATURES.map((f) => [f.slug, f.navLabel] as const)),
  featureExtras: Object.fromEntries(FEATURE_EXTRA_LINKS.map((l) => [l.href, l.label] as const)),
  industryGroups: Object.fromEntries([...INDUSTRY_GROUPS, ...AUDIENCE_GROUPS].map((g) => [g.label, g.label] as const)),
  industries: Object.fromEntries(INDUSTRIES.map((i) => [i.slug, i.navLabel] as const)),
  audiences: Object.fromEntries(AUDIENCE_GROUPS.flatMap((g) => g.links.map((l) => [l.href, l.label] as const))),
};

export const MENU_COPY: Record<Locale, MenuCopy> = {
  en: {
    features: "Features",
    presentations: "Presentations",
    pricing: "Pricing",
    whoFor: "Who It's For",
    compare: "Compare",
    blog: "Blog",
    everyone: "See everyone it's for",
    logIn: "Log In",
    start: "Get Started",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    names: NAMES_EN,
  },
  es: {
    features: "Funciones",
    presentations: "Presentaciones",
    pricing: "Precios",
    whoFor: "Para quién es",
    compare: "Comparar",
    blog: "Blog",
    everyone: "Ver todos los perfiles",
    logIn: "Iniciar sesión",
    start: "Empezar",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    language: "Idioma",
    names: {
      featureGroups: { Build: "Crear", "Brand & Content": "Marca y contenido", "Share & Scale": "Compartir y crecer" },
      features: {
        "ai-deck-builder": "Creador de presentaciones con IA",
        "research-and-fact-checking": "Investigación y verificación de datos",
        "upload-and-redesign": "Subir y rediseñar",
        "bulk-rebuild": "Reconstrucción masiva",
        "output-types": "Tipos de documento",
        "templates-and-slides": "Plantillas y diapositivas guardadas",
        "brand-and-images": "Marca y biblioteca de imágenes",
        "publishing-and-sharing": "Publicar y compartir",
        "viewer-analytics": "Analíticas de visualización",
        "team-and-permissions": "Equipo y permisos",
        "api-and-mcp": "API y MCP",
      },
      featureExtras: { "/chatgpt": "Funciona con ChatGPT" },
      industryGroups: {
        "Sales & Revenue": "Ventas e ingresos",
        "Services & Professionals": "Servicios y profesionales",
        "Industry Verticals": "Sectores",
        "Technical & Regulated": "Técnicos y regulados",
        Education: "Educación",
      },
      industries: {
        "b2b-sales": "Equipos de ventas B2B",
        saas: "SaaS y tecnología",
        startups: "Startups",
        "sponsorship-media": "Patrocinios y venta de publicidad",
        agencies: "Agencias y estudios creativos",
        consultancies: "Consultoras",
        recruiting: "Reclutamiento y selección",
        "training-coaching": "Capacitación y coaching",
        "home-services": "Servicios para el hogar y contratistas",
        "commercial-real-estate": "Bienes raíces comerciales",
        "real-estate-agents": "Agentes inmobiliarios",
        "real-estate-brokerages": "Inmobiliarias y equipos",
        "financial-advisors": "Asesores financieros",
        nonprofits: "Organizaciones sin fines de lucro",
        "life-sciences-healthcare": "Ciencias de la vida y salud",
        "engineering-consulting": "Consultoría de ingeniería",
        manufacturing: "Manufactura e industria",
      },
      audiences: { "/students": "Estudiantes" },
    },
  },
  pt: {
    features: "Recursos",
    presentations: "Apresentações",
    pricing: "Preços",
    whoFor: "Para quem é",
    compare: "Comparar",
    blog: "Blog",
    everyone: "Ver todos os perfis",
    logIn: "Entrar",
    start: "Começar",
    openMenu: "Abrir o menu",
    closeMenu: "Fechar o menu",
    language: "Idioma",
    names: {
      featureGroups: { Build: "Criar", "Brand & Content": "Marca e conteúdo", "Share & Scale": "Compartilhar e crescer" },
      features: {
        "ai-deck-builder": "Criador de apresentações com IA",
        "research-and-fact-checking": "Pesquisa e checagem de fatos",
        "upload-and-redesign": "Enviar e redesenhar",
        "bulk-rebuild": "Reconstrução em lote",
        "output-types": "Tipos de documento",
        "templates-and-slides": "Modelos e slides salvos",
        "brand-and-images": "Marca e banco de imagens",
        "publishing-and-sharing": "Publicação e compartilhamento",
        "viewer-analytics": "Análises dos visualizadores",
        "team-and-permissions": "Equipe e permissões",
        "api-and-mcp": "API e MCP",
      },
      featureExtras: { "/chatgpt": "Funciona com o ChatGPT" },
      industryGroups: {
        "Sales & Revenue": "Vendas e receita",
        "Services & Professionals": "Serviços e profissionais",
        "Industry Verticals": "Setores",
        "Technical & Regulated": "Técnicos e regulados",
        Education: "Educação",
      },
      industries: {
        "b2b-sales": "Equipes de vendas B2B",
        saas: "SaaS e tecnologia",
        startups: "Startups",
        "sponsorship-media": "Patrocínios e venda de mídia",
        agencies: "Agências e estúdios criativos",
        consultancies: "Consultorias",
        recruiting: "Recrutamento e seleção",
        "training-coaching": "Treinamento e coaching",
        "home-services": "Serviços residenciais e empreiteiras",
        "commercial-real-estate": "Imóveis comerciais",
        "real-estate-agents": "Corretores de imóveis",
        "real-estate-brokerages": "Imobiliárias e equipes",
        "financial-advisors": "Assessores financeiros",
        nonprofits: "Organizações sem fins lucrativos",
        "life-sciences-healthcare": "Ciências da vida e saúde",
        "engineering-consulting": "Consultoria de engenharia",
        manufacturing: "Indústria e manufatura",
      },
      audiences: { "/students": "Estudantes" },
    },
  },
  fr: {
    features: "Fonctionnalités",
    presentations: "Présentations",
    pricing: "Tarifs",
    whoFor: "Pour qui",
    compare: "Comparer",
    blog: "Blog",
    everyone: "Voir tous les profils",
    logIn: "Connexion",
    start: "Commencer",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    names: {
      featureGroups: { Build: "Créer", "Brand & Content": "Marque et contenu", "Share & Scale": "Partager et développer" },
      features: {
        "ai-deck-builder": "Créateur de présentations IA",
        "research-and-fact-checking": "Recherche et vérification des faits",
        "upload-and-redesign": "Importer et refondre",
        "bulk-rebuild": "Reconstruction en masse",
        "output-types": "Types de documents",
        "templates-and-slides": "Modèles et diapositives enregistrés",
        "brand-and-images": "Marque et photothèque",
        "publishing-and-sharing": "Publication et partage",
        "viewer-analytics": "Statistiques de lecture",
        "team-and-permissions": "Équipe et autorisations",
        "api-and-mcp": "API et MCP",
      },
      featureExtras: { "/chatgpt": "Fonctionne avec ChatGPT" },
      industryGroups: {
        "Sales & Revenue": "Ventes et revenus",
        "Services & Professionals": "Services et professionnels",
        "Industry Verticals": "Secteurs",
        "Technical & Regulated": "Techniques et réglementés",
        Education: "Éducation",
      },
      industries: {
        "b2b-sales": "Équipes commerciales B2B",
        saas: "SaaS et technologie",
        startups: "Start-up",
        "sponsorship-media": "Sponsoring et régie publicitaire",
        agencies: "Agences et studios de création",
        consultancies: "Cabinets de conseil",
        recruiting: "Recrutement et intérim",
        "training-coaching": "Formation et coaching",
        "home-services": "Services à domicile et artisans",
        "commercial-real-estate": "Immobilier d'entreprise",
        "real-estate-agents": "Agents immobiliers",
        "real-estate-brokerages": "Agences immobilières et équipes",
        "financial-advisors": "Conseillers financiers",
        nonprofits: "Associations",
        "life-sciences-healthcare": "Sciences de la vie et santé",
        "engineering-consulting": "Conseil en ingénierie",
        manufacturing: "Industrie et fabrication",
      },
      audiences: { "/students": "Étudiants" },
    },
  },
  ar: {
    features: "الميزات",
    presentations: "العروض التقديمية",
    pricing: "الأسعار",
    whoFor: "لمن يناسب",
    compare: "المقارنات",
    blog: "المدونة",
    everyone: "عرض جميع الفئات",
    logIn: "تسجيل الدخول",
    start: "ابدأ الآن",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    language: "اللغة",
    names: {
      featureGroups: { Build: "الإنشاء", "Brand & Content": "العلامة التجارية والمحتوى", "Share & Scale": "المشاركة والتوسّع" },
      features: {
        "ai-deck-builder": "صانع العروض التقديمية بالذكاء الاصطناعي",
        "research-and-fact-checking": "البحث والتحقق من الحقائق",
        "upload-and-redesign": "الرفع وإعادة التصميم",
        "bulk-rebuild": "إعادة الإنشاء الجماعية",
        "output-types": "أنواع المستندات",
        "templates-and-slides": "القوالب والشرائح المحفوظة",
        "brand-and-images": "العلامة التجارية ومكتبة الصور",
        "publishing-and-sharing": "النشر والمشاركة",
        "viewer-analytics": "تحليلات المشاهدين",
        "team-and-permissions": "الفريق والصلاحيات",
        "api-and-mcp": "API وMCP",
      },
      featureExtras: { "/chatgpt": "يعمل مع ChatGPT" },
      industryGroups: {
        "Sales & Revenue": "المبيعات والإيرادات",
        "Services & Professionals": "الخدمات والمهنيون",
        "Industry Verticals": "القطاعات",
        "Technical & Regulated": "القطاعات التقنية والخاضعة للتنظيم",
        Education: "التعليم",
      },
      industries: {
        "b2b-sales": "فرق مبيعات B2B",
        saas: "SaaS والتقنية",
        startups: "الشركات الناشئة",
        "sponsorship-media": "الرعايات ومبيعات الإعلانات",
        agencies: "الوكالات والاستوديوهات الإبداعية",
        consultancies: "شركات الاستشارات",
        recruiting: "التوظيف والاستقطاب",
        "training-coaching": "التدريب والإرشاد",
        "home-services": "خدمات المنازل والمقاولون",
        "commercial-real-estate": "العقارات التجارية",
        "real-estate-agents": "الوكلاء العقاريون",
        "real-estate-brokerages": "شركات الوساطة العقارية والفرق",
        "financial-advisors": "المستشارون الماليون",
        nonprofits: "المنظمات غير الربحية",
        "life-sciences-healthcare": "علوم الحياة والرعاية الصحية",
        "engineering-consulting": "الاستشارات الهندسية",
        manufacturing: "التصنيع والصناعة",
      },
      audiences: { "/students": "الطلاب" },
    },
  },
  de: {
    features: "Funktionen",
    presentations: "Präsentationen",
    pricing: "Preise",
    whoFor: "Für wen",
    compare: "Vergleiche",
    blog: "Blog",
    everyone: "Alle Zielgruppen ansehen",
    logIn: "Anmelden",
    start: "Loslegen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
    names: {
      featureGroups: { Build: "Erstellen", "Brand & Content": "Marke und Inhalte", "Share & Scale": "Teilen und wachsen" },
      features: {
        "ai-deck-builder": "KI-Präsentationsgenerator",
        "research-and-fact-checking": "Recherche und Faktencheck",
        "upload-and-redesign": "Hochladen und neu gestalten",
        "bulk-rebuild": "Viele Präsentationen auf einmal",
        "output-types": "Dokumenttypen",
        "templates-and-slides": "Vorlagen und gespeicherte Folien",
        "brand-and-images": "Marke und Bildbibliothek",
        "publishing-and-sharing": "Veröffentlichen und teilen",
        "viewer-analytics": "Aufrufstatistiken",
        "team-and-permissions": "Team und Berechtigungen",
        "api-and-mcp": "API und MCP",
      },
      featureExtras: { "/chatgpt": "Funktioniert mit ChatGPT" },
      industryGroups: {
        "Sales & Revenue": "Vertrieb und Umsatz",
        "Services & Professionals": "Dienstleistung und Beratung",
        "Industry Verticals": "Branchen",
        "Technical & Regulated": "Technik und regulierte Branchen",
        Education: "Bildung",
      },
      industries: {
        "b2b-sales": "B2B-Vertriebsteams",
        saas: "SaaS und Technologie",
        startups: "Start-ups",
        "sponsorship-media": "Sponsoring und Mediavermarktung",
        agencies: "Agenturen und Kreativstudios",
        consultancies: "Unternehmensberatungen",
        recruiting: "Recruiting und Personaldienstleister",
        "training-coaching": "Training und Coaching",
        "home-services": "Handwerk und Dienstleistungen rund ums Haus",
        "commercial-real-estate": "Gewerbeimmobilien",
        "real-estate-agents": "Immobilienmakler",
        "real-estate-brokerages": "Maklerbüros und Teams",
        "financial-advisors": "Finanzberater",
        nonprofits: "Gemeinnützige Organisationen",
        "life-sciences-healthcare": "Life Sciences und Gesundheit",
        "engineering-consulting": "Ingenieurbüros",
        manufacturing: "Industrie und Fertigung",
      },
      audiences: { "/students": "Studierende" },
    },
  },
};

export const FOOTER_COPY: Record<Locale, FooterCopy> = {
  en: {
    about: "AI presentation maker for anyone who presents. Start from a prompt or the deck you have, get every slide designed in your brand, and see how it lands.",
    headings: { product: "Product", realEstate: "Real estate", company: "Company" },
    presentationMaker: "AI presentation maker",
    viewAll: "View all",
    templates: "Templates",
    research: "Research",
    agencies: "Agencies",
    homeServices: "Home Services",
    realEstate: {
      tools: "Free tools",
      openHouse: "Open house sign-in",
      netSheet: "Seller net sheet",
      closingTimeline: "Closing timeline",
      agents: "Real estate agents",
      bestSoftware: "Best listing software",
    },
    versus: "PitchBoost vs {name}",
    company: {
      about: "About",
      help: "Help center",
      changelog: "Changelog",
      ideas: "Suggest a feature",
      security: "Security",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    rights: "All rights reserved.",
    language: "Language",
    inEnglish: "These pages are in English.",
  },
  es: {
    about: "Creador de presentaciones con IA para cualquiera que tenga que presentar. Empieza con un prompt o con la presentación que ya tienes, recibe cada diapositiva diseñada con tu marca y mira cómo le va.",
    headings: { product: "Producto", realEstate: "Bienes raíces", company: "Empresa" },
    presentationMaker: "Creador de presentaciones con IA",
    viewAll: "Ver todo",
    templates: "Plantillas",
    research: "Estudios",
    agencies: "Agencias",
    homeServices: "Servicios para el hogar",
    realEstate: {
      tools: "Herramientas gratis",
      openHouse: "Registro de visitas para open house",
      netSheet: "Neto estimado del vendedor",
      closingTimeline: "Cronograma de cierre",
      agents: "Agentes inmobiliarios",
      bestSoftware: "Mejor software de captación",
    },
    versus: "PitchBoost vs {name}",
    company: {
      about: "Quiénes somos",
      help: "Centro de ayuda",
      changelog: "Novedades",
      ideas: "Sugerir una función",
      security: "Seguridad",
      contact: "Contacto",
      privacy: "Política de privacidad",
      terms: "Términos del servicio",
    },
    rights: "Todos los derechos reservados.",
    language: "Idioma",
    inEnglish: "Estas páginas están en inglés.",
  },
  pt: {
    about: "Criador de apresentações com IA para quem precisa apresentar. Comece com um prompt ou com a apresentação que você já tem, receba cada slide com o design da sua marca e veja como o público reage.",
    headings: { product: "Produto", realEstate: "Imóveis", company: "Empresa" },
    presentationMaker: "Criador de apresentações com IA",
    viewAll: "Ver tudo",
    templates: "Modelos",
    research: "Pesquisas",
    agencies: "Agências",
    homeServices: "Serviços residenciais",
    realEstate: {
      tools: "Ferramentas grátis",
      openHouse: "Lista de visitantes do open house",
      netSheet: "Valor líquido do vendedor",
      closingTimeline: "Cronograma de fechamento",
      agents: "Corretores de imóveis",
      bestSoftware: "Melhor software de captação",
    },
    versus: "PitchBoost vs {name}",
    company: {
      about: "Sobre nós",
      help: "Central de ajuda",
      changelog: "Novidades",
      ideas: "Sugerir um recurso",
      security: "Segurança",
      contact: "Contato",
      privacy: "Política de privacidade",
      terms: "Termos de serviço",
    },
    rights: "Todos os direitos reservados.",
    language: "Idioma",
    inEnglish: "Estas páginas estão em inglês.",
  },
  fr: {
    about: "Créateur de présentations IA pour tous ceux qui présentent. Partez d'un prompt ou de la présentation que vous avez déjà, obtenez chaque diapositive mise en page à vos couleurs et voyez l'effet qu'elle produit.",
    headings: { product: "Produit", realEstate: "Immobilier", company: "Entreprise" },
    presentationMaker: "Créateur de présentations IA",
    viewAll: "Tout voir",
    templates: "Modèles",
    research: "Études",
    agencies: "Agences",
    homeServices: "Services à domicile",
    realEstate: {
      tools: "Outils gratuits",
      openHouse: "Registre des portes ouvertes",
      netSheet: "Estimation du net vendeur",
      closingTimeline: "Calendrier jusqu'à la signature",
      agents: "Agents immobiliers",
      bestSoftware: "Meilleur logiciel de prise de mandat",
    },
    versus: "PitchBoost vs {name}",
    company: {
      about: "À propos",
      help: "Centre d'aide",
      changelog: "Nouveautés",
      ideas: "Suggérer une fonctionnalité",
      security: "Sécurité",
      contact: "Contact",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
    rights: "Tous droits réservés.",
    language: "Langue",
    inEnglish: "Ces pages sont en anglais.",
  },
  ar: {
    about: "صانع عروض تقديمية بالذكاء الاصطناعي لكل من يقدّم عرضًا. ابدأ بوصف تكتبه أو بالعرض الذي لديك، واحصل على كل شريحة مصمَّمة بهوية علامتك التجارية، واعرف كيف يتلقّى جمهورك العرض.",
    headings: { product: "المنتج", realEstate: "العقارات", company: "الشركة" },
    presentationMaker: "صانع العروض التقديمية بالذكاء الاصطناعي",
    viewAll: "عرض الكل",
    templates: "القوالب",
    research: "الأبحاث",
    agencies: "الوكالات",
    homeServices: "خدمات المنازل",
    realEstate: {
      tools: "أدوات مجانية",
      openHouse: "سجل زوار المنزل المفتوح",
      netSheet: "صافي عائد البائع",
      closingTimeline: "الجدول الزمني لإتمام البيع",
      agents: "الوكلاء العقاريون",
      bestSoftware: "أفضل برامج العروض العقارية",
    },
    versus: "PitchBoost مقابل {name}",
    company: {
      about: "من نحن",
      help: "مركز المساعدة",
      changelog: "سجل التحديثات",
      ideas: "اقترح ميزة",
      security: "الأمان",
      contact: "تواصل معنا",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },
    rights: "جميع الحقوق محفوظة.",
    language: "اللغة",
    inEnglish: "هذه الصفحات بالإنجليزية.",
  },
  de: {
    about: "KI-Präsentationen für alle, die präsentieren. Starte mit einem Prompt oder der Präsentation, die du schon hast, bekomm jede Folie im Design deiner Marke und sieh, wie sie ankommt.",
    headings: { product: "Produkt", realEstate: "Immobilien", company: "Unternehmen" },
    presentationMaker: "KI-Präsentationsgenerator",
    viewAll: "Alle ansehen",
    templates: "Vorlagen",
    research: "Studien",
    agencies: "Agenturen",
    homeServices: "Handwerk",
    realEstate: {
      tools: "Kostenlose Tools",
      openHouse: "Anmeldeliste für Besichtigungen",
      netSheet: "Nettoerlös für Verkäufer",
      closingTimeline: "Zeitplan bis zum Abschluss",
      agents: "Immobilienmakler",
      bestSoftware: "Beste Software für Akquise-Präsentationen",
    },
    versus: "PitchBoost vs. {name}",
    company: {
      about: "Über uns",
      help: "Hilfe-Center",
      changelog: "Neuigkeiten",
      ideas: "Funktion vorschlagen",
      security: "Sicherheit",
      contact: "Kontakt",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
    },
    rights: "Alle Rechte vorbehalten.",
    language: "Sprache",
    inEnglish: "Diese Seiten sind auf Englisch.",
  },
};

/**
 * The presentation pages' names, for a language that has none of its own yet
 * (German): its footer lists the English presentation pages under these
 * names, marked as English. The other languages name them from their own
 * pages (lib/presentations.<language>.ts).
 */
export const PRESENTATION_NAMES: Partial<Record<Locale, Record<string, string>>> = {
  de: {
    "class-presentation": "Referate",
    "lecture-slides": "Folien für Vorlesung und Unterricht",
    "thesis-defense": "Verteidigung der Abschlussarbeit",
    "research-presentation": "Forschungspräsentationen",
    "training-presentation": "Schulung und Onboarding",
    "report-presentation": "Berichte und Board-Updates",
    "investor-update": "Investoren-Updates",
    "conference-talk": "Konferenzvorträge",
  },
};

/**
 * Whether a language has this page of the menu's and the footer's, at the
 * same address under its prefix (app/(es)/es and its siblings): the home
 * page, the redesign hub and the help center everywhere, the presentation
 * maker where the language has the presentation pages (lib/locales.ts).
 */
function inLanguage(locale: Locale, path: string): boolean {
  return path === "/" || path === "/redesign" || path === "/help" || (path === "/ai-presentation-maker" && hasPresentations(locale));
}

/** Two English feature pages that, in another language, give way to that language's page on the same subject where it has one, as on the home page: the presentation maker for the deck builder, the redesign hub for upload and redesign. */
const STAND_INS: Record<string, string> = {
  "/features/ai-deck-builder": "/ai-presentation-maker",
  "/features/upload-and-redesign": "/redesign",
};

/**
 * Where a link in the menu or the footer leads on a page in this language: to
 * the page in this language where the site has one, otherwise to the English
 * page, marked hreflang="en" (with no note on the link itself). Links that
 * leave the site, to the app or to email, stay as they are. The footer's
 * presentation pages are its own to map (footer.tsx), as only it lists them.
 */
export function chromeLink(locale: Locale, href: string): { href: string; hrefLang: "en" | undefined } {
  if (locale === "en" || !href.startsWith("/")) return { href, hrefLang: undefined };
  // /pricing is in English only; the home page in each language carries the same plans, in that language.
  if (href === "/pricing") return { href: `/${locale}#pricing`, hrefLang: undefined };
  const standIn = STAND_INS[href];
  const path = standIn && inLanguage(locale, standIn) ? standIn : href;
  if (inLanguage(locale, path)) return { href: path === "/" ? `/${locale}` : `/${locale}${path}`, hrefLang: undefined };
  return { href, hrefLang: "en" };
}

/** The arrow after a "see more" link. It points the way the page reads. */
export function chromeArrow(locale: Locale): string {
  return localeDir(locale) === "rtl" ? "←" : "→";
}
