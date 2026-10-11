import FullScreenWrapper from "@/components/layout/full-screen-wrapper";
import MountainLines from "@/components/ui/mountain-lines";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductMockup, {
  type ProductMockupProps,
} from "@/components/ui/product-mockup";

type ProductHeroProps = {
  label: string;
  badge: string;
  title: string;
  description: string;
  primaryButton: { title: string; url: string };
  secondaryButton: { title: string; url: string };
  mockup: ProductMockupProps;
  facts: { icon: LucideIcon; title: string; description: string }[];
};

export default function ProductHero({
  label,
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
  mockup,
  facts,
}: ProductHeroProps) {
  return (
    <FullScreenWrapper
      className="mt-16 min-h-[calc(100vh-4rem)] bg-primary text-primary-foreground"
      gridClassName="items-center gap-14 px-4 pt-16 pb-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:px-0 lg:pt-12 lg:pb-16"
      background={
        <>
          <MountainLines surface="primary" position="bottom" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-moss/15 blur-[140px]"
          />
        </>
      }
      footer={<FactStrip facts={facts} />}
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase">
            {label}
          </span>
          <span className="rounded-full bg-moss px-3 py-1 text-xs font-semibold text-forest">
            {badge}
          </span>
        </div>

        <h1 className="mt-6 text-[2rem] leading-tight text-balance sm:text-4xl font-bold lg:text-5xl xl:text-6xl xl:leading-[1.1]">
          {title}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          <Link href={primaryButton.url}>
            <Button size="lg" variant="inverse">
              {primaryButton.title}
            </Button>
          </Link>
          <Link href={secondaryButton.url}>
            <Button size="lg" variant="inverseOutline">
              {secondaryButton.title}
            </Button>
          </Link>
        </div>
      </div>

      <ProductMockup {...mockup} />
    </FullScreenWrapper>
  );
}

function FactStrip({ facts }: Pick<ProductHeroProps, "facts">) {
  return (
    <div className="relative border-t border-white/10 bg-primary/60 backdrop-blur-sm">
      <ul className="container mx-auto grid grid-cols-2 gap-y-6 px-4 py-8 lg:grid-cols-4 lg:px-0">
        {facts.map((fact) => {
          const Icon = fact.icon;

          return (
            <li key={fact.title} className="flex items-start gap-3 pr-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-moss">
                <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold">{fact.title}</span>
                <span className="block text-sm text-white/60">
                  {fact.description}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
