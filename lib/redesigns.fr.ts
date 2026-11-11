import type { RedesignPage } from "./redesigns";
import type { RedesignHubCopy } from "./redesign-i18n";

/**
 * French (France) translation of lib/redesigns.ts, written with "vous"
 * (strict style guide: idiomatic, no em dashes, brand names and prices
 * untouched, French typography with non-breaking spaces). Slugs match the
 * English pages one to one so hreflang works. Keep in sync: when an English
 * page changes, update its entry here.
 */
export const REDESIGNS_FR: RedesignPage[] = [
  {
    "slug": "powerpoint-redesign",
    "navLabel": "Refonte de PowerPoint",
    "metaTitle": "Refonte PowerPoint par IA, dans votre charte | PitchBoost",
    "metaDescription": "Importez votre PowerPoint et récupérez-le redessiné dans votre charte : même contenu, mise en page moderne, en quelques minutes. Gratuit, sans compétence en design.",
    "heroHeadline": "Votre PowerPoint redessiné par l'IA en quelques minutes",
    "heroSubhead": "Gardez le contenu. Corrigez tout le reste. PitchBoost lit votre .pptx, apprend votre charte graphique à partir de votre site web et reconstruit chaque diapositive avec une mise en page, une typographie et des couleurs professionnelles, sous vos yeux.",
    "painPoints": [
      {
        "title": "Le contenu est bon, la présentation fait mauvaise impression",
        "body": "Vous peaufinez ce discours depuis des mois. Mais les murs de puces, les icônes clip art et les dégradés façon 2014 desservent chaque mot. Refaire le design à la main, c'est repartir de zéro dans un outil que vous n'avez pas le temps d'apprendre."
      },
      {
        "title": "Les agences facturent des milliers de dollars et prennent des semaines",
        "body": "Une agence de design de présentations annonce $2,000-8,000 et deux semaines de délai pour ce qui reste, au fond, la même présentation avec une meilleure structure. Le calcul ne tient que pour la présentation de l'année, pas pour celle de la semaine."
      },
      {
        "title": "Les modèles aggravent les choses",
        "body": "Coller vos diapositives dans un modèle casse les mises en page, et le résultat ressemble toujours au modèle de tout le monde. Votre marque disparaît dans la palette de quelqu'un d'autre."
      }
    ],
    "outcomes": [
      "Le même discours, un design professionnel, rien de réécrit sans votre accord",
      "Votre vraie marque : logo, couleurs et ton repris de votre site web",
      "Un lien de partage avec suivi, plus l'export PDF et PowerPoint",
      "Quelques minutes et quelques dollars, pas des semaines et quatre chiffres"
    ],
    "faqs": [
      {
        "q": "La refonte va-t-elle modifier mon contenu ?",
        "a": "Par défaut, PitchBoost conserve le fil et le contenu clé de chaque diapositive, et refait la mise en page, la typographie et les visuels autour. Si votre présentation est très longue, il vous demande d'abord si vous souhaitez la condenser."
      },
      {
        "q": "Quels formats de fichier puis-je importer ?",
        "a": "PowerPoint (.pptx) jusqu'à 50 Mo. Les utilisateurs de Keynote et de Google Slides peuvent d'abord exporter en .pptx : les deux le font sans perte, en une seule étape."
      },
      {
        "q": "Comment connaît-il ma marque ?",
        "a": "Vous lui indiquez votre site web. Il récupère votre logo, vos couleurs et votre ton à partir de vos propres pages, et vous pouvez vérifier et remplacer le logo avant toute génération."
      },
      {
        "q": "Combien coûte une refonte de PowerPoint ?",
        "a": "L'offre gratuite inclut une génération de présentation par IA par mois, et une refonte compte comme telle. Au-delà, Starter coûte $7 par mois sans badge et Pro $29 par mois, alors que les devis d'agence commencent autour de $2,000 par présentation."
      },
      {
        "q": "Puis-je le faire depuis ChatGPT ?",
        "a": "Oui. Ajoutez le plugin PitchBoost depuis l'annuaire des plugins de ChatGPT (comptes ChatGPT gratuits compris), joignez votre .pptx dans une conversation et demandez une refonte. ChatGPT l'envoie à PitchBoost et vous répond avec le lien ; ouvrez-le dans PitchBoost pour l'aperçu complet et les téléchargements."
      }
    ],
    "ctaHeadline": "Importez la présentation. Gardez le discours. Oubliez les dégradés de 2014."
  },
  {
    "slug": "pitch-deck-makeover",
    "navLabel": "Relooking de pitch deck",
    "metaTitle": "Relooking de pitch deck par IA pour fondateurs | PitchBoost",
    "metaDescription": "Offrez à votre pitch deck un relooking professionnel par IA. Importez-le, gardez votre histoire et obtenez un design prêt pour les investisseurs, en minutes.",
    "heroHeadline": "Un relooking de pitch deck qui garde votre histoire et corrige le design",
    "heroSubhead": "Les investisseurs décident vite, et un deck qui fait maison donne l'image d'une entreprise faite maison. Importez ce que vous avez : PitchBoost le reconstruit en une présentation que vous serez fier de voir circuler.",
    "painPoints": [
      {
        "title": "Votre deck circule sans vous",
        "body": "La réunion avec les associés a lieu après que le deck a circulé tout seul. Si le design évoque un projet du dimanche, personne n'écoute la diapositive de traction."
      },
      {
        "title": "Vous connaissez l'histoire par cœur, et c'est bien le problème",
        "body": "Les fondateurs regardent leurs propres diapositives si longtemps qu'ils ne les voient plus. La dixième version a les mêmes mises en page surchargées que la première, avec simplement plus de mots."
      },
      {
        "title": "L'aide en design arrive au pire moment",
        "body": "Les semaines qui précèdent une levée sont justement celles où vous ne pouvez ni passer vos soirées sur Figma ni financer le calendrier d'une agence. Le relooking doit être rapide, sinon il n'aura pas lieu."
      }
    ],
    "outcomes": [
      "Une mise en page et une typographie prêtes pour les investisseurs, sans toucher à votre récit",
      "Une charte cohérente sur chaque diapositive, reprise de votre propre site",
      "Un lien suivi : voyez quels investisseurs l'ont ouvert et ce qu'ils ont lu",
      "Prêt en quelques minutes, à temps pour la mise en relation de demain"
    ],
    "faqs": [
      {
        "q": "Va-t-il réécrire mes chiffres ou mes affirmations ?",
        "a": "Non. La refonte conserve votre contenu (traction, données financières, montant recherché) et en reconstruit la présentation. L'IA n'invente jamais de métriques, et ce qu'elle signale comme faible, c'est à vous de le modifier ou de le garder."
      },
      {
        "q": "Les investisseurs verront-ils que le design vient d'une IA ?",
        "a": "Ils verront qu'il a été conçu de façon professionnelle. Les mises en page suivent les mêmes principes qu'un designer : hiérarchie, espace, une idée par diapositive et votre marque du début à la fin."
      },
      {
        "q": "Mon deck fait 30 diapositives. Est-ce un problème ?",
        "a": "PitchBoost vous demandera si vous voulez reconstruire les 30 telles quelles ou les condenser vers la longueur plus serrée que les investisseurs lisent vraiment jusqu'au bout. Dans les deux cas, c'est vous qui décidez."
      },
      {
        "q": "Combien ça coûte pendant une levée ?",
        "a": "L'offre gratuite inclut une génération de présentation par mois, donc essayer le relooking ne coûte rien. Si vous faites des itérations entre deux rendez-vous investisseurs, Pro à $29 par mois couvre plusieurs séries de révisions."
      }
    ],
    "ctaHeadline": "L'histoire est la vôtre. Donnez-lui le design qu'elle mérite."
  },
  {
    "slug": "make-powerpoint-look-professional",
    "navLabel": "Rendre un PowerPoint professionnel",
    "metaTitle": "Rendre un PowerPoint professionnel, rapidement | PitchBoost",
    "metaDescription": "La façon la plus rapide de rendre un PowerPoint professionnel : importez-le et laissez l'IA refaire le design dans votre charte. Mêmes diapositives, en minutes.",
    "heroHeadline": "Rendez votre PowerPoint professionnel sans devenir designer",
    "heroSubhead": "Deux options : passer un week-end à apprendre les principes du design, ou importer la présentation et laisser PitchBoost les appliquer pour vous. Alignement, hiérarchie, espacement, couleurs de marque, tout y passe.",
    "painPoints": [
      {
        "title": "Vous voyez que ça cloche, sans savoir pourquoi",
        "body": "Des blocs mal alignés, six polices, des couleurs presque assorties. Nommer les problèmes est déjà une compétence de designer ; les corriger diapositive par diapositive prend des heures que vous n'avez pas."
      },
      {
        "title": "Tous les conseils disent « moins de texte, plus d'images »",
        "body": "Chaque guide répète les trois mêmes règles et vous laisse le vrai travail. Connaître les règles et les appliquer sur quarante diapositives sont deux métiers très différents."
      },
      {
        "title": "Le plus dur, c'est la cohérence",
        "body": "Une belle diapositive, c'est facile. Faire respecter à la diapositive 23 le même système qu'à la diapositive 2, c'est ce qui sépare une présentation professionnelle d'une présentation décorée, et c'est précisément ce que les machines font mieux."
      }
    ],
    "outcomes": [
      "Hiérarchie, espacement et alignement professionnels sur chaque diapositive",
      "Un seul système de typographie et de couleurs, issu de votre vraie marque",
      "Les diapositives surchargées restructurées : les idées restent, le fouillis part",
      "Terminé en quelques minutes, avec un éditeur pour tout ce que vous voulez ajuster"
    ],
    "faqs": [
      {
        "q": "Qu'est-ce qui rend un PowerPoint vraiment professionnel ?",
        "a": "La cohérence et la sobriété : une seule échelle typographique, un seul système de couleurs, des éléments alignés, de l'espace et une idée par diapositive. PitchBoost applique tout cela automatiquement quand il reconstruit votre présentation."
      },
      {
        "q": "Dois-je installer quelque chose ?",
        "a": "Non. Tout se passe dans le navigateur : importez le .pptx, indiquez votre site web pour la charte graphique, puis téléchargez le résultat en PowerPoint ou en PDF, ou partagez-le sous forme de lien."
      },
      {
        "q": "Puis-je encore modifier les diapositives ensuite ?",
        "a": "Oui. Chaque présentation s'ouvre dans un éditeur où vous pouvez changer le texte, remplacer des images ou demander à l'IA des révisions précises avant de la partager ou de l'exporter."
      },
      {
        "q": "L'essai est-il vraiment gratuit ?",
        "a": "L'offre gratuite inclut une génération de présentation par IA par mois, sans carte bancaire. De quoi refaire votre présentation et juger le résultat par vous-même."
      }
    ],
    "ctaHeadline": "Oubliez la formation en design. Importez la présentation."
  },
  {
    "slug": "rebrand-presentation",
    "navLabel": "Changer la charte d'une présentation",
    "metaTitle": "Rebranding de présentations : nouvelle charte | PitchBoost",
    "metaDescription": "Nouvelle marque, vieilles présentations ? Importez-les et PitchBoost applique vos nouveaux logo, couleurs et ton. Toute une bibliothèque en un après-midi.",
    "heroHeadline": "Vous avez changé l'image de l'entreprise. Changez celle de toutes ses présentations.",
    "heroSubhead": "Un rebranding n'est pas terminé tant que l'équipe commerciale présente encore l'ancien logo. Importez chaque présentation, indiquez à PitchBoost le nouveau site et récupérez tout aux couleurs de la nouvelle marque, une présentation ou toute la bibliothèque.",
    "painPoints": [
      {
        "title": "La marque est lancée, pas les présentations",
        "body": "Le site web est neuf, les présentations commerciales datent de l'ère précédente. Chaque présentation montrée aux clients est désormais une incohérence que votre nouvelle charte interdit noir sur blanc."
      },
      {
        "title": "Refaire l'habillage à la main, c'est l'enfer des modèles",
        "body": "Changer le masque des diapositives casse la moitié des mises en page, et quelqu'un doit encore corriger chaque diapositive à la main. Multipliez par toutes les présentations du drive."
      },
      {
        "title": "Ce n'est le travail de personne",
        "body": "Le marketing possède la marque, les commerciaux possèdent les présentations, et refaire quarante présentations retombe sur celui qui se plaint le moins. Le chantier reste à 80% pour toujours."
      }
    ],
    "outcomes": [
      "Nouveaux logo, couleurs et ton appliqués automatiquement depuis votre nouveau site",
      "Le contenu conservé : le pitch survit, l'ancienne marque non",
      "Mode en masse : convertissez tout un dossier de fichiers .pptx en une seule fois",
      "Chaque présentation mise à jour publiée sous forme de lien suivi, plus l'export PPTX"
    ],
    "faqs": [
      {
        "q": "Nous avons des dizaines de présentations. Faut-il les importer une par une ?",
        "a": "Non, la reconstruction en masse accepte jusqu'à 12 PowerPoint par lancement et les traite l'un après l'autre dans votre nouvelle charte. Indiquez un dossier et revenez à une bibliothèque mise à jour."
      },
      {
        "q": "Comment sait-il qu'il s'agit de la nouvelle marque et pas de l'ancienne ?",
        "a": "Il analyse le site web que vous lui indiquez. Si votre nouvelle marque est en ligne sur votre site, c'est d'elle qu'hérite chaque présentation reconstruite. Vous pouvez vérifier le logo et les couleurs détectés avant toute génération."
      },
      {
        "q": "Le contenu des diapositives va-t-il changer pendant le rebranding ?",
        "a": "Par défaut, le fil et le contenu de chaque diapositive sont conservés et seule la couche visuelle est refaite. C'est un changement d'image, pas une réécriture."
      },
      {
        "q": "Combien coûte le rebranding d'une bibliothèque ?",
        "a": "Une présentation jusqu'à 10 diapositives utilise 100 crédits. L'offre gratuite couvre une présentation par mois ; pour une vraie bibliothèque, Pro ($29 par mois) couvre environ 12 présentations par mois et Business ($79 par mois) environ 33, soit à peu près une par jour."
      }
    ],
    "ctaHeadline": "Terminez le rebranding, présentations comprises."
  },
  {
    "slug": "investor-deck-redesign",
    "navLabel": "Refonte de deck investisseurs",
    "metaTitle": "Refonte de deck investisseurs, prêt pour la levée | PitchBoost",
    "metaDescription": "Refaites le design de votre deck investisseurs avec l'IA avant le prochain rendez-vous. Gardez votre histoire de traction, récupérez un design pro dans votre charte.",
    "heroHeadline": "Refaites votre deck investisseurs avant le prochain rendez-vous avec les associés",
    "heroSubhead": "Entre la mise en relation et le rendez-vous avec les associés, il y a souvent un week-end. C'est suffisant. Importez votre deck actuel et récupérez-en un qui ressemble à l'entreprise que vous décrivez.",
    "painPoints": [
      {
        "title": "La due diligence commence dès la première diapositive",
        "body": "Les investisseurs jugent la finition bien avant de lire les métriques. Un deck encombré soulève une question (si c'est ça le pitch, à quoi ressemble le produit ?) à laquelle le reste du rendez-vous doit répondre."
      },
      {
        "title": "Votre deck a évolué, pas son design",
        "body": "Six mois de modifications par trois fondateurs laissent un deck avec quatre polices et des diapositives qui racontent chacune leur propre histoire visuelle. Le contenu a mûri. L'emballage s'est dégradé."
      },
      {
        "title": "Le calendrier de la levée n'est pas celui du design",
        "body": "Quand le rendez-vous est jeudi, une mission de deux semaines avec une agence est exclue. La refonte doit se faire ce soir, sinon elle ne se fera pas."
      }
    ],
    "outcomes": [
      "Un design prêt pour la levée, votre histoire de traction intacte",
      "Un système cohérent sur chaque diapositive : équipe, marché, métriques, montant recherché",
      "Un lien suivi qui montre quelles diapositives les investisseurs lisent vraiment",
      "Prêt ce soir, pas dans deux semaines"
    ],
    "faqs": [
      {
        "q": "Comprend-il la structure d'un deck investisseurs ?",
        "a": "Oui : problème, solution, marché, traction, équipe, montant recherché. Il conserve votre ordre par défaut et, si votre deck est trop long, propose de le condenser vers la longueur que les investisseurs lisent jusqu'au bout."
      },
      {
        "q": "Puis-je voir quels investisseurs ont ouvert le deck ?",
        "a": "Chaque présentation est publiée sous forme de lien suivi : ouvertures, temps passé par diapositive et moment de la consultation. Pratique pour bien caler la relance après qu'un associé l'a transféré."
      },
      {
        "q": "Mon deck reste-t-il confidentiel ?",
        "a": "Votre deck reste privé dans votre compte jusqu'à ce que vous partagiez le lien, et les liens peuvent être révoqués ou protégés par mot de passe. Nous n'entraînons pas de modèles sur votre contenu."
      },
      {
        "q": "Et si je veux de petites modifications après la refonte ?",
        "a": "L'éditeur s'en charge : modifiez le texte directement ou dites à l'IA quoi ajuster, diapositive par diapositive. Vous validez tout avant l'envoi."
      }
    ],
    "ctaHeadline": "Le rendez-vous de jeudi mérite mieux que le deck de mardi."
  },
  {
    "slug": "sales-deck-refresh",
    "navLabel": "Rafraîchir une présentation commerciale",
    "metaTitle": "Moderniser votre présentation commerciale avec l'IA | PitchBoost",
    "metaDescription": "Votre présentation commerciale a trois ans et ça se voit. Importez-la et obtenez une refonte moderne dans votre charte en minutes, contenu intact, partage suivi.",
    "heroHeadline": "Le rafraîchissement de la présentation commerciale qui n'attend pas le marketing",
    "heroSubhead": "Chaque équipe a cette présentation : elle a signé de vrais contrats, personne ne l'a mise à jour, et elle vieillit à vue d'œil. Importez-la et récupérez une version moderne dans votre charte actuelle, même pitch, design de cette décennie.",
    "painPoints": [
      {
        "title": "La présentation marche, donc personne n'y touche",
        "body": "Elle a signé des contrats en 2023, et c'est exactement pour cela qu'elle circule encore en 2026 avec les captures d'écran et le design de 2023. Le succès l'a rendue intouchable ; le temps l'a rendue gênante."
      },
      {
        "title": "Les commerciaux la refont discrètement eux-mêmes",
        "body": "Quand la présentation officielle vieillit, chaque commercial crée sa propre version. Il y a maintenant neuf présentations, aucune dans la charte, et le meilleur pitch dort sur le bureau de quelqu'un."
      },
      {
        "title": "Le rafraîchissement, c'est toujours pour le trimestre de quelqu'un d'autre",
        "body": "Le marketing reconnaît qu'il faut le faire et le planifie pour plus tard. Les commerciaux en ont besoin pour l'appel de vendredi."
      }
    ],
    "outcomes": [
      "Le pitch qui a fait ses preuves, redessiné dans votre charte actuelle",
      "De nouveau une seule présentation de référence, partagée par un lien suivi que les commerciaux ne peuvent pas dupliquer",
      "Captures d'écran et images remplaçables dans l'éditeur après la reconstruction",
      "Quelques minutes par présentation, pour que toute la bibliothèque commerciale suive"
    ],
    "faqs": [
      {
        "q": "Peut-on rafraîchir toute la bibliothèque commerciale, pas seulement une présentation ?",
        "a": "Oui, la reconstruction en masse accepte jusqu'à 12 PowerPoint par lancement. Les équipes commencent en général par la présentation principale, la valident, puis font passer le reste de la bibliothèque."
      },
      {
        "q": "En quoi les liens suivis aident-ils une équipe commerciale ?",
        "a": "Au lieu de joindre un fichier qui disparaît dans une boîte de réception, les commerciaux partagent un lien. Vous voyez les ouvertures, le temps par diapositive et les transferts : un signal pour savoir qui est vraiment intéressé et quand relancer."
      },
      {
        "q": "Nos captures d'écran produit sont dépassées aussi. Il les corrige ?",
        "a": "Il conserve vos images par défaut et signale leur emplacement. Remplacer chaque capture par une version à jour prend une minute dans l'éditeur après la refonte."
      },
      {
        "q": "Combien ça coûte par rapport à un projet de refonte graphique ?",
        "a": "Une présentation par mois avec l'offre gratuite (jusqu'à 10 diapositives ; un paiement unique de $9 termine une présentation plus longue), puis des offres à partir de $7 par mois. Les projets de design internes pour le même travail se chiffrent généralement en semaines et en milliers."
      }
    ],
    "ctaHeadline": "L'appel de vendredi ne devrait pas tourner sur la présentation de 2023."
  },
  {
    "slug": "presentation-redesign-service",
    "navLabel": "Service de refonte de présentations",
    "metaTitle": "Refonte de présentation : alternative IA aux agences | PitchBoost",
    "metaDescription": "Vous comparez des services de refonte de présentations ? L'IA face aux agences en délai, coût et contrôle : minutes et dollars contre semaines et milliers.",
    "heroHeadline": "Le service de refonte de présentations qui est un logiciel, pas un studio",
    "heroSubhead": "Les agences refont les présentations magnifiquement, en deux semaines, pour quatre chiffres, avec trois allers-retours. PitchBoost fait le même travail en quelques minutes pour le prix d'un déjeuner, et vous gardez la main.",
    "painPoints": [
      {
        "title": "Les délais des agences ne collent pas aux échéances",
        "body": "Appel de découverte, brief créatif, premières pistes en une semaine. Pendant ce temps, la réunion qui avait besoin de la présentation a déjà eu lieu. Les échéances se comptent en jours ; les processus d'agence, non."
      },
      {
        "title": "Le devis grimpe avec le nombre de diapositives",
        "body": "Avec une tarification à la diapositive, la présentation de 40 diapositives que vous utilisez vraiment coûte $3,000-8,000 à refaire. Et la prochaine révision ouvre une nouvelle facture."
      },
      {
        "title": "Vous perdez la main",
        "body": "Dès qu'une agence détient le fichier source, chaque retouche passe par sa file d'attente. Un changement de prix sur la diapositive 12 ne devrait pas demander un fil d'e-mails et trois jours ouvrés."
      }
    ],
    "outcomes": [
      "Quelques minutes de délai au lieu d'une mission de deux semaines",
      "Un coût fixe et minime par présentation, révisions comprises dans l'éditeur",
      "Vous gardez le contrôle total de l'édition, plus l'export PPTX du résultat",
      "Une charte cohérente appliquée à partir de votre propre site web"
    ],
    "faqs": [
      {
        "q": "Comment la refonte par IA se compare-t-elle à une agence de design ?",
        "a": "Les agences apportent une direction artistique humaine et valent le coup pour la présentation de l'année. Pour les cinquante autres, la refonte par IA applique les mêmes principes structurels (hiérarchie, espacement, cohérence de marque) en quelques minutes, et vous gardez le contrôle de l'édition."
      },
      {
        "q": "Combien ça coûte par rapport à une agence ?",
        "a": "Les agences annoncent généralement $2,000-8,000 par présentation, avec des frais par révision. L'offre gratuite de PitchBoost couvre une présentation par mois jusqu'à 10 diapositives ; les offres payantes commencent à $7 par mois, et les révisions se font dans l'éditeur intégré."
      },
      {
        "q": "Puis-je récupérer le fichier source ?",
        "a": "Oui, exportez à tout moment en PowerPoint modifiable ou en PDF ; la présentation existe aussi sous forme de lien de partage suivi."
      },
      {
        "q": "Et si les choix de design de l'IA doivent être ajustés ?",
        "a": "Vous vérifiez la charte détectée (logo, couleurs) avant la génération, et ensuite l'éditeur vous permet de tout modifier, vous-même, immédiatement, sans file de demandes de modification."
      }
    ],
    "ctaHeadline": "Gardez l'agence pour la présentation de l'année. Utilisez PitchBoost pour les cinquante autres."
  },
  {
    "slug": "fix-ugly-powerpoint",
    "navLabel": "Corriger un PowerPoint moche",
    "metaTitle": "Corriger un PowerPoint moche grâce à l'IA | PitchBoost",
    "metaDescription": "Importez la présentation qui vous fait honte et récupérez-la propre : typographie cohérente, mises en page alignées, vos couleurs, même contenu. Gratuit, en minutes.",
    "heroHeadline": "Des diapositives moches en entrée, des diapositives propres en sortie. Mêmes mots.",
    "heroSubhead": "Des polices dépareillées, six couleurs, du clip art, un mur de puces sur la diapositive 4. PitchBoost lit votre .pptx, garde chaque point que vous avez fait et reconstruit la présentation avec un seul système typographique, une seule palette (la vôtre) et des mises en page qui respirent.",
    "painPoints": [
      {
        "title": "Elle s'est construite sur trois ans et quatre auteurs",
        "body": "Personne n'a conçu cette présentation. Elle s'est accumulée. Chaque contributeur a apporté sa police, sa nuance de bleu et sa façon de faire des puces, et l'ensemble paraît bâclé alors que la réflexion est solide."
      },
      {
        "title": "La corriger à la main, c'est toucher chaque diapositive",
        "body": "Les masques aident jusqu'à ce que quelqu'un les contourne. Nettoyer quarante diapositives une zone de texte à la fois, c'est une soirée que vous repoussez sans cesse, alors la présentation repart moche."
      },
      {
        "title": "Un modèle effacerait ce qui la rend vôtre",
        "body": "Coller dans un modèle fait disparaître votre marque et vous laisse quand même les décisions de mise en page. Il vous faut le contenu conservé et le design décidé, pas l'inverse."
      }
    ],
    "outcomes": [
      "Un seul système typographique et une seule palette, repris de votre site web",
      "Chaque diapositive réalignée et réespacée ; le texte n'est jamais réécrit sans votre accord",
      "Vos chiffres conservés exactement, données des graphiques comprises",
      "Un PowerPoint modifiable en quelques minutes, plus un PDF et un lien de partage"
    ],
    "faqs": [
      {
        "q": "Va-t-il raccourcir ou réécrire mes diapositives ?",
        "a": "Non. La reconstruction par défaut conserve le fil et le contenu clé de chaque diapositive, et modifie la mise en page, la typographie et les visuels. Si votre présentation est très longue, il vous demandera si vous voulez une version condensée, et c'est un choix que vous faites, pas un réglage par défaut."
      },
      {
        "q": "Ma présentation contient des graphiques. Les chiffres sont-ils conservés ?",
        "a": "Oui. PitchBoost lit les séries, catégories et valeurs des graphiques dans le .pptx et les reporte dans les diapositives reconstruites. Les chiffres présents dans votre présentation sont traités comme vos faits ; tout ce que l'IA ne peut pas relier à votre présentation ou à votre site web est signalé ou supprimé avant que vous le voyiez."
      },
      {
        "q": "Et si je veux seulement corriger quelques diapositives ?",
        "a": "Reconstruisez la présentation une fois, puis utilisez les modifications de diapositive pour ajuster chaque diapositive. Les demandes simples, comme changer un pied de page ou un nom d'entreprise dans toute la présentation, sont appliquées instantanément et ne consomment pas de crédit."
      },
      {
        "q": "Combien ça coûte ?",
        "a": "L'offre gratuite inclut une génération de présentation par IA par mois, donc le nettoyage ne coûte rien à essayer. Starter coûte $7 par mois sans badge et Pro $29 par mois si vous avez toute une bibliothèque à corriger."
      }
    ],
    "ctaHeadline": "Importez la présentation que vous cachez. Récupérez celle que vous montreriez."
  },
  {
    "slug": "google-slides-and-keynote-redesign",
    "navLabel": "Google Slides et Keynote",
    "metaTitle": "Refonte Google Slides ou Keynote par IA | PitchBoost",
    "metaDescription": "Exportez votre présentation Google Slides ou Keynote en .pptx, importez-la et obtenez en quelques minutes une version redessinée dans votre charte. Essai gratuit.",
    "heroHeadline": "Pas seulement PowerPoint : Google Slides et Keynote aussi, redessinés",
    "heroSubhead": "Les deux outils exportent en .pptx en un clic. Importez ce fichier : PitchBoost garde votre histoire, apprend votre charte à partir de votre site web et reconstruit chaque diapositive, puis vous rend un PowerPoint modifiable, un PDF ou un lien.",
    "painPoints": [
      {
        "title": "Votre équipe vit dans Slides, votre client dans PowerPoint",
        "body": "La présentation doit voyager. Chaque export perd un peu de mise en forme, et la version que voit le client n'est jamais tout à fait celle que vous avez validée."
      },
      {
        "title": "Les thèmes Keynote sont superbes jusqu'à ce qu'ils croisent un PC Windows",
        "body": "Les polices sont remplacées, les espacements bougent, et la finition pour laquelle vous avez payé disparaît en salle de réunion. Une reconstruction pensée pour PowerPoint dès le départ évite le problème."
      },
      {
        "title": "Refaire le design dans l'outil, c'est toujours le refaire à la main",
        "body": "Slides et Keynote ont de bons modèles et la même limite : ils ne connaissent ni votre contenu ni votre marque, donc chaque décision de mise en page vous revient, diapositive par diapositive."
      }
    ],
    "outcomes": [
      "Fonctionne à partir de l'export .pptx que les deux outils produisent en une étape",
      "Votre marque, pas un thème : logo, couleurs et ton repris de votre site web",
      "Le contenu conservé diapositive par diapositive, chiffres et graphiques compris",
      "PowerPoint modifiable, PDF et lien suivi en quelques minutes"
    ],
    "faqs": [
      {
        "q": "Comment exporter depuis Google Slides ?",
        "a": "Fichier, Télécharger, Microsoft PowerPoint (.pptx). Importez ce fichier dans PitchBoost. Les notes du présentateur et les images suivent."
      },
      {
        "q": "Comment exporter depuis Keynote ?",
        "a": "Fichier, Exporter vers, PowerPoint. Keynote produit un .pptx que PitchBoost lit directement, y compris le texte de chaque diapositive et les images que vous avez placées."
      },
      {
        "q": "Puis-je récupérer le résultat dans Google Slides ou Keynote ?",
        "a": "Vous obtenez un fichier PowerPoint modifiable. Google Slides et Keynote ouvrent tous deux les fichiers .pptx et les convertissent, vous pouvez donc continuer dans l'outil de votre choix."
      },
      {
        "q": "L'essai coûte-t-il quelque chose ?",
        "a": "L'offre gratuite inclut une génération de présentation par IA par mois, et une refonte compte comme telle. Starter coûte $7 par mois sans badge et Pro $29 par mois."
      }
    ],
    "ctaHeadline": "Exportez une fois. Importez une fois. Présentez partout."
  },
  {
    "slug": "training-deck-redesign",
    "navLabel": "Supports de formation et de cours",
    "metaTitle": "Refonte de supports de formation ou de cours par IA | PitchBoost",
    "metaDescription": "Importez un support de formation, d'atelier ou de cours et récupérez-le cohérent, lisible et dans votre charte, leçons et chiffres intacts. Essai gratuit.",
    "heroHeadline": "Des supports de formation aussi soignés que l'enseignement",
    "heroSubhead": "Un programme de douze semaines, un atelier d'intégration, un module de certification : PitchBoost garde l'ordre, les exercices et les chiffres, et reconstruit les diapositives pour qu'on les lise au lieu de plisser les yeux.",
    "painPoints": [
      {
        "title": "Denses par nature, illisibles par accident",
        "body": "Les diapositives de formation portent plus de texte qu'un pitch commercial. Sans système de mise en page prévu pour cela, elles deviennent des paragraphes à l'écran, et la salle arrête de lire."
      },
      {
        "title": "Des modules créés à des mois d'écart ne se ressemblent jamais",
        "body": "La semaine 1 a été faite dans l'urgence, la semaine 7 par quelqu'un d'autre. Les apprenants remarquent les coutures avant le contenu."
      },
      {
        "title": "Vous ne pouvez pas perdre un seul chiffre",
        "body": "Durée des sessions, taille des groupes, notes de passage, prix. Une refonte qui invente ou supprime des chiffres est pire que pas de refonte du tout. Les faits doivent rester exactement tels qu'ils sont écrits."
      }
    ],
    "outcomes": [
      "Le même enchaînement de leçons, d'exercices et de points clés",
      "Durées, tailles de groupe et prix conservés exactement comme dans votre présentation",
      "Un design cohérent sur tous les modules que vous importez",
      "Un PowerPoint modifiable pour le formateur, des PDF à distribuer dans la salle"
    ],
    "faqs": [
      {
        "q": "Va-t-il changer l'ordre de mes leçons ?",
        "a": "Pas sans votre demande. La reconstruction par défaut conserve l'intention et le contenu de chaque diapositive, et ne fusionne ou ne réordonne des diapositives que lorsque cela améliore nettement le déroulé, sans perte d'information."
      },
      {
        "q": "Comment gère-t-il des chiffres comme la durée d'une session ou la taille d'un groupe ?",
        "a": "Les chiffres présents dans la présentation importée sont traités comme vos faits et conservés. Tout chiffre ajouté par l'IA qui ne remonte pas à votre présentation ou à votre site web est signalé ou supprimé avant que vous voyiez le résultat."
      },
      {
        "q": "J'ai huit modules. Dois-je les importer un par un ?",
        "a": "C'est possible, ou utilisez la reconstruction en masse pour faire passer toute une bibliothèque dans la même charte et le même système de design, afin que les modules se ressemblent enfin."
      },
      {
        "q": "Combien ça coûte pour un cours ?",
        "a": "Une génération de présentation par IA par mois est gratuite. Starter à $7 par mois couvre des modules ponctuels sans badge ; Pro à $29 par mois convient à la refonte d'un cursus complet."
      }
    ],
    "ctaHeadline": "Gardez le programme. Corrigez les diapositives."
  },
  {
    "slug": "proposal-deck-redesign",
    "navLabel": "Propositions et réponses aux appels d'offres",
    "metaTitle": "Propositions et appels d'offres : refonte par IA | PitchBoost",
    "metaDescription": "Importez votre proposition ou réponse à un appel d'offres et récupérez-la mise en page dans votre charte, périmètre, prix et engagements intacts. Essai gratuit.",
    "heroHeadline": "Des propositions aussi soignées que l'offre",
    "heroSubhead": "Périmètre, niveaux de service, grilles tarifaires, plans de transition. PitchBoost conserve chaque engagement mot pour mot et reconstruit la présentation pour que le comité d'évaluation lise une entreprise qui maîtrise son sujet.",
    "painPoints": [
      {
        "title": "L'échéance ne laisse aucun temps au design",
        "body": "Le contenu est terminé à 23 h la veille. Les diapositives en témoignent. Une reconstruction de quelques minutes tient dans ce créneau, ce qu'un designer ne pourrait jamais faire."
      },
      {
        "title": "Le prix et le périmètre ne peuvent pas bouger d'un caractère",
        "body": "Une refonte qui paraphrase un niveau de service ou arrondit un prix est un risque. Vos chiffres et votre formulation doivent passer intacts."
      },
      {
        "title": "Le comité voit six présentations à la suite",
        "body": "Les autres sont des modèles et des murs de puces. Une présentation à la hiérarchie visuelle claire est celle dont il se souvient au moment de noter."
      }
    ],
    "outcomes": [
      "Périmètre, prix et niveaux de service conservés exactement comme écrits",
      "Votre marque, issue de votre site web, pas le modèle d'agence que tout le monde utilise",
      "Modifications de texte globales instantanées, comme un nom de client ou un pied de page, sans dépenser de crédit",
      "Un PowerPoint modifiable plus un PDF pour le dépôt sur le portail"
    ],
    "faqs": [
      {
        "q": "Va-t-il toucher à mes prix ou à mes engagements ?",
        "a": "Non. Les chiffres et la formulation issus de votre présentation importée sont traités comme vos faits et reportés à l'identique. Tout ce que l'IA ne peut pas relier à votre présentation est signalé ou supprimé, donc rien d'inventé ne peut parvenir à un client."
      },
      {
        "q": "Puis-je réutiliser la présentation pour le prochain appel d'offres ?",
        "a": "Oui. Après la reconstruction, modifiez des diapositives une à une ou faites des changements de texte sur toute la présentation. Une demande comme remplacer partout le nom du client est appliquée instantanément, sans frais."
      },
      {
        "q": "Mon document est-il confidentiel ?",
        "a": "Votre présentation est traitée pour produire votre reconstruction et n'est jamais utilisée pour entraîner des modèles. Les brouillons restent privés dans votre compte jusqu'à ce que vous les publiiez ou les téléchargiez."
      },
      {
        "q": "Combien ça coûte ?",
        "a": "Une génération de présentation par IA par mois est gratuite, donc la première proposition ne coûte rien. Starter coûte $7 par mois sans badge et Pro $29 par mois pour les équipes qui répondent à des appels d'offres chaque semaine."
      }
    ],
    "ctaHeadline": "L'offre est solide. Que la présentation le montre."
  },
  {
    "slug": "data-heavy-deck-redesign",
    "navLabel": "Présentations de données et d'enquêtes",
    "metaTitle": "Données et résultats d'enquête : refonte par IA | PitchBoost",
    "metaDescription": "Importez une présentation de résultats d'enquête, de tableau de bord ou de métriques et récupérez-la claire, valeurs des graphiques et pourcentages conservés.",
    "heroHeadline": "Résultats d'enquête et présentations de métriques, redessinés sans perdre un chiffre",
    "heroSubhead": "Des graphiques, des tableaux et quarante diapositives de pourcentages. PitchBoost lit les données des graphiques dans votre .pptx, conserve chaque chiffre à l'identique et reconstruit les diapositives pour que les conclusions sautent aux yeux.",
    "painPoints": [
      {
        "title": "Les données sont justes et personne ne peut les lire",
        "body": "Couleurs de graphique par défaut, étiquettes en corps 12, trois graphiques par diapositive. L'enseignement est là, quelque part derrière la mise en forme."
      },
      {
        "title": "Les outils de refonte ont tendance à inventer quand ils ne savent pas lire",
        "body": "La plupart des outils d'IA voient un graphique comme une image et comblent les trous avec des chiffres plausibles. Pour une présentation de résultats, c'est rédhibitoire."
      },
      {
        "title": "La cohérence sur quarante diapositives, c'est tout le travail",
        "body": "Une palette, une échelle, une façon d'étiqueter. À la main, cela prend une journée ; par hasard, cela n'arrive jamais."
      }
    ],
    "outcomes": [
      "Séries, catégories et valeurs des graphiques lues dans le fichier et conservées",
      "Tout chiffre que l'IA ne peut pas relier à votre présentation est supprimé avant que vous le voyiez",
      "Un seul système visuel pour tous les graphiques et tableaux",
      "PowerPoint modifiable et PDF pour la restitution"
    ],
    "faqs": [
      {
        "q": "Comment lit-il mes graphiques ?",
        "a": "PowerPoint stocke les données des graphiques dans le .pptx. PitchBoost extrait chaque série avec ses catégories et ses valeurs, en respectant les formats en pourcentage, et les reporte dans les diapositives reconstruites comme vos faits."
      },
      {
        "q": "Que devient un chiffre qu'il ne peut pas vérifier ?",
        "a": "Chaque chiffre de la présentation reconstruite est vérifié par rapport à votre présentation importée et à votre site web. Tout ce qui ne peut pas être retracé est supprimé automatiquement et listé pour vous, donc un pourcentage inventé n'atteint jamais votre public."
      },
      {
        "q": "Peut-il transformer un tableau en graphique, ou un graphique en chiffre clé ?",
        "a": "La reconstruction se concentre sur la mise en page et la lisibilité, et garde vos données sous forme de données. Ensuite, les modifications de diapositive peuvent transformer un chiffre important en statistique mise en avant si vous le demandez."
      },
      {
        "q": "Combien ça coûte ?",
        "a": "Une génération de présentation par IA par mois est gratuite. Starter coûte $7 par mois sans badge et Pro $29 par mois pour les cycles de reporting mensuels."
      }
    ],
    "ctaHeadline": "Chaque chiffre conservé. Chaque diapositive lisible."
  },
  {
    "slug": "board-deck-redesign",
    "navLabel": "Présentation pour le conseil",
    "metaTitle": "Refonte de présentation de conseil d'administration | PitchBoost",
    "metaDescription": "Importez votre présentation de conseil et récupérez-la prête pour les administrateurs : mêmes chiffres, même récit, mise en page claire, votre charte. En minutes.",
    "heroHeadline": "Le conseil, c'est jeudi. La présentation peut être à la hauteur.",
    "heroSubhead": "Importez la présentation que vous avez. PitchBoost conserve chaque chiffre et chaque demande de décision, refait le design des diapositives dans votre charte et vous rend un PowerPoint qu'un administrateur peut lire sur son téléphone dans un aéroport.",
    "painPoints": [
      {
        "title": "Les chiffres sont définitifs, pas les diapositives",
        "body": "La finance a validé mardi soir. Maintenant, le point d'étape fait douze diapositives de tableaux collés en trois polices, et la seule personne capable de corriger cela a déjà un autre travail."
      },
      {
        "title": "Une présentation de conseil se juge sur sa lisibilité",
        "body": "Les administrateurs lisent sur leur téléphone entre deux vols. Les diapositives denses avec des tableaux en corps 9 sont survolées, et la demande de la diapositive 11 passe inaperçue. Ici, la mise en page n'est pas de la décoration ; c'est elle qui décide si la décision est prise."
      },
      {
        "title": "Chaque trimestre repart du désordre du précédent",
        "body": "La présentation est un millefeuille de quatre réunions précédentes : anciennes couleurs, sections mortes, un logo d'avant le rebranding. Personne n'a le temps de tout remettre à plat, alors personne ne le fait."
      }
    ],
    "outcomes": [
      "Chaque chiffre repris à l'identique ; la vérification signale tout ce qu'elle ne peut pas relier à vos diapositives",
      "Une demande claire par diapositive, mise en page pour faire mouche",
      "Votre charte actuelle, reprise de votre site web, sur chaque diapositive",
      "PDF et PowerPoint en quelques minutes, prêts pour le dossier du conseil"
    ],
    "faqs": [
      {
        "q": "Va-t-il modifier mes chiffres ?",
        "a": "Non. Une reconstruction garde chaque chiffre de votre fichier importé et n'en ajoute aucun. Tout ce que le vérificateur ne peut pas relier à vos diapositives ou à votre site web est signalé et supprimé avant que vous voyiez la présentation."
      },
      {
        "q": "Les documents restent-ils privés ?",
        "a": "Oui. Les présentations sont privées par défaut et partagées uniquement via les liens que vous créez, avec mot de passe et date d'expiration en option."
      },
      {
        "q": "Combien de temps prend la reconstruction d'une présentation de conseil ?",
        "a": "Deux à quatre minutes pour un point d'étape classique de 15 diapositives, contrôle qualité automatique compris."
      },
      {
        "q": "Combien ça coûte ?",
        "a": "L'offre gratuite inclut une présentation IA par mois, jusqu'à 10 diapositives, avec un petit badge PitchBoost. Starter coûte $7 par mois pour des présentations jusqu'à 25 diapositives sans badge ; Pro coûte $29 par mois."
      }
    ],
    "ctaHeadline": "Envoyez au conseil une présentation qui respire l'assurance.",
    "updated": "2026-09-12"
  },
  {
    "slug": "conference-talk-slides-redesign",
    "navLabel": "Diapositives de conférence",
    "metaTitle": "Diapositives de conférence prêtes pour la scène | PitchBoost",
    "metaDescription": "Importez votre intervention et récupérez des diapositives faites pour la scène : une idée par diapositive, gros caractères, votre charte. Le contenu reste le vôtre.",
    "heroHeadline": "Votre intervention est bonne. Vos diapositives sont un mur de texte.",
    "heroSubhead": "PitchBoost reconstruit une présentation de conférence pour le dernier rang : une idée par diapositive, un texte lisible à trente mètres, votre charte du début à la fin, et chaque point que vous avez écrit conservé.",
    "painPoints": [
      {
        "title": "Écrites pour être lues, projetées pour être vues",
        "body": "La plupart des présentations de conférence commencent comme des notes. Des paragraphes à l'écran passent au bureau et meurent sur un projecteur. Le public lit au lieu d'écouter, et vous finissez en concurrence avec vos propres diapositives."
      },
      {
        "title": "Le modèle de l'événement combat votre marque",
        "body": "Les organisateurs envoient un modèle à leurs couleurs. Votre logo atterrit dans un coin à 40 pixels et l'intervention ressemble à toutes les autres sessions du programme."
      },
      {
        "title": "L'échéance, c'est le dépôt des supports",
        "body": "Les diapositives sont dues une semaine avant l'intervention, au moment où le contenu bouge encore. Le design est la première chose sacrifiée."
      }
    ],
    "outcomes": [
      "Des diapositives faites pour une salle, pas pour un document : moins de mots, plus gros caractères, un point chacune",
      "Votre charte sur chaque diapositive, issue de votre propre site web",
      "Le texte complet est conservé dans le PowerPoint modifiable, prêt pour les notes du présentateur",
      "Prêt en quelques minutes, avec un lien de partage pour le suivi après l'intervention"
    ],
    "faqs": [
      {
        "q": "Va-t-il couper mon contenu ?",
        "a": "Une reconstruction garde une diapositive par diapositive source, contenu conservé. Si vous voulez une présentation plus serrée, choisissez l'option de condensation : elle resserre le récit en gardant les points clés."
      },
      {
        "q": "Puis-je utiliser le format d'écran de l'événement ?",
        "a": "Les présentations sont construites en 16:9, le format de presque tous les écrans de conférence. Exportez en PowerPoint et ajustez en quelques secondes si un lieu demande du 4:3."
      },
      {
        "q": "Est-ce que j'obtiens un fichier modifiable ?",
        "a": "Oui. Téléchargez un PowerPoint modifiable avec de vraies zones de texte pour les changements de dernière minute, ou la version au rendu identique pour le dépôt des supports."
      },
      {
        "q": "Combien ça coûte ?",
        "a": "Une présentation IA par mois est gratuite, jusqu'à 10 diapositives, avec un petit badge. Starter coûte $7 par mois pour jusqu'à 25 diapositives sans badge ; Pro coûte $29 par mois."
      }
    ],
    "ctaHeadline": "Donnez au dernier rang une raison de lever les yeux.",
    "updated": "2026-09-12"
  },
  {
    "slug": "qbr-deck-redesign",
    "navLabel": "Refonte de présentation QBR",
    "metaTitle": "Refonte de QBR : revue trimestrielle d'activité | PitchBoost",
    "metaDescription": "Transformez la présentation QBR du dernier trimestre en une revue claire, dans votre charte, que votre client lira vraiment. Mêmes métriques, meilleure mise en page.",
    "heroHeadline": "Le trimestre est terminé. La présentation n'a pas à en porter les cicatrices.",
    "heroSubhead": "Importez votre présentation QBR, dans l'état où elle est. PitchBoost conserve chaque métrique et chaque prochaine étape, refait la mise en page dans votre charte et vous donne une présentation qui se lit comme un plan de compte, pas comme un vidage de statuts.",
    "painPoints": [
      {
        "title": "Même modèle, douzième trimestre",
        "body": "Les présentations QBR sont recopiées d'un trimestre à l'autre jusqu'à ce que plus personne ne sache pourquoi la diapositive 7 existe. Des sections périmées et les couleurs de l'an dernier disent au client exactement combien d'attention il reçoit."
      },
      {
        "title": "Les métriques sont enterrées",
        "body": "Adoption, risque de non-renouvellement, demande d'extension : tout est dans la présentation, rien n'est visible. Votre allié côté client ne peut pas transférer une diapositive que son responsable comprendra en dix secondes."
      },
      {
        "title": "Les account managers ne sont pas des designers",
        "body": "La personne qui connaît le compte est celle qui monte les diapositives à 23 h. Le design est la dernière chose à laquelle elle devrait consacrer cette heure."
      }
    ],
    "outcomes": [
      "Les métriques mises en avant dans des mises en page chiffrées que le client parcourt d'un coup d'œil",
      "Les demandes de renouvellement et d'extension sur des diapositives dédiées et claires",
      "Votre charte appliquée de façon cohérente, depuis votre site web, chaque trimestre",
      "Un lien suivi pour savoir quand le client l'a ouverte avant l'appel"
    ],
    "faqs": [
      {
        "q": "Conserve-t-il nos chiffres d'utilisation à l'identique ?",
        "a": "Oui. Chaque chiffre provient de votre fichier importé ; la vérification supprime tout ce qu'elle ne peut pas relier à vos diapositives ou à votre site web, donc rien n'est inventé pour une réunion client."
      },
      {
        "q": "Puis-je la réutiliser chaque trimestre ?",
        "a": "Oui. Gardez la présentation dans PitchBoost, mettez à jour les chiffres au trimestre suivant avec les modifications IA ou à la main, puis exportez de nouveau. Starter et Pro incluent des crédits mensuels exactement pour cela."
      },
      {
        "q": "Mon client peut-il voir qui l'a consultée ?",
        "a": "Non. Les statistiques de consultation sont pour vous : vous voyez les ouvertures et le temps par diapositive. Le client voit une présentation propre."
      },
      {
        "q": "Combien ça coûte ?",
        "a": "Une présentation IA par mois est gratuite, jusqu'à 10 diapositives, avec un petit badge. Starter coûte $7 par mois pour jusqu'à 25 diapositives sans badge ; Pro coûte $29 par mois pour jusqu'à 60 diapositives et des domaines personnalisés."
      }
    ],
    "ctaHeadline": "Montrez, par la revue, que la relation compte.",
    "updated": "2026-09-12"
  },
  {
    "slug": "capabilities-deck-redesign",
    "navLabel": "Présentation de références d'agence",
    "metaTitle": "Refonte de présentation d'agence et de références | PitchBoost",
    "metaDescription": "Refaites la présentation de références de votre agence ou cabinet : mêmes études de cas et services, mise en page pro dans votre charte, prête pour votre pitch.",
    "heroHeadline": "Une présentation de références qui justifie vos tarifs.",
    "heroSubhead": "Importez la présentation de références que vous envoyez à chaque prospect. PitchBoost garde vos services, vos études de cas et vos logos clients, refait le design dans votre charte et vous donne une version à laquelle vous pourriez joindre votre grille tarifaire.",
    "painPoints": [
      {
        "title": "La présentation vend du design et a l'air de dater de 2019",
        "body": "Agences et studios envoient des présentations de références qui desservent leur propre travail. Le prospect le remarque avant même les études de cas."
      },
      {
        "title": "Modifiée par tout le monde, gérée par personne",
        "body": "Chaque nouveau responsable du développement commercial ajoute une diapositive. Au bout d'un an, la présentation fait 40 diapositives, trois polices et deux logos. La réduire est un projet que personne ne revendique."
      },
      {
        "title": "Les études de cas sont le produit, et elles sont enterrées",
        "body": "Les résultats se cachent dans les petites lignes d'une liste à puces. Les chiffres qui font gagner le pitch devraient être ce qu'il y a de plus gros sur la diapositive."
      }
    ],
    "outcomes": [
      "Les résultats des études de cas mis en avant en chiffres clés, exactement comme vous les avez écrits",
      "Logos clients et services mis en page comme le ferait un designer",
      "Votre charte issue de votre site web, appliquée à chaque diapositive",
      "Un lien qui vous dit quand le prospect a ouvert la présentation"
    ],
    "faqs": [
      {
        "q": "Va-t-il garder nos logos clients ?",
        "a": "Oui. Les images du fichier importé sont reprises ; vous choisissez lesquelles garder avant la reconstruction, et les logos sont placés, pas étirés."
      },
      {
        "q": "Peut-il raccourcir une présentation de 40 diapositives ?",
        "a": "Oui. Choisissez la condensation : elle resserre le récit en une présentation courte tout en gardant les études de cas que vous avez marquées. Ou reconstruisez à l'identique et coupez ensuite."
      },
      {
        "q": "Peut-on faire une version par prospect ?",
        "a": "Oui. Gardez la présentation dans PitchBoost, puis utilisez les modifications IA ou le créateur de présentations pour adapter l'ouverture et l'ordre des études de cas à chaque pitch."
      },
      {
        "q": "Combien ça coûte ?",
        "a": "Une présentation IA par mois est gratuite, jusqu'à 10 diapositives, avec un petit badge. Starter coûte $7 par mois pour des présentations jusqu'à 25 diapositives sans badge ; Pro coûte $29 par mois."
      }
    ],
    "ctaHeadline": "Envoyez des références à la hauteur de vos factures.",
    "updated": "2026-09-12"
  },
  {
    "slug": "pitch-competition-deck-redesign",
    "navLabel": "Deck de concours de pitch",
    "metaTitle": "Deck de concours de pitch et de demo day | PitchBoost",
    "metaDescription": "Refaites le deck de votre accélérateur ou concours de pitch pour un créneau de trois minutes : même histoire, une idée par diapositive, votre charte, en minutes.",
    "heroHeadline": "Trois minutes sur scène. Des diapositives qui suivent le rythme.",
    "heroSubhead": "Importez votre deck de concours. PitchBoost garde le problème, la traction et le montant recherché, reconstruit chaque diapositive pour un grand écran et un chrono serré, et applique votre charte à partir de votre site web.",
    "painPoints": [
      {
        "title": "Conçu pour un lecteur, jugé dans une salle",
        "body": "Le deck qui vous a fait entrer dans le concours a été écrit pour un formulaire de sélection. Sur scène, des diapositives denses obligent le jury à lire pendant que vous parlez, et il rate les deux."
      },
      {
        "title": "La diapositive de traction fait tout le travail, et mal",
        "body": "Le seul chiffre qui compte est dans un tableau avec onze autres. Le jury retient le gros chiffre sur une diapositive épurée, pas le tableur."
      },
      {
        "title": "Le demo day, c'est demain",
        "body": "Les retours des mentors arrivent à 18 h. Refaire le design à la main, c'est une nuit à déplacer des blocs au lieu de répéter."
      }
    ],
    "outcomes": [
      "Une idée par diapositive, dimensionnée pour une scène et un compte à rebours",
      "La traction et le montant recherché sur leurs propres diapositives, exactement comme vous les avez écrits",
      "Votre charte et votre logo sur chaque diapositive, pas le modèle de l'accélérateur",
      "PowerPoint modifiable et PDF en quelques minutes, plus un lien pour le jury ensuite"
    ],
    "faqs": [
      {
        "q": "Va-t-il changer mon histoire ?",
        "a": "Non. Une reconstruction garde l'ordre et le contenu de vos diapositives et refait la mise en page. Utilisez l'option de condensation si les mentors vous ont dit que c'était trop long."
      },
      {
        "q": "Peut-il ajouter des chiffres pour embellir la traction ?",
        "a": "Non, et c'est voulu. Chaque chiffre doit provenir de votre deck ou de votre site web ; tout le reste est supprimé par la vérification avant que vous le voyiez."
      },
      {
        "q": "C'est rapide ?",
        "a": "Deux à quatre minutes pour un deck classique de 10 à 15 diapositives, contrôle qualité compris."
      },
      {
        "q": "Combien ça coûte ?",
        "a": "Une présentation IA par mois est gratuite, jusqu'à 10 diapositives, avec un petit badge. Starter coûte $7 par mois pour jusqu'à 25 diapositives sans badge ; Pro coûte $29 par mois."
      }
    ],
    "ctaHeadline": "Répétez le pitch. Nous nous occupons des diapositives.",
    "updated": "2026-09-12"
  },
  {
    "slug": "consulting-slides-redesign",
    "navLabel": "Diapositives de conseil",
    "metaTitle": "Diapositives de conseil dignes des grands cabinets | PitchBoost",
    "metaDescription": "Donnez à votre présentation de conseil le niveau des cabinets concurrents : titres d'action, un graphique par diapositive, votre charte. Prête en minutes.",
    "heroHeadline": "Des diapositives de cabinet de conseil, sans l'équipe de production d'un cabinet.",
    "heroSubhead": "Importez votre analyse. PitchBoost conserve chaque conclusion et chaque valeur de graphique, reconstruit chaque diapositive avec un titre d'action et un seul message, et applique la charte de votre cabinet à partir de votre site web.",
    "painPoints": [
      {
        "title": "Une analyse brillante, une diapositive 14 illisible",
        "body": "La réflexion est pointue et les diapositives la montrent sous forme de six graphiques et d'un paragraphe. Les clients jugent la rigueur à la clarté de la mise en page, que ce soit juste ou non."
      },
      {
        "title": "Les grands cabinets ont un service de production",
        "body": "Les grands cabinets ont des gens dont le seul métier est de faire des diapositives. Un cabinet indépendant vous a, vous, à minuit, en train d'aligner des zones de texte pour le comité de pilotage de demain."
      },
      {
        "title": "Les modèles ne donnent pas de titres d'action",
        "body": "Un modèle corrige les polices. Il ne transforme pas « Analyse du chiffre d'affaires » en la phrase que le client doit retenir. C'est un travail éditorial, et c'est là que les consultants indépendants perdent du temps."
      }
    ],
    "outcomes": [
      "Des titres d'action qui énoncent la conclusion, construits à partir de votre propre contenu",
      "Un message par diapositive, graphiques et tableaux mis en page pour un comité de pilotage",
      "Les valeurs des graphiques reprises exactement de votre PowerPoint",
      "La charte de votre cabinet sur chaque diapositive, plus un PowerPoint modifiable pour les dernières retouches"
    ],
    "faqs": [
      {
        "q": "Lit-il mes graphiques ?",
        "a": "Oui. Les données des graphiques contenues dans le .pptx sont extraites avec le texte des diapositives, donc les séries et les valeurs passent dans la reconstruction et la vérification sait qu'elles sont les vôtres."
      },
      {
        "q": "Va-t-il réécrire mes conclusions ?",
        "a": "Il garde le contenu et affûte la formulation : les titres deviennent des affirmations, les paragraphes denses deviennent des points structurés. Chaque chiffre reste tel que vous l'avez écrit."
      },
      {
        "q": "Puis-je obtenir un fichier modifiable pour la finition ?",
        "a": "Oui. Le PowerPoint modifiable contient de vraies zones de texte et de vraies polices ; la version au rendu identique correspond à la présentation web, diapositive par diapositive."
      },
      {
        "q": "Combien ça coûte ?",
        "a": "Une présentation IA par mois est gratuite, jusqu'à 10 diapositives, avec un petit badge. Starter coûte $7 par mois pour jusqu'à 25 diapositives sans badge ; Pro coûte $29 par mois pour jusqu'à 60 diapositives et des domaines personnalisés."
      }
    ],
    "ctaHeadline": "Une présentation aussi affûtée que l'analyse.",
    "updated": "2026-09-12"
  },
  {
    "slug": "beautify-powerpoint",
    "navLabel": "Embellir un PowerPoint",
    "metaTitle": "Embellissez votre PowerPoint avec l'IA | PitchBoost",
    "metaDescription": "Embellissez une présentation PowerPoint avec l'IA. Importez le .pptx, gardez le contenu et récupérez des mises en page soignées et vos couleurs en minutes. Gratuit.",
    "heroHeadline": "Embellissez votre PowerPoint sans le refaire vous-même",
    "heroSubhead": "La plupart des outils pour embellir un PowerPoint glissent vos diapositives dans un modèle plus joli et s'arrêtent là. PitchBoost lit ce que chaque diapositive cherche à dire, puis la met en page correctement dans votre propre charte : espacement, hiérarchie, typographie, couleurs et images adaptés au contenu au lieu de le contrarier.",
    "painPoints": [
      {
        "title": "Les outils d'embellissement en un clic donnent tous le même résultat",
        "body": "Passez une présentation dans un outil de changement de modèle et vous obtenez le style du modèle, pas le vôtre. Des formes en dégradé, des icônes de banque d'images, une palette qui n'appartient à personne. C'est plus joli qu'avant et cela ressemble toujours à mille autres présentations."
      },
      {
        "title": "Une diapositive moche est généralement un problème de mise en page, pas de décoration",
        "body": "Huit puces, un graphique collé à une taille aléatoire, un titre sur deux lignes. Aucune ombre portée n'y changera rien. Embellir une diapositive, c'est décider de quoi elle parle et donner à cette seule chose la place dont elle a besoin."
      },
      {
        "title": "Vous n'avez pas un après-midi pour déplacer des zones de texte",
        "body": "Aligner, redimensionner et recolorer à la main, c'est le genre de travail qui dévore une soirée et paraît encore légèrement de travers le lendemain matin. La présentation est attendue ; la finition est ce qu'on saute."
      }
    ],
    "outcomes": [
      "Chaque diapositive remise en page autour de son message : une idée, une vraie hiérarchie, de l'air",
      "Les couleurs, le logo et le ton de votre marque, repris de votre site web, pas d'une galerie de modèles",
      "Les murs de puces transformés en mises en page structurées ; graphiques et tableaux dimensionnés pour être lus",
      "Un lien de partage plus un PDF et un PowerPoint modifiable, en quelques minutes"
    ],
    "faqs": [
      {
        "q": "Embellir modifie-t-il ce que disent mes diapositives ?",
        "a": "Non. Le contenu de chaque diapositive est conservé et sa présentation est reconstruite : mise en page, typographie, couleurs, espacement et visuels. Quand une diapositive est surchargée, le texte est restructuré sous une forme plus claire, mais les affirmations et les chiffres restent les vôtres."
      },
      {
        "q": "En quoi est-ce différent d'un outil d'IA pour embellir un PPT ?",
        "a": "Les outils de changement de modèle restylent vos blocs existants. PitchBoost lit la présentation, comprend le rôle de chaque diapositive et la conçoit de zéro dans votre charte. La différence se voit surtout sur les diapositives denses, les graphiques et tout ce qui n'a jamais tenu dans le modèle."
      },
      {
        "q": "Puis-je importer du Google Slides ou du Keynote ?",
        "a": "Oui, en exportant d'abord en .pptx. Les deux le font en une étape, sans perte. Les fichiers jusqu'à 50 Mo sont acceptés."
      },
      {
        "q": "Combien coûte l'embellissement d'une présentation ?",
        "a": "L'offre gratuite inclut une présentation IA par mois, jusqu'à 10 diapositives, avec un petit badge PitchBoost. Starter coûte $7 par mois pour jusqu'à 25 diapositives sans badge ; Pro coûte $29 par mois pour jusqu'à 60 diapositives et des domaines personnalisés."
      }
    ],
    "ctaHeadline": "Importez la présentation. Récupérez-la belle, et toujours la vôtre.",
    "updated": "2026-09-16"
  },
  {
    "slug": "powerpoint-makeover-before-and-after",
    "gallery": [
      { "before": "/redesign/makeover/before-1.webp", "after": "/redesign/makeover/after-1.webp", "caption": "Diapositive de titre : le même nom d'entreprise et le même slogan, dans la charte reprise du site web au lieu d'un rectangle bleu marine." },
      { "before": "/redesign/makeover/before-3.webp", "after": "/redesign/makeover/after-3.webp", "caption": "Le mur de texte : cinq longues puces deviennent une mise en page, et chaque chiffre qu'elles contenaient (23%, 3.4 jours, 61%, 34%, $4,200, 11 heures) est toujours là." },
      { "before": "/redesign/makeover/before-4.webp", "after": "/redesign/makeover/after-4.webp", "caption": "Tableau de prix : trois offres, les mêmes chiffres, lisibles depuis le fond de la salle." },
      { "before": "/redesign/makeover/before-5.webp", "after": "/redesign/makeover/after-5.webp", "caption": "Diapositive de graphique : les valeurs du graphique sont lues dans le fichier et reconstruites sous forme de tableau comparatif, avec les chiffres clés mis en avant et l'amélioration calculée par client." },
      { "before": "/redesign/makeover/before-6.webp", "after": "/redesign/makeover/after-6.webp", "caption": "Prochaines étapes : une diapositive de clôture avec la demande, le calendrier et un moyen de répondre." }
    ],
    "navLabel": "Relooking PowerPoint : avant et après",
    "metaTitle": "Relooking PowerPoint avant/après par l'IA | PitchBoost",
    "metaDescription": "Ce que change un relooking PowerPoint, diapositive par diapositive : titre, sommaire, murs de puces, graphiques, équipe, conclusion. Testez sur votre fichier.",
    "heroHeadline": "Relooking PowerPoint, avant et après, diapositive par diapositive",
    "heroSubhead": "Le moyen le plus rapide de juger un relooking est de voir la même présentation deux fois. Voici ce qui change sur chaque type de diapositive quand PitchBoost reconstruit une présentation, et comment faire l'avant/après gratuitement sur votre propre fichier.",
    "painPoints": [
      {
        "title": "Diapositive de titre : du nom de fichier à la première impression",
        "body": "Avant : un titre de modèle par défaut, une date, peut-être un logo écrasé dans un coin. Après : la couleur et le logo de votre marque, un titre qui dit à quoi sert la présentation et le nom de l'intervenant, lisible depuis le fond de la salle."
      },
      {
        "title": "Le mur de puces : de huit lignes à un seul message",
        "body": "Avant : un titre, huit puces, du corps 11, l'intervenant qui lit à voix haute. Après : l'idée unique de la diapositive en titre, les points d'appui organisés dans une structure qui leur correspond (étapes, comparaison, grille), et le détail déplacé dans les notes du présentateur ou une diapositive suivante."
      },
      {
        "title": "La diapositive de graphique : de la capture d'écran à la preuve",
        "body": "Avant : un graphique collé à sa taille d'origine, des étiquettes d'axe trop petites pour être lues, aucun message à retenir. Après : le graphique dimensionné pour remplir la diapositive, le message en titre, vos valeurs reprises à l'identique et des couleurs assorties à votre marque."
      }
    ],
    "outcomes": [
      "Diapositives équipe et présentation de l'entreprise : photos de même taille, noms lisibles, plus d'organigrammes en clip art",
      "Sommaire et intercalaires : un seul système visuel pour toute la présentation au lieu de cinq",
      "Diapositive de clôture : une vraie prochaine étape et des coordonnées, pas le mot « Questions »",
      "Toute la présentation dans une seule charte : même typographie, même palette, même espacement sur chaque diapositive"
    ],
    "faqs": [
      {
        "q": "Puis-je voir un avant/après de ma propre présentation avant de payer ?",
        "a": "Oui. L'offre gratuite inclut une présentation IA par mois, et un relooking compte pour une. Importez le .pptx, indiquez votre site web à PitchBoost pour la charte et comparez le résultat à l'original en quelques minutes."
      },
      {
        "q": "Le relooking conserve-t-il mon contenu ?",
        "a": "Il garde le contenu et reconstruit le design. Les titres deviennent le message de la diapositive, le texte dense est restructuré et rien n'est inventé : chiffres, affirmations et valeurs de graphiques sont repris de votre fichier."
      },
      {
        "q": "Et si je veux relooker seulement certaines diapositives ?",
        "a": "Chaque diapositive de la présentation reconstruite est modifiable, et vous pouvez régénérer ou restaurer des diapositives une à une. La plupart des gens lancent le relooking complet, puis peaufinent à la main les deux ou trois diapositives qui comptent le plus pour eux."
      },
      {
        "q": "Est-ce que je récupère un PowerPoint modifiable ?",
        "a": "Oui. Téléchargez un PowerPoint modifiable avec de vraies zones de texte et de vraies polices, une version au rendu identique à la présentation web, ou un PDF. Le lien web est aussi actif, vous pouvez donc partager la version « après » tout de suite."
      }
    ],
    "ctaHeadline": "Faites l'avant/après sur votre propre présentation. La première est gratuite.",
    "updated": "2026-09-16"
  },
  {
    "slug": "modernize-old-powerpoint",
    "navLabel": "Moderniser un vieux PowerPoint",
    "metaTitle": "Moderniser un vieux PowerPoint avec l'IA | PitchBoost",
    "metaDescription": "Modernisez un PowerPoint daté avec l'IA. Gardez le contenu et récupérez des mises en page modernes, des polices actuelles, votre charte d'aujourd'hui et du 16:9.",
    "heroHeadline": "Modernisez le vieux PowerPoint que vous réutilisez sans cesse",
    "heroSubhead": "Le contenu tient toujours la route. Le modèle de 2014, les barres en dégradé, le logo d'il y a deux rebrandings et les diapositives en 4:3, beaucoup moins. PitchBoost lit l'ancienne présentation et la reconstruit en version actuelle, dans la charte que vous avez aujourd'hui.",
    "painPoints": [
      {
        "title": "Elle a été conçue pour un projecteur qui n'existe plus",
        "body": "Les anciennes présentations sont en 4:3 avec des bandes noires sur tous les écrans modernes, en Calibri à trois tailles différentes, avec des titres en WordArt et un pied de page qui indique encore une ancienne adresse. Tout le monde le remarque avant la fin de votre première phrase."
      },
      {
        "title": "La marque a changé, pas la présentation",
        "body": "Nouveau logo, nouvelles couleurs, nouveau site, et la présentation phare porte encore les anciens. Remplacer un logo sur 40 diapositives est facile ; donner à toute la présentation l'air d'avoir été conçue pour la nouvelle marque, beaucoup moins."
      },
      {
        "title": "Personne ne veut refaire quelque chose qui fonctionne",
        "body": "Le récit a été affiné au fil d'années de vrais rendez-vous. Repartir de zéro dans un nouvel outil, c'est rediscuter chaque diapositive. Il vous faut la même présentation, mise au goût du jour, sans toucher à ce qui a fait ses preuves."
      }
    ],
    "outcomes": [
      "Des diapositives 16:9 avec mises en page, typographie et espacements modernes",
      "Votre charte actuelle sur chaque diapositive, reprise de votre site web en ligne",
      "Les réflexes visuels datés supprimés : WordArt, clip art, barres en dégradé, puces empilées",
      "Le même récit et les mêmes chiffres, dans une présentation à partager par lien ou à télécharger"
    ],
    "faqs": [
      {
        "q": "Va-t-il convertir ma présentation 4:3 en 16:9 ?",
        "a": "Oui. La présentation reconstruite est en 16:9 par conception, chaque diapositive étant remise en page pour le cadre plus large au lieu d'être étirée. Les anciennes mises en page sont remplacées, pas agrandies."
      },
      {
        "q": "Peut-il utiliser ma nouvelle marque plutôt que celle du fichier ?",
        "a": "Oui. PitchBoost prend la charte sur votre site web, pas dans l'ancienne présentation, donc le logo, les couleurs et le ton sont ceux que vous utilisez aujourd'hui. Vous pouvez vérifier le logo avant toute génération."
      },
      {
        "q": "Est-ce que ça marche avec de très vieux fichiers .ppt ?",
        "a": "Importez un .pptx. Si vous avez un ancien .ppt, ouvrez-le dans PowerPoint et enregistrez-le d'abord en .pptx ; cette conversion est sans perte et prend quelques secondes. Les fichiers jusqu'à 50 Mo sont acceptés."
      },
      {
        "q": "Combien coûte la modernisation d'une présentation ?",
        "a": "Une présentation IA par mois est gratuite, jusqu'à 10 diapositives, avec un petit badge. Starter coûte $7 par mois pour jusqu'à 25 diapositives sans badge ; Pro coûte $29 par mois pour jusqu'à 60 diapositives et des domaines personnalisés. Les présentations plus longues peuvent d'abord être condensées."
      }
    ],
    "ctaHeadline": "Gardez le récit qui fonctionne. Mettez à la retraite le modèle qui ne fonctionne plus.",
    "updated": "2026-09-16"
  },
  {
    "slug": "powerpoint-designer-alternative",
    "navLabel": "Alternative à PowerPoint Designer",
    "metaTitle": "PowerPoint Designer ne marche pas ? Alternative IA | PitchBoost",
    "metaDescription": "Pourquoi le Concepteur de PowerPoint (Designer) n'affiche aucune idée, comment le réparer, et comment refaire toute la présentation dans votre charte. Gratuit.",
    "heroHeadline": "Quand PowerPoint Designer est à court d'idées, refaites toute la présentation",
    "heroSubhead": "Designer (« Concepteur » dans PowerPoint en français) propose des mises en page une diapositive à la fois, et seulement quand une diapositive respecte ses règles. PitchBoost prend tout votre .pptx, apprend votre charte à partir de votre site web et reconstruit chaque diapositive en une seule passe, puis vous rend un PowerPoint modifiable et un lien qui vous montre qui l'a ouvert.",
    "painPoints": [
      {
        "title": "« Désolé, aucune idée de conception pour cette diapositive »",
        "body": "Designer exige une connexion Internet, un thème intégré, une disposition Titre ou Titre et contenu, et aucune zone de texte ni forme supplémentaire. Les vraies présentations enfreignent ces règles sur presque chaque diapositive, précisément quand vous avez besoin d'aide."
      },
      {
        "title": "Une diapositive à la fois, c'est encore une journée de travail",
        "body": "Même quand il fonctionne, Designer propose des options diapositive par diapositive. Trente diapositives, c'est trente décisions, et les résultats ont rarement l'air d'appartenir à la même présentation."
      },
      {
        "title": "Il connaît les thèmes de PowerPoint, pas votre marque",
        "body": "Designer fonctionne mieux avec les thèmes fournis avec PowerPoint. Les thèmes personnalisés ou téléchargés, ceux que les entreprises utilisent vraiment, n'obtiennent souvent aucune suggestion."
      }
    ],
    "outcomes": [
      "Chaque diapositive refaite en une seule passe, cohérente de la première à la dernière",
      "Fonctionne sur les diapositives chargées, les thèmes personnalisés et les zones de texte que Designer ignore",
      "Votre logo, vos couleurs et votre ton repris de votre site web",
      "Un PowerPoint modifiable, plus un lien suivi qui montre qui l'a ouvert"
    ],
    "faqs": [
      {
        "q": "Pourquoi PowerPoint Designer dit-il qu'il n'y a aucune idée de conception ?",
        "a": "Les causes habituelles : vous êtes hors ligne, la présentation utilise un thème personnalisé ou téléchargé, la diapositive n'est pas en disposition Titre ou Titre et contenu, elle contient des formes ou des zones de texte en dehors des espaces réservés, plusieurs diapositives sont sélectionnées, ou quelqu'un d'autre modifie la même diapositive. Les anciens fichiers .ppt et les comptes sans abonnement Microsoft 365 n'ont pas non plus de suggestions."
      },
      {
        "q": "Comment réactiver Designer ?",
        "a": "Allez dans Fichier, Options, Général et, sous PowerPoint Designer, cochez « Afficher automatiquement les idées de conception ». Si la case est grisée, votre administrateur informatique l'a probablement désactivée. Dans les versions avec Copilot, la fonction apparaît dans l'onglet Accueil sous le nom Suggestions de conception."
      },
      {
        "q": "Ai-je besoin de Microsoft 365 pour utiliser PitchBoost ?",
        "a": "Non. PitchBoost fonctionne dans le navigateur. Importez un .pptx issu de n'importe quelle version de PowerPoint, ou un export de Google Slides ou de Keynote, et téléchargez le résultat en PowerPoint ou en PDF."
      },
      {
        "q": "Combien ça coûte ?",
        "a": "Une présentation IA par mois est gratuite, jusqu'à 10 diapositives, avec un petit badge. Starter coûte $7 par mois pour des présentations jusqu'à 25 diapositives sans badge ; Pro coûte $29 par mois pour jusqu'à 60 diapositives et des domaines personnalisés."
      }
    ],
    "ctaHeadline": "Arrêtez de corriger les diapositives une par une.",
    "updated": "2026-09-25"
  },
  {
    "slug": "keynote-to-powerpoint",
    "navLabel": "Keynote vers PowerPoint",
    "metaTitle": "Keynote vers PowerPoint : conversion et refonte | PitchBoost",
    "metaDescription": "Exportez votre Keynote en PowerPoint, puis corrigez les polices, espacements et mises en page cassés. PitchBoost en fait un .pptx propre dans votre charte. Gratuit.",
    "heroHeadline": "Keynote vers PowerPoint, sans diapositives cassées",
    "heroSubhead": "Keynote exporte en .pptx en un clic, mais en route les polices changent, le texte déborde et les mises en page dérivent. Importez l'export et PitchBoost reconstruit chaque diapositive en PowerPoint natif dans votre charte, pour un rendu juste sur chaque ordinateur de la salle.",
    "painPoints": [
      {
        "title": "Les polices Apple ne survivent pas au voyage",
        "body": "Les présentations Keynote s'appuient sur des polices que PowerPoint sous Windows n'a pas. PowerPoint les remplace par quelque chose d'approchant, et chaque retour à la ligne et chaque zone de texte se décale avec."
      },
      {
        "title": "Animations et mises en page sortent aplaties",
        "body": "Le morphing, les animations personnalisées et certains objets groupés deviennent des approximations statiques ou maladroites. La présentation s'ouvre, mais ce n'est plus celle que vous avez conçue."
      },
      {
        "title": "Réparer l'export prend plus de temps que de recommencer",
        "body": "Replacer les zones de texte diapositive par diapositive, c'est un après-midi qui disparaît. Le client ou la conférence a besoin aujourd'hui d'un .pptx qui fonctionne."
      }
    ],
    "outcomes": [
      "Des mises en page PowerPoint natives, pas une conversion rafistolée",
      "Des polices et des espacements choisis pour tenir sur Windows comme sur Mac",
      "Votre texte, vos chiffres et vos graphiques repris diapositive par diapositive",
      "Un .pptx modifiable, un PDF et un lien qui montre qui l'a ouvert"
    ],
    "faqs": [
      {
        "q": "Comment exporter un fichier Keynote en PowerPoint ?",
        "a": "Dans Keynote, choisissez Fichier, Exporter vers, PowerPoint, puis enregistrez le .pptx. Importez ce fichier dans PitchBoost. Le texte de chaque diapositive et les images que vous avez placées suivent."
      },
      {
        "q": "Pourquoi ma présentation Keynote est-elle différente dans PowerPoint ?",
        "a": "Surtout à cause des polices et des effets. PowerPoint sous Windows ne dispose pas de nombreuses polices Apple et les remplace, ce qui modifie les retours à la ligne et les espacements. Certaines animations et transitions n'ont pas d'équivalent dans PowerPoint et sont simplifiées."
      },
      {
        "q": "Mes animations seront-elles conservées ?",
        "a": "PitchBoost reconstruit la mise en page et le design, pas les animations propres à Keynote. Vous obtenez des diapositives propres auxquelles vous pouvez ajouter des transitions PowerPoint si nécessaire."
      },
      {
        "q": "Puis-je continuer à travailler dans Keynote ensuite ?",
        "a": "Oui. Keynote ouvre les fichiers .pptx, vous pouvez donc ramener la présentation redessinée dans Keynote quand vous le souhaitez."
      }
    ],
    "ctaHeadline": "Créée dans Keynote. Présentée partout.",
    "updated": "2026-09-25"
  },
  {
    "slug": "google-slides-to-powerpoint",
    "navLabel": "Google Slides vers PowerPoint",
    "metaTitle": "Google Slides vers PowerPoint, conversion et refonte | PitchBoost",
    "metaDescription": "Téléchargez votre Google Slides en PowerPoint et récupérez-le redessiné dans votre charte, la mise en forme cassée réparée. Un .pptx modifiable en minutes. Gratuit.",
    "heroHeadline": "Google Slides vers PowerPoint, et en mieux à l'arrivée",
    "heroSubhead": "Votre équipe travaille dans Slides ; le client, le conseil d'administration ou l'événement veut du PowerPoint. Téléchargez le .pptx, importez-le, et PitchBoost reconstruit chaque diapositive dans votre charte, pour que le résultat ait l'air conçu plutôt que converti.",
    "painPoints": [
      {
        "title": "La conversion casse des choses sans prévenir",
        "body": "Des Google Fonts absentes de l'ordinateur du destinataire, des zones de texte qui se redimensionnent, des formes qui bougent. Le .pptx s'ouvre sans problème et paraît légèrement faux partout."
      },
      {
        "title": "Les thèmes Slides ressemblent à des thèmes Slides",
        "body": "Les thèmes intégrés se reconnaissent au premier coup d'œil. Quand la présentation arrive dans une entreprise qui travaille sous PowerPoint, elle passe pour un travail vite fait."
      },
      {
        "title": "Les graphiques liés arrivent sous forme d'images",
        "body": "Les graphiques liés à Google Sheets passent souvent en images statiques, donc personne ne peut mettre à jour les chiffres sans revenir à l'original."
      }
    ],
    "outcomes": [
      "Des diapositives PowerPoint natives et propres, pas un thème Slides converti",
      "Votre charte, reprise de votre site web, appliquée à chaque diapositive",
      "Les chiffres conservés exactement comme dans votre présentation",
      "Un .pptx modifiable, un PDF et un lien suivi à envoyer"
    ],
    "faqs": [
      {
        "q": "Comment convertir Google Slides en PowerPoint ?",
        "a": "Dans Google Slides, choisissez Fichier, Télécharger, Microsoft PowerPoint (.pptx). Importez ce fichier dans PitchBoost. Les notes du présentateur et les images suivent."
      },
      {
        "q": "Pourquoi ma présentation Google Slides s'affiche-t-elle mal dans PowerPoint ?",
        "a": "Les polices sont la cause habituelle : les Google Fonts non installées sont remplacées, ce qui déplace le texte. Certaines formes, les graphiques liés à Sheets et les vidéos intégrées se convertissent aussi imparfaitement."
      },
      {
        "q": "Puis-je ramener la refonte dans Google Slides ?",
        "a": "Oui. Dans la liste « Télécharger » de l'écran de partage, la ligne « Google Slides » enregistre une copie modifiable de la présentation redessinée dans votre Google Drive, prête à être ouverte dans Google Slides. Ou envoyez le lien PitchBoost, qui s'affiche de la même façon sur tous les appareils et vous indique quand il est ouvert."
      },
      {
        "q": "Est-ce payant ?",
        "a": "Une présentation IA par mois est gratuite, jusqu'à 10 diapositives, avec un petit badge. Starter coûte $7 par mois pour des présentations jusqu'à 25 diapositives sans badge ; Pro coûte $29 par mois pour jusqu'à 60 diapositives et des domaines personnalisés."
      }
    ],
    "ctaHeadline": "Téléchargez une fois. Envoyez quelque chose dont vous êtes fier.",
    "updated": "2026-09-25"
  },
  {
    "slug": "change-powerpoint-template",
    "navLabel": "Appliquer un nouveau modèle",
    "metaTitle": "Changer le modèle d'un PowerPoint existant | PitchBoost",
    "metaDescription": "Appliquer à la main un nouveau modèle à un PowerPoint existant casse les mises en page. La méthode manuelle, et comment passer toute la présentation à votre charte.",
    "heroHeadline": "Passez un PowerPoint existant sur un nouveau modèle, en une seule fois",
    "heroSubhead": "Changer de thème est facile. Faire que chaque diapositive s'y adapte vraiment, c'est là que ça se corse. PitchBoost lit votre présentation, prend votre charte sur votre site web et reconstruit chaque diapositive pour qu'elle ait l'air faite pour le nouveau style, pas forcée à y entrer.",
    "painPoints": [
      {
        "title": "Un nouveau thème ne restyle que les espaces réservés",
        "body": "Les zones de texte, formes et images ajoutées à la main gardent leurs anciennes polices, couleurs et positions. Après le changement, la moitié de la présentation suit le nouveau modèle et l'autre moitié l'ignore."
      },
      {
        "title": "Les anciennes dispositions ne correspondent pas aux nouvelles",
        "body": "Votre présentation utilisait des dispositions que le nouveau modèle n'a pas, alors PowerPoint devine. Les titres sautent, les colonnes s'effondrent et chaque diapositive doit être vérifiée."
      },
      {
        "title": "Un rebranding multiplie le travail",
        "body": "Une nouvelle marque concerne toutes les présentations de l'entreprise, pas une seule. Les corriger une par une, ce sont des semaines de travail que personne n'a budgétées."
      }
    ],
    "outcomes": [
      "Chaque diapositive reconstruite pour le nouveau style, zones de texte faites à la main comprises",
      "Logo, couleurs et ton repris de votre site web actuel",
      "Contenu et chiffres conservés diapositive par diapositive",
      "La reconstruction en masse pour faire passer toute une bibliothèque de présentations d'un coup"
    ],
    "faqs": [
      {
        "q": "Comment appliquer à la main un nouveau modèle à un PowerPoint existant ?",
        "a": "Ouvrez la présentation, allez dans l'onglet Création, ouvrez la galerie Thèmes et choisissez Rechercher des thèmes pour sélectionner le fichier du modèle. Ensuite, diapositive par diapositive : choisissez Accueil, Disposition, sélectionnez la disposition la plus proche, puis cliquez sur Rétablir pour faire entrer le contenu dans les nouveaux espaces réservés. Tout ce qui se trouve en dehors d'un espace réservé doit être restylé à la main."
      },
      {
        "q": "Pourquoi le changement de modèle n'a-t-il pas mis à jour toutes mes diapositives ?",
        "a": "Les thèmes ne restylent que les espaces réservés et les couleurs du thème. Les zones de texte, formes et polices définies directement sur une diapositive prennent le pas sur le modèle, elles restent donc exactement comme avant."
      },
      {
        "q": "PitchBoost peut-il utiliser notre nouvelle marque ?",
        "a": "Oui. Il part de votre marque telle qu'elle apparaît sur votre site web (logo, couleurs et ton), et vous pouvez vérifier le logo avant toute génération. Indiquez le site qui affiche la nouvelle marque, et chaque présentation importée revient dans cette charte. Vous pouvez aussi enregistrer des diapositives comme modèles pour les réutiliser."
      },
      {
        "q": "Nous avons des dizaines de présentations à migrer. Existe-t-il un moyen plus rapide ?",
        "a": "La reconstruction en masse traite jusqu'à 12 PowerPoint par lancement dans la même charte, pour que toute la bibliothèque finisse par être cohérente."
      }
    ],
    "ctaHeadline": "Nouveau modèle. Chaque diapositive. Une seule passe.",
    "updated": "2026-09-25"
  },
];

export const REDESIGN_STEPS_FR: { step: string; title: string; body: string }[] = [
  {
    "step": "1",
    "title": "Importez la présentation que vous avez",
    "body": "N'importe quel .pptx jusqu'à 50 Mo. PitchBoost lit chaque diapositive, titres, texte, tout, et garde votre récit intact. Rien n'est résumé sans vous le demander d'abord."
  },
  {
    "step": "2",
    "title": "Indiquez votre site web",
    "body": "Une seule analyse récupère votre logo, vos couleurs de marque et votre ton. C'est la base de la refonte : votre marque, pas une galerie de modèles."
  },
  {
    "step": "3",
    "title": "Récupérez la présentation redessinée sous forme de lien de partage",
    "body": "Quelques minutes plus tard, vous avez une présentation mise en page de façon professionnelle, publiée sous forme de lien suivi. Modifiez n'importe quelle diapositive, exportez en PDF ou en PowerPoint et voyez qui l'ouvre."
  }
];

export const HUB_FR: RedesignHubCopy = {
  "metaTitle": "Refonte de présentations PowerPoint dans votre charte | PitchBoost",
  "metaDescription": "Refaites le design de n'importe quelle présentation avec l'IA : importez le .pptx, gardez le contenu et récupérez un design professionnel dans votre charte en quelques minutes. Refontes PowerPoint, relookings de pitch deck, rebrandings et présentations commerciales rafraîchies.",
  "h1": "Apportez la présentation que vous avez. Repartez avec celle que vous vouliez.",
  "subhead": "PitchBoost lit votre PowerPoint, garde le récit et reconstruit le design dans votre charte, reprise directement de votre site web. Quelques minutes, pas quelques semaines.",
  "sectionLabel": "Choisissez votre situation",
  "sectionTitle": "Toutes les variantes de « cette présentation a besoin d'aide »"
};
