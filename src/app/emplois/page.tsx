import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ServiceGrid } from "@/components/ui/service-grid"
import { emplois } from "@/lib/emplois/emplois-data"
import { HeroSelector } from "@/sections/Hero"

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
    lien: `/emplois/${emploi.id}`,
  }))

  return (
    <div>
      <HeroSelector
        variant="mini"
        title="Offres d'emploi"
        description="Rejoignez le Réseau Public Départemental d'Aide à Domicile de la Gironde"
      />

      <div className="container mx-auto px-6 py-16">
        <div className="mb-12 flex flex-col items-start">
          <h2 className="mb-4 text-3xl font-bold">Nos offres d'emploi</h2>
          <p className="max-w-3xl text-lg text-gray-600">
            Le RPDAD et ses services membres recrutent régulièrement des
            professionnels de l'aide à domicile. Découvrez nos opportunités et
            rejoignez nos équipes engagées pour l'accompagnement des personnes
            âgées et en situation de handicap.
          </p>
        </div>

        <ServiceGrid
          items={emploisItems}
          columns={3}
          withBorder={true}
          colorBorder="primary"
          imageHeight="medium"
        />

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
