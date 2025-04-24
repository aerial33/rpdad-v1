import { ContentOne } from "@/blocks/contents/ContentOne"
import { FadeRight, FadeUp } from "@/components/motion/animations"
import { DynamicHeroSelector } from "@/components/selectors/HeroSelector"
import { FeatureDemo } from "@/sections/actualites/actu-demo"
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
      <FadeRight delay={0.3}>
        <FeatureDemo />
      </FadeRight>
      <BentoDemo />
    </main>
  )
}
