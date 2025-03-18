import { RpdadLogo } from "@/components/LogoRpdad/logo"
import { Button } from "@/components/ui/button"

export function HeroLogo() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <RpdadLogo width={54} height={48} />
              <div className="bg-flamingo-lighter text-flamingo rounded-full px-3 py-1 text-sm">
                Nouveau
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Une plateforme moderne pour vos projets
            </h1>
            <p className="text-muted-foreground max-w-md text-lg">
              Créez des applications web élégantes et performantes avec notre
              framework basé sur Tailwind CSS et Next.js.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Commencer</Button>
              <Button size="lg" variant="outline">
                En savoir plus
              </Button>
            </div>
          </div>
          <div className="relative aspect-square w-full max-w-lg justify-self-center lg:justify-self-end">
            <div className="bg-primary/5 absolute inset-0 rounded-full"></div>
            <div className="border-primary/20 absolute top-1/2 left-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full border"></div>
            <div className="border-primary/20 absolute top-1/2 left-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"></div>
            <div className="bg-primary/20 absolute top-1/2 left-1/2 h-1/4 w-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <RpdadLogo
              // size="lg"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[3]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
