/**
 * Locale scaffolding for the presentation family (the /ai-presentation-maker
 * hub and /presentations/[slug]): English at the root, Spanish under /es,
 * Brazilian Portuguese under /pt, as the redesign cluster does. Page copy is
 * data (lib/presentations*.ts); the strings here are the chrome around it,
 * plus the hub's own copy.
 */
import { PRESENTATIONS, type PresentationPage } from "./presentations";
import { PRESENTATIONS_ES } from "./presentations.es";
import { PRESENTATIONS_PT } from "./presentations.pt";
import type { Locale } from "./redesign-i18n";

export function getPresentations(locale: Locale): PresentationPage[] {
  return locale === "es" ? PRESENTATIONS_ES : locale === "pt" ? PRESENTATIONS_PT : PRESENTATIONS;
}

export function getPresentationFor(locale: Locale, slug: string): PresentationPage | undefined {
  return getPresentations(locale).find((p) => p.slug === slug);
}

export interface PresentationUi {
  breadcrumbHome: string;
  breadcrumbHub: string;
  topicLabel: string;
  topicButton: string;
  haveSlides: string;
  /** Link text, then the words after the link ("Redesign the deck you have" + " instead."). */
  redesignLink: string;
  redesignTail: string;
  freeNote: string;
  deckLabel: string;
  /** "{forLabel}" is replaced with the page's forLabel. */
  deckTitle: string;
  deckBody: string;
  whyLabel: string;
  whyTitle: string;
  getLabel: string;
  getTitle: string;
  tryLabel: string;
  tryTitle: string;
  tryBody: string;
  tryLink: string;
  faqLabel: string;
  faqTitle: string;
  relatedLabel: string;
  relatedTitle: string;
  guidesLabel: string;
  ctaNote: string;
  /** Marks a link that leads to a page only published in English. */
  inEnglish: string;
}

export const PRESENTATION_UI: Record<Locale, PresentationUi> = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbHub: "AI presentation maker",
    topicLabel: "What is your presentation about?",
    topicButton: "Make my presentation",
    haveSlides: "Already have slides?",
    redesignLink: "Redesign the deck you have",
    redesignTail: " instead.",
    freeNote: "Free for your first deck. No credit card.",
    deckLabel: "The deck you get",
    deckTitle: "How PitchBoost shapes {forLabel}",
    deckBody: "Not a pitch with your topic pasted in. The slides follow the order this kind of talk actually needs.",
    whyLabel: "Why it is harder than it looks",
    whyTitle: "The usual ways this goes wrong",
    getLabel: "What you get",
    getTitle: "What comes back",
    tryLabel: "Try one",
    tryTitle: "Prompts that work",
    tryBody: "Specific beats short: say who it is for, how long, and anything it must include. Pick one to start with it filled in.",
    tryLink: "Start with this prompt",
    faqLabel: "FAQ",
    faqTitle: "Questions people ask",
    relatedLabel: "Related",
    relatedTitle: "Other presentations PitchBoost makes",
    guidesLabel: "Guides",
    ctaNote: "Free for your first deck. $9 once to download a finished one, or plans from $7 a month.",
    inEnglish: "",
  },
  es: {
    breadcrumbHome: "Inicio",
    breadcrumbHub: "Creador de presentaciones con IA",
    topicLabel: "¿De qué trata tu presentación?",
    topicButton: "Crear mi presentación",
    haveSlides: "¿Ya tienes diapositivas?",
    redesignLink: "Rediseña la presentación que ya tienes",
    redesignTail: ".",
    freeNote: "Gratis para tu primera presentación. Sin tarjeta.",
    deckLabel: "La presentación que recibes",
    deckTitle: "Cómo arma PitchBoost {forLabel}",
    deckBody: "No es un pitch con tu tema pegado. Las diapositivas siguen el orden que de verdad necesita este tipo de presentación.",
    whyLabel: "Por qué cuesta más de lo que parece",
    whyTitle: "Lo que suele salir mal",
    getLabel: "Lo que recibes",
    getTitle: "Lo que te devolvemos",
    tryLabel: "Pruébalo",
    tryTitle: "Prompts que funcionan",
    tryBody: "Lo concreto gana a lo breve: di para quién es, cuánto dura y lo que no puede faltar. Elige uno para empezar con él ya escrito.",
    tryLink: "Empezar con este prompt",
    faqLabel: "Preguntas frecuentes",
    faqTitle: "Lo que la gente pregunta",
    relatedLabel: "Relacionado",
    relatedTitle: "Otras presentaciones que hace PitchBoost",
    guidesLabel: "Guías",
    ctaNote: "Gratis para tu primera presentación. $9 una sola vez para descargar una terminada, o planes desde $7 al mes.",
    inEnglish: " (en inglés)",
  },
  pt: {
    breadcrumbHome: "Início",
    breadcrumbHub: "Criador de apresentações com IA",
    topicLabel: "Sobre o que é a sua apresentação?",
    topicButton: "Criar minha apresentação",
    haveSlides: "Já tem slides?",
    redesignLink: "Redesenhe a apresentação que você já tem",
    redesignTail: ".",
    freeNote: "Grátis na sua primeira apresentação. Sem cartão.",
    deckLabel: "A apresentação que você recebe",
    deckTitle: "Como o PitchBoost monta {forLabel}",
    deckBody: "Não é um pitch com o seu tema colado. Os slides seguem a ordem que esse tipo de apresentação realmente pede.",
    whyLabel: "Por que é mais difícil do que parece",
    whyTitle: "O que costuma dar errado",
    getLabel: "O que você recebe",
    getTitle: "O que volta para você",
    tryLabel: "Experimente",
    tryTitle: "Prompts que funcionam",
    tryBody: "Específico ganha de curto: diga para quem é, quanto tempo dura e o que não pode faltar. Escolha um para começar com ele já preenchido.",
    tryLink: "Começar com este prompt",
    faqLabel: "Perguntas frequentes",
    faqTitle: "O que as pessoas perguntam",
    relatedLabel: "Relacionado",
    relatedTitle: "Outras apresentações que o PitchBoost faz",
    guidesLabel: "Guias",
    ctaNote: "Grátis na sua primeira apresentação. $9 uma única vez para baixar uma pronta, ou planos a partir de $7/mês.",
    inEnglish: " (em inglês)",
  },
};

type Item = { title: string; body: string };

export interface PresentationHubCopy {
  title: string;
  description: string;
  h1: string;
  subhead: string;
  placeholder: string;
  ogSubtitle: string;
  listName: string;
  pickLabel: string;
  pickTitle: string;
  pickBody: string;
  redesignCard: Item;
  pitchCard: Item;
  howLabel: string;
  howTitle: string;
  steps: Item[];
  whyLabel: string;
  whyTitle: string;
  why: Item[];
  compareLabel: string;
  compareTitle: string;
  /** Same order as COMPARE_LINKS in the hub view: Gamma, ChatGPT, Copilot. */
  compare: { name: string; body: string; link: string }[];
  faqs: { q: string; a: string }[];
  ctaHeadline: string;
  ctaPlaceholder: string;
}

export const PRESENTATION_HUB: Record<Locale, PresentationHubCopy> = {
  en: {
    title: "AI Presentation Maker: Make or Redesign Any Deck | PitchBoost",
    description:
      "Make a presentation from a prompt or redesign the one you have. Lessons, reports, talks and pitches, shaped for their purpose, in your brand and any language.",
    h1: "Say what it's for. Get a deck built for that room.",
    subhead:
      "PitchBoost writes and designs the whole presentation: a lesson that ends on takeaways, a board update that leads with the result, a pitch written for one buyer. Or bring the deck you already have and get it back redesigned, every number kept.",
    placeholder: "Photosynthesis for my 9th grade biology class, 10 slides",
    ogSubtitle: "Lessons, reports, talks and pitches from a prompt, or the deck you have redesigned. Any language, your brand.",
    listName: "Presentations PitchBoost makes",
    pickLabel: "Pick yours",
    pickTitle: "What are you making?",
    pickBody: "Each kind of presentation runs a different way. Here is how PitchBoost builds the common ones.",
    redesignCard: { title: "A deck you already have", body: "Redesigned in your brand, one slide per original slide, every number kept." },
    pitchCard: { title: "Sales and investor pitches", body: "Written for one specific prospect or investor, with a clear next step." },
    howLabel: "How it works",
    howTitle: "A few minutes, start to finish",
    steps: [
      { title: "Say what it's for", body: "Type the topic, who will see it and how long you have. Paste your notes or attach a PDF if you have them; the more of your own material, the less guessing." },
      { title: "PitchBoost builds the whole deck", body: "It picks the shape the purpose needs, writes every slide, cites the figures it adds, and designs it in your brand, lifted from a website you point it at." },
      { title: "Edit, share, download", body: "Change any slide with a sentence. Share a link and see when it is opened, or download PowerPoint, PDF or Google Slides." },
    ],
    whyLabel: "Why PitchBoost",
    whyTitle: "What the generic slide generators skip",
    why: [
      { title: "Shaped for the purpose", body: "A lecture is not a pitch. PitchBoost changes the structure, not just the words: a lesson ends on takeaways and questions, a report on the decision it needs, a pitch on a next step." },
      { title: "Facts you can stand behind", body: "Figures it adds come with a source on the slide. Anything it cannot trace is flagged for you to check before you present, and pitches and reports drop untraceable numbers outright." },
      { title: "Keeps the deck you already have", body: "Upload a PowerPoint or PDF and get one redesigned slide per original slide, with your words and your numbers intact. Ugly slides in, clean slides out." },
      { title: "A PowerPoint that opens cleanly", body: "Download an exact-look PowerPoint, or an editable one with real text boxes and speaker notes. PDF and Google Slides too, so the classroom computer is not a problem." },
      { title: "Any language", body: "Decks come out in the language you write in, right-to-left scripts like Arabic, Persian and Hebrew included, all the way into the editable PowerPoint." },
      { title: "One deck, one price", body: "Your first deck each month is free. Finishing one deck for download is $9 once, no subscription to remember to cancel. Plans start at $7 a month." },
    ],
    compareLabel: "Compared honestly",
    compareTitle: "When something else is the better fit",
    compare: [
      { name: "Gamma", body: "A fast, web-first canvas for decks, docs and simple sites, great when you present from Gamma itself. PitchBoost is the pick when the deck has to work as a PowerPoint or PDF, or starts from one you already have.", link: "PitchBoost vs Gamma" },
      { name: "ChatGPT on its own", body: "Writes a solid outline, then leaves the slides to you. PitchBoost turns that outline into a designed deck, and it runs inside ChatGPT, free accounts included.", link: "PitchBoost in ChatGPT" },
      { name: "Copilot in PowerPoint", body: "Builds inside PowerPoint if your Microsoft 365 plan includes it. PitchBoost works in any browser, redesigns the deck you have slide for slide, and does not need a subscription for a single deck.", link: "Copilot alternatives" },
    ],
    faqs: [
      { q: "Is PitchBoost free?", a: "Your first AI deck each month is free, up to 10 slides with a small badge, shared as a link. Downloading files (PowerPoint, PDF, Google Slides) takes a paid plan from $7 a month, or $9 once to finish that one deck." },
      { q: "What kinds of presentations can it make?", a: "Lessons and lectures, class presentations, thesis defenses, research talks, training sessions, reports and board updates, investor updates, conference talks, and sales or investor pitches. It changes the structure to fit the purpose instead of pouring every topic into the same template." },
      { q: "Does it make things up?", a: "It is built not to. Figures it adds carry a source on the slide; anything it cannot trace is flagged in a facts panel for you to check, and in pitches and reports untraceable numbers are removed before you see the deck. Read the facts panel before you present, as you would with any AI tool." },
      { q: "Can it redesign the PowerPoint I already have?", a: "Yes. Upload a .pptx or a PDF deck, up to 50 MB and 75 slides. You get one redesigned slide per original slide, in your brand, with your words and numbers kept. Google Slides and Keynote decks work after exporting to .pptx." },
      { q: "What languages does it work in?", a: "The language you write in, including right-to-left scripts such as Arabic, Persian, Hebrew and Urdu. Right-to-left decks stay right-to-left in the editable PowerPoint." },
      { q: "Can I use it inside ChatGPT or Claude?", a: "Yes. PitchBoost is in ChatGPT's app directory and works on free ChatGPT accounts, and Claude can use it through its MCP server. Ask for a presentation in the chat and you get a link back." },
      { q: "How is it different from Gamma?", a: "Gamma is a fast, web-first canvas for decks, docs and simple sites. PitchBoost only makes presentations, and it is built for the deck that has to work as a file: redesigned from the one you have, figures checked, exported to a PowerPoint that opens cleanly, and $9 for a single deck instead of a subscription." },
    ],
    ctaHeadline: "Your next presentation, minus the formatting.",
    ctaPlaceholder: "Q3 results for the board: revenue, churn, and the hiring decision",
  },
  es: {
    title: "Creador de presentaciones con IA: crea o rediseña | PitchBoost",
    description:
      "Crea una presentación desde un prompt o rediseña la que tienes. Clases, informes, charlas y pitches, cada uno con su estructura, con tu marca y en tu idioma.",
    h1: "Di para qué es. Recibe una presentación hecha para ese público.",
    subhead:
      "PitchBoost escribe y diseña la presentación completa: una clase que cierra con las ideas clave, un informe para el directorio que empieza por el resultado, un pitch escrito para un solo cliente. O trae la presentación que ya tienes y recíbela rediseñada, con todas sus cifras intactas.",
    placeholder: "La fotosíntesis, para mi clase de biología de secundaria, 10 diapositivas",
    ogSubtitle: "Clases, informes, charlas y pitches desde un prompt, o tu presentación rediseñada. En cualquier idioma, con tu marca.",
    listName: "Presentaciones que hace PitchBoost",
    pickLabel: "Elige la tuya",
    pickTitle: "¿Qué estás preparando?",
    pickBody: "Cada tipo de presentación funciona distinto. Así arma PitchBoost las más comunes.",
    redesignCard: { title: "Una presentación que ya tienes", body: "Rediseñada con tu marca, una diapositiva por cada original, con todas las cifras intactas." },
    pitchCard: { title: "Pitches de ventas y para inversores", body: "Escritos para un cliente o inversor concreto, con un próximo paso claro." },
    howLabel: "Cómo funciona",
    howTitle: "Unos minutos, de principio a fin",
    steps: [
      { title: "Di para qué es", body: "Escribe el tema, quién la va a ver y cuánto tiempo tienes. Pega tus notas o adjunta un PDF si los tienes: cuanto más material tuyo, menos tiene que adivinar." },
      { title: "PitchBoost arma la presentación completa", body: "Elige la estructura que pide el propósito, escribe cada diapositiva, cita las cifras que agrega y la diseña con tu marca, tomada del sitio web que le indiques." },
      { title: "Edita, comparte, descarga", body: "Cambia cualquier diapositiva con una frase. Comparte un enlace y ve cuándo lo abren, o descarga PowerPoint, PDF o Google Slides." },
    ],
    whyLabel: "Por qué PitchBoost",
    whyTitle: "Lo que se saltan los generadores de diapositivas genéricos",
    why: [
      { title: "Pensada para su propósito", body: "Una clase no es un pitch. PitchBoost cambia la estructura, no solo las palabras: una clase termina con ideas clave y preguntas, un informe con la decisión que necesita, un pitch con un próximo paso." },
      { title: "Datos que puedes defender", body: "Las cifras que agrega llevan su fuente en la diapositiva. Lo que no puede rastrear queda marcado para que lo revises antes de presentar, y en pitches e informes las cifras sin fuente se eliminan directamente." },
      { title: "Respeta la presentación que ya tienes", body: "Sube un PowerPoint o PDF y recibe una diapositiva rediseñada por cada original, con tus palabras y tus cifras intactas. Entran diapositivas feas, salen limpias." },
      { title: "Un PowerPoint que abre sin sorpresas", body: "Descarga un PowerPoint idéntico a lo que ves, o uno editable con cuadros de texto reales y notas del orador. También PDF y Google Slides, así que la computadora del aula no es un problema." },
      { title: "Cualquier idioma", body: "Las presentaciones salen en el idioma en que escribes, incluidos los de derecha a izquierda como el árabe, el persa y el hebreo, hasta en el PowerPoint editable." },
      { title: "Una presentación, un precio", body: "Tu primera presentación de cada mes es gratis. Terminar una para descargarla cuesta $9 una sola vez, sin una suscripción que tengas que acordarte de cancelar. Los planes empiezan en $7 al mes." },
    ],
    compareLabel: "Comparación honesta",
    compareTitle: "Cuándo te conviene otra herramienta",
    compare: [
      { name: "Gamma", body: "Un lienzo rápido, pensado para la web, para presentaciones, documentos y sitios sencillos, ideal si presentas desde el propio Gamma. PitchBoost es la opción cuando la presentación tiene que funcionar como PowerPoint o PDF, o parte de una que ya tienes.", link: "PitchBoost vs Gamma" },
      { name: "ChatGPT por sí solo", body: "Escribe un buen esquema y te deja las diapositivas a ti. PitchBoost convierte ese esquema en una presentación diseñada, y funciona dentro de ChatGPT, también en cuentas gratuitas.", link: "PitchBoost en ChatGPT" },
      { name: "Copilot en PowerPoint", body: "Crea dentro de PowerPoint si tu plan de Microsoft 365 lo incluye. PitchBoost funciona en cualquier navegador, rediseña tu presentación diapositiva por diapositiva y no exige suscripción para una sola presentación.", link: "Alternativas a Copilot" },
    ],
    faqs: [
      { q: "¿PitchBoost es gratis?", a: "Tu primera presentación con IA de cada mes es gratis, de hasta 10 diapositivas con una pequeña insignia, y se comparte como enlace. Para descargar archivos (PowerPoint, PDF, Google Slides) necesitas un plan de pago desde $7 al mes, o $9 una sola vez para terminar esa presentación." },
      { q: "¿Qué tipos de presentaciones puede hacer?", a: "Clases y conferencias, presentaciones escolares, defensas de tesis, ponencias de investigación, capacitaciones, informes y reportes para el directorio, actualizaciones para inversores, charlas en congresos y pitches de ventas o para inversores. Ajusta la estructura al propósito en vez de meter cada tema en la misma plantilla." },
      { q: "¿Inventa cosas?", a: "Está hecho para no hacerlo. Las cifras que agrega llevan su fuente en la diapositiva; lo que no puede rastrear queda marcado en el panel \"Datos por verificar\" para que lo revises, y en pitches e informes las cifras sin fuente se eliminan antes de que veas la presentación. Revisa ese panel antes de presentar, como harías con cualquier herramienta de IA." },
      { q: "¿Puede rediseñar el PowerPoint que ya tengo?", a: "Sí. Sube un .pptx o una presentación en PDF, de hasta 50 MB y 75 diapositivas. Recibes una diapositiva rediseñada por cada original, con tu marca, conservando tus palabras y tus cifras. Las presentaciones de Google Slides y Keynote funcionan después de exportarlas a .pptx." },
      { q: "¿En qué idiomas funciona?", a: "En el idioma en que escribes, incluidos los de derecha a izquierda como el árabe, el persa, el hebreo y el urdu. Las presentaciones de derecha a izquierda siguen así en el PowerPoint editable." },
      { q: "¿Puedo usarlo dentro de ChatGPT o Claude?", a: "Sí. PitchBoost está en el directorio de apps de ChatGPT y funciona en cuentas gratuitas de ChatGPT, y Claude puede usarlo a través de su servidor MCP. Pide una presentación en el chat y recibes un enlace." },
      { q: "¿En qué se diferencia de Gamma?", a: "Gamma es un lienzo rápido, pensado para la web, para presentaciones, documentos y sitios sencillos. PitchBoost solo hace presentaciones, y está pensado para la presentación que tiene que funcionar como archivo: rediseñada a partir de la que ya tienes, con las cifras verificadas, exportada a un PowerPoint que abre sin sorpresas, y $9 por una sola presentación en vez de una suscripción." },
    ],
    ctaHeadline: "Tu próxima presentación, sin pelearte con el formato.",
    ctaPlaceholder: "Resultados del tercer trimestre para el directorio: ingresos, bajas de clientes y la decisión de contratación",
  },
  pt: {
    title: "Criador de apresentações com IA: crie ou redesenhe | PitchBoost",
    description:
      "Crie uma apresentação com um prompt ou redesenhe a que você já tem. Aulas, relatórios, palestras e pitches, cada um com sua estrutura, na sua marca e idioma.",
    h1: "Diga para que é. Receba uma apresentação feita para esse público.",
    subhead:
      "O PitchBoost escreve e faz o design da apresentação inteira: uma aula que fecha com os pontos principais, uma atualização para o conselho que abre com o resultado, um pitch escrito para um único cliente. Ou traga a apresentação que você já tem e receba de volta com novo design, sem perder nenhum número.",
    placeholder: "Fotossíntese para minha aula de biologia do 9º ano, 10 slides",
    ogSubtitle: "Aulas, relatórios, palestras e pitches a partir de um prompt, ou a sua apresentação com novo design. Qualquer idioma, na sua marca.",
    listName: "Apresentações que o PitchBoost faz",
    pickLabel: "Escolha a sua",
    pickTitle: "O que você está preparando?",
    pickBody: "Cada tipo de apresentação funciona de um jeito. Veja como o PitchBoost monta as mais comuns.",
    redesignCard: { title: "Uma apresentação que você já tem", body: "Com novo design na sua marca, um slide para cada slide original, com todos os números mantidos." },
    pitchCard: { title: "Pitches de vendas e para investidores", body: "Escritos para um cliente ou investidor específico, com um próximo passo claro." },
    howLabel: "Como funciona",
    howTitle: "Poucos minutos, do começo ao fim",
    steps: [
      { title: "Diga para que é", body: "Escreva o tema, quem vai assistir e quanto tempo você tem. Cole suas anotações ou anexe um PDF, se tiver: quanto mais material seu, menos ele precisa adivinhar." },
      { title: "O PitchBoost monta a apresentação inteira", body: "Escolhe a estrutura que o objetivo pede, escreve cada slide, cita os números que acrescenta e aplica a sua marca, tirada do site que você indicar." },
      { title: "Edite, compartilhe, baixe", body: "Mude qualquer slide com uma frase. Compartilhe um link e veja quando ele é aberto, ou baixe em PowerPoint, PDF ou Google Slides." },
    ],
    whyLabel: "Por que o PitchBoost",
    whyTitle: "O que os geradores de slides genéricos deixam de lado",
    why: [
      { title: "Feita para o objetivo", body: "Uma aula não é um pitch. O PitchBoost muda a estrutura, não só as palavras: uma aula termina com os pontos principais e perguntas, um relatório com a decisão de que precisa, um pitch com um próximo passo." },
      { title: "Dados que você pode defender", body: "Os números que ele acrescenta vêm com a fonte no slide. O que não dá para rastrear fica sinalizado para você conferir antes de apresentar, e em pitches e relatórios números sem fonte são removidos de vez." },
      { title: "Mantém a apresentação que você já tem", body: "Envie um PowerPoint ou PDF e receba um slide com novo design para cada slide original, com suas palavras e seus números intactos. Entram slides feios, saem slides limpos." },
      { title: "Um PowerPoint que abre sem surpresas", body: "Baixe um PowerPoint idêntico ao que você vê, ou um editável com caixas de texto de verdade e anotações do apresentador. PDF e Google Slides também, então o computador da sala de aula não é problema." },
      { title: "Qualquer idioma", body: "As apresentações saem no idioma em que você escreve, inclusive os escritos da direita para a esquerda, como árabe, persa e hebraico, até no PowerPoint editável." },
      { title: "Uma apresentação, um preço", body: "Sua primeira apresentação de cada mês é grátis. Finalizar uma para baixar custa $9 uma única vez, sem assinatura para lembrar de cancelar. Os planos começam em $7/mês." },
    ],
    compareLabel: "Comparação honesta",
    compareTitle: "Quando outra ferramenta faz mais sentido",
    compare: [
      { name: "Gamma", body: "Uma tela rápida, feita para a web, para apresentações, documentos e sites simples, ótima quando você apresenta pelo próprio Gamma. O PitchBoost é a escolha quando a apresentação precisa funcionar como PowerPoint ou PDF, ou parte de uma que você já tem.", link: "PitchBoost vs Gamma" },
      { name: "ChatGPT sozinho", body: "Escreve um bom roteiro e deixa os slides com você. O PitchBoost transforma esse roteiro em uma apresentação com design, e funciona dentro do ChatGPT, inclusive em contas gratuitas.", link: "PitchBoost no ChatGPT" },
      { name: "Copilot no PowerPoint", body: "Cria dentro do PowerPoint se o seu plano do Microsoft 365 incluir. O PitchBoost funciona em qualquer navegador, redesenha a sua apresentação slide por slide e não exige assinatura para uma única apresentação.", link: "Alternativas ao Copilot" },
    ],
    faqs: [
      { q: "O PitchBoost é grátis?", a: "Sua primeira apresentação com IA de cada mês é grátis, com até 10 slides e um pequeno selo, compartilhada por link. Para baixar arquivos (PowerPoint, PDF, Google Slides) é preciso um plano pago a partir de $7/mês, ou $9 uma única vez para finalizar essa apresentação." },
      { q: "Que tipos de apresentação ele faz?", a: "Aulas e palestras, apresentações escolares, defesas de TCC e de tese, apresentações de pesquisa, treinamentos, relatórios e atualizações para o conselho, atualizações para investidores, palestras em congressos e pitches de vendas ou para investidores. Ele ajusta a estrutura ao objetivo em vez de colocar todo tema no mesmo modelo." },
      { q: "Ele inventa coisas?", a: "Ele foi feito para não inventar. Os números que acrescenta trazem a fonte no slide; o que não dá para rastrear fica sinalizado no painel \"Dados a verificar\" para você conferir, e em pitches e relatórios números sem fonte são removidos antes de você ver a apresentação. Leia esse painel antes de apresentar, como faria com qualquer ferramenta de IA." },
      { q: "Ele redesenha o PowerPoint que eu já tenho?", a: "Sim. Envie um .pptx ou uma apresentação em PDF, com até 50 MB e 75 slides. Você recebe um slide com novo design para cada slide original, na sua marca, mantendo suas palavras e seus números. Apresentações do Google Slides e do Keynote funcionam depois de exportadas para .pptx." },
      { q: "Em quais idiomas ele funciona?", a: "No idioma em que você escreve, inclusive os escritos da direita para a esquerda, como árabe, persa, hebraico e urdu. Apresentações da direita para a esquerda continuam assim no PowerPoint editável." },
      { q: "Posso usar dentro do ChatGPT ou do Claude?", a: "Sim. O PitchBoost está no diretório de apps do ChatGPT e funciona em contas gratuitas do ChatGPT, e o Claude pode usá-lo pelo servidor MCP. Peça uma apresentação no chat e você recebe um link." },
      { q: "Qual a diferença para o Gamma?", a: "O Gamma é uma tela rápida, feita para a web, para apresentações, documentos e sites simples. O PitchBoost só faz apresentações, e foi feito para a apresentação que precisa funcionar como arquivo: redesenhada a partir da que você tem, com os números conferidos, exportada para um PowerPoint que abre sem surpresas, e $9 por uma única apresentação em vez de uma assinatura." },
    ],
    ctaHeadline: "Sua próxima apresentação, sem brigar com a formatação.",
    ctaPlaceholder: "Resultados do terceiro trimestre para o conselho: receita, churn e a decisão de contratação",
  },
};
