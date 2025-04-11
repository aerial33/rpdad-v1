import { ArrowRight, PhoneCall } from "lucide-react"

import Image from "next/image"

import { DotPattern } from "@/components/DotPattern"
import { FadeUp } from "@/components/motion/animations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSplit({
  title = "Créez des expériences incroyables avec notre plateforme",
  description = "Notre plateforme vous fournit tout ce dont vous avez besoin pour créer des applications exceptionnelles que vos utilisateurs adoreront. Commencez à construire dès aujourd'hui.",
}: {
  title: string
  description: string
}) {
  const dynamicTitle =
    title || "Créez des expériences incroyables avec notre plateforme"
  const dynamicDescription =
    description ||
    "Notre plateforme vous fournit tout ce dont vous avez besoin pour créer des applications exceptionnelles que vos utilisateurs adoreront. Commencez à construire dès aujourd'hui."
  return (
    <section className="relative -z-10 py-12 text-white lg:text-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit">
              <span className="text-muted-foreground">Nouvelle version</span>
              <a href="#" className="ml-2 flex items-center gap-1">
                En savoir plus
                <ArrowRight className="h-3 w-3" />
              </a>
            </Badge>

            <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
              {dynamicTitle}
            </h1>

            <p className="lg:text-muted-foreground max-w-md text-lg">
              {dynamicDescription}
            </p>

            <div className="mt-2 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gap-2 text-white"
                variant="secondary"
              >
                Commencer
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Réserver une démo
                <PhoneCall className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <FadeUp>
            <div className="relative grid grid-cols-2 gap-6">
              <div className="bg-muted flex aspect-square items-center justify-center overflow-hidden rounded-full">
                <Image
                  src={
                    "https://sandbox-tailwind-template.netlify.app/assets/img/photos/g5@2x.jpg"
                  }
                  alt="Hero Split 1"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-muted row-span-2 flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={"https://picsum.photos/id/1/1000"}
                  alt="Hero img2"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-muted flex aspect-square items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={
                    "https://sandbox-tailwind-template.netlify.app/assets/img/photos/g6@2x.jpg"
                  }
                  alt="Hero Split 3"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              <DotPattern
                variant="sparse"
                dotColor="bg-flamingo"
                className="absolute top-0 -left-20 -z-10"
              />
            </div>
          </FadeUp>
        </div>
      </div>
      <div className="from-primary to-primary-dark absolute inset-0 -bottom-4 -z-1 rounded-bl-[300px] bg-gradient-to-tr shadow-2xl lg:left-[60%]"></div>
    </section>
  )
}
