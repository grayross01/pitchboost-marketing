import type { HelpArticle } from "./help";

/**
 * German (du) translation of lib/help.ts. Slugs match the English articles
 * one to one so hreflang works. Keep in sync: when a fact, price or step
 * changes in help.ts, change it here too and move `updated`.
 * The PitchBoost app has no German interface yet, so its on-screen labels are
 * quoted in English, in „ “ (for example „Redesign a deck“). Labels on Claude's,
 * ChatGPT's and the CRM's screens stay in English too; PowerPoint, Google
 * Slides and Keynote menus use their German names.
 */
export const HELP_ARTICLES_DE: HelpArticle[] = [
  {
    "slug": "redesign-a-powerpoint",
    "category": "redesign",
    "title": "So gestaltest du eine PowerPoint mit PitchBoost neu",
    "metaDescription": "Lade eine .pptx hoch, nenne deine Website, und in wenigen Minuten ist die Präsentation im Design deiner Marke da. Alle Schritte und was aus dem Inhalt wird.",
    "answer": "Um eine PowerPoint in PitchBoost neu zu gestalten, wählst du nach der Anmeldung „Redesign a deck“, lädst die .pptx oder ein PDF der Präsentation hoch (bis 50 MB und 75 Folien), gibst die Website deiner Firma ein, damit PitchBoost dein Logo und deine Farben übernehmen kann, und startest den Neuaufbau. Nach etwa 2 bis 5 Minuten ist die neue Präsentation da, als Web-Präsentation, die du bearbeiten, als Link teilen, als PowerPoint oder PDF herunterladen oder in Google Slides öffnen kannst. Der Inhalt deiner Folien wird übernommen; Layout, Typografie, Abstände und Markenauftritt baut PitchBoost neu auf.",
    "steps": [
      {
        "title": "Anmelden und „Redesign a deck“ wählen",
        "body": "Lege ein kostenloses Konto an oder melde dich an. Mit einem neuen Konto wählst du auf dem ersten Bildschirm „Redesign a deck I have“; danach ist es die Karte „Redesign a deck“ auf der Seite „Home“. Kommst du von einer Redesign-Seite dieser Website, landest du automatisch dort."
      },
      {
        "title": "PowerPoint-Datei oder PDF hochladen",
        "body": "Ziehe die PowerPoint-Datei oder ein PDF der Präsentation hinein oder klicke, um eine Datei auszuwählen. Angenommen werden Dateien bis 50 MB und 75 Folien. Wer mit Keynote oder Google Slides arbeitet, exportiert vorher als .pptx (in beiden Apps ein Klick im Menü)."
      },
      {
        "title": "Website deiner Firma eingeben",
        "body": "PitchBoost scannt sie etwa 15 Sekunden lang und erfasst dein Logo, deine Markenfarben, Schriften und Tonalität. Hat PitchBoost das falsche Logo erwischt, tauschst du es direkt dort aus, bevor die Erstellung startet."
      },
      {
        "title": "Entscheiden, was mit einer langen Präsentation passiert",
        "body": "Hat die Präsentation mehr Folien, als dein Tarif öffnet, baut PitchBoost sie trotzdem neu auf und sperrt die übrigen Folien, bis du sie freischaltest. Oder du lässt sie passend verdichten. Bei den meisten Präsentationen unter dem Limit entfällt dieser Schritt."
      },
      {
        "title": "Neuaufbau starten, dann warten oder gehen",
        "body": "Auf der Seite „Home“ drückst du den Pfeil im Eingabefeld, auf dem ersten Bildschirm eines neuen Kontos klickst du auf „Generate“. Der Neuaufbau dauert meist 2 bis 5 Minuten, inklusive Qualitätsprüfung. Du kannst zusehen, wie die Folien eintrudeln, oder den Tab schließen: PitchBoost schickt dir per E-Mail einen Link zur fertigen Präsentation."
      },
      {
        "title": "Prüfen, bearbeiten, teilen",
        "body": "Öffne eine beliebige Folie im Editor, um direkt darauf zu schreiben, Elemente zu verschieben oder die KI um eine Änderung zu bitten. In der Teilen-Ansicht veröffentlichst du die Präsentation als nicht gelisteten Link, lädst sie als PowerPoint oder PDF herunter oder öffnest sie in Google Slides."
      }
    ],
    "sections": [
      {
        "heading": "Was sich ändert und was nicht",
        "paragraphs": [
          "Der Inhalt jeder Folie wird übernommen: Titel, Fließtext, Zahlen, Diagrammwerte und die Gliederung für den Vortrag. Neu aufgebaut wird alles Visuelle: Layout, Hierarchie, Typografie, Farbe, Abstände und Bildsprache, und zwar im Design deiner Marke, so wie PitchBoost es auf deiner Website erfasst hat.",
          "Überladene Folien werden umgebaut, nicht geschrumpft. Aus einer Bullet-Point-Wüste wird ein Layout, das zum Inhalt passt (Schritte, ein Vergleich, ein Raster). Ein Faktencheck vergleicht die neu aufgebaute Präsentation mit deinem Original und markiert oder entfernt, was sich dort nicht wiederfinden lässt."
        ]
      },
      {
        "heading": "Folienlimits nach Tarif",
        "paragraphs": [
          "Der Free-Tarif öffnet die ersten 10 Folien einer Präsentation, Starter bis zu 25 und Pro bis zu 60. Eine längere Präsentation wird trotzdem neu aufgebaut (im Free-Tarif bis zu 20 Folien), die übrigen Folien sind dann gesperrt. Oder sie lässt sich vor dem Neuaufbau passend verdichten. Die Teilen-Ansicht zeigt dir, welche Folien gesperrt sind und wie du sie öffnest."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Funktioniert das auch mit .ppt-Dateien?",
        "a": "Lade eine .pptx-Datei hoch. Eine alte .ppt öffnest du in PowerPoint und wandelst sie mit „Speichern unter“ um."
      },
      {
        "q": "Kann ich nur einzelne Folien neu gestalten?",
        "a": "Der Neuaufbau läuft über die ganze Präsentation. Danach ist jede Folie bearbeitbar, und im Editor kannst du einzelne Folien neu generieren oder wiederherstellen."
      },
      {
        "q": "Was kostet das?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine KI-Präsentation mit bis zu 10 Folien und kleinem PitchBoost-Badge. Starter kostet 7 $ im Monat, für bis zu 25 Folien und ohne Badge; Pro kostet 29 $ im Monat, für bis zu 60 Folien und mit eigenen Domains."
      }
    ],
    "related": ["google-slides-and-keynote", "slide-limits-by-plan", "download-powerpoint-or-pdf", "how-long-does-a-deck-take"],
    "updated": "2026-11-25"
  },

  {
    "slug": "google-slides-and-keynote",
    "category": "redesign",
    "title": "So gestaltest du Präsentationen aus Google Slides oder Keynote neu",
    "metaDescription": "Google Slides und Keynote exportieren in einem Schritt als .pptx. Lade die Datei bei PitchBoost hoch und hol dir die Präsentation im Design deiner Marke zurück.",
    "answer": "PitchBoost nimmt PowerPoint-Dateien (.pptx) und PDFs an. Google Slides und Keynote exportieren beide in einem Schritt als .pptx, und Text, Bilder und Diagramme bleiben dabei erhalten. Exportiere die Datei, lade sie bei PitchBoost hoch, und das Redesign läuft genauso wie bei einer PowerPoint-Präsentation.",
    "steps": [
      {
        "title": "Google Slides: „Datei > Herunterladen > Microsoft PowerPoint (.pptx)“",
        "body": "Der Download ist eine vollständige Kopie der Präsentation. Vortragsnotizen und Diagramme kommen mit, eingebettete Videos nicht."
      },
      {
        "title": "Keynote: „Ablage > Exportieren > PowerPoint“",
        "body": "Behalte die Standardeinstellungen bei. Keynote wandelt seine Layouts und Texte in PowerPoint-Objekte um, die PitchBoost lesen kann."
      },
      {
        "title": "Die .pptx bei PitchBoost hochladen",
        "body": "Melde dich an, wähle „Redesign a deck“ und ziehe die exportierte Datei hinein. Gib dann deine Website an, damit der Neuaufbau im Design deiner Marke entsteht."
      }
    ],
    "sections": [
      {
        "heading": "Danach zurück zu Google Slides oder Keynote",
        "paragraphs": [
          "In der Teilen-Ansicht legt die Zeile „Google Slides“ unter „Download“ eine bearbeitbare Kopie der Präsentation in deinem Google Drive ab, bereit zum Öffnen in Google Slides (beim ersten Mal fragt Google, ob du das erlaubst). Für Keynote lädst du die bearbeitbare PowerPoint-Datei („Editable PowerPoint“) herunter: Keynote öffnet .pptx direkt. Jedes Wort bleibt bearbeitbar. Der Link zur Web-Präsentation funktioniert auch für sich allein, ganz ohne App."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Überleben meine Schriften aus Google Slides?",
        "a": "Das Redesign ersetzt die Schriften der Präsentation durch die Typografie deiner Marke, die PitchBoost von deiner Website übernimmt. Die ursprünglichen Schriften brauchst du also nicht."
      },
      {
        "q": "Kann ich stattdessen ein PDF hochladen?",
        "a": "Ja. Lade ein PDF der Präsentation genauso hoch: PitchBoost liest jede Seite, auch Diagramme, Tabellen und Folien, die nur aus Bildern bestehen, und baut die Präsentation im Design deiner Marke neu auf. Ein passwortgeschütztes PDF musst du vorher entsperren."
      }
    ],
    "related": ["redesign-a-powerpoint", "download-powerpoint-or-pdf", "brand-from-your-website"],
    "updated": "2026-11-10"
  },

  {
    "slug": "slide-limits-by-plan",
    "category": "redesign",
    "title": "Wie viele Folien PitchBoost in jedem Tarif neu aufbaut",
    "metaDescription": "Free öffnet die ersten 10 Folien einer Präsentation, Starter bis zu 25, Pro und Business bis zu 60. Längere Präsentationen werden trotzdem aufgebaut: Die übrigen Folien bleiben gesperrt, bis du sie freischaltest.",
    "answer": "Der Free-Tarif öffnet die ersten 10 Folien einer Präsentation, Starter bis zu 25, Pro und Business bis zu 60. Eine längere Präsentation wird trotzdem neu aufgebaut, im Free-Tarif bis zu 20 Folien: Die Folien über deinem Limit sind fertig, aber gesperrt. Sie öffnen sich mit einem kostenpflichtigen Tarif oder mit einer einmaligen Zahlung für diese Präsentation (9 $ für Präsentationen bis 25 Folien, 19 $ bis 60). Wenn dir eine kürzere Präsentation lieber ist, kann PitchBoost sie stattdessen passend zu deinem Limit verdichten.",
    "sections": [
      {
        "heading": "Die Limits",
        "paragraphs": [
          "Free: Die ersten 10 Folien jeder Präsentation sind offen, eine Präsentation kann bis zu 20 Folien haben, 150 Credits im Monat (genug für eine KI-Präsentation). Starter (7 $ im Monat): bis zu 25 Folien. Pro (29 $ im Monat) und Business (79 $ im Monat): bis zu 60 Folien. Das Limit gilt für die Präsentation, die PitchBoost erstellt, nicht für die Datei, die du hochlädst; eine Präsentation mit 45 Folien kannst du in jedem Tarif hochladen. Die Datei selbst darf bis zu 75 Folien haben."
        ]
      },
      {
        "heading": "Gesperrte Folien oder eine kürzere Präsentation",
        "paragraphs": [
          "Liegt eine Präsentation über deinem Limit, baut PitchBoost sie trotzdem auf. Die Folien innerhalb deines Limits sind offen; die übrigen sind ebenfalls fertig und werden unscharf mit einem Schloss angezeigt. Der kostenlose Link zeigt allen die offenen Folien, und alle Folien, sobald du freischaltest. Freischalten kannst du in der Teilen-Ansicht: mit einem Tarif, dessen Limit die Präsentation abdeckt, oder mit einer einmaligen Zahlung für diese Präsentation, die auch die Downloads als PowerPoint, PDF und Google Slides bringt und das Badge entfernt.",
          "Lieber eine kürzere Präsentation? Vor dem Aufbau kannst du stattdessen wählen, sie auf dein Limit zu verdichten („Condense“). Verdichten behält den roten Faden und schreibt Folien so um, dass alles hineinpasst. Das passt zu einem Pitch: Die meisten überzeugenden Pitch-Decks haben 10 bis 15 Folien. Behalte alle Folien, wenn die Präsentation eine Abfolge ist (ein Schulungsmodul, ein Prozess Schritt für Schritt), bei der die Reihenfolge mehr zählt als die Länge."
        ]
      },
      {
        "heading": "Sehr lange Präsentationen",
        "paragraphs": [
          "PitchBoost nimmt PowerPoint-Dateien mit bis zu 75 Folien an und liest die ersten 60. Eine Präsentation mit 70 Folien kommt im Pro-Tarif also mit höchstens 60 Folien zurück. Im Free-Tarif endet eine Präsentation bei 20 Folien: Aus einer längeren Datei baut PitchBoost die ersten 20 auf, oder du wechselst vorher den Tarif und es baut bis zum Limit dieses Tarifs neu auf. Eine Datei mit mehr als 75 Folien wird schon beim Hochladen abgelehnt, mit einem entsprechenden Hinweis. Teile sehr lange Präsentationen in Module auf und lass jedes einzeln neu aufbauen."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Öffnen sich gesperrte Folien bei einem Upgrade?",
        "a": "Ja, sofort: Sie sind schon fertig. Anders ist es bei einer Präsentation, die verdichtet oder im Free-Tarif bei 20 Folien gekürzt wurde: Öffne nach dem Upgrade den Deal und starte den Neuaufbau noch einmal; in der Teilen-Ansicht gibt es dafür einen Button."
      },
      {
        "q": "Gilt das Limit auch für neue Präsentationen?",
        "a": "Ja. Für eine Präsentation, die aus einem Briefing entsteht, gilt dasselbe Folienlimit deines Tarifs."
      },
      {
        "q": "Zählt eine verdichtete Präsentation als vollwertige Präsentation?",
        "a": "Ja. Ein Neuaufbau ist eine KI-Präsentation und wird nach Länge berechnet: 100 Credits bis 10 Folien, plus 8 für jede weitere Folie."
      }
    ],
    "related": ["redesign-a-powerpoint", "credits-and-plans", "download-powerpoint-or-pdf"],
    "updated": "2026-11-25"
  },

  {
    "slug": "download-powerpoint-or-pdf",
    "category": "output",
    "title": "So lädst du deine Präsentation als PowerPoint oder PDF herunter",
    "metaDescription": "Bearbeitbare oder originalgetreue PowerPoint oder PDF: in jedem kostenpflichtigen Tarif oder für 9 $ pro Präsentation. Wo die Buttons sind, welche Datei passt.",
    "answer": "Öffne die Teilen-Ansicht der Präsentation und nutze die Download-Buttons: „Download PowerPoint“ liefert eine originalgetreue .pptx, in der jede Folie ein Bild der Web-Präsentation ist. „Editable PowerPoint“ liefert eine .pptx, die aussieht wie die Web-Präsentation und in der jedes Wort in einem echten PowerPoint-Textfeld steht, das du ändern kannst. „PDF“ liefert eine Seite pro Folie. Downloads sind in jedem kostenpflichtigen Tarif enthalten. Im Free-Tarif bleibt das Teilen als Live-Link kostenlos, und du kannst die Downloads für eine Präsentation einmalig für 9 $ freischalten (Präsentationen bis 25 Folien); damit verschwindet auch das Badge.",
    "steps": [
      {
        "title": "Präsentation öffnen",
        "body": "Öffne in deinem Dashboard den Deal und klicke auf die Präsentation. Die Teilen-Ansicht zeigt die Vorschau und daneben die Buttons zum Herunterladen und Veröffentlichen."
      },
      {
        "title": "Passende Datei wählen",
        "body": "„Editable PowerPoint“ für alles, woran du weiterarbeiten willst. Die originalgetreue PowerPoint („Download PowerPoint“), wenn die Präsentation auf einem fremden Rechner genauso aussehen muss wie die Web-Version. „PDF“ für E-Mail-Anhänge und zum Drucken."
      },
      {
        "title": "Auf die Datei warten",
        "body": "Während die Datei erstellt wird, zeigt der Button „Preparing…“, meist nur ein paar Sekunden lang. Der Download startet automatisch."
      }
    ],
    "sections": [
      {
        "heading": "Bearbeitbar oder originalgetreu",
        "paragraphs": [
          "Die bearbeitbare PowerPoint-Datei sieht aus wie die Web-Präsentation: Das Design jeder Folie (Hintergrund, Bilder, Formen und Diagramme) kommt als ein Bild, und jedes Wort liegt darüber in einem echten PowerPoint-Textfeld, das du bearbeiten, verschieben oder umformatieren kannst. Die Datei bringt die Schriften der Präsentation mit, deshalb sieht sie in PowerPoint auch auf einem Rechner gleich aus, auf dem diese Schriften fehlen. Die originalgetreue Datei ist pixelgenau, weil jede Folie ein einziges hochaufgelöstes Bild ist; deshalb lässt sich ihr Text auch nicht bearbeiten. Im Zweifel nimm beide: Sind die Downloads einer Präsentation einmal freigeschaltet, kostet keine Datei extra."
        ]
      },
      {
        "heading": "Das Badge",
        "paragraphs": [
          "Im Free-Tarif trägt jede Folie ein kleines Badge „Powered by PitchBoost“, auch im Live-Link. Starter (7 $ im Monat) entfernt es aus jeder Präsentation und jedem Export. Für eine einzelne Präsentation geht das auch mit einem einmaligen Kauf für 9 $ in der Teilen-Ansicht, der zugleich die Downloads dieser Präsentation freischaltet."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Kann ich herunterladen, ohne zu veröffentlichen?",
        "a": "Ja. Downloads funktionieren auch bei einem privaten Entwurf. Veröffentlichen brauchst du nur für den Web-Link."
      },
      {
        "q": "Sind die Schriften in der bearbeitbaren PowerPoint-Datei eingebettet?",
        "a": "Ja. Die bearbeitbare PowerPoint-Datei enthält die Schriften der Präsentation, deshalb sieht sie auch auf einem Rechner gleich aus, auf dem diese nicht installiert sind. Die originalgetreue Datei braucht sie gar nicht, weil ihre Folien Bilder sind."
      },
      {
        "q": "Gibt es einen Export nach Google Slides?",
        "a": "Ja. In der Teilen-Ansicht legt die Zeile „Google Slides“ unter „Download“ eine bearbeitbare Kopie der Präsentation in deinem Google Drive ab, bereit zum Öffnen in Google Slides. Der Export ist in denselben Tarifen enthalten wie die Downloads als PowerPoint und PDF."
      }
    ],
    "related": ["share-a-deck-link", "google-slides-and-keynote", "credits-and-plans"],
    "updated": "2026-11-19"
  },

  {
    "slug": "share-a-deck-link",
    "category": "sharing",
    "title": "So teilst du eine Präsentation als Link und siehst, wer sie öffnet",
    "metaDescription": "Jede fertige Präsentation hat einen nicht gelisteten Link. Verschicke ihn und erfahre sofort, wenn er geöffnet wird. Was der Link erfasst, in jedem Tarif.",
    "answer": "Eine fertige Präsentation wird von selbst veröffentlicht: Öffne ihre Teilen-Ansicht und klicke auf „Copy link“. Der Link ist nicht gelistet (wer ihn hat, kann die Präsentation ansehen; sonst findet sie niemand). Sobald jemand den Link öffnet, schickt dir PitchBoost eine E-Mail. In jedem Tarif siehst du, welche Folien jede Person gelesen hat und wie lange.",
    "steps": [
      {
        "title": "Link kopieren",
        "body": "Sobald eine Präsentation fertig ist, veröffentlicht PitchBoost sie als nicht gelisteten Link. Klicke in der Teilen-Ansicht auf „Copy link“. Bei einer Präsentation, die du privat gestellt hast, steht dort stattdessen „Publish & copy link“."
      },
      {
        "title": "Link verschicken oder Empfänger hinzufügen",
        "body": "Füge den Link ein, wo du willst. Für Tracking mit Namen fügst du im Deal Empfänger hinzu: Jede Person bekommt einen persönlichen Link, damit du genau weißt, wer was geöffnet hat."
      },
      {
        "title": "Den Deal im Blick behalten",
        "body": "Du bekommst eine E-Mail, sobald die Präsentation geöffnet wird. Die Deal-Seite zeigt jeden Besuch, mit der Zeit pro Folie und den übersprungenen Folien."
      },
      {
        "title": "Offline nehmen, wann du willst",
        "body": "„Make private“ in der Teilen-Ansicht legt den Link still, bis du die Präsentation wieder veröffentlichst."
      }
    ],
    "sections": [
      {
        "heading": "Der Deal-Raum",
        "paragraphs": [
          "Der Link öffnet eine Seite mit der Präsentation und allem, was du sonst noch an den Deal gehängt hast (etwa einen One-Pager oder ein Q&A). Wer die Seite ansieht, kann dort eine Frage stellen; sie landet in deinem Posteingang, samt E-Mail-Adresse, falls eine angegeben wurde. Zu sehen ist dabei die Präsentation, aber weder deine Notizen noch der Rest deines Kontos."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Kann ich für den Link meine eigene Domain verwenden?",
        "a": "Eigene Domains sind in Pro und Business enthalten. Bei Free und Starter laufen die Links über app.pitchboost.ai."
      },
      {
        "q": "Brauche ich die E-Mail-Adresse der Person, um Aufrufe zu verfolgen?",
        "a": "Nein. Jeder Aufruf wird über den Link selbst erfasst. Wenn du Empfänger hinzufügst, bekommt jede Person einen eigenen Link, und die Statistiken zeigen Namen."
      },
      {
        "q": "Läuft der Link ab?",
        "a": "Nein. Er funktioniert, bis du die Präsentation auf privat stellst oder den Deal löschst."
      }
    ],
    "related": ["download-powerpoint-or-pdf", "credits-and-plans", "redesign-a-powerpoint"],
    "updated": "2026-11-25"
  },

  {
    "slug": "connect-chatgpt",
    "category": "assistants",
    "title": "So nutzt du PitchBoost in ChatGPT",
    "metaDescription": "Füge das PitchBoost-Plugin in ChatGPT hinzu, melde dich einmal an und lass Präsentationen neu gestalten oder erstellen. Geht auch mit kostenlosem ChatGPT.",
    "answer": "PitchBoost ist ein Plugin im Plugin-Verzeichnis von ChatGPT und funktioniert auch mit kostenlosen ChatGPT-Konten. Füge es hinzu, melde dich einmal bei PitchBoost an (ein kostenloses Konto reicht) und sprich dann ganz normal mit ChatGPT: Hänge eine .pptx an und schreibe „Lass das professionell aussehen“, oder beschreibe die Präsentation, die du brauchst. ChatGPT gibt den Auftrag an PitchBoost weiter und antwortet mit einem Link zur fertigen Präsentation; öffne sie in PitchBoost für die vollständige Vorschau und die Downloads als PowerPoint und PDF.",
    "steps": [
      {
        "title": "PitchBoost-Plugin hinzufügen",
        "body": "Öffne in ChatGPT das Plugin-Verzeichnis, suche nach PitchBoost und füge es hinzu. Es ist mit kostenlosen ChatGPT-Konten genauso verfügbar wie mit bezahlten Abos."
      },
      {
        "title": "Bei PitchBoost anmelden",
        "body": "Beim ersten Mal öffnet ChatGPT ein Anmeldefenster von PitchBoost. Melde dich an oder lege ein kostenloses Konto an. Das machst du nur einmal; ChatGPT merkt sich die Verbindung."
      },
      {
        "title": "Präsentation anhängen und fragen",
        "body": "Hänge in einem Chat deine .pptx an (Google Slides und Keynote exportieren in einem Schritt als .pptx) und schreibe, was du willst: „Gestalte das im Design unserer Marke neu“, „Lass mein Referat professionell aussehen“, oder beschreibe eine ganz neue Präsentation. Für Redesigns nutzt PitchBoost die Marke, die in deinem PitchBoost-Konto gespeichert ist."
      },
      {
        "title": "Präsentation in PitchBoost öffnen",
        "body": "Ein paar Minuten später antwortet ChatGPT mit dem Link. Klicke auf „Open the deck in PitchBoost“, um die vollständige Vorschau zu sehen, die bearbeitbare PowerPoint-Datei oder ein PDF herunterzuladen und den Link mit Tracking zu teilen."
      }
    ],
    "sections": [
      {
        "heading": "Was ChatGPT mit PitchBoost kann",
        "paragraphs": [
          "Eine angehängte Präsentation neu aufbauen, prüfen, ob ein Neuaufbau fertig ist, eine neue Präsentation aus einem Briefing erstellen, deine letzten Präsentationen auflisten, den Link zu einer davon holen und einen Entwurf veröffentlichen. Außerdem kann ChatGPT schon vor deiner Anmeldung eine Beispielpräsentation mit Badge erstellen, die du später in dein Konto übernehmen kannst.",
          "ChatGPT kann weder deinen Tarif ändern noch etwas löschen noch Präsentationen außerhalb deines Kontos sehen. Neu aufgebaute und neue Präsentationen verbrauchen dasselbe monatliche Kontingent wie in der App: im Free-Tarif 150 Credits im Monat, genug für eine Präsentation mit bis zu 10 Folien."
        ]
      },
      {
        "heading": "Wenn du lieber die MCP-Adresse nutzt",
        "paragraphs": [
          "Das Plugin läuft über den MCP-Server von PitchBoost. Wer es von Hand verbinden will, im Entwicklermodus von ChatGPT oder in einem anderen MCP-Client, nutzt https://app.pitchboost.ai/api/mcp mit OAuth; die Details stehen im Artikel zu Claude."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Funktioniert das Plugin mit einem kostenlosen ChatGPT-Konto?",
        "a": "Ja. Füge es wie jedes andere Plugin aus dem Plugin-Verzeichnis hinzu. Ein kostenloses PitchBoost-Konto reicht auch, mit 150 Credits im Monat, genug für eine Präsentation."
      },
      {
        "q": "Wo landet die neu aufgebaute Präsentation?",
        "a": "In deinem PitchBoost-Konto, in einem Deal, der nach der Präsentation benannt ist. Der Link von ChatGPT öffnet sie direkt; dort kannst du sie bearbeiten, herunterladen und teilen wie jede andere Präsentation."
      },
      {
        "q": "Wird der Inhalt meiner Präsentation an PitchBoost gesendet?",
        "a": "Ja. Der Folieninhalt, den ChatGPT ausliest, geht an PitchBoost, damit die Präsentation neu aufgebaut werden kann, und wird mit dem Ergebnis in deinem Konto gespeichert. Wie lange Daten aufbewahrt und wie sie gelöscht werden, erklärt die Datenschutzerklärung."
      }
    ],
    "related": ["connect-claude", "redesign-a-powerpoint", "credits-and-plans"],
    "updated": "2026-11-17"
  },

  {
    "slug": "connect-claude",
    "category": "assistants",
    "title": "So nutzt du PitchBoost in Claude",
    "metaDescription": "Füge PitchBoost in Claude als eigenen Connector hinzu, melde dich an und lass Präsentationen neu gestalten oder erstellen. Für claude.ai und Claude Code.",
    "answer": "Füge PitchBoost in Claude als eigenen Connector mit der URL https://app.pitchboost.ai/api/mcp hinzu, melde dich an, wenn du dazu aufgefordert wirst, und bitte Claude dann, eine hochgeladene Präsentation neu aufzubauen oder eine neue für eine Firma zu erstellen, die du gewinnen willst. Claude ruft PitchBoost über das Model Context Protocol (MCP) auf und gibt dir den Link zur fertigen Präsentation.",
    "steps": [
      {
        "title": "Connector-Einstellungen öffnen",
        "body": "Gehe auf claude.ai zu „Settings“, dann zu „Connectors“, und klicke auf „Add custom connector“. In einem Team- oder Enterprise-Tarif muss ihn eventuell ein Admin für die Organisation hinzufügen."
      },
      {
        "title": "PitchBoost-Server hinzufügen",
        "body": "Name: PitchBoost. URL: https://app.pitchboost.ai/api/mcp. Lass die Felder für den OAuth-Client leer; PitchBoost registriert den Client automatisch. Dann speichern."
      },
      {
        "title": "Konto verbinden",
        "body": "Klicke neben PitchBoost auf „Connect“. Ein Anmeldefenster von PitchBoost öffnet sich; melde dich an oder lege ein kostenloses Konto an. Claude merkt sich die Verbindung."
      },
      {
        "title": "Präsentation anfordern",
        "body": "Achte in einem Chat darauf, dass PitchBoost im Tools-Menü aktiviert ist. Hänge eine .pptx an und schreibe „Bau das im Design unserer Marke neu auf“, oder beschreibe die Firma, die du gewinnen willst, samt deinem Angebot, und bitte um ein Pitch-Deck. Sobald die Präsentation fertig ist, meldet sich Claude mit dem Link."
      }
    ],
    "sections": [
      {
        "heading": "Claude Code und andere MCP-Clients",
        "paragraphs": [
          "Jeder Client, der MCP über Streamable HTTP spricht, kann dieselbe Adresse nutzen. In Claude Code fügst du sie über die CLI hinzu (claude mcp add --transport http pitchboost https://app.pitchboost.ai/api/mcp) und schließt die Anmeldung im Browserfenster ab, das sich dabei öffnet. Cursor und Windsurf nehmen dieselbe URL in ihren MCP-Einstellungen."
        ]
      },
      {
        "heading": "Was Claude mit PitchBoost kann",
        "paragraphs": [
          "Eine hochgeladene Präsentation neu aufbauen, den Neuaufbau abfragen, bis er fertig ist, eine neue Präsentation aus einem Briefing erstellen, deine letzten Präsentationen auflisten, eine davon per ID abrufen und einen Entwurf veröffentlichen. Claude kann auch ohne Konto eine Beispielpräsentation erstellen. Keine dieser Aktionen löscht etwas, und deinen Tarif ändert Claude nicht."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Ist PitchBoost im Connector-Verzeichnis von Claude?",
        "a": "Ein Eintrag im Verzeichnis ist in Arbeit. Bis er erscheint, führt der Weg über den eigenen Connector wie oben beschrieben, und das funktioniert in jedem claude.ai-Tarif, der eigene Connectors erlaubt."
      },
      {
        "q": "Verbraucht das meine Credits?",
        "a": "Ja, genau wie in der App: Ein Neuaufbau oder eine neue Präsentation kostet 100 Credits bis 10 Folien, plus 8 für jede weitere Folie. Präsentationen auflisten und abrufen ist kostenlos."
      }
    ],
    "related": ["connect-chatgpt", "redesign-a-powerpoint", "credits-and-plans"],
    "updated": "2026-10-23"
  },

  {
    "slug": "credits-and-plans",
    "category": "account",
    "title": "So funktionieren Credits und Tarife",
    "metaDescription": "Jeder Tarif hat monatliche Credits: 100 pro Präsentation bis 10 Folien, 8 für jede Folie über 10. Was jeder Tarif enthält, was verfällt und wie du nachkaufst.",
    "answer": "Jeder PitchBoost-Tarif enthält ein monatliches Credit-Kontingent, und jede KI-Aktion hat einen festen Preis: Eine Präsentation (neu oder neu aufgebaut) mit bis zu 10 Folien kostet 100 Credits, jede Folie über 10 kostet 8 mehr (4 mit der neuen Präsentations-Engine), ein KI-Bild 10, eine Änderung an einer Folie 10, an der ganzen Präsentation 50, ein Website-Scan 10. Free enthält 150 Credits im Monat (genug für eine Präsentation), Starter 300, Pro 1.500 und Business 4.400. Die Tarif-Credits werden jeden Monat zurückgesetzt; Credits aus einem Credit-Paket (in kostenpflichtigen Tarifen) bleiben erhalten. In der App siehst du, wie viel Prozent deines Kontingents verbraucht sind, aber keinen laufenden Dollarbetrag.",
    "sections": [
      {
        "heading": "Die Tarife",
        "paragraphs": [
          "Free: 150 Credits im Monat, ein Deal, Präsentationen mit bis zu 10 Folien und kleinem Badge, ein Live-Link zum Teilen mit vollständigen Aufrufstatistiken sowie gespeicherte Vorlagen. Für einen Download brauchst du einen kostenpflichtigen Tarif oder zahlst einmalig 9 $ für die jeweilige Präsentation. Keine Kreditkarte nötig.",
          "Starter, 7 $ im Monat: mehr KI-Credits, 300 im Monat, unbegrenzt viele Deals, Präsentationen mit bis zu 25 Folien, nirgends ein Badge, Downloads als PowerPoint, PDF und Google Slides, Credit-Pakete.",
          "Pro, 29 $ im Monat: noch mehr KI-Credits, 1.500 im Monat, Präsentationen mit bis zu 60 Folien, eigene Domains, Zugang zu API und MCP.",
          "Business, 79 $ im Monat: unser größtes KI-Credit-Kontingent, 4.400 im Monat, Export der Statistiken und Versand über deine eigene Domain.",
          "Vollständige Aufrufstatistiken, gespeicherte Vorlagen und Teammitglieder gibt es in jedem Tarif, auch in Free, ohne Kosten pro Person. Alle teilen sich die KI-Credits des Arbeitsbereichs.",
          "Jährliche Abrechnung ist günstiger: Starter 70 $ im Jahr (etwa 5,83 $ im Monat), Pro 24 $ und Business 66 $ im Monat bei jährlicher Zahlung."
        ]
      },
      {
        "heading": "Was eine Präsentation kostet",
        "paragraphs": [
          "Der Preis einer Präsentation richtet sich nach ihrer Größe, nach dieser Liste, ohne Kostenschätzung vorab: Bis 10 Folien sind es 100 Credits; jede Folie über 10 kostet 8 mehr (4 mit der neuen Präsentations-Engine unter „Settings“); jedes KI-Bild kostet 10. Angehängte Dokumente sind bis etwa 10 Seiten Text inklusive, danach kommt etwa 1 Credit pro Seite dazu.",
          "Wenn eine Präsentation startet, werden die Credits für die erwartete Größe reserviert, und abgerechnet wird, was am Ende geliefert wird: Fällt eine Präsentation kürzer aus, bekommst du die Differenz zurück. Eine Präsentation mit 24 Folien kostet 212 Credits, eine mit 60 Folien 500. Reichen deine Credits nicht, sagt dir die Meldung, wie viele die Präsentation braucht und wie viele du noch hast."
        ]
      },
      {
        "heading": "Übertrag und Credit-Pakete",
        "paragraphs": [
          "Die Credits deines Tarifs werden jeden Monat zurückgesetzt, in allen Tarifen, und nicht genutzte verfallen. Credits aus einem Paket dagegen bleiben erhalten. Credit-Pakete mit 200 (5 $), 700 (15 $) und 1.900 (40 $) Credits gibt es in kostenpflichtigen Tarifen, und sie verfallen nicht, solange du ein Abo hast."
        ]
      },
      {
        "heading": "Was kostenlos ist",
        "paragraphs": [
          "Keine Credits kosten: Faktencheck, Auslesen von Diagrammen, Veröffentlichen, Teilen, Statistiken ansehen und Dateien herunterladen. Credits kostet nur, was die KI erzeugt."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Was passiert, wenn meine Credits aufgebraucht sind?",
        "a": "KI-Aktionen pausieren bis zum nächsten Abrechnungszeitraum oder bis du ein Paket kaufst oder in einen höheren Tarif wechselst; dann geht es sofort weiter. Alles, was schon erstellt wurde, bleibt verfügbar; Downloads und Links funktionieren weiter."
      },
      {
        "q": "Wie ändere oder kündige ich meinen Tarif?",
        "a": "Öffne in der App „Settings“ und wähle „Plan“. Änderungen gelten sofort; nach einer Kündigung behältst du den bezahlten Tarif bis zum Ende des Zeitraums, den du schon bezahlt hast."
      },
      {
        "q": "Kann ich das Badge ohne Abo entfernen?",
        "a": "Ja. In der Teilen-Ansicht kannst du es für diese eine Präsentation mit einem einmaligen Kauf entfernen. Starter entfernt es aus jeder Präsentation."
      }
    ],
    "related": ["slide-limits-by-plan", "download-powerpoint-or-pdf", "share-a-deck-link"],
    "updated": "2026-11-23"
  },

  {
    "slug": "how-long-does-a-deck-take",
    "category": "redesign",
    "title": "Wie lange eine Präsentation dauert und was du bis dahin tun kannst",
    "metaDescription": "Neuaufbau oder neue Präsentation: meist 2 bis 5 Minuten samt Qualitätsprüfung. Schließe ruhig den Tab, PitchBoost mailt dir den Link, wenn alles fertig ist.",
    "answer": "Ein Neuaufbau oder eine neue Präsentation dauert meist 2 bis 5 Minuten, inklusive Qualitätsprüfung und Faktencheck, die nach dem Entwurf der Folien laufen. Du musst nicht auf der Seite warten: Schließe den Tab, und PitchBoost schickt dir per E-Mail einen Link zur fertigen Präsentation, mit Vorschau und PowerPoint-Download. Außerdem erscheint die Präsentation in deinem Dashboard, sobald sie fertig ist.",
    "sections": [
      {
        "heading": "Was in diesen Minuten passiert",
        "paragraphs": [
          "Zuerst liest PitchBoost deine Datei und die erfasste Marke und entwirft jede Folie; der erste Entwurf erscheint nach ein, zwei Minuten auf dem Bildschirm. Dann strafft eine Überarbeitungsrunde Layouts und Texte, eine Prüfrunde gleicht die Präsentation mit deinem Original ab und sucht nach allem, was erfunden oder weggefallen ist, und wo das Design es verlangt, entstehen Bilder. Längere Präsentationen und solche mit vielen Diagrammen brauchen länger."
        ]
      },
      {
        "heading": "Wenn es zu hängen scheint",
        "paragraphs": [
          "Lade die Seite neu; die Fortschrittsanzeige macht beim aktuellen Stand weiter. Vergehen zehn Minuten ohne Entwurf, ist der Neuaufbau fehlgeschlagen, und es werden keine Credits berechnet. Versuche es noch einmal, und wenn es zweimal scheitert, schreibe an support@pitchboost.ai und schicke den Link zum Deal mit, damit wir uns genau diese Datei ansehen können."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Bekomme ich auch im Free-Tarif eine E-Mail?",
        "a": "Ja. Jedes Konto bekommt die E-Mail, dass die Präsentation fertig ist, in der Sprache, auf die die App beim Erstellen der Präsentation eingestellt war."
      },
      {
        "q": "Kann ich eine weitere Präsentation starten, während eine noch entsteht?",
        "a": "In kostenpflichtigen Tarifen ja. Der Free-Tarif enthält einen Deal, also warte, bis die erste Präsentation fertig ist, bevor du eine weitere startest."
      }
    ],
    "related": ["redesign-a-powerpoint", "download-powerpoint-or-pdf", "share-a-deck-link"],
    "updated": "2026-11-10"
  },

  {
    "slug": "brand-from-your-website",
    "category": "redesign",
    "title": "Wie PitchBoost deine Marke erfasst und wie du sie änderst",
    "metaDescription": "PitchBoost erfasst Logo, Farben, Schriften und Tonalität deiner Website in etwa 15 Sekunden. So prüfst du es, tauschst das Logo und fügst Produktbilder hinzu.",
    "answer": "PitchBoost holt sich deine Marke von deiner Website: Gib die Adresse ein, und ein Scan von 15 Sekunden erfasst dein Logo, deine Markenfarben, Schriften und Tonalität. Du siehst das Ergebnis, bevor irgendetwas erstellt wird, und kannst das Logo austauschen oder Bilder hinzufügen. Das Redesign entsteht aus dieser Marke, nicht aus einer Vorlage, deshalb sieht die Präsentation nach deiner Firma aus und nicht nach einem Folien-Tool.",
    "steps": [
      {
        "title": "Website eingeben",
        "body": "Füge im Schritt für die Website die Adresse deiner Startseite ein. PitchBoost ruft die Seite ab, liest deine Leistungen und dein Nutzenversprechen und übernimmt Farben, Schriften und Logo."
      },
      {
        "title": "Erfasste Marke prüfen",
        "body": "Der nächste Bildschirm zeigt, was gefunden wurde. Ist das Logo falsch (etwa das Siegel eines Partners oder ein Icon statt des Schriftzugs), klicke auf „Not your logo? Replace it“ und lade ein PNG oder SVG hoch."
      },
      {
        "title": "Bilder hinzufügen, falls vorhanden",
        "body": "Ziehe Produktfotos, Porträtfotos oder Screenshots hinein. Nichts wertet eine Präsentation optisch stärker auf. Was nicht ins erstellte Layout passt, bleibt im Markenmaterial des Deals und steht dir im Editor zur Verfügung."
      }
    ],
    "sections": [
      {
        "heading": "Noch keine Website",
        "paragraphs": [
          "Wähle im Schritt für die Website „I don't have a website“ und beschreibe stattdessen dein Unternehmen. PitchBoost wählt eine Farbpalette und Typografie, die zur Beschreibung passen, und du kannst ein Logo von Hand hochladen."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Kann ich die Farben ändern, nachdem die Präsentation erstellt wurde?",
        "a": "Ja, im Editor, für einzelne Folien oder für die ganze Präsentation. Die nächste Präsentation für dieselbe Firma übernimmt die korrigierte Marke."
      },
      {
        "q": "Übernimmt PitchBoost Text von meiner Website in die Präsentation?",
        "a": "Bei einem Neuaufbau nicht: Der Inhalt stammt aus deinen hochgeladenen Folien. Die Website liefert Marke und Kontext. Bei einer neuen Präsentation aus einem Briefing fließt die Positionierung deiner Website in die Texte ein."
      }
    ],
    "related": ["redesign-a-powerpoint", "google-slides-and-keynote", "how-long-does-a-deck-take"],
    "updated": "2026-09-16"
  },

  {
    "slug": "crm-workflow-decks",
    "category": "integrations",
    "title": "So erstellst du Präsentationen aus deinen CRM-Workflows",
    "metaDescription": "Installiere PitchBoost im CRM, verbinde das zahlende Konto und füge „Create PitchBoost deck“ in Workflows ein. Was beim Kontakt landet und die zwei Trigger.",
    "answer": "Um Präsentationen aus deinen CRM-Workflows zu erstellen, installierst du PitchBoost über den Installationslink im Sub-Account, verbindest auf der Seite, die sich dann öffnet, das PitchBoost-Konto, das die Präsentationen bezahlt, und fügst einem beliebigen Workflow den Schritt „Create PitchBoost deck“ hinzu. Der Schritt antwortet sofort mit dem Link zur Präsentation, die Präsentation selbst ist nach etwa zwei bis vier Minuten fertig, und der Link wird in das Feld „PitchBoost deck“ des Kontakts und in eine Notiz geschrieben. Zwei Trigger, „Deck ready“ und „Deck viewed“, starten Folge-Workflows.",
    "steps": [
      {
        "title": "PitchBoost im CRM installieren",
        "body": "Öffne den Installationslink, den du bekommen hast (oder den Eintrag von PitchBoost im App-Marktplatz deines CRMs), klicke auf „Install“, wähle die Sub-Accounts aus und erlaube die angefragten Berechtigungen. PitchBoost fragt nur nach Kontakten, benutzerdefinierten Feldern, Verkaufschancen, Standortdetails und Zugriff auf Workflows."
      },
      {
        "title": "Zahlendes PitchBoost-Konto verbinden",
        "body": "Nach der Installation öffnet sich eine PitchBoost-Seite und fragt, über welches PitchBoost-Konto die Präsentationen abgerechnet werden. Melde dich an (ein kostenloses Konto reicht) und klicke auf „Connect“. Präsentationen aus allen Workflows in den installierten Konten verbrauchen die Credits dieses Kontos."
      },
      {
        "title": "PitchBoost-Seite im linken Menü prüfen",
        "body": "Im Sub-Account hat das linke Menü jetzt einen Eintrag „PitchBoost“. Dort steht „Connected“ mit dem Namen des Kontos, die Seite listet die Präsentationen aus Workflows auf und bietet die Optionen „Disconnect“ und „Remove“."
      },
      {
        "title": "„Create PitchBoost deck“ in einen Workflow einbauen",
        "body": "Füge im Workflow-Builder eine Aktion hinzu, öffne den Tab „Apps“ und wähle „Create PitchBoost deck“. Wähle die Art der Präsentation (Pitch-Deck oder One-Pager für den Vertrieb), schreibe ein kurzes Briefing wie „Mit den Preisen einsteigen“ und lass die Felder für Firma und Website mit Firma und Website des Kontakts verknüpft, außer du willst sie überschreiben."
      },
      {
        "title": "Link zur Präsentation in den nächsten Schritten nutzen",
        "body": "Der Schritt gibt sofort deck_url zurück. Füge diesen Link in die folgende E-Mail, SMS oder Aufgabe ein; er öffnet eine Platzhalterseite, solange die Präsentation entsteht, und danach die fertige Präsentation. Der Schritt gibt außerdem status (building, not_linked oder error) und deck_title zurück, damit ein Workflow bei einem Fehlschlag verzweigen kann."
      },
      {
        "title": "Folgeschritte mit den zwei Triggern starten",
        "body": "Lege einen Workflow mit dem Trigger „Deck ready“ an, der die Präsentation verschickt, sobald sie fertig ist, und einen mit „Deck viewed“, der nachfasst, wenn sie geöffnet wird. „Deck viewed“ löst pro Präsentation höchstens einmal alle zehn Minuten aus."
      }
    ],
    "sections": [
      {
        "heading": "Was beim Kontakt landet",
        "paragraphs": [
          "Wenn die Präsentation fertig ist, schreibt PitchBoost ihren Link in ein benutzerdefiniertes Feld namens „PitchBoost deck“ (wird beim ersten Mal angelegt) und legt beim Kontakt eine Notiz mit dem Link und dem Titel der Präsentation an. Außerdem erscheint die Präsentation auf der PitchBoost-Seite im linken Menü.",
          "Die Präsentation entsteht aus Firmenname und Website des Kontakts und aus deinem Briefing. Hat der Kontakt keine Website, arbeitet PitchBoost nur mit dem Firmennamen und dem Briefing. Ein Satz dazu, was du verkaufst und wer der Kontakt ist, macht dann einen echten Unterschied."
        ]
      },
      {
        "heading": "Abrechnung und Limits",
        "paragraphs": [
          "PitchBoost erstellt und hostet die Präsentationen und rechnet sie über das verbundene PitchBoost-Konto ab: Ein kostenloses Konto enthält 150 Credits im Monat, genug für eine Präsentation, kostenpflichtige Tarife bieten mehr. Dein CRM zählt Workflow-Schritte installierter Apps eventuell als Premium-Ausführungen und berechnet sie nach seinem Freikontingent separat.",
          "Antwortet der Schritt mit dem Status not_linked, hat noch niemand ein PitchBoost-Konto mit diesem Sub-Account oder seiner Agentur verbunden: Öffne die PitchBoost-Seite im linken Menü und klicke auf „Connect“."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Können sich mehrere Sub-Accounts ein PitchBoost-Konto teilen?",
        "a": "Ja. Ist die App für die ganze Agentur installiert, rechnet jeder Sub-Account über das verbundene PitchBoost-Konto der Agentur ab, außer ein Sub-Account verbindet ein eigenes; das hat dann Vorrang."
      },
      {
        "q": "Ändert sich die Präsentation, wenn sich der Kontakt ändert?",
        "a": "Nein. Eine Präsentation entsteht einmal, aus den Daten des Kontakts zu dem Zeitpunkt, an dem der Schritt läuft. Lass den Schritt noch einmal laufen, um eine neue Präsentation zu erstellen; Feld und Notiz beim Kontakt werden dann auf die neueste aktualisiert."
      },
      {
        "q": "Was ist der Unterschied zwischen „Disconnect“ und „Remove“?",
        "a": "„Disconnect“ lässt die App installiert, trennt aber das PitchBoost-Konto, sodass Workflow-Schritte mit not_linked antworten, bis jemand wieder ein Konto verbindet. „Remove“ deinstalliert die App aus dem Sub-Account, und Workflows, die noch ihre Schritte enthalten, überspringen diese."
      },
      {
        "q": "Kann ich die Präsentationen herunterladen?",
        "a": "Ja. Jede Präsentation öffnet sich in PitchBoost, wo du sie wie jede andere PitchBoost-Präsentation bearbeiten und als PowerPoint, PDF oder Google Slides herunterladen kannst."
      }
    ],
    "related": [
      "share-a-deck-link",
      "download-powerpoint-or-pdf",
      "credits-and-plans"
    ],
    "updated": "2026-10-20"
  },
];
