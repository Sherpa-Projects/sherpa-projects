import SectionWrapper from "@/components/layout/section-wrapper";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { subtleTone } from "@/lib/tones";
import SectionHeader from "@/components/sections/shared/section-header";

type CardGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: { title: string; description: string }[];
};

export default function CardGrid({
  eyebrow,
  title,
  description,
  cards,
}: CardGridProps) {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {cards.map((card, index) => {
          const tone = subtleTone(index);
          const number = String(index + 1).padStart(2, "0");

          return (
            <Card
              key={number}
              className={cn(
                "group relative min-h-[320px] overflow-hidden rounded-3xl p-8 ring-0 border border-border backdrop-blur-md transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:via-white/20 before:to-transparent hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(36,52,112,0.08)] lg:p-10",
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
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute -top-7 -right-2 text-[8rem] leading-none font-semibold transition-colors duration-300",
                  tone.watermark,
                )}
              >
                {number}
              </span>

              <div className="relative flex h-full flex-col">
                <span
                  className={cn("font-semibold tracking-[0.22em]", tone.number)}
                >
                  {number}
                </span>

                <div className="mt-12">
                  <h3 className="max-w-xs text-2xl leading-tight font-semibold text-foreground">
                    {card.title}
                  </h3>

                  <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
