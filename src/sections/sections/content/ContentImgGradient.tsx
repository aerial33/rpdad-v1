// src/components/sections/EcosystemFeatureSection.tsx
import { ReactNode } from "react"

import Image from "next/image"

import { cn } from "@/lib/utils"

interface FeatureItem {
  icon: ReactNode
  title: string
  description: string
}

interface ContentImgGradientProps {
  title: string
  paragraphs: ReactNode[]
  features: FeatureItem[]
  image: {
    src: string
    alt: string
    className?: string
    fill?: boolean
  }
  className?: string
}

export function ContentImgGradient({
  title,
  paragraphs,
  features,
  image,
  className = "",
}: ContentImgGradientProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl space-y-8 px-6 md:space-y-16",
        className
      )}
    >
      <h2 className="relative z-10 max-w-2xl text-4xl font-semibold lg:text-5xl">
        {title}
      </h2>
      <div className="relative">
        <div className="relative z-10 space-y-4 md:w-1/2">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "feature-paragraph" : ""}>
              {p}
            </p>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
            {features.map((feature, i) => (
              <div className="space-y-3" key={i}>
                <div className="flex items-center gap-2">
                  {feature.icon}
                  <h3 className="text-sm font-medium">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 h-fit md:absolute md:inset-x-0 md:-inset-y-12 md:mt-0">
          <div
            aria-hidden
            className="to-flamingo-lightest absolute inset-0 z-1 hidden bg-linear-to-l from-transparent to-55% md:block"
          ></div>
          <div className="border-border/50 relative min-h-[300px] w-full rounded-2xl border p-2 md:min-h-[400px]">
            <Image
              src={image.src}
              className={cn(
                "rounded-[12px] object-cover object-top shadow dark:hidden",
                image.className
              )}
              alt={image.alt}
              fill={image.fill}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
