import { Check, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { subtleTone } from "@/lib/tones";
import SectionWrapper from "@/components/layout/section-wrapper";
import SectionHeader from "./section-header";

type ScopeListProps = {
  eyebrow: string;
  title: string;
  description: string;
  groups: {
    icon: LucideIcon;
    title: string;
    items: string[];
  }[];
};

export default function ScopeList({
  eyebrow,
  title,
  description,
  groups,
}: ScopeListProps) {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {groups.map((group, index) => {
          const Icon = group.icon;
          const tone = subtleTone(index);

          return (
            <article
              key={group.title}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-border p-8 backdrop-blur-md transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:via-white/20 before:to-transparent hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(36,52,112,0.08)] lg:p-10",
                tone.card,
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 top-0 h-1 origin-left scale-x-25 transition-transform duration-500 ease-out group-hover:scale-x-100",
                  tone.bar,
                )}
              />

              <div className="relative">
                <div
                  className={cn(
                    "flex size-12 items-center justify-center rounded-xl",
                    tone.icon,
                  )}
                >
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold leading-tight text-foreground">
                  {group.title}
                </h3>

                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-7 text-muted-foreground"
                    >
                      <span
                        className={cn(
                          "mt-1 flex size-5 shrink-0 items-center justify-center rounded-full",
                          tone.check,
                        )}
                      >
                        <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
