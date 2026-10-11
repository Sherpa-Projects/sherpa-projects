import type { LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/layout/section-wrapper";
import SectionHeader from "./section-header";

type FeatureGridProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
    badge?: string;
  }[];
};

// Spec-sheet style grid separated by hairlines instead of separate cards.
export default function FeatureGrid({
  id,
  eyebrow,
  title,
  description,
  features,
}: FeatureGridProps) {
  return (
    <SectionWrapper id={id}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <ul className="mt-10 grid gap-px overflow-hidden rounded-4xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <li
              key={feature.title}
              className="group bg-background p-7 transition-colors duration-300 hover:bg-primary/[0.03] lg:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </span>
                {feature.badge ? (
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    {feature.badge}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-6 text-lg leading-snug font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
}
