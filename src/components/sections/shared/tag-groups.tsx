import type { LucideIcon } from "lucide-react";
import MountainLines from "@/components/ui/mountain-lines";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/layout/section-wrapper";
import SectionHeader from "./section-header";

type TagGroupsProps = {
  eyebrow: string;
  title: string;
  description?: string;
  groups: {
    icon?: LucideIcon;
    title: string;
    tags: string[];
  }[];
};

const tones = [
  {
    card: "bg-primary text-primary-foreground",
    icon: "bg-white/10 text-white",
    meta: "text-white/60",
    tag: "border-white/15 bg-white/10 text-white",
    lines: "primary",
  },
  {
    card: "bg-moss/60 text-forest",
    icon: "bg-white/70 text-forest",
    meta: "text-forest/70",
    tag: "border-forest/15 bg-white/70 text-forest",
    lines: false,
  },
  {
    card: "bg-primary/5 text-primary",
    icon: "bg-white text-primary",
    meta: "text-primary/60",
    tag: "border-primary/15 bg-white text-primary",
    lines: false,
  },
  {
    card: "bg-forest text-white",
    icon: "bg-white/10 text-moss",
    meta: "text-white/60",
    tag: "border-white/15 bg-white/10 text-white",
    lines: "forest",
  },
] as const;

export default function TagGroups({
  eyebrow,
  title,
  description,
  groups,
}: TagGroupsProps) {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <dl className="mt-10 grid gap-4 md:grid-cols-2">
        {groups.map((group, index) => {
          const tone = tones[index % tones.length];
          const Icon = group.icon;

          return (
            <div
              key={group.title}
              className={cn(
                "relative overflow-hidden rounded-3xl p-7 lg:p-8",
                tone.card,
              )}
            >
              {tone.lines ? (
                <MountainLines surface={tone.lines} />
              ) : null}

              <dt className="relative flex items-center gap-4">
                {Icon ? (
                  <span
                    className={cn(
                      "flex size-11 shrink-0 items-center justify-center rounded-xl",
                      tone.icon,
                    )}
                  >
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                ) : null}
                <span className="flex-1 text-xl font-semibold leading-snug">
                  {group.title}
                </span>
                <span
                  className={cn(
                    "text-xs font-semibold tracking-[0.2em]",
                    tone.meta,
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </dt>

              <dd className="relative mt-6 flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm",
                      tone.tag,
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          );
        })}
      </dl>
    </SectionWrapper>
  );
}
