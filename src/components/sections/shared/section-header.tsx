import Eyebrow from "@/components/ui/eyebrow";
import H2 from "@/components/ui/h2";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <H2>{title}</H2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
