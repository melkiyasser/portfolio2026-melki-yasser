export type Locale = "en" | "de";

const en = {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Open to full-time roles in Germany",
      greeting: "Hi, I'm",
      name: "Yasser Melki",
      role: "Full-Stack Developer · React & Node.js",
      description:
        "I build clean, user-centred web applications — from the database to the pixel. Software engineering graduate with agency and research experience, based in Gelsenkirchen, Germany.",
      ctaContact: "Get in touch",
      ctaCv: "Download CV",
      location: "Gelsenkirchen, Germany",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm a software engineer with a Master's degree in Information Systems and Web from the Higher School of Computer Science (ESI). Over the last two years I've worked as a full-stack developer in a digital agency, shipping React and Node.js applications for multiple clients, and as a research intern at INRIA in France, where I built developer tooling with a strong focus on testing and design patterns.",
        "I moved to Germany on a Chancenkarte and I'm looking for my next role as a junior full-stack or frontend developer. I'm currently learning German and I work comfortably in English and French.",
      ],
      factsTitle: "Quick facts",
      facts: [
        {
          label: "Degree",
          value: "M.Sc. Computer Science — Information Systems & Web",
        },
        { label: "Experience", value: "~2 years (agency + research)" },
        { label: "Location", value: "Gelsenkirchen, Germany" },
        { label: "Work permit", value: "Chancenkarte holder" },
      ],
      languagesTitle: "Languages",
      languages: [
        { name: "English", level: "C1 — professional" },
        { name: "French", level: "B2 — professional" },
        { name: "German", level: "A1 — actively learning" },
        { name: "Arabic", level: "Native" },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "The tools I use to take an idea from design to deployment.",
      groups: [
        {
          name: "Frontend",
          items: [
            "React",
            "TypeScript",
            "JavaScript (ES6+)",
            "Next.js",
            "HTML5 & CSS3",
            "Tailwind CSS",
          ],
        },
        {
          name: "Backend",
          items: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "PostgreSQL / MySQL",
            "MongoDB",
          ],
        },
        {
          name: "Tools & Practices",
          items: [
            "Git & GitHub/GitLab",
            "Postman",
            "Agile / Scrum",
            "TDD & design patterns",
            "CI/CD basics",
            "Code reviews",
          ],
        },
      ],
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          company: "CreaTech",
          role: "Full-Stack Developer (React / Node.js)",
          location: "Algiers, Algeria",
          period: "Nov 2024 – Feb 2026",
          bullets: [
            "Designed and developed responsive React user interfaces with a focus on component reusability, performance and maintainability.",
            "Built and integrated REST APIs with Node.js and Express.js for core application features across multiple client projects.",
            "Contributed to architectural decisions, feature planning and code reviews, improving code quality and team practices.",
          ],
        },
        {
          company: "INRIA Lille",
          role: "Software Engineering Intern",
          location: "Lille, France",
          period: "Mar 2024 – Sep 2024",
          bullets: [
            "Developed an automated validation tool for Microdown technical documentation in the Pharo ecosystem.",
            "Implemented checks for missing files, cyclic references, anchor issues and code inconsistencies.",
            "Applied the Visitor and Strategy design patterns and used Test-Driven Development throughout.",
          ],
        },
        {
          company: "EOAT / PRHB",
          role: "Frontend Developer Intern",
          location: "M'sila, Algeria",
          period: "Sep 2021 – Nov 2021",
          bullets: [
            "Built a responsive company website and an internal staff-management web application.",
            "Gained first backend exposure with Java Spring Boot for simple API integration.",
          ],
        },
      ],
      educationTitle: "Education",
      education: [
        {
          degree: "Master's degree, Information Systems and Web",
          school: "Higher School of Computer Science (ESI), Algeria",
          period: "2018 – 2024",
        },
      ],
    },
    projects: {
      title: "Selected work",
      subtitle:
        "Professional and personal projects — ask me about any of them.",
      items: [
        {
          name: "derDictionary 🇩🇪",
          context: "Personal project · live at derdictionary.de",
          description:
            "A web app for German learners: a dictionary of 10,800+ verbs and 58,500+ nouns with smart search (conjugated and inflected forms, umlaut-insensitive, typo-tolerant), AI writing correction and DE ⇄ EN translation, and a der/die/das game with spaced repetition — Supabase database, OpenAI behind rate-limited serverless APIs.",
          tags: ["React", "Vite", "Supabase", "OpenAI", "Serverless"],
          link: { url: "https://derdictionary.de", label: "Visit site" },
          download: null,
        },
        {
          name: "Multi-client web applications",
          context: "CreaTech · digital agency",
          description:
            "React frontends and Node.js/Express REST APIs delivered for several client projects, with reusable component libraries and a focus on performance and maintainability.",
          tags: ["React", "Node.js", "Express", "REST APIs"],
          link: null,
          download: null,
        },
        {
          name: "Documentation validation tool",
          context: "INRIA Lille · research",
          description:
            "An automated tool that validates the structure and semantics of Microdown technical books: missing files, cyclic references and broken anchors — built test-first with Visitor and Strategy patterns.",
          tags: ["Pharo", "TDD", "Design patterns"],
          link: null,
          download: {
            url: "/pfe-microdown-melki-yasser.pdf",
            label: "Download documentation (PDF)",
          },
        },
        {
          name: "This portfolio",
          context: "Personal project",
          description:
            "The site you're looking at: Next.js App Router, Tailwind CSS, an EN/DE language switch, dark mode and a contact form backed by a rate-limited API route. The source code is on GitHub.",
          tags: ["Next.js", "TypeScript", "Tailwind", "i18n"],
          link: {
            url: "https://github.com/melkiyasser/portfolio2026-melki-yasser",
            label: "View source",
          },
          download: null,
        },
      ],
    },
    contact: {
      title: "Get in touch",
      subtitle:
        "Looking for a junior full-stack or frontend developer? I'd love to hear from you — I usually reply within a day.",
      nameLabel: "Your name",
      emailLabel: "Your email",
      messageLabel: "Message",
      submit: "Send message",
      sending: "Sending…",
      success: "Thanks! Your message has been sent.",
      error: "Something went wrong. Please email me directly instead.",
      tooMany:
        "You've sent several messages in a short time — please try again in a few minutes.",
      directTitle: "Or reach me directly",
    },
    footer: {
      built: "Built with Next.js and Tailwind CSS.",
      rights: "Yasser Melki",
    },
};

// Typed against the English object so a missing German key is a compile error
const de: typeof en = {
    nav: {
      about: "Über mich",
      skills: "Kenntnisse",
      experience: "Erfahrung",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      badge: "Offen für Festanstellungen in Deutschland",
      greeting: "Hallo, ich bin",
      name: "Yasser Melki",
      role: "Full-Stack-Entwickler · React & Node.js",
      description:
        "Ich entwickle saubere, nutzerzentrierte Webanwendungen — von der Datenbank bis zum Pixel. Informatik-Absolvent mit Agentur- und Forschungserfahrung, wohnhaft in Gelsenkirchen.",
      ctaContact: "Kontakt aufnehmen",
      ctaCv: "Lebenslauf herunterladen",
      location: "Gelsenkirchen, Deutschland",
    },
    about: {
      title: "Über mich",
      paragraphs: [
        "Ich bin Softwareentwickler mit einem Masterabschluss in Information Systems and Web der Higher School of Computer Science (ESI). In den letzten zwei Jahren habe ich als Full-Stack-Entwickler in einer Digitalagentur React- und Node.js-Anwendungen für verschiedene Kunden umgesetzt und als Praktikant bei INRIA in Frankreich Entwickler-Tools mit Schwerpunkt auf Testing und Design Patterns gebaut.",
        "Ich bin mit einer Chancenkarte nach Deutschland gekommen und suche meine nächste Stelle als Junior-Full-Stack- oder Frontend-Entwickler. Derzeit lerne ich Deutsch und arbeite fließend auf Englisch und Französisch.",
      ],
      factsTitle: "Auf einen Blick",
      facts: [
        {
          label: "Abschluss",
          value: "M.Sc. Informatik — Informationssysteme und Web",
        },
        { label: "Erfahrung", value: "ca. 2 Jahre (Agentur + Forschung)" },
        { label: "Wohnort", value: "Gelsenkirchen, Deutschland" },
        { label: "Arbeitserlaubnis", value: "Chancenkarte" },
      ],
      languagesTitle: "Sprachen",
      languages: [
        { name: "Englisch", level: "C1 — verhandlungssicher" },
        { name: "Französisch", level: "B2 — fließend" },
        { name: "Deutsch", level: "A1 — lerne aktiv weiter" },
        { name: "Arabisch", level: "Muttersprache" },
      ],
    },
    skills: {
      title: "Kenntnisse",
      subtitle:
        "Die Werkzeuge, mit denen ich eine Idee vom Design bis zum Deployment umsetze.",
      groups: [
        {
          name: "Frontend",
          items: [
            "React",
            "TypeScript",
            "JavaScript (ES6+)",
            "Next.js",
            "HTML5 & CSS3",
            "Tailwind CSS",
          ],
        },
        {
          name: "Backend",
          items: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "PostgreSQL / MySQL",
            "MongoDB",
          ],
        },
        {
          name: "Tools & Methoden",
          items: [
            "Git & GitHub/GitLab",
            "Postman",
            "Agile / Scrum",
            "TDD & Design Patterns",
            "CI/CD-Grundlagen",
            "Code-Reviews",
          ],
        },
      ],
    },
    experience: {
      title: "Berufserfahrung",
      jobs: [
        {
          company: "CreaTech",
          role: "Full-Stack-Entwickler (React / Node.js)",
          location: "Algier, Algerien",
          period: "Nov. 2024 – Feb. 2026",
          bullets: [
            "Responsive React-Benutzeroberflächen mit Fokus auf Wiederverwendbarkeit, Performance und Wartbarkeit entworfen und entwickelt.",
            "REST-APIs mit Node.js und Express.js für zentrale Anwendungsfunktionen in mehreren Kundenprojekten gebaut und integriert.",
            "An Architekturentscheidungen, Feature-Planung und Code-Reviews mitgewirkt und so Codequalität und Teampraktiken verbessert.",
          ],
        },
        {
          company: "INRIA Lille",
          role: "Praktikant Softwareentwicklung",
          location: "Lille, Frankreich",
          period: "März 2024 – Sep. 2024",
          bullets: [
            "Ein automatisiertes Validierungstool für technische Microdown-Dokumentation im Pharo-Ökosystem entwickelt.",
            "Prüfungen für fehlende Dateien, zyklische Referenzen, Anker-Probleme und Code-Inkonsistenzen implementiert.",
            "Visitor- und Strategy-Pattern angewendet und durchgehend testgetrieben (TDD) entwickelt.",
          ],
        },
        {
          company: "EOAT / PRHB",
          role: "Praktikant Frontend-Entwicklung",
          location: "M'sila, Algerien",
          period: "Sep. 2021 – Nov. 2021",
          bullets: [
            "Eine responsive Unternehmenswebsite und eine interne Webanwendung zur Personalverwaltung entwickelt.",
            "Erste Backend-Erfahrung mit Java Spring Boot für einfache API-Integration gesammelt.",
          ],
        },
      ],
      educationTitle: "Ausbildung",
      education: [
        {
          degree: "Masterabschluss, Information Systems and Web",
          school: "Higher School of Computer Science (ESI), Algerien",
          period: "2018 – 2024",
        },
      ],
    },
    projects: {
      title: "Ausgewählte Projekte",
      subtitle:
        "Berufliche und private Projekte — fragen Sie mich gerne dazu.",
      items: [
        {
          name: "derDictionary 🇩🇪",
          context: "Privates Projekt · live auf derdictionary.de",
          description:
            "Eine Web-App für Deutschlernende: ein Wörterbuch mit über 10.800 Verben und 58.500 Substantiven mit intelligenter Suche (konjugierte und flektierte Formen, umlautunabhängig, fehlertolerant), KI-Textkorrektur und DE ⇄ EN-Übersetzung sowie ein der/die/das-Spiel mit Spaced Repetition — Supabase-Datenbank, OpenAI hinter ratenlimitierten Serverless-APIs.",
          tags: ["React", "Vite", "Supabase", "OpenAI", "Serverless"],
          link: { url: "https://derdictionary.de", label: "Website besuchen" },
          download: null,
        },
        {
          name: "Webanwendungen für mehrere Kunden",
          context: "CreaTech · Digitalagentur",
          description:
            "React-Frontends und Node.js/Express-REST-APIs für mehrere Kundenprojekte, mit wiederverwendbaren Komponentenbibliotheken und Fokus auf Performance und Wartbarkeit.",
          tags: ["React", "Node.js", "Express", "REST APIs"],
          link: null,
          download: null,
        },
        {
          name: "Validierungstool für Dokumentation",
          context: "INRIA Lille · Forschung",
          description:
            "Ein automatisiertes Tool, das Struktur und Semantik technischer Microdown-Bücher prüft: fehlende Dateien, zyklische Referenzen und defekte Anker — testgetrieben mit Visitor- und Strategy-Pattern entwickelt.",
          tags: ["Pharo", "TDD", "Design Patterns"],
          link: null,
          download: {
            url: "/pfe-microdown-melki-yasser.pdf",
            label: "Dokumentation herunterladen (PDF)",
          },
        },
        {
          name: "Dieses Portfolio",
          context: "Privates Projekt",
          description:
            "Die Seite, die Sie gerade sehen: Next.js App Router, Tailwind CSS, ein EN/DE-Sprachumschalter, Dark Mode und ein Kontaktformular mit ratenlimitierter API-Route. Der Quellcode ist auf GitHub.",
          tags: ["Next.js", "TypeScript", "Tailwind", "i18n"],
          link: {
            url: "https://github.com/melkiyasser/portfolio2026-melki-yasser",
            label: "Quellcode ansehen",
          },
          download: null,
        },
      ],
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle:
        "Sie suchen einen Junior-Full-Stack- oder Frontend-Entwickler? Ich freue mich auf Ihre Nachricht — ich antworte in der Regel innerhalb eines Tages.",
      nameLabel: "Ihr Name",
      emailLabel: "Ihre E-Mail",
      messageLabel: "Nachricht",
      submit: "Nachricht senden",
      sending: "Wird gesendet…",
      success: "Vielen Dank! Ihre Nachricht wurde gesendet.",
      error:
        "Etwas ist schiefgelaufen. Bitte schreiben Sie mir direkt eine E-Mail.",
      tooMany:
        "Sie haben in kurzer Zeit mehrere Nachrichten gesendet — bitte versuchen Sie es in einigen Minuten erneut.",
      directTitle: "Oder erreichen Sie mich direkt",
    },
    footer: {
      built: "Erstellt mit Next.js und Tailwind CSS.",
      rights: "Yasser Melki",
    },
};

export const translations: Record<Locale, typeof en> = { en, de };

export type Translations = typeof en;
