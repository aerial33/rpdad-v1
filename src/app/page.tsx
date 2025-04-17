import { ContentOne } from "@/blocks/contents/ContentOne"
import { FadeUp } from "@/components/motion/animations"
import { DynamicHeroSelector } from "@/components/selectors/HeroSelector"
import AgendaEvents from "@/sections/agenda/event-section"
import { BentoDemo } from "@/sections/bento/bento-demo"
import MapGirondeSection from "@/sections/map/map-gironde"

export default function Home() {
  return (
    <main className="flex-1">
      <DynamicHeroSelector />
      <FadeUp delay={0.3}>
        <ContentOne />
      </FadeUp>
      <MapGirondeSection />
      <AgendaEvents />
      <BentoDemo />
    </main>
  )
}
