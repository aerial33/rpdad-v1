import Link from "next/link"

import { FeatureThird } from "@/blocks/features/FeatureThird"
import { Button } from "@/components/ui/button"
import { emplois } from "@/lib/emplois/emplois-data"
import { Hero1 } from "@/sections/Hero"

// Type pour les données d'emploi (identique à celui de la page de détail)
export type Emploi = {
  id: string
  titre: string
  contrat: string
  temps: string
  service: string
  description: string
  profil: string
  avantages: string
  annonce?: string
  image?: string
  contact: {
    responsable: string
    email: string
    telephone: string
    adresse: string
  }
}

// Métadonnées de la page
export const metadata = {
  title: "Offres d'emploi | RPDAD",
  description:
    "Découvrez les offres d'emploi disponibles au sein du Réseau Public Départemental d'Aide à Domicile de la Gironde",
}

// Composant principal de la page
export default function EmploisPage() {
  // Transformation des données pour le composant ServiceGrid
  const emploisItems = emplois.map((emploi) => ({
    id: emploi.id,
    titre: emploi.titre,
    description: `${emploi.contrat} - ${emploi.temps} - ${emploi.service}`,
    image:
      emploi.image ||
      "https://sandbox-tailwind-template.netlify.app/assets/img/photos/b7.jpg",
    lien: `/rechercher-un-emploi/${emploi.id}`,
  }))

  return (
    <div>
      {/* <HeroSelector
        variant="mini"
        title="Offres d'emploi"
        description="Rejoignez le Réseau Public Départemental d'Aide à Domicile de la Gironde"
      /> */}
      <Hero1
        heading="Rejoignez nos équipes d'aide à domicile"
        description="Les Services Autonomie à Domicile Des métiers qui changent des vies. La vôtre aussi."
        badge="Offres d'emploi en Gironde"
        image={{
          src: "https://sandbox-tailwind-template.netlify.app/assets/img/photos/co3.png",
          alt: "Offres d'emploi en Gironde",
        }}
        buttons={{
          primary: {
            text: "Les offres d'emploi",
            url: "#emplois",
          },
        }}
      />
      <div className="container mx-auto max-w-7xl px-6 py-16" id="emplois">
        <div className="mb-12 flex flex-col items-start">
          <h2 className="mb-4 text-3xl font-bold">Nos offres d'emploi</h2>
          <p className="max-w-3xl text-lg text-gray-600">
            Le RPDAD et ses services membres recrutent régulièrement des
            professionnels de l'aide à domicile. Découvrez nos opportunités et
            rejoignez nos équipes engagées pour l'accompagnement des personnes
            âgées et en situation de handicap.
          </p>
        </div>

        <FeatureThird
          title="Aide à domicile"
          description="Nous recherchons un(e) aide à domicile pour intervenir auprès de personnes âgées et en situation de handicap sur Bordeaux. Vous serez chargé(e) d'accompagner les bénéficiaires dans les actes essentiels de la vie quotidienne, l'entretien du cadre de vie et le maintien du lien social."
          checkList={[
            {
              title: "Contrat",
              description: "CDI",
            },
            {
              title: "Temps",
              description: "Temps plein",
            },
            {
              title: "Profil",
              description:
                "Diplôme d'État d'Accompagnant Éducatif et Social (DEAES) ou expérience significative dans le domaine.",
            },
            {
              title: "Avantages",
              description:
                "Mutuelle d'entreprise, tickets restaurant, indemnités kilométriques, téléphone professionnel",
            },
          ]}
          image={{
            src: "https://sandbox-tailwind-template.netlify.app/assets/img/photos/co3.png",
            alt: "Offres d'emploi en Gironde",
          }}
          imagePosition="right"
          button={{
            label: "Consulter cette offre",
            url: "/rechercher-un-emploi/aide-a-domicile-bordeaux",
          }}
          className="border-primary"
        />

        <FeatureThird
          title="Aide à domicile"
          description="Nous recherchons un(e) aide à domicile pour intervenir auprès de personnes âgées et en situation de handicap sur Bordeaux. Vous serez chargé(e) d'accompagner les bénéficiaires dans les actes essentiels de la vie quotidienne, l'entretien du cadre de vie et le maintien du lien social."
          checkList={[
            {
              title: "Contrat",
              description: "CDI",
            },
            {
              title: "Temps",
              description: "Temps plein",
            },
            {
              title: "Profil",
              description:
                "Diplôme d'État d'Accompagnant Éducatif et Social (DEAES) ou expérience significative dans le domaine.",
            },
            {
              title: "Avantages",
              description:
                "Mutuelle d'entreprise, tickets restaurant, indemnités kilométriques, téléphone professionnel",
            },
          ]}
          image={{
            src: "https://sandbox-tailwind-template.netlify.app/assets/img/photos/about7.jpg",
            alt: "Offres d'emploi en Gironde",
          }}
          imagePosition="left"
          button={{
            label: "Consulter cette offre",
            url: "/rechercher-un-emploi/aide-a-domicile-bordeaux",
          }}
          className="border-flamingo"
        />

        {/* <ServiceGrid
          items={emploisItems}
          columns={3}
          withBorder={true}
          colorBorder="primary"
          imageHeight="medium"
        /> */}

        <div className="mt-16 flex flex-col items-center">
          <h3 className="mb-6 text-2xl font-semibold">
            Vous ne trouvez pas le poste qui vous correspond ?
          </h3>
          <p className="mb-8 max-w-2xl text-center text-gray-600">
            Envoyez-nous votre candidature spontanée et nous la transmettrons à
            nos services membres susceptibles d'être intéressés par votre
            profil.
          </p>
          <Button>
            <Link href="/contact">Candidature spontanée</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
