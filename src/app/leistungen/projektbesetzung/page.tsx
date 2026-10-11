import type { Metadata } from "next";
import ServiceHero from "@/components/sections/services/service-hero";
import { services } from "@/content/services";
import InfoStrip from "@/components/sections/shared/info-strip";
import InfoGrid from "@/components/sections/shared/info-grid";
import Responsibilities from "@/components/sections/services/responsibilities";
import TagGroups from "@/components/sections/shared/tag-groups";
import ComparisonGrid from "@/components/sections/shared/comparison-grid";
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
  models,
  roles,
  audiences,
  benefits,
  process,
  relatedServices,
  finalCta,
} = services.projektbesetzung;

export const metadata: Metadata = pageMetadata;

export default function Staffing() {
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
      <Responsibilities
        eyebrow={models.eyebrow}
        title={models.title}
        description={models.description}
        levels={models.levels}
      />
      <TagGroups
        eyebrow={roles.eyebrow}
        title={roles.title}
        description={roles.description}
        groups={roles.groups}
      />
      <ComparisonGrid
        eyebrow={audiences.eyebrow}
        title={audiences.title}
        description={audiences.description}
        options={audiences.options}
      />
      <CardGrid
        eyebrow={benefits.eyebrow}
        title={benefits.title}
        description={benefits.description}
        cards={benefits.items}
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
