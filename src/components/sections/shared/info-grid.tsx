import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { subtleTone } from "@/lib/tones";
import SectionWrapper from "@/components/layout/section-wrapper";
import SectionHeader from "./section-header";

type InfoGridProps = {
  id?: string;
  eyebrow: string;
  title: string;
  items: {
    title: string;
    description: string;
    url?: string;
  }[];
};

export default function InfoGrid({
  id,
  eyebrow,
  title,
  items,
}: InfoGridProps) {
  return (
    <SectionWrapper id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} />

      <ul
        className={cn(
          "mt-10 grid gap-4 md:grid-cols-2",
          items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4",
        )}
      >
        {items.map((item, index) => {
          const tone = subtleTone(index);
          const card = (
            <article
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border p-6 backdrop-blur-md transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:via-white/20 before:to-transparent lg:p-7",
                tone.card,
                item.url &&
                  "hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_60px_rgba(36,52,112,0.08)]",
              )}
            >
              <div className="relative flex items-center gap-3">
                <span
                  className={cn(
                    "text-xs font-semibold tracking-[0.2em]",
                    tone.number,
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-0.5 flex-1 origin-left scale-x-40 rounded-full opacity-60 transition-[scale,opacity] duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100",
                    tone.bar,
                  )}
                />
              </div>

              <h3 className="relative mt-6 text-lg leading-snug font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="relative mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>

              {item.url ? (
                <span className="relative mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                  Mehr erfahren
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              ) : null}
            </article>
          );

          return (
            <li key={`${item.title}-${index}`}>
              {item.url ? (
                <Link
                  href={item.url}
                  className="block h-full rounded-3xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {card}
                </Link>
              ) : (
                card
              )}
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
}
