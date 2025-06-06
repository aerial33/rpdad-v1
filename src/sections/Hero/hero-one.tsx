import { ArrowRight, ArrowUpRight } from "lucide-react"

import Image from "next/image"

import { DotPattern } from "@/components/DotPattern"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Hero1Props {
  badge?: string
  heading: string
  description: string
  buttons?: {
    primary?: {
      text: string
      url: string
    }
    secondary?: {
      text: string
      url: string
    }
  }
  image?: {
    src: string
    alt: string
  }
}

const Hero1 = ({
  badge = "✨ Your Website Builder",
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Discover all components",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "View on GitHub",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <section className="from-flamingo-lighter to-chateau-lightest border-flamingo-lighter bg-gradient-to-br px-6 py-4 pb-0">
      <div className="relative container mx-auto max-w-7xl rounded-2xl py-8 lg:px-6 lg:shadow-md">
        <div className="hidden sm:block">
          <DotPattern
            className="absolute top-10 -left-10"
            dotColor="bg-primary"
            dotSize="lg"
            rows={7}
            cols={7}
          />
          <DotPattern
            className="absolute right-120 bottom-10"
            dotColor="bg-flamingo"
            rows={7}
            cols={7}
          />
        </div>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline" className="border-flamingo">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-5xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000}
            className="max-h-150 w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export { Hero1 }
