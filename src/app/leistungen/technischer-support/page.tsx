import type { Metadata } from "next";
import ServiceHero from "@/components/sections/services/service-hero";
import { services } from "@/content/services";
import InfoStrip from "@/components/sections/shared/info-strip";
import InfoGrid from "@/components/sections/shared/info-grid";
import ScopeList from "@/components/sections/shared/scope-list";
import Responsibilities from "@/components/sections/services/responsibilities";
import CardGrid from "@/components/sections/shared/card-grid";
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
  models,
  environments,
  process,
  relatedServices,
  finalCta,
} = services.technischerSupport;

export const metadata: Metadata = pageMetadata;

export default function TechnicalSupport() {
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
      <Responsibilities
        eyebrow={models.eyebrow}
        title={models.title}
        description={models.description}
        levels={models.levels}
      />
      <CardGrid
        eyebrow={environments.eyebrow}
        title={environments.title}
        description={environments.description}
        cards={environments.items}
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
