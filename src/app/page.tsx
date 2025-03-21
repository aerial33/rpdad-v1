import { HeroSelector } from "@/sections/Hero"
import { FeatureDemo } from "@/sections/actualites/actu-demo"
import AgendaEvents from "@/sections/agenda/event-section"
import { BentoDemo } from "@/sections/bento/bento-demo"
import MapGirondeSection from "@/sections/map/map-gironde"
import StatisticSection from "@/sections/stat/statistic"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      <HeroSelector variant="img-grid" />
      <MapGirondeSection />
      <StatisticSection />
      <AgendaEvents />
      <BentoDemo />
      <FeatureDemo />
    </main>
  )
}
