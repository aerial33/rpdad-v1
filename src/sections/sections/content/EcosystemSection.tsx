// src/components/sections/EcosystemSection.tsx
import { ReactNode } from "react"

import Image from "next/image"

import { cn } from "@/lib/utils"

interface QuoteInfo {
  text: string
  author: string
  logoSrc?: string
  logoAlt?: string
}

interface EcosystemSectionProps {
  title: string
  image: {
    src: string
    alt: string
    width: number
    height: number
    className?: string
    containerClassName?: string
  }
  paragraphs: ReactNode[] // permet d'inclure des <span> stylés
  quote?: QuoteInfo
  className?: string
}

export function EcosystemSection({
  title,
  image,
  paragraphs,
  quote,
  className = "",
}: EcosystemSectionProps) {
  return (
    <div
      className={cn(
        "container mx-auto space-y-8 px-6 md:space-y-16",
        className
      )}
    >
      <h2 className="relative z-10 text-4xl font-medium text-balance lg:text-5xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-2 lg:gap-24">
        <div className={cn("relative mb-6 sm:mb-0", image.containerClassName)}>
          <div className="relative aspect-76/59 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
            <Image
              src={image.src}
              className={cn("rounded-[15px] shadow", image.className)}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        </div>
        <div className="relative space-y-4">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                i === 0 ? "feature-paragraph" : "text-muted-foreground"
              }
            >
              {p}
            </p>
          ))}
          {quote && (
            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>{quote.text}</p>
                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">{quote.author}</cite>
                  {quote.logoSrc && (
                    <img
                      className="h-14 w-fit dark:invert"
                      src={quote.logoSrc}
                      alt={quote.logoAlt || "Logo"}
                      height={40}
                    />
                  )}
                </div>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
