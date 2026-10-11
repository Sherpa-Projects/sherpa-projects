import { HardHat, Landmark, TrainFront } from "lucide-react";
import type { ButtonProps } from "@/components/ui/button";

export const home = {
  hero: {
    eyebrow: "Projekt- & Technologiepartner",
    title: "Komplexe Projekte sicher ans Ziel bringen.",
    description:
      "Wir sind Ihr Partner für die Umsetzung komplexer Projekte. Mit unserer Expertise in den Bereichen Projektmanagement, Technologieberatung und Prozessoptimierung unterstützen wir Sie dabei, Ihre Projekte erfolgreich zu realisieren.",
    primaryButton: {
      title: "Projekt besprechen",
      url: "/",
    },
    secondaryButton: {
      title: "Sherpa-Tool entdecken",
      url: "#document-control",
    },
    slides: [
      {
        image: "/images/home/hero0.png",
        eyebrow: "Komplexität verstehen",
        title: "Jedes anspruchsvolle Projekt beginnt mit Klarheit.",
        description:
          "Wir analysieren Anforderungen, Abhängigkeiten und Risiken und schaffen die Grundlage für eine verlässliche Umsetzung.",
      },
      {
        image: "/images/home/hero1.png",
        eyebrow: "Orientierung & Planung",
        title: "Gemeinsam den richtigen Weg finden.",
        description:
          "Wir schaffen klare Strukturen und planen den Weg – mit den richtigen Menschen, Prozessen und Technologien.",
      },
      {
        image: "/images/home/hero2.png",
        eyebrow: "Steuerung & Umsetzung",
        title: "Verlässlich, wenn es anspruchsvoll wird.",
        description:
          "Wir übernehmen Verantwortung, koordinieren Beteiligte und lösen Hindernisse – auch wenn sich Rahmenbedingungen verändern.",
      },
      {
        image: "/images/home/hero3.png",
        eyebrow: "Ergebnis & Partnerschaft",
        title: "Komplexe Projekte sicher ans Ziel bringen.",
        description:
          "Von der ersten Planung bis zum erfolgreichen Abschluss begleiten wir Projekte partnerschaftlich, strukturiert und mit einem klaren Ziel vor Augen.",
      },
    ],
  },
  audience: {
    title: "Erfahrung dort, wo Projekte anspruchsvoll werden.",
    itemList: [
      {
        icon: TrainFront,
        title: "Infrastruktur",
        description: "Bahn, Mobilität & komplexe Infrastrukturprojekte",
      },
      {
        icon: Landmark,
        title: "Öffentliche Auftraggeber",
        description: "Strukturierte Umsetzung in regulierten Projektumfeldern",
      },
      {
        icon: HardHat,
        title: "Bau- & Technik",
        description:
          "Projektsteuerung an der Schnittstelle von Planung und Umsetzung",
      },
    ],
  },
  servicesSection: {
    title: "Ein Partner. Vier Hebel.",
    eyebrow: "Unser Leistungsmodell",
    items: [
      {
        title: "Projekte steuern",
        description: "Von der Planung bis zur erfolgreichen Inbetriebnahme.",
        url: "/leistungen/projektmanagement",
      },
      {
        title: "Prozesse automatisieren",
        description:
          "Sichere, individuelle Automatisierungen für komplexe Arbeitsabläufe.",
        url: "/leistungen/automatisierung",
      },
      {
        title: "Experten bereitstellen",
        description:
          "Passende Fachkräfte und Projektpartner für anspruchsvolle Aufgaben.",
        url: "/leistungen/projektbesetzung",
      },
      {
        title: "Dokumente beherrschen",
        description:
          "Regelbasierte Prüfung, Zuordnung und Ablage mit Sherpa Document Control.",
        url: "/sherpa-document-control",
      },
    ],
  },
  documentControl: {
    eyebrow: "Sherpa Document Control",
    title: ["Regelbasiert.", "Reproduzierbar.", "Offline."],
    description:
      "Dokumente prüfen, benennen, klassifizieren und richtig zuordnen –  vollständig lokal, kontrollierbar und ohne notwendige Internetverbindung.",
    button: {
      title: "Document Control entdecken",
      url: "/sherpa-document-control",
    },
  },
  process: {
    eyebrow: "Unser Vorgehen",
    title: "Ein zuverlässiger Partner von Anfang bis Ende.",
    steps: [
      {
        number: "01",
        title: "Anforderungen verstehen",
        description:
          "Wir analysieren Projektumfeld, Anforderungen, Beteiligte und Rahmenbedingungen.",
      },
      {
        number: "02",
        title: "Lösung planen",
        description:
          "Wir definieren den passenden Weg, die benötigten Ressourcen und geeigneten Technologien.",
      },
      {
        number: "03",
        title: "Strukturen aufsetzen",
        description:
          "Wir etablieren Systeme, Prozesse und Projektstrukturen für eine verlässliche Umsetzung.",
      },
      {
        number: "04",
        title: "Umsetzung steuern",
        description:
          "Wir koordinieren Beteiligte, kontrollieren Fortschritt und lösen Hindernisse.",
      },
      {
        number: "05",
        title: "Übergabe begleiten",
        description:
          "Wir begleiten Betrieb, Übergabe und die kontinuierliche Weiterentwicklung.",
      },
    ],
  },
  experience: {
    eyebrow: "Branchenkompetenz",
    title: "Erfahrung aus komplexen Infrastrukturumgebungen.",
    description:
      "Unsere Teams begleiten technische Projekte mit vielen Standorten, Beteiligten und Schnittstellen – von der Planung über die Umsetzung bis zur vollständigen Projektdokumentation.",
    cards: [
      {
        title: "Komplexe Infrastrukturprojekte",
        description:
          "Technische Projekte im öffentlichen Raum erfordern klare Strukturen, verlässliche Abläufe und eine sichere Koordination.",
      },
      {
        title: "Verteilte Standorte & Rollouts",
        description:
          "Wir begleiten Projekte über mehrere Standorte hinweg und behalten Umsetzung, Schnittstellen und Dokumentation im Blick.",
      },
      {
        title: "Regulierte Projektumgebungen",
        description:
          "Hohe Dokumentationsanforderungen, sicherheitskritische Rahmenbedingungen und viele Beteiligte verlangen nachvollziehbare Prozesse.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Gemeinsam weiter",
    title: "Welches Ziel sollen wir gemeinsam erreichen?",
    description:
      "Ob anspruchsvolles Projekt, sichere Automatisierung oder passende Verstärkung – wir bringen Struktur, Technologie und die richtigen Menschen zusammen.",
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
      {
        label: "Als Experte bewerben",
        href: "/projektboerse",
        variant: "inverseGhost",
      },
    ] satisfies {
      label: string;
      href: string;
      variant: ButtonProps["variant"];
    }[],
  },
};
