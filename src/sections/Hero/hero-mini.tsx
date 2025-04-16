"use client"

// TODO: complete in props the button
import { usePathname } from "next/navigation"

import { DotPattern } from "@/components/DotPattern"
import { Badge } from "@/components/ui/badge"

const soustitre =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate quidem natus."

export const HeroMini = ({
  title,
  description = soustitre,
}: {
  title: string
  description: string
}) => {
  const pathname = usePathname()
  const dynamicTitle =
    title || `Bienvenue sur la page ${pathname.split("/").pop()}`
  return (
    <section className="from-flamingo-lighter to-flamingo-lightest relative rounded-b-4xl bg-gradient-to-t py-8 shadow md:py-16">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <div className="hidden grid-cols-2 grid-rows-2 gap-4 px-4 lg:grid">
          <DotPattern
            className="col-span-1 row-start-1"
            dotColor="bg-primary"
            dotSize="md"
            gap="sm"
            rows={8}
            cols={8}
          />
          <DotPattern
            className="col-span-1 col-start-2 row-start-2"
            dotColor="bg-flamingo"
            dotSize="lg"
            gap="sm"
            rows={4}
            cols={8}
          />
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-start px-4 py-6 sm:py-8 lg:items-center lg:px-0">
          <Badge variant="outline" className="border-flamingo mb-4 uppercase">
            <span className="font-bold">Le RPDAD</span>
          </Badge>
          <h1 className="text-foreground mb-4 max-w-4xl text-4xl font-bold text-balance lg:text-center lg:text-5xl lg:leading-tight">
            {dynamicTitle}
          </h1>
          <p className="feature-paragraph text-balance lg:text-center">
            {description}
          </p>
          {/* <div className="!mt-8 flex items-center gap-2">
          <Button>Contactez-nous</Button>
        </div> */}
        </div>
        <div className="hidden grid-cols-2 grid-rows-2 gap-4 px-4 md:grid">
          <DotPattern
            className="col-span-1 col-start-1 row-start-2"
            dotColor="bg-flamingo"
            gap="sm"
            dotSize="lg"
            rows={4}
            cols={8}
          />
          <DotPattern
            className="col-span-1 col-start-2 row-start-1"
            dotColor="bg-primary"
            gap="sm"
            dotSize="md"
            rows={8}
            cols={8}
          />
        </div>
      </div>
    </section>
  )
}
