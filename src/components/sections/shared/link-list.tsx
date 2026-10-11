import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { subtleTone } from "@/lib/tones";
import SectionWrapper from "@/components/layout/section-wrapper";
import SectionHeader from "@/components/sections/shared/section-header";

type LinkItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

type LinkListProps = {
  eyebrow: string;
  title: string;
  items: LinkItem[];
};

export default function LinkList({ eyebrow, title, items }: LinkListProps) {
  return (
    <SectionWrapper>
      <SectionHeader eyebrow={eyebrow} title={title} />

      <div className="mt-12 border-t border-border">
        {items.map((item, index) => {
          const Icon = item.icon;
          const tone = subtleTone(index);

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "group relative grid gap-5 overflow-hidden border-b border-border py-8 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none motion-reduce:transition-none md:grid-cols-[1fr_auto] md:items-center md:px-4 lg:py-10",
                tone.rowHover,
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-y-0 left-0 w-1 origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100",
                  tone.bar,
                )}
              />

              <div className="flex max-w-2xl items-center gap-6 transition-[translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 motion-reduce:translate-none">
                <div
                  className={cn(
                    "flex size-12 shrink-0 items-center justify-center rounded-xl",
                    tone.icon,
                  )}
                >
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <div>
                  <h3
                    className={cn(
                      "text-xl font-semibold text-foreground transition-colors duration-500",
                      tone.title,
                    )}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  "flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-700 ease-in-out group-hover:scale-105 motion-reduce:scale-100",
                  tone.arrow,
                )}
              >
                <ArrowUpRight
                  className="size-5 transition-[translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:translate-none"
                  aria-hidden="true"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
