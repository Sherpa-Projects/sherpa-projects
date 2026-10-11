type NavigationItem = {
  title: string;
  url?: string;
  description?: string | null;
  subItems?: NavigationItem[];
};

export const navigation: NavigationItem[] = [
  {
    title: "Leistungen",
    subItems: [
      {
        title: "Projektmanagement & Project Delivery",
        url: "/leistungen/projektmanagement",
      },
      {
        title: "Automatisierung & Digital Solutions",
        url: "/leistungen/automatisierung",
      },
      {
        title: "Projektbesetzung & Expert Staffing",
        url: "/leistungen/projektbesetzung",
      },
      {
        title: "IT & Technical Support",
        url: "/leistungen/technischer-support",
      },
    ],
  },
  {
    title: "Document Control",
    url: "/sherpa-document-control",
  },
  {
    title: "Branchen",
    subItems: [
      {
        title: "Infrastruktur & Mobilität",
        url: "/",
      },
      {
        title: "Öffentliche Auftraggeber",
        url: "/",
      },
      {
        title: "Bau & technische Infrastruktur",
        url: "/",
      },
      {
        title: "Mittelstand & wachsende Unternehmen",
        url: "/",
      },
    ],
  },
  {
    title: "Projekte",
    url: "/",
  },
  {
    title: "Projektbörse",
    subItems: [
      {
        title: "Offene Projekte",
        url: "/",
      },
      {
        title: "Freelancer bewerben",
        url: "/",
      },
      {
        title: "Partnerunternehmen werden",
        url: "/",
      },
      {
        title: "Karriere bei Sherpa",
        url: "/",
      },
    ],
  },
  {
    title: "Über Sherpa",
    subItems: [
      {
        title: "Unternehmen",
        url: "/",
      },
      {
        title: "Arbeitsweise",
        url: "/",
      },
      {
        title: "Team",
        url: "/",
      },
      {
        title: "Partnernetzwerk",
        url: "/",
      },
    ],
  },
];

export const cta: NavigationItem = {
  title: "Projekt besprechen",
  url: "/",
};
