import ProcessTimeline from "@/components/ui/process-timeline";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ProcessProps = {
  title: string;
  eyebrow: string;
  steps: ProcessStep[];
};

export default function Process({ title, eyebrow, steps }: ProcessProps) {
  return <ProcessTimeline eyebrow={eyebrow} title={title} steps={steps} />;
}
