// src/components/sections/EcosystemFeatureSectionResponsive.tsx
import { ReactNode } from "react"

import Image from "next/image"

import { cn } from "@/lib/utils"

interface FeatureItem {
  icon: ReactNode
  title: string
  description: string
}

interface ImageInfo {
  src: string
  alt: string
  className?: string
  fill?: boolean
}

interface FeaturesColumns {
  base?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

interface EcosystemFeatureSectionResponsiveProps {
  title: string
  paragraphs: ReactNode[]
  features: FeatureItem[]
  image: ImageInfo
  imagePosition?: "left" | "right"
  featuresColumns?: FeaturesColumns
  className?: string
}

export function EcosystemFeatureSectionResponsive({
  title,
  paragraphs,
  features,
  image,
  imagePosition = "right",
  featuresColumns = { base: 1, md: 2 },
  className = "",
}: EcosystemFeatureSectionResponsiveProps) {
  // Génère dynamiquement les classes de colonnes
  const columnsClass = [
    featuresColumns.base && `grid-cols-${featuresColumns.base}`,
    featuresColumns.sm && `sm:grid-cols-${featuresColumns.sm}`,
    featuresColumns.md && `md:grid-cols-${featuresColumns.md}`,
    featuresColumns.lg && `lg:grid-cols-${featuresColumns.lg}`,
    featuresColumns.xl && `xl:grid-cols-${featuresColumns.xl}`,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={cn("space-y-8 px-6 md:space-y-16", className)}>
      <h2 className="relative z-10 max-w-2xl text-4xl font-semibold lg:text-5xl">
        {title}
      </h2>
      <div
        className={cn(
          "flex flex-col-reverse items-stretch gap-8 md:flex-row md:gap-12",
          imagePosition === "left" ? "md:flex-row-reverse" : ""
        )}
      >
        {/* Texte et features */}
        <div className="flex w-full flex-col justify-center md:w-1/2">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "feature-paragraph" : ""}>
              {p}
            </p>
          ))}
          <div className={cn("grid gap-4 pt-6", columnsClass)}>
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
        {/* Image */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="border-border/50 relative min-h-[300px] w-full rounded-2xl border border-dotted p-2 md:min-h-[400px]">
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
