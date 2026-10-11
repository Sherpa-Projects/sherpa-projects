import type { Metadata } from "next";
import ServiceHero from "@/components/sections/services/service-hero";
import { services } from "@/content/services";
import InfoStrip from "@/components/sections/shared/info-strip";
import InfoGrid from "@/components/sections/shared/info-grid";
import ScopeList from "@/components/sections/shared/scope-list";
import ComparisonGrid from "@/components/sections/shared/comparison-grid";
import CardGrid from "@/components/sections/shared/card-grid";
import TagGroups from "@/components/sections/shared/tag-groups";
import Process from "@/components/sections/shared/process";
import LinkList from "@/components/sections/shared/link-list";
import FinalCta from "@/components/sections/shared/final-cta";
import Footer from "@/components/layout/footer";

const {
  metadata: pageMetadata,
  hero,
  challenges,
  capabilities,
  scope,
  approach,
  principles,
  technologies,
  process,
  relatedServices,
  finalCta,
} = services.automatisierung;

export const metadata: Metadata = pageMetadata;

export default function Automation() {
  return (
    <main>
      <ServiceHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryButton={hero.primaryButton}
        secondaryButton={hero.secondaryButton}
        image={hero.image}
      />
      <InfoStrip title={challenges.title} itemList={challenges.items} />
      <InfoGrid
        id="leistungen"
        eyebrow={capabilities.eyebrow}
        title={capabilities.title}
        items={capabilities.items}
      />
      <ScopeList
        eyebrow={scope.eyebrow}
        title={scope.title}
        description={scope.description}
        groups={scope.groups}
      />
      <ComparisonGrid
        eyebrow={approach.eyebrow}
        title={approach.title}
        description={approach.description}
        options={approach.options}
        note={approach.note}
      />
      <CardGrid
        eyebrow={principles.eyebrow}
        title={principles.title}
        description={principles.description}
        cards={principles.items}
      />
      <TagGroups
        eyebrow={technologies.eyebrow}
        title={technologies.title}
        description={technologies.description}
        groups={technologies.groups}
      />
      <Process
        eyebrow={process.eyebrow}
        title={process.title}
        steps={process.steps}
      />
      <LinkList
        eyebrow={relatedServices.eyebrow}
        title={relatedServices.title}
        items={relatedServices.items}
      />
      <FinalCta
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        actions={finalCta.actions}
      />
      <Footer />
    </main>
  );
}
