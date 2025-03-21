import { Calendar, FileText, Globe, Mail } from "lucide-react"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

const features = [
  {
    Icon: Globe,
    tag: "Le réseau en Gironde",
    name: "Un Service public proche de chez vous",
    description:
      "Membre du réseau autorisé par le Conseil Départemental de la Gironde",
    href: "/",
    cta: "Découvrer nos engagements",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className:
      "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3 bg-primary lg:rounded-tl-[300px] text-white",
  },
  {
    Icon: Mail,
    name: "Aide à domicile",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "En savoir plus",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className:
      "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 bg-flamingo-lighter",
  },
  {
    Icon: FileText,
    name: "Accompagnement adapté à vos besoins",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "En savoir plus",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className:
      "lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3 bg-yellow-lighter",
  },
  {
    Icon: Calendar,
    name: "Service de qualité",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "En savoir plus",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className:
      "lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2 bg-chateau-lighter",
  },
]

function BentoDemo() {
  return (
    <section className="center-element px-4 py-12 xl:px-0">
      <BentoGrid className="lg:grid-cols-4 lg:grid-rows-2">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  )
}

export { BentoDemo }
