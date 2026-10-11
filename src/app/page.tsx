import { home } from "@/content/home";
import HomeHero from "@/components/sections/home/home-hero";
import InfoStrip from "@/components/sections/shared/info-strip";
import InfoGrid from "@/components/sections/shared/info-grid";
import DocumentControl from "@/components/sections/home/documentControl";
import { documentControl as documentControlProduct } from "@/content/document-control";
import Process from "@/components/sections/shared/process";
import CardGrid from "@/components/sections/shared/card-grid";
import FinalCta from "@/components/sections/shared/final-cta";
import Footer from "@/components/layout/footer";

const {
  hero,
  audience,
  servicesSection,
  documentControl,
  process,
  experience,
  finalCta,
} = home;

export default function Home() {
  return (
    <main>
      <HomeHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryButton={hero.primaryButton}
        secondaryButton={hero.secondaryButton}
        slides={hero.slides}
      />
      <InfoStrip title={audience.title} itemList={audience.itemList} />
      <InfoGrid
        eyebrow={servicesSection.eyebrow}
        title={servicesSection.title}
        items={servicesSection.items}
      />
      <DocumentControl
        id="document-control"
        eyebrow={documentControl.eyebrow}
        title={documentControl.title}
        description={documentControl.description}
        button={documentControl.button}
        mockup={documentControlProduct.hero.mockup}
      />
      <Process
        eyebrow={process.eyebrow}
        title={process.title}
        steps={process.steps}
      />
      <CardGrid
        eyebrow={experience.eyebrow}
        title={experience.title}
        description={experience.description}
        cards={experience.cards}
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
