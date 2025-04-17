import { EcosystemSection } from "@/sections/sections/content/EcosystemSection"

export function ContentTwo() {
  return (
    <section className="bg-white py-16 md:py-32">
      <EcosystemSection
        title="La force d’un réseau public de proximité"
        image={{
          src: "/img/about-7.jpg",
          alt: "Réseau public",
          width: 1207,
          height: 929,
        }}
        paragraphs={[
          <>
            Le RPDAD s’appuie sur la coopération de{" "}
            <span className="font-bold">33 services membres</span> et de
            nombreux partenaires institutionnels pour garantir un accompagnement
            de qualité sur tout le territoire girondin.
          </>,
          "Notre visibilité contribue à développer des partenariats sur les territoires, en articulant social, médico-social et sanitaire avec nos partenaires (CD33, CARSAT, MSA, SSI, MDPH…).",
        ]}
        quote={{
          text: "« Agir pour tout le monde, en particulier » est notre devise. « Vous accompagner dans votre parcours quotidien » est notre engagement.",
          author: "Le RPDAD",
          logoSrc: "/img/logo-rpdad.png",
          logoAlt: "Logo RPDAD",
        }}
      />
    </section>
  )
}
