import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionWrapper from "@/components/layout/section-wrapper";
import SectionHeader from "./section-header";

type FaqProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: { question: string; answer: string }[];
};

export default function Faq({
  id,
  eyebrow,
  title,
  description,
  items,
}: FaqProps) {
  return (
    <SectionWrapper id={id}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <Accordion className="border-t border-border" multiple>
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="py-6 text-lg font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="max-w-2xl leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
