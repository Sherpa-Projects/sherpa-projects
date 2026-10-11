import Link from "next/link";
import Eyebrow from "@/components/ui/eyebrow";
import BrandPanel from "@/components/ui/brand-panel";
import { Button } from "@/components/ui/button";
import ProductMockup, {
  type ProductMockupProps,
} from "@/components/ui/product-mockup";

type DocumentControlProps = {
  id?: string;
  eyebrow: string;
  title: string[];
  description: string;
  button: { title: string; url: string };
  mockup: ProductMockupProps;
};

export default function DocumentControl({
  id,
  eyebrow,
  title,
  description,
  button,
  mockup,
}: DocumentControlProps) {
  return (
    <BrandPanel
      id={id}
      surface="primary"
      className="grid-cols-2 gap-12 space-y-8 lg:grid lg:space-y-0">
      <div className="relative z-10 flex flex-col justify-center">
        <Eyebrow color="moss">{eyebrow}</Eyebrow>

        <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="max-w-md leading-7 text-white/75">{description}</p>

        <Link href={button.url} className="mt-8 self-start">
          <Button size="lg" variant="inverse">
            {button.title}
          </Button>
        </Link>
      </div>

      <div className="relative z-10 flex flex-col justify-center">
        <ProductMockup {...mockup} />
      </div>
    </BrandPanel>
  );
}
