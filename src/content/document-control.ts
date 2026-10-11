import {
  ArchiveRestore,
  Cable,
  ClipboardList,
  CloudOff,
  Database,
  FileSearch,
  FileX,
  FolderCheck,
  FolderInput,
  FolderTree,
  HardDrive,
  Layers,
  ListChecks,
  ScanSearch,
  ShieldCheck,
  Signature,
  SlidersHorizontal,
  Tags,
  UserCheck,
  Files,
} from "lucide-react";
import type { ButtonProps } from "@/components/ui/button";

export const documentControl = {
  metadata: {
    title: "Sherpa Document Control | Sherpa Projects",
    description:
      "Sherpa Document Control prüft, benennt, klassifiziert und sortiert Projektunterlagen nach kundenspezifischen Regeln – vollständig lokal und ohne notwendige Internetverbindung.",
  },
  hero: {
    label: "Produkt",
    badge: "On-Premises · Regelbasiert",
    title: "Tausende Dokumente automatisiert prüfen und richtig zuordnen.",
    description:
      "Sherpa Document Control prüft, benennt, klassifiziert und sortiert Projektunterlagen nach kundenspezifischen Regeln – vollständig lokal und ohne notwendige Internetverbindung.",
    primaryButton: { title: "Demo vereinbaren", url: "#demo" },
    secondaryButton: { title: "Funktionsweise ansehen", url: "#funktionsweise" },
    mockup: {
      title: "Prüflauf · Projektunterlagen",
      badge: "Lokal",
      caption: "Beispielhafte Darstellung",
      metrics: [
        { value: "2.481", label: "Dokumente geprüft", tone: "forest", progress: 100 },
        { value: "2.203", label: "Automatisch zugeordnet", tone: "sage", progress: 89 },
        { value: "278", label: "Zur Prüfung übergeben", tone: "warning", progress: 11 },
      ],
      documents: [
        { name: "E-Plan_UW-Nord_Rev03.pdf", status: "Zugeordnet", tone: "ok" },
        { name: "Pruefprotokoll_Trafo_T2.pdf", status: "Zugeordnet", tone: "ok" },
        { name: "Scan_0047.pdf", status: "Unterschrift fehlt", tone: "review" },
        { name: "Datenblatt_Schutzrelais.pdf", status: "Zugeordnet", tone: "ok" },
      ],
    } as {
      title: string;
      badge: string;
      caption: string;
      metrics: {
        value: string;
        label: string;
        tone: "forest" | "sage" | "warning";
        progress: number;
      }[];
      documents: { name: string; status: string; tone: "ok" | "review" }[];
    },
    facts: [
      {
        icon: HardDrive,
        title: "Vollständig lokal",
        description: "Betrieb in Ihrer eigenen Infrastruktur",
      },
      {
        icon: CloudOff,
        title: "Keine Cloud nötig",
        description: "Funktioniert ohne Internetverbindung",
      },
      {
        icon: ListChecks,
        title: "Regelbasiert",
        description: "Transparente, kundenspezifische Regeln",
      },
      {
        icon: ShieldCheck,
        title: "Für sensible Umgebungen",
        description: "Geeignet für KRITIS-nahe Projekte",
      },
    ],
  },
  problem: {
    eyebrow: "Das Ausgangsproblem",
    title: "Große Dokumentenmengen sind manuell kaum noch beherrschbar.",
    description:
      "In Großprojekten entstehen tausende Unterlagen aus unterschiedlichen Quellen. Sie müssen geprüft, korrekt benannt und an der richtigen Stelle abgelegt werden – meist von Hand.",
    options: [
      {
        label: "Heute",
        title: "Manuelle Dokumentenprüfung",
        description:
          "Fachkräfte öffnen, prüfen und sortieren Dokumente einzeln. Das kostet Zeit, bindet Kapazität und ist fehleranfällig.",
        pointsTitle: "Typische Folgen",
        points: [
          "Hoher manueller Prüfaufwand",
          "Uneinheitliche Benennung und Ablage",
          "Fehlende Angaben fallen spät auf",
          "Prüfergebnisse schwer nachvollziehbar",
        ],
      },
      {
        label: "Mit Sherpa Document Control",
        title: "Automatisierte, regelbasierte Prüfung",
        description:
          "Dokumente werden nach Ihren Regeln geprüft, benannt und einsortiert. Ihr Team kümmert sich nur noch um die Fälle, die wirklich Aufmerksamkeit brauchen.",
        pointsTitle: "Ihr Ergebnis",
        points: [
          "Einheitliche Benennung und Struktur",
          "Fehlende Angaben werden früh erkannt",
          "Unklare Fälle gezielt zur Prüfung",
          "Nachvollziehbare, reproduzierbare Ergebnisse",
        ],
        highlighted: true,
      },
    ],
  },
  flow: {
    eyebrow: "Funktionsweise",
    title: "Vom Dokumenteneingang zur sauberen Ablage.",
    description:
      "Sherpa Document Control arbeitet Dokumente in festen, nachvollziehbaren Schritten ab – nach Regeln, die gemeinsam mit Ihnen definiert werden.",
    steps: [
      {
        icon: FolderInput,
        title: "Einlesen",
        description: "Dokumente aus Ordnern, Plattformen oder Übergaben werden lokal erfasst.",
      },
      {
        icon: ScanSearch,
        title: "Prüfen",
        description: "Pflichtangaben, Metadaten und definierte Merkmale werden regelbasiert geprüft.",
      },
      {
        icon: Tags,
        title: "Klassifizieren",
        description: "Jedes Dokument wird nach Typ, Gewerk oder Anlage eingeordnet.",
      },
      {
        icon: FolderCheck,
        title: "Benennen & ablegen",
        description: "Dateien erhalten einheitliche Namen und landen in der richtigen Struktur.",
      },
      {
        icon: UserCheck,
        title: "Ausnahmen übergeben",
        description: "Unklare Fälle werden markiert und gezielt an Ihr Team übergeben.",
      },
    ],
  },
  features: {
    eyebrow: "Funktionen",
    title: "Was Sherpa Document Control für Sie übernimmt.",
    description:
      "Der Funktionsumfang wird auf Ihre Dokumenttypen, Regeln und Ablagestrukturen zugeschnitten.",
    items: [
      {
        icon: FileSearch,
        title: "Inhaltliche Prüfung",
        description: "Prüft Dokumente auf definierte Pflichtangaben und Inhalte.",
      },
      {
        icon: Database,
        title: "Metadaten auslesen",
        description: "Liest relevante Angaben aus Dokumenten und Dateieigenschaften aus.",
      },
      {
        icon: Signature,
        title: "Signaturen & Unterschriften",
        description:
          "Prüft definierte Signatur- und Unterschriftsmerkmale, soweit Dokumenttyp und Konfiguration dies ermöglichen.",
      },
      {
        icon: FileX,
        title: "Fehlende Angaben erkennen",
        description: "Macht unvollständige oder fehlerhafte Dokumente früh sichtbar.",
      },
      {
        icon: Tags,
        title: "Einheitliche Benennung",
        description: "Benennt Dateien automatisch nach Ihren Namenskonventionen.",
      },
      {
        icon: FolderTree,
        title: "Strukturierte Ablage",
        description: "Sortiert Dokumente in die vorgesehene Ordner- oder Plattformstruktur.",
      },
      {
        icon: Files,
        title: "Gängige Formate",
        description:
          "Verarbeitet gängige Projekt- und Dokumentenformate sowie kundenspezifisch definierte Dateitypen.",
      },
      {
        icon: SlidersHorizontal,
        title: "Kundenspezifische Regeln",
        description: "Regeln werden gemeinsam definiert und bei Bedarf erweitert.",
      },
      {
        icon: ClipboardList,
        title: "Prüfberichte",
        description: "Zusammenfassende Berichte über Prüfläufe und Ergebnisse.",
        badge: "In Entwicklung",
      },
    ],
  },
  security: {
    eyebrow: "Sicherheit & Betriebsmodell",
    title: "Ihre Dokumente verlassen Ihr Netzwerk nicht.",
    description:
      "Sherpa Document Control wird in Ihrer eigenen Infrastruktur betrieben. Es ist keine Cloud-Anbindung und keine Internetverbindung notwendig – ideal für sensible und KRITIS-nahe Projektumgebungen.",
    quote:
      "Nicht jede Automatisierung braucht KI. Sherpa Document Control arbeitet mit transparenten und kundenspezifischen Regeln. Entscheidungen bleiben nachvollziehbar, reproduzierbar und kontrollierbar – auch ohne Internetverbindung.",
    points: [
      "Vollständig lokaler Betrieb",
      "Keine notwendige Internetverbindung",
      "Keine Datenübertragung an Dritte",
      "Transparente, regelbasierte Entscheidungen",
      "Reproduzierbare Ergebnisse",
    ],
  },
  integrations: {
    eyebrow: "Integrationen",
    title: "Passt sich Ihrer Systemlandschaft an.",
    description:
      "Sherpa Document Control arbeitet mit den Ablagen und Plattformen, die in Ihren Projekten bereits im Einsatz sind.",
    groups: [
      { icon: Layers, title: "Microsoft", tags: ["SharePoint", "Microsoft 365"] },
      { icon: FolderTree, title: "Projektplattformen", tags: ["PDPM", "PKP"] },
      { icon: HardDrive, title: "Dateiablagen", tags: ["Netzlaufwerke", "Lokale Ordnerstrukturen"] },
      { icon: Cable, title: "Weitere Systeme", tags: ["Kundenspezifische Anbindung", "Schnittstellen"] },
    ],
  },
  useCases: {
    eyebrow: "Typische Anwendungsfälle",
    title: "Überall dort, wo viele Dokumente zuverlässig geprüft werden müssen.",
    description:
      "Besonders wirkungsvoll ist Sherpa Document Control in Projekten mit hohem Dokumentenaufkommen und klaren Vorgaben.",
    groups: [
      {
        icon: FolderInput,
        title: "Dokumenteneingang",
        items: [
          "Prüfung von Lieferantendokumentationen",
          "Eingangsprüfung von Planunterlagen",
          "Prüfung von Übergabe- und Revisionsunterlagen",
        ],
      },
      {
        icon: FolderTree,
        title: "Ordnung & Struktur",
        items: [
          "Einheitliche Benennung nach Konventionen",
          "Sortierung in Projekt- und Anlagenstrukturen",
          "Bereinigung gewachsener Bestandsablagen",
        ],
      },
      {
        icon: ArchiveRestore,
        title: "Qualität & Nachweis",
        items: [
          "Vollständigkeitsprüfung vor Abgaben",
          "Prüfung von Signaturen und Freigabevermerken",
          "Vorbereitung von Dokumentationsübergaben",
        ],
      },
    ],
  },
  implementation: {
    eyebrow: "Implementierung",
    title: "In klaren Schritten zum produktiven Einsatz.",
    steps: [
      {
        number: "01",
        title: "Anforderungen aufnehmen",
        description: "Wir analysieren Dokumenttypen, Quellen, Ablagestrukturen und Ihre Vorgaben.",
      },
      {
        number: "02",
        title: "Regeln definieren",
        description: "Prüfkriterien, Namenskonventionen und Zuordnungslogik werden gemeinsam festgelegt.",
      },
      {
        number: "03",
        title: "Lokal installieren",
        description: "Die Lösung wird in Ihrer Infrastruktur eingerichtet – ohne Cloud-Abhängigkeit.",
      },
      {
        number: "04",
        title: "Testen & abstimmen",
        description: "Mit echten Projektunterlagen werden Ergebnisse geprüft und Regeln geschärft.",
      },
      {
        number: "05",
        title: "Produktiv betreiben",
        description: "Wir begleiten den Betrieb und erweitern Regeln bei neuen Anforderungen.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "Aus der Praxis",
    title: "Bereits produktiv in einer kritischen Infrastrukturumgebung eingesetzt.",
    description:
      "In einem Großprojekt im Umfeld kritischer Infrastruktur unterstützt Sherpa Document Control die Prüfung und Ablage umfangreicher Projektdokumentation.",
    facts: [
      { label: "Branche", value: "Kritische Infrastruktur" },
      { label: "Umfang", value: "Tausende Projektdokumente" },
      { label: "Betrieb", value: "Vollständig lokal, ohne Cloud-Anbindung" },
    ],
    outcomesTitle: "Ergebnis",
    outcomes: [
      "Deutlich weniger manueller Prüfaufwand",
      "Einheitliche Benennung und Ablagestruktur",
      "Fehlende Angaben werden frühzeitig erkannt",
      "Fachkräfte konzentrieren sich auf echte Ausnahmen",
    ],
  },
  demo: {
    eyebrow: "Demo anfragen",
    title: "Sehen Sie Sherpa Document Control mit Ihren Dokumenten.",
    description:
      "In einer Demo zeigen wir, wie die Prüfung und Zuordnung für Ihre Dokumenttypen und Ablagestrukturen aussehen kann.",
    actions: [
      { label: "Demo vereinbaren", href: "/kontakt", variant: "inverse" },
      {
        label: "info@sherpa-projects.net",
        href: "mailto:info@sherpa-projects.net",
        variant: "inverseOutline",
      },
    ] satisfies {
      label: string;
      href: string;
      variant: ButtonProps["variant"];
    }[],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen.",
    description: "Ihre Frage ist nicht dabei? Sprechen Sie uns direkt an.",
    items: [
      {
        question: "Nutzt Sherpa Document Control KI?",
        answer:
          "Nein. Sherpa Document Control arbeitet mit transparenten, kundenspezifischen Regeln. Entscheidungen bleiben dadurch nachvollziehbar, reproduzierbar und kontrollierbar.",
      },
      {
        question: "Wird eine Internetverbindung benötigt?",
        answer:
          "Nein. Die Lösung läuft vollständig lokal in Ihrer Infrastruktur. Dokumente verlassen Ihr Netzwerk nicht.",
      },
      {
        question: "Welche Dateiformate werden unterstützt?",
        answer:
          "Sherpa Document Control verarbeitet gängige Projekt- und Dokumentenformate sowie kundenspezifisch definierte Dateitypen.",
      },
      {
        question: "Können Signaturen und Unterschriften geprüft werden?",
        answer:
          "Ja, die Lösung prüft definierte Signatur- und Unterschriftsmerkmale, soweit Dokumenttyp und Konfiguration dies ermöglichen.",
      },
      {
        question: "Was passiert mit Dokumenten, die nicht eindeutig zugeordnet werden können?",
        answer:
          "Unklare Fälle werden markiert und gezielt zur manuellen Prüfung übergeben. So bleibt die Kontrolle bei Ihrem Team.",
      },
      {
        question: "Mit welchen Systemen lässt sich die Lösung verbinden?",
        answer:
          "Unter anderem mit SharePoint, Projektplattformen wie PDPM und PKP sowie lokalen Dateiablagen. Weitere Systeme binden wir kundenspezifisch an.",
      },
      {
        question: "Gibt es Prüfberichte?",
        answer:
          "Zusammenfassende Prüfberichte befinden sich aktuell in Entwicklung.",
      },
    ],
  },
};
