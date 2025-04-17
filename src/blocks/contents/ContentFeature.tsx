import { Zap } from "lucide-react"
import { Cpu } from "lucide-react"

import { EcosystemFeatureSectionResponsive } from "@/sections/sections/content/ContentFlexible"

export const ContentFeature = () => {
  return (
    <EcosystemFeatureSectionResponsive
      className="mt-24"
      title="The Lyra ecosystem brings together our models."
      paragraphs={[
        <>
          Lyra is evolving to be more than just the models.{" "}
          <span className="text-title font-medium">
            It supports an entire ecosystem
          </span>{" "}
          — from products innovate.
        </>,
        "It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate",
      ]}
      features={[
        {
          icon: <Zap className="size-4" />,
          title: "Faaast",
          description: "It supports an entire helping developers and innovate.",
        },
        {
          icon: <Cpu className="size-4" />,
          title: "Powerful",
          description:
            "It supports an entire helping developers and businesses.",
        },
      ]}
      image={{
        src: "/about-9.jpg",
        alt: "payments illustration light",
        fill: true,
      }}
      imagePosition="left" // ou "right"
      featuresColumns={{ base: 2, md: 2, xl: 3 }} // 1 colonne mobile, 2 en md, 3 en xl
    />
  )
}
