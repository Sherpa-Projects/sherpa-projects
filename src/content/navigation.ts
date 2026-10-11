export type NavigationItem = {
  title: string;
  url?: string;
  description?: string | null;
  subItems?: NavigationItem[];
  // Shown greyed out and not clickable until the page exists.
  disabled?: boolean;
};

// A group is disabled when every one of its entries is.
export function isNavigationItemDisabled(item: NavigationItem): boolean {
  if (item.disabled) return true;
  const subItems = item.subItems ?? [];
  return subItems.length > 0 && subItems.every(isNavigationItemDisabled);
}

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
        disabled: true,
      },
      {
        title: "Öffentliche Auftraggeber",
        url: "/",
        disabled: true,
      },
      {
        title: "Bau & technische Infrastruktur",
        url: "/",
        disabled: true,
      },
      {
        title: "Mittelstand & wachsende Unternehmen",
        url: "/",
        disabled: true,
      },
    ],
  },
  {
    title: "Projekte",
    url: "/",
    disabled: true,
  },
  {
    title: "Projektbörse",
    subItems: [
      {
        title: "Offene Projekte",
        url: "/",
        disabled: true,
      },
      {
        title: "Freelancer bewerben",
        url: "/",
        disabled: true,
      },
      {
        title: "Partnerunternehmen werden",
        url: "/",
        disabled: true,
      },
      {
        title: "Karriere bei Sherpa",
        url: "/",
        disabled: true,
      },
    ],
  },
  {
    title: "Über Sherpa",
    subItems: [
      {
        title: "Unternehmen",
        url: "/",
        disabled: true,
      },
      {
        title: "Arbeitsweise",
        url: "/",
        disabled: true,
      },
      {
        title: "Team",
        url: "/",
        disabled: true,
      },
      {
        title: "Partnernetzwerk",
        url: "/",
        disabled: true,
      },
    ],
  },
];

export const cta: NavigationItem = {
  title: "Projekt besprechen",
  url: "/",
};
