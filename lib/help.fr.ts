import type { HelpArticle } from "./help";

/**
 * French (France, "vous") translation of lib/help.ts. Slugs match the
 * English articles one to one so hreflang works. Keep in sync: when a fact,
 * price or step changes in help.ts, change it here too and move `updated`.
 * On-screen labels from the app are quoted as the French app shows them
 * (src/i18n/fr in the app repo), in « ». Labels on Claude's, ChatGPT's and
 * the CRM's screens (PitchBoost's page inside the CRM included) stay in
 * English; PowerPoint, Google Slides and Keynote menus use their French names.
 */
export const HELP_ARTICLES_FR: HelpArticle[] = [
  {
    "slug": "redesign-a-powerpoint",
    "category": "redesign",
    "title": "Comment refaire le design d'un PowerPoint avec PitchBoost",
    "metaDescription": "Importez un .pptx, indiquez votre site web à PitchBoost et récupérez en quelques minutes la présentation refaite aux couleurs de votre marque. Étape par étape, avec ce qu'il advient de votre contenu.",
    "answer": "Pour refaire le design d'un PowerPoint dans PitchBoost, choisissez « Relooker une présentation » après vous être connecté, importez le .pptx ou un PDF de la présentation (jusqu'à 50 Mo et 75 diapositives), saisissez le site web de votre entreprise pour qu'il récupère votre logo et vos couleurs, puis lancez la refonte. La présentation refaite arrive en 2 à 5 minutes environ sous forme de présentation web que vous pouvez modifier, partager par lien, télécharger en PowerPoint ou en PDF, ou ouvrir dans Google Slides. Le contenu de vos diapositives est conservé ; la mise en page, la typographie, les espacements et la marque sont refaits.",
    "steps": [
      {
        "title": "Connectez-vous et choisissez « Relooker une présentation »",
        "body": "Créez un compte gratuit ou connectez-vous. Avec un nouveau compte, choisissez « Relooker une présentation existante » sur le premier écran ; ensuite, c'est la carte « Relooker une présentation » de la page « Accueil ». Si vous arrivez depuis une page de refonte de ce site, vous y êtes dirigé automatiquement."
      },
      {
        "title": "Importez le .pptx ou le PDF",
        "body": "Déposez le fichier PowerPoint, ou un PDF de la présentation, ou cliquez pour parcourir vos fichiers. Les fichiers jusqu'à 50 Mo et 75 diapositives sont acceptés. Les utilisateurs de Keynote et de Google Slides exportent d'abord en .pptx (un clic dans le menu de l'une ou l'autre application)."
      },
      {
        "title": "Saisissez le site web de votre entreprise",
        "body": "PitchBoost l'analyse pendant une quinzaine de secondes et récupère votre logo, vos couleurs de marque, vos polices et votre ton. S'il a choisi le mauvais logo, remplacez-le sur place avant de lancer la génération."
      },
      {
        "title": "Décidez quoi faire d'une longue présentation",
        "body": "Si la présentation compte plus de diapositives que votre offre n'en refait, PitchBoost vous demande s'il faut la condenser pour qu'elle tienne ou ne refaire que les premières diapositives. La plupart des présentations sous la limite sautent cette étape."
      },
      {
        "title": "Lancez la refonte et patientez, ou partez",
        "body": "Sur la page « Accueil », appuyez sur la flèche de la zone de saisie ; sur le premier écran d'un nouveau compte, cliquez sur « Générer ». La refonte prend généralement 2 à 5 minutes, contrôle qualité compris. Vous pouvez regarder les diapositives arriver, ou fermer l'onglet : PitchBoost vous envoie par e-mail un lien vers la présentation terminée."
      },
      {
        "title": "Relisez, modifiez, partagez",
        "body": "Ouvrez n'importe quelle diapositive dans l'éditeur pour y taper du texte, déplacer des éléments ou demander une modification à l'IA, publiez la présentation sous forme de lien non répertorié, ou, depuis l'écran de partage, téléchargez-la en PowerPoint ou en PDF ou ouvrez-la dans Google Slides."
      }
    ],
    "sections": [
      {
        "heading": "Ce qui change et ce qui ne change pas",
        "paragraphs": [
          "Le contenu de chaque diapositive est conservé : titres, texte, chiffres, valeurs des graphiques et structure destinée à l'orateur. Tout ce qui est visuel est refait : mise en page, hiérarchie, typographie, couleurs, espacements et images, le tout dans la marque récupérée sur votre site web.",
          "Les diapositives denses sont restructurées plutôt que réduites. Un mur de puces devient une mise en page adaptée à son contenu (étapes, comparaison, grille). Rien n'est inventé ; une vérification des faits compare la présentation refaite à votre original."
        ]
      },
      {
        "heading": "Limites de diapositives par offre",
        "paragraphs": [
          "L'offre gratuite refait jusqu'à 10 diapositives, Starter jusqu'à 25 et Pro jusqu'à 60. Une présentation plus longue peut être condensée avant le début de la refonte, et l'écran de partage vous indique combien de diapositives ont été conservées."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Est-ce que ça fonctionne avec les fichiers .ppt ?",
        "a": "Importez un .pptx. Ouvrez l'ancien fichier .ppt dans PowerPoint et utilisez « Enregistrer sous » pour le convertir ; rien n'est perdu."
      },
      {
        "q": "Puis-je refaire seulement certaines diapositives ?",
        "a": "La refonte porte sur toute la présentation. Ensuite, chaque diapositive est modifiable, et vous pouvez régénérer ou restaurer des diapositives une par une dans l'éditeur."
      },
      {
        "q": "Combien ça coûte ?",
        "a": "L'offre gratuite comprend une présentation IA par mois, jusqu'à 10 diapositives, avec un petit badge PitchBoost. Starter coûte $7 par mois pour jusqu'à 25 diapositives et aucun badge ; Pro coûte $29 par mois pour jusqu'à 60 diapositives et les domaines personnalisés."
      }
    ],
    "related": ["google-slides-and-keynote", "slide-limits-by-plan", "download-powerpoint-or-pdf", "how-long-does-a-deck-take"],
    "updated": "2026-11-10"
  },

  {
    "slug": "google-slides-and-keynote",
    "category": "redesign",
    "title": "Comment refaire le design de présentations Google Slides ou Keynote",
    "metaDescription": "PitchBoost lit les fichiers PowerPoint et PDF. Exportez votre présentation Google Slides ou Keynote en PowerPoint en une étape, importez-la et récupérez-la refaite aux couleurs de votre marque.",
    "answer": "PitchBoost accepte les fichiers PowerPoint (.pptx) et PDF, et Google Slides comme Keynote exportent en .pptx en une étape, avec le texte, les images et les graphiques intacts. Exportez le fichier, importez-le dans PitchBoost, et la refonte se déroule exactement comme pour une présentation PowerPoint.",
    "steps": [
      {
        "title": "Google Slides : Fichier > Télécharger > Microsoft PowerPoint (.pptx)",
        "body": "Le téléchargement est une copie complète de la présentation. Les notes de l'orateur et les graphiques suivent ; les vidéos intégrées, non."
      },
      {
        "title": "Keynote : Fichier > Exporter vers > PowerPoint",
        "body": "Gardez les réglages par défaut. Keynote convertit ses mises en page et son texte en objets PowerPoint que PitchBoost peut lire."
      },
      {
        "title": "Importez le .pptx dans PitchBoost",
        "body": "Connectez-vous, choisissez « Relooker une présentation » et déposez le fichier exporté. Ajoutez ensuite votre site web pour que la refonte utilise votre marque."
      }
    ],
    "sections": [
      {
        "heading": "Revenir ensuite à Google Slides ou Keynote",
        "paragraphs": [
          "Dans la liste « Télécharger » de l'écran de partage, la ligne « Google Slides » enregistre une copie modifiable de la présentation dans votre Google Drive, prête à être ouverte dans Google Slides (la première fois, Google vous demande votre autorisation). Pour Keynote, téléchargez le PowerPoint modifiable : Keynote ouvre directement les .pptx. Chaque mot reste modifiable. Le lien de la présentation web fonctionne aussi seul, sans aucune application."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Mes polices Google Slides vont-elles survivre ?",
        "a": "La refonte remplace les polices de la présentation par la typographie de votre marque, récupérée sur votre site web ; les polices d'origine ne sont donc pas nécessaires."
      },
      {
        "q": "Puis-je importer un PDF à la place ?",
        "a": "Oui. Importez de la même façon un PDF de la présentation : PitchBoost lit chaque page, y compris les graphiques, les tableaux et les diapositives qui ne sont que des images, et refait la présentation aux couleurs de votre marque. Un PDF protégé par mot de passe doit d'abord être déverrouillé."
      }
    ],
    "related": ["redesign-a-powerpoint", "download-powerpoint-or-pdf", "brand-from-your-website"],
    "updated": "2026-11-10"
  },

  {
    "slug": "slide-limits-by-plan",
    "category": "redesign",
    "title": "Combien de diapositives PitchBoost refait selon l'offre",
    "metaDescription": "L'offre gratuite refait jusqu'à 10 diapositives, Starter jusqu'à 25, Pro et Business jusqu'à 60. Ce qui arrive à une présentation plus longue : la condenser pour qu'elle tienne, ou refaire les premières diapositives.",
    "answer": "L'offre gratuite refait les présentations jusqu'à 10 diapositives, Starter jusqu'à 25, et Pro et Business jusqu'à 60. Si votre présentation est plus longue, PitchBoost propose de la condenser pour qu'elle tienne (même récit, moins de diapositives) ou de ne refaire que les premières diapositives. L'écran de partage indique combien de vos diapositives d'origine ont été conservées et comment refaire le reste : une seule fois pour cette présentation ($9, pour les présentations jusqu'à 25 diapositives) ou avec une offre.",
    "sections": [
      {
        "heading": "Les limites",
        "paragraphs": [
          "Gratuit : jusqu'à 10 diapositives par présentation, une présentation IA par mois. Starter ($7 par mois) : jusqu'à 25 diapositives. Pro ($29 par mois) et Business ($79 par mois) : jusqu'à 60 diapositives. La limite s'applique à la présentation que PitchBoost produit, pas au fichier que vous importez ; vous pouvez importer une présentation de 45 diapositives avec n'importe quelle offre. Le fichier lui-même peut compter jusqu'à 75 diapositives."
        ]
      },
      {
        "heading": "Condenser ou couper",
        "paragraphs": [
          "Quand une présentation dépasse la limite, vous choisissez avant toute génération. Condenser conserve le fil du récit et fusionne ou supprime les diapositives les moins essentielles pour que toute l'histoire tienne. Refaire les N premières conserve exactement chaque diapositive jusqu'à la limite et laisse le reste de côté.",
          "Condenser est généralement le meilleur choix pour un pitch : la plupart des bons pitch decks font 10 à 15 diapositives. Couper vaut mieux quand la présentation est une séquence (un module de formation, un processus étape par étape) où l'ordre compte plus que la longueur."
        ]
      },
      {
        "heading": "Très longues présentations",
        "paragraphs": [
          "PitchBoost accepte les PowerPoint jusqu'à 75 diapositives et lit les 60 premières : une présentation de 70 diapositives sur Pro revient donc avec 60 diapositives au maximum, condensée ou coupée. Un fichier de plus de 75 diapositives est refusé à l'import, avec un message qui l'explique. Découpez les très longues présentations en modules et refaites chacun d'eux."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Passer à une offre supérieure refait-il automatiquement les diapositives manquantes ?",
        "a": "Non. Après la mise à niveau, ouvrez le deal et relancez la refonte ; l'écran de partage a un bouton pour cela. La présentation complète remplace la version condensée."
      },
      {
        "q": "La limite s'applique-t-elle aussi aux nouvelles présentations ?",
        "a": "Oui. Une présentation créée à partir d'un brief utilise la même limite de diapositives par offre."
      },
      {
        "q": "Une présentation condensée compte-t-elle comme une présentation complète ?",
        "a": "Oui. Une refonte est une présentation IA, facturée selon sa longueur : 100 crédits jusqu'à 10 diapositives, plus 8 pour chaque diapositive au-delà."
      }
    ],
    "related": ["redesign-a-powerpoint", "credits-and-plans", "download-powerpoint-or-pdf"],
    "updated": "2026-10-27"
  },

  {
    "slug": "download-powerpoint-or-pdf",
    "category": "output",
    "title": "Comment télécharger votre présentation en PowerPoint ou en PDF",
    "metaDescription": "Téléchargez une présentation en PowerPoint modifiable, en PowerPoint fidèle au rendu ou en PDF avec n'importe quelle offre payante, ou pour $9 par présentation. Où se trouvent les boutons et quel fichier choisir.",
    "answer": "Ouvrez l'écran de partage de la présentation et utilisez les boutons de téléchargement : « Télécharger le PowerPoint » vous donne un .pptx fidèle au rendu, où chaque diapositive est une image de la présentation web ; « PowerPoint modifiable » vous donne un .pptx qui ressemble à la présentation web, où chaque mot est une vraie zone de texte PowerPoint que vous pouvez modifier ; et « PDF » vous donne une page par diapositive. Les téléchargements sont inclus dans toutes les offres payantes. Avec l'offre gratuite, le partage de la présentation sous forme de lien en direct reste gratuit, et vous pouvez débloquer les téléchargements d'une présentation avec un paiement unique de $9 (présentations jusqu'à 25 diapositives), qui retire aussi le badge.",
    "steps": [
      {
        "title": "Ouvrez la présentation",
        "body": "Depuis votre tableau de bord, ouvrez le deal et cliquez sur la présentation. L'écran de partage affiche l'aperçu, avec à côté les commandes de téléchargement et de publication."
      },
      {
        "title": "Choisissez le fichier dont vous avez besoin",
        "body": "Le PowerPoint modifiable pour tout ce que vous allez continuer à retravailler. Le PowerPoint fidèle au rendu quand la présentation doit être identique à la version web sur l'ordinateur de quelqu'un d'autre. Le PDF pour les pièces jointes d'e-mail et l'impression."
      },
      {
        "title": "Attendez le fichier",
        "body": "Le bouton affiche « Préparation… » pendant la création du fichier, généralement quelques secondes. Le téléchargement démarre automatiquement."
      }
    ],
    "sections": [
      {
        "heading": "Modifiable ou fidèle au rendu",
        "paragraphs": [
          "Le PowerPoint modifiable ressemble à la présentation web : le design de chaque diapositive (arrière-plan, images, formes et graphiques) arrive sous forme d'une seule image, et chaque mot est placé par-dessus dans une vraie zone de texte PowerPoint que vous pouvez modifier, déplacer ou remettre en forme. Si votre ordinateur n'a pas l'une des polices de la présentation, PowerPoint la remplace par une police proche, si bien qu'une ligne peut passer à la ligne un peu différemment. Le fichier fidèle au rendu est identique au pixel près, car chaque diapositive est une seule image haute résolution, ce qui signifie aussi que son texte n'est pas modifiable. Dans le doute, prenez les deux ; une fois les téléchargements d'une présentation débloqués, chaque fichier ne coûte rien de plus."
        ]
      },
      {
        "heading": "Le badge",
        "paragraphs": [
          "Avec l'offre gratuite, chaque diapositive porte un petit badge « Powered by PitchBoost », y compris sur le lien en direct. Starter ($7 par mois) le retire de toutes les présentations et de tous les exports, et vous pouvez aussi le retirer d'une seule présentation avec un achat unique de $9 depuis l'écran de partage, qui débloque également les téléchargements de cette présentation."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Puis-je télécharger sans publier ?",
        "a": "Oui. Les téléchargements fonctionnent sur un brouillon privé. La publication ne compte que pour le lien web."
      },
      {
        "q": "Les polices sont-elles intégrées dans le PowerPoint modifiable ?",
        "a": "Le fichier indique les polices de votre marque ; si elles ne sont pas installées sur un ordinateur, PowerPoint les remplace par une police proche. Le fichier fidèle au rendu n'a pas ce problème, car les diapositives sont des images."
      },
      {
        "q": "Existe-t-il un export Google Slides ?",
        "a": "Oui. Dans la liste « Télécharger » de l'écran de partage, la ligne « Google Slides » enregistre une copie modifiable de la présentation dans votre Google Drive, prête à être ouverte dans Google Slides. L'export Google Slides est inclus dans les mêmes offres que les téléchargements PowerPoint et PDF."
      }
    ],
    "related": ["share-a-deck-link", "google-slides-and-keynote", "credits-and-plans"],
    "updated": "2026-11-10"
  },

  {
    "slug": "share-a-deck-link",
    "category": "sharing",
    "title": "Comment partager une présentation par lien et voir qui l'a ouverte",
    "metaDescription": "Publiez une présentation pour obtenir un lien non répertorié, envoyez-le à un prospect et soyez averti dès qu'il l'ouvre. Ce que le lien suit, avec toutes les offres.",
    "answer": "Cliquez sur « Publier et copier le lien » dans l'écran de partage de la présentation. Cela crée un lien non répertorié (toute personne qui l'a peut voir la présentation ; personne ne peut la trouver autrement) et le copie dans votre presse-papiers. Quand un prospect ouvre le lien, PitchBoost vous envoie un e-mail. Toutes les offres indiquent quelles diapositives chaque lecteur a lues et pendant combien de temps.",
    "steps": [
      {
        "title": "Publiez la présentation",
        "body": "Dans l'écran de partage, cliquez sur « Publier et copier le lien ». Tant que vous ne l'avez pas fait, la présentation est un brouillon privé que seuls vous et votre équipe pouvez voir."
      },
      {
        "title": "Envoyez le lien, ou ajoutez des destinataires",
        "body": "Collez le lien où vous voulez. Pour un suivi nominatif, ajoutez des destinataires sur le deal : chacun reçoit un lien privé, pour que vous sachiez exactement qui a ouvert quoi."
      },
      {
        "title": "Suivez le deal",
        "body": "Vous recevez un e-mail dès que la présentation est ouverte. La page du deal affiche chaque visite, avec le temps passé par diapositive et les diapositives sautées."
      },
      {
        "title": "Mettez-la hors ligne quand vous le souhaitez",
        "body": "« Passer en privé » dans l'écran de partage désactive le lien jusqu'à ce que vous publiiez à nouveau."
      }
    ],
    "sections": [
      {
        "heading": "La deal room",
        "paragraphs": [
          "Le lien ouvre une page qui contient la présentation ainsi que tout ce que vous avez joint au deal (une fiche produit, un Q&R). Les lecteurs peuvent poser une question depuis la page ; elle arrive dans votre boîte de réception avec leur adresse e-mail s'ils en ont laissé une. Un lecteur voit la présentation, jamais vos notes ni le reste de votre compte."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Puis-je utiliser mon propre domaine pour le lien ?",
        "a": "Les domaines personnalisés sont inclus dans Pro et Business. Avec l'offre gratuite et Starter, les liens de partage sont sur app.pitchboost.ai."
      },
      {
        "q": "Ai-je besoin de l'adresse e-mail du lecteur pour le suivre ?",
        "a": "Non. Chaque ouverture est suivie sur le lien lui-même. Ajouter des destinataires donne à chaque personne son propre lien, pour que les statistiques soient nominatives."
      },
      {
        "q": "Le lien expire-t-il ?",
        "a": "Non. Il fonctionne jusqu'à ce que vous rendiez la présentation privée ou que vous supprimiez le deal."
      }
    ],
    "related": ["download-powerpoint-or-pdf", "credits-and-plans", "redesign-a-powerpoint"],
    "updated": "2026-09-16"
  },

  {
    "slug": "connect-chatgpt",
    "category": "assistants",
    "title": "Comment utiliser PitchBoost dans ChatGPT",
    "metaDescription": "Ajoutez le plugin PitchBoost dans ChatGPT, connectez-vous une fois, puis demandez à ChatGPT de refaire une présentation que vous joignez ou d'en créer une nouvelle. Fonctionne avec les comptes ChatGPT gratuits. Les étapes exactes.",
    "answer": "PitchBoost est un plugin de l'annuaire des plugins de ChatGPT, et il fonctionne avec les comptes ChatGPT gratuits. Ajoutez-le, connectez-vous une fois à PitchBoost (un compte gratuit suffit), puis parlez à ChatGPT normalement : joignez un .pptx et dites « donne-lui un aspect professionnel », ou décrivez la présentation dont vous avez besoin. ChatGPT envoie la tâche à PitchBoost et répond avec un lien vers la présentation terminée ; ouvrez-la dans PitchBoost pour voir l'aperçu complet et accéder aux téléchargements PowerPoint et PDF.",
    "steps": [
      {
        "title": "Ajoutez le plugin PitchBoost",
        "body": "Dans ChatGPT, ouvrez l'annuaire des plugins, recherchez PitchBoost et ajoutez-le. Il est disponible avec les comptes ChatGPT gratuits comme avec les offres payantes."
      },
      {
        "title": "Connectez-vous à PitchBoost",
        "body": "À la première utilisation, ChatGPT ouvre une fenêtre de connexion PitchBoost. Connectez-vous ou créez un compte gratuit. Vous ne le faites qu'une fois ; ChatGPT mémorise la connexion."
      },
      {
        "title": "Joignez une présentation et faites votre demande",
        "body": "Dans une conversation, joignez votre .pptx (Google Slides et Keynote exportent en .pptx en une étape) et dites ce que vous voulez : « refais-la aux couleurs de notre marque », « donne un aspect professionnel à ma présentation de cours », ou décrivez une nouvelle présentation à partir de zéro. Indiquez un site web pour la marque si vous en avez un."
      },
      {
        "title": "Ouvrez la présentation dans PitchBoost",
        "body": "Quelques minutes plus tard, ChatGPT répond avec le lien. Cliquez sur « Open the deck in PitchBoost » pour voir l'aperçu complet, télécharger le PowerPoint modifiable ou un PDF, et partager le lien suivi."
      }
    ],
    "sections": [
      {
        "heading": "Ce que ChatGPT peut faire avec PitchBoost",
        "paragraphs": [
          "Refaire une présentation que vous joignez, vérifier si une refonte est terminée, créer une nouvelle présentation à partir d'un brief, lister vos présentations récentes, obtenir le lien de l'une d'elles et publier un brouillon. Il peut aussi créer une présentation d'exemple avant que vous vous connectiez, avec un badge, que vous pourrez récupérer plus tard.",
          "Il ne peut pas changer votre offre, supprimer quoi que ce soit ni voir des présentations en dehors de votre compte. Les refontes et les nouvelles présentations utilisent la même allocation mensuelle que l'application : une présentation par mois avec l'offre gratuite, jusqu'à 10 diapositives."
        ]
      },
      {
        "heading": "Si vous préférez utiliser l'adresse MCP",
        "paragraphs": [
          "Le plugin fonctionne sur le serveur MCP de PitchBoost. Les développeurs qui veulent le connecter à la main, dans le mode développeur de ChatGPT ou dans tout autre client MCP, peuvent utiliser https://app.pitchboost.ai/api/mcp avec OAuth ; l'article sur Claude donne les détails."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Le plugin fonctionne-t-il avec un compte ChatGPT gratuit ?",
        "a": "Oui. Ajoutez-le depuis l'annuaire des plugins comme n'importe quel autre plugin. Un compte PitchBoost gratuit fonctionne aussi, avec une présentation par mois."
      },
      {
        "q": "Où va la présentation refaite ?",
        "a": "Dans votre compte PitchBoost, sous un deal qui porte le nom de la présentation. Le lien que vous donne ChatGPT l'ouvre directement ; vous pouvez la modifier, la télécharger et la partager comme n'importe quelle autre présentation."
      },
      {
        "q": "Le contenu de ma présentation est-il envoyé à PitchBoost ?",
        "a": "Oui, le contenu des diapositives extrait par ChatGPT est envoyé à PitchBoost pour refaire la présentation, et stocké dans votre compte avec le résultat. La politique de confidentialité explique la conservation et la suppression."
      }
    ],
    "related": ["connect-claude", "redesign-a-powerpoint", "credits-and-plans"],
    "updated": "2026-09-30"
  },

  {
    "slug": "connect-claude",
    "category": "assistants",
    "title": "Comment utiliser PitchBoost dans Claude",
    "metaDescription": "Ajoutez PitchBoost à Claude comme connecteur personnalisé, connectez-vous une fois et demandez à Claude de refaire une présentation ou d'en créer une nouvelle. Les étapes exactes pour claude.ai et Claude Code.",
    "answer": "Dans Claude, ajoutez PitchBoost comme connecteur personnalisé avec l'URL https://app.pitchboost.ai/api/mcp, connectez-vous quand on vous le demande, puis demandez à Claude de refaire une présentation que vous importez ou d'en créer une nouvelle pour un prospect. Claude appelle PitchBoost via le Model Context Protocol (MCP) et renvoie le lien vers la présentation terminée.",
    "steps": [
      {
        "title": "Ouvrez les réglages des connecteurs",
        "body": "Sur claude.ai, allez dans « Settings », puis « Connectors », et cliquez sur « Add custom connector ». Avec une offre Team ou Enterprise, un administrateur devra peut-être l'ajouter pour l'organisation."
      },
      {
        "title": "Ajoutez le serveur PitchBoost",
        "body": "Nom : PitchBoost. URL : https://app.pitchboost.ai/api/mcp. Laissez vides les champs du client OAuth ; PitchBoost enregistre le client automatiquement. Enregistrez."
      },
      {
        "title": "Connectez votre compte",
        "body": "Cliquez sur « Connect » à côté de PitchBoost. Une fenêtre de connexion PitchBoost s'ouvre ; connectez-vous ou créez un compte gratuit. Claude mémorise la connexion."
      },
      {
        "title": "Demandez une présentation",
        "body": "Dans une conversation, vérifiez que PitchBoost est activé dans le menu des outils. Joignez un .pptx et dites « refais-la aux couleurs de notre marque », ou décrivez le prospect et l'offre et demandez un pitch deck. Claude revient vers vous avec le lien quand la présentation est prête."
      }
    ],
    "sections": [
      {
        "heading": "Claude Code et autres clients MCP",
        "paragraphs": [
          "Tout client qui parle MCP via Streamable HTTP peut utiliser la même adresse. Dans Claude Code, ajoutez-le avec la CLI (claude mcp add --transport http pitchboost https://app.pitchboost.ai/api/mcp) et terminez la connexion dans la fenêtre du navigateur qui s'ouvre. Cursor et Windsurf acceptent la même URL dans leurs réglages MCP."
        ]
      },
      {
        "heading": "Ce que Claude peut faire avec PitchBoost",
        "paragraphs": [
          "Refaire une présentation importée, vérifier régulièrement la refonte jusqu'à ce qu'elle soit prête, créer une nouvelle présentation à partir d'un brief, lister vos présentations récentes, en récupérer une par son identifiant et publier un brouillon. Il peut aussi créer une présentation d'exemple sans compte. Rien de ce qu'il fait n'est destructif, et il ne change jamais votre offre."
        ]
      }
    ],
    "faqs": [
      {
        "q": "PitchBoost est-il dans l'annuaire des connecteurs de Claude ?",
        "a": "Une inscription à l'annuaire est en cours. En attendant, le connecteur personnalisé ci-dessus est la voie à suivre, et il fonctionne avec toutes les offres claude.ai qui autorisent les connecteurs personnalisés."
      },
      {
        "q": "Est-ce que cela utilise mes crédits ?",
        "a": "Oui, comme dans l'application : une refonte ou une nouvelle présentation coûte 100 crédits jusqu'à 10 diapositives, plus 8 pour chaque diapositive au-delà. Lister et récupérer des présentations est gratuit."
      }
    ],
    "related": ["connect-chatgpt", "redesign-a-powerpoint", "credits-and-plans"],
    "updated": "2026-10-23"
  },

  {
    "slug": "credits-and-plans",
    "category": "account",
    "title": "Comment fonctionnent les crédits et les offres",
    "metaDescription": "Des crédits mensuels avec chaque offre : une présentation jusqu'à 10 diapositives coûte 100 crédits, chaque diapositive au-delà de 10 en ajoute 8. Ce que comprend chaque offre, ce qui se renouvelle chaque mois et comment en acheter davantage.",
    "answer": "Chaque offre PitchBoost comprend une allocation mensuelle de crédits, et chaque action IA a un prix fixe : une présentation (nouvelle ou refaite) jusqu'à 10 diapositives coûte 100 crédits, chaque diapositive au-delà de 10 en ajoute 8 (4 avec le nouveau moteur de présentation), une image IA coûte 10, la modification d'une diapositive 10, la modification de toute la présentation 50, l'analyse d'un site web 10. L'offre gratuite comprend 150 crédits par mois (une présentation), Starter 300, Pro 1 200 et Business 3 300. Les crédits de l'offre se renouvellent chaque mois ; les crédits achetés en pack de recharge (offres payantes) sont reportés. Dans l'application, vous voyez le pourcentage de votre allocation utilisé, jamais un montant en dollars cumulé.",
    "sections": [
      {
        "heading": "Les offres",
        "paragraphs": [
          "Gratuit : 150 crédits par mois, un deal, des présentations jusqu'à 10 diapositives avec un petit badge, un lien de partage en direct avec les statistiques de lecture complètes et les modèles enregistrés. Télécharger un fichier nécessite une offre payante ou un paiement unique de $9 pour cette présentation. Aucune carte bancaire requise.",
          "Starter, $7 par mois : plus de crédits IA, 300 par mois, des deals illimités, des présentations jusqu'à 25 diapositives, aucun badge nulle part, téléchargements PowerPoint, PDF et Google Slides, packs de recharge.",
          "Pro, $29 par mois : encore plus de crédits IA, 1 200 par mois, des présentations jusqu'à 60 diapositives, les domaines personnalisés, l'accès API et MCP.",
          "Business, $79 par mois : notre plus grande allocation de crédits IA, 3 300 par mois, l'export des statistiques et l'envoi depuis votre propre domaine.",
          "Les statistiques de lecture complètes, les modèles enregistrés et les coéquipiers sont inclus dans toutes les offres, y compris l'offre gratuite, sans frais par personne. Tout le monde partage les crédits IA de l'espace de travail.",
          "La facturation annuelle est moins chère : Starter $70 par an (environ $5.83 par mois), Pro $24 et Business $66 par mois en paiement annuel."
        ]
      },
      {
        "heading": "Ce que coûte une présentation",
        "paragraphs": [
          "Une présentation est facturée selon sa taille, d'après ce barème, sans devis avant la création : jusqu'à 10 diapositives, 100 crédits ; chaque diapositive au-delà de 10, 8 de plus (4 avec le nouveau moteur de présentation, dans « Paramètres ») ; chaque image IA, 10. Les documents joints sont inclus jusqu'à environ 10 pages de texte, puis ajoutent environ 1 crédit par page.",
          "Quand une présentation démarre, les crédits correspondant à la taille prévue sont mis de côté, puis le montant est ajusté à ce qui est livré : une présentation plus courte que prévu vous rend la différence. Une présentation de 24 diapositives coûte 212 crédits ; une présentation de 60 diapositives, 500. S'il vous en manque, le message indique ce dont la présentation a besoin et ce qu'il vous reste."
        ]
      },
      {
        "heading": "Report et packs",
        "paragraphs": [
          "Les crédits de l'offre se renouvellent chaque mois, avec toutes les offres, et ceux qui ne sont pas utilisés ne sont pas reportés. Les crédits achetés en pack, eux, le sont. Des packs de recharge de 200 ($5), 700 ($15) et 1 900 ($40) crédits sont disponibles avec les offres payantes et n'expirent jamais tant que vous êtes abonné."
        ]
      },
      {
        "heading": "Ce qui est gratuit",
        "paragraphs": [
          "La vérification des faits, l'extraction des graphiques, la publication, le partage, la consultation des statistiques et le téléchargement des fichiers ne coûtent jamais de crédits. Seule la génération par IA en consomme."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Que se passe-t-il quand je n'ai plus de crédits ?",
        "a": "Les actions IA sont suspendues jusqu'à la période suivante, ou reprennent immédiatement après l'achat d'un pack ou une mise à niveau. Tout ce qui a déjà été généré reste disponible ; les téléchargements et les liens continuent de fonctionner."
      },
      {
        "q": "Comment changer ou résilier mon offre ?",
        "a": "Dans l'application, ouvrez « Paramètres » et choisissez « Offre ». Les changements s'appliquent immédiatement ; en cas de résiliation, vous gardez l'offre payante jusqu'à la fin de la période déjà payée."
      },
      {
        "q": "Puis-je retirer le badge sans abonnement ?",
        "a": "Oui. L'écran de partage propose un retrait unique pour cette présentation. Starter le retire de toutes les présentations."
      }
    ],
    "related": ["slide-limits-by-plan", "download-powerpoint-or-pdf", "share-a-deck-link"],
    "updated": "2026-11-05"
  },

  {
    "slug": "how-long-does-a-deck-take",
    "category": "redesign",
    "title": "Combien de temps prend une présentation, et que faire en attendant",
    "metaDescription": "Une refonte ou une nouvelle présentation prend généralement 2 à 5 minutes, contrôle qualité compris. Vous pouvez fermer l'onglet : PitchBoost vous envoie un lien par e-mail quand la présentation est prête.",
    "answer": "Une refonte ou une nouvelle présentation prend généralement 2 à 5 minutes, y compris un contrôle qualité et une vérification des faits effectués après la rédaction des diapositives. Vous n'avez pas à attendre sur la page : fermez l'onglet et PitchBoost vous envoie par e-mail un lien vers la présentation terminée, avec un aperçu et un téléchargement PowerPoint. La présentation apparaît aussi dans votre tableau de bord dès qu'elle est prête.",
    "sections": [
      {
        "heading": "Ce qui se passe pendant ces minutes",
        "paragraphs": [
          "D'abord, PitchBoost lit votre fichier et la marque récupérée, puis rédige chaque diapositive ; le premier jet apparaît à l'écran en une ou deux minutes. Ensuite, une passe de révision resserre les mises en page et les textes, une passe critique compare la présentation à votre original pour repérer tout ajout inventé ou tout oubli, et des images sont générées là où le design en prévoit. Les présentations longues et celles qui contiennent beaucoup de graphiques prennent plus de temps."
        ]
      },
      {
        "heading": "Si cela semble bloqué",
        "paragraphs": [
          "Actualisez la page ; l'écran de progression reprend à l'état actuel. Si dix minutes passent sans premier jet, la refonte a échoué et aucun crédit n'est facturé. Réessayez, et si elle échoue deux fois, écrivez à support@pitchboost.ai avec le lien du deal pour que nous puissions examiner le fichier exact."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Vais-je recevoir un e-mail même avec l'offre gratuite ?",
        "a": "Oui. Chaque compte reçoit l'e-mail de présentation prête, dans la langue choisie dans l'application au moment de la création de la présentation."
      },
      {
        "q": "Puis-je lancer une autre présentation pendant qu'une est en cours de génération ?",
        "a": "Avec les offres payantes, oui. L'offre gratuite comprend un seul deal : terminez donc la première présentation avant d'en commencer une autre."
      }
    ],
    "related": ["redesign-a-powerpoint", "download-powerpoint-or-pdf", "share-a-deck-link"],
    "updated": "2026-11-10"
  },

  {
    "slug": "brand-from-your-website",
    "category": "redesign",
    "title": "Comment PitchBoost récupère votre marque, et comment la modifier",
    "metaDescription": "PitchBoost récupère votre logo, vos couleurs, vos polices et votre ton sur votre site web en une quinzaine de secondes. Comment vérifier le résultat, remplacer le logo et ajouter des images de produits.",
    "answer": "PitchBoost récupère votre marque sur votre site web : saisissez l'adresse et une analyse de 15 secondes capture votre logo, vos couleurs de marque, vos polices et votre ton. Vous voyez le résultat avant toute génération et pouvez remplacer le logo ou ajouter des images. La refonte est construite à partir de cette marque, et non d'un modèle, si bien que la présentation ressemble à votre entreprise plutôt qu'à un outil de diapositives.",
    "steps": [
      {
        "title": "Saisissez votre site web",
        "body": "À l'étape du site web, collez l'adresse de votre page d'accueil. PitchBoost récupère la page, lit vos services et votre proposition de valeur, et extrait les couleurs, les polices et le logo."
      },
      {
        "title": "Vérifiez la marque récupérée",
        "body": "L'écran suivant montre ce qui a été trouvé. Si le logo n'est pas le bon (le badge d'un partenaire, une icône au lieu du logotype), cliquez sur « Ce n'est pas votre logo ? Remplacez-le » et importez un PNG ou un SVG."
      },
      {
        "title": "Ajoutez des images si vous en avez",
        "body": "Déposez des photos de produits, des portraits ou des captures d'écran. Ce sont elles qui améliorent le plus l'aspect d'une présentation. Tout ce qui ne trouve pas sa place dans la mise en page générée est conservé dans les éléments de marque du deal, pour être utilisé dans l'éditeur."
      }
    ],
    "sections": [
      {
        "heading": "Pas encore de site web",
        "paragraphs": [
          "Choisissez « Je n'ai pas de site web » à l'étape du site web et décrivez plutôt votre activité. PitchBoost choisit une palette et une typographie adaptées à la description, et vous pouvez importer un logo à la main."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Puis-je changer les couleurs après la génération de la présentation ?",
        "a": "Oui, dans l'éditeur, diapositive par diapositive ou pour toute la présentation. La présentation suivante pour la même entreprise réutilise la marque corrigée."
      },
      {
        "q": "Est-ce qu'il copie le texte de mon site web dans la présentation ?",
        "a": "Pour une refonte, non : le contenu vient des diapositives que vous avez importées. Le site web sert pour la marque et le contexte. Pour une nouvelle présentation créée à partir d'un brief, le positionnement de votre site inspire les textes."
      }
    ],
    "related": ["redesign-a-powerpoint", "google-slides-and-keynote", "how-long-does-a-deck-take"],
    "updated": "2026-09-16"
  },

  {
    "slug": "crm-workflow-decks",
    "category": "integrations",
    "title": "Comment créer des présentations à partir de vos workflows CRM",
    "metaDescription": "Installez PitchBoost dans votre CRM, connectez le compte PitchBoost qui paie les présentations et ajoutez l'étape « Create PitchBoost deck » à n'importe quel workflow. Ce qui arrive sur le contact, comment le lien de la présentation passe aux étapes suivantes, et les deux déclencheurs.",
    "answer": "Pour créer des présentations à partir de vos workflows CRM, installez PitchBoost dans le sous-compte depuis le lien d'installation, connectez sur la page qui s'ouvre le compte PitchBoost qui paiera les présentations, puis ajoutez l'étape « Create PitchBoost deck » à n'importe quel workflow. L'étape répond immédiatement avec le lien de la présentation, la présentation elle-même est terminée en deux à quatre minutes environ, et le lien est écrit dans le champ « PitchBoost deck » du contact et dans une note. Deux déclencheurs, « Deck ready » et « Deck viewed », lancent des workflows de relance.",
    "steps": [
      {
        "title": "Installez PitchBoost dans votre CRM",
        "body": "Ouvrez le lien d'installation qui vous a été fourni (ou la fiche PitchBoost dans la place de marché d'applications de votre CRM), cliquez sur « Install », choisissez les sous-comptes et accordez les autorisations demandées. PitchBoost demande uniquement l'accès aux contacts, aux champs personnalisés, aux opportunités, aux informations de l'établissement et aux workflows."
      },
      {
        "title": "Connectez le compte PitchBoost qui paie",
        "body": "Après l'installation, une page PitchBoost s'ouvre et demande à quel compte PitchBoost les présentations sont facturées. Connectez-vous (un compte gratuit fonctionne) et cliquez sur « Connect ». Les présentations créées par n'importe quel workflow des comptes installés utilisent l'allocation de présentations de ce compte."
      },
      {
        "title": "Vérifiez la page PitchBoost dans le menu de gauche",
        "body": "Dans le sous-compte, le menu de gauche comporte désormais une entrée PitchBoost. Elle affiche « Connected » avec le nom du compte, liste les présentations créées par les workflows et propose les options « Disconnect » et « Remove »."
      },
      {
        "title": "Ajoutez l'étape « Create PitchBoost deck » à un workflow",
        "body": "Dans le générateur de workflows, ajoutez une action, ouvrez l'onglet « Apps » et choisissez « Create PitchBoost deck ». Choisissez le type de présentation (pitch deck ou fiche commerciale d'une page), rédigez un court brief comme « Commencer par les tarifs », et laissez les champs de l'entreprise et du site web du prospect associés à l'entreprise et au site web du contact, sauf si vous voulez les remplacer."
      },
      {
        "title": "Utilisez le lien de la présentation dans les étapes suivantes",
        "body": "L'étape renvoie deck_url immédiatement. Ajoutez-le à l'e-mail, au SMS ou à la tâche qui suit ; le lien ouvre une page d'attente pendant la création de la présentation, puis la présentation terminée quand elle est prête. L'étape renvoie aussi status (building, not_linked ou error) et deck_title, pour qu'un workflow puisse bifurquer en cas d'échec."
      },
      {
        "title": "Lancez des relances à partir des deux déclencheurs",
        "body": "Créez un workflow avec le déclencheur « Deck ready » pour envoyer la présentation quand elle est terminée, et un autre avec « Deck viewed » pour relancer quand le prospect l'ouvre. « Deck viewed » se déclenche au maximum une fois toutes les dix minutes par présentation."
      }
    ],
    "sections": [
      {
        "heading": "Ce qui arrive sur le contact",
        "paragraphs": [
          "Quand la création est terminée, PitchBoost écrit le lien de la présentation dans un champ personnalisé nommé « PitchBoost deck » (créé à la première utilisation) et ajoute sur le contact une note avec le lien et le titre de la présentation. La présentation est aussi listée sur la page PitchBoost du menu de gauche.",
          "La présentation est construite à partir du nom et du site web de l'entreprise du contact, et de votre brief. Si le contact n'a pas de site web, PitchBoost travaille uniquement à partir du nom de l'entreprise et du brief : une phrase sur ce que vous vendez et sur qui est le contact fait alors une vraie différence."
        ]
      },
      {
        "heading": "Facturation et limites",
        "paragraphs": [
          "Les présentations sont créées et hébergées par PitchBoost et facturées au compte PitchBoost que vous avez connecté : un compte gratuit comprend une présentation par mois et les offres payantes en ajoutent davantage. Votre CRM peut compter les étapes de workflow des applications installées comme des exécutions premium et les facturer séparément au-delà de son allocation gratuite.",
          "Si l'étape répond avec le statut not_linked, personne n'a encore connecté de compte PitchBoost à ce sous-compte ou à son agence : ouvrez la page PitchBoost dans le menu de gauche et cliquez sur « Connect »."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Plusieurs sous-comptes peuvent-ils partager un même compte PitchBoost ?",
        "a": "Oui. Quand l'application est installée pour toute l'agence, chaque sous-compte est facturé sur le compte PitchBoost connecté de l'agence, sauf si ce sous-compte connecte le sien, qui est alors prioritaire."
      },
      {
        "q": "La présentation change-t-elle quand le contact change ?",
        "a": "Non. Une présentation est créée une seule fois à partir des informations du contact au moment où l'étape s'exécute. Relancez l'étape pour créer une nouvelle présentation ; le champ et la note du contact sont mis à jour avec la plus récente."
      },
      {
        "q": "Quelle est la différence entre « Disconnect » et « Remove » ?",
        "a": "« Disconnect » garde l'application installée mais détache le compte PitchBoost : les étapes de workflow répondent not_linked jusqu'à ce que quelqu'un se connecte à nouveau. « Remove » désinstalle l'application du sous-compte, et les workflows qui contiennent encore ses étapes les ignorent."
      },
      {
        "q": "Puis-je télécharger les présentations ?",
        "a": "Oui. Chaque présentation s'ouvre dans PitchBoost, où elle peut être modifiée et téléchargée en PowerPoint, en PDF ou en Google Slides comme n'importe quelle autre présentation PitchBoost."
      }
    ],
    "related": ["share-a-deck-link", "download-powerpoint-or-pdf", "credits-and-plans"],
    "updated": "2026-10-20"
  }
];
