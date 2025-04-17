import { Cpu, Zap } from "lucide-react"

import { EcosystemFeatureSectionResponsive } from "@/sections/sections/content/ContentFlexible"

export const ContentFeature = () => {
  return (
    <EcosystemFeatureSectionResponsive
      className="mt-24"
      title="Un service de qualité reconnu"
      paragraphs={[
        <>
          Tous les services publics membres du Réseau Public Départemental
          d’Aide à Domicile sont détenteurs du label{" "}
          <span className="font-bold">« Service d’aide à Domicile »</span>{" "}
          délivré par le Conseil Départemental de la Gironde.
        </>,
        "Ce label, créé en 2009, permet aux personnes âgées et à leur entourage de mieux connaître et reconnaître le réseau d'aide mis en place dans le département.",
      ]}
      features={[
        {
          icon: <Zap className="size-4" />,
          title: "Label qualité",
          description:
            "Respect du Cahier des Charges National et Départemental garantissant la qualité de l'intervention à domicile.",
        },
        {
          icon: <Cpu className="size-4" />,
          title: "Charte d'accompagnement",
          description:
            "Charte « Accompagner une personne âgée dépendante et/ou une personne handicapée à son domicile ».",
        },
        {
          icon: <Zap className="size-4" />,
          title: "Droits et Libertés",
          description:
            "Charte des « Droits et Libertés de la Personne Accueillie ».",
        },
      ]}
      image={{
        src: "/about-9.jpg",
        alt: "Label qualité",
        fill: true,
      }}
      imagePosition="left"
      featuresColumns={{ base: 2, md: 2, xl: 3 }}
    />
  )
}
