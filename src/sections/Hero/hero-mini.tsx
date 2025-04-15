"use client"

import Balancer from "react-wrap-balancer"

import { usePathname } from "next/navigation"

import { DotPattern } from "@/components/DotPattern"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
    <section className="from-flamingo-lighter to-flamingo-lightest relative flex items-center justify-center rounded-b-4xl bg-gradient-to-t py-8 shadow md:py-16">
      <div className="hidden grid-cols-2 grid-rows-2 gap-4 px-4 lg:grid">
        <DotPattern
          className="col-span-1 row-start-1"
          dotColor="bg-primary"
          rows={8}
          cols={8}
        />
        <DotPattern
          className="col-span-1 col-start-2 row-start-2"
          dotColor="bg-flamingo"
          rows={8}
          cols={8}
        />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-start px-4 py-6 sm:py-8 lg:items-center lg:px-0">
        <Badge variant="secondary" className="mb-4 text-white uppercase">
          <span className="font-bold">Le RPDAD</span>
        </Badge>
        <h1 className="text-foreground mb-4 max-w-4xl text-4xl font-semibold text-balance lg:text-center lg:text-5xl lg:leading-tight">
          {dynamicTitle}
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>{description}</Balancer>
        </h3>
        <div className="!mt-8 flex items-center gap-2">
          <Button>Contactez-nous</Button>
        </div>
      </div>
      <div className="hidden grid-cols-2 grid-rows-2 gap-4 px-4 md:grid">
        <DotPattern
          className="col-span-1 col-start-1 row-start-2"
          dotColor="bg-primary"
          rows={8}
          cols={8}
        />
        <DotPattern
          className="col-span-1 col-start-2 row-start-1"
          dotColor="bg-flamingo"
          rows={8}
          cols={8}
        />
      </div>
    </section>
  )
}
