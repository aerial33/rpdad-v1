import { ArrowRight, Image as ImageIcon, PhoneCall } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSplit() {
  return (
    <section className="bg-background text-foreground overflow-visible px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit">
              <span className="text-muted-foreground">Nouvelle version</span>
              <a href="#" className="ml-2 flex items-center gap-1">
                En savoir plus
                <ArrowRight className="h-3 w-3" />
              </a>
            </Badge>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Créez des expériences incroyables avec notre plateforme
            </h1>

            <p className="text-muted-foreground max-w-md text-lg">
              Notre plateforme vous fournit tout ce dont vous avez besoin pour
              créer des applications exceptionnelles que vos utilisateurs
              adoreront. Commencez à construire dès aujourd&apos;hui.
            </p>

            <div className="mt-2 flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Commencer
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Réserver une démo
                <PhoneCall className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted flex aspect-square items-center justify-center overflow-hidden rounded-full">
                <div className="text-muted-foreground flex flex-col items-center justify-center p-4">
                  <ImageIcon className="mb-2 h-10 w-10" />
                  <span className="text-center text-xs">Image 1</span>
                </div>
              </div>
              <div className="bg-muted row-span-2 flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg">
                <div className="text-muted-foreground flex flex-col items-center justify-center p-4">
                  <ImageIcon className="mb-2 h-10 w-10" />
                  <span className="text-center text-xs">Image 2</span>
                </div>
              </div>
              <div className="bg-muted flex aspect-square items-center justify-center overflow-hidden rounded-lg">
                <div className="text-muted-foreground flex flex-col items-center justify-center p-4">
                  <ImageIcon className="mb-2 h-10 w-10" />
                  <span className="text-center text-xs">Image 3</span>
                </div>
              </div>
            </div>

            <div className="from-primary to-primary-darker absolute inset-0 -z-10 translate-x-1/4 -translate-y-1/4 rounded-full bg-gradient-to-tr opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
