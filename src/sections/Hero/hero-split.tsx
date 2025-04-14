import { ArrowRight } from "lucide-react"

import Image from "next/image"
import Link from "next/link"

import { DotPattern } from "@/components/DotPattern"
import { LogoTicker } from "@/components/LogoTicker"
import { FadeLeft, FadeUp } from "@/components/motion/animations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSplit({
  title,
  description = "Notre plateforme vous fournit tout ce dont vous avez besoin pour créer des applications exceptionnelles que vos utilisateurs adoreront. Commencez à construire dès aujourd'hui.",
}: {
  title: string
  description: string
}) {
  const dynamicTitle =
    title || `Le Réseau Public Départemental d'aide à domicile de la Gironde`
  const dynamicDescription =
    description ||
    "Branche médico-sociale de l'UDCCAS 33 (Union Départementale des Centres Communaux d'Action Sociale de la Gironde)  Aide à la vie quotidienne pour les personnes âgées ou en situation de handicap"
  return (
    <section className="-z-10 py-12 text-white lg:text-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <FadeLeft delay={0.3}>
            <div className="flex flex-col gap-6">
              <Badge variant="outline" className="text-flamingo w-fit">
                <span className="text-muted-foreground">
                  {"À propos de nous"}
                </span>
                <a href="#" className="ml-2 flex items-center gap-1">
                  En savoir plus
                  <ArrowRight className="h-3 w-3" />
                </a>
              </Badge>

              <h1 className="text-4xl leading-snug font-bold text-balance text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-16">
                {dynamicTitle}
              </h1>

              <p className="lg:text-muted-foreground max-w-lg text-lg">
                {dynamicDescription}
              </p>

              <div className="mt-2 flex flex-wrap gap-4">
                <Link href="/actualites">
                  <Button
                    size="lg"
                    className="cursor-pointer gap-2 text-white"
                    variant="secondary"
                  >
                    Notre réseau
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/offres">
                  <Button size="lg" variant="outline" className="gap-2">
                    Les Offres de notre Réseau
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <LogoTicker />
            </div>
          </FadeLeft>
          <FadeUp delay={0.5}>
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
              <div className="bg-muted row-span-2 flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="Hero img2"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              <DotPattern
                variant="default"
                dotColor="bg-picton-blue-light"
                className="absolute -right-10 bottom-30 z-10 overflow-hidden"
              />
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
      <div className="from-primary to-primary-dark absolute inset-0 top-[-188px] -bottom-4 -z-1 rounded-bl-[300px] bg-gradient-to-tr shadow-2xl lg:left-[60%]"></div>
    </section>
  )
}
