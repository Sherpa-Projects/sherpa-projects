import Eyebrow from "@/components/ui/eyebrow";
import BrandPanel from "@/components/ui/brand-panel";
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";

type FinalCtaProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  actions: {
    label: string;
    href: string;
    variant: ButtonProps["variant"];
  }[];
};

export default function FinalCta({
  id,
  eyebrow,
  title,
  description,
  actions,
}: FinalCtaProps) {
  return (
    <BrandPanel id={id}>
      <div className="relative z-10 flex flex-col justify-center">
        <Eyebrow color="white">{eyebrow}</Eyebrow>

        <h2 className="mb-6 text-4xl font-bold lg:text-5xl">{title}</h2>

        <p className="max-w-md leading-7 text-white/75">{description}</p>
      </div>

      <div className="relative z-10 mt-12 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
        {actions.map((action) => (
          <a key={action.label} href={action.href}>
            <Button
              size="lg"
              variant={action.variant}
              className="w-full sm:w-auto"
            >
              {action.label}
            </Button>
          </a>
        ))}
      </div>
    </BrandPanel>
  );
}
