// Subtle CI tints so neighbouring cards read as distinct without shouting.
export const subtleTones = [
  {
    card: "bg-primary/[0.04] hover:border-primary/25",
    bar: "bg-primary",
    number: "text-primary",
    watermark: "text-primary/8 group-hover:text-primary/12",
    icon: "bg-primary/10 text-primary",
    check: "bg-primary/10 text-primary",
    rowHover: "hover:bg-primary/[0.04] focus-visible:bg-primary/[0.04]",
    title: "group-hover:text-primary",
    arrow: "group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground",
  },
  {
    card: "bg-moss/30 hover:border-forest/30",
    bar: "bg-forest",
    number: "text-forest",
    watermark: "text-forest/10 group-hover:text-forest/15",
    icon: "bg-moss text-forest",
    check: "bg-moss text-forest",
    rowHover: "hover:bg-moss/30 focus-visible:bg-moss/30",
    title: "group-hover:text-forest",
    arrow: "group-hover:border-forest group-hover:bg-forest group-hover:text-white",
  },
  {
    card: "bg-accent/10 hover:border-accent/40",
    bar: "bg-accent",
    number: "text-muted-foreground",
    watermark: "text-accent/15 group-hover:text-accent/20",
    icon: "bg-accent/20 text-muted-foreground",
    check: "bg-accent/20 text-muted-foreground",
    rowHover: "hover:bg-accent/10 focus-visible:bg-accent/10",
    title: "group-hover:text-muted-foreground",
    arrow: "group-hover:border-accent group-hover:bg-accent group-hover:text-white",
  },
  {
    card: "bg-sage/10 hover:border-sage/40",
    bar: "bg-sage",
    number: "text-forest",
    watermark: "text-sage/15 group-hover:text-sage/20",
    icon: "bg-sage/20 text-forest",
    check: "bg-sage/20 text-forest",
    rowHover: "hover:bg-sage/10 focus-visible:bg-sage/10",
    title: "group-hover:text-forest",
    arrow: "group-hover:border-sage group-hover:bg-sage group-hover:text-white",
  },
];

export function subtleTone(index: number) {
  return subtleTones[index % subtleTones.length];
}
