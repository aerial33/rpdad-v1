import { HeroSelector } from "@/sections/Hero"
import StatisticSection from "@/sections/stat/statistic"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      {/* <h1 className="gradient-primary text-6xl font-bold">RPDAD</h1> */}
      <HeroSelector variant="img-grid" />
      <StatisticSection />
    </main>
  )
}
