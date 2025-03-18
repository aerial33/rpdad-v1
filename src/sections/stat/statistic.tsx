import { Badge } from "@/components/ui/badge"

interface StatProps {
  value: string
  label: string
  showDot?: boolean
}

function Stat({ value, label, showDot = false }: StatProps) {
  return (
    <div className="">
      <div className="gradient-primary mb-2 text-2xl font-bold md:text-3xl xl:text-4xl">
        {value}
      </div>
      <div className="text-left text-xs tracking-wider text-gray-500">
        {label}
      </div>
      {showDot && (
        <div className="absolute top-1/2 -right-4 hidden h-2 w-2 -translate-y-1/2 transform rounded-full bg-pink-500 lg:block" />
      )}
    </div>
  )
}

export default function StatisticSection() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16">
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
            <h2 className="text-3xl font-bold text-balance text-gray-800 md:text-4xl">
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
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Stat value="32" label="CCAS et CIAS membres" showDot={true} />
          <Stat
            value="+1200"
            label="Professionnels de terrain"
            showDot={true}
          />
          <Stat value="700 000" label="Heures réalisées" showDot={true} />
          <Stat value="192" label="Communes d'intervention" />
        </div>
      </div>
    </section>
  )
}
