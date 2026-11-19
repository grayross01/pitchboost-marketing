import type { MakerPage } from "./makers";
import type { MakerUi } from "./makers-i18n";

/** Generated translation of lib/makers.ts; keep in sync. French (France, "vous"). */
export const MAKER_UI_FR: MakerUi = {
  "getLabel": "Ce que vous obtenez",
  "getTitle": "Une vraie présentation, pas une maquette",
  "faqLabel": "FAQ",
  "faqTitle": "Les questions qu'on nous pose",
  "moreLabel": "Autres outils gratuits",
  "moreTitle": "Vous partez d'autre chose ?",
  "guidesLabel": "À lire ensuite",
  "toBox": "Créer la mienne",
  "box": {
    "examplesLabel": "Ou partez de l'un de ces exemples",
    "sending": "Lancement...",
    "progress": "Comptez deux minutes environ : la présentation apparaîtra ci-dessus une fois prête.",
    "openFull": "L'ouvrir en plein écran",
    "linkLife": "Le lien fonctionne pendant 7 jours.",
    "keep": "La garder, la modifier, en créer d'autres",
    "another": "En créer une autre",
    "keepNote": "Un compte gratuit construit la version complète aux couleurs de votre marque : votre première présentation de chaque mois est gratuite.",
    "frameTitle": "Votre présentation",
    "failed": "Ça n'a pas marché. Réessayez dans une minute, ou créez un compte gratuit et faites-la là-bas.",
    "unreachable": "Impossible de joindre PitchBoost pour le moment. Réessayez dans une minute.",
    "full": "Cette zone est pleine. Un compte gratuit accepte des textes bien plus longs.",
    "empty": "Ajoutez d'abord une ligne ou deux dans la zone.",
    "limit": "Vous avez utilisé les deux présentations gratuites du jour pour cette connexion. Créez un compte gratuit pour continuer : votre première présentation de chaque mois est gratuite.",
    "busy": "Les présentations gratuites sont très demandées en ce moment. Réessayez dans quelques minutes, ou créez un compte gratuit et faites la vôtre là-bas."
  }
};

export const MAKERS_FR: MakerPage[] = [
  {
    "slug": "ai-pitch-deck-generator",
    "family": "generator",
    "navLabel": "Générateur de pitch deck IA",
    "hubDesc": "Décrivez l'entreprise, vos chiffres et ce que vous levez. Obtenez un pitch deck investisseurs en deux minutes environ, dans l'ordre où les investisseurs le lisent. Sans compte.",
    "hubTag": "Fondateurs en levée de fonds",
    "metaTitle": "Générateur de pitch deck IA gratuit, sans compte | PitchBoost",
    "metaDescription": "Votre startup en quelques lignes, un pitch deck en deux minutes environ : problème, solution, marché, traction, équipe, levée. Gratuit, sans compte.",
    "ogTitle": "Un pitch deck investisseurs en deux minutes environ.",
    "eyebrow": "Outil gratuit, sans inscription",
    "heroHeadline": "Générateur de pitch deck IA gratuit : votre startup d'un côté, un pitch deck investisseurs de l'autre",
    "heroSubhead": "Décrivez l'entreprise, vos chiffres et ce que vous levez. Il construit la présentation que les investisseurs attendent, dans l'ordre où ils l'attendent, en deux minutes environ. La levée de fonds, elle, reste votre affaire.",
    "box": {
      "label": "Que fait l'entreprise, et combien levez-vous ?",
      "placeholder": "Ledgerly : logiciel de comptabilité pour cabinets dentaires. 140 cabinets clients payants, $31k de chiffre d'affaires mensuel, +12% par mois. Levée d'amorçage de $1.5M pour recruter deux ingénieurs et ouvrir le Royaume-Uni.",
      "button": "Générer mon pitch deck",
      "hint": "Donnez-lui vos vrais chiffres : il n'en inventera aucun. Deux présentations gratuites par jour, sans compte.",
      "kind": "Un pitch deck investisseurs pour une startup qui lève des fonds, rédigé en français. 9 diapositives : une diapositive de titre, puis problème, solution, produit, marché, traction, modèle économique, équipe, montant demandé.",
      "forLabel": "un pitch deck investisseurs"
    },
    "examples": [
      "Brightloop : une appli qui transforme les notes vocales des techniciens terrain en rapports d'intervention. 60 entreprises de CVC paient $400 par mois, croissance de 9% par mois. Levée d'amorçage de $2M pour recruter des commerciaux.",
      "Benchmate, pas encore de chiffre d'affaires : une place de marché de matériel de laboratoire reconditionné, pour les labos universitaires. Trois universités pilotes signées. Levée de pré-amorçage de $500k pour développer les outils de mise en ligne des annonces.",
      "Série A pour Kindred Kitchen, des kits repas pour les personnes atteintes d'une maladie rénale : $2.4M de chiffre d'affaires annuel, 71% de marge brute, 4 200 abonnés. Levée de $8M pour ouvrir une deuxième cuisine."
    ],
    "outlineLabel": "La présentation qu'il construit",
    "outlineTitle": "Les huit diapositives que cherchent les investisseurs, dans l'ordre où ils les lisent",
    "outlineBody": "Une diapositive de titre, puis ces huit. La structure est la partie la plus facile à réussir, et celle que la plupart des premiers pitch decks ratent. Ici, elle est fixée d'avance, pour que le rendez-vous porte sur l'entreprise.",
    "outline": [
      {
        "title": "Problème",
        "body": "Qui le rencontre, à quelle fréquence, et ce qu'il leur coûte aujourd'hui. Une diapositive, sans détour."
      },
      {
        "title": "Solution",
        "body": "Ce que vous avez construit et pourquoi cela règle le problème, en une phrase qu'un inconnu pourrait répéter."
      },
      {
        "title": "Produit",
        "body": "Comment il fonctionne, en trois étapes ou un seul écran. Pas une liste de fonctionnalités."
      },
      {
        "title": "Marché",
        "body": "Qui achète et combien ils sont, d'après ce que vous lui avez donné."
      },
      {
        "title": "Traction",
        "body": "Chiffre d'affaires, utilisateurs, croissance, pilotes : uniquement les chiffres que vous avez tapés. Il ne dessine pas de courbe en crosse de hockey à votre place."
      },
      {
        "title": "Modèle économique",
        "body": "Comment l'argent rentre : le prix, qui le paie, et à quelle fréquence."
      },
      {
        "title": "Équipe",
        "body": "Qui le construit, et pourquoi ce sont eux qui doivent le faire."
      },
      {
        "title": "Montant demandé",
        "body": "Combien vous levez et ce que cela finance : les recrutements, les mois de trésorerie, les jalons."
      }
    ],
    "gets": [
      {
        "title": "L'ordre qu'attendent les investisseurs",
        "body": "Du problème au montant demandé, une idée par diapositive. Un investisseur qui doit chercher le montant en conclut que vous ne l'avez pas fixé."
      },
      {
        "title": "Vos chiffres, pas des chiffres inventés",
        "body": "Il utilise les chiffres que vous tapez et n'en ajoute aucun. Une taille de marché inventée est pire qu'un manque assumé, et les investisseurs vérifient."
      },
      {
        "title": "Un lien à envoyer",
        "body": "La présentation s'ouvre sur n'importe quel ordinateur ou téléphone et se projette depuis le navigateur. Le lien fonctionne sept jours."
      },
      {
        "title": "La version complète, quand vous la voulez",
        "body": "Un compte gratuit la reconstruit aux couleurs de votre marque à partir de votre site web, vous permet de modifier n'importe quelle diapositive et vous indique quand le lien est ouvert."
      }
    ],
    "faqs": [
      {
        "q": "Le générateur de pitch deck est-il vraiment gratuit ?",
        "a": "Oui. Tapez quelques lignes et une présentation mise en page apparaît en deux minutes environ, à un lien que vous pouvez ouvrir n'importe où. Sans compte, sans e-mail, sans carte bancaire. Chaque connexion a droit à deux présentations par jour, et chacune porte une petite mention PitchBoost."
      },
      {
        "q": "Que faut-il taper pour obtenir un bon pitch deck ?",
        "a": "Ce que fait l'entreprise, à qui elle s'adresse, les chiffres dont vous disposez (chiffre d'affaires, utilisateurs, croissance, pilotes), qui compose l'équipe et combien vous levez. Quatre ou cinq phrases suffisent. Plus vous lui donnez de vrais chiffres, plus la présentation a de choses à dire."
      },
      {
        "q": "Va-t-il inventer ma taille de marché ou ma traction ?",
        "a": "Non. L'outil gratuit travaille uniquement à partir de ce que vous tapez. Avec un compte gratuit, l'éditeur complet vérifie chaque chiffre par rapport à ce que vous lui avez donné et retire tout nombre dont il ne retrouve pas l'origine."
      },
      {
        "q": "Puis-je télécharger le pitch deck en PowerPoint ou en PDF ?",
        "a": "Pas depuis l'outil gratuit. Créez un compte pour conserver la présentation, puis téléchargez-la en PowerPoint, PDF ou Google Slides avec une offre payante, ou payez $9 une seule fois pour cette présentation."
      },
      {
        "q": "Quelle différence avec ChatGPT ou Gamma ?",
        "a": "ChatGPT rédige un plan, et Gamma sait aussi faire une présentation à partir d'une consigne. PitchBoost construit la présentation dans l'ordre où les investisseurs la lisent et n'invente pas vos chiffres. Avec un compte, elle est aux couleurs de votre marque, et vous voyez quand un investisseur ouvre le lien. Il fonctionne aussi dans ChatGPT, si vous préférez y rester."
      },
      {
        "q": "J'ai déjà un pitch deck. Peut-il plutôt améliorer celui-là ?",
        "a": "Oui. Importez le fichier PowerPoint et PitchBoost le redessine, en conservant chaque diapositive, chaque mot et chaque chiffre. L'aperçu gratuit de la refonte traite deux de vos diapositives, sans compte."
      }
    ],
    "guides": [
      {
        "href": "/blog/how-to-structure-a-pitch-deck",
        "label": "Comment structurer un pitch deck"
      },
      {
        "href": "/blog/how-to-create-investor-pitch-deck",
        "label": "Comment créer un pitch deck investisseurs"
      },
      {
        "href": "/blog/best-ai-pitch-deck-generators",
        "label": "Les générateurs de pitch deck IA comparés"
      },
      {
        "href": "/redesign/investor-deck-redesign",
        "label": "Vous avez déjà une présentation ? Refonte de pitch deck investisseurs"
      }
    ],
    "ctaHeadline": "La présentation prend deux minutes. Consacrez le reste de la semaine aux chiffres.",
    "updated": "2026-11-19"
  },
  {
    "slug": "ai-sales-pitch-generator",
    "family": "generator",
    "navLabel": "Générateur de pitch commercial IA",
    "hubDesc": "Indiquez le prospect et ce que vous vendez. En deux minutes environ, vous obtenez un pitch commercial court, construit autour du problème de cet acheteur. Sans compte.",
    "hubTag": "Pour le rendez-vous de jeudi",
    "metaTitle": "Générateur de pitch commercial IA gratuit | PitchBoost",
    "metaDescription": "Indiquez le prospect et votre offre : en deux minutes environ, un pitch commercial pour cet acheteur. Problème, solution, preuves, prochaine étape. Gratuit.",
    "ogTitle": "Un pitch commercial pour ce prospect, en deux minutes.",
    "eyebrow": "Outil gratuit, sans inscription",
    "heroHeadline": "Générateur de pitch commercial IA gratuit : une présentation pour ce prospect, pas pour les prospects en général",
    "heroSubhead": "Dites qui vous rencontrez et ce que vous vendez. En deux minutes environ, il construit un pitch court centré sur son problème. La présentation ne sera plus ce qui repousse la relance à vendredi.",
    "box": {
      "label": "À qui présentez-vous, et que vendez-vous ?",
      "placeholder": "Pitch pour Northwind Freight (transport routier régional, 80 camions) sur notre logiciel de planification d'itinéraires. Leurs répartiteurs planifient encore par téléphone. Nous avons réduit les trajets à vide de 12% pour deux flottes similaires. Le rendez-vous est avec le directeur des opérations.",
      "button": "Générer mon pitch commercial",
      "hint": "Nommez l'acheteur et son problème. Deux présentations gratuites par jour, sans compte.",
      "kind": "Une présentation commerciale pour un prospect nommé, rédigée en français. 7 diapositives : une couverture qui nomme le prospect, puis sa situation, le problème et ce qu'il lui coûte, notre solution, son fonctionnement, les preuves, la prochaine étape.",
      "forLabel": "un pitch commercial"
    },
    "examples": [
      "Présenter notre service de nettoyage professionnel à Harbor Dental Group (6 cabinets). Ils font appel à trois prestataires différents aujourd'hui. Nous proposons un seul contrat, un passage chaque nuit et un audit mensuel.",
      "Vendre notre logiciel de paie à Tidewater Studio, un cabinet d'architecture de 40 personnes qui fait la paie sur des tableurs. La décision revient à la responsable administrative. La mise en service prend deux semaines.",
      "Pitch de renouvellement pour un client actuel, Alder Hotels : l'utilisation a augmenté de 30%. Proposer de passer de l'offre Team à l'offre Enterprise, avec authentification unique et un interlocuteur dédié."
    ],
    "outlineLabel": "La présentation qu'il construit",
    "outlineTitle": "Six diapositives après la couverture, et la première parle de lui",
    "outlineBody": "Une présentation commerciale se lit entre deux réunions, sur un téléphone, par quelqu'un qui ne l'a pas demandée. Pour qu'il passe à la diapositive suivante, elle doit parler de lui.",
    "outline": [
      {
        "title": "Sa situation",
        "body": "Son nom est sur la couverture, et la première diapositive résume son univers en une phrase. Il doit se reconnaître avant d'entendre parler de vous."
      },
      {
        "title": "Le problème",
        "body": "Ce qui ne va pas et ce que cela lui coûte, avec ses mots et ses chiffres."
      },
      {
        "title": "Votre solution",
        "body": "Ce que vous y apportez. Un argument, pas neuf."
      },
      {
        "title": "Comment ça marche",
        "body": "Trois étapes entre le oui et la mise en route, pour que le changement paraisse supportable."
      },
      {
        "title": "Preuves",
        "body": "Les résultats et les clients que vous lui avez fournis. Il n'inventera pas d'étude de cas."
      },
      {
        "title": "Prochaine étape",
        "body": "Une seule demande claire : un pilote, une date, une signature."
      }
    ],
    "gets": [
      {
        "title": "Écrite pour un seul acheteur",
        "body": "La présentation parle de son entreprise et de son problème. C'est justement la partie qu'on saute quand une présentation prend tout un après-midi."
      },
      {
        "title": "Courte, et c'est voulu",
        "body": "Une couverture et six diapositives. Assez pour convaincre, assez peu pour être lue avant la réunion plutôt qu'après."
      },
      {
        "title": "Aucune preuve inventée",
        "body": "Il utilise les résultats que vous tapez et n'en invente aucun. Un vrai chiffre venant d'un client qui lui ressemble vaut mieux qu'un paragraphe d'adjectifs."
      },
      {
        "title": "Sachez quand il l'ouvre",
        "body": "Avec un compte gratuit, la présentation est accessible par un lien, aux couleurs de votre marque, et vous voyez quand le prospect l'ouvre."
      }
    ],
    "faqs": [
      {
        "q": "Le générateur de pitch commercial est-il vraiment gratuit ?",
        "a": "Oui. Tapez quelques lignes et une présentation mise en page apparaît en deux minutes environ, à un lien que vous pouvez ouvrir n'importe où. Sans compte, sans e-mail, sans carte bancaire. Chaque connexion a droit à deux présentations par jour, et chacune porte une petite mention PitchBoost."
      },
      {
        "q": "Qu'est-ce qui fait qu'une présentation commerciale fonctionne ?",
        "a": "Elle parle de l'acheteur. D'abord sa situation, puis le problème chiffré avec ses données, une solution claire, la preuve d'un client qui lui ressemble et une seule prochaine étape. La plupart des présentations perdent le lecteur en commençant par l'histoire du vendeur."
      },
      {
        "q": "Puis-je faire un pitch différent pour chaque prospect ?",
        "a": "Oui, c'est tout l'intérêt. Chaque présentation part du prospect que vous nommez. Avec un compte, vous pouvez lui donner le site web du prospect et le vôtre : il construit la présentation à votre marque, autour de ce que fait le prospect."
      },
      {
        "q": "Puis-je télécharger le pitch en PowerPoint ou en PDF ?",
        "a": "Pas depuis l'outil gratuit. Créez un compte pour conserver la présentation, puis téléchargez-la en PowerPoint, PDF ou Google Slides avec une offre payante, ou payez $9 une seule fois pour cette présentation."
      },
      {
        "q": "En quoi est-ce différent d'un pitch commercial rédigé par ChatGPT ?",
        "a": "ChatGPT vous donne les mots. Ici, vous obtenez la présentation : des diapositives mises en page, accessibles par un lien, dans un ordre qui fait vendre. Avec un compte, elle porte votre marque et vous indique quand elle a été ouverte. PitchBoost fonctionne aussi dans ChatGPT."
      },
      {
        "q": "Est-ce que cela marche aussi pour les renouvellements et les propositions commerciales ?",
        "a": "Oui. Précisez qu'il s'agit d'un renouvellement et ce que vous proposez. Pour une proposition commerciale complète, avec périmètre, calendrier et prix, utilisez le générateur de propositions commerciales : il présente ces éléments dans l'ordre où un client les lit."
      }
    ],
    "guides": [
      {
        "href": "/blog/ai-sales-pitch-generator",
        "label": "Ce qui distingue un bon pitch commercial IA d'un pitch générique"
      },
      {
        "href": "/blog/how-to-personalize-sales-deck-for-each-prospect",
        "label": "Comment personnaliser une présentation commerciale pour chaque prospect"
      },
      {
        "href": "/blog/sales-presentation-tips",
        "label": "Conseils pour vos présentations commerciales"
      },
      {
        "href": "/redesign/sales-deck-refresh",
        "label": "Vous avez déjà une présentation ? Rafraîchissez votre présentation commerciale"
      }
    ],
    "ctaHeadline": "Nommez le prospect. La présentation sera prête avant que votre café refroidisse.",
    "updated": "2026-11-19"
  },
  {
    "slug": "ai-proposal-generator",
    "family": "generator",
    "navLabel": "Générateur de proposition commerciale IA",
    "hubDesc": "Dites qui est le client, en quoi consiste la mission et combien elle coûte. Recevez la proposition sous forme de présentation mise en page en deux minutes environ : périmètre, calendrier, prix et prochaines étapes. Sans compte.",
    "hubTag": "Pour agences et consultants",
    "metaTitle": "Générateur de proposition commerciale IA gratuit | PitchBoost",
    "metaDescription": "Décrivez client, mission et prix : votre proposition commerciale en diapositives en deux minutes environ. Contexte, approche, périmètre, calendrier. Gratuit.",
    "ogTitle": "Une proposition en diapositives que le client ouvrira.",
    "eyebrow": "Outil gratuit, sans créer de compte",
    "heroHeadline": "Générateur de proposition commerciale IA gratuit : la proposition, sous forme de présentation que le client ouvrira vraiment",
    "heroSubhead": "Dites qui est le client, ce qu'il a demandé et ce que vous ferez. L'outil organise la proposition dans l'ordre où un client la lit. Le périmètre et le prix viennent de vous : il ne devinera ni l'un ni l'autre.",
    "box": {
      "label": "Pour qui est la proposition, et que proposez-vous ?",
      "placeholder": "Proposition pour Marlow & Finch, une chaîne de 12 boulangeries : refonte de leur site de commande en ligne. Trois phases sur 10 semaines : recherche, design, développement. Prix forfaitaire $48,000. Ils veulent lancer avant les fêtes.",
      "button": "Générer ma proposition",
      "hint": "Indiquez le périmètre et le prix à afficher. Deux présentations gratuites par jour, sans compte.",
      "kind": "Une proposition commerciale sous forme de présentation. 9 diapositives : une couverture, puis ce que nous avons compris, objectifs, notre approche, périmètre et livrables, calendrier, pourquoi nous, investissement, prochaines étapes. N'affiche un prix que s'il est indiqué ci-dessous ; sans prix indiqué, retire la diapositive investissement.",
      "forLabel": "une proposition commerciale"
    },
    "examples": [
      "Proposition pour Castell Property Group : gestion des réseaux sociaux sur 6 mois, 12 publications par mois et un rapport mensuel, $3,500 par mois, à partir de janvier.",
      "Proposition de conseil pour le service de santé de Larkmoor County : audit de leur système de prise de rendez-vous en 8 semaines, trois ateliers et un rapport final. Forfait de $62,000.",
      "Proposition de renouvellement et d'extension de notre contrat de support informatique avec Brookside School : même prix, avec en plus une astreinte le week-end et un audit de sécurité annuel."
    ],
    "outlineLabel": "La présentation générée",
    "outlineTitle": "Huit diapositives qui répondent à ce que tout client se demande vraiment",
    "outlineBody": "Une couverture, puis ces huit-là. Vous nous avez compris ? Qu'est-ce qu'on obtient, pour quand, et combien ? Une diapositive par question y répond plus vite que douze pages, et elle est lue par davantage de ceux qui signent.",
    "outline": [
      {
        "title": "Ce que nous avons compris",
        "body": "Sa situation et sa demande, avec ses propres mots. La preuve que vous avez écouté."
      },
      {
        "title": "Objectifs",
        "body": "Ce que la mission doit accomplir, sous forme de résultats vérifiables après coup."
      },
      {
        "title": "Notre approche",
        "body": "Comment vous allez vous y prendre et pourquoi ainsi, en quelques étapes."
      },
      {
        "title": "Périmètre et livrables",
        "body": "Ce que le client obtient, point par point. Ce qui n'est pas inclus, c'est la dispute que vous évitez au troisième mois."
      },
      {
        "title": "Calendrier",
        "body": "Les phases et les dates, à partir de celles que vous avez fournies."
      },
      {
        "title": "Pourquoi nous",
        "body": "L'expérience et les résultats que vous avez saisis, rien de plus."
      },
      {
        "title": "Investissement",
        "body": "Le prix que vous avez donné, tel que vous l'avez donné. Pas de prix fourni, pas de prix affiché."
      },
      {
        "title": "Prochaines étapes",
        "body": "Ce qui se passe quand le client dit oui, et dans quels délais."
      }
    ],
    "gets": [
      {
        "title": "L'ordre dans lequel les clients lisent",
        "body": "La compréhension d'abord, le prix vers la fin. Une proposition qui s'ouvre sur les honoraires est jugée sur les honoraires."
      },
      {
        "title": "Votre périmètre et votre prix, intacts",
        "body": "Il affiche les livrables, les dates et le prix que vous lui donnez, sans rien ajouter de son cru."
      },
      {
        "title": "Un lien, pas une pièce jointe",
        "body": "La proposition s'ouvre dans un navigateur, sur n'importe quel appareil. Personne n'a à chercher la bonne version d'un fichier."
      },
      {
        "title": "Modifiez-la avant de l'envoyer",
        "body": "Avec un compte gratuit, vous pouvez modifier n'importe quelle diapositive, l'habiller aux couleurs de votre marque à partir de votre site web, et voir quand le client l'ouvre."
      }
    ],
    "faqs": [
      {
        "q": "Le générateur de propositions est-il vraiment gratuit ?",
        "a": "Oui. Tapez quelques lignes et une présentation mise en page apparaît en deux minutes environ, à un lien que vous pouvez ouvrir n'importe où. Sans compte, sans e-mail, sans carte bancaire. Chaque connexion a droit à deux présentations par jour, et chacune porte une petite mention PitchBoost."
      },
      {
        "q": "Que faut-il indiquer pour obtenir une bonne proposition ?",
        "a": "Le client, ce qu'il a demandé, ce que vous ferez, le calendrier et le prix. Si vous avez obtenu un résultat sur une mission similaire, ajoutez-le. Quatre ou cinq phrases suffisent pour une première version."
      },
      {
        "q": "Va-t-il fixer mon prix ou mon périmètre à ma place ?",
        "a": "Non. Il affiche le prix et les livrables que vous saisissez, sans rien ajouter. Si vous ne mettez pas de prix, la présentation n'a pas de diapositive de prix à discuter."
      },
      {
        "q": "Pourquoi une présentation et pas un document ?",
        "a": "Parce qu'une présentation, ça se lit. Les clients parcourent une proposition en cherchant quatre choses : nous avez-vous compris, qu'obtenons-nous, pour quand, et combien. Des diapositives y répondent en une minute. Si le client a besoin d'un fichier, vous pouvez la télécharger en PDF."
      },
      {
        "q": "Puis-je télécharger la proposition en PowerPoint ou en PDF ?",
        "a": "Pas depuis l'outil gratuit. Créez un compte pour conserver la présentation, puis téléchargez-la en PowerPoint, PDF ou Google Slides avec une offre payante, ou payez $9 une seule fois pour cette présentation."
      },
      {
        "q": "Peut-il utiliser ma marque, ou reprendre le style de ma dernière proposition ?",
        "a": "Avec un compte gratuit, oui. Il reprend votre logo, vos couleurs et vos polices depuis votre site web, et il peut donner à une nouvelle présentation le style d'une présentation que vous avez déjà faite."
      }
    ],
    "guides": [
      {
        "href": "/blog/ai-proposal-generator",
        "label": "Ce qu'un générateur de propositions IA peut faire, et ce qu'il ne peut pas faire"
      },
      {
        "href": "/blog/how-to-write-a-sales-proposal",
        "label": "Comment rédiger une proposition commerciale"
      },
      {
        "href": "/blog/how-to-build-a-sales-proposal",
        "label": "Comment construire une proposition commerciale"
      },
      {
        "href": "/redesign/proposal-deck-redesign",
        "label": "Vous avez déjà une proposition ? Refonte de présentation de proposition commerciale"
      }
    ],
    "ctaHeadline": "On vous demande une proposition pour vendredi. Elle peut être prête mardi.",
    "updated": "2026-11-19"
  },
  {
    "slug": "ai-qbr-generator",
    "family": "generator",
    "navLabel": "Générateur de QBR par IA",
    "hubDesc": "Indiquez le client, les objectifs convenus et les chiffres du trimestre. Votre présentation de revue trimestrielle en deux minutes environ, diapositive qui fâche comprise. Sans compte.",
    "hubTag": "Pour le customer success",
    "metaTitle": "Générateur de QBR IA gratuit : revue trimestrielle | PitchBoost",
    "metaDescription": "Indiquez le client et les chiffres du trimestre : votre QBR en deux minutes environ. Objectifs, résultats, les ratés et plan du trimestre suivant. Gratuit.",
    "ogTitle": "La présentation QBR, en deux minutes environ.",
    "eyebrow": "Outil gratuit, sans inscription",
    "heroHeadline": "Générateur de QBR gratuit par IA : la revue trimestrielle d'activité, sans y laisser votre week-end",
    "heroSubhead": "Indiquez le client, les objectifs convenus et les chiffres du trimestre. PitchBoost construit la revue dans l'ordre où le client veut l'entendre, en deux minutes environ. Présenter la diapositive qui fâche, en revanche, reste votre travail.",
    "box": {
      "label": "Quel client, quel trimestre, et que s'est-il passé ?",
      "placeholder": "Revue T3 pour Alder Hotels. Objectif : un check-in plus rapide. Résultats : check-in moyen passé de 4,2 à 2,9 minutes, 14 hôtels sur 18 en service, 6 tickets de support (2 encore ouverts). Raté : l'intégration fidélité a glissé à novembre. Trimestre prochain : les 4 derniers hôtels, fidélité en service. Renouvellement en janvier.",
      "button": "Générer mon QBR",
      "hint": "Donnez-lui les objectifs et les vrais chiffres du trimestre : il n'en ajoute aucun. Deux présentations gratuites par jour, sans compte.",
      "kind": "Une présentation de revue trimestrielle d'activité (QBR) pour un client nommé. 8 diapositives : une couverture avec le nom du client et le trimestre, puis synthèse, ses objectifs, résultats par rapport à ces objectifs, adoption et usage, ce qui n'a pas bien marché et ce que nous faisons pour y remédier, recommandations, objectifs et plan du trimestre suivant.",
      "forLabel": "une revue trimestrielle d'activité"
    },
    "examples": [
      "QBR pour Northwind Freight, T2. Leur objectif : moins de kilomètres à vide. La planification des tournées tourne sur les 80 camions. Kilomètres à vide passés de 18% à 14%. 9 répartiteurs sur 11 l'utilisent chaque jour. Deux pannes en mai, toutes deux de moins d'une heure. Ensuite : le pilote de l'appli chauffeurs. Le contrat se renouvelle en septembre.",
      "Revue trimestrielle pour Brookside School, premier trimestre. Leur objectif : aucun cours perdu à cause de l'informatique. 212 tickets de support, 96% clos en moins d'une journée. Nouveaux ordinateurs portables déployés dans 3 niveaux sur 5, 2 retardés par les livraisons. Trimestre prochain : terminer le déploiement et former le personnel à la sécurité.",
      "Revue d'activité T4 pour Castell Property Group. Leur objectif : 30 demandes via les réseaux sociaux. 36 publications, abonnés en hausse de 22%, 41 demandes. Les vidéos ont moins bien marché. Trimestre prochain : moins de vidéos, un point marché mensuel et une révision du forfait."
    ],
    "outlineLabel": "La présentation qu'il construit",
    "outlineTitle": "Sept diapositives après la couverture, dont celle qui fâche",
    "outlineBody": "Un QBR n'est pas un rapport d'utilisation avec un logo dessus. C'est la preuve que le trimestre valait ce qu'il a coûté, et un accord sur le suivant.",
    "outline": [
      {
        "title": "Synthèse",
        "body": "La valeur apportée ce trimestre en une phrase, et les résultats clés. La diapositive que lira leur patron."
      },
      {
        "title": "Leurs objectifs",
        "body": "Ce qu'ils ont dit vouloir, alors tapez-le. Tout ce qui suit est mesuré à cette aune."
      },
      {
        "title": "Résultats par rapport à ces objectifs",
        "body": "Des résultats, pas de l'activité, à partir des chiffres que vous avez tapés. Il n'en ajoute aucun."
      },
      {
        "title": "Adoption et usage",
        "body": "Qui l'utilise, où ça marche bien et où ça traîne, d'après ce que vous lui avez donné."
      },
      {
        "title": "Ce qui n'a pas bien marché",
        "body": "L'échéance manquée ou la panne, nommée avant qu'ils ne la nomment, avec ce que vous faites pour y remédier."
      },
      {
        "title": "Recommandations",
        "body": "Deux ou trois choses qui leur permettraient d'en tirer davantage le trimestre prochain."
      },
      {
        "title": "Trimestre prochain",
        "body": "Les objectifs et le plan, prêts à être validés en réunion."
      }
    ],
    "gets": [
      {
        "title": "Centré sur leurs objectifs, pas sur vos fonctionnalités",
        "body": "La présentation est construite autour de ce que le client attendait du trimestre. C'est justement ce qui saute quand on recopie la présentation du trimestre précédent."
      },
      {
        "title": "Vos chiffres, et aucun autre",
        "body": "Il utilise les chiffres que vous lui donnez et n'en ajoute aucun. Un taux d'adoption inventé, devant le client à qui appartiennent les données, et la réunion tourne court."
      },
      {
        "title": "La diapositive qui fâche, comprise",
        "body": "Ce qui a mal tourné a sa propre diapositive, avec ce que vous faites pour y remédier. Un client pardonne un raté. Ce qu'il ne pardonne pas, c'est de devoir vous l'apprendre."
      },
      {
        "title": "Envoyée avant, et lue",
        "body": "Avec un compte gratuit, la revue part sous forme de lien aux couleurs de votre marque, et vous voyez si elle a été ouverte avant l'appel."
      }
    ],
    "faqs": [
      {
        "q": "Le générateur de QBR est-il vraiment gratuit ?",
        "a": "Oui. Tapez quelques lignes et une présentation mise en page apparaît en deux minutes environ, à un lien que vous pouvez ouvrir n'importe où. Sans compte, sans e-mail, sans carte bancaire. Chaque connexion a droit à deux présentations par jour, et chacune porte une petite mention PitchBoost."
      },
      {
        "q": "Que doit contenir une présentation QBR ?",
        "a": "Les objectifs du client, les résultats mesurés par rapport à ces objectifs, l'adoption et l'usage, ce qui n'a pas bien marché, vos recommandations et le plan du trimestre suivant. Commencez par une synthèse d'une diapositive pour le dirigeant qui n'assistait pas aux points hebdomadaires."
      },
      {
        "q": "Que dois-je taper pour obtenir un bon QBR ?",
        "a": "Le client, le trimestre, les objectifs convenus, les résultats chiffrés, ce qui a mal tourné et ce qui est prévu ensuite. Cinq ou six phrases suffisent. Si un renouvellement approche, précisez quand."
      },
      {
        "q": "Va-t-il inventer des chiffres d'usage ou des résultats ?",
        "a": "Non. Il utilise les chiffres que vous tapez et n'en ajoute aucun. Là où vous ne lui avez donné aucun chiffre, la diapositive l'exprime en mots plutôt que d'en inventer un."
      },
      {
        "q": "Puis-je télécharger le QBR en PowerPoint ou en PDF ?",
        "a": "Pas depuis l'outil gratuit. Créez un compte pour conserver la présentation, puis téléchargez-la en PowerPoint, PDF ou Google Slides avec une offre payante, ou payez $9 une seule fois pour cette présentation."
      },
      {
        "q": "Puis-je en faire un pour chaque client, chaque trimestre ?",
        "a": "Oui. Chaque présentation part du client que vous indiquez. Avec un compte, elle est aux couleurs de votre marque, et vous pouvez donner à une nouvelle revue l'allure de celle du trimestre précédent pour que l'ensemble reste cohérent."
      },
      {
        "q": "J'ai déjà la présentation QBR du trimestre dernier. Peut-il la mettre à jour ?",
        "a": "Oui. Importez le fichier PowerPoint et PitchBoost le remet en forme aux couleurs de votre marque, en conservant chaque diapositive et chaque chiffre. Il ne vous reste qu'à taper les chiffres de ce trimestre sur les diapositives."
      }
    ],
    "guides": [
      {
        "href": "/blog/qbr-deck",
        "label": "Comment construire un QBR dont votre client se servira vraiment"
      },
      {
        "href": "/redesign/qbr-deck-redesign",
        "label": "Vous avez déjà une présentation ? Refonte de présentation QBR"
      },
      {
        "href": "/presentations/report-presentation",
        "label": "Présentations de rapport"
      }
    ],
    "ctaHeadline": "Le trimestre est terminé. La présentation n'a pas à vous coûter le suivant.",
    "updated": "2026-11-19"
  },
  {
    "slug": "ai-board-deck-generator",
    "family": "generator",
    "navLabel": "Présentation conseil d'administration IA",
    "hubDesc": "Donnez-lui le trimestre par rapport au budget, la trésorerie et les décisions dont vous avez besoin. Vous obtenez en deux minutes environ une présentation pour le conseil d'administration, les demandes en tête. Sans compte.",
    "hubTag": "Pour le prochain conseil",
    "metaTitle": "Présentation conseil d'administration IA gratuite | PitchBoost",
    "metaDescription": "Le trimestre face au budget, la trésorerie, les décisions attendues : présentation du conseil en deux minutes environ, décisions en tête. Gratuit, sans compte.",
    "ogTitle": "La présentation du conseil, décisions en tête.",
    "eyebrow": "Outil gratuit, sans inscription",
    "heroHeadline": "Générateur gratuit de présentation pour le conseil d'administration par IA : les décisions en premier",
    "heroSubhead": "Indiquez-lui comment le trimestre s'est passé par rapport au budget, où en est la trésorerie et ce que le conseil doit décider. En deux minutes environ, il construit une présentation que les administrateurs peuvent lire sur leur téléphone la veille au soir. Les mauvaises nouvelles, c'est toujours à vous de les annoncer.",
    "box": {
      "label": "Comment s'est passé le trimestre, et qu'attendez-vous du conseil ?",
      "placeholder": "Conseil d'administration T3 de Ledgerly. Chiffre d'affaires $412k pour un budget de $450k. 163 cliniques, contre 140 avant. Churn 2,1 %. Trésorerie $1.9M, 14 mois de runway. Le lancement au Royaume-Uni est repoussé à janvier. Décisions : valider deux recrutements commerciaux et une ligne de venture debt de $500k.",
      "button": "Générer ma présentation pour le conseil",
      "hint": "Donnez-lui le réalisé et le budget : il n'ajoute aucun chiffre. Deux présentations gratuites par jour, sans compte.",
      "kind": "Présentation pour le conseil d'administration d'une entreprise. 8 diapositives : une couverture avec l'entreprise et la réunion, puis synthèse, décisions demandées, indicateurs clés par rapport au budget, finances (uniquement les chiffres fournis), ce qui a marché et ce qui n'a pas marché, initiatives clés, risques et points où nous avons besoin d'aide.",
      "forLabel": "une présentation pour le conseil d'administration"
    },
    "examples": [
      "Présentation du conseil pour Brightloop, T2 : 74 entreprises de chauffage-climatisation clientes, le budget en prévoyait 80. CA mensuel $29.6k, +9 % par mois. Trésorerie $1.4M, 16 mois de runway. Un concurrent a baissé ses prix en mai. Décisions : valider le pilote plomberie et le recrutement d'un directeur commercial.",
      "Conseil trimestriel de Kindred Kitchen : CA $640k, 4 % au-dessus du budget. Marge brute passée de 71 % à 66 % à cause du coût des ingrédients. 4 600 abonnés. La deuxième cuisine ouvre en mars, avec deux mois de retard. Décision à prendre : augmenter les prix de 6 % en janvier.",
      "Conseil d'administration de Harbor Youth Sports, une association : 1 240 enfants inscrits, +11 %. Recettes $318k pour un budget de $300k. Deux entraîneurs sont partis. Le bail du terrain se termine en juin. Décisions : renouveler le bail pour 5 ans et valider un poste de chargé de collecte de fonds à temps partiel."
    ],
    "outlineLabel": "La présentation qu'il construit",
    "outlineTitle": "Sept diapositives après la couverture, les décisions en deuxième",
    "outlineBody": "Une présentation pour le conseil sert à obtenir des décisions, et les administrateurs la lisent sur leur téléphone la veille au soir. Les demandes viennent donc en tête, et rien d'important n'attend l'annexe.",
    "outline": [
      {
        "title": "Synthèse",
        "body": "Comment le trimestre s'est passé par rapport au budget, en quelques points qu'un administrateur doit connaître s'il ne lit rien d'autre."
      },
      {
        "title": "Décisions demandées",
        "body": "Ce que le conseil doit trancher, formulé sous forme de décisions. Tôt, pour que la réunion y soit consacrée."
      },
      {
        "title": "Indicateurs clés par rapport au budget",
        "body": "Les chiffres que vous avez donnés, chacun face au budget. Un objectif manqué n'est pas arrondi à la hausse."
      },
      {
        "title": "Finances",
        "body": "Chiffre d'affaires, consommation de trésorerie, trésorerie et runway, à partir de vos seuls chiffres. Pas de chiffre fourni, pas de chiffre affiché."
      },
      {
        "title": "Ce qui a marché, ce qui n'a pas marché",
        "body": "Les deux, sans détour. Les administrateurs pardonnent les objectifs manqués. Pas les surprises."
      },
      {
        "title": "Initiatives clés",
        "body": "Où en sont les grands projets, et tout ce qui modifie le plan."
      },
      {
        "title": "Risques",
        "body": "Les quelques-uns qui pourraient vraiment faire mal, et là où vous avez besoin de l'aide du conseil."
      }
    ],
    "gets": [
      {
        "title": "Les demandes en tête",
        "body": "Les décisions arrivent en deuxième diapositive, pas en dernière. Une décision reléguée à la diapositive 30 se prend lors d'un appel de suivi, trois semaines plus tard."
      },
      {
        "title": "Votre réalisé, intact",
        "body": "Il affiche les chiffres que vous tapez face au budget que vous tapez, et n'en ajoute aucun. Un administrateur qui repère un seul chiffre inventé ne croit plus les quarante autres."
      },
      {
        "title": "Lisible la veille au soir",
        "body": "Une idée par diapositive, dans une taille de texte lisible sur téléphone. La présentation est un lien : personne n'a à chercher la bonne pièce jointe."
      },
      {
        "title": "Sachez si elle a été lue",
        "body": "Avec un compte gratuit, la présentation part sous forme de lien aux couleurs de votre marque, et vous voyez quand elle a été ouverte avant la réunion."
      }
    ],
    "faqs": [
      {
        "q": "Le générateur de présentation pour le conseil d'administration est-il vraiment gratuit ?",
        "a": "Oui. Tapez quelques lignes et une présentation mise en page apparaît en deux minutes environ, à un lien que vous pouvez ouvrir n'importe où. Sans compte, sans e-mail, sans carte bancaire. Chaque connexion a droit à deux présentations par jour, et chacune porte une petite mention PitchBoost."
      },
      {
        "q": "Que doit contenir une présentation pour le conseil d'administration ?",
        "a": "Une synthèse en une diapositive, les décisions dont vous avez besoin, les indicateurs clés par rapport au budget, les finances avec la trésorerie et le runway, ce qui a marché et ce qui n'a pas marché, l'état des grandes initiatives, et les risques. Le détail va en annexe."
      },
      {
        "q": "Que dois-je taper pour obtenir une bonne présentation pour le conseil ?",
        "a": "La période, les principaux chiffres par rapport au budget, la trésorerie et le runway, les réussites et les ratés, et les décisions dont vous avez besoin. Cinq ou six phrases suffisent. Plus vous lui donnez de réalisé, moins il a besoin de mots."
      },
      {
        "q": "Va-t-il inventer des chiffres financiers ou des indicateurs ?",
        "a": "Non. Il utilise les chiffres que vous tapez et n'en ajoute aucun. Si vous omettez la trésorerie ou le runway, la diapositive des finances le dit en toutes lettres : il ne devine pas."
      },
      {
        "q": "Puis-je télécharger la présentation en PowerPoint ou en PDF ?",
        "a": "Pas depuis l'outil gratuit. Créez un compte pour conserver la présentation, puis téléchargez-la en PowerPoint, PDF ou Google Slides avec une offre payante, ou payez $9 une seule fois pour cette présentation."
      },
      {
        "q": "Est-ce prudent de mettre les chiffres du conseil dans un outil gratuit ?",
        "a": "La présentation se trouve à un lien non répertorié, valable sept jours : toute personne qui a le lien peut l'ouvrir, et il n'est référencé nulle part. Pour de vrais documents de conseil, créez-la dans un compte gratuit, où le lien peut être protégé par un mot de passe."
      },
      {
        "q": "J'ai déjà la présentation du conseil du trimestre dernier. Peut-il la mettre à jour ?",
        "a": "Oui. Importez le fichier PowerPoint et PitchBoost le remet en forme aux couleurs de votre marque, en conservant chaque diapositive et chaque chiffre. Il ne vous reste qu'à taper les chiffres de ce trimestre sur les diapositives."
      }
    ],
    "guides": [
      {
        "href": "/blog/board-presentation",
        "label": "Comment faire une présentation pour le conseil d'administration que les administrateurs lisent vraiment"
      },
      {
        "href": "/redesign/board-deck-redesign",
        "label": "Vous avez déjà une présentation ? Refonte de présentation pour le conseil"
      },
      {
        "href": "/presentations/investor-update",
        "label": "Reportings aux investisseurs"
      }
    ],
    "ctaHeadline": "La réunion est à l'agenda. La présentation peut être prête pour midi.",
    "updated": "2026-11-19"
  },
  {
    "slug": "text-to-presentation",
    "family": "converter",
    "navLabel": "Texte en présentation",
    "hubDesc": "Collez des notes, un plan ou quelques paragraphes et obtenez des diapositives mises en page en deux minutes environ, une idée par diapositive. Sans compte.",
    "hubTag": "Des notes et une réunion ?",
    "metaTitle": "Texte en présentation IA : notes en diapositives | PitchBoost",
    "metaDescription": "Collez un texte ou des notes : présentation mise en page en deux minutes environ. Gratuit, sans compte, toutes langues. Textes longs avec un compte gratuit.",
    "ogTitle": "Collez vos notes. Récupérez les diapositives.",
    "eyebrow": "Outil gratuit, sans créer de compte",
    "heroHeadline": "Texte en présentation : collez vos notes, récupérez les diapositives",
    "heroSubhead": "Des notes de réunion, un plan, un chapitre, l'e-mail qui a fini en feuille de route. Collez-le et il revient sous forme de diapositives dans un ordre logique, une idée par diapositive, en deux minutes environ.",
    "box": {
      "label": "Collez votre texte, vos notes ou votre plan",
      "placeholder": "Bilan T3 magasins. Ventes en hausse de 8% sur un an, portées par les deux nouveaux magasins. Commandes en ligne stables. Retours passés de 4% à 6% après le changement de guide des tailles. Turnover du personnel en baisse. Décision à prendre : élargir les horaires du week-end dans les trois magasins les plus fréquentés ?",
      "button": "Transformer en diapositives",
      "hint": "Jusqu'à 1 000 caractères ici. Textes plus longs et fichiers PDF avec un compte gratuit. Deux présentations gratuites par jour.",
      "kind": "",
      "forLabel": "une présentation à partir de mes notes"
    },
    "examples": [
      "Notes de cours : la photosynthèse. La phase claire se déroule dans les thylakoïdes et produit de l'ATP et du NADPH. Le cycle de Calvin les utilise pour fixer le dioxyde de carbone sous forme de sucre. Facteurs limitants : lumière, CO2, température. Pour une classe de 3e, SVT.",
      "Point projet : le nouveau système de l'entrepôt est en service depuis le 3 mars, avec deux semaines de retard. Erreurs de préparation passées de 3.1% à 0.9%. Points ouverts : imprimantes d'étiquettes sur le site B, formation de l'équipe de nuit. Prochaine étape : site C en mai.",
      "Plan d'une intervention : 1. Pourquoi les petites villes perdent leurs jeunes. 2. Ce que trois villes ont fait pour les garder. 3. Ce que ça a coûté. 4. Ce qu'on pourrait tenter chez nous."
    ],
    "outlineLabel": "Comment ça marche",
    "outlineTitle": "D'un bloc de texte à des diapositives que vous pouvez présenter sans rougir",
    "outlineBody": "Pas besoin d'un texte bien rangé. Il lui faut ce que vous savez.",
    "outline": [
      {
        "title": "Collez ce que vous avez",
        "body": "Des notes, un plan, une transcription, quelques paragraphes. Les intertitres aident, mais ne sont pas obligatoires."
      },
      {
        "title": "Il trouve la structure",
        "body": "Un rapport commence par le résultat. Un cours se termine sur l'essentiel à retenir. Un pitch se termine sur une prochaine étape. Il choisit d'après ce que vous avez collé."
      },
      {
        "title": "Une idée par diapositive",
        "body": "Les paragraphes deviennent des diapositives avec un titre qui dit quelque chose, pas un mur de puces surmonté d'un intitulé."
      },
      {
        "title": "Gardez-la, ou allez plus loin",
        "body": "Le lien reste actif sept jours. Un compte gratuit conserve la présentation, accepte des textes bien plus longs et lit les fichiers PDF."
      }
    ],
    "gets": [
      {
        "title": "Votre contenu, dans l'ordre",
        "body": "Il réorganise et resserre ce que vous avez collé. Il ne gonfle pas vos notes avec des faits que vous ne lui avez jamais donnés."
      },
      {
        "title": "Les chiffres, intacts",
        "body": "Les chiffres de votre texte restent tels que vous les avez écrits. Arrondir 3.1% à 3%, c'est votre décision, pas celle de l'outil."
      },
      {
        "title": "Toutes les langues",
        "body": "Collez en espagnol, en arabe ou en vietnamien et les diapositives reviennent dans cette langue, écritures de droite à gauche comprises."
      },
      {
        "title": "Un paragraphe ou un chapitre",
        "body": "Jusqu'à 1 000 caractères ici, sans compte. Jusqu'à 50 000, environ 8 000 mots, avec un compte gratuit."
      }
    ],
    "faqs": [
      {
        "q": "Comment transformer un texte en présentation avec l'IA ?",
        "a": "Collez le texte dans le champ et cliquez sur le bouton. PitchBoost le lit, détermine s'il s'agit d'un cours, d'un rapport, d'une intervention ou d'un pitch, et construit les diapositives dans cet ordre, une idée par diapositive. Comptez deux minutes environ."
      },
      {
        "q": "Est-ce vraiment gratuit ?",
        "a": "Oui. Tapez quelques lignes et une présentation mise en page apparaît en deux minutes environ, à un lien que vous pouvez ouvrir n'importe où. Sans compte, sans e-mail, sans carte bancaire. Chaque connexion a droit à deux présentations par jour, et chacune porte une petite mention PitchBoost."
      },
      {
        "q": "Quelle longueur de texte puis-je coller ?",
        "a": "1 000 caractères dans l'outil gratuit, soit environ trois paragraphes. Un compte gratuit accepte jusqu'à 50 000 caractères, environ 8 000 mots, et peut aussi lire un PDF."
      },
      {
        "q": "Puis-je convertir un document Word ?",
        "a": "Copiez le texte depuis Word et collez-le. Pour un long document, enregistrez-le en PDF et importez-le avec un compte gratuit : dans les deux cas, vous obtenez le même type de présentation."
      },
      {
        "q": "Va-t-il ajouter des choses que je n'ai pas écrites ?",
        "a": "L'outil gratuit travaille à partir de votre texte. Avec un compte, l'éditeur complet peut rechercher et citer des faits pour un cours ou un rapport quand la présentation en a besoin, et il signale tout ce dont il n'a pas pu retrouver l'origine."
      },
      {
        "q": "Puis-je télécharger les diapositives au format PowerPoint ?",
        "a": "Pas depuis l'outil gratuit. Créez un compte pour conserver la présentation, puis téléchargez-la en PowerPoint, PDF ou Google Slides avec une offre payante, ou payez $9 une seule fois pour cette présentation."
      },
      {
        "q": "Quelle différence avec coller mes notes dans ChatGPT ?",
        "a": "ChatGPT vous renvoie un plan, ou un fichier brut qu'il vous reste à mettre en page. Ici, vous obtenez la présentation déjà mise en page, à un lien depuis lequel vous pouvez présenter. PitchBoost fonctionne aussi dans ChatGPT, si vous préférez y rester."
      }
    ],
    "guides": [
      {
        "href": "/blog/text-to-ppt",
        "label": "Texte en PPT : ce que les outils produisent vraiment"
      },
      {
        "href": "/blog/word-document-to-powerpoint",
        "label": "D'un document Word à PowerPoint"
      },
      {
        "href": "/tools/pdf-to-presentation",
        "label": "Vous avez plutôt un PDF ? PDF en présentation"
      },
      {
        "href": "/ai-presentation-maker",
        "label": "Partir d'un sujet : le créateur de présentations IA"
      }
    ],
    "ctaHeadline": "La réflexion est faite. Les diapositives sont à deux minutes.",
    "updated": "2026-11-19"
  },
  {
    "slug": "pdf-to-presentation",
    "family": "converter",
    "navLabel": "PDF en présentation",
    "hubDesc": "Importez un rapport, une note ou un article en PDF et obtenez des diapositives qui gardent ses idées, ses chiffres et ses images. Compte gratuit, sans carte.",
    "hubTag": "Pour qui a reçu un PDF",
    "metaTitle": "Convertir un PDF en présentation avec l'IA | PitchBoost",
    "metaDescription": "Importez un rapport, une note ou un article en PDF et obtenez une présentation qui garde ses idées, chiffres et images. Gratuit : une par mois, sans carte.",
    "ogTitle": "Le PDF devient des diapositives. Les chiffres, eux, restent.",
    "eyebrow": "Compte gratuit, sans carte",
    "heroHeadline": "PDF en présentation : le rapport devient des diapositives, et les chiffres arrivent intacts",
    "heroSubhead": "Importez le PDF. PitchBoost le lit page par page, garde ce qu'il dit et les images qu'il contient, et construit des diapositives que vous pouvez présenter, modifier et envoyer. Pas une image de chaque page avec des zones de texte posées par-dessus.",
    "box": {
      "label": "Collez un passage de votre PDF",
      "placeholder": "Collez une page ou deux du PDF : la synthèse, les résultats, les recommandations. Par exemple : Enquête clients 2026. 1 240 réponses. La satisfaction passe de 71% à 78%. Les délais de livraison sont la première source de plainte (34% des commentaires). Recommandation : un deuxième entrepôt dans le nord.",
      "button": "En faire des diapositives",
      "hint": "Jusqu'à 1 000 caractères ici, pour voir ce qu'il fait. Le PDF entier : compte gratuit. Deux présentations gratuites par jour.",
      "kind": "",
      "forLabel": "une présentation à partir d'un PDF"
    },
    "upload": {
      "button": "Importer votre PDF",
      "note": "Compte gratuit, sans carte. PDF jusqu'à 75 pages.",
      "tryLabel": "Pas encore prêt à créer un compte ? Collez un passage et voyez ce qu'il fait"
    },
    "examples": [
      "Synthèse du rapport annuel : chiffre d'affaires £12.4m, en hausse de 6%. 18 300 adhérents, 900 de plus. Trois nouveaux sites ouverts. Coûts de l'énergie en hausse de 22%. Priorités pour l'an prochain : la fidélisation, le site de Leeds, un nouveau système de réservation.",
      "Résumé et résultats d'un article de recherche : un programme de marche de 12 semaines pour les plus de 65 ans (n=214) a amélioré les scores d'équilibre de 18% et fait passer les chutes déclarées de 31 à 19. Limites : chutes autodéclarées, une seule région.",
      "Brief de campagne : lancer le service de recharge auprès des clients existants en mars. Cible : les foyers qui achètent déjà tous les mois. Message : les mêmes produits, 30% de plastique en moins. Budget £40k entre emailing, magasins et réseaux sociaux payants."
    ],
    "outlineLabel": "Comment ça marche",
    "outlineTitle": "Quatre étapes entre un PDF et une présentation prête à présenter",
    "outlineBody": "Rapports, briefs, livres blancs, articles de recherche, et diapositives que quelqu'un a exportées en PDF avant de perdre l'original.",
    "outline": [
      {
        "title": "Importez le PDF",
        "body": "Jusqu'à 75 pages. Un rapport, un brief, un article, ou des diapositives qui n'existent plus qu'en PDF."
      },
      {
        "title": "Il lit les pages",
        "body": "Le texte, les tableaux et les valeurs des graphiques sont lus page par page, et les images du fichier sont extraites pour que la présentation puisse s'en servir."
      },
      {
        "title": "Toutes les pages, ou la version courte",
        "body": "Gardez une diapositive par page, ou faites-la condenser aux 15 ou 20 qu'une réunion a le temps de voir. Un rapport de 40 pages fait rarement une réunion de 40 diapositives."
      },
      {
        "title": "Modifiez, présentez, envoyez",
        "body": "Tapez directement sur n'importe quelle diapositive ou demandez une modification en une phrase. Partagez le lien, présentez depuis le navigateur ou téléchargez-la."
      }
    ],
    "gets": [
      {
        "title": "De vraies diapositives, pas des images de pages",
        "body": "Un convertisseur vous donne une image de chaque page avec des zones de texte éparses par-dessus. Ici, le contenu est reconstruit en diapositives : un titre, une idée, le détail qui l'étaye."
      },
      {
        "title": "Des chiffres vérifiés dans le PDF",
        "body": "Chaque chiffre d'une diapositive est vérifié dans le document. Tout ce qui ne peut pas y être rattaché est retiré, ou signalé pour que vous le vérifiiez."
      },
      {
        "title": "Les images suivent",
        "body": "Les photos et autres images du PDF sont extraites, jusqu'à dix, et proposées pour les diapositives où elles ont leur place. Un graphique est repris par ses valeurs, un tableau ligne par ligne."
      },
      {
        "title": "Modifiable de bout en bout",
        "body": "Modifiez n'importe quelle diapositive dans le navigateur. Le PowerPoint modifiable téléchargé contient de vraies zones de texte et embarque ses polices dans le fichier."
      }
    ],
    "faqs": [
      {
        "q": "L'IA peut-elle transformer un PDF en présentation ?",
        "a": "Oui. Importez le PDF : PitchBoost lit ses pages, en extrait les idées, les chiffres et les images, et les reconstruit en diapositives. Pour un rapport classique, comptez quelques minutes."
      },
      {
        "q": "Est-ce gratuit ?",
        "a": "Un compte gratuit permet de créer une présentation par mois, jusqu'à 10 diapositives, partagée par lien. Aucune carte requise. Pour la télécharger en PowerPoint, PDF ou Google Slides, payez $9 une seule fois pour cette présentation (jusqu'à 25 diapositives) ou choisissez Starter à $7 par mois."
      },
      {
        "q": "Quelle longueur peut faire le PDF ?",
        "a": "Jusqu'à 75 pages, dont les 60 premières sont lues. Pour un rapport long, choisissez la version condensée quand elle vous est proposée : environ 15 à 20 diapositives."
      },
      {
        "q": "Les diapositives seront-elles modifiables dans PowerPoint ?",
        "a": "Oui. Le PowerPoint modifiable contient de vraies zones de texte et embarque ses polices dans le fichier, il s'ouvre donc à l'identique sur un autre ordinateur. Il existe aussi une version au rendu exact, où chaque diapositive est une image, pour quand rien ne doit bouger."
      },
      {
        "q": "Va-t-il modifier mes chiffres ou ma formulation ?",
        "a": "Il garde ce que dit le PDF. Les chiffres sont vérifiés dans le document, et la formulation reste la vôtre, sauf si vous lui demandez de la resserrer."
      },
      {
        "q": "Et pour un document Word, ou du texte brut ?",
        "a": "Collez le texte dans l'outil texte en présentation, ou enregistrez le document Word en PDF et importez-le. Dans les deux cas, vous obtenez le même type de présentation."
      },
      {
        "q": "En quoi est-ce différent d'Adobe ou d'un convertisseur PDF en PPT en ligne ?",
        "a": "Un convertisseur copie chaque page sur une diapositive au format de la page. C'est le bon outil quand vous avez besoin de la page elle-même. PitchBoost sert quand vous devez présenter ce que dit le PDF : il reconstruit le contenu en diapositives, une idée par diapositive."
      }
    ],
    "guides": [
      {
        "href": "/blog/pdf-to-editable-powerpoint",
        "label": "PDF en PowerPoint modifiable : ce qui marche et ce qui ne marche pas"
      },
      {
        "href": "/tools/text-to-presentation",
        "label": "Juste du texte ? Texte en présentation"
      },
      {
        "href": "/presentations/report-presentation",
        "label": "Présentations de rapport"
      },
      {
        "href": "/presentations/research-presentation",
        "label": "Présentations de recherche"
      }
    ],
    "ctaHeadline": "Quelqu'un en a fait un PDF. Refaites-en quelque chose que vous pouvez présenter.",
    "updated": "2026-11-19"
  }
];
