import { DynamicHeroSelector } from "@/components/selectors/HeroSelectorDynamic"
import { FeatureDemo } from "@/sections/actualites/actu-demo"
import AgendaEvents from "@/sections/agenda/event-section"
import { BentoDemo } from "@/sections/bento/bento-demo"
import { SectionContact } from "@/sections/contact/section-contact"
import EditorialSection from "@/sections/editorial/editorial"
import MapGirondeSection from "@/sections/map/map-gironde"
import StatisticSection from "@/sections/stat/statistic"

export default function Home() {
  return (
    <main className="flex-1">
      <DynamicHeroSelector />
      <EditorialSection />
      <MapGirondeSection />
      <SectionContact />
      <StatisticSection />
      <FeatureDemo />
      <AgendaEvents />
      <BentoDemo />
    </main>
  )
}
