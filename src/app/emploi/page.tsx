import { FeatureGrid } from "@/components/ui/FeatureGrid"
import Emplois from "@/data/emploi"
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
        <FeatureGrid
          title="Les offres d'emploi du Réseau "
          subtitle="Les offres d'emploi du Réseau Public Départemental d'Aide à Domicile de la Gironde"
          badgeText="Réseau Public Départemental "
          buttonText="Les offres d'emploi"
          items={Emplois.map((emploi) => ({
            id: emploi.id,
            titre: emploi.titre,
            description: emploi.description,
            image: emploi.image,
            objectPosition: "object-top",
            link: `/emploi/${emploi.id}`,
          }))}
        />
      </div>
    </>
  )
}

export default Emploi
