import { ContentOne } from "@/blocks/contents/ContentOne"
import { DynamicHeroSelector } from "@/components/selectors/HeroSelector"
import AgendaEvents from "@/sections/agenda/event-section"
import { BentoDemo } from "@/sections/bento/bento-demo"
import EditorialSection from "@/sections/editorial/editorial"
import MapGirondeSection from "@/sections/map/map-gironde"

export default function Home() {
  return (
    <main className="flex-1">
      <DynamicHeroSelector />
      <EditorialSection />
      <ContentOne />
      <MapGirondeSection />
      <AgendaEvents />
      <BentoDemo />
    </main>
  )
}
