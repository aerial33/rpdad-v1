import { Badge } from "@/components/ui/badge"

interface StatProps {
  value: string
  label: string
  showDot?: boolean
}

function Stat({ value, label, showDot = false }: StatProps) {
  return (
    <div className="relative text-center lg:text-left">
      <div className="gradient-primary mb-2 text-3xl font-bold xl:text-4xl">
        {value}
      </div>
      <div className="text-left text-xs tracking-wider text-gray-500">
        {label}
      </div>
      {showDot && (
        <div className="bg-flamingo-light absolute top-1/2 hidden h-4 w-4 translate-y-2 transform rounded-full md:-right-12 md:block lg:-right-5" />
      )}
    </div>
  )
}

export default function StatisticSection() {
  return (
    <section className="bg-primary-lightest grid grid-cols-1 gap-6 rounded-t-4xl py-12 md:gap-16 lg:grid-cols-2">
      <div className="relative overflow-hidden rounded-2xl">
        <iframe
          className="aspect-video h-full w-full"
          src="https://www.youtube.com/embed/UULIAQfT2O0"
          title="Vidéo RPDAD"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Editorial Header */}
        <div className="flex items-center gap-4">
          <div className="bg-primary h-60 w-1" />
          <div className="flex flex-col gap-4">
            <Badge className="font-medium text-white">Editorial</Badge>
            <h2 className="text-gray-800">
              {"Se fédérer pour exister, résister, s'améliorer et innover"}
            </h2>

            <p className="max-w-3xl text-gray-500 md:text-lg">
              {
                "Le Réseau Public Départemental d'Aide à Domicile de la Gironde accompagne près de 5000 personnes âgées et personnes en situation de handicap qui choisissent de vivre à domicile."
              }
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:justify-items-start xl:grid-cols-4">
          <Stat value="32" label="CCAS et CIAS membres" showDot={true} />
          <Stat value="+1200" label="Professionnels de terrain" />
          <Stat value="700 000" label="Heures réalisées" showDot={true} />
          <Stat value="192" label="Communes d'intervention" />
        </div>
      </div>
    </section>
  )
}
