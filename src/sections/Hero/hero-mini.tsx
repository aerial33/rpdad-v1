"use client"

import Balancer from "react-wrap-balancer"

import { usePathname } from "next/navigation"

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
    <section className="container mx-auto py-8 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col py-6 sm:py-8">
        <h1 className="text-foreground mb-4 max-w-4xl text-4xl font-semibold lg:text-5xl xl:text-6xl">
          <Balancer>{dynamicTitle}</Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>{description}</Balancer>
        </h3>
        <div className="!mt-8 flex items-center gap-2">
          <Button>Contactez-nous</Button>
        </div>
      </div>
    </section>
  )
}
