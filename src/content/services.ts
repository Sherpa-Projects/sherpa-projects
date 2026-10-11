import {
  AlertTriangle,
  BadgeCheck,
  Blocks,
  Clock,
  CodeXml,
  Cpu,
  Cable,
  ClipboardCheck,
  Compass,
  FolderSync,
  Layers,
  MapPinned,
  MonitorCog,
  ServerCog,
  Wrench,
  ShieldCheck,
  Unplug,
  ListTodo,
  Network,
  Puzzle,
  Gauge,
  FileCheck2,
  Route,
  UserRoundSearch,
  Workflow,
} from "lucide-react";
import type { ButtonProps } from "@/components/ui/button";

export const services = {
  projektmanagement: {
    metadata: {
      title: "Projektmanagement & Project Delivery | Sherpa Projects",
      description:
        "Technisches Projektmanagement für Infrastruktur, öffentliche Auftraggeber und Bau: Projektleitung, PMO, Rolloutmanagement, Lieferantensteuerung, Abnahmen und Inbetriebnahmen aus einer Hand.",
    },
    hero: {
      eyebrow: "Projektmanagement & Project Delivery",
      title: "Projekte steuern. Umsetzung sicher ans Ziel bringen.",
      description:
        "Wir übernehmen Verantwortung für anspruchsvolle Projekte – von der Planung und Steuerung über die Koordination von Beteiligten und Lieferanten bis zur Abnahme und Inbetriebnahme.",
      primaryButton: {
        title: "Projekt besprechen",
        url: "/kontakt",
      },
      secondaryButton: {
        title: "Leistungsumfang ansehen",
        url: "#leistungen",
      },
      image: {
        src: "/images/services/projektmanagement/hero.png",
        alt: "Projektteam bei der Koordination eines technischen Infrastrukturprojekts",
        overlay: {
          eyebrow: "Von Planung bis Inbetriebnahme",
          title: "Koordination vor Ort.",
          description:
            "Wir steuern Beteiligte, Termine und Schnittstellen dort, wo Projekte im Alltag entschieden werden.",
        },
      },
    },
    challenges: {
      title: "Viele Beteiligte. Hohe Anforderungen. Ein gemeinsames Ziel.",
      items: [
        {
          icon: Network,
          title: "Viele Schnittstellen",
          description:
            "Interne Teams, externe Partner und technische Gewerke müssen zuverlässig koordiniert werden.",
        },
        {
          icon: Gauge,
          title: "Termin- und Kostendruck",
          description:
            "Abhängigkeiten, Änderungen und enge Zeitpläne erfordern eine klare und vorausschauende Steuerung.",
        },
        {
          icon: FileCheck2,
          title: "Dokumentation & Qualität",
          description:
            "Nachweise, Abnahmen und Qualitätsanforderungen müssen jederzeit nachvollziehbar bleiben.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Unser Leistungsumfang",
      title: "Projektsteuerung, die Verantwortung übernimmt.",
      items: [
        {
          title: "Projektleitung & PMO",
          description:
            "Wir schaffen klare Strukturen, koordinieren Verantwortlichkeiten und steuern Termine, Kosten und Qualität.",
        },
        {
          title: "Technische Planung & Rollout",
          description:
            "Wir begleiten technische Planung, Rollouts und die Umsetzung über Standorte und Projektphasen hinweg.",
        },
        {
          title: "Umsetzung & Partnersteuerung",
          description:
            "Wir koordinieren interne Teams, externe Partner und Lieferanten und halten Schnittstellen und Abhängigkeiten zusammen.",
        },
        {
          title: "Dokumentation & Übergabe",
          description:
            "Wir begleiten Dokumentationsmanagement, Abnahmen und Inbetriebnahmen bis zur strukturierten Übergabe.",
        },
      ],
    },
    scope: {
      eyebrow: "Leistungen im Detail",
      title: "Alles, was ein Projekt von der Planung bis zur Übergabe braucht.",
      description:
        "Ob einzelne Aufgabe oder komplettes Projekt: Wir übernehmen Steuerung, Koordination und Nachweisführung dort, wo Ihr Projekt Verstärkung braucht.",
      groups: [
        {
          icon: Compass,
          title: "Steuern",
          items: [
            "Projektleitung",
            "Projektsteuerung & PMO",
            "Termin-, Kosten- und Qualitätsmanagement",
            "Lieferantensteuerung",
          ],
        },
        {
          icon: Route,
          title: "Umsetzen",
          items: [
            "Technische Planung",
            "Rolloutmanagement",
            "Umsetzungs- und Baustellenkoordination",
            "IT- und technischer Support",
          ],
        },
        {
          icon: ClipboardCheck,
          title: "Abschließen",
          items: [
            "Dokumentationsmanagement",
            "Abnahmen und Inbetriebnahmen",
            "Strukturierte Übergabe in den Betrieb",
            "Vollständige Projektübernahme",
          ],
        },
      ],
    },
    responsibility: {
      eyebrow: "Verantwortung nach Bedarf",
      title: "So viel Verantwortung, wie Ihr Projekt braucht.",
      description:
        "Wir unterstützen punktuell, übernehmen definierte Projektbereiche oder steuern Projekte vollständig – passend zu Projektphase, Komplexität und vorhandenen Strukturen.",
      levels: [
        {
          title: "Gezielte Unterstützung",
          description:
            "Wir übernehmen klar abgegrenzte Aufgaben dort, wo zusätzliche Steuerungs- oder Umsetzungskompetenz benötigt wird.",
        },
        {
          title: "Projektsteuerung & PMO",
          description:
            "Wir schaffen Strukturen, koordinieren Beteiligte und behalten Termine, Kosten, Qualität und Dokumentation im Blick.",
        },
        {
          title: "Technische Umsetzung",
          description:
            "Wir begleiten Planung, Rollout und operative Umsetzung bis hin zu Abnahmen und Inbetriebnahmen.",
        },
        {
          title: "Vollständige Projektübernahme",
          description:
            "Auf Wunsch übernehmen wir die durchgängige Verantwortung für Steuerung, Koordination und Umsetzung des Projekts.",
        },
      ],
    },
    process: {
      eyebrow: "Unser Vorgehen",
      title: "Klare Schritte vom Projektstart bis zur Übergabe.",
      steps: [
        {
          number: "01",
          title: "Projektumfeld verstehen",
          description:
            "Wir analysieren Ziele, Beteiligte, technische Abhängigkeiten und Rahmenbedingungen und machen Risiken früh sichtbar.",
        },
        {
          number: "02",
          title: "Steuerung und Ressourcen planen",
          description:
            "Wir definieren Projektstruktur, Termin- und Ressourcenplanung sowie klare Rollen und Verantwortlichkeiten.",
        },
        {
          number: "03",
          title: "Projektstrukturen aufsetzen",
          description:
            "Wir etablieren PMO, Berichtswege und Dokumentationsstandards und binden Lieferanten verbindlich ein.",
        },
        {
          number: "04",
          title: "Umsetzung steuern und kontrollieren",
          description:
            "Wir koordinieren Gewerke und Standorte, verfolgen Termine, Kosten und Qualität und lösen Hindernisse.",
        },
        {
          number: "05",
          title: "Übergabe und Betrieb begleiten",
          description:
            "Wir begleiten Abnahmen und Inbetriebnahmen und übergeben eine vollständige, nachvollziehbare Projektdokumentation.",
        },
      ],
    },
    environments: {
      eyebrow: "Typische Projektumgebungen",
      title: "Dort stark, wo Projekte viele Abhängigkeiten haben.",
      description:
        "Sherpa begleitet technische Projekte mit vielen Standorten, Beteiligten und Schnittstellen – von der Planung über die Umsetzung bis zur vollständigen Projektdokumentation.",
      items: [
        {
          title: "Komplexe Infrastrukturprojekte",
          description:
            "Technische Abhängigkeiten, verschiedene Gewerke und viele Beteiligte erfordern eine klare und belastbare Projektsteuerung.",
        },
        {
          title: "Verteilte Standorte & Rollouts",
          description:
            "Wir koordinieren Umsetzung, Ressourcen und Schnittstellen über mehrere Standorte und Projektphasen hinweg.",
        },
        {
          title: "Regulierte Projektumgebungen",
          description:
            "Hohe Dokumentationsanforderungen, definierte Standards und sicherheitskritische Rahmenbedingungen verlangen nachvollziehbare Prozesse.",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Mehr als Projektsteuerung",
      title: "Wenn Projekte mehr brauchen als Projektmanagement.",
      items: [
        {
          icon: Workflow,
          title: "Automatisierung & Digital Solutions",
          description:
            "Wiederkehrende Prozesse, Datenflüsse und Arbeitsabläufe gezielt automatisieren und technische Schnittstellen sinnvoll verbinden.",
          href: "/leistungen/automatisierung",
        },
        {
          icon: UserRoundSearch,
          title: "Projektbesetzung & Expert Staffing",
          description:
            "Spezialisierte Fachkräfte, Freelancer und Projektpartner passend zu Aufgabe, Projektphase und benötigter Expertise.",
          href: "/leistungen/projektbesetzung",
        },
        {
          icon: FileCheck2,
          title: "Sherpa Document Control",
          description:
            "Projektunterlagen regelbasiert prüfen, zuordnen und strukturiert in bestehende Dokumentenprozesse integrieren.",
          href: "/sherpa-document-control",
        },
      ],
    },
    finalCta: {
      eyebrow: "Gemeinsam weiter",
      title: "Welches Projekt sollen wir gemeinsam ans Ziel bringen?",
      description:
        "Ob punktuelle Unterstützung oder vollständige Projektübernahme – wir besprechen mit Ihnen, wo Ihr Projekt steht und was es braucht.",
      actions: [
        {
          label: "Projekt besprechen",
          href: "/kontakt",
          variant: "inverse",
        },
        {
          label: "Experten anfragen",
          href: "/leistungen/projektbesetzung",
          variant: "inverseOutline",
        },
      ] satisfies {
        label: string;
        href: string;
        variant: ButtonProps["variant"];
      }[],
    },
  },
  automatisierung: {
    metadata: {
      title: "Automatisierung & Digital Solutions | Sherpa Projects",
      description:
        "Sichere Prozess- und Systemautomatisierung: Dokumentenverarbeitung, Prüf- und Freigabeworkflows, SharePoint, Schnittstellen, n8n und Python – regelbasiert, On-Premises und nachvollziehbar.",
    },
    hero: {
      eyebrow: "Automatisierung & Digital Solutions",
      title: "Prozesse automatisieren. Sicher und nachvollziehbar.",
      description:
        "Wir automatisieren wiederkehrende Abläufe, verbinden Systeme und entwickeln individuelle Lösungen – mit der technisch richtigen Methode statt Automatisierung um jeden Preis.",
      primaryButton: {
        title: "Projekt besprechen",
        url: "/kontakt",
      },
      secondaryButton: {
        title: "Leistungsumfang ansehen",
        url: "#leistungen",
      },
      image: {
        src: "/images/services/automatisierung/hero.png",
        alt: "Sherpa-Mitarbeiter baut am Laptop einen Automatisierungs-Workflow, daneben ein Bildschirm mit geprüften Dokumenten, im Hintergrund Berge",
        overlay: {
          eyebrow: "Regelbasiert. Lokal. Kontrollierbar.",
          title: "Automatisierung mit Augenmaß.",
          description:
            "Wir wählen die Methode, die zu Ihren Anforderungen an Kontrolle, Datenschutz und Reproduzierbarkeit passt.",
        },
      },
    },
    challenges: {
      title: "Viel Handarbeit. Viele Systeme. Hohe Anforderungen.",
      items: [
        {
          icon: ListTodo,
          title: "Wiederkehrende Handarbeit",
          description:
            "Dokumente prüfen, umbenennen, ablegen und übertragen bindet Zeit, die im Projekt an anderer Stelle fehlt.",
        },
        {
          icon: Unplug,
          title: "Medienbrüche zwischen Systemen",
          description:
            "Daten liegen in Excel, SharePoint und Fachsystemen und werden manuell abgeglichen und übertragen.",
        },
        {
          icon: ShieldCheck,
          title: "Kontrolle & Datenschutz",
          description:
            "Sensible Projektumgebungen verlangen nachvollziehbare Ergebnisse und Verarbeitung ohne unnötige Cloud-Abhängigkeit.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Unser Leistungsumfang",
      title: "Automatisierung, die im Projektalltag funktioniert.",
      items: [
        {
          title: "Dokumente & Workflows",
          description:
            "Wir automatisieren Dokumentenverarbeitung, Prüf- und Freigabeworkflows sowie Projektordner und Ablagestrukturen.",
        },
        {
          title: "Daten & Schnittstellen",
          description:
            "Wir verbinden Systeme über Schnittstellen und APIs und sorgen für eine verlässliche Datenübertragung ohne Medienbrüche.",
        },
        {
          title: "Microsoft 365 & Office",
          description:
            "Wir automatisieren Excel- und Office-Prozesse und binden SharePoint und Microsoft Teams sinnvoll in Ihre Abläufe ein.",
        },
        {
          title: "Individuelle Lösungen",
          description:
            "Wo Standardwerkzeuge nicht reichen, entwickeln wir individuelle Software, Python-Anwendungen und lokale KI-Lösungen.",
        },
      ],
    },
    scope: {
      eyebrow: "Leistungen im Detail",
      title: "Vom einzelnen Workflow bis zur individuellen Anwendung.",
      description:
        "Wir setzen dort an, wo Automatisierung spürbar entlastet – und integrieren Lösungen in Ihre bestehende Systemlandschaft.",
      groups: [
        {
          icon: FolderSync,
          title: "Dokumente & Abläufe",
          items: [
            "Dokumentenverarbeitung",
            "Prüf- und Freigabeworkflows",
            "Projektordner und Ablagestrukturen",
            "Reporting",
          ],
        },
        {
          icon: Cable,
          title: "Systeme verbinden",
          items: [
            "Datenübertragung zwischen Systemen",
            "Schnittstellen und APIs",
            "SharePoint und Microsoft Teams",
            "Excel- und Office-Automatisierung",
          ],
        },
        {
          icon: Blocks,
          title: "Lösungen entwickeln",
          items: [
            "n8n-Workflows",
            "Python-Anwendungen",
            "Individuelle Softwareentwicklung",
            "Lokale KI-Lösungen",
          ],
        },
      ],
    },
    approach: {
      eyebrow: "Unser Leitgedanke",
      title: "Die technisch richtige Lösung statt Automatisierung um jeden Preis.",
      description:
        "Nicht jede Automatisierung braucht KI. Wir entscheiden bewusst, welche Methode zu Ihrem Prozess, Ihren Daten und Ihren Anforderungen passt.",
      options: [
        {
          label: "Regelbasiert",
          title: "Deterministische Verarbeitung",
          description:
            "Transparente, kundenspezifische Regeln liefern bei gleichen Eingaben immer das gleiche Ergebnis – nachvollziehbar und prüfbar.",
          pointsTitle: "Die richtige Wahl, wenn",
          points: [
            "Reproduzierbarkeit entscheidend ist",
            "Ergebnisse auditierbar sein müssen",
            "Regeln und Standards klar definiert sind",
            "sensible oder KRITIS-nahe Umgebungen betroffen sind",
          ],
          highlighted: true,
        },
        {
          label: "Lokale KI",
          title: "Kontrollierte KI-Verfahren",
          description:
            "Lokal betriebene KI-Modelle unterstützen dort, wo Inhalte variieren und Regeln allein nicht ausreichen – ohne Daten an Dritte zu übertragen.",
          pointsTitle: "Sinnvoll, wenn",
          points: [
            "sie einen nachvollziehbaren Nutzen bringt",
            "unstrukturierte Inhalte ausgewertet werden",
            "Daten das eigene Netzwerk nicht verlassen sollen",
            "Ergebnisse fachlich geprüft werden können",
          ],
        },
      ],
      note: "Entscheidungen bleiben nachvollziehbar, reproduzierbar und kontrollierbar – auch ohne Internetverbindung.",
    },
    principles: {
      eyebrow: "Sicher by Design",
      title: "Automatisierung für sensible Projektumgebungen.",
      description:
        "Unsere Lösungen fügen sich in bestehende IT- und Sicherheitsstrukturen ein, statt neue Abhängigkeiten zu schaffen.",
      items: [
        {
          title: "Lokal & On-Premises",
          description:
            "Verarbeitung in Ihrer eigenen Infrastruktur, ohne notwendige Cloud-Verbindung und ohne unnötige Übertragung an Drittanbieter.",
        },
        {
          title: "Nachvollziehbar & auditierbar",
          description:
            "Regelbasierte Entscheidungen, dokumentierte Abläufe und unklare Fälle, die gezielt an eine manuelle Prüfung übergeben werden.",
        },
        {
          title: "Integriert statt isoliert",
          description:
            "Anbindung an SharePoint, Microsoft 365 und Fachsysteme über definierte Schnittstellen – passend zu Ihren Standards.",
        },
      ],
    },
    technologies: {
      eyebrow: "Technologien",
      title: "Werkzeuge, die zu Ihrer Systemlandschaft passen.",
      description:
        "Wir setzen auf bewährte Technologien und wählen sie nach Anforderung, Betriebsmodell und vorhandener Infrastruktur aus.",
      groups: [
        {
          icon: Layers,
          title: "Microsoft 365",
          tags: ["SharePoint", "Microsoft Teams", "Excel", "Office"],
        },
        {
          icon: Workflow,
          title: "Workflows & Integration",
          tags: ["n8n", "Schnittstellen & APIs", "Datenübertragung"],
        },
        {
          icon: CodeXml,
          title: "Entwicklung",
          tags: ["Python", "Individuelle Software", "Reporting"],
        },
        {
          icon: Cpu,
          title: "KI & Verarbeitung",
          tags: [
            "Lokale KI-Modelle",
            "Regelbasierte Verarbeitung",
            "On-Premises-Betrieb",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Unser Vorgehen",
      title: "Vom Prozess zur verlässlichen Automatisierung.",
      steps: [
        {
          number: "01",
          title: "Prozesse und Systeme verstehen",
          description:
            "Wir nehmen Abläufe, Datenquellen, Systeme und Anforderungen an Sicherheit und Nachvollziehbarkeit auf.",
        },
        {
          number: "02",
          title: "Lösung und Methode planen",
          description:
            "Wir definieren den Automatisierungsansatz – regelbasiert, KI-gestützt oder kombiniert – und die passende Architektur.",
        },
        {
          number: "03",
          title: "Automatisierung aufsetzen",
          description:
            "Wir entwickeln Workflows, Schnittstellen und Anwendungen und integrieren sie in Ihre bestehende Umgebung.",
        },
        {
          number: "04",
          title: "Testen und kontrolliert einführen",
          description:
            "Wir prüfen Ergebnisse gegen definierte Regeln, übergeben unklare Fälle an manuelle Prüfung und führen schrittweise ein.",
        },
        {
          number: "05",
          title: "Betrieb und Weiterentwicklung begleiten",
          description:
            "Wir dokumentieren, übergeben an Ihr Team und entwickeln Lösungen mit neuen Anforderungen weiter.",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Mehr als Automatisierung",
      title: "Wenn Automatisierung Teil eines größeren Projekts ist.",
      items: [
        {
          icon: FileCheck2,
          title: "Sherpa Document Control",
          description:
            "Unsere Lösung für regelbasierte Dokumentenprüfung, Zuordnung und Ablage in sensiblen Projektumgebungen.",
          href: "/sherpa-document-control",
        },
        {
          icon: Network,
          title: "Projektmanagement & Project Delivery",
          description:
            "Projekte planen, steuern und umsetzen – von der Koordination der Beteiligten bis zur Abnahme und Inbetriebnahme.",
          href: "/leistungen/projektmanagement",
        },
        {
          icon: UserRoundSearch,
          title: "Projektbesetzung & Expert Staffing",
          description:
            "Spezialisierte Fachkräfte, Freelancer und Projektpartner passend zu Aufgabe, Projektphase und benötigter Expertise.",
          href: "/leistungen/projektbesetzung",
        },
      ],
    },
    finalCta: {
      eyebrow: "Gemeinsam weiter",
      title: "Welchen Prozess sollen wir gemeinsam automatisieren?",
      description:
        "Wir schauen uns Ihre Abläufe an und zeigen, wo Automatisierung entlastet – und wo sie keinen Sinn ergibt.",
      actions: [
        {
          label: "Projekt besprechen",
          href: "/kontakt",
          variant: "inverse",
        },
        {
          label: "Demo vereinbaren",
          href: "/sherpa-document-control",
          variant: "inverseOutline",
        },
      ] satisfies {
        label: string;
        href: string;
        variant: ButtonProps["variant"];
      }[],
    },
  },
  projektbesetzung: {
    metadata: {
      title: "Projektbesetzung & Expert Staffing | Sherpa Projects",
      description:
        "Spezialisierte Freelancer, Projektexperten und vollständige Projektteams für Infrastruktur-, IT- und Unternehmensprojekte – von der Einzelbesetzung bis zum Recruiting as a Service.",
    },
    hero: {
      eyebrow: "Projektbesetzung & Expert Staffing",
      title: "Die richtigen Experten. Zur richtigen Zeit.",
      description:
        "Wir besetzen anspruchsvolle Projekte mit spezialisierten Fachkräften, Freelancern und Partnerunternehmen – von der einzelnen Schlüsselrolle bis zum vollständigen Projektteam.",
      primaryButton: {
        title: "Experten anfragen",
        url: "/kontakt",
      },
      secondaryButton: {
        title: "Leistungsumfang ansehen",
        url: "#leistungen",
      },
      image: {
        src: "/images/services/projektbesetzung/hero.png",
        alt: "Projektteam mit Laptop, Tablet und Karte bespricht im Gebirge die gemeinsame Route",
        overlay: {
          eyebrow: "Experten. Projektteams. Partner.",
          title: "Gemeinsam lieferfähig.",
          description:
            "Wir bringen Menschen zusammen, die fachlich passen und im Projektumfeld schnell wirksam werden.",
        },
      },
    },
    challenges: {
      title: "Gute Projekte scheitern selten an der Idee, sondern an fehlenden Köpfen.",
      items: [
        {
          icon: Puzzle,
          title: "Knappe Spezialisten",
          description:
            "Erfahrene Projektleiter, technische Experten und Fachkräfte mit Branchenkenntnis sind schwer zu finden.",
        },
        {
          icon: Clock,
          title: "Zeitdruck beim Projektstart",
          description:
            "Ressourcen werden kurzfristig gebraucht, während klassische Recruitingprozesse Monate dauern.",
        },
        {
          icon: BadgeCheck,
          title: "Passung zum Projektumfeld",
          description:
            "Fachliche Qualifikation allein reicht nicht – Experten müssen Abläufe, Standards und Beteiligte verstehen.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Unser Leistungsumfang",
      title: "Projektbesetzung, die Projekte versteht.",
      items: [
        {
          title: "Freelancer & Experten",
          description:
            "Wir vermitteln spezialisierte Freelancer und besetzen Projektrollen gezielt nach Aufgabe, Projektphase und benötigter Expertise.",
        },
        {
          title: "Vollständige Projektteams",
          description:
            "Wir stellen eingespielte Teams für ganze Projektbereiche zusammen – abgestimmt auf Umfang, Laufzeit und Projektstruktur.",
        },
        {
          title: "Recruiting as a Service",
          description:
            "Wir übernehmen die Suche und Auswahl von Fachkräften für Ihre Organisation – projektbezogen oder langfristig.",
        },
        {
          title: "Partnerunternehmen & Netzwerk",
          description:
            "Wir vermitteln spezialisierte Partnerunternehmen und bauen Experten- und Projektpartnernetzwerke für Ihre Vorhaben auf.",
        },
      ],
    },
    models: {
      eyebrow: "Besetzungsmodelle",
      title: "Von der Schlüsselrolle bis zum kompletten Team.",
      description:
        "Wir besetzen so, wie es zu Ihrem Projekt passt – flexibel, skalierbar und mit klaren Ansprechpartnern.",
      levels: [
        {
          title: "Einzelne Experten",
          description:
            "Gezielte Verstärkung für eine Schlüsselrolle oder eine klar abgegrenzte Fachaufgabe.",
        },
        {
          title: "Projektrollen auf Zeit",
          description:
            "Projektleitung, PMO oder Fachrollen für eine definierte Projektphase oder Laufzeit.",
        },
        {
          title: "Vollständige Projektteams",
          description:
            "Zusammengestellte Teams für ganze Projektbereiche, Rollouts oder Standorte.",
        },
        {
          title: "Recruiting as a Service",
          description:
            "Dauerhafte Besetzung von Positionen in Ihrer Organisation – von der Suche bis zur Auswahl.",
        },
      ],
    },
    roles: {
      eyebrow: "Typische Rollen",
      title: "Expertise für anspruchsvolle Projektumgebungen.",
      description:
        "Wir besetzen Rollen entlang des gesamten Projekts – von der Steuerung über die technische Umsetzung bis zur Dokumentation.",
      groups: [
        {
          icon: Compass,
          title: "Projektsteuerung",
          tags: ["Projektleitung", "Teilprojektleitung", "PMO", "Projektcontrolling"],
        },
        {
          icon: Route,
          title: "Technik & Umsetzung",
          tags: [
            "Technische Planung",
            "Rolloutkoordination",
            "Baustellenkoordination",
            "IT- und technischer Support",
          ],
        },
        {
          icon: ClipboardCheck,
          title: "Dokumentation & Qualität",
          tags: [
            "Dokumentationsmanagement",
            "Qualitätsmanagement",
            "Abnahmen & Inbetriebnahmen",
          ],
        },
        {
          icon: Workflow,
          title: "Digital & Automation",
          tags: [
            "Prozessautomatisierung",
            "SharePoint & Microsoft 365",
            "Softwareentwicklung",
          ],
        },
      ],
    },
    audiences: {
      eyebrow: "Zwei Seiten, ein Netzwerk",
      title: "Wir verbinden Projekte mit den passenden Menschen.",
      description:
        "Ob Sie Verstärkung für Ihr Projekt suchen oder Ihre Expertise in anspruchsvolle Projekte einbringen möchten – wir bringen beide Seiten zusammen.",
      options: [
        {
          label: "Für Auftraggeber",
          title: "Sie suchen Verstärkung",
          description:
            "Wir verstehen Ihr Projekt, schärfen das Anforderungsprofil und schlagen passende Experten, Teams oder Partner vor.",
          pointsTitle: "Was Sie erwarten können",
          points: [
            "Besetzung nach Projektverständnis, nicht nach Stichworten",
            "Einzelrollen, Teams oder Partnerunternehmen",
            "Ein fester Ansprechpartner während des Einsatzes",
            "Kombinierbar mit Projektsteuerung durch Sherpa",
          ],
          highlighted: true,
          action: {
            label: "Experten anfragen",
            href: "/kontakt",
          },
        },
        {
          label: "Für Experten & Partner",
          title: "Sie bringen Expertise mit",
          description:
            "Freelancer, Fachkräfte und spezialisierte Unternehmen finden bei uns anspruchsvolle Projekte in Infrastruktur, IT und Industrie.",
          pointsTitle: "Was Sie erwartet",
          points: [
            "Offene Projekte in der Projektbörse",
            "Aufnahme in unseren Expertenpool",
            "Zusammenarbeit als Partnerunternehmen",
            "Projekte mit klaren Strukturen und Ansprechpartnern",
          ],
          action: {
            label: "Offene Projekte ansehen",
            href: "/projektboerse",
          },
        },
      ],
    },
    benefits: {
      eyebrow: "Warum Sherpa",
      title: "Projektbesetzung aus Projektsicht.",
      description:
        "Wir sind selbst in anspruchsvollen Projekten unterwegs. Deshalb wissen wir, worauf es bei einer Besetzung wirklich ankommt.",
      items: [
        {
          title: "Projektverständnis statt Profilversand",
          description:
            "Wir verstehen Aufgaben, Abhängigkeiten und Projektumfeld und besetzen auf dieser Grundlage – nicht nach Schlagworten.",
        },
        {
          title: "Netzwerk aus der Projektpraxis",
          description:
            "Unser Experten- und Partnernetzwerk entsteht aus gemeinsamer Projektarbeit in Infrastruktur, IT und Industrie.",
        },
        {
          title: "Lieferfähigkeit aus einer Hand",
          description:
            "Projektbesetzung lässt sich mit Projektsteuerung und Automatisierung kombinieren – für Projekte, die verlässlich liefern.",
        },
      ],
    },
    process: {
      eyebrow: "Unser Vorgehen",
      title: "Vom Bedarf zur passenden Besetzung.",
      steps: [
        {
          number: "01",
          title: "Bedarf und Projektumfeld verstehen",
          description:
            "Wir klären Aufgaben, Projektphase, Rahmenbedingungen und die Anforderungen an Erfahrung und Qualifikation.",
        },
        {
          number: "02",
          title: "Anforderungsprofil schärfen",
          description:
            "Wir definieren Rollen, Muss-Qualifikationen, Einsatzort, Auslastung und Laufzeit gemeinsam mit Ihnen.",
        },
        {
          number: "03",
          title: "Passende Experten auswählen",
          description:
            "Wir sprechen geeignete Experten und Partner aus unserem Netzwerk an und stellen Ihnen eine fundierte Auswahl vor.",
        },
        {
          number: "04",
          title: "Einsatz starten und integrieren",
          description:
            "Wir begleiten den Start, binden Experten in Projektstrukturen ein und klären Schnittstellen und Verantwortlichkeiten.",
        },
        {
          number: "05",
          title: "Begleiten und weiterentwickeln",
          description:
            "Wir bleiben Ansprechpartner während des Einsatzes, skalieren bei Bedarf und besetzen nach, wenn sich Anforderungen ändern.",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Mehr als Projektbesetzung",
      title: "Wenn Ihr Projekt mehr braucht als zusätzliche Köpfe.",
      items: [
        {
          icon: Network,
          title: "Projektmanagement & Project Delivery",
          description:
            "Projekte planen, steuern und umsetzen – von der Koordination der Beteiligten bis zur Abnahme und Inbetriebnahme.",
          href: "/leistungen/projektmanagement",
        },
        {
          icon: Workflow,
          title: "Automatisierung & Digital Solutions",
          description:
            "Wiederkehrende Prozesse, Datenflüsse und Arbeitsabläufe gezielt automatisieren und technische Schnittstellen sinnvoll verbinden.",
          href: "/leistungen/automatisierung",
        },
        {
          icon: FileCheck2,
          title: "Sherpa Document Control",
          description:
            "Projektunterlagen regelbasiert prüfen, zuordnen und strukturiert in bestehende Dokumentenprozesse integrieren.",
          href: "/sherpa-document-control",
        },
      ],
    },
    finalCta: {
      eyebrow: "Gemeinsam weiter",
      title: "Wen braucht Ihr Projekt als Nächstes?",
      description:
        "Sprechen Sie uns an – oder werden Sie Teil unseres Netzwerks aus Experten und Partnerunternehmen.",
      actions: [
        {
          label: "Experten anfragen",
          href: "/kontakt",
          variant: "inverse",
        },
        {
          label: "Als Experte bewerben",
          href: "/projektboerse",
          variant: "inverseOutline",
        },
        {
          label: "Partnerunternehmen werden",
          href: "/projektboerse",
          variant: "inverseGhost",
        },
      ] satisfies {
        label: string;
        href: string;
        variant: ButtonProps["variant"];
      }[],
    },
  },
  technischerSupport: {
    metadata: {
      title: "IT & Technical Support | Sherpa Projects",
      description:
        "IT- und technischer Support für Infrastruktur- und Unternehmensprojekte: Rollout- und Inbetriebnahme-Support, Vor-Ort-Einsätze an verteilten Standorten, Netzwerke, Systeme und Informationssicherheit.",
    },
    hero: {
      eyebrow: "IT & Technical Support",
      title: "Technik, die im Projekt zuverlässig läuft.",
      description:
        "Wir unterstützen Projekte mit IT- und technischem Support – von der Einrichtung von Systemen und Netzwerken über Rollouts an verteilten Standorten bis zur Inbetriebnahme und Übergabe in den Betrieb.",
      primaryButton: {
        title: "Projekt besprechen",
        url: "/kontakt",
      },
      secondaryButton: {
        title: "Leistungsumfang ansehen",
        url: "#leistungen",
      },
      image: {
        src: "/images/services/technischer-support/hero.png",
        alt: "Sherpa-Supportteam analysiert an Laptops und Monitoren eine Netzwerkstruktur in einem mobilen Technikstand vor Bergkulisse",
        overlay: {
          eyebrow: "IT-Support. Netzwerke. Systeme. Sicherheit.",
          title: "Support, wo das Projekt passiert.",
          description:
            "Wir sind vor Ort und remote ansprechbar – mit Projektverständnis und technischer Tiefe.",
        },
      },
    },
    challenges: {
      title: "Technische Projekte brauchen Support, der das Projekt kennt.",
      items: [
        {
          icon: MapPinned,
          title: "Verteilte Standorte",
          description:
            "Systeme müssen an vielen Standorten eingerichtet, geprüft und betreut werden – oft parallel und unter Zeitdruck.",
        },
        {
          icon: AlertTriangle,
          title: "Störungen im Rollout",
          description:
            "Technische Probleme bei Installation und Inbetriebnahme gefährden Termine, wenn niemand schnell reagiert.",
        },
        {
          icon: ShieldCheck,
          title: "Sicherheitsanforderungen",
          description:
            "Regulierte und sicherheitskritische Umgebungen verlangen nachvollziehbare Abläufe und dokumentierte Änderungen.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Unser Leistungsumfang",
      title: "Technischer Support mit Projektverständnis.",
      items: [
        {
          title: "IT-Support",
          description:
            "Wir betreuen Anwender, Endgeräte und Software im Projekt und lösen technische Probleme schnell und strukturiert.",
        },
        {
          title: "Netzwerke",
          description:
            "Wir richten Netzwerkkomponenten ein, prüfen Verbindungen und unterstützen bei der Anbindung von Standorten und Systemen.",
        },
        {
          title: "Systeme",
          description:
            "Wir installieren, konfigurieren und nehmen technische Systeme in Betrieb – vom einzelnen Standort bis zum flächigen Rollout.",
        },
        {
          title: "Sicherheit",
          description:
            "Wir berücksichtigen Anforderungen an Informationssicherheit und dokumentieren Konfigurationen und Änderungen nachvollziehbar.",
        },
      ],
    },
    scope: {
      eyebrow: "Leistungen im Detail",
      title: "Vom Aufbau vor Ort bis zur Übergabe in den Betrieb.",
      description:
        "Wir unterstützen genau dort, wo Projekte technisch umgesetzt werden – vor Ort, remote oder als Teil des Projektteams.",
      groups: [
        {
          icon: Wrench,
          title: "Vor Ort",
          items: [
            "Installation und Einrichtung",
            "Rollout-Support an Standorten",
            "Inbetriebnahmen und Funktionsprüfungen",
            "Störungsanalyse und -behebung",
          ],
        },
        {
          icon: ServerCog,
          title: "Systeme & IT",
          items: [
            "Konfiguration von Systemen und Netzwerken",
            "Anwender- und Endgerätesupport",
            "Remote-Support und Fernwartung",
            "Koordination mit Herstellern und Lieferanten",
          ],
        },
        {
          icon: MonitorCog,
          title: "Nachweis & Übergabe",
          items: [
            "Technische Dokumentation",
            "Prüf- und Abnahmeprotokolle",
            "Übergabe an Betrieb und Service",
            "Unterstützung bei Abnahmen",
          ],
        },
      ],
    },
    models: {
      eyebrow: "Einsatzmodelle",
      title: "Support so, wie Ihr Projekt ihn braucht.",
      description:
        "Wir unterstützen punktuell, begleiten ganze Projektphasen oder stellen Teams für flächige Rollouts.",
      levels: [
        {
          title: "Punktuelle Einsätze",
          description:
            "Gezielte Unterstützung bei Installation, Störung oder Inbetriebnahme an einzelnen Standorten.",
        },
        {
          title: "Projektbegleitender Support",
          description:
            "Feste technische Ansprechpartner für die gesamte Projektlaufzeit – vor Ort und remote.",
        },
        {
          title: "Rollout-Teams",
          description:
            "Eingespielte Teams für die parallele Umsetzung an vielen Standorten und in engen Zeitfenstern.",
        },
        {
          title: "Übergabe in den Betrieb",
          description:
            "Strukturierte Dokumentation und Übergabe, damit der laufende Betrieb sicher übernehmen kann.",
        },
      ],
    },
    environments: {
      eyebrow: "Typische Einsatzumgebungen",
      title: "Erfahrung dort, wo Technik verlässlich laufen muss.",
      description:
        "Wir unterstützen technische Projekte mit vielen Standorten, Beteiligten und Schnittstellen – auch in regulierten Umgebungen.",
      items: [
        {
          title: "Technische Systeme im öffentlichen Raum",
          description:
            "Installation, Inbetriebnahme und Betreuung von Systemen an Standorten mit besonderen Anforderungen an Verfügbarkeit.",
        },
        {
          title: "Verteilte Standorte & Rollouts",
          description:
            "Parallele Einsätze an vielen Standorten mit abgestimmten Abläufen, klaren Zuständigkeiten und sauberer Dokumentation.",
        },
        {
          title: "Regulierte & sicherheitskritische Umgebungen",
          description:
            "Nachvollziehbare Arbeitsweise, dokumentierte Änderungen und definierte Standards für sensible Infrastrukturen.",
        },
      ],
    },
    process: {
      eyebrow: "Unser Vorgehen",
      title: "Strukturierter Support von der Planung bis zum Betrieb.",
      steps: [
        {
          number: "01",
          title: "Anforderungen und Umgebung verstehen",
          description:
            "Wir klären Systeme, Standorte, Sicherheitsanforderungen und Schnittstellen zu Betrieb und Lieferanten.",
        },
        {
          number: "02",
          title: "Einsätze und Ressourcen planen",
          description:
            "Wir planen Teams, Material, Zeitfenster und Zugänge und stimmen Abläufe mit allen Beteiligten ab.",
        },
        {
          number: "03",
          title: "Systeme einrichten",
          description:
            "Wir installieren und konfigurieren Systeme und Netzwerke nach definierten Standards.",
        },
        {
          number: "04",
          title: "Prüfen und in Betrieb nehmen",
          description:
            "Wir führen Funktionsprüfungen durch, beheben Störungen und begleiten Inbetriebnahmen und Abnahmen.",
        },
        {
          number: "05",
          title: "Dokumentieren und übergeben",
          description:
            "Wir dokumentieren Konfigurationen und Prüfergebnisse und übergeben strukturiert an Betrieb und Service.",
        },
      ],
    },
    relatedServices: {
      eyebrow: "Mehr als Support",
      title: "Wenn Ihr Projekt mehr braucht als technische Unterstützung.",
      items: [
        {
          icon: Network,
          title: "Projektmanagement & Project Delivery",
          description:
            "Projekte planen, steuern und umsetzen – von der Koordination der Beteiligten bis zur Abnahme und Inbetriebnahme.",
          href: "/leistungen/projektmanagement",
        },
        {
          icon: UserRoundSearch,
          title: "Projektbesetzung & Expert Staffing",
          description:
            "Spezialisierte Fachkräfte, Freelancer und Projektpartner passend zu Aufgabe, Projektphase und benötigter Expertise.",
          href: "/leistungen/projektbesetzung",
        },
        {
          icon: Workflow,
          title: "Automatisierung & Digital Solutions",
          description:
            "Wiederkehrende Prozesse, Datenflüsse und Arbeitsabläufe gezielt automatisieren und technische Schnittstellen sinnvoll verbinden.",
          href: "/leistungen/automatisierung",
        },
      ],
    },
    finalCta: {
      eyebrow: "Gemeinsam weiter",
      title: "Wo braucht Ihr Projekt technische Unterstützung?",
      description:
        "Ob einzelner Einsatz oder flächiger Rollout – wir besprechen mit Ihnen, wie wir Ihr Projekt technisch absichern.",
      actions: [
        {
          label: "Projekt besprechen",
          href: "/kontakt",
          variant: "inverse",
        },
        {
          label: "Experten anfragen",
          href: "/leistungen/projektbesetzung",
          variant: "inverseOutline",
        },
      ] satisfies {
        label: string;
        href: string;
        variant: ButtonProps["variant"];
      }[],
    },
  },
};
