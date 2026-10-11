import type { LucideIcon } from "lucide-react";
import { MapPin, Phone, ShieldCheck } from "lucide-react";

export type FooterLink = {
  title: string;
  href?: string;
};

export type FooterGroup = {
  title: string;
  icon: LucideIcon;
  itemList: Array<string | FooterLink>;
};

export const footer: {
  title: string;
  footerItems: FooterGroup[];
} = {
  title: "Sherpa Projects GmbH",
  footerItems: [
    {
      title: "Adresse",
      icon: MapPin,
      itemList: ["Lange Straße 75", "76530 Baden-Baden"],
    },
    {
      title: "Kontakt",
      icon: Phone,
      itemList: [
        {
          title: "Telefon: +49 159 0652 5276",
          href: "tel:+4915906525276",
        },
        {
          title: "E-Mail: info@sherpa-projects.net",
          href: "mailto:info@sherpa-projects.net",
        },
      ],
    },
    {
      title: "Rechtliches",
      icon: ShieldCheck,
      itemList: [
        {
          title: "Impressum",
          href: "#",
        },
        {
          title: "Datenschutz",
          href: "#",
        },
      ],
    },
  ],
};
