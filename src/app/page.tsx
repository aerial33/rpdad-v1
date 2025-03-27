import { HeroSelector } from "@/sections/Hero"
import { FeatureDemo } from "@/sections/actualites/actu-demo"
import AgendaEvents from "@/sections/agenda/event-section"
import { BentoDemo } from "@/sections/bento/bento-demo"
import EditorialSection from "@/sections/editorial/editorial"
import MapGirondeSection from "@/sections/map/map-gironde"
import StatisticSection from "@/sections/stat/statistic"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSelector variant="img-grid" />
      <EditorialSection />
      <MapGirondeSection />
      <StatisticSection />
      <FeatureDemo />
      <AgendaEvents />
      <BentoDemo />
    </main>
  )
}
