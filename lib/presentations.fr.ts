import type { PresentationPage } from "./presentations";

/** Generated translation of lib/presentations.ts; keep in sync. French (France, "vous"). */
export const PRESENTATIONS_FR: PresentationPage[] = [
  {
    slug: "class-presentation",
    navLabel: "Exposés en classe",
    metaTitle: "Créateur d'exposés par IA pour élèves et étudiants | PitchBoost",
    metaDescription:
      "Exposés par IA pour élèves et étudiants : d'un sujet ou de vos notes à une présentation de classe, aux couleurs de votre école. Une présentation gratuite par mois.",
    heroHeadline: "L'exposé est pour vendredi. Vos diapositives, dès aujourd'hui.",
    heroSubhead:
      "Tapez le sujet, ou joignez la consigne et vos notes. PitchBoost construit en quelques minutes un exposé qui suit un ordre logique, aux couleurs de votre établissement.",
    forLabel: "un exposé en classe",
    promptPlaceholder: "Les causes de la Révolution française, pour mon cours d'histoire de seconde",
    outline: [
      {
        title: "Titre",
        body: "Votre sujet, la classe, la date et qui présente, avec le nom de chaque membre s'il s'agit d'un exposé de groupe.",
      },
      {
        title: "Au programme",
        body: "Trois ou quatre points dans l'ordre où vous les présenterez, pour que la classe sache où vous allez.",
      },
      {
        title: "Contexte",
        body: "Ce qu'il faut savoir d'abord : quand, où et pourquoi c'est important. Une diapositive, pas cinq.",
      },
      {
        title: "Les points principaux",
        body: "Une idée par diapositive, dans un ordre logique, pour que personne ne lise un paragraphe pendant que vous parlez.",
      },
      {
        title: "Exemples et preuves",
        body: "Un cas, un événement ou un chiffre qui rend chaque point concret. Les chiffres ajoutés peuvent renvoyer à leur source.",
      },
      {
        title: "À retenir",
        body: "Les trois choses que la classe doit retenir, même si elle oublie tout le reste.",
      },
      {
        title: "Questions",
        body: "Une diapositive de clôture qui invite aux questions, pour que l'exposé se termine franchement au lieu de s'essouffler.",
      },
    ],
    painPoints: [
      {
        title: "L'échéance approche et les diapositives sont vides",
        body: "Vous avez le sujet et une page de notes. Les transformer en diapositives qui s'enchaînent logiquement, c'est ce qui vous prend toute la soirée de la veille.",
      },
      {
        title: "Quatre membres, quatre polices",
        body: "Chacun prépare sa partie dans son propre style. Le résultat ressemble à quatre exposés agrafés ensemble, et celui qui se propose de tout harmoniser le fait seul, à minuit.",
      },
      {
        title: "Un seul chiffre inventé peut tout faire couler",
        body: "Les outils d'IA affirment une statistique inventée avec un aplomb total. Les professeurs vérifient. Un chiffre faux sur la diapositive 4 vous coûte bien plus qu'une diapositive 4 ratée.",
      },
    ],
    outcomes: [
      "Une présentation dans l'ordre d'un exposé en classe : le programme, les points principaux avec des exemples, ce qu'il faut retenir, puis les questions.",
      "Le logo, les couleurs et les polices de votre établissement, repris de son site web ou définis à la main.",
      "Les chiffres qu'il ajoute peuvent être accompagnés d'une source en lien, et tout ce qu'il ne peut pas relier à vos notes ou à une source est signalé pour que vous le vérifiiez.",
      "Les diapositives déjà faites par votre groupe dans Google Slides ou Keynote peuvent être exportées en .pptx et refaites, en gardant chaque diapositive et chaque mot.",
      "Demandez une modification sur une diapositive et les autres restent exactement comme elles étaient.",
      "Partagez-la gratuitement par un lien de partage ; télécharger un PDF, un PowerPoint ou un fichier Google Slides demande une offre payante ou $9 pour cette seule présentation.",
    ],
    examplePrompts: [
      "Un exposé de groupe de 10 minutes sur les causes de la crise de 1929, pour mon cours d'histoire de première, en quatre parties, une par membre du groupe.",
      "6 diapositives en espagnol sur les traditions du Jour des morts pour mon cours d'espagnol LV2. Vocabulaire simple, une tradition par diapositive.",
      "Psycho en L1 : un exposé de 5 minutes sur le sommeil et la mémoire, d'après mes notes jointes, avec trois points à retenir et une question pour la classe.",
    ],
    faqs: [
      {
        q: "Peut-il utiliser les couleurs et le logo de mon établissement ?",
        a: "Oui. Donnez-lui le site web de votre établissement et il reprend le logo, les couleurs et les polices. Vous préférez le style de votre association, ou le vôtre ? Donnez-lui ce site à la place, ou réglez tout à la main.",
      },
      {
        q: "Va-t-il inventer des faits ?",
        a: "Il est conçu pour ne pas le faire, et il montre son travail. Les chiffres qu'il ajoute peuvent être accompagnés de leur source en lien sur la diapositive, et tout ce qu'il ne peut pas relier à vos notes ou à une source citée est signalé pour que vous le vérifiiez. Vérifiez ces signalements avant de présenter, car votre professeur le fera.",
      },
      {
        q: "Ai-je le droit de l'utiliser pour un devoir ?",
        a: "Cela dépend de votre cours : vérifiez les consignes ou demandez à votre professeur. Si le contenu rédigé par une IA est interdit, rédigez vous-même les diapositives et importez-les : une refonte garde vos mots et vos chiffres et ne change que le design. Dans tous les cas, les idées doivent venir de vous.",
      },
      {
        q: "Combien coûte une présentation ?",
        a: "L'offre gratuite crée une présentation par IA par mois, jusqu'à 10 diapositives, avec un petit badge, partagée par lien. Pour la télécharger en PDF, PowerPoint ou Google Slides, payez $9 une fois pour cette présentation (jusqu'à 25 diapositives, sans badge) ou choisissez Starter à $7 par mois.",
      },
      {
        q: "Pourquoi ne pas simplement demander à ChatGPT, ou utiliser Gamma ?",
        a: "Vous pouvez, et pour un premier jet l'un ou l'autre peut suffire. PitchBoost construit la présentation dans l'ordre d'un exposé en classe, l'habille aux couleurs de votre établissement et signale tout chiffre qu'il ne peut pas tracer. Il fonctionne aussi dans ChatGPT, comptes gratuits compris, donc pas besoin de choisir.",
      },
    ],
    relatedRedesigns: ["google-slides-and-keynote-redesign", "fix-ugly-powerpoint", "make-powerpoint-look-professional"],
    ctaHeadline: "Partez du sujet. Terminez avant que le groupe ait répondu.",
    updated: "2026-10-22",
  },

  {
    slug: "lecture-slides",
    navLabel: "Supports de cours",
    metaTitle: "Diapositives de cours par IA pour enseignants | PitchBoost",
    metaDescription:
      "Diapositives par IA pour enseignants : vos notes deviennent un cours dans l'ordre pédagogique, ou celui de l'an dernier est refait. Aux couleurs de l'école, gratuit.",
    heroHeadline: "Des supports de cours qui ne vous volent pas votre dimanche",
    heroSubhead:
      "Partez d'un sujet, de vos notes ou d'un polycopié en PDF, et obtenez un cours dans l'ordre pédagogique, avec exemples, points à retenir et questions. Ou apportez celui de l'an dernier : chaque diapositive reste, le design se met à jour.",
    forLabel: "un cours ou une séance",
    promptPlaceholder: "Semaine 3 du cours d'introduction aux statistiques : échantillonnage et biais",
    outline: [
      {
        title: "Titre",
        body: "Le sujet, le cours et la date, plus le chapitre ou la semaine, pour que tout reste clair quand les élèves révisent.",
      },
      {
        title: "Au programme",
        body: "Les notions du jour dans l'ordre où vous les enseignerez. Les élèves savent où va l'heure, et vous aussi.",
      },
      {
        title: "Vocabulaire clé",
        body: "Les termes dont dépend le cours, définis une fois, avant que quiconque en ait besoin.",
      },
      {
        title: "Les notions, dans l'ordre",
        body: "Une notion par diapositive, chacune s'appuyant sur la précédente, pour que chaque étape repose sur du solide.",
      },
      {
        title: "Exemples corrigés",
        body: "Un exemple pour chaque notion : un exercice résolu pas à pas, un cas, ou une situation de la vie courante.",
      },
      {
        title: "À retenir",
        body: "Ce que les élèves doivent savoir en sortant, sur la seule diapositive qu'ils prendront en photo.",
      },
      {
        title: "Questions et discussion",
        body: "Une ou deux pistes de discussion, puis les questions. Moins coûteux que de découvrir les lacunes au contrôle.",
      },
    ],
    painPoints: [
      {
        title: "Chaque cours vous coûte une soirée",
        body: "Le cours prend une heure à faire et une soirée à préparer, chaque semaine, après une journée entière devant une classe. Il faut bien sacrifier quelque chose, et ce sont souvent les diapositives.",
      },
      {
        title: "La présentation de 2014 marche encore, techniquement",
        body: "Le contenu est solide. Les diapositives, c'est du clip art, trois polices et un modèle que personne ne se souvient avoir choisi. Tout refaire à la main, c'est perdre un week-end pour un cours qui fonctionne déjà.",
      },
      {
        title: "Une erreur recopiée 30 fois",
        body: "Chaque diapositive projetée finit dans les cahiers. Une date inventée ou un chiffre fantaisiste ne reste pas sur la diapositive : il passe dans 30 cahiers et, tôt ou tard, dans un contrôle.",
      },
    ],
    outcomes: [
      "Des cours construits dans l'ordre pédagogique : le programme, les notions avec des exemples, ce qu'il faut retenir, puis les questions.",
      "Les chiffres qu'il ajoute peuvent renvoyer à leur source directement sur la diapositive, et ceux qu'il ne peut pas tracer apparaissent comme des signalements à vérifier.",
      "La présentation de l'an dernier, importée en .pptx ou en PDF, revient avec un nouveau design, chaque diapositive, vos mots et vos chiffres intacts.",
      "Les couleurs et le logo de l'établissement sur chaque diapositive, repris de son site web, pour que la présentation ait l'air de faire partie du cours.",
      "De courtes notes de l'orateur dans le PowerPoint modifiable, pour la personne qui fera ce cours la prochaine fois.",
      "Retravaillez une seule diapositive en le demandant, et le reste du cours ne bouge pas.",
    ],
    examplePrompts: [
      "Un cours magistral de 50 minutes sur l'offre et la demande en L1 d'économie, avec un exemple du quotidien par notion et trois questions de discussion à la fin.",
      "La photosynthèse pour mes 5e en SVT, 45 minutes. D'abord le vocabulaire clé, puis le processus étape par étape, puis un court récapitulatif.",
      "Chapitre 4 de physique-chimie en terminale, l'équilibre chimique, d'après mes notes jointes. Gardez mes exemples corrigés exactement tels que je les ai écrits.",
    ],
    faqs: [
      {
        q: "Peut-il partir des diapositives que j'utilise déjà ?",
        a: "Oui. Importez la présentation en .pptx ou en PDF, jusqu'à 50 Mo et 75 diapositives ; les présentations Google Slides et Keynote s'exportent d'abord en .pptx. La refonte garde chaque diapositive, vos mots et vos chiffres, une diapositive pour chaque diapositive d'origine, pour que rien de ce sur quoi vous comptez ne disparaisse.",
      },
      {
        q: "Comment savoir si les faits sont justes ?",
        a: "Les chiffres qu'il ajoute à un cours peuvent être accompagnés de leur source, en lien sur la diapositive. Tout ce qu'il ne peut pas relier à vos supports ou à une source citée est signalé pour que vous le vérifiiez avant le cours. Vous connaissez la matière ; les signalements vous montrent exactement où regarder.",
      },
      {
        q: "Puis-je modifier une diapositive sans refaire tout le cours ?",
        a: "Oui. Demandez à l'IA un exemple plus difficile ou une définition plus simple sur une diapositive, et toutes les autres restent telles quelles. Vous pouvez aussi modifier vous-même n'importe quelle diapositive ; le PowerPoint modifiable, avec de vraies zones de texte, est inclus dans une offre payante ou avec l'option à $9 pour une présentation.",
      },
      {
        q: "Puis-je enseigner en espagnol, en arabe ou dans une autre langue ?",
        a: "Oui. Indiquez la langue dans laquelle vous enseignez et le cours revient dans cette langue. Les écritures de droite à gauche fonctionnent aussi, dont l'arabe, le persan, l'hébreu et l'ourdou, et elles restent de droite à gauche dans le PowerPoint modifiable.",
      },
      {
        q: "En quoi est-ce différent des autres outils de diapositives par IA ?",
        a: "La plupart savent rédiger des diapositives à partir d'une consigne, et pour un plan rapide, cela peut suffire. PitchBoost structure la présentation comme un cours, cite les chiffres qu'il ajoute quand il le peut, signale ce qu'il ne peut pas tracer, et refait le design du cours que vous donnez déjà, une diapositive pour chaque diapositive d'origine. Ce dernier point compte quand le cours vous a pris dix ans à mettre au point.",
      },
    ],
    relatedRedesigns: ["modernize-old-powerpoint", "training-deck-redesign", "google-slides-and-keynote-redesign"],
    ctaHeadline: "Le cours de l'an dernier, les diapositives de cette année.",
    updated: "2026-10-22",
  },

  {
    slug: "thesis-defense",
    navLabel: "Soutenance de thèse",
    metaTitle: "Soutenance de thèse ou de mémoire par IA | PitchBoost",
    metaDescription:
      "Vos diapositives de soutenance de thèse ou de mémoire, d'après vos travaux : question, méthodes, résultats, apport, limites. Chiffres non traçables signalés.",
    heroHeadline: "Une soutenance aussi soignée que votre thèse",
    heroSubhead:
      "Joignez votre résumé et vos résultats, ou collez-les. PitchBoost construit la soutenance dans l'ordre attendu par le jury, de la question de recherche aux limites, et signale tout chiffre non relié à vos travaux ou à une source citée.",
    forLabel: "une soutenance de thèse ou de mémoire",
    promptPlaceholder: "Ma soutenance de thèse sur la tolérance du blé à la sécheresse, 30 minutes plus les questions",
    outline: [
      {
        title: "Titre",
        body: "Le titre de la thèse, votre nom, le diplôme, le département et la date. La seule diapositive que le jury ne contestera pas.",
      },
      {
        title: "Question de recherche",
        body: "La question à laquelle répond votre thèse, en une phrase que le membre extérieur du jury peut suivre.",
      },
      {
        title: "Pourquoi c'est important",
        body: "La lacune dans les connaissances et pourquoi elle mérite d'être comblée. Le contexte limité à ce que la question exige.",
      },
      {
        title: "Méthodes",
        body: "Protocole, données et analyse, avec assez de détails pour faire confiance aux résultats. Le reste vit dans le chapitre méthodes.",
      },
      {
        title: "Résultats",
        body: "Les résultats, un par diapositive, dans l'ordre qui construit votre argumentation, avec les chiffres de vos travaux.",
      },
      {
        title: "Apport",
        body: "Ce que vos travaux apportent de nouveau. La réponse à la question que pose tout jury : et alors ?",
      },
      {
        title: "Limites et perspectives",
        body: "Ce que l'étude ne permet pas d'affirmer et ce que vous feriez ensuite. Mieux vaut le dire avant qu'on vous le demande.",
      },
      {
        title: "Questions",
        body: "Une diapositive de clôture pour les questions du jury. La partie « soutenance » de la soutenance.",
      },
    ],
    painPoints: [
      {
        title: "Des années de travail, trente minutes pour les montrer",
        body: "La thèse a pris des années. L'exposé dispose peut-être de trente minutes avant les questions. Choisir ce qui reste est déjà assez difficile sans se battre en plus avec la mise en page.",
      },
      {
        title: "Le jury lit chaque légende d'axe",
        body: "Un chiffre qui ne correspond pas au chapitre 4, ou une coquille dans un tableau de résultats, devient une question dont vous vous seriez passé, posée au pire moment.",
      },
      {
        title: "La rédaction a mangé tout votre temps",
        body: "La date de soutenance est fixée depuis des mois. Le dernier chapitre a été bouclé la semaine dernière. Les diapositives se font dans l'intervalle, qui n'en est pas un.",
      },
    ],
    outcomes: [
      "Une soutenance dans l'ordre attendu par le jury : question de recherche, enjeux, méthodes, résultats, apport, limites et perspectives, puis questions.",
      "Des résultats construits à partir des éléments que vous fournissez, et tout chiffre qu'il ne peut pas relier à vos travaux ou à une source citée est signalé pour vérification.",
      "Les couleurs, le logo et les polices de l'université, repris du site du département ou de l'université, ou définis à la main si votre formation a les siens.",
      "Une présentation déjà commencée, importée en .pptx ou en PDF, est refaite avec chaque diapositive, vos mots et vos chiffres conservés.",
      "De courtes notes de l'orateur accompagnent le PowerPoint modifiable, pour que la répétition ait un script dont s'écarter.",
      "Après les remarques de votre directeur de thèse, demandez à l'IA de retravailler une diapositive, et rien d'autre ne bouge.",
    ],
    examplePrompts: [
      "Soutenance de thèse en biologie moléculaire, 30 min plus questions, d'après mon résumé et mes résultats joints. Un membre du jury est hors discipline.",
      "Mémoire de master en politiques publiques, 20 min : encadrement des loyers et offre de logements en villes moyennes. Méthodes et résultats dans le PDF joint.",
      "Thèse en sciences de l'éducation : étude mixte sur la fidélisation des enseignants en zone rurale, avec 412 réponses au questionnaire et 18 entretiens.",
    ],
    faqs: [
      {
        q: "Peut-il construire les diapositives à partir de ma thèse ?",
        a: "Oui, à partir des éléments que vous lui donnez. Joignez en PDF les parties qui portent l'argumentation, comme votre résumé, vos résultats et vos conclusions, ou collez-les dans la consigne avec votre discipline, votre temps de parole et la composition du jury.",
      },
      {
        q: "Va-t-il modifier mes résultats ?",
        a: "Vos chiffres viennent de vos propres documents, et tout chiffre qu'il ne peut relier ni à ceux-ci ni à une source citée est signalé avant que votre jury n'en ait l'occasion. Importez plutôt une présentation déjà commencée et la refonte change le design, pas les données : mêmes diapositives, mêmes mots, mêmes chiffres.",
      },
      {
        q: "Mon directeur veut des modifications sur trois diapositives. Dois-je tout recommencer ?",
        a: "Non. Demandez à l'IA de modifier chacune de ces diapositives et les autres restent exactement comme elles étaient, ou modifiez-les vous-même. Pour la version que vous présenterez, une offre payante ou l'option à $9 vous donne le PowerPoint modifiable, avec de vraies zones de texte et de courtes notes de l'orateur.",
      },
      {
        q: "Combien coûte une présentation de soutenance ?",
        a: "Une soutenance dépasse généralement l'offre gratuite, qui crée une présentation par IA par mois jusqu'à 10 diapositives, partagée par lien avec un petit badge. Le plus simple : $9 une fois, pour cette présentation jusqu'à 25 diapositives, sans badge, avec tous les téléchargements (PDF, PowerPoint et Google Slides). Starter ($7 par mois) et Pro ($29 par mois) incluent aussi les téléchargements.",
      },
      {
        q: "ChatGPT ne peut-il pas faire ça ?",
        a: "ChatGPT est utile pour s'entraîner aux questions probables du jury, et vous devriez le faire. Pour les diapositives, PitchBoost construit la soutenance dans l'ordre attendu par le jury, aux couleurs de votre université, à partir de vos propres documents. Il fonctionne aussi dans ChatGPT, comptes gratuits compris, pour tout faire au même endroit.",
      },
    ],
    relatedRedesigns: ["data-heavy-deck-redesign", "make-powerpoint-look-professional", "beautify-powerpoint"],
    ctaHeadline: "Des années de recherche. Quelques minutes de diapositives.",
    updated: "2026-10-22",
  },

  {
    slug: "research-presentation",
    navLabel: "Présentations de recherche",
    metaTitle: "Article scientifique en présentation : journal club | PitchBoost",
    metaDescription:
      "D'un article scientifique à une présentation pour un journal club, une réunion de labo ou un congrès. Chiffres non reliés à l'article ou à une source signalés.",
    heroHeadline: "De l'article scientifique à un exposé que la salle peut suivre",
    heroSubhead:
      "Joignez l'article et dites qui vous écoute : journal club, réunion de labo ou congrès. PitchBoost construit l'exposé autour de la question, des méthodes et des résultats, et signale tout chiffre non relié à l'article ou à une source.",
    forLabel: "une présentation de recherche",
    promptPlaceholder: "L'article joint sur le microbiote intestinal et le sommeil, pour le journal club de jeudi",
    outline: [
      {
        title: "Titre",
        body: "Le titre de l'article, la revue et l'année, ou votre propre titre pour un congrès, plus qui présente.",
      },
      {
        title: "Pourquoi cet article",
        body: "Le problème qu'il traite et ce qui restait flou avant lui. La raison de s'y intéresser pendant les quinze prochaines minutes.",
      },
      {
        title: "Contexte",
        body: "Juste assez de contexte pour suivre la question, pensé pour les personnes présentes plutôt que pour les relecteurs.",
      },
      {
        title: "Question et hypothèse",
        body: "Ce que l'étude voulait tester, formulé assez clairement pour juger les résultats à cette aune.",
      },
      {
        title: "Méthodes",
        body: "Protocole, échantillon et analyse, au niveau de détail qu'exige une salle sceptique. Les journal clubs sont des salles sceptiques.",
      },
      {
        title: "Résultats clés",
        body: "Les principaux résultats, chacun avec les chiffres qui l'étayent, tirés de l'article joint.",
      },
      {
        title: "Forces et limites",
        body: "Ce que l'étude fait bien et là où elle est fragile. La diapositive qui lance la vraie discussion.",
      },
      {
        title: "À retenir",
        body: "Ce que les résultats signifient pour votre discipline ou votre labo, en trois lignes maximum.",
      },
      {
        title: "Discussion",
        body: "Deux ou trois questions pour ouvrir le débat, pour que la discussion ne commence pas par un silence.",
      },
    ],
    painPoints: [
      {
        title: "L'article est dense, alors les diapositives le sont encore plus",
        body: "La tentation est forte de coller le résumé, deux tableaux et une légende de figure sur une seule diapositive. La salle plisse les yeux, et la discussion ne dépasse jamais la diapositive trois.",
      },
      {
        title: "Le journal club revient déjà",
        body: "Bien présenter un article demande une soirée que vous n'avez pas entre deux manips. Alors les diapositives se font le matin même, et ça se voit dès la deuxième.",
      },
      {
        title: "Les chiffres s'abîment en chemin",
        body: "Une taille d'effet mal recopiée ou une valeur p arrondie jusqu'à la fiction, c'est exactement ce qu'une salle de chercheurs repérera. Et ils le feront remarquer.",
      },
    ],
    outcomes: [
      "Un exposé pensé pour la salle : pourquoi l'article compte, la question, les méthodes, les résultats, les forces et limites, puis la discussion.",
      "Les chiffres des diapositives de résultats sont vérifiés par rapport à l'article, et ceux qu'il ne peut relier ni à l'article ni à une source citée vous sont signalés.",
      "La présentation de la réunion de labo du mois dernier, importée en .pptx, revient avec un nouveau design, chaque diapositive et chaque chiffre conservés.",
      "Demandez une version simplifiée d'une diapositive pour un public mixte, et le reste de la présentation ne change pas.",
      "De courtes notes de l'orateur dans le PowerPoint modifiable, pour que la présentation ne dépende pas de votre mémoire.",
      "Envoyez-la au groupe par lien avant la réunion et voyez quelles diapositives ont été consultées, avec toutes les offres.",
    ],
    examplePrompts: [
      "Journal club sur l'article joint, 15 minutes, pour des internes en cardiologie. Une diapositive à part pour les limites de l'étude.",
      "Transformez l'article joint en communication de 12 minutes pour un congrès, devant un public mixte d'écologues et de data scientists. Méthodes en bref.",
      "Point en réunion de labo : mes résultats de qPCR des trois dernières semaines (joints), ce qui ne s'est pas répliqué, et ce que je veux tester ensuite.",
    ],
    faqs: [
      {
        q: "Puis-je transformer le PDF d'un article scientifique en diapositives ?",
        a: "Oui. Joignez l'article en PDF, indiquez le public et le temps dont vous disposez, et PitchBoost construit la présentation en quelques minutes. Pour un article long, collez aussi les résultats clés dans la consigne, pour qu'ils soient bien mis en avant.",
      },
      {
        q: "Va-t-il inventer des chiffres ou des résultats ?",
        a: "Il travaille à partir de l'article joint, et les chiffres qu'il ajoute peuvent être accompagnés d'une source en lien. Tout ce qu'il ne peut relier ni à l'un ni à l'autre est signalé pour que vous le vérifiiez, ce qui compte devant une salle qui lit les annexes.",
      },
      {
        q: "Peut-il utiliser les couleurs de mon labo ou de mon université ?",
        a: "Oui. Indiquez-lui le site web du labo ou de l'université et il en reprend le logo, les couleurs et les polices. Ou réglez-les à la main, si le site du labo n'a pas été mis à jour depuis le dernier financement.",
      },
      {
        q: "Est-ce que ça marche pour un congrès dans une autre langue ?",
        a: "Oui. Demandez les diapositives dans la langue de la session. L'arabe, le persan, l'hébreu et l'ourdou se lisent de droite à gauche, sur les diapositives comme dans le PowerPoint modifiable.",
      },
      {
        q: "Comment se compare-t-il à Gamma ?",
        a: "Gamma est un outil généraliste performant, rapide pour un premier jet. PitchBoost est plus ciblé : il part de l'article joint et vérifie les chiffres par rapport à lui, pour que vous corrigiez tout chiffre non relié avant que la salle ne le remarque. Il reprend aussi les couleurs de votre labo directement sur son site web.",
      },
    ],
    relatedRedesigns: ["data-heavy-deck-redesign", "conference-talk-slides-redesign", "fix-ugly-powerpoint"],
    ctaHeadline: "Apportez l'article. Repartez avec les diapositives.",
    updated: "2026-10-22",
  },

  {
    slug: "training-presentation",
    navLabel: "Formation et intégration",
    metaTitle: "Présentations de formation et d'intégration par IA | PitchBoost",
    metaDescription:
      "Créez vos supports de formation, d'intégration et d'atelier à partir de vos notes ou procédures, à vos couleurs. Ou importez l'ancienne présentation et gardez tout.",
    heroHeadline: "Des formations plus récentes que votre dernière recrue",
    heroSubhead:
      "Confiez vos notes ou vos procédures à PitchBoost, qui construit la session dans l'ordre pédagogique, aux couleurs de votre entreprise. Ou importez la présentation que vous avez déjà et gardez chaque diapositive.",
    forLabel: "une session de formation",
    promptPlaceholder: "Intégration des nouveaux conseillers support : outils, ton et escalade",
    outline: [
      {
        title: "Titre",
        body: "Le nom de la session, son public et sa durée, pour que personne ne se demande s'il est dans la bonne salle.",
      },
      {
        title: "Au programme",
        body: "L'ordre du jour, et ce que chacun doit savoir faire à la fin de la session.",
      },
      {
        title: "Pourquoi c'est important ici",
        body: "Le problème que résout cette formation, dans les mots de votre équipe. On écoute mieux quand on sait pourquoi.",
      },
      {
        title: "Les étapes, dans l'ordre",
        body: "Chaque étape ou notion sur sa propre diapositive, dans l'ordre réel du travail.",
      },
      {
        title: "Un cas réel",
        body: "Un cas déroulé de bout en bout : un ticket, un formulaire, un appel. La diapositive dont on se souvient seul au poste.",
      },
      {
        title: "Erreurs fréquentes",
        body: "Ce que les nouveaux font mal la première semaine, et comment le repérer. Mieux vaut l'apprendre ici que devant un client.",
      },
      {
        title: "À retenir",
        body: "La version courte sur une diapositive, à retrouver après la session.",
      },
      {
        title: "Questions et aide",
        body: "Du temps pour les questions, et vers qui se tourner une fois la session terminée.",
      },
    ],
    painPoints: [
      {
        title: "La présentation d'intégration est plus ancienne que ceux qu'elle intègre",
        body: "Créée en 2019, modifiée depuis par six personnes, elle affiche encore l'ancien logo et un outil que vous ne payez plus. Les nouvelles recrues le remarquent. Elles restent polies.",
      },
      {
        title: "Les experts métier ne sont pas graphistes",
        body: "La personne qui connaît le mieux la procédure prépare la présentation entre deux tâches. Résultat : une diapositive à 14 puces et un formateur qui s'en excuse.",
      },
      {
        title: "Chaque équipe a sa propre formation",
        body: "Ventes, support et opérations ont chacun construit leurs présentations dans leur propre style. Réunies dans un même parcours, on dirait que trois entreprises vous ont formé.",
      },
    ],
    outcomes: [
      "Des sessions qui suivent la façon dont on apprend une procédure : l'ordre du jour, chaque étape avec un exemple réel, la version courte, puis les questions.",
      "Une seule identité visuelle pour les formations de toutes les équipes, avec le logo, les couleurs et les polices repris du site web de votre entreprise.",
      "La présentation d'intégration que vous avez déjà peut être importée en .pptx ou en PDF et refaite sans perdre une diapositive, une étape ou un chiffre.",
      "Le PowerPoint modifiable contient de courtes notes de l'orateur, pour qu'un formateur remplaçant ait une base de travail.",
      "Quand la procédure change, demandez à l'IA de mettre à jour cette seule diapositive et de laisser le reste.",
      "Envoyez le travail préparatoire par lien et vous saurez s'il a été ouvert avant la session, et quelles diapositives ont été consultées, avec toutes les offres.",
    ],
    examplePrompts: [
      "Intégration des nouveaux conseillers du service client, semaine 1 : bases du ticketing, ton à adopter et quand escalader, d'après le livret joint en PDF.",
      "Un atelier de 90 minutes pour les nouveaux managers sur l'art du feedback, avec une mise en situation après chaque partie et cinq points à retenir à la fin.",
      "Saisir ses notes de frais dans notre nouvel outil financier, pour tout le personnel, 20 minutes. Étapes dans mes notes jointes ; gardez-les à l'identique.",
    ],
    faqs: [
      {
        q: "Peut-il refaire la présentation d'intégration que nous avons déjà ?",
        a: "Oui. Importez-la en .pptx ou en PDF, jusqu'à 50 Mo et 75 diapositives. Vous obtenez les mêmes diapositives, étapes et chiffres, une diapositive pour chaque diapositive d'origine, avec votre identité visuelle actuelle plutôt que celle de 2019.",
      },
      {
        q: "Toutes nos formations peuvent-elles reprendre l'identité de notre entreprise ?",
        a: "Oui. PitchBoost reprend votre logo, vos couleurs et vos polices sur le site web de votre entreprise, ou vous les définissez à la main. Construisez les formations ventes, support et opérations avec la même identité, et on dira enfin qu'une seule entreprise les a faites.",
      },
      {
        q: "Va-t-il inventer des détails sur nos procédures ?",
        a: "Il s'appuie sur les notes et documents que vous lui donnez, et tout chiffre qu'il ne peut pas relier à vos documents ou à une source citée est signalé, pour que vous repériez un délai ou un plafond inventé avant qu'une nouvelle recrue ne le voie. Relisez tout avant la session : vous connaissez la procédure, lui ne sait que ce que vous lui avez dit.",
      },
      {
        q: "Le formateur peut-il modifier des choses avant la session ?",
        a: "Oui. Demandez à l'IA de modifier une diapositive et le reste ne bouge pas, ou modifiez n'importe quelle diapositive à la main. Avec une offre payante ou $9 pour cette présentation, le formateur obtient un PowerPoint modifiable avec de vraies zones de texte et de courtes notes de l'orateur pour animer la salle.",
      },
      {
        q: "Nous avons déjà un outil d'IA généraliste. Pourquoi celui-ci ?",
        a: "Un outil généraliste peut rédiger des diapositives de formation à partir d'une consigne, et pour une session ponctuelle, cela peut suffire. PitchBoost structure la présentation comme un cours, la construit à votre image à partir de votre site web et signale les chiffres qu'il ne peut pas relier à vos documents. Si la formation existe déjà, une refonte garde chaque diapositive au lieu de repartir de zéro.",
      },
    ],
    relatedRedesigns: ["training-deck-redesign", "rebrand-presentation", "modernize-old-powerpoint"],
    ctaHeadline: "Vous savez comment faire. Vos diapositives vont enfin le montrer.",
    updated: "2026-10-22",
  },

  {
    slug: "report-presentation",
    navLabel: "Rapports et points au conseil",
    metaTitle: "Rapport en présentation : bilans trimestriels et CA | PitchBoost",
    metaDescription:
      "Transformez un rapport ou les chiffres de votre tableur en présentation qui commence par le résultat, à vos couleurs. Chiffres non traçables supprimés d'office.",
    heroHeadline: "Un rapport devenu présentation, qui commence par le résultat",
    heroSubhead:
      "Collez vos chiffres ou joignez le rapport. PitchBoost construit le point d'étape comme le lit une salle pressée : le message clé d'abord, puis les éléments à l'appui, les risques et les décisions dont vous avez besoin.",
    forLabel: "un rapport ou un point d'activité",
    promptPlaceholder: "Résultats du T3 pour le comité de direction, d'après mon rapport joint",
    outline: [
      {
        title: "Titre",
        body: "Le rapport, la période couverte et le public visé. Court, parce que c'est la diapositive suivante qui compte.",
      },
      {
        title: "Le message clé",
        body: "Le résultat en une phrase, d'entrée de jeu. S'ils ne lisent rien d'autre, ils liront ça.",
      },
      {
        title: "Chiffres clés",
        body: "Les quelques indicateurs qui comptent sur la période, face à l'objectif ou à la période précédente, avec les chiffres fournis.",
      },
      {
        title: "Ce qui a changé",
        body: "Ce qui a bougé depuis le dernier point et pourquoi, en termes simples. La partie qui suscite vraiment les questions.",
      },
      {
        title: "Ce qui a marché, ce qui n'a pas marché",
        body: "Réussites et échecs côte à côte. Un rapport sans aucun échec ressemble à un argumentaire, et on le prend moins au sérieux.",
      },
      {
        title: "Risques et points de vigilance",
        body: "Ce qui pourrait mal tourner la période suivante, avec quelle probabilité, et ce que vous faites pour l'éviter.",
      },
      {
        title: "Décisions attendues",
        body: "Ce dont vous avez besoin de la salle, formulé en questions auxquelles elle peut répondre pendant la réunion.",
      },
      {
        title: "Prochaines étapes",
        body: "Qui fait quoi, et pour quand. La diapositive qu'on transfère après la réunion.",
      },
    ],
    painPoints: [
      {
        title: "Le message est sur la diapositive 9",
        body: "Les rapports s'écrivent dans l'ordre où le travail s'est fait, donc le résultat arrive en dernier. D'ici là, la salle est passée à ce qu'il y a sur son téléphone.",
      },
      {
        title: "Un chiffre faux, et la réunion ne parle plus que de lui",
        body: "Un chiffre qui ne correspond pas au tableur transforme la réunion en audit de votre présentation au lieu d'une discussion sur le trimestre.",
      },
      {
        title: "Chaque mois, tout est à refaire",
        body: "Le rapport revient. La présentation est refaite de zéro à chaque fois, ou recopiée d'un mois sur l'autre jusqu'à ce que la diapositive 6 décrive un projet terminé en mars.",
      },
    ],
    outcomes: [
      "Un point d'étape qui commence par le résultat clé, puis les éléments à l'appui, les risques et les décisions dont vous avez besoin.",
      "Les chiffres que vous n'avez pas fournis renvoient à une source sur la diapositive ou sont supprimés avant que vous ne voyiez la présentation.",
      "Le logo, les couleurs et les polices de votre entreprise sur chaque diapositive, pour que le point ait l'air de venir de l'entreprise et pas d'un tableur.",
      "La présentation du trimestre dernier, importée telle quelle, revient avec un nouveau design, une diapositive pour chaque diapositive d'origine, les chiffres intacts.",
      "Quand un chiffre change la veille, modifiez cette seule diapositive en le demandant, et le reste ne bouge pas.",
      "PDF, PowerPoint ou Google Slides pour la pré-lecture, avec une offre payante ou pour $9 une fois.",
    ],
    examplePrompts: [
      "Rapport marketing mensuel pour le comité de direction : 1 240 leads pour un objectif de 1 100, coût par lead passé de $48 à $41, et le webinaire a déçu.",
      "Point T3 au conseil d'administration d'après mon rapport joint : CA face au budget, recrutements, deux plus gros risques, décision sur les nouveaux bureaux.",
      "QBR pour notre plus gros client : adoption en hausse dans 3 équipes sur 4, deux tickets support ouverts, renouvellement en janvier. 10 diapositives maximum.",
    ],
    faqs: [
      {
        q: "Puis-je simplement lui donner le rapport, ou les chiffres de mon tableur ?",
        a: "Oui. Joignez le rapport en PDF, collez les chiffres clés de votre tableur dans la consigne, ou les deux. PitchBoost construit la présentation à partir de ce que vous lui donnez et met le résultat en premier.",
      },
      {
        q: "Va-t-il modifier ou inventer des chiffres ?",
        a: "C'est la seule chose qu'un rapport ne peut pas se permettre, donc il est strict là-dessus. Les chiffres qu'il ajoute peuvent être accompagnés d'une source en lien, et tout chiffre qu'il ne peut pas relier à vos documents ou à une source citée est supprimé avant que vous ne voyiez la présentation. Importez plutôt la présentation du trimestre dernier et la refonte garde chaque diapositive, vos mots et vos chiffres.",
      },
      {
        q: "Peut-il utiliser les couleurs et les polices de notre entreprise ?",
        a: "Oui. Il lit votre logo, vos couleurs et vos polices sur le site web de votre entreprise. Ou réglez-les à la main, si le marketing a son avis sur la question.",
      },
      {
        q: "Puis-je savoir si les participants l'ont ouverte avant la réunion ?",
        a: "Oui. Partagez-la par lien et vous voyez quand elle est ouverte et quelles diapositives ont été consultées, avec toutes les offres. Utile la veille, quand vous décidez combien de temps consacrer au récapitulatif.",
      },
      {
        q: "Pourquoi ne pas coller le rapport dans ChatGPT ?",
        a: "ChatGPT sait bien résumer un rapport. PitchBoost en fait la présentation : le message clé d'abord, puis les éléments à l'appui, les risques et les décisions, à vos couleurs, sans les chiffres non traçables. Il fonctionne aussi dans ChatGPT, comptes gratuits compris, si c'est là que se trouve déjà le rapport.",
      },
    ],
    relatedRedesigns: ["board-deck-redesign", "qbr-deck-redesign", "data-heavy-deck-redesign"],
    ctaHeadline: "Les chiffres sont prêts. La présentation peut l'être aussi.",
    updated: "2026-10-22",
  },

  {
    slug: "investor-update",
    navLabel: "Reporting investisseurs",
    metaTitle: "Reporting trimestriel investisseurs pour startups | PitchBoost",
    metaDescription:
      "Votre reporting investisseurs mensuel ou trimestriel, à partir de vos chiffres : message clé, indicateurs, réussites, échecs, burn, runway, demandes. Rien d'inventé.",
    heroHeadline: "Un reporting investisseurs qui dit la vérité, bonne ou mauvaise",
    heroSubhead:
      "Apportez les chiffres du trimestre : PitchBoost suit l'ordre de lecture des investisseurs, message clé, plan, réussites, échecs, burn et runway, demandes. Pour vos investisseurs actuels, pas ceux que vous démarchez.",
    forLabel: "un reporting pour investisseurs actuels",
    promptPlaceholder: "Reporting T3 pour nos investisseurs d'amorçage : chiffre d'affaires, burn, runway et deux demandes",
    outline: [
      {
        title: "Le message clé",
        body: "Comment s'est passé le trimestre, en une phrase honnête. Les investisseurs lisent cette diapositive en premier, certains seulement elle.",
      },
      {
        title: "Indicateurs par rapport au plan",
        body: "Chiffre d'affaires, croissance et les indicateurs que vous suivez à chaque fois, comparés au plan que vous avez partagé.",
      },
      {
        title: "Réussites",
        body: "Clients signés, lancements, recrutements. Précis et court, appuyé par vos chiffres.",
      },
      {
        title: "Échecs",
        body: "Ce qui n'a pas atteint l'objectif et ce que vous en avez appris. Les investisseurs font confiance au reporting qui inclut cette diapositive.",
      },
      {
        title: "Burn et runway",
        body: "Burn mensuel, trésorerie disponible et mois de runway, à partir des chiffres que vous fournissez.",
      },
      {
        title: "Demandes",
        body: "L'aide précise que vous attendez : mises en relation, candidats, conseils. La diapositive qui transforme les lecteurs en soutiens.",
      },
      {
        title: "Priorités du trimestre prochain",
        body: "Trois priorités et leur mesure, pour que le prochain reporting ait une base de comparaison.",
      },
    ],
    painPoints: [
      {
        title: "Le reporting trimestriel est encore en retard",
        body: "Vous avez promis un point chaque trimestre. Le dernier est parti au cinquième mois. Chacun demande un week-end à reporter les chiffres dans des diapositives, alors il glisse encore.",
      },
      {
        title: "Les mauvais trimestres sont les plus durs à écrire",
        body: "Quand les chiffres ne sont pas au rendez-vous, la tentation est de les noyer sous les adjectifs. Les investisseurs s'en aperçoivent. Un reporting sobre, avec l'échec sur sa propre diapositive, inspire plus confiance qu'un reporting enjoué.",
      },
      {
        title: "Un chiffre faux devant des investisseurs, ça reste",
        body: "Annoncez 18 mois de runway quand il en reste 14, et on vous en reparlera au prochain conseil, puis au suivant.",
      },
    ],
    outcomes: [
      "Un reporting dans l'ordre où les investisseurs le lisent : message clé, indicateurs par rapport au plan, réussites, échecs, burn et runway, demandes, priorités du trimestre prochain.",
      "Vos chiffres, pas des chiffres inventés : tout ce qu'il ne peut pas tracer est supprimé avant que vous ne voyiez la présentation.",
      "Pas d'argumentaire déguisé en reporting : seuls les pitchs ont un appel à l'action, et ceci n'en est pas un.",
      "Demandez à l'IA de corriger une diapositive, par exemple le runway, sans toucher au reste.",
      "Votre logo, vos couleurs et vos polices, repris de votre site web, pour que le reporting ressemble à l'entreprise que vous construisez.",
    ],
    examplePrompts: [
      "Reporting T3 : ARR $1,2M pour $1,4M prévus, burn $180k/mois, 16 mois de runway, deux grands comptes, un recrutement clé retardé. Demande : DAF logistique.",
      "Point mensuel pour nos business angels, d'après le PDF d'indicateurs joint. D'abord les inscriptions sous l'objectif, puis nos correctifs, puis l'embauche.",
      "Reporting trimestriel aux investisseurs d'amorçage : deux nouvelles villes, marge brute en hausse, conseils sur le calendrier de la série A. 8 diapositives.",
    ],
    faqs: [
      {
        q: "Est-ce pour lever des fonds ?",
        a: "Non. Un reporting investisseurs s'adresse à ceux qui ont déjà investi : comment s'est passé le trimestre, les chiffres par rapport au plan, et ce dont vous avez besoin. Lever un tour, c'est un pitch, que PitchBoost construit aussi, rédigé pour un investisseur précis et terminé par une prochaine étape claire.",
      },
      {
        q: "Va-t-il inventer des indicateurs ?",
        a: "Non. Il travaille à partir des chiffres que vous fournissez, et un chiffre qu'il ne peut relier ni à ceux-ci ni à une source citée est supprimé avant que la présentation ne vous parvienne. Relisez-la quand même : c'est le nom de votre entreprise qui figure sur le reporting.",
      },
      {
        q: "Saurai-je si le reporting a été ouvert ?",
        a: "Oui, s'il est envoyé par lien. Vous verrez quand il a été ouvert et quelles diapositives ont été consultées, avec toutes les offres. Bon à savoir avant l'appel de suivi.",
      },
      {
        q: "Combien cela coûte-t-il chaque trimestre ?",
        a: "L'offre gratuite couvre une présentation par IA par mois (jusqu'à 10 diapositives, un petit badge, partagée par lien), ce qui suffit pour un point mensuel si un lien convient à vos investisseurs. Les fichiers demandent une offre payante, Starter à $7 par mois ou Pro à $29, ou $9 une fois pour finaliser un reporting jusqu'à 25 diapositives, sans badge, avec tous les téléchargements.",
      },
      {
        q: "Gamma ou ChatGPT pourraient le rédiger. Pourquoi PitchBoost ?",
        a: "Les deux peuvent rédiger un reporting à partir d'une consigne. La différence qui compte ici, ce sont les chiffres : PitchBoost supprime tout chiffre qu'il ne peut pas tracer avant que vous ne voyiez la présentation, pour qu'un indicateur convaincant que vous n'avez jamais communiqué n'arrive pas chez vos investisseurs. Et si vous rédigez quand même dans ChatGPT, PitchBoost fonctionne à l'intérieur, comptes gratuits compris.",
      },
    ],
    relatedRedesigns: ["board-deck-redesign", "investor-deck-redesign", "data-heavy-deck-redesign"],
    ctaHeadline: "Bon ou mauvais trimestre, envoyez le reporting à temps.",
    updated: "2026-10-22",
  },

  {
    slug: "conference-talk",
    navLabel: "Conférences",
    metaTitle: "Diapositives de conférence et de keynote par IA | PitchBoost",
    metaDescription:
      "Diapositives de conférence ou de keynote à partir de votre plan : une grande idée, une conclusion marquante, à vos couleurs. Ou refaites celle que vous avez.",
    heroHeadline: "Des diapositives qui portent une grande idée, puis s'effacent",
    heroSubhead:
      "Donnez à PitchBoost votre plan ou vos notes : il construit l'intervention autour d'une idée, avec les histoires qui la portent et une conclusion qui marque. Ou refaites la présentation de la dernière fois, chaque diapositive intacte.",
    forLabel: "une conférence ou une keynote",
    promptPlaceholder: "Ce que nous avons appris en passant notre équipe à la semaine de quatre jours",
    outline: [
      {
        title: "Titre",
        body: "Le titre de l'intervention et votre nom, à l'écran pendant que le public s'installe.",
      },
      {
        title: "L'accroche",
        body: "Une question, une histoire ou un fait frappant tiré de vos notes, qui justifie les vingt minutes suivantes.",
      },
      {
        title: "La grande idée",
        body: "La seule chose que vous voulez que la salle retienne, énoncée tôt et en termes simples.",
      },
      {
        title: "Arguments et histoires",
        body: "Chaque argument sur sa propre diapositive, associé à une histoire ou un exemple qui le fait passer.",
      },
      {
        title: "Le tournant",
        body: "L'objection, la difficulté ou ce qui n'a pas marché. Une intervention sans cela sonne comme une publicité.",
      },
      {
        title: "Ce que cela change pour eux",
        body: "Ce que le public peut faire différemment dès lundi. Le concret vaut mieux que l'inspirant.",
      },
      {
        title: "La conclusion",
        body: "Une fin marquante : un rappel de l'ouverture, une réflexion ou un remerciement. Pas de diapositive commerciale.",
      },
    ],
    painPoints: [
      {
        title: "L'intervention est dans votre tête, pas sur les diapositives",
        body: "Vous pouvez expliquer l'idée en cinq minutes autour d'un café. La mettre sur des diapositives qui mènent quelque part vous prend le week-end que vous vouliez consacrer aux répétitions.",
      },
      {
        title: "Le public lit plus vite que vous",
        body: "Projetez un paragraphe et la salle le lit plus vite que vous ne le dites. Puis elle regarde son téléphone jusqu'à la diapositive suivante.",
      },
      {
        title: "Trop d'idées, aucune principale",
        body: "Tout ce que vous avez déjà pensé sur le sujet atterrit dans le premier jet. Le public repart sans en retenir aucune, parce que rien ne lui a dit laquelle comptait.",
      },
    ],
    outcomes: [
      "Une intervention construite autour d'une grande idée, avec les arguments et les histoires qui la portent, et une conclusion marquante.",
      "De courtes notes de l'orateur accompagnent le PowerPoint modifiable, pour que les diapositives n'aient pas à porter votre texte.",
      "Votre identité visuelle, ou celle de votre entreprise, reprise d'un site web et appliquée à chaque diapositive.",
      "Elle se termine sur votre conclusion, pas sur une diapositive commerciale : les appels à l'action sont réservés aux pitchs.",
      "Importez la présentation de la dernière fois : chaque diapositive et chaque mot restent, dans l'ordre que vous avez répété.",
      "Un PDF, un PowerPoint fidèle à l'identique ou modifiable, ou Google Slides pour les organisateurs, plus un lien pour tous ceux qui demandent les diapositives après coup.",
    ],
    examplePrompts: [
      "20 minutes à un meetup de développeurs front-end : pourquoi nous avons supprimé la moitié de nos tests. Grande idée d'abord, trois histoires, une fin drôle.",
      "Keynote d'ouverture, congrès infirmier régional, 30 min : burn-out et petits gestes quotidiens. Ton chaleureux, une histoire par partie, d'après mes notes.",
      "Une conférence de 15 minutes en hébreu pour un congrès de design, sur la conception de formulaires pour les langues de droite à gauche, d'après mon plan joint.",
    ],
    faqs: [
      {
        q: "Va-t-il mettre tout mon texte sur les diapositives ?",
        a: "Non. Une intervention est construite pour porter une grande idée, pas une transcription, et de courtes notes de l'orateur figurent dans le PowerPoint modifiable pour ce que vous direz. Vous voulez plus de contenu sur une diapositive ? Demandez-le, et seule cette diapositive change.",
      },
      {
        q: "Puis-je importer une intervention que j'ai déjà donnée ?",
        a: "Oui. Si elle est dans Keynote ou Google Slides, exportez d'abord un .pptx, puis importez-le, ou un PDF, jusqu'à 50 Mo et 75 diapositives. Chaque diapositive revient à vos couleurs avec vos mots et vos chiffres, une diapositive pour chaque diapositive d'origine, pour que l'intervention répétée reste la même.",
      },
      {
        q: "Quel fichier envoyer aux organisateurs ?",
        a: "Celui qu'ils demandent : un PDF, un PowerPoint fidèle à l'identique, un PowerPoint modifiable avec de vraies zones de texte, ou Google Slides. Les téléchargements demandent une offre payante (Starter à $7 par mois, Pro à $29) ou $9 une fois pour cette seule présentation.",
      },
      {
        q: "Puis-je donner l'intervention dans une autre langue ?",
        a: "Oui, dans n'importe quelle langue, y compris les écritures de droite à gauche comme l'arabe, le persan, l'hébreu et l'ourdou. La mise en page de droite à gauche est conservée dans le PowerPoint modifiable, ce qui compte quand c'est l'ordinateur du lieu qui la projette.",
      },
      {
        q: "Faut-il simplement utiliser Gamma pour une conférence ?",
        a: "Si un premier jet rapide suffit, Gamma peut faire l'affaire. PitchBoost est conçu pour l'intervention elle-même : une grande idée menée jusqu'à une conclusion, à vos couleurs à partir de votre site web, ou la présentation que vous avez déjà refaite avec chaque diapositive conservée. Il fonctionne aussi dans ChatGPT et depuis Claude, si c'est là que vous rédigez.",
      },
    ],
    relatedRedesigns: ["conference-talk-slides-redesign", "make-powerpoint-look-professional", "rebrand-presentation"],
    ctaHeadline: "Une grande idée. Des diapositives qui s'effacent devant elle.",
    updated: "2026-10-22",
  },
];
