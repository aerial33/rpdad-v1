import { notFound } from "next/navigation"

import BlogSection from "@/components/blog-content/content-emploi"
import { emplois } from "@/lib/emplois/emplois-data"
import { HeroSelector } from "@/sections/Hero"

// Type pour les données d'emploi
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

// Fonction pour générer les métadonnées de la page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const emploi = emplois.find((e) => e.id === slug)

  if (!emploi) {
    return {
      title: "Offre d'emploi non trouvée",
    }
  }

  return {
    title: `${emploi.titre} - ${emploi.service} | RPDAD`,
    description: `${emploi.contrat} - ${emploi.temps} - ${emploi.description.substring(0, 150)}...`,
  }
}

// Fonction pour générer les chemins statiques lors du build
export async function generateStaticParams() {
  return emplois.map((emploi) => ({
    slug: emploi.id,
  }))
}

// Composant principal de la page
export default async function EmploiPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // Récupérer les données de l'emploi correspondant au slug
  const emploi = emplois.find((e) => e.id === slug)

  // Si l'emploi n'existe pas, rediriger vers une page 404
  if (!emploi) {
    notFound()
  }

  return (
    <div>
      <HeroSelector
        variant="mini"
        title={emploi.titre}
        description={`${emploi.contrat} - ${emploi.temps} - ${emploi.service}`}
      />
      <BlogSection emploi={emploi} />
    </div>
  )
}
