import { ArrowRight } from "lucide-react"

import { DotPattern } from "@/components/DotPattern"
import { ContentSection } from "@/sections/sections/content/ContentSection"

export function ContentOne() {
  return (
    <>
      <ContentSection
        images={[
          {
            src: "https://sandbox-tailwind-template.netlify.app/assets/img/photos/g5@2x.jpg",
            alt: "image principale",
          },
          {
            src: "https://sandbox-tailwind-template.netlify.app/assets/img/photos/g6@2x.jpg",
            alt: "image secondaire",
          },
        ]}
        cardInfo={{
          value: "+ de 5 000",
          label: "Personnes accompagnées",
        }}
        dotPatternTop={
          <DotPattern
            className="absolute -top-10 left-5 hidden lg:flex"
            rows={11}
            cols={11}
            dotSize="md"
            dotColor="bg-flamingo"
            gap="md"
          />
        }
        dotPatternBottom={
          <DotPattern
            className="absolute -bottom-30 left-70 hidden lg:flex"
            variant="dense"
            rows={9}
            cols={9}
            dotSize="sm"
            dotColor="bg-primary-dark"
          />
        }
        title="Nos Services Membres"
        paragraphs={[
          "Ensemble, améliorons la qualité de vie à domicile. Nous accompagnons plus de 5000 personnes âgées et en situation de handicap en Gironde.",
          "Le RPDAD est un réseau de professionnels dévoués qui offre des services d'aide à domicile personnalisés. Nos agents de la fonction publique sont formés pour vous aider dans les actes de la vie quotidienne et favoriser votre autonomie dans un environnement familier et sécurisé.",
        ]}
        highlight="accompagnons"
        buttonText="Retrouvez notre réseau"
        buttonHref="/services-membres"
        buttonIcon={<ArrowRight />}
        bgClass=" py-16"
      />
    </>
  )
}
