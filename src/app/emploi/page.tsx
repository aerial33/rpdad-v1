import { FeaturesTwo } from "@/blocks/features/"
import { HeroSelector } from "@/sections/Hero"

const Emploi = () => {
  return (
    <>
      <HeroSelector
        variant="mini"
        description="Les offres d'emploi du Réseau Public Départemental d'Aide à Domicile de la Gironde"
      />

      <div className="mx-auto max-w-7xl py-16">
        {/* {Emplois.map((emploi) => (
          <ServiceGrid
            key={emploi.id}
            items={[
              {
                id: emploi.id,
                titre: emploi.titre,
                description: emploi.description,
                image: emploi.image,
                lien: `/emploi/${emploi.id}`,
              },
            ]}
            columns={4}
            colorBorder="primary"
          />
        ))} */}
        <FeaturesTwo />
      </div>
    </>
  )
}

export default Emploi
