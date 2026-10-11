import { LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/layout/section-wrapper";

export default function InfoStrip({
  title,
  itemList,
}: {
  title: string;
  itemList: { icon: LucideIcon; title: string; description: string }[];
}) {
  return (
    <section className="bg-primary/5 text-black/75">
      <SectionWrapper>
        <div className="container mx-auto">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-0">
            {itemList.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative px-0 md:px-8 first:md:pl-0 last:md:pr-0 md:not-first:border-l md:not-first:border-primary/20"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white/50 text-primary">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
