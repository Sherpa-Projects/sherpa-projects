import type { Metadata } from "next";
import { documentControl } from "@/content/document-control";
import ProductHero from "@/components/sections/product/product-hero";
import ComparisonGrid from "@/components/sections/shared/comparison-grid";
import FlowSteps from "@/components/sections/shared/flow-steps";
import FeatureGrid from "@/components/sections/shared/feature-grid";
import FeaturePanel from "@/components/sections/shared/feature-panel";
import TagGroups from "@/components/sections/shared/tag-groups";
import ScopeList from "@/components/sections/shared/scope-list";
import Process from "@/components/sections/shared/process";
import CaseHighlight from "@/components/sections/shared/case-highlight";
import FinalCta from "@/components/sections/shared/final-cta";
import Faq from "@/components/sections/shared/faq";
import Footer from "@/components/layout/footer";

const {
  metadata: pageMetadata,
  hero,
  problem,
  flow,
  features,
  security,
  integrations,
  useCases,
  implementation,
  caseStudy,
  demo,
  faq,
} = documentControl;

export const metadata: Metadata = pageMetadata;

export default function DocumentControl() {
  return (
    <main>
      <ProductHero
        label={hero.label}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        primaryButton={hero.primaryButton}
        secondaryButton={hero.secondaryButton}
        mockup={hero.mockup}
        facts={hero.facts}
      />
      <ComparisonGrid
        eyebrow={problem.eyebrow}
        title={problem.title}
        description={problem.description}
        options={problem.options}
      />
      <FlowSteps
        id="funktionsweise"
        eyebrow={flow.eyebrow}
        title={flow.title}
        description={flow.description}
        steps={flow.steps}
      />
      <FeatureGrid
        eyebrow={features.eyebrow}
        title={features.title}
        description={features.description}
        features={features.items}
      />
      <FeaturePanel
        eyebrow={security.eyebrow}
        title={security.title}
        description={security.description}
        quote={security.quote}
        points={security.points}
      />
      <TagGroups
        eyebrow={integrations.eyebrow}
        title={integrations.title}
        description={integrations.description}
        groups={integrations.groups}
      />
      <ScopeList
        eyebrow={useCases.eyebrow}
        title={useCases.title}
        description={useCases.description}
        groups={useCases.groups}
      />
      <Process
        eyebrow={implementation.eyebrow}
        title={implementation.title}
        steps={implementation.steps}
      />
      <CaseHighlight
        eyebrow={caseStudy.eyebrow}
        title={caseStudy.title}
        description={caseStudy.description}
        facts={caseStudy.facts}
        outcomesTitle={caseStudy.outcomesTitle}
        outcomes={caseStudy.outcomes}
      />
      <FinalCta
        id="demo"
        eyebrow={demo.eyebrow}
        title={demo.title}
        description={demo.description}
        actions={demo.actions}
      />
      <Faq
        eyebrow={faq.eyebrow}
        title={faq.title}
        description={faq.description}
        items={faq.items}
      />
      <Footer />
    </main>
  );
}
