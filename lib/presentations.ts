/**
 * Purpose pages: presentations for everyone, not only pitches.
 *
 * Why this family exists: most decks made in the app are not sales pitches
 * (coursework, lectures, reports, talks), and the generator shapes each deck
 * to its purpose (teach, report, talk or pitch). These pages meet the people
 * searching for those decks.
 *
 * One query family per page, written for that audience. Resist adding
 * near-duplicates (a "lesson slides" page beside lecture-slides): doorway
 * pages get the whole family ignored.
 *
 * forLabel is what the app is told it is making. Keep it a plain noun phrase
 * that names the purpose so the generator picks the right shape; the investor
 * page says "existing investors" so it reads as a report, not a raise. Every
 * claim here must be true of the product today.
 */
export interface PresentationPage {
  slug: string;
  navLabel: string;            // short, e.g. "Class presentations"
  metaTitle: string;           // ends with " | PitchBoost", total <= 65 characters
  metaDescription: string;     // 140-160 characters
  heroHeadline: string;        // <= 70 characters, sentence case
  heroSubhead: string;         // 1-2 sentences, <= 240 characters
  forLabel: string;            // what the app should be told it is making, e.g. "a class presentation" (<= 40 chars)
  promptPlaceholder: string;   // example input for "What is your presentation about?", e.g. "The water cycle, for my 5th grade science class"
  outline: { title: string; body: string }[]; // 6-9 items: the slide-by-slide shape PitchBoost builds for this purpose; body <= 140 chars
  painPoints: { title: string; body: string }[]; // exactly 3; body <= 260 chars
  outcomes: string[];          // 5-6 items, each one sentence, true per the facts above
  examplePrompts: string[];    // exactly 3, each <= 160 chars, realistic and specific, copyable into the app
  faqs: { q: string; a: string }[]; // 5 items; answers 2-4 sentences, true per the facts above; include one FAQ that honestly compares with doing it in Gamma or ChatGPT, or with a general AI slide tool
  relatedRedesigns: string[];  // 2-3 slugs from the allowed list below
  ctaHeadline: string;         // <= 70 characters
  updated: string;             // "2026-10-22"
}

export const PRESENTATIONS_UPDATED = "2026-10-22";

export const PRESENTATIONS: PresentationPage[] = [
  {
    slug: "class-presentation",
    navLabel: "Class presentations",
    metaTitle: "AI Presentation Maker for Students: Class Projects | PitchBoost",
    metaDescription:
      "AI presentation maker for students: turn a topic or notes into a class presentation or school project, in your school's colors. Free for one deck a month.",
    heroHeadline: "The class presentation is due Friday. The slides can be done today.",
    heroSubhead:
      "Type the topic, or attach the assignment and your notes. PitchBoost builds a class presentation that runs in a sensible order, in your school's colors, in a few minutes.",
    forLabel: "a class presentation",
    promptPlaceholder: "The causes of the French Revolution, for my 10th grade history class",
    outline: [
      {
        title: "Title",
        body: "Your topic, the class, the date and who's presenting, with every member's name if it's a group project.",
      },
      {
        title: "What we'll cover",
        body: "Three or four points in the order you'll present them, so the class knows where this is going.",
      },
      {
        title: "Background",
        body: "The context people need first: when, where and why it matters. One slide, not five.",
      },
      {
        title: "The main points",
        body: "One idea per slide, in a logical order, so nobody is reading a paragraph while you talk.",
      },
      {
        title: "Examples and evidence",
        body: "A case, an event or a number that makes each point concrete. Added figures can link to their source.",
      },
      {
        title: "Key takeaways",
        body: "The three things the class should remember, even if they forget everything else.",
      },
      {
        title: "Questions",
        body: "A closing slide that invites questions, so the presentation ends on purpose instead of trailing off.",
      },
    ],
    painPoints: [
      {
        title: "The deadline is close and the slides are blank",
        body: "You have the topic and a page of notes. Turning them into slides that run in a sensible order is the part that eats the night before it's due.",
      },
      {
        title: "Four group members, four fonts",
        body: "Everyone builds their own section in their own style. The result looks like four presentations stapled together, and whoever offers to fix it does so alone, at midnight.",
      },
      {
        title: "One made-up number can sink the whole thing",
        body: "AI tools will state an invented statistic with total confidence. Teachers check. A wrong figure on slide 4 costs you more than an ugly slide 4 ever could.",
      },
    ],
    outcomes: [
      "A presentation in the order class presentations run: what we'll cover, the main points with examples, key takeaways, then questions.",
      "Your school's logo, colors and fonts, picked up from its website or set by hand.",
      "Figures it adds can carry a linked source, and anything it can't trace to your notes or a source is flagged for you to check.",
      "Slides your group already made in Google Slides or Keynote can be exported to .pptx and redesigned, keeping every slide and every word.",
      "Ask for a change to one slide and the rest stay exactly as they were.",
      "Share it as a free link; downloading a PDF, PowerPoint or Google Slides file takes a paid plan or $9 for that one deck.",
    ],
    examplePrompts: [
      "A 10-minute group presentation on the causes of the Great Depression for 11th grade US History, in four sections, one per group member.",
      "6 slides in Spanish on Day of the Dead traditions for my Spanish 2 class. Simple vocabulary, one tradition per slide.",
      "Intro to Psychology: a 5-minute presentation on how sleep affects memory, from my attached notes, ending with three takeaways and a question for the class.",
    ],
    faqs: [
      {
        q: "Can it use my school's colors and logo?",
        a: "Yes. Give it your school's website and it picks up the logo, colors and fonts. Prefer your club's look, or your own? Give it that site instead, or set everything by hand.",
      },
      {
        q: "Will it make up facts?",
        a: "It's built not to, and it shows its work. Figures it adds can come with the source linked on the slide, and anything it can't trace to your notes or a cited source is flagged for you to check. Check the flags before you present, because your teacher will.",
      },
      {
        q: "Am I allowed to use it for a school assignment?",
        a: "That depends on your class, so check the syllabus or ask your teacher. If AI-written content is off-limits, write the slides yourself and upload them: a redesign keeps your words and your numbers and changes only the design. The ideas should be yours either way.",
      },
      {
        q: "What does one presentation cost?",
        a: "The free plan makes one AI deck a month, up to 10 slides, with a small badge, shared as a link. To download it as a PDF, PowerPoint or Google Slides, pay $9 once for that deck (up to 25 slides, no badge) or choose Starter at $7 a month.",
      },
      {
        q: "Why not just ask ChatGPT, or use Gamma?",
        a: "You can, and for a rough first draft either may be enough. PitchBoost builds the deck in the order a class presentation runs, puts it in your school's colors, and flags any figure it can't trace. It also works inside ChatGPT, free accounts included, so you don't have to pick a side.",
      },
    ],
    relatedRedesigns: ["google-slides-and-keynote-redesign", "fix-ugly-powerpoint", "make-powerpoint-look-professional"],
    ctaHeadline: "Start with the topic. Finish before the group chat replies.",
    updated: "2026-10-22",
  },

  {
    slug: "lecture-slides",
    navLabel: "Lecture and lesson slides",
    metaTitle: "AI Lecture and Lesson Slides for Teachers | PitchBoost",
    metaDescription:
      "AI slides for teachers: turn your notes into lecture and lesson slides in teaching order, or redesign last year's deck. In your school's colors, free to start.",
    heroHeadline: "Lecture and lesson slides that don't eat your Sunday",
    heroSubhead:
      "Start from a topic, your notes or a handout as a PDF, and get a lesson in teaching order, with examples, takeaways and questions. Or bring last year's deck: every slide stays, the design catches up.",
    forLabel: "a lesson or lecture",
    promptPlaceholder: "Week 3 of Intro to Statistics: sampling and bias",
    outline: [
      {
        title: "Title",
        body: "The topic, the course and the date, plus the unit or week, so the deck still makes sense when students review it.",
      },
      {
        title: "What we'll cover",
        body: "Today's topics in the order you'll teach them. Students know where the hour is going, and so do you.",
      },
      {
        title: "Key terms",
        body: "The vocabulary the lesson depends on, defined once, before anyone needs it.",
      },
      {
        title: "The ideas, in order",
        body: "One concept per slide, each building on the last, so every step has something to stand on.",
      },
      {
        title: "Worked examples",
        body: "An example for every idea: a problem solved step by step, a case, or something from everyday life.",
      },
      {
        title: "Key takeaways",
        body: "What students should walk out knowing, on the one slide they'll photograph.",
      },
      {
        title: "Questions and discussion",
        body: "A discussion prompt or two, then open questions. Cheaper than finding the gaps on the test.",
      },
    ],
    painPoints: [
      {
        title: "Every lesson costs an evening",
        body: "The lesson takes an hour to teach and an evening to build, every week, after a full day in front of a class. Something has to give, and it's usually the slides.",
      },
      {
        title: "The deck from 2014 still works, technically",
        body: "The content is sound. The slides are clip art, three fonts and a template nobody remembers choosing. Rebuilding by hand means losing a weekend to a lesson that already works.",
      },
      {
        title: "A wrong fact gets copied 30 times",
        body: "Every slide you show ends up in notebooks. An invented date or a made-up figure doesn't stay on the slide; it goes into 30 sets of notes and, eventually, onto a test.",
      },
    ],
    outcomes: [
      "Lessons built in teaching order: what we'll cover, the ideas with examples, key takeaways, then questions.",
      "Figures it adds can point to their source right on the slide, and the ones it can't trace show up as flags for you to review.",
      "Last year's deck, uploaded as a .pptx or PDF, comes back redesigned with every slide, your words and your numbers intact.",
      "The school's colors and logo on every slide, taken from its website, so the deck looks like it belongs to the course.",
      "Short speaker notes in the editable PowerPoint, for whoever teaches it next.",
      "Rework a single slide by asking, and the rest of the lesson stays put.",
    ],
    examplePrompts: [
      "A 50-minute intro lecture on supply and demand for Econ 101, with one everyday example per idea and three discussion questions at the end.",
      "Photosynthesis for 7th grade life science, 45 minutes. Define the key terms first, then the process step by step, then a quick recap.",
      "Unit 4 of my AP Chemistry course, chemical equilibrium, built from my attached notes. Keep my worked examples exactly as I wrote them.",
    ],
    faqs: [
      {
        q: "Can it start from the slides I already teach with?",
        a: "Yes. Upload the deck as a .pptx or PDF, up to 50 MB and 75 slides; Google Slides and Keynote decks export to .pptx first. The redesign keeps every slide, your words and your numbers, one slide per source slide, so nothing you rely on goes missing.",
      },
      {
        q: "How do I know the facts are right?",
        a: "Figures it adds to a lesson can carry their source, linked on the slide. Anything it can't trace to your material or a cited source is flagged for you to check before class. You know the subject; the flags show you exactly where to look.",
      },
      {
        q: "Can I change one slide without redoing the whole lesson?",
        a: "Yes. Ask the AI for a harder example or a simpler definition on one slide, and every other slide stays as it was. You can also edit any slide yourself; the editable PowerPoint, with real text boxes, comes with a paid plan or the $9 one-deck option.",
      },
      {
        q: "Can I teach in Spanish, Arabic or another language?",
        a: "Yes. Say which language you teach in and the lesson comes back in it. Right-to-left scripts work too, including Arabic, Persian, Hebrew and Urdu, and they stay right-to-left in the editable PowerPoint.",
      },
      {
        q: "How is this different from other AI slide tools?",
        a: "Most can draft slides from a prompt, and for a quick outline that may be all you need. PitchBoost shapes the deck as a lesson, cites the figures it adds where it can, flags what it can't trace, and redesigns the deck you already teach one slide per source slide. That last part matters when the lesson took ten years to get right.",
      },
    ],
    relatedRedesigns: ["modernize-old-powerpoint", "training-deck-redesign", "google-slides-and-keynote-redesign"],
    ctaHeadline: "Bring last year's lecture. Leave with this year's slides.",
    updated: "2026-10-22",
  },

  {
    slug: "thesis-defense",
    navLabel: "Thesis defense",
    metaTitle: "Thesis Defense Presentation: AI Dissertation Slides | PitchBoost",
    metaDescription:
      "Make thesis or dissertation defense slides from your own work: research question, methods, results, contribution, limitations. Untraceable figures get flagged.",
    heroHeadline: "Thesis defense slides as careful as your thesis",
    heroSubhead:
      "Attach your abstract and results, or paste them in. PitchBoost builds the defense in the order committees expect, from research question to limitations, and flags any figure it can't trace to your work or a cited source.",
    forLabel: "a thesis or dissertation defense",
    promptPlaceholder: "My PhD defense on drought tolerance in wheat, 30 minutes plus questions",
    outline: [
      {
        title: "Title",
        body: "Thesis title, your name, degree, department and date. The one slide the committee won't question.",
      },
      {
        title: "Research question",
        body: "The question your thesis answers, in one sentence the committee's outside member can follow.",
      },
      {
        title: "Why it matters",
        body: "The gap in what's known and why it's worth closing. Background kept to what the question needs.",
      },
      {
        title: "Methods",
        body: "Design, data and analysis, in enough detail to trust the results. The full detail stays in the methods chapter.",
      },
      {
        title: "Results",
        body: "The findings, one per slide, in the order that builds your argument, using the numbers from your work.",
      },
      {
        title: "Contribution",
        body: "What your work adds that wasn't known before. The answer to the question every committee asks: so what?",
      },
      {
        title: "Limitations and future work",
        body: "What the study can't claim and what you'd do next. Saying it first beats being asked.",
      },
      {
        title: "Questions",
        body: "A closing slide for the committee's questions. The defense part of the defense.",
      },
    ],
    painPoints: [
      {
        title: "Years of work, thirty minutes to show it",
        body: "The thesis took years. The talk gets maybe thirty minutes before the questions start. Deciding what makes the cut is hard enough without also fighting slide layouts.",
      },
      {
        title: "Committees read every axis label",
        body: "A number that doesn't match chapter 4, or a typo in a results table, becomes a question you didn't need, asked at the worst possible moment.",
      },
      {
        title: "The writing ate the time you had",
        body: "The defense date was set months ago. The last chapter was finished last week. The slides are being made in the gap between, which is not a gap.",
      },
    ],
    outcomes: [
      "A defense in the order committees expect: research question, why it matters, methods, results, contribution, limitations and future work, then questions.",
      "Results built from the material you give it, with any figure it can't trace to your work or a cited source flagged for you to check.",
      "University colors, logo and fonts, pulled from the department or university website, or set by hand if your program has its own.",
      "A draft deck you've already started, uploaded as a .pptx or PDF, gets redesigned with every slide, your words and your numbers kept.",
      "Short speaker notes ride along in the editable PowerPoint, so the rehearsal has a script to depart from.",
      "After your advisor's comments, ask the AI to rework one slide and nothing else moves.",
    ],
    examplePrompts: [
      "PhD defense in molecular biology, 30 minutes plus questions, from my attached abstract and results summary. One committee member is outside the field.",
      "Master's thesis defense in public policy, 20 minutes, on rent control and housing supply in mid-size cities. Methods and results are in the attached PDF.",
      "Dissertation defense in education: a mixed-methods study of teacher retention in rural schools, with 412 survey responses and 18 interviews.",
    ],
    faqs: [
      {
        q: "Can it build the slides from my thesis?",
        a: "Yes, from the material you give it. Attach the parts that carry the argument, such as your abstract, results and conclusions, as PDFs, or paste them into the prompt with your field, time limit and committee.",
      },
      {
        q: "Will it change my results?",
        a: "Your numbers come from your own material, and any figure it can't trace there or to a cited source is flagged before your committee gets the chance. Upload a draft deck instead and the redesign changes the design, not the data: same slides, same words, same numbers.",
      },
      {
        q: "My advisor wants changes to three slides. Do I start over?",
        a: "No. Ask the AI to change each of those slides and the rest stay exactly as they were, or edit them yourself. For the version you'll present, a paid plan or the $9 option gets you the editable PowerPoint, real text boxes and short speaker notes included.",
      },
      {
        q: "What does one defense deck cost?",
        a: "A defense usually runs past the free plan, which makes one AI deck a month at up to 10 slides, shared as a link with a small badge. The simple route is $9 once: that one deck at up to 25 slides, no badge, and every download (PDF, PowerPoint and Google Slides). Starter ($7 a month) and Pro ($29 a month) include downloads too.",
      },
      {
        q: "Can't ChatGPT do this?",
        a: "ChatGPT is good for rehearsing likely committee questions, and you should. For the slides, PitchBoost builds the defense in the order committees expect, in your university's colors, from your own material. It runs inside ChatGPT too, free accounts included, so you can do both in one place.",
      },
    ],
    relatedRedesigns: ["data-heavy-deck-redesign", "make-powerpoint-look-professional", "beautify-powerpoint"],
    ctaHeadline: "Years of research. A few minutes of slides.",
    updated: "2026-10-22",
  },

  {
    slug: "research-presentation",
    navLabel: "Research presentations",
    metaTitle: "Research Paper to Presentation: Journal Club Slides | PitchBoost",
    metaDescription:
      "Turn a research paper into a journal club, lab meeting or conference presentation with AI. Numbers it can't trace to the paper or a source get flagged.",
    heroHeadline: "From research paper to a talk the room can follow",
    heroSubhead:
      "Attach the paper and say who's listening: journal club, lab meeting or a conference session. PitchBoost builds the talk around the question, the methods and the findings, and flags any number it can't trace to the paper or a source.",
    forLabel: "a research presentation",
    promptPlaceholder: "The attached paper on gut bacteria and sleep, for Thursday's journal club",
    outline: [
      {
        title: "Title",
        body: "The paper's title, journal and year, or your own title for a conference talk, plus who is presenting.",
      },
      {
        title: "Why this paper",
        body: "The problem it tackles and what was unclear before it. The reason the room should care for the next fifteen minutes.",
      },
      {
        title: "Background",
        body: "Just enough context to follow the question, pitched at the people in the room rather than the reviewers.",
      },
      {
        title: "Question and hypothesis",
        body: "What the study set out to test, stated plainly enough to judge the results against.",
      },
      {
        title: "Methods",
        body: "Design, sample and analysis, in the detail a skeptical room needs. Journal clubs are skeptical rooms.",
      },
      {
        title: "Key results",
        body: "The main findings, each with the numbers that support it, taken from the paper you attached.",
      },
      {
        title: "Strengths and limitations",
        body: "What the study does well and where it's thin. The slide that starts the real conversation.",
      },
      {
        title: "Takeaways",
        body: "What the findings mean for your field or your lab, in three lines or fewer.",
      },
      {
        title: "Discussion",
        body: "Two or three questions to open the floor, so the discussion doesn't start with silence.",
      },
    ],
    painPoints: [
      {
        title: "The paper is dense, so the slides get denser",
        body: "It's tempting to paste the abstract, two tables and a figure caption onto one slide. The room squints, and the discussion never gets past slide three.",
      },
      {
        title: "Journal club comes around again",
        body: "Presenting a paper well takes an evening you don't have between experiments. So the slides get built the morning of, and it shows by slide two.",
      },
      {
        title: "Numbers get garbled on the way to the slide",
        body: "An effect size copied wrong or a p-value rounded into fiction is exactly what a room of researchers will catch. And they will mention it.",
      },
    ],
    outcomes: [
      "A talk shaped for the room: why the paper matters, the question, methods, results, strengths and limitations, then discussion.",
      "Numbers on the results slides are checked against the paper, and any it can't trace there or to a cited source are flagged for you.",
      "Last month's lab meeting deck, uploaded as a .pptx, comes back redesigned with every slide and every number kept.",
      "Ask for a simpler version of one slide for a mixed audience, and the rest of the deck stays as it is.",
      "Short speaker notes in the editable PowerPoint, so the walk-through doesn't depend on memory.",
      "Send it to the group as a link before the meeting and see which slides were viewed, basic on Free and full on Pro.",
    ],
    examplePrompts: [
      "Journal club presentation on the attached paper, 15 minutes, for cardiology fellows. Give the study's limitations their own slide.",
      "Turn my attached paper into a 12-minute conference talk for a mixed audience of ecologists and data scientists. Keep the methods short.",
      "Lab meeting update: my qPCR results from the last three weeks (attached), what didn't replicate, and what I want to try next.",
    ],
    faqs: [
      {
        q: "Can I turn a research paper PDF into slides?",
        a: "Yes. Attach the paper as a PDF, say who the audience is and how long you have, and PitchBoost builds the presentation from it in a few minutes. For a long paper, paste the key results into the prompt as well, so they're front and center.",
      },
      {
        q: "Will it invent numbers or results?",
        a: "It works from the paper you attach, and figures it adds can carry a linked source. Anything it can't trace to either is flagged for you to check, which matters in a room that reads the supplementary materials.",
      },
      {
        q: "Can it use my lab's or university's colors?",
        a: "Yes. Point it at the lab's or university's website and it takes the logo, colors and fonts from there. Or set them by hand, if the lab website hasn't been updated since the last grant.",
      },
      {
        q: "Does it work for a conference in another language?",
        a: "Yes. Ask for the slides in whatever language the session runs in. Arabic, Persian, Hebrew and Urdu read right to left, on the slides and in the editable PowerPoint.",
      },
      {
        q: "How does this compare with Gamma?",
        a: "Gamma is a capable general-purpose tool and quick for a first draft. PitchBoost is narrower: it builds from the paper you attach and checks the numbers against it, so you can fix any figure it can't trace before the room spots it. It also takes your lab's colors straight from its website.",
      },
    ],
    relatedRedesigns: ["data-heavy-deck-redesign", "conference-talk-slides-redesign", "fix-ugly-powerpoint"],
    ctaHeadline: "Bring the paper. Leave with the slides.",
    updated: "2026-10-22",
  },

  {
    slug: "training-presentation",
    navLabel: "Training and onboarding",
    metaTitle: "AI Training and Onboarding Presentation Maker | PitchBoost",
    metaDescription:
      "Make training, onboarding and workshop slides from your notes or process docs, in your company's brand. Or upload the old deck and keep every slide.",
    heroHeadline: "Training presentations newer than your newest hire",
    heroSubhead:
      "Hand over your notes or process docs and PitchBoost builds the session in teaching order, in your company's brand. Or upload the deck you already have and keep every slide.",
    forLabel: "a training session",
    promptPlaceholder: "First-week onboarding for new support agents: tools, tone and escalation",
    outline: [
      {
        title: "Title",
        body: "The session name, who it's for and how long it runs, so nobody wonders if they're in the right room.",
      },
      {
        title: "What we'll cover",
        body: "The agenda in order, and what people should be able to do by the end of the session.",
      },
      {
        title: "Why this matters here",
        body: "The problem this training solves, in your team's own terms. People listen harder when they know why.",
      },
      {
        title: "The steps, in order",
        body: "Each step or concept on its own slide, in the order people will actually do the work.",
      },
      {
        title: "A real scenario",
        body: "One case walked through end to end: a ticket, a form, a call. The slide people remember on their first solo shift.",
      },
      {
        title: "Common mistakes",
        body: "What new people get wrong in week one, and how to spot it. Cheaper to learn here than with a customer watching.",
      },
      {
        title: "Key takeaways",
        body: "The short version on one slide, for people to come back to after the session.",
      },
      {
        title: "Questions and help",
        body: "Time for questions, and where to go for help once the session is over.",
      },
    ],
    painPoints: [
      {
        title: "The onboarding deck predates the people it onboards",
        body: "It was made in 2019, edited by six people since, and still shows the old logo and a tool you stopped paying for. New hires notice. They're polite about it.",
      },
      {
        title: "Subject experts aren't slide designers",
        body: "The person who knows the process best builds the deck between real work. The result is a slide with 14 bullet points and a trainer who apologizes for it.",
      },
      {
        title: "Every team's training looks different",
        body: "Sales, support and operations each built their own decks in their own style. Put them in one program and it looks like three companies trained you.",
      },
    ],
    outcomes: [
      "Sessions that run the way people learn a process: the agenda, each step with a real example, the short version, then questions.",
      "One brand across every team's training, with the logo, colors and fonts taken from your company website.",
      "The onboarding deck you already have can be uploaded as a .pptx or PDF and redesigned without losing a slide, a step or a number.",
      "The editable PowerPoint carries short speaker notes, so a stand-in trainer has something to work from.",
      "When the process changes, ask the AI to update that one slide and leave the rest alone.",
      "Send pre-work as a link and you'll know whether it was opened before the session, and which slides were viewed (basic on Free, full on Pro).",
    ],
    examplePrompts: [
      "Week-one onboarding for new customer support hires: our ticketing basics, tone of voice and when to escalate, from the attached handbook PDF.",
      "A 90-minute workshop for new team leads on giving feedback, with a practice scenario after each section and five takeaways at the end.",
      "How to submit expenses in our new finance system, for all staff, 20 minutes. The steps are in my attached notes; keep them exactly as written.",
    ],
    faqs: [
      {
        q: "Can it redesign the onboarding deck we already have?",
        a: "Yes. Upload it as a .pptx or PDF, up to 50 MB and 75 slides. You get the same slides, steps and numbers, one slide per source slide, in the brand you have now rather than the one from 2019.",
      },
      {
        q: "Can every training deck use our company brand?",
        a: "Yes. PitchBoost takes your logo, colors and fonts from your company website, or you set them by hand. Build sales, support and operations training from the same brand and it finally looks like one company made it.",
      },
      {
        q: "Will it make up details about our process?",
        a: "It builds from the notes and documents you give it, and any figure it can't trace to your material or a cited source is flagged, so you can catch an invented deadline or limit before a new hire sees it. Read it through before the session: you know the process, and it only knows what you told it.",
      },
      {
        q: "Can the trainer change things before the session?",
        a: "Yes. Ask the AI to change one slide and the rest stays put, or edit any slide by hand. With a paid plan or $9 for that deck, the trainer gets an editable PowerPoint with real text boxes and short speaker notes to run the room from.",
      },
      {
        q: "We already have a general AI tool. Why this one?",
        a: "A general tool can draft training slides from a prompt, and for a one-off that may be enough. PitchBoost shapes the deck as a lesson, builds it in your brand from your website, and flags figures it can't trace to your material. If the training already exists, a redesign keeps every slide instead of starting over.",
      },
    ],
    relatedRedesigns: ["training-deck-redesign", "rebrand-presentation", "modernize-old-powerpoint"],
    ctaHeadline: "You know how it's done. The slides can finally show it.",
    updated: "2026-10-22",
  },

  {
    slug: "report-presentation",
    navLabel: "Reports and board updates",
    metaTitle: "Report to Presentation: Quarterly and Board Updates | PitchBoost",
    metaDescription:
      "Turn a report or your spreadsheet notes into a presentation that leads with the result, in your brand. Figures it can't trace are removed before you see it.",
    heroHeadline: "Turn the report into a presentation that leads with the result",
    heroSubhead:
      "Paste your numbers or attach the report. PitchBoost builds the update the way a busy room reads it: headline first, then the evidence, the risks and the decisions you need.",
    forLabel: "a report or business update",
    promptPlaceholder: "Q3 results for the leadership team, from my attached report",
    outline: [
      {
        title: "Title",
        body: "The report, the period it covers and who it's for. Short, because the next slide is the one that matters.",
      },
      {
        title: "The headline",
        body: "The result in one sentence, up front. If they read nothing else, they read this.",
      },
      {
        title: "Key numbers",
        body: "The few metrics that matter this period, against target or last period, using the figures you gave it.",
      },
      {
        title: "What changed",
        body: "What moved since the last update and why, in plain words. The part people actually ask about.",
      },
      {
        title: "What worked, what didn't",
        body: "Wins and misses side by side. A report with only wins reads like a pitch, and people discount it.",
      },
      {
        title: "Risks and issues",
        body: "What could go wrong next period, how likely it is, and what you're doing about it.",
      },
      {
        title: "Decisions needed",
        body: "What you need from the room, phrased as questions they can answer in the meeting.",
      },
      {
        title: "Next steps",
        body: "Who does what by when. The slide that gets forwarded after the meeting.",
      },
    ],
    painPoints: [
      {
        title: "The point is on slide 9",
        body: "Reports get written in the order the work happened, so the result shows up last. By then the room has moved on to whatever's on their phones.",
      },
      {
        title: "One wrong number and the meeting is about the number",
        body: "A figure that doesn't match the spreadsheet turns the meeting into an audit of your deck instead of a discussion of the quarter.",
      },
      {
        title: "Every month, the same rebuild",
        body: "The report recurs. The deck gets rebuilt from scratch each time, or copied forward until slide 6 describes a project that ended in March.",
      },
    ],
    outcomes: [
      "An update that leads with the headline result, then the evidence, the risks and the decisions you need.",
      "Numbers you didn't supply either link to a source on the slide or get removed before you see the deck.",
      "Your company's logo, colors and fonts on every slide, so the update looks like it came from the company and not a spreadsheet.",
      "Last quarter's deck, uploaded as it is, comes back redesigned one slide per source slide, with the numbers untouched.",
      "When a number moves the night before, change that one slide by asking and the rest stays as it was.",
      "PDF, PowerPoint or Google Slides for the pre-read, on a paid plan or for $9 once.",
    ],
    examplePrompts: [
      "Monthly marketing report for the leadership team: 1,240 leads vs a 1,100 target, cost per lead down from $48 to $41, and the webinar underperformed.",
      "Q3 board update from my attached report. Lead with revenue against plan, then hiring, the two biggest risks, and the decision we need on the new office.",
      "QBR for our largest customer: adoption up in 3 of 4 teams, two open support issues, renewal due in January. Keep it to 10 slides.",
    ],
    faqs: [
      {
        q: "Can I just give it the report, or my spreadsheet numbers?",
        a: "Yes. Attach the report as a PDF, paste the key numbers from your spreadsheet into the prompt, or both. PitchBoost builds the deck from what you give it and puts the result first.",
      },
      {
        q: "Will it change or invent numbers?",
        a: "That's the one thing a report can't afford, so it's strict about it. Figures it adds can carry a linked source, and any figure it can't trace to your material or a cited source is removed before you see the deck. Upload last quarter's deck instead and the redesign keeps every slide, your words and your numbers.",
      },
      {
        q: "Can it use our company's colors and fonts?",
        a: "Yes. It reads your logo, colors and fonts off your company website. Or set them by hand, if marketing has opinions.",
      },
      {
        q: "Can I tell whether people opened it before the meeting?",
        a: "Yes. Share it as a link and you see when it's opened and which slides were viewed: basic on Free, full on Pro. Useful the night before, when you're deciding how much to recap.",
      },
      {
        q: "Why not paste the report into ChatGPT?",
        a: "ChatGPT can summarize a report well. PitchBoost turns it into the deck: headline first, then the evidence, risks and decisions, in your brand, with untraceable figures removed. It also runs inside ChatGPT, free accounts included, if that's where the report already is.",
      },
    ],
    relatedRedesigns: ["board-deck-redesign", "qbr-deck-redesign", "data-heavy-deck-redesign"],
    ctaHeadline: "The numbers are done. The deck can be, too.",
    updated: "2026-10-22",
  },

  {
    slug: "investor-update",
    navLabel: "Investor updates",
    metaTitle: "Quarterly Investor Update Deck for Startups | PitchBoost",
    metaDescription:
      "Build a monthly or quarterly investor update from your numbers: headline, metrics against plan, wins, misses, burn, runway, asks. Untraceable figures are cut.",
    heroHeadline: "Investor updates that lead with the truth, good or bad",
    heroSubhead:
      "Bring the quarter's numbers and PitchBoost builds the update in the order investors read: headline, metrics against plan, wins, misses, burn and runway, asks. It's for the investors you have, not the ones you're pitching.",
    forLabel: "an update for existing investors",
    promptPlaceholder: "Q3 update for our seed investors: revenue, burn, runway and two asks",
    outline: [
      {
        title: "The headline",
        body: "How the quarter went, in one honest sentence. Investors read this slide first, and some read only this one.",
      },
      {
        title: "Metrics against plan",
        body: "Revenue, growth and the numbers you report every time, set against the plan you shared.",
      },
      {
        title: "Wins",
        body: "Customers signed, launches shipped, hires made. Specific and short, backed by your numbers.",
      },
      {
        title: "Misses",
        body: "What fell short and what you learned from it. Investors trust the update that includes this slide.",
      },
      {
        title: "Burn and runway",
        body: "Monthly burn, cash in the bank and months of runway, from the figures you provide.",
      },
      {
        title: "Asks",
        body: "The specific help you want: intros, candidates, advice. The slide that turns readers into helpers.",
      },
      {
        title: "Next quarter's priorities",
        body: "Three priorities and how you'll measure them, so next quarter's update has something to report against.",
      },
    ],
    painPoints: [
      {
        title: "The quarterly update is late again",
        body: "You promised an update every quarter. The last one went out in month five. Each one takes a weekend of pulling numbers into slides, so it keeps slipping.",
      },
      {
        title: "Bad quarters are the hardest to write",
        body: "When the numbers miss, the temptation is to bury them under adjectives. Investors notice. A plain update with the miss on its own slide earns more trust than a cheerful one.",
      },
      {
        title: "A wrong number in front of investors sticks",
        body: "Report 18 months of runway when it's 14 and you'll hear about it at the next board meeting, and the one after that.",
      },
    ],
    outcomes: [
      "An update in the order investors read it: headline, metrics against plan, wins, misses, burn and runway, asks, next quarter's priorities.",
      "Your numbers, not invented ones: anything it can't trace is cut before you see the deck.",
      "No pitch dressed up as an update: only pitches get calls to action, and this isn't one.",
      "Ask the AI to fix one slide, say the runway, without touching the rest.",
      "Your logo, colors and fonts, taken from your website, so the update looks like the company you're building.",
    ],
    examplePrompts: [
      "Q3 investor update: ARR $1.2M vs $1.4M plan, burn $180k a month, 16 months runway, two enterprise wins, one key hire delayed. Ask: intros to logistics CFOs.",
      "Monthly update for our angel investors, from the attached metrics PDF. Lead with the miss on signups, then what we changed, then hiring.",
      "Quarterly update for seed investors: launched in two new cities, gross margin improved, and we want advice on Series A timing. 8 slides.",
    ],
    faqs: [
      {
        q: "Is this for raising money?",
        a: "No. An investor update goes to people who already invested: how the quarter went, numbers against plan, and what you need. Raising a round is a pitch, which PitchBoost also builds, written for one specific investor and ending on a clear next step.",
      },
      {
        q: "Will it make up metrics?",
        a: "No. It works from the numbers you supply, and a figure it can't trace to them or to a cited source is deleted before the deck reaches you. Read it anyway; it's your company's name on the update.",
      },
      {
        q: "Will I know if the update was opened?",
        a: "Yes, if it goes out as a link. You'll see when it was opened and which slides got viewed, with basic detail on Free and the full picture on Pro. Worth knowing before the follow-up call.",
      },
      {
        q: "What does it cost each quarter?",
        a: "Free covers one AI deck a month (up to 10 slides, a small badge, shared as a link), which is enough for a monthly update if a link is all your investors need. Files take a paid plan, Starter at $7 a month or Pro at $29, or $9 once to finish one update of up to 25 slides with no badge and every download.",
      },
      {
        q: "Gamma or ChatGPT could draft this. Why PitchBoost?",
        a: "Both can draft an update from a prompt. The difference that matters here is the numbers: PitchBoost removes any figure it can't trace before you see the deck, so a confident-sounding metric you never reported doesn't reach your investors. And if you draft in ChatGPT anyway, PitchBoost works inside it, free accounts included.",
      },
    ],
    relatedRedesigns: ["board-deck-redesign", "investor-deck-redesign", "data-heavy-deck-redesign"],
    ctaHeadline: "Good quarter or bad, send the update on time.",
    updated: "2026-10-22",
  },

  {
    slug: "conference-talk",
    navLabel: "Conference talks",
    metaTitle: "Conference Presentation and Keynote Slides with AI | PitchBoost",
    metaDescription:
      "Make conference talk or keynote slides from your outline or notes: one big idea, carried to a memorable close, in your brand. Or redesign the talk you have.",
    heroHeadline: "Talk slides that carry one big idea, then get out of the way",
    heroSubhead:
      "Give PitchBoost your outline or notes and it builds the talk around one idea, with the stories that carry it and a close people remember. Or redesign the deck from the last time you gave it, every slide intact.",
    forLabel: "a conference talk or keynote",
    promptPlaceholder: "What we learned moving our team to a four-day week",
    outline: [
      {
        title: "Title",
        body: "The talk's title and your name, on screen while people settle in.",
      },
      {
        title: "The hook",
        body: "A question, a story or a striking fact from your notes that earns the next twenty minutes.",
      },
      {
        title: "The big idea",
        body: "The one thing you want the room to leave with, stated early and in plain words.",
      },
      {
        title: "Points and stories",
        body: "Each supporting point on its own slide, paired with a story or example that makes it land.",
      },
      {
        title: "The turn",
        body: "The objection, the hard part or the thing that didn't work. Talks without one sound like ads.",
      },
      {
        title: "What it means for them",
        body: "What the audience can do differently on Monday. Specific beats inspiring.",
      },
      {
        title: "The close",
        body: "A memorable ending: a callback to the opening, a reflection or a thank-you. No sales slide.",
      },
    ],
    painPoints: [
      {
        title: "The talk lives in your head, not on slides",
        body: "You can explain the idea over coffee in five minutes. Getting it onto slides that build to a point takes the weekend you meant to spend rehearsing.",
      },
      {
        title: "The audience reads ahead",
        body: "Put a paragraph on a projector and the room reads it faster than you can say it. Then they look at their phones until the next slide.",
      },
      {
        title: "Too many ideas, no main one",
        body: "Every point you've ever had about the topic makes the first draft. The audience leaves remembering none of them, because nothing told them which one mattered.",
      },
    ],
    outcomes: [
      "A talk built around one big idea, with the points and stories that carry it and a memorable close.",
      "Short speaker notes come with the editable PowerPoint, so the slides don't have to carry your script.",
      "Your brand, or your company's, taken from a website and applied to every slide.",
      "It ends on your close, not a sales slide: calls to action are for pitches only.",
      "Upload the deck from the last time you gave the talk and every slide and word stays, in the order you rehearsed.",
      "A PDF, an exact-look or editable PowerPoint, or Google Slides for the organizers, plus a link for anyone who asks for the slides afterward.",
    ],
    examplePrompts: [
      "A 20-minute meetup talk for frontend developers on why we deleted half our tests. Big idea first, three stories, and a funny close.",
      "Opening keynote for a regional nursing conference, 30 minutes, on burnout and small daily habits. Warm tone, one story per section, from my notes.",
      "A 15-minute design conference talk in Hebrew on designing forms for right-to-left languages, built from my attached outline.",
    ],
    faqs: [
      {
        q: "Will it put my whole script on the slides?",
        a: "No. A talk is built to carry one big idea, not a transcript, and short speaker notes come in the editable PowerPoint for what you'll say. Want more on one slide? Ask for it, and only that slide changes.",
      },
      {
        q: "Can I upload the talk I've already given?",
        a: "Yes. If it lives in Keynote or Google Slides, export a .pptx first, then upload that or a PDF, up to 50 MB and 75 slides. Every slide comes back in your brand with your words and numbers, one slide per source slide, so the talk you rehearsed is still the talk.",
      },
      {
        q: "What file do I send the organizers?",
        a: "Whatever they ask for: a PDF, an exact-look PowerPoint, an editable PowerPoint with real text boxes, or Google Slides. Downloads take a paid plan (Starter at $7 a month, Pro at $29) or $9 once for that one deck.",
      },
      {
        q: "Can I give the talk in another language?",
        a: "Yes, any language, including right-to-left scripts such as Arabic, Persian, Hebrew and Urdu. Right-to-left layout survives into the editable PowerPoint, which matters when the venue's laptop is the one running it.",
      },
      {
        q: "Should I just use Gamma for a talk?",
        a: "If a quick draft is all you need, Gamma may be enough. PitchBoost is built around the talk itself: one big idea carried to a close, in your brand from your website, or the deck you already have redesigned with every slide kept. It also works inside ChatGPT and from Claude, if that's where you're drafting.",
      },
    ],
    relatedRedesigns: ["conference-talk-slides-redesign", "make-powerpoint-look-professional", "rebrand-presentation"],
    ctaHeadline: "One big idea. Slides that stay out of its way.",
    updated: "2026-10-22",
  },
];

export function getPresentation(slug: string): PresentationPage | undefined {
  return PRESENTATIONS.find((p) => p.slug === slug);
}
