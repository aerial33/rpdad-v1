// import { Image } from "lucide-react"
import Image from "next/image"

import { Stat } from "@/components/Stat"
import { Badge } from "@/components/ui/badge"

interface StatItem {
  value: string
  label: string
  showDot?: boolean
}

interface StatsSectionProps {
  image: {
    src: string
    alt: string
  }
  badgeText?: string
  title: string
  description: string
  stats: StatItem[]
  bg?: string
}

export function StatsSection({
  image,
  badgeText,
  title,
  description,
  stats,
  bg,
}: StatsSectionProps) {
  return (
    <section
      className={`bg-${bg} grid grid-cols-1 gap-6 px-4 py-12 md:gap-16 lg:grid-cols-2 lg:px-0`}
    >
      <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl">
        {/* <Image width={100} height={100} color="gray" /> */}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          objectFit="cover"
          objectPosition="top"
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Editorial Header */}
        <div className="flex items-center gap-4">
          <div className="bg-primary h-60 w-2 rounded" />
          <div className="flex flex-col gap-4">
            {badgeText && (
              <Badge variant={"outline"} className="border-primary font-medium">
                {badgeText}
              </Badge>
            )}
            <h2 className="text-gray-800">{title}</h2>
            <p className="max-w-3xl text-gray-500 md:text-lg">{description}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:justify-items-start xl:grid-cols-4">
          {stats.map((stat, i) => (
            <Stat
              key={i}
              value={stat.value}
              label={stat.label}
              showDot={stat.showDot}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
