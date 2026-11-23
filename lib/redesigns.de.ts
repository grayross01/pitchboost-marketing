import type { RedesignPage } from "./redesigns";
import type { RedesignHubCopy } from "./redesign-i18n";

/**
 * German translation of lib/redesigns.ts, written with "du" (as Canva and
 * Notion address German readers): idiomatic, no em dashes, brand names and
 * prices untouched, German number format (1.500, 5,83 $, 18 %). Plans are
 * described by their credits, never by a number of decks, and no line
 * promises that every figure is right: where the English does, the German
 * says what the fact check does instead. Slugs match the English pages one
 * to one so hreflang works. Keep in sync: when an English page changes,
 * update its entry here.
 */
export const REDESIGNS_DE: RedesignPage[] = [
  {
    "slug": "powerpoint-redesign",
    "navLabel": "PowerPoint neu gestalten",
    "metaTitle": "PowerPoint neu gestalten: KI überarbeitet deine Folien | PitchBoost",
    "metaDescription": "Lade deine PowerPoint hoch und bekomm sie in Minuten neu gestaltet zurück: gleicher Inhalt, modernes Layout, im Design deiner Marke. Kostenlos testen.",
    "heroHeadline": "Deine PowerPoint, in Minuten von KI neu gestaltet",
    "heroSubhead": "Behalte den Inhalt. Bring den Rest in Ordnung. PitchBoost liest deine .pptx, lernt deine Marke anhand deiner Website kennen und baut jede Folie mit Layout, Typografie und Farben wie vom Profi neu auf, während du zusiehst.",
    "painPoints": [
      {
        "title": "Der Inhalt stimmt, die Optik nicht",
        "body": "Du hast monatelang an der Story gefeilt. Aber Stichpunktwüsten, Clipart-Icons und Farbverläufe aus dem Jahr 2014 untergraben jedes einzelne Wort. Alles von Hand neu zu gestalten, heißt: von vorn anfangen, in einem Tool, für dessen Einarbeitung dir die Zeit fehlt."
      },
      {
        "title": "Agenturen kosten Tausende und brauchen Wochen",
        "body": "Eine Agentur für Präsentationsdesign veranschlagt 2.000 bis 8.000 $ und zwei Wochen für etwas, das im Kern dieselbe Präsentation ist, nur mit besserem Gerüst. Diese Rechnung geht bei der Präsentation des Jahres auf, nicht bei der Präsentation der Woche."
      },
      {
        "title": "Vorlagen machen es nur schlimmer",
        "body": "Kopierst du deine Folien in eine Vorlage, zerschießt das die Layouts, und das Ergebnis sieht trotzdem aus wie die Vorlage aller anderen. Deine Marke geht im Farbschema von jemand anderem unter."
      }
    ],
    "outcomes": [
      "Gleiche Story, professionelles Design, nichts wird ohne dein Okay umgeschrieben",
      "Deine echte Marke: Logo, Farben und Tonalität, übernommen von deiner Website",
      "Ein Link zum Teilen mit Tracking, dazu Export als PDF und PowerPoint",
      "Minuten und ein paar Dollar statt Wochen und vierstelliger Rechnungen"
    ],
    "faqs": [
      {
        "q": "Ändert das Redesign meine Inhalte?",
        "a": "Standardmäßig behält PitchBoost den roten Faden und die Kernaussagen jeder Folie bei und gestaltet Layout, Typografie und Grafiken drumherum neu. Ist deine Präsentation sehr lang, fragt PitchBoost, bevor es loslegt, ob du sie gekürzt haben möchtest."
      },
      {
        "q": "Welche Dateiformate kann ich hochladen?",
        "a": "PowerPoint (.pptx) bis 50 MB. Wer mit Keynote oder Google Slides arbeitet, exportiert vorher als .pptx; beide schaffen das in einem Schritt."
      },
      {
        "q": "Woher kennt PitchBoost meine Marke?",
        "a": "Du gibst deine Website an. PitchBoost übernimmt Logo, Markenfarben und Tonalität von deinen eigenen Seiten, und du kannst das Logo prüfen und austauschen, bevor irgendetwas erstellt wird."
      },
      {
        "q": "Was kostet ein PowerPoint-Redesign?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien, und ein Redesign zählt dabei wie eine neu erstellte Präsentation. Darüber hinaus gibt es den Starter-Tarif für 7 $ im Monat ohne PitchBoost-Badge und den Pro-Tarif für 29 $ im Monat, während Agenturangebote bei etwa 2.000 $ pro Präsentation anfangen."
      },
      {
        "q": "Geht das auch direkt in ChatGPT?",
        "a": "Ja. Füge das PitchBoost-Plugin aus dem Plugin-Verzeichnis von ChatGPT hinzu (auch mit kostenlosem ChatGPT-Konto), hänge deine .pptx in einem Chat an und bitte um ein Redesign. ChatGPT schickt die Datei an PitchBoost und antwortet mit dem Link; öffne ihn in PitchBoost für die volle Vorschau und die Downloads."
      }
    ],
    "ctaHeadline": "Präsentation hochladen. Story behalten. Die Farbverläufe von 2014 dürfen gehen."
  },

  {
    "slug": "pitch-deck-makeover",
    "navLabel": "Pitch-Deck-Makeover",
    "metaTitle": "Pitch-Deck-Makeover: KI-Redesign für Start-ups | PitchBoost",
    "metaDescription": "Gib deinem Pitch-Deck mit KI ein Makeover: hochladen, Story behalten, investorentaugliches Design im Stil deiner Marke. In Minuten, kostenlos testen.",
    "heroHeadline": "Ein Pitch-Deck-Makeover, das deine Story in Ruhe lässt und das Design in Ordnung bringt",
    "heroSubhead": "Investoren entscheiden schnell, und ein Pitch-Deck aus dem Bastelkeller lässt auf eine Firma aus dem Bastelkeller schließen. Lade hoch, was du hast: PitchBoost baut daraus etwas, das du gern weitergeleitet siehst.",
    "painPoints": [
      {
        "title": "Dein Pitch-Deck wird weitergeleitet, ohne dass du dabei bist",
        "body": "Das Partner-Meeting kommt erst, nachdem dein Pitch-Deck allein die Runde gemacht hat. Sieht das Design nach Feierabendprojekt aus, schaut sich niemand mehr die Traction-Folie an."
      },
      {
        "title": "Du kennst die Story auswendig, und genau das ist das Problem",
        "body": "Wer gründet, starrt so lange auf die eigenen Folien, bis sie unsichtbar werden. Die zehnte Version hat dieselben überladenen Layouts wie die erste, nur mit mehr Wörtern."
      },
      {
        "title": "Designhilfe kommt immer zur Unzeit",
        "body": "Ausgerechnet in den Wochen vor einer Finanzierungsrunde fehlen dir die Abende für Figma und die Vorlaufzeit für eine Agentur. Das Makeover muss schnell gehen, sonst passiert es nicht."
      }
    ],
    "outcomes": [
      "Layout und Typografie auf Investorenniveau, ohne Eingriff in deine Story",
      "Ein einheitlicher Markenauftritt auf jeder Folie, übernommen von deiner eigenen Website",
      "Ein Link mit Tracking, damit du siehst, welche Investoren ihn geöffnet und was sie gelesen haben",
      "Fertig in Minuten, also rechtzeitig für das Intro morgen"
    ],
    "faqs": [
      {
        "q": "Schreibt PitchBoost meine Zahlen oder Aussagen um?",
        "a": "Nein, dafür ist PitchBoost nicht gebaut. Das Redesign übernimmt deine Inhalte (Traction, Finanzzahlen, den Ask) und baut nur ihre Darstellung neu auf. Ein Faktencheck vergleicht die neue Präsentation mit dem Original und markiert oder entfernt Kennzahlen, die sich dort nicht finden. Was die KI als schwach einstuft, kannst du ändern oder behalten, ganz wie du willst."
      },
      {
        "q": "Merken Investoren, dass eine KI das Design gemacht hat?",
        "a": "Merken werden sie vor allem, dass es professionell gestaltet ist. Die Layouts folgen denselben Prinzipien, die auch ein Designer aus Fleisch und Blut anwendet: Hierarchie, Weißraum, eine Idee pro Folie und durchgehend deine Marke."
      },
      {
        "q": "Mein Pitch-Deck hat 30 Folien. Ist das ein Problem?",
        "a": "PitchBoost fragt nach, ob alle 30 Folien wie gehabt neu aufgebaut werden sollen oder ob du eine straffere Fassung willst, die Investoren auch wirklich bis zum Ende lesen. Die Entscheidung liegt so oder so bei dir."
      },
      {
        "q": "Was kostet das während einer Finanzierungsrunde?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien, also kannst du das Makeover selbst kostenlos ausprobieren. Wenn du zwischen Investorengesprächen weiter nachbesserst, deckt der Pro-Tarif für 29 $ im Monat mehrere Überarbeitungsrunden ab."
      }
    ],
    "ctaHeadline": "Die Story ist von dir. Gib ihr das Design, das sie verdient."
  },

  {
    "slug": "make-powerpoint-look-professional",
    "navLabel": "PowerPoint professionell gestalten",
    "metaTitle": "PowerPoint professionell gestalten, und zwar schnell | PitchBoost",
    "metaDescription": "Der schnellste Weg zur professionellen PowerPoint: hochladen, und die KI baut das Design im Stil deiner Marke neu. Gleiche Folien, Minuten statt Tagen.",
    "heroHeadline": "Mach deine PowerPoint professionell, ohne selbst Designer zu werden",
    "heroSubhead": "Es gibt zwei Wege: ein Wochenende lang Designprinzipien pauken oder die Präsentation hochladen und PitchBoost sie für dich anwenden lassen. Ausrichtung, Hierarchie, Abstände, Markenfarben: das volle Programm.",
    "painPoints": [
      {
        "title": "Du siehst, dass etwas nicht stimmt, aber nicht, warum",
        "body": "Verrutschte Kästen, sechs Schriften, Farben, die fast zusammenpassen. Die Probleme zu benennen, ist schon eine Designkunst für sich; sie Folie für Folie zu beheben, kostet Stunden, die du nicht hast."
      },
      {
        "title": "Jeder Tipp lautet „weniger Text, mehr Bilder“",
        "body": "Jeder Ratgeber sagt dieselben drei Dinge und überlässt dir die eigentliche Arbeit. Die Regeln kennen und sie auf vierzig Folien anwenden: zwei völlig verschiedene Aufgaben."
      },
      {
        "title": "Schwierig wird es bei der Einheitlichkeit",
        "body": "Eine schöne Folie ist leicht. Folie 23 nach demselben System zu bauen wie Folie 2, das trennt professionelle Präsentationen von bloß verzierten, und genau darin sind Maschinen besser."
      }
    ],
    "outcomes": [
      "Professionelle Hierarchie, Abstände und Ausrichtung auf jeder Folie",
      "Ein einheitliches System für Schrift und Farbe, abgeleitet von deiner echten Marke",
      "Überladene Folien neu sortiert: Die Ideen bleiben, der Ballast geht",
      "In Minuten fertig, mit einem Editor für alles, was du noch anpassen willst"
    ],
    "faqs": [
      {
        "q": "Was lässt eine PowerPoint eigentlich professionell wirken?",
        "a": "Einheitlichkeit und Zurückhaltung: eine feste Abstufung der Schriftgrößen, ein Farbsystem, sauber ausgerichtete Elemente, großzügiger Weißraum und eine Idee pro Folie. PitchBoost setzt all das automatisch um, wenn es deine Präsentation neu aufbaut."
      },
      {
        "q": "Muss ich etwas installieren?",
        "a": "Nein. Alles läuft im Browser: .pptx hochladen, deine Website für das Branding angeben und das Ergebnis als PowerPoint oder PDF herunterladen oder als Link teilen."
      },
      {
        "q": "Kann ich die Folien danach noch bearbeiten?",
        "a": "Ja. Jede Präsentation öffnet sich in einem Editor, in dem du Texte ändern, Bilder austauschen oder die KI um gezielte Überarbeitungen bitten kannst, bevor du sie teilst oder exportierst."
      },
      {
        "q": "Kann ich das wirklich kostenlos testen?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien, und du brauchst keine Kreditkarte. Das reicht, um deine Präsentation neu gestalten zu lassen und das Ergebnis selbst zu beurteilen."
      }
    ],
    "ctaHeadline": "Spar dir den Designkurs. Lade die Präsentation hoch."
  },

  {
    "slug": "rebrand-presentation",
    "navLabel": "Rebranding für Präsentationen",
    "metaTitle": "Präsentationen ans neue Corporate Design anpassen | PitchBoost",
    "metaDescription": "Neue Marke, alte Präsentationen? Hochladen, und PitchBoost überträgt Logo, Farben und Tonalität der neuen Marke. Die ganze Bibliothek an einem Nachmittag.",
    "heroHeadline": "Das Rebranding ist durch. Fehlen nur noch alle Präsentationen seit Firmengründung.",
    "heroSubhead": "Ein Rebranding ist nicht fertig, solange der Vertrieb noch mit dem alten Logo präsentiert. Lade jede Präsentation hoch, zeig PitchBoost die neue Website und bekomm alles im neuen Corporate Design zurück, ob eine einzelne Präsentation oder die ganze Bibliothek.",
    "painPoints": [
      {
        "title": "Die Marke ist live, die Präsentationen nicht",
        "body": "Die Website ist neu, die Vertriebspräsentationen sind von vorgestern. Jede Präsentation, die Kunden zu sehen bekommen, ist jetzt eine Abweichung, die deine neuen Markenrichtlinien ausdrücklich verbieten."
      },
      {
        "title": "Von Hand umgestalten ist die reinste Vorlagenhölle",
        "body": "Tauschst du den Folienmaster aus, geht die Hälfte der Layouts kaputt, und trotzdem muss jemand jede Folie von Hand reparieren. Und das für jede Präsentation auf dem Laufwerk."
      },
      {
        "title": "Zuständig ist niemand",
        "body": "Das Marketing verantwortet die Marke, der Vertrieb die Präsentationen, und das Rebranding von vierzig Präsentationen landet bei dem, der am wenigsten meckert. Danach ist es auf ewig zu 80 % fertig."
      }
    ],
    "outcomes": [
      "Neues Logo, neue Farben und neue Tonalität, automatisch von deiner neuen Website übernommen",
      "Der Inhalt bleibt: Der Pitch überlebt, die alte Marke nicht",
      "Stapelverarbeitung: ein ganzer Ordner mit .pptx-Dateien in einem Durchgang",
      "Jede umgestellte Präsentation als Link mit Tracking, dazu PPTX-Export"
    ],
    "faqs": [
      {
        "q": "Wir haben Dutzende Präsentationen. Muss ich jede einzeln hochladen?",
        "a": "Nein, die Stapelverarbeitung nimmt bis zu 12 PowerPoint-Dateien pro Durchgang und stellt sie nacheinander auf deine neue Marke um. Wähl einen Ordner aus und komm zurück zu einer Bibliothek im neuen Design."
      },
      {
        "q": "Woher weiß PitchBoost, dass die neue Marke gemeint ist und nicht die alte?",
        "a": "PitchBoost scannt die Website, die du angibst. Ist deine neue Marke dort live, erbt jede neu aufgebaute Präsentation genau diese. Logo und Farben, die PitchBoost erfasst hat, kannst du prüfen, bevor irgendetwas erstellt wird."
      },
      {
        "q": "Ändern sich beim Rebranding die Inhalte der Folien?",
        "a": "Standardmäßig bleiben Aussage und Inhalt jeder Folie erhalten, neu gestaltet wird nur die visuelle Ebene. Es ist ein Rebranding, kein Umschreiben."
      },
      {
        "q": "Was kostet das Rebranding einer ganzen Bibliothek?",
        "a": "Eine Präsentation mit bis zu 10 Folien kostet 100 Credits. Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine solche Präsentation. Für eine echte Bibliothek gibt es den Pro-Tarif (29 $ im Monat) mit 1.500 Credits und den Business-Tarif (79 $ im Monat) mit 4.400 Credits im Monat."
      }
    ],
    "ctaHeadline": "Bring das Rebranding zu Ende. Präsentationen inklusive.",
    "updated": "2026-11-23"
  },

  {
    "slug": "investor-deck-redesign",
    "navLabel": "Investorenpräsentation neu gestalten",
    "metaTitle": "Investorenpräsentation neu gestalten, in Minuten | PitchBoost",
    "metaDescription": "Gestalte deine Investorenpräsentation vor dem nächsten Termin mit KI neu. Die Traction-Story bleibt, das Design wird professionell und passt zu deiner Marke.",
    "heroHeadline": "Investorenpräsentation neu gestalten, noch vor dem nächsten Partner-Meeting",
    "heroSubhead": "Zwischen Intro und Partner-Meeting liegt meist ein Wochenende. Das reicht. Lade die aktuelle Präsentation hoch und bekomm eine zurück, die so aussieht wie die Firma, die du beschreibst.",
    "painPoints": [
      {
        "title": "Die Due Diligence beginnt auf Folie eins",
        "body": "Investoren achten auf den Feinschliff, lange bevor sie die Kennzahlen lesen. Eine überladene Präsentation wirft eine Frage auf (wenn schon der Pitch so aussieht, wie sieht dann erst das Produkt aus?), die der Rest des Meetings beantworten muss."
      },
      {
        "title": "Deine Präsentation hat sich weiterentwickelt, ihr Design nicht",
        "body": "Sechs Monate Änderungen durch ein dreiköpfiges Gründungsteam: Jetzt hat die Präsentation vier Schriften, und jede Folie erzählt ihre eigene visuelle Geschichte. Der Inhalt ist gereift. Die Verpackung ist verstaubt."
      },
      {
        "title": "Die Finanzierungsrunde wartet nicht aufs Design",
        "body": "Ist das Meeting am Donnerstag, fällt ein zweiwöchiger Agenturauftrag flach. Das Redesign muss heute Abend passieren, sonst passiert es gar nicht."
      }
    ],
    "outcomes": [
      "Design bereit fürs Fundraising, deine Traction-Story bleibt unangetastet",
      "Ein einheitliches System auf jeder Folie: Team, Markt, Kennzahlen, Ask",
      "Ein Link mit Tracking, der zeigt, welche Folien Investoren wirklich lesen",
      "Heute Abend fertig, nicht in zwei Wochen"
    ],
    "faqs": [
      {
        "q": "Kennt PitchBoost den Aufbau einer Investorenpräsentation?",
        "a": "Ja: Problem, Lösung, Markt, Traction, Team, Ask. Standardmäßig bleibt deine Reihenfolge erhalten, und wenn deine Präsentation zu lang ist, bietet PitchBoost an, sie auf eine Länge zu kürzen, die Investoren bis zum Ende lesen."
      },
      {
        "q": "Sehe ich, welche Investoren die Präsentation geöffnet haben?",
        "a": "Jede Präsentation wird als Link mit Tracking veröffentlicht: Aufrufe, Zeit pro Folie und Zeitpunkt. Praktisch, um nach einer Weiterleitung an die Partner den richtigen Moment fürs Nachfassen zu erwischen."
      },
      {
        "q": "Bleibt meine Präsentation vertraulich?",
        "a": "Deine Präsentation ist nur in deinem Konto sichtbar, bis du den Link teilst, und Links lassen sich widerrufen oder mit einem Passwort schützen. Wir trainieren keine Modelle mit deinen Inhalten."
      },
      {
        "q": "Was, wenn ich nach dem Redesign noch Kleinigkeiten ändern will?",
        "a": "Dafür gibt es den Editor: Ändere Texte direkt auf der Folie oder sag der KI, was sie Folie für Folie anpassen soll. Du gibst alles frei, bevor es rausgeht."
      }
    ],
    "ctaHeadline": "Das Meeting am Donnerstag hat Besseres verdient als die Präsentation vom Dienstag."
  },

  {
    "slug": "sales-deck-refresh",
    "navLabel": "Vertriebspräsentation auffrischen",
    "metaTitle": "Vertriebspräsentation mit KI auffrischen | PitchBoost",
    "metaDescription": "Deine Vertriebspräsentation ist drei Jahre alt, und das sieht man. Lade sie hoch: In Minuten ist sie modern, markenkonform und inhaltlich unverändert.",
    "heroHeadline": "Die Vertriebspräsentation auffrischen, ohne aufs Marketing zu warten",
    "heroSubhead": "Jedes Team hat diese eine Präsentation: echte Deals gewonnen, nie aktualisiert, sichtlich in die Jahre gekommen. Lade sie hoch und bekomm eine moderne Version im aktuellen Design deiner Marke zurück: derselbe Pitch, Design aus diesem Jahrzehnt.",
    "painPoints": [
      {
        "title": "Die Präsentation funktioniert, also fasst sie keiner an",
        "body": "2023 hat sie Deals abgeschlossen, und genau deshalb ist sie 2026 noch im Umlauf, mit Screenshots und Design von 2023. Der Erfolg hat sie unsterblich gemacht, die Zeit peinlich."
      },
      {
        "title": "Der Vertrieb baut sie heimlich selbst um",
        "body": "Altert die offizielle Präsentation, entstehen im Vertrieb lauter eigene Versionen. Jetzt gibt es neun Präsentationen, keine davon im Corporate Design, und der beste Pitch liegt auf irgendeinem Desktop."
      },
      {
        "title": "Das Update ist immer ein Thema fürs nächste Quartal",
        "body": "Das Marketing findet auch, dass es nötig ist, und setzt es auf die Roadmap für später. Der Vertrieb braucht es für den Call am Freitag."
      }
    ],
    "outcomes": [
      "Der bewährte Pitch, neu gestaltet im aktuellen Design deiner Marke",
      "Wieder eine einzige offizielle Präsentation, geteilt als Link mit Tracking, an dem keiner herumbasteln kann",
      "Screenshots und Bilder lassen sich nach dem Neuaufbau im Editor austauschen",
      "Ein paar Minuten pro Präsentation, damit die ganze Vertriebsbibliothek nachziehen kann"
    ],
    "faqs": [
      {
        "q": "Können wir die ganze Vertriebsbibliothek auffrischen, nicht nur eine Präsentation?",
        "a": "Ja, die Stapelverarbeitung nimmt bis zu 12 PowerPoint-Dateien pro Durchgang. Meist frischen Teams zuerst die Hauptpräsentation auf, prüfen sie und schicken dann den Rest der Bibliothek hinterher."
      },
      {
        "q": "Wie hilft ein Link mit Tracking einem Vertriebsteam?",
        "a": "Statt eine Datei anzuhängen, die in irgendeinem Posteingang verschwindet, teilt der Vertrieb einen Link. Du siehst Aufrufe, Zeit pro Folie und Weiterleitungen, also ein Signal, wer es ernst meint und wann du nachfassen solltest."
      },
      {
        "q": "Unsere Produkt-Screenshots sind ebenfalls veraltet. Bringt PitchBoost die auch in Ordnung?",
        "a": "Standardmäßig behält PitchBoost deine Bilder und markiert, wo sie sitzen. Aktuelle Screenshots einzusetzen dauert nach dem Redesign im Editor jeweils etwa eine Minute."
      },
      {
        "q": "Was kostet das im Vergleich zu einem Designprojekt?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien (eine längere stellst du für einmalig 9 $ fertig), danach gibt es Tarife ab 7 $ im Monat. Interne Designprojekte für dieselbe Arbeit plant man meist in Wochen und Tausenden Dollar."
      }
    ],
    "ctaHeadline": "Am Freitag ist der Call. Die Präsentation von 2023 hat frei."
  },

  {
    "slug": "presentation-redesign-service",
    "navLabel": "Präsentation neu gestalten lassen",
    "metaTitle": "Präsentation neu gestalten lassen: KI statt Agentur | PitchBoost",
    "metaDescription": "Präsentations-Redesign im Vergleich: Agentur gegen KI bei Tempo, Kosten und Kontrolle. Minuten statt Wochen, ein paar Dollar statt ein paar Tausender.",
    "heroHeadline": "Der Redesign-Service für Präsentationen: Software statt Studio",
    "heroSubhead": "Agenturen gestalten Präsentationen wunderschön neu: in zwei Wochen, für einen vierstelligen Betrag, mit drei Feedbackrunden. PitchBoost erledigt denselben Job in Minuten zum Preis eines Mittagessens, und du behältst das Heft in der Hand.",
    "painPoints": [
      {
        "title": "Der Zeitplan der Agentur passt nicht zur Deadline",
        "body": "Erstgespräch, Kreativ-Briefing, erste Entwürfe nach einer Woche. Das Meeting, für das du die Präsentation gebraucht hättest, ist bis dahin längst gelaufen. Präsentationsfristen misst man in Tagen, Agenturprozesse nicht."
      },
      {
        "title": "Der Preis wächst mit jeder Folie",
        "body": "Wird pro Folie abgerechnet, kostet das Redesign der 40-Folien-Präsentation, die du wirklich nutzt, 3.000 bis 8.000 $. Und die nächste Überarbeitung bringt eine neue Rechnung."
      },
      {
        "title": "Du gibst das Heft aus der Hand",
        "body": "Sobald die Agentur die Quelldatei hat, landet jede Kleinigkeit in ihrer Warteschlange. Eine Preisänderung auf Folie 12 sollte kein E-Mail-Pingpong und drei Werktage kosten."
      }
    ],
    "outcomes": [
      "Ergebnis in Minuten statt nach einem zweiwöchigen Agenturprojekt",
      "Feste, winzige Kosten pro Präsentation, Überarbeitungen im Editor inklusive",
      "Du behältst die volle Kontrolle beim Bearbeiten, dazu PPTX-Export des Ergebnisses",
      "Ein einheitliches Markensystem, übernommen von deiner eigenen Website"
    ],
    "faqs": [
      {
        "q": "Wie schneidet ein KI-Redesign im Vergleich zu einer Designagentur ab?",
        "a": "Agenturen bringen menschliche Art Direction mit und lohnen sich für die Präsentation des Jahres. Für die anderen fünfzig Präsentationen setzt ein KI-Redesign dieselben strukturellen Prinzipien um (Hierarchie, Abstände, einheitliche Marke), in Minuten, und du behältst die Kontrolle beim Bearbeiten."
      },
      {
        "q": "Was kostet das im Vergleich zu einer Agentur?",
        "a": "Agenturen veranschlagen meist 2.000 bis 8.000 $ pro Präsentation, plus Gebühren für jede Überarbeitung. Der Free-Tarif von PitchBoost enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien; kostenpflichtige Tarife beginnen bei 7 $ im Monat, und Überarbeitungen erledigst du im eingebauten Editor."
      },
      {
        "q": "Bekomme ich die Quelldatei zurück?",
        "a": "Ja, du kannst jederzeit als bearbeitbare PowerPoint-Datei oder als PDF exportieren, und die Präsentation gibt es außerdem als Link zum Teilen mit Tracking."
      },
      {
        "q": "Was, wenn die Designentscheidungen der KI nicht passen?",
        "a": "Du prüfst die erfasste Marke (Logo, Farben), bevor etwas erstellt wird, und danach kannst du im Editor alles ändern: selbst, sofort, ohne Warteschlange für Änderungswünsche."
      }
    ],
    "ctaHeadline": "Die Agentur für die Präsentation des Jahres. PitchBoost für die anderen fünfzig."
  },

  {
    "slug": "fix-ugly-powerpoint",
    "navLabel": "Hässliche PowerPoint retten",
    "metaTitle": "Hässliche PowerPoint retten: KI räumt die Folien auf | PitchBoost",
    "metaDescription": "Peinliche Präsentation? Hochladen und aufgeräumt zurückbekommen: einheitliche Schrift, saubere Layouts, deine Markenfarben, gleicher Inhalt. Kostenlos testen.",
    "heroHeadline": "Hässliche Folien rein, saubere Folien raus. Derselbe Text.",
    "heroSubhead": "Wild gemischte Schriften, sechs Farben, Clipart, eine Wand aus Stichpunkten auf Folie 4. PitchBoost liest deine .pptx, behält jedes deiner Argumente und baut die Präsentation neu auf: mit einem Schriftsystem, einer Farbpalette (deiner) und Layouts mit Luft zum Atmen.",
    "painPoints": [
      {
        "title": "Drei Jahre gewachsen, durch vier Hände gegangen",
        "body": "Gestaltet hat diese Präsentation niemand. Sie ist gewuchert. Wer mitgearbeitet hat, brachte eine Schrift, einen Blauton und eine eigene Art von Aufzählungen mit, und jetzt wirkt das Ganze schlampig, obwohl die Gedanken dahinter messerscharf sind."
      },
      {
        "title": "Von Hand reparieren heißt: jede Folie anfassen",
        "body": "Folienmaster helfen, bis jemand sie zum ersten Mal aushebelt. Vierzig Folien Textfeld für Textfeld aufzuräumen, ist ein Abend, den du immer wieder verschiebst, also geht die Präsentation wieder hässlich raus."
      },
      {
        "title": "Eine Vorlage würde alles Eigene ausradieren",
        "body": "Kopierst du alles in eine Vorlage, fliegt deine Marke raus, und die Layout-Entscheidungen bleiben trotzdem an dir hängen. Du willst, dass der Inhalt bleibt und dir jemand die Designentscheidungen abnimmt, nicht umgekehrt."
      }
    ],
    "outcomes": [
      "Ein Schriftsystem und eine Farbpalette, übernommen von deiner Website",
      "Jede Folie neu ausgerichtet, mit sauberen Abständen; kein Satz wird ohne dein Okay umgeschrieben",
      "Deine Zahlen samt Diagrammdaten übernommen und per Faktencheck mit dem Original abgeglichen",
      "Bearbeitbare PowerPoint-Datei in Minuten zurück, dazu PDF und ein Link zum Teilen"
    ],
    "faqs": [
      {
        "q": "Kürzt PitchBoost meine Folien oder schreibt sie um?",
        "a": "Nein. Standardmäßig bleiben roter Faden und Kernaussagen jeder Folie erhalten; geändert werden Layout, Typografie und Grafiken. Ist deine Präsentation sehr lang, fragt PitchBoost, ob du eine gekürzte Fassung möchtest, und das entscheidest du, nicht eine Voreinstellung."
      },
      {
        "q": "Meine Präsentation hat Diagramme. Überleben die Zahlen?",
        "a": "Dafür ist PitchBoost gebaut. PitchBoost liest Datenreihen, Kategorien und Werte der Diagramme aus der .pptx und überträgt sie in die neu aufgebauten Folien. Zahlen aus deiner Präsentation gelten als deine Fakten; was die KI weder auf deine Präsentation noch auf deine Website zurückführen kann, wird markiert oder entfernt, bevor du das Ergebnis siehst."
      },
      {
        "q": "Und wenn ich nur ein paar Folien reparieren will?",
        "a": "Bau die Präsentation einmal neu auf und passe danach einzelne Folien mit gezielten Änderungen an. Einfache Wünsche, etwa eine Fußzeile oder einen Firmennamen in der ganzen Präsentation zu ändern, werden sofort umgesetzt und kosten keinen Credit."
      },
      {
        "q": "Was kostet das?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien, also kannst du das Aufräumen kostenlos ausprobieren. Der Starter-Tarif kostet 7 $ im Monat, ohne PitchBoost-Badge, und der Pro-Tarif 29 $ im Monat, falls du eine ganze Bibliothek zu retten hast."
      }
    ],
    "ctaHeadline": "Lade die Präsentation hoch, die du lieber versteckst. Zurück kommt eine, die du gern zeigst."
  },

  {
    "slug": "google-slides-and-keynote-redesign",
    "navLabel": "Google Slides und Keynote",
    "metaTitle": "Google Slides oder Keynote mit KI neu gestalten | PitchBoost",
    "metaDescription": "Google Slides oder Keynote? Als .pptx exportieren, hochladen und in Minuten professionell neu gestaltet zurückbekommen, im Design deiner Marke. Kostenlos testen.",
    "heroHeadline": "Nicht nur PowerPoint: Google Slides und Keynote, neu gestaltet",
    "heroSubhead": "Beide Programme exportieren mit einem Klick als .pptx. Lade diese Datei hoch: PitchBoost behält deine Story, lernt deine Marke anhand deiner Website kennen und baut jede Folie neu auf. Zurück bekommst du eine bearbeitbare PowerPoint-Datei, ein PDF oder einen Link.",
    "painPoints": [
      {
        "title": "Dein Team lebt in Google Slides, deine Kunden in PowerPoint",
        "body": "Die Präsentation muss reisen. Bei jedem Export geht ein wenig Formatierung verloren, und die Version, die beim Kunden ankommt, ist nie ganz die, die du freigegeben hast."
      },
      {
        "title": "Keynote-Themen sehen toll aus, bis sie auf einen Windows-Laptop treffen",
        "body": "Schriften werden ersetzt, Abstände verrutschen, und der Feinschliff, für den du bezahlt hast, ist im Konferenzraum weg. Ein Neuaufbau, der von Anfang an auf PowerPoint zielt, umgeht das Problem."
      },
      {
        "title": "Neu gestalten im Programm bleibt Handarbeit",
        "body": "Google Slides und Keynote haben gute Vorlagen und dieselbe Grenze: Beide kennen weder deinen Inhalt noch deine Marke, also triffst du jede Layout-Entscheidung weiter selbst, Folie für Folie."
      }
    ],
    "outcomes": [
      "Funktioniert mit dem .pptx-Export, den beide Programme in einem Schritt erzeugen",
      "Deine Marke statt einer Designvorlage: Logo, Farben und Tonalität von deiner Website",
      "Inhalt Folie für Folie übernommen, samt Zahlen und Diagrammen",
      "Bearbeitbare PowerPoint-Datei, PDF und ein Link mit Tracking, in Minuten"
    ],
    "faqs": [
      {
        "q": "Wie exportiere ich aus Google Slides?",
        "a": "„Datei > Herunterladen > Microsoft PowerPoint (.pptx)“. Lade diese Datei bei PitchBoost hoch. Vortragsnotizen und Bilder kommen mit."
      },
      {
        "q": "Wie exportiere ich aus Keynote?",
        "a": "„Ablage > Exportieren > PowerPoint“. Keynote erzeugt eine .pptx, die PitchBoost direkt liest, samt dem Text auf jeder Folie und den Bildern, die du platziert hast."
      },
      {
        "q": "Bekomme ich das Ergebnis auch in Google Slides oder Keynote zurück?",
        "a": "Du bekommst eine bearbeitbare PowerPoint-Datei. Google Slides und Keynote öffnen beide .pptx-Dateien und wandeln sie um, du kannst also in deinem Lieblingsprogramm weiterarbeiten."
      },
      {
        "q": "Kostet das Ausprobieren etwas?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien, und ein Redesign zählt dabei wie eine neu erstellte Präsentation. Der Starter-Tarif kostet 7 $ im Monat ohne PitchBoost-Badge, der Pro-Tarif 29 $ im Monat."
      }
    ],
    "ctaHeadline": "Einmal exportieren. Einmal hochladen. Überall präsentieren."
  },

  {
    "slug": "training-deck-redesign",
    "navLabel": "Schulungs- und Kursfolien",
    "metaTitle": "Schulungs- und Kursfolien mit KI neu gestalten | PitchBoost",
    "metaDescription": "Schulung, Workshop oder Kursmodul hochladen und einheitlich, lesbar und markenkonform zurückbekommen, Lektionen und Zahlen übernommen. Kostenlos testen.",
    "heroHeadline": "Schulungsfolien, die mit deiner Schulung mithalten",
    "heroSubhead": "Ein zwölfwöchiges Programm, ein Onboarding-Workshop, ein Zertifizierungsmodul: PitchBoost übernimmt die Reihenfolge, die Übungen und die Zahlen und baut die Folien so neu auf, dass man sie liest, statt die Augen zusammenzukneifen.",
    "painPoints": [
      {
        "title": "Viel Inhalt aus Prinzip, zu voll aus Versehen",
        "body": "Schulungsfolien tragen mehr Text, als ein Verkaufspitch je tragen müsste. Ohne ein Layout-System, das dafür plant, werden sie zu Fließtext auf Folien, und im Raum liest niemand mehr mit."
      },
      {
        "title": "Module aus verschiedenen Monaten passen nie zusammen",
        "body": "Woche 1 entstand in Eile, Woche 7 stammt von jemand anderem. Im Kurs fallen die Nähte früher auf als der Stoff."
      },
      {
        "title": "Keine einzige Zahl darf verloren gehen",
        "body": "Sitzungsdauer, Gruppengröße, Bestehensgrenze, Preise. Ein Redesign, das Zahlen erfindet oder weglässt, ist schlimmer als gar keins. Fakten müssen genau so bleiben, wie sie dastehen."
      }
    ],
    "outcomes": [
      "Dieselbe Abfolge von Lektionen, Übungen und Kernaussagen",
      "Dauer, Gruppengrößen und Preise aus deiner Präsentation übernommen und per Faktencheck mit dem Original abgeglichen",
      "Ein einheitliches Design über alle Module, die du hochlädst",
      "Bearbeitbare PowerPoint-Datei für die Kursleitung, PDF-Handouts zum Austeilen"
    ],
    "faqs": [
      {
        "q": "Ändert PitchBoost die Reihenfolge meiner Lektionen?",
        "a": "Nur wenn du darum bittest. Standardmäßig bleiben Absicht und Inhalt jeder Folie erhalten, und Folien werden nur dort zusammengelegt oder umgestellt, wo es den Ablauf klar verbessert, ohne dass Informationen verloren gehen."
      },
      {
        "q": "Wie geht PitchBoost mit Zahlen wie Sitzungsdauer oder Gruppengröße um?",
        "a": "Zahlen aus deiner hochgeladenen Präsentation gelten als deine Fakten und werden übernommen. Jede Zahl, die die KI hinzufügt und die sich nicht auf deine Präsentation oder deine Website zurückführen lässt, markiert oder entfernt ein Faktencheck, bevor du das Ergebnis siehst."
      },
      {
        "q": "Ich habe acht Module. Muss ich jedes einzeln hochladen?",
        "a": "Kannst du, oder du nutzt die Stapelverarbeitung und schickst eine ganze Bibliothek durch dasselbe Marken- und Designsystem, damit die Module endlich zusammenpassen."
      },
      {
        "q": "Was kostet das für einen Kurs?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien. Der Starter-Tarif für 7 $ im Monat reicht für gelegentliche Module, ohne PitchBoost-Badge; der Pro-Tarif für 29 $ im Monat passt zur Überarbeitung eines ganzen Lehrplans."
      }
    ],
    "ctaHeadline": "Der Lehrplan bleibt, wie er ist. Die Folien zum Glück nicht."
  },

  {
    "slug": "proposal-deck-redesign",
    "navLabel": "Angebote und Ausschreibungen",
    "metaTitle": "Angebote und Ausschreibungen mit KI neu gestalten | PitchBoost",
    "metaDescription": "Angebot, RFP oder Ausschreibung? Lade die Präsentation hoch und bekomm sie professionell im Design deiner Marke zurück, Umfang, Preise und Zusagen übernommen.",
    "heroHeadline": "Angebote, die so durchdacht aussehen, wie sie sind",
    "heroSubhead": "Leistungsumfang, Service-Level, Preisstufen, Übergangspläne. PitchBoost übernimmt deine Zusagen aus dem Original, gleicht sie per Faktencheck ab und baut die Präsentation so neu auf, dass das Bewertungsgremium eine Firma sieht, die ihren Laden im Griff hat.",
    "painPoints": [
      {
        "title": "Die Abgabefrist lässt keine Zeit fürs Design",
        "body": "Fertig wird der Inhalt um 23 Uhr, am Abend vor der Abgabe. Die Folien sehen auch so aus. Ein Neuaufbau, der Minuten dauert, passt in die Lücke, in die nie ein Designer gepasst hätte."
      },
      {
        "title": "Preise und Leistungsumfang dürfen sich um kein Zeichen verschieben",
        "body": "Ein Redesign, das ein Service-Level umformuliert oder einen Preis rundet, ist ein Haftungsrisiko. Deine Zahlen und Formulierungen müssen unangetastet bleiben."
      },
      {
        "title": "Das Gremium sieht sechs Präsentationen hintereinander",
        "body": "Die der Konkurrenz: Vorlagen und Stichpunktwüsten. An eine Präsentation mit klarer visueller Hierarchie erinnert man sich, wenn es an die Bewertung geht."
      }
    ],
    "outcomes": [
      "Leistungsumfang, Preise und Service-Level aus deinem Original übernommen und per Faktencheck abgeglichen",
      "Deine Marke von deiner Website, nicht die Agenturvorlage, die alle anderen nutzen",
      "Textänderungen in der ganzen Präsentation sofort, etwa Kundenname oder Fußzeile, ohne einen Credit zu verbrauchen",
      "Bearbeitbare PowerPoint-Datei plus PDF zum Hochladen ins Vergabeportal"
    ],
    "faqs": [
      {
        "q": "Fasst PitchBoost meine Preise oder Zusagen an?",
        "a": "Nein, das ist nicht vorgesehen. Zahlen und Formulierungen aus deiner hochgeladenen Präsentation gelten als deine Fakten und werden übernommen. Was die KI nicht auf deine Präsentation zurückführen kann, markiert oder entfernt ein Faktencheck, bevor du das Ergebnis siehst."
      },
      {
        "q": "Kann ich die Präsentation für die nächste Ausschreibung wiederverwenden?",
        "a": "Ja. Nach dem Neuaufbau bearbeitest du einzelne Folien oder änderst Text in der ganzen Präsentation. Willst du zum Beispiel überall den Kundennamen ersetzen, wird das sofort umgesetzt und kostet nichts."
      },
      {
        "q": "Bleibt mein Dokument vertraulich?",
        "a": "Deine Präsentation wird verarbeitet, um deinen Neuaufbau zu erstellen, und nie zum Trainieren von Modellen verwendet. Entwürfe bleiben privat in deinem Konto, bis du sie veröffentlichst oder herunterlädst."
      },
      {
        "q": "Was kostet das?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien, also kostet dich das erste Angebot nichts. Der Starter-Tarif kostet 7 $ im Monat, ohne PitchBoost-Badge, und der Pro-Tarif 29 $ im Monat, für Teams, die jede Woche ein Angebot abgeben."
      }
    ],
    "ctaHeadline": "Dein Angebot ist stark. Jetzt sieht man es ihm auch an."
  },

  {
    "slug": "data-heavy-deck-redesign",
    "navLabel": "Daten- und Umfragefolien",
    "metaTitle": "Umfrageergebnisse und Datenfolien mit KI neu gestalten | PitchBoost",
    "metaDescription": "Umfrageergebnisse, Dashboard-Zusammenfassung oder Kennzahlen-Review hochladen und übersichtlich zurückbekommen, Diagrammwerte aus der Datei übernommen.",
    "heroHeadline": "Umfrageergebnisse und Kennzahlen, neu gestaltet. Die Zahlen liest PitchBoost aus deiner Datei.",
    "heroSubhead": "Diagramme, Tabellen und vierzig Folien voller Prozentwerte. PitchBoost liest die Diagrammdaten direkt aus deiner .pptx, übernimmt die Zahlen, gleicht sie per Faktencheck mit dem Original ab und baut die Folien so neu auf, dass die Erkenntnisse auf einen Blick ankommen.",
    "painPoints": [
      {
        "title": "Die Daten stimmen, nur lesen kann sie keiner",
        "body": "Standardfarben im Diagramm, Beschriftungen in zwölf Punkt, drei Diagramme pro Folie. Die Erkenntnis steckt irgendwo darin, hinter der Formatierung."
      },
      {
        "title": "Redesign-Tools erfinden gern, was sie nicht lesen können",
        "body": "Die meisten KI-Tools sehen ein Diagramm als Bild und füllen die Lücken mit plausiblen Zahlen. Für eine Ergebnispräsentation ist das ein Ausschlusskriterium."
      },
      {
        "title": "Vierzig Folien einheitlich zu halten, ist die eigentliche Arbeit",
        "body": "Eine Farbpalette, eine Skala, eine Art der Beschriftung. Von Hand dauert das einen Tag, aus Versehen passiert es nie."
      }
    ],
    "outcomes": [
      "Datenreihen, Kategorien und Werte direkt aus der Datei gelesen und übernommen",
      "Ein Faktencheck entfernt Zahlen, die die KI nicht auf deine Präsentation zurückführen kann, bevor du das Ergebnis siehst",
      "Ein visuelles System für alle Diagramme und Tabellen",
      "Bearbeitbare PowerPoint-Datei und PDF für die Ergebnispräsentation"
    ],
    "faqs": [
      {
        "q": "Wie liest PitchBoost meine Diagramme?",
        "a": "PowerPoint speichert die Diagrammdaten in der .pptx. PitchBoost liest jede Datenreihe samt Kategorien und Werten aus, berücksichtigt Prozentformate und überträgt sie als deine Fakten in die neu aufgebauten Folien."
      },
      {
        "q": "Was passiert mit einer Zahl, die PitchBoost nicht prüfen kann?",
        "a": "Ein Faktencheck gleicht jede Zahl der neu aufgebauten Präsentation mit deiner hochgeladenen Präsentation und deiner Website ab. Was sich nicht zurückverfolgen lässt, wird automatisch entfernt und für dich aufgelistet."
      },
      {
        "q": "Kann PitchBoost aus einer Tabelle ein Diagramm machen oder aus einem Diagramm eine große Kennzahl?",
        "a": "Der Neuaufbau konzentriert sich auf Layout und Lesbarkeit und lässt deine Daten Daten sein. Mit Folienänderungen danach wird eine Schlüsselzahl zur großen Kennzahl, wenn du darum bittest."
      },
      {
        "q": "Was kostet das?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien. Der Starter-Tarif kostet 7 $ im Monat, ohne PitchBoost-Badge, und der Pro-Tarif 29 $ im Monat, passend für monatliche Berichtszyklen."
      }
    ],
    "ctaHeadline": "Deine Zahlen. Endlich lesbar."
  },
  {
    "slug": "board-deck-redesign",
    "navLabel": "Board-Präsentation neu gestalten",
    "metaTitle": "Board-Präsentation neu gestalten: fertig in Minuten | PitchBoost",
    "metaDescription": "Board-Präsentation hochladen, sitzungsreif zurückbekommen: deine Zahlen und Story, klares Layout, deine Marke. In Minuten statt am Wochenende davor.",
    "heroHeadline": "Donnerstag ist Board-Meeting. Die Präsentation darf ruhig danach aussehen.",
    "heroSubhead": "Lade die Präsentation hoch, die du hast. PitchBoost übernimmt deine Zahlen und alles, worüber das Board entscheiden soll, gestaltet die Folien im Design deiner Marke neu und gibt dir eine PowerPoint-Datei zurück, die ein Board-Mitglied auch am Gate auf dem Handy lesen kann.",
    "painPoints": [
      {
        "title": "Die Zahlen sind final, die Folien nicht",
        "body": "Die Finanzabteilung hat am Dienstagabend freigegeben. Jetzt besteht das Update aus zwölf Folien voller eingefügter Tabellen in drei Schriften, und die einzige Person, die das hinbekäme, hat eigentlich einen ganz anderen Job."
      },
      {
        "title": "Board-Präsentationen werden an ihrer Lesbarkeit gemessen",
        "body": "Board-Mitglieder lesen auf dem Handy, zwischen zwei Flügen. Volle Folien mit Tabellen in 9-Punkt-Schrift werden überflogen, und der Beschlussantrag auf Folie 11 geht unter. Layout ist hier keine Dekoration: Es entscheidet, ob die Entscheidung fällt."
      },
      {
        "title": "Jedes Quartal beginnt mit dem Chaos vom letzten",
        "body": "Die Präsentation ist ein Baumkuchen aus vier früheren Sitzungen: alte Farben, verwaiste Abschnitte, ein Logo aus der Zeit vor dem Rebranding. Niemand hat Zeit, aufzuräumen, also räumt niemand auf."
      }
    ],
    "outcomes": [
      "Zahlen aus deinen Folien übernommen; der Faktencheck markiert alles, was er nicht darauf zurückführen kann",
      "Ein klares Anliegen pro Folie, so gesetzt, dass es ankommt",
      "Deine aktuelle Marke, direkt von deiner Website, auf jeder Folie",
      "PDF und PowerPoint in wenigen Minuten, bereit für die Sitzungsunterlagen"
    ],
    "faqs": [
      {
        "q": "Ändert PitchBoost meine Zahlen?",
        "a": "Das ist nicht vorgesehen: Der Neuaufbau arbeitet mit den Zahlen aus deinem Upload. Danach gleicht ein Faktencheck die neue Präsentation mit deinen Folien und deiner Website ab; was er nicht zurückverfolgen kann, wird markiert und entfernt, bevor du die Präsentation siehst."
      },
      {
        "q": "Bleibt das Material vertraulich?",
        "a": "Ja. Präsentationen sind standardmäßig privat und werden nur über Links geteilt, die du selbst erstellst, auf Wunsch mit Passwort und Ablaufdatum."
      },
      {
        "q": "Wie lange dauert der Neuaufbau einer Board-Präsentation?",
        "a": "Zwei bis vier Minuten für ein typisches Update mit 15 Folien, einschließlich der automatischen Qualitätsprüfung."
      },
      {
        "q": "Was kostet das?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien und kleinem PitchBoost-Badge. Starter kostet 7 $ im Monat, für Präsentationen mit bis zu 25 Folien und ohne Badge; Pro kostet 29 $ im Monat."
      }
    ],
    "ctaHeadline": "Schick dem Board eine Präsentation, die nach beschlossener Sache aussieht.",
    "updated": "2026-09-12"
  },
  {
    "slug": "conference-talk-slides-redesign",
    "navLabel": "Folien für Konferenzvorträge",
    "metaTitle": "Konferenzvortrag: Folien bühnenreif neu gestalten | PitchBoost",
    "metaDescription": "Lade deinen Vortrag hoch und bekomm Folien für die Bühne zurück: eine Idee pro Folie, große Schrift, deine Marke. Dein Inhalt bleibt, das Design passt endlich.",
    "heroHeadline": "Dein Vortrag ist gut. Deine Folien sind eine Bleiwüste.",
    "heroSubhead": "PitchBoost baut deine Konferenzpräsentation für die letzte Reihe neu auf: eine Idee pro Folie, Schrift, die man noch aus dreißig Metern liest, durchgehend deine Marke. Und jeder Punkt, den du geschrieben hast, bleibt drin.",
    "painPoints": [
      {
        "title": "Zum Lesen geschrieben, an die Wand geworfen",
        "body": "Die meisten Vortragsfolien fangen als Notizen an. Absätze auf Folien funktionieren am Schreibtisch und gehen am Beamer ein. Das Publikum liest, statt zuzuhören, und am Ende konkurrierst du mit deinen eigenen Folien."
      },
      {
        "title": "Die Vorlage des Veranstalters beißt sich mit deiner Marke",
        "body": "Veranstalter schicken eine Vorlage in ihren Farben. Dein Logo landet mit 40 Pixeln in einer Ecke, und der Vortrag sieht aus wie jede andere Session im selben Track."
      },
      {
        "title": "Die Deadline heißt Folienabgabe",
        "body": "Die Folien sind eine Woche vor dem Vortrag fällig, genau dann, wenn sich der Inhalt noch bewegt. Das Design fliegt als Erstes raus."
      }
    ],
    "outcomes": [
      "Folien für einen Saal, nicht für ein Dokument: weniger Wörter, größere Schrift, ein Punkt pro Folie",
      "Deine Marke auf jeder Folie, direkt von deiner eigenen Website",
      "Der volle Text bleibt in der bearbeitbaren PowerPoint-Datei erhalten, bereit für deine Vortragsnotizen",
      "In wenigen Minuten fertig, mit einem Link zum Teilen für das Follow-up nach dem Vortrag"
    ],
    "faqs": [
      {
        "q": "Kürzt PitchBoost meinen Inhalt?",
        "a": "Beim Neuaufbau wird aus jeder Originalfolie wieder eine Folie, und der Inhalt bleibt erhalten. Willst du es knapper, wähl die Option zum Kürzen: Sie verdichtet die Story und behält die Kernpunkte."
      },
      {
        "q": "Kann ich das Seitenverhältnis der Veranstaltung verwenden?",
        "a": "Präsentationen werden in 16:9 gebaut, dem Format fast jeder Konferenzleinwand. Will ein Veranstaltungsort 4:3, exportierst du nach PowerPoint und passt das in Sekunden an."
      },
      {
        "q": "Bekomme ich eine bearbeitbare Datei?",
        "a": "Ja. Du kannst eine bearbeitbare PowerPoint-Datei mit echten Textfeldern für Änderungen in letzter Minute herunterladen oder die pixelgenaue Version für die Folienabgabe."
      },
      {
        "q": "Wie viel kostet das?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien und kleinem Badge. Starter kostet 7 $ im Monat, für bis zu 25 Folien und ohne Badge; Pro kostet 29 $ im Monat."
      }
    ],
    "ctaHeadline": "Gib der letzten Reihe einen Grund, aufzuschauen.",
    "updated": "2026-09-12"
  },
  {
    "slug": "qbr-deck-redesign",
    "navLabel": "QBR-Präsentation neu gestalten",
    "metaTitle": "Quarterly Business Review: QBR-Folien neu gestalten | PitchBoost",
    "metaDescription": "Mach aus dem QBR vom letzten Quartal ein sauberes Review, das dein Kunde wirklich liest: deine Kennzahlen, besseres Layout, deine Marke, in Minuten.",
    "heroHeadline": "Das Quartal ist vorbei. Die Präsentation muss nicht aussehen, als hätte sie einiges mitgemacht.",
    "heroSubhead": "Lade die Präsentation für dein Quarterly Business Review (QBR) hoch, egal in welchem Zustand. PitchBoost übernimmt deine Kennzahlen und nächsten Schritte, baut das Layout im Design deiner Marke neu auf und gibt dir eine Präsentation, die sich wie ein Account-Plan liest, nicht wie eine Sammlung von Statusmeldungen.",
    "painPoints": [
      {
        "title": "Gleiche Vorlage, zwölftes Quartal",
        "body": "QBR-Präsentationen werden so lange weiterkopiert, bis niemand mehr weiß, warum es Folie 7 gibt. Veraltete Abschnitte und die Farben vom letzten Jahr zeigen dem Kunden genau, wie viel Aufmerksamkeit er bekommt."
      },
      {
        "title": "Die Kennzahlen gehen unter",
        "body": "Nutzung, Kündigungsrisiko, der Vorschlag zum Ausbau: alles in der Präsentation, nichts davon sichtbar. Wer beim Kunden für dich trommelt, hat keine Folie zum Weiterleiten, die die Chefetage in zehn Sekunden versteht."
      },
      {
        "title": "Account-Manager sind keine Designer",
        "body": "Wer den Kunden am besten kennt, baut nachts um elf die Folien. Design ist das Letzte, wofür diese Stunde draufgehen sollte."
      }
    ],
    "outcomes": [
      "Kennzahlen nach vorn geholt, in Layouts, die der Kunde auf einen Blick erfasst",
      "Verlängerung und Ausbau, jeweils auf einer eigenen, klaren Folie",
      "Deine Marke von deiner Website, jedes Quartal einheitlich umgesetzt",
      "Ein Link mit Tracking, damit du weißt, wann der Kunde die Präsentation vor dem Termin geöffnet hat"
    ],
    "faqs": [
      {
        "q": "Übernimmt PitchBoost unsere Nutzungszahlen genau?",
        "a": "Die Zahlen kommen aus deinem Upload. Danach gleicht ein Faktencheck die neue Präsentation mit deinen Folien und deiner Website ab und entfernt, was er nicht zurückverfolgen kann."
      },
      {
        "q": "Kann ich das jedes Quartal wiederverwenden?",
        "a": "Ja. Lass die Präsentation in PitchBoost, aktualisiere im nächsten Quartal die Zahlen per KI oder von Hand und exportiere erneut. Starter und Pro enthalten jeden Monat Credits, genau dafür."
      },
      {
        "q": "Kann mein Kunde sehen, wer die Präsentation angesehen hat?",
        "a": "Nein. Die Aufrufstatistiken sind für dich: Du siehst Aufrufe und die Zeit pro Folie. Der Kunde sieht eine aufgeräumte Präsentation."
      },
      {
        "q": "Was kostet das?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien und kleinem Badge. Starter kostet 7 $ im Monat, für bis zu 25 Folien und ohne Badge; Pro kostet 29 $ im Monat, mit bis zu 60 Folien und eigenen Domains."
      }
    ],
    "ctaHeadline": "Ein Review, dem man ansieht, dass der Kunde zählt.",
    "updated": "2026-09-12"
  },
  {
    "slug": "capabilities-deck-redesign",
    "navLabel": "Agenturpräsentation neu gestalten",
    "metaTitle": "Agenturpräsentation und Credentials neu gestalten | PitchBoost",
    "metaDescription": "Agentur- oder Beratungspräsentation neu gestalten: deine Case Studies und Leistungen, professionelles Layout, deine Marke. In Minuten bereit für den Pitch.",
    "heroHeadline": "Eine Agenturpräsentation, die nach deinen Preisen aussieht.",
    "heroSubhead": "Lade die Leistungspräsentation hoch, die du jedem Interessenten schickst. PitchBoost behält deine Leistungen, Case Studies und Kundenlogos, baut das Design im Look deiner Marke neu auf und gibt dir eine Version, der du deine Preisliste guten Gewissens beilegst.",
    "painPoints": [
      {
        "title": "Die Präsentation verkauft Design und sieht aus wie 2019",
        "body": "Agenturen und Studios verschicken Credentials, die die eigene Arbeit unter Wert verkaufen. Das merkt der Interessent, bevor die Case Studies überhaupt zum Zug kommen."
      },
      {
        "title": "Von allen bearbeitet, von niemandem verantwortet",
        "body": "Mit jedem neuen Lead kommt eine Folie dazu. Nach einem Jahr hat die Präsentation 40 Folien, drei Schriften und zwei Logos. Sie wieder einzudampfen, ist ein Projekt, für das sich niemand meldet."
      },
      {
        "title": "Case Studies sind das Produkt, und sie gehen unter",
        "body": "Die Ergebnisse stehen im Kleingedruckten einer Aufzählung. Die Zahlen, die den Pitch gewinnen, sollten das Größte auf der Folie sein."
      }
    ],
    "outcomes": [
      "Ergebnisse aus Case Studies als große Kennzahlen, direkt aus deinem Text übernommen",
      "Kundenlogos und Leistungen so angeordnet, wie es ein Designer tun würde",
      "Deine Marke von deiner Website, auf jeder Folie",
      "Ein Link, der dir sagt, wann der Interessent die Präsentation geöffnet hat"
    ],
    "faqs": [
      {
        "q": "Bleiben unsere Kundenlogos erhalten?",
        "a": "Ja. Bilder aus dem Upload kommen mit; vor dem Neuaufbau wählst du aus, welche bleiben, und Logos werden platziert statt verzerrt."
      },
      {
        "q": "Kann PitchBoost eine Präsentation mit 40 Folien kürzen?",
        "a": "Ja. Wähl die Option zum Kürzen, dann wird die Story zu einer straffen Präsentation verdichtet, und die Case Studies, die du markiert hast, bleiben drin. Oder bau sie eins zu eins neu auf und streich danach."
      },
      {
        "q": "Können wir für jeden Interessenten eine eigene Version machen?",
        "a": "Ja. Lass die Präsentation in PitchBoost und pass dann mit KI-Änderungen oder dem Präsentationsgenerator den Einstieg und die Reihenfolge der Case Studies für jeden Pitch an."
      },
      {
        "q": "Was kostet das?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien und kleinem Badge. Starter kostet 7 $ im Monat, für Präsentationen mit bis zu 25 Folien und ohne Badge; Pro kostet 29 $ im Monat."
      }
    ],
    "ctaHeadline": "Schick Credentials, die zur Rechnung passen.",
    "updated": "2026-09-12"
  },
  {
    "slug": "pitch-competition-deck-redesign",
    "navLabel": "Pitch-Deck für Wettbewerbe",
    "metaTitle": "Demo Day: Pitch-Deck für Wettbewerbe neu gestalten | PitchBoost",
    "metaDescription": "Pitch-Deck für Accelerator oder Wettbewerb neu gestalten: drei Minuten Bühne, eine Idee pro Folie, deine Story, deine Marke. In Minuten fertig für den Demo Day.",
    "heroHeadline": "Drei Minuten auf der Bühne. Folien, die mithalten.",
    "heroSubhead": "Lade dein Pitch-Deck für den Wettbewerb hoch. PitchBoost behält Problem, Traction und Ask, baut jede Folie für große Leinwände und knappe Redezeit neu auf und übernimmt deine Marke von deiner Website.",
    "painPoints": [
      {
        "title": "Für Leser gebaut, im Saal bewertet",
        "body": "Das Pitch-Deck, mit dem du in den Wettbewerb gekommen bist, war für ein Bewerbungsformular geschrieben. Auf der Bühne zwingen volle Folien die Jury zum Lesen, während du redest, und sie verpasst beides."
      },
      {
        "title": "Die Traction-Folie macht die ganze Arbeit, und zwar schlecht",
        "body": "Die eine Zahl, auf die es ankommt, steckt in einer Tabelle mit elf anderen. Die Jury erinnert sich an die große Zahl auf einer aufgeräumten Folie, nicht an den Zahlenfriedhof."
      },
      {
        "title": "Morgen ist Demo Day",
        "body": "Das Feedback der Mentoren kommt um 18 Uhr. Von Hand neu gestalten heißt: eine Nacht lang Kästchen schieben statt proben."
      }
    ],
    "outcomes": [
      "Eine Idee pro Folie, ausgelegt auf Bühne und Countdown",
      "Traction und Ask auf eigenen Folien, direkt aus deinem Pitch übernommen",
      "Deine Marke und dein Logo auf jeder Folie, nicht die Vorlage des Accelerators",
      "Bearbeitbare PowerPoint-Datei und PDF in wenigen Minuten, dazu ein Link für die Jury danach"
    ],
    "faqs": [
      {
        "q": "Ändert PitchBoost meine Story?",
        "a": "Nein. Ein Neuaufbau behält Reihenfolge und Inhalt deiner Folien und gestaltet das Layout neu. Haben dir die Mentoren gesagt, dass es zu lang ist, nimm die Option zum Kürzen."
      },
      {
        "q": "Kann PitchBoost Zahlen ergänzen, damit die Traction besser aussieht?",
        "a": "Dafür ist es nicht gebaut, und das mit Absicht. Zahlen sollen aus deinem Pitch-Deck oder deiner Website stammen; der Faktencheck gleicht die neue Präsentation damit ab und entfernt, was er nicht zurückverfolgen kann, bevor du sie siehst."
      },
      {
        "q": "Wie schnell geht das?",
        "a": "Zwei bis vier Minuten für eine typische Präsentation mit 10 bis 15 Folien, einschließlich Qualitätsprüfung."
      },
      {
        "q": "Was kostet das?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien und kleinem Badge. Starter kostet 7 $ im Monat, für bis zu 25 Folien und ohne Badge; Pro kostet 29 $ im Monat."
      }
    ],
    "ctaHeadline": "Üb du den Pitch. Wir bringen die Folien in Form.",
    "updated": "2026-09-12"
  },
  {
    "slug": "consulting-slides-redesign",
    "navLabel": "Consulting-Folien neu gestalten",
    "metaTitle": "Consulting-Folien auf Beraterniveau neu gestalten | PitchBoost",
    "metaDescription": "Deine Beratungspräsentation, so klar wie bei der Konkurrenz: Action Titles, ein Diagramm pro Folie, sauberes Layout in deiner Marke. Hochladen, in Minuten zurück.",
    "heroHeadline": "Folien auf Beraterniveau, ohne die Grafikabteilung der großen Häuser.",
    "heroSubhead": "Lade deine Analyse hoch. PitchBoost übernimmt deine Erkenntnisse und Diagrammwerte, baut jede Folie mit einem Action Title und genau einer Botschaft neu auf und bringt alles ins Design deiner Firma, das es von deiner Website liest.",
    "painPoints": [
      {
        "title": "Starke Analyse, aber Folie 14 ist unlesbar",
        "body": "Die Gedanken sind messerscharf, und auf den Folien stehen sie als sechs Diagramme und ein Absatz. Kunden messen Gründlichkeit daran, wie klar sie aufbereitet ist, ob das nun fair ist oder nicht."
      },
      {
        "title": "Große Beratungen haben eine Produktionsabteilung",
        "body": "Die großen Häuser haben Leute, deren ganzer Job Folien sind. Eine Boutique hat dich: um Mitternacht, beim Ausrichten von Textfeldern für den Lenkungsausschuss am nächsten Morgen."
      },
      {
        "title": "Vorlagen liefern keine Action Titles",
        "body": "Eine Vorlage regelt die Schriften. Aus „Umsatzanalyse“ macht sie nicht den Satz, den der Kunde mitnehmen soll. Das ist redaktionelle Arbeit, und genau da verlieren unabhängige Berater Zeit."
      }
    ],
    "outcomes": [
      "Action Titles, die die Erkenntnis aussprechen, gebaut aus deinem eigenen Inhalt",
      "Eine Botschaft pro Folie, Diagramme und Tabellen aufbereitet für den Lenkungsausschuss",
      "Diagrammwerte direkt aus deiner PowerPoint-Datei übernommen",
      "Das Design deiner Firma auf jeder Folie, dazu eine bearbeitbare PowerPoint-Datei für den letzten Schliff"
    ],
    "faqs": [
      {
        "q": "Liest PitchBoost meine Diagramme?",
        "a": "Ja. Diagrammdaten in der .pptx werden zusammen mit dem Folientext ausgelesen. So fließen Datenreihen und Werte in den Neuaufbau ein, und der Faktencheck weiß, dass sie von dir stammen."
      },
      {
        "q": "Schreibt PitchBoost meine Erkenntnisse um?",
        "a": "Es behält den Inhalt und schärft die Darstellung: Überschriften werden zu Aussagen, dichte Absätze zu gegliederten Punkten. Die Zahlen übernimmt es aus deinem Text."
      },
      {
        "q": "Bekomme ich eine bearbeitbare Datei für den letzten Schliff?",
        "a": "Ja. Die bearbeitbare PowerPoint-Datei hat echte Textfelder und echte Schriften; die pixelgenaue Version entspricht der Web-Präsentation Folie für Folie."
      },
      {
        "q": "Was kostet das?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien und kleinem Badge. Starter kostet 7 $ im Monat, für bis zu 25 Folien und ohne Badge; Pro kostet 29 $ im Monat, mit bis zu 60 Folien und eigenen Domains."
      }
    ],
    "ctaHeadline": "Mach die Folien so scharf wie die Analyse.",
    "updated": "2026-09-12"
  },
  {
    "slug": "beautify-powerpoint",
    "navLabel": "PowerPoint verschönern",
    "metaTitle": "PowerPoint mit KI verschönern, ohne neu anzufangen | PitchBoost",
    "metaDescription": "PowerPoint mit KI verschönern: .pptx hochladen, Inhalt behalten, in Minuten mit klaren Layouts, echter Typografie und deinen Markenfarben zurück. Kostenlos testen.",
    "heroHeadline": "PowerPoint verschönern, ohne von vorn anzufangen",
    "heroSubhead": "Die meisten Tools zum PowerPoint-Verschönern stecken deine Folien in eine hübschere Vorlage und erklären die Sache damit für erledigt. PitchBoost liest, was jede Folie sagen will, und setzt es dann sauber im Design deiner Marke um: Abstände, Hierarchie, Schrift, Farbe und Bilder, die zum Inhalt passen, statt gegen ihn zu arbeiten.",
    "painPoints": [
      {
        "title": "Die Ein-Klick-Verschönerer sehen alle gleich aus",
        "body": "Schick eine Präsentation durch ein Tool, das nur die Vorlage tauscht, und du bekommst den Look der Vorlage, nicht deinen. Farbverlaufs-Kleckse, Stock-Icons, ein Farbschema, das niemandem gehört. Es ist hübscher als vorher und sieht trotzdem aus wie tausend andere Präsentationen."
      },
      {
        "title": "Hässliche Folien sind meist ein Layoutproblem, kein Dekoproblem",
        "body": "Acht Aufzählungspunkte, ein Diagramm in irgendeiner Größe eingefügt, ein Titel über zwei Zeilen. Dagegen hilft auch kein Schlagschatten. Eine Folie verschönern heißt: entscheiden, worum es auf ihr geht, und diesem einen Punkt den Platz geben, den er braucht."
      },
      {
        "title": "Du hast keinen Nachmittag, um Textfelder hin und her zu schieben",
        "body": "Ausrichten, Skalieren und Umfärben von Hand ist genau die Arbeit, die einen Abend frisst und am nächsten Morgen trotzdem leicht schief aussieht. Die Präsentation muss raus, also fällt der Feinschliff weg."
      }
    ],
    "outcomes": [
      "Jede Folie um ihre Kernaussage herum neu gesetzt: eine Idee, klare Hierarchie, Luft zum Atmen",
      "Farben, Logo und Tonalität deiner Marke, direkt von deiner Website, nicht aus einer Vorlagengalerie",
      "Aus Stichpunktwüsten werden strukturierte Layouts; Diagramme und Tabellen in lesbarer Größe",
      "Ein Link zum Teilen, dazu PDF und eine bearbeitbare PowerPoint-Datei, in wenigen Minuten"
    ],
    "faqs": [
      {
        "q": "Ändert das Verschönern, was meine Folien sagen?",
        "a": "Nein. Der Inhalt jeder Folie bleibt erhalten, seine Darstellung wird neu aufgebaut: Layout, Typografie, Farbe, Abstände und Visuals. Wo eine Folie überladen ist, wird der Text klarer gegliedert, aber Aussagen und Zahlen bleiben deine."
      },
      {
        "q": "Was ist der Unterschied zu einem KI-Tool, das PowerPoint verschönert?",
        "a": "Tools, die nur die Vorlage tauschen, gestalten deine vorhandenen Kästen um. PitchBoost liest die Präsentation, versteht, welche Aufgabe jede Folie hat, und gestaltet sie von Grund auf im Design deiner Marke. Am deutlichsten zeigt sich der Unterschied bei vollen Folien, Diagrammen und allem, was nie in die Vorlage gepasst hat."
      },
      {
        "q": "Kann ich Google Slides oder Keynote hochladen?",
        "a": "Ja, wenn du vorher als .pptx exportierst. Beide können das in einem Schritt. Dateien bis 50 MB werden angenommen."
      },
      {
        "q": "Was kostet es, eine Präsentation zu verschönern?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien und kleinem PitchBoost-Badge. Starter kostet 7 $ im Monat, für bis zu 25 Folien und ohne Badge; Pro kostet 29 $ im Monat, mit bis zu 60 Folien und eigenen Domains."
      }
    ],
    "ctaHeadline": "Lade die Präsentation hoch. Sie kommt schöner zurück und bleibt deine.",
    "updated": "2026-09-16"
  },
  {
    "slug": "powerpoint-makeover-before-and-after",
    "gallery": [
      { "before": "/redesign/makeover/before-1.webp", "after": "/redesign/makeover/after-1.webp", "caption": "Titelfolie: derselbe Firmenname und derselbe Slogan, jetzt im Markendesign von der Website statt in einem marineblauen Rechteck." },
      { "before": "/redesign/makeover/before-3.webp", "after": "/redesign/makeover/after-3.webp", "caption": "Die Bleiwüste: Aus fünf langen Aufzählungspunkten wird ein Layout, und alle Zahlen darin (23 %, 3,4 Tage, 61 %, 34 %, 4.200 $, 11 Stunden) sind noch da." },
      { "before": "/redesign/makeover/before-4.webp", "after": "/redesign/makeover/after-4.webp", "caption": "Preistabelle: drei Preisstufen, dieselben Zahlen, lesbar bis in die letzte Reihe." },
      { "before": "/redesign/makeover/before-5.webp", "after": "/redesign/makeover/after-5.webp", "caption": "Diagrammfolie: Die Werte hinter dem Diagramm werden aus der Datei gelesen und als Vergleichstabelle neu aufgebaut, mit den wichtigsten Zahlen vorn und der Verbesserung je Kunde ausgerechnet." },
      { "before": "/redesign/makeover/before-6.webp", "after": "/redesign/makeover/after-6.webp", "caption": "Nächste Schritte: eine Abschlussfolie mit der konkreten Bitte, dem Zeitplan und einem Weg, zu antworten." }
    ],
    "navLabel": "PowerPoint-Makeover: vorher und nachher",
    "metaTitle": "PowerPoint-Makeover vorher und nachher: was KI ändert | PitchBoost",
    "metaDescription": "Was ein PowerPoint-Makeover Folie für Folie ändert: Titel, Agenda, Textwände, Diagramme, Team- und Abschlussfolien. Teste es in Minuten mit deiner eigenen Datei.",
    "heroHeadline": "PowerPoint-Makeover, vorher und nachher, Folie für Folie",
    "heroSubhead": "Am schnellsten beurteilst du ein Makeover, wenn du dieselbe Präsentation zweimal siehst. Hier steht, was sich an jeder Art von Folie ändert, wenn PitchBoost eine Präsentation neu aufbaut, und wie du den Vorher-nachher-Vergleich kostenlos mit deiner eigenen Datei machst.",
    "painPoints": [
      {
        "title": "Titelfolie: vom Dateinamen zum ersten Eindruck",
        "body": "Vorher: ein Standardtitel aus der Vorlage, ein Datum, vielleicht ein Logo, in die Ecke gequetscht. Nachher: Farbe und Logo deiner Marke, eine Überschrift, die sagt, wofür die Präsentation da ist, und dein Name, lesbar bis in die letzte Reihe."
      },
      {
        "title": "Die Stichpunktwand: von acht Zeilen zu einer Aussage",
        "body": "Vorher: ein Titel, acht Aufzählungspunkte, Schrift in 11 Punkt, und vorne wird alles vorgelesen. Nachher: die eine Kernaussage der Folie als Titel, die stützenden Punkte in einer Struktur, die zu ihnen passt (Schritte, ein Vergleich, ein Raster), und die Details in den Vortragsnotizen oder auf einer Folgefolie."
      },
      {
        "title": "Die Diagrammfolie: vom Screenshot zum Beleg",
        "body": "Vorher: ein Diagramm, eingefügt in irgendeiner Größe, Achsenbeschriftungen zu klein zum Lesen, die Kernaussage nirgends. Nachher: Das Diagramm füllt die Folie, die Kernaussage steht im Titel, deine Datenwerte kommen aus der Datei, und die Farben passen zu deiner Marke."
      }
    ],
    "outcomes": [
      "Team- und Über-uns-Folien: einheitliche Porträtgrößen, lesbare Namen, keine Clipart-Organigramme",
      "Agenda und Kapiteltrenner: ein visuelles System für die ganze Präsentation statt fünf",
      "Abschlussfolie: ein echter nächster Schritt und Kontaktdaten statt des Worts „Fragen?“",
      "Die ganze Präsentation in einer Marke: gleiche Schrift, gleiche Palette, gleiche Abstände auf jeder Folie"
    ],
    "faqs": [
      {
        "q": "Kann ich einen Vorher-nachher-Vergleich meiner eigenen Präsentation sehen, bevor ich zahle?",
        "a": "Ja. Der Free-Tarif enthält jeden Monat 150 Credits, genug für ein Makeover mit bis zu 10 Folien. Lade die .pptx hoch, gib PitchBoost deine Website für die Marke und vergleich das Ergebnis nach ein paar Minuten mit dem Original."
      },
      {
        "q": "Behält das Makeover meinen Inhalt?",
        "a": "Es behält den Inhalt und baut das Design neu auf. Titel werden zur Kernaussage der Folie, dichter Text wird neu gegliedert, und Zahlen, Aussagen und Diagrammwerte werden aus deiner Datei übernommen. Ein Faktencheck gleicht die neue Präsentation mit dem Original ab und markiert, was er nicht zurückverfolgen kann."
      },
      {
        "q": "Was ist, wenn ich nur einzelne Folien überarbeiten will?",
        "a": "Jede Folie der neu aufgebauten Präsentation ist bearbeitbar, und du kannst einzelne Folien neu erzeugen oder wiederherstellen. Die meisten lassen das ganze Makeover laufen und feilen danach von Hand an den zwei, drei Folien, die ihnen am wichtigsten sind."
      },
      {
        "q": "Bekomme ich eine bearbeitbare PowerPoint-Datei zurück?",
        "a": "Ja. Du kannst eine bearbeitbare PowerPoint-Datei mit echten Textfeldern und Schriften herunterladen, eine pixelgenaue Version, die der Web-Präsentation entspricht, oder ein PDF. Der Web-Link ist außerdem sofort live, du kannst die Nachher-Version also direkt teilen."
      }
    ],
    "ctaHeadline": "Mach den Vorher-nachher-Vergleich mit deiner eigenen Präsentation. Ausprobieren kostet nichts.",
    "updated": "2026-09-16"
  },
  {
    "slug": "modernize-old-powerpoint",
    "navLabel": "Alte PowerPoint modernisieren",
    "metaTitle": "Alte PowerPoint mit KI modernisieren und auffrischen | PitchBoost",
    "metaDescription": "Alte PowerPoint mit KI modernisieren: Inhalt behalten, in Minuten zurück mit modernen Layouts, aktuellen Schriften, deiner heutigen Marke und im Breitbildformat.",
    "heroHeadline": "Deine alte PowerPoint läuft und läuft. Zeit, sie zu modernisieren.",
    "heroSubhead": "Der Inhalt trägt noch. Die Vorlage von 2014, die Verlaufsbalken, das Logo von vor zwei Rebrandings und die 4:3-Folien nicht. PitchBoost liest die alte Präsentation und baut sie als aktuelle neu auf, in der Marke, die du heute hast.",
    "painPoints": [
      {
        "title": "Gebaut für einen Beamer, den es nicht mehr gibt",
        "body": "Alte Präsentationen sind 4:3, mit schwarzen Balken auf jedem modernen Bildschirm, gesetzt in Calibri in drei verschiedenen Größen, mit WordArt-Titeln und einer Fußzeile, die noch eine alte Adresse nennt. Das fällt allen auf, bevor du deinen ersten Satz beendet hast."
      },
      {
        "title": "Die Marke hat sich verändert, die Präsentation nicht",
        "body": "Neues Logo, neue Farben, neue Website, und ausgerechnet die Vorzeigepräsentation trägt noch die alten. Ein Logo auf 40 Folien auszutauschen ist leicht; die ganze Präsentation so aussehen zu lassen, als wäre sie für die neue Marke gestaltet, nicht."
      },
      {
        "title": "Niemand will neu bauen, was funktioniert",
        "body": "Die Story wurde über Jahre in echten Meetings geschliffen. In einem neuen Tool von vorn anzufangen heißt, jede Folie neu auszudiskutieren. Was du brauchst, ist dieselbe Präsentation, auf den neuesten Stand gebracht, ohne anzufassen, was sich bewährt hat."
      }
    ],
    "outcomes": [
      "Folien im Breitbildformat 16:9 mit modernen Layouts, Schriften und Abständen",
      "Deine aktuelle Marke auf jeder Folie, direkt von deiner Website, wie sie heute online ist",
      "Gestalterische Altlasten entfernt: WordArt, Cliparts, Verlaufsbalken, verschachtelte Aufzählungen",
      "Deine Story und deine Zahlen, jetzt in einer Präsentation, die du als Link teilen oder herunterladen kannst"
    ],
    "faqs": [
      {
        "q": "Wird meine 4:3-Präsentation zu Breitbild?",
        "a": "Ja. Die neu aufgebaute Präsentation ist grundsätzlich 16:9, und jede Folie wird für das breitere Format neu gesetzt statt gestreckt. Alte Layouts werden ersetzt, nicht skaliert."
      },
      {
        "q": "Kann PitchBoost meine neue Marke statt der aus der Datei verwenden?",
        "a": "Ja. PitchBoost holt die Marke von deiner Website, nicht aus der alten Präsentation, also sind Logo, Farben und Tonalität die, die du heute verwendest. Das Logo kannst du prüfen, bevor irgendetwas erzeugt wird."
      },
      {
        "q": "Funktioniert das mit sehr alten .ppt-Dateien?",
        "a": "Lade eine .pptx hoch. Hast du noch eine alte .ppt, öffne sie in PowerPoint und speichere sie zuerst über „Datei > Speichern unter“ als .pptx; das dauert ein paar Sekunden. Dateien bis 50 MB werden angenommen."
      },
      {
        "q": "Was kostet es, eine Präsentation zu modernisieren?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien und kleinem Badge. Starter kostet 7 $ im Monat, für bis zu 25 Folien und ohne Badge; Pro kostet 29 $ im Monat, mit bis zu 60 Folien und eigenen Domains. Längere Präsentationen lassen sich vorher kürzen."
      }
    ],
    "ctaHeadline": "Behalte die Story, die funktioniert. Die Vorlage darf in Rente.",
    "updated": "2026-09-16"
  },
  {
    "slug": "powerpoint-designer-alternative",
    "navLabel": "PowerPoint-Designer-Alternative",
    "metaTitle": "PowerPoint-Designer funktioniert nicht? KI-Alternative | PitchBoost",
    "metaDescription": "Warum PowerPoint-Designer keine Designideen zeigt, was dagegen hilft und wie du die ganze Präsentation auf einmal in deiner Marke neu gestaltest. Kostenlos testen.",
    "heroHeadline": "Dem PowerPoint-Designer gehen die Ideen aus? Dann gestalte gleich die ganze Präsentation neu.",
    "heroSubhead": "Designer schlägt Layouts Folie für Folie vor, und nur, wenn eine Folie seinen Regeln entspricht. PitchBoost nimmt deine komplette .pptx, lernt deine Marke von deiner Website und baut jede Folie in einem Durchgang neu auf. Dann bekommst du eine bearbeitbare PowerPoint-Datei und einen Link, der dir zeigt, wer die Präsentation geöffnet hat.",
    "painPoints": [
      {
        "title": "Für diese Folie hat Designer leider keine Ideen",
        "body": "Designer braucht eine Internetverbindung, ein integriertes Design, das Layout „Titelfolie“ oder „Titel und Inhalt“ und keine zusätzlichen Textfelder oder Formen. Echte Präsentationen brechen diese Regeln auf fast jeder Folie, also genau dann, wenn du die Hilfe brauchst."
      },
      {
        "title": "Folie für Folie ist immer noch ein Tag Arbeit",
        "body": "Selbst wenn es klappt, bietet Designer Vorschläge für jede Folie einzeln an. Dreißig Folien heißen dreißig Entscheidungen, und die Ergebnisse sehen selten so aus, als gehörten sie zur selben Präsentation."
      },
      {
        "title": "Designer kennt die Designs von PowerPoint, nicht deine Marke",
        "body": "Designer funktioniert am besten mit den Designs, die PowerPoint mitbringt. Eigene und heruntergeladene Designs, also die, die Firmen tatsächlich verwenden, bekommen oft gar keine Vorschläge."
      }
    ],
    "outcomes": [
      "Jede Folie in einem Durchgang neu gestaltet, einheitlich von der ersten bis zur letzten",
      "Funktioniert auch bei vollen Folien, eigenen Designs und Textfeldern, die Designer überspringt",
      "Dein Logo, deine Farben und deine Tonalität, direkt von deiner Website",
      "Eine bearbeitbare PowerPoint-Datei, dazu ein Link mit Tracking, der zeigt, wer die Präsentation geöffnet hat"
    ],
    "faqs": [
      {
        "q": "Warum zeigt PowerPoint-Designer keine Designideen an?",
        "a": "Die üblichen Gründe: Du bist offline, die Präsentation nutzt ein eigenes oder heruntergeladenes Design, die Folie hat nicht das Layout „Titelfolie“ oder „Titel und Inhalt“, auf ihr liegen Formen oder Textfelder außerhalb der Platzhalter, es ist mehr als eine Folie markiert, oder jemand anderes bearbeitet gerade dieselbe Folie. Ältere .ppt-Dateien und Konten ohne Microsoft-365-Abo bekommen ebenfalls keine Vorschläge."
      },
      {
        "q": "Wie schalte ich Designer wieder ein?",
        "a": "Geh auf „Datei > Optionen > Allgemein“ und setz im Abschnitt PowerPoint-Designer den Haken bei der Option, Designideen automatisch anzuzeigen. Ist das Kästchen ausgegraut, hat deine IT-Abteilung die Funktion vermutlich deaktiviert. In Versionen mit Copilot findest du die Designvorschläge auf der Registerkarte „Start“."
      },
      {
        "q": "Brauche ich Microsoft 365, um PitchBoost zu nutzen?",
        "a": "Nein. PitchBoost läuft im Browser. Hochladen kannst du eine .pptx aus jeder PowerPoint-Version oder einen Export aus Google Slides oder Keynote; das Ergebnis lädst du als PowerPoint oder PDF herunter."
      },
      {
        "q": "Was kostet das?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien und kleinem Badge. Starter kostet 7 $ im Monat, für Präsentationen mit bis zu 25 Folien und ohne Badge; Pro kostet 29 $ im Monat, mit bis zu 60 Folien und eigenen Domains."
      }
    ],
    "ctaHeadline": "Schluss mit Folie für Folie.",
    "updated": "2026-09-25"
  },
  {
    "slug": "keynote-to-powerpoint",
    "navLabel": "Keynote in PowerPoint umwandeln",
    "metaTitle": "Keynote in PowerPoint umwandeln und neu gestalten | PitchBoost",
    "metaDescription": "Keynote als PowerPoint exportieren, ohne dass Schriften, Abstände und Layouts kaputtgehen: PitchBoost baut eine saubere, bearbeitbare .pptx in deiner Marke.",
    "heroHeadline": "Von Keynote zu PowerPoint, ohne zerschossene Folien",
    "heroSubhead": "Keynote exportiert mit einem Klick als .pptx, aber unterwegs wechseln Schriften, Text läuft über und Layouts verrutschen. Lade den Export hoch, und PitchBoost baut jede Folie als native PowerPoint-Folie im Design deiner Marke neu auf, damit sie auf jedem Laptop im Raum richtig aussieht.",
    "painPoints": [
      {
        "title": "Apple-Schriften überstehen die Reise nicht",
        "body": "Keynote-Präsentationen setzen auf Schriften, die PowerPoint unter Windows nicht hat. PowerPoint ersetzt sie durch etwas Ähnliches, und jeder Zeilenumbruch und jedes Textfeld verschiebt sich mit."
      },
      {
        "title": "Animationen und Layouts kommen platt an",
        "body": "Magic Move, eigene Animationen und manche gruppierten Objekte werden zu statischen oder holprigen Annäherungen. Die Präsentation öffnet sich, aber es ist nicht mehr die, die du gestaltet hast."
      },
      {
        "title": "Den Export zu reparieren dauert länger als neu anzufangen",
        "body": "So verschwindet ein Nachmittag: Folie für Folie Textfelder zurechtrücken. Der Kunde oder die Konferenz braucht eine .pptx, die funktioniert, und zwar heute."
      }
    ],
    "outcomes": [
      "Native PowerPoint-Layouts, keine zusammengeflickte Konvertierung",
      "Schriften und Abstände, die unter Windows und auf dem Mac halten",
      "Deine Texte, Zahlen und Diagramme, Folie für Folie übernommen",
      "Eine bearbeitbare .pptx, ein PDF und ein Link, der zeigt, wer die Präsentation geöffnet hat"
    ],
    "faqs": [
      {
        "q": "Wie exportiere ich eine Keynote-Datei als PowerPoint?",
        "a": "Wähle in Keynote „Ablage > Exportieren > PowerPoint“ und sichere die .pptx. Lade diese Datei bei PitchBoost hoch. Der Text auf jeder Folie und die Bilder, die du platziert hast, kommen mit."
      },
      {
        "q": "Warum sieht meine Keynote-Präsentation in PowerPoint anders aus?",
        "a": "Vor allem wegen Schriften und Effekten. PowerPoint unter Windows hat viele Apple-Schriften nicht und ersetzt sie, was Zeilenumbrüche und Abstände verändert. Manche Animationen und Übergänge haben in PowerPoint keine Entsprechung und werden vereinfacht."
      },
      {
        "q": "Werden meine Animationen übernommen?",
        "a": "PitchBoost baut Layout und Design neu auf, nicht die Keynote-spezifischen Animationen. Du bekommst saubere Folien, denen du bei Bedarf PowerPoint-Übergänge hinzufügen kannst."
      },
      {
        "q": "Kann ich danach in Keynote weiterarbeiten?",
        "a": "Ja. Keynote öffnet .pptx-Dateien, du kannst die neu gestaltete Präsentation also jederzeit zurück in Keynote holen."
      }
    ],
    "ctaHeadline": "In Keynote gebaut. Überall präsentiert.",
    "updated": "2026-09-25"
  },
  {
    "slug": "google-slides-to-powerpoint",
    "navLabel": "Google Slides in PowerPoint umwandeln",
    "metaTitle": "Google Slides in PowerPoint umwandeln und neu gestalten | PitchBoost",
    "metaDescription": "Google Slides als PowerPoint herunterladen und im Design deiner Marke zurückbekommen, ohne die Formatierungsfehler der Umwandlung. Bearbeitbare .pptx in Minuten.",
    "heroHeadline": "Von Google Slides zu PowerPoint. Und es kommt besser an.",
    "heroSubhead": "Dein Team baut in Google Slides, aber der Kunde, das Board oder der Veranstalter will PowerPoint. Lade die .pptx herunter, lade sie bei PitchBoost hoch, und jede Folie wird im Design deiner Marke neu aufgebaut, damit das, was ankommt, gestaltet aussieht und nicht konvertiert.",
    "painPoints": [
      {
        "title": "Die Umwandlung macht still und leise Dinge kaputt",
        "body": "Google Fonts, die auf dem Rechner der Empfänger nicht installiert sind, Textfelder, die ihre Größe ändern, Formen, die verrutschen. Die .pptx öffnet sich problemlos und sieht überall ein bisschen falsch aus."
      },
      {
        "title": "Slides-Designs sehen aus wie Slides-Designs",
        "body": "Die eingebauten Designs erkennt man auf den ersten Blick. Landet die Präsentation in einer Firma, die mit PowerPoint arbeitet, wirkt sie wie schnell zusammengeklickt."
      },
      {
        "title": "Verknüpfte Diagramme kommen als Bilder an",
        "body": "Diagramme, die mit Google Sheets verknüpft sind, kommen oft als statische Bilder an, sodass niemand die Zahlen aktualisieren kann, ohne zum Original zurückzugehen."
      }
    ],
    "outcomes": [
      "Saubere, native PowerPoint-Folien statt eines umgewandelten Slides-Designs",
      "Deine Marke, direkt von deiner Website, auf jeder Folie",
      "Deine Zahlen, direkt aus deiner Präsentation übernommen",
      "Eine bearbeitbare .pptx, ein PDF und ein Link mit Tracking zum Verschicken"
    ],
    "faqs": [
      {
        "q": "Wie wandle ich Google Slides in PowerPoint um?",
        "a": "Wähle in Google Slides (in der deutschen Oberfläche: Google Präsentationen) „Datei > Herunterladen > Microsoft PowerPoint (.pptx)“. Lade diese Datei bei PitchBoost hoch. Vortragsnotizen und Bilder kommen mit."
      },
      {
        "q": "Warum sieht meine Google-Slides-Präsentation in PowerPoint falsch aus?",
        "a": "Meist liegt es an den Schriften: Google Fonts, die nicht installiert sind, werden ersetzt, und dann verrutscht der Text. Manche Formen, mit Sheets verknüpfte Diagramme und eingebettete Videos werden ebenfalls nicht sauber umgewandelt."
      },
      {
        "q": "Kann ich das Redesign zurück nach Google Slides holen?",
        "a": "Ja. In der Teilen-Ansicht legt die Zeile „Google Slides“ unter „Download“ eine bearbeitbare Kopie der neu gestalteten Präsentation in deinem Google Drive ab, bereit zum Öffnen in Google Slides. Oder schick den PitchBoost-Link: Er sieht auf jedem Gerät gleich aus und zeigt dir, wann er geöffnet wurde."
      },
      {
        "q": "Kostet das etwas?",
        "a": "Der Free-Tarif enthält jeden Monat 150 Credits, genug für eine Präsentation mit bis zu 10 Folien und kleinem Badge. Starter kostet 7 $ im Monat, für Präsentationen mit bis zu 25 Folien und ohne Badge; Pro kostet 29 $ im Monat, mit bis zu 60 Folien und eigenen Domains."
      }
    ],
    "ctaHeadline": "Einmal herunterladen. Etwas verschicken, auf das du stolz bist.",
    "updated": "2026-09-25"
  },
  {
    "slug": "change-powerpoint-template",
    "navLabel": "PowerPoint-Vorlage ändern",
    "metaTitle": "So änderst du die Vorlage einer bestehenden PowerPoint | PitchBoost",
    "metaDescription": "Eine neue Vorlage von Hand anzuwenden, zerschießt Folie für Folie das Layout. Hier die manuelle Methode und wie du alles in Minuten auf deine Marke umziehst.",
    "heroHeadline": "Eine bestehende PowerPoint auf eine neue Vorlage umziehen, in einem Rutsch",
    "heroSubhead": "Das Design zu wechseln ist leicht. Dafür zu sorgen, dass jede Folie wirklich dazu passt, ist der schwierige Teil. PitchBoost liest deine Präsentation, holt deine Marke von deiner Website und baut jede Folie so neu auf, dass sie für den neuen Look gemacht aussieht, nicht hineingezwängt.",
    "painPoints": [
      {
        "title": "Ein neues Design gestaltet nur die Platzhalter um",
        "body": "Textfelder, Formen und Bilder, die du von Hand hinzugefügt hast, behalten ihre alten Schriften, Farben und Positionen. Nach dem Wechsel folgt die eine Hälfte der Präsentation der neuen Vorlage, die andere ignoriert sie."
      },
      {
        "title": "Alte Layouts passen nicht auf neue",
        "body": "Deine Präsentation nutzt Layouts, die die neue Vorlage nicht hat, also rät PowerPoint. Titel springen, Spalten fallen in sich zusammen, und jede Folie muss geprüft werden."
      },
      {
        "title": "Ein Rebranding vervielfacht die Arbeit",
        "body": "Eine neue Marke betrifft jede Präsentation im Unternehmen, nicht nur eine. Jede einzeln von Hand zu reparieren, bedeutet Wochen Arbeit, die in keinem Budget stehen."
      }
    ],
    "outcomes": [
      "Jede Folie für den neuen Look neu aufgebaut, von Hand gesetzte Textfelder inklusive",
      "Logo, Farben und Tonalität, direkt von deiner aktuellen Website",
      "Inhalt und Zahlen Folie für Folie übernommen",
      "Stapelverarbeitung, um eine ganze Bibliothek von Präsentationen auf einmal umzuziehen"
    ],
    "faqs": [
      {
        "q": "Wie wende ich eine neue Vorlage von Hand auf eine bestehende PowerPoint an?",
        "a": "Öffne die Präsentation, geh auf die Registerkarte „Entwurf“, klapp den Katalog „Designs“ auf und wähle „Nach Designs suchen“, um die Vorlagendatei auszuwählen. Dann geht es Folie für Folie weiter: Wähle „Start > Layout“, nimm das passendste Layout und klick auf „Zurücksetzen“, damit der Inhalt in die neuen Platzhalter rutscht. Alles außerhalb eines Platzhalters musst du von Hand umformatieren."
      },
      {
        "q": "Warum hat der Vorlagenwechsel nicht alle Folien aktualisiert?",
        "a": "Designs gestalten nur Platzhalter und Designfarben um. Textfelder, Formen und Schriften, die direkt auf einer Folie festgelegt sind, haben Vorrang vor der Vorlage und bleiben deshalb genau so, wie sie waren."
      },
      {
        "q": "Kann PitchBoost unsere neue Marke verwenden?",
        "a": "Ja. Es baut auf deiner Marke auf, so wie sie auf deiner Website erscheint: Logo, Farben und Tonalität. Das Logo kannst du prüfen, bevor irgendetwas erzeugt wird. Gib die Website an, die die neue Marke zeigt, und jede Präsentation, die du hochlädst, kommt darin zurück. Außerdem kannst du Folien als Vorlagen speichern und wiederverwenden."
      },
      {
        "q": "Wir müssen Dutzende Präsentationen umziehen. Geht das schneller?",
        "a": "Per Stapelverarbeitung baut PitchBoost bis zu 12 PowerPoints pro Durchgang in derselben Marke neu auf, sodass am Ende die ganze Bibliothek zusammenpasst."
      }
    ],
    "ctaHeadline": "Neue Vorlage. Jede Folie. Ein Durchgang.",
    "updated": "2026-09-25"
  }
];

export const REDESIGN_STEPS_DE: { step: string; title: string; body: string }[] = [
  {
    step: "1",
    title: "Lade deine Präsentation hoch",
    body: "Jede .pptx bis 50 MB. PitchBoost liest jede Folie, Titel, Fließtext, einfach alles, und lässt deinen roten Faden, wie er ist. Gekürzt wird nur, wenn du vorher Ja gesagt hast.",
  },
  {
    step: "2",
    title: "Nenn PitchBoost deine Website",
    body: "Ein Scan erfasst Logo, Markenfarben und Tonalität. Daraus entsteht das Redesign: aus deiner Marke, nicht aus einer Vorlagengalerie.",
  },
  {
    step: "3",
    title: "Hol dir die neue Präsentation als Link",
    body: "Ein paar Minuten später hast du eine professionell gestaltete Präsentation, veröffentlicht als Link mit Tracking. Bearbeite jede Folie, exportiere als PDF oder PowerPoint und sieh, wer sie öffnet.",
  },
];

export const HUB_DE: RedesignHubCopy = {
  metaTitle: "PowerPoint neu gestalten, im Design deiner Marke | PitchBoost",
  metaDescription:
    "Präsentationen mit KI neu gestalten: .pptx hochladen, Inhalt behalten und in Minuten im Design deiner Marke zurückbekommen. Für Pitch-Decks, Rebrandings und den Vertrieb.",
  h1: "Bring uns die Präsentation, die du hast. Nimm die mit, die du im Kopf hattest.",
  subhead:
    "PitchBoost liest deine PowerPoint, behält die Story und baut das Design im Look deiner Marke neu auf, direkt von deiner Website übernommen. Ein paar Minuten statt ein paar Wochen.",
  sectionLabel: "Wo drückt der Schuh?",
  sectionTitle: "Jede Spielart von „Da muss noch mal jemand ran“",
};
