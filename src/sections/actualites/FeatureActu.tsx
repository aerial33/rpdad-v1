import { FeatureGrid, FeatureGridItem } from "@/components/ui/FeatureGrid"

export function FeatureBlog() {
  // Données d'actualités
  const actualites: FeatureGridItem[] = [
    {
      id: 1,
      image:
        "https://sandbox-tailwind-template.netlify.app/assets/img/photos/b6.jpg",
      titre: "Les rencontres des professionnels du domicile",
      date: "Publié le 3 mars 2025",
      description:
        "CCAS du Val de l'Eyre vous invitent le 29 mars à partir de 16h30...",
      objectPosition: "object-left",
    },
    {
      id: 2,
      image:
        "https://sandbox-tailwind-template.netlify.app/assets/img/photos/b7.jpg",
      titre: "CIAS de Blaye - Journée Portes Ouvertes",
      date: "Publié le 3 mars 2025",
      description:
        "Venez découvrir le ServiceVenez découvrir le Serviced'Autonomie à...",
      objectPosition: "object-top",
    },
    {
      id: 3,
      image:
        "https://sandbox-tailwind-template.netlify.app/assets/img/photos/b5.jpg",
      titre: "Publié le 19 décembre 2024.",
      date: "Publié le 3 mars 2025",
      description:
        "📢 Job Dating SAD du CCAS d'Audenge : Découvrez les Métiers du Domicile!...",
      objectPosition: "object-top",
    },
    {
      id: 4,
      image:
        "https://www.rpdad.fr/images/Actualites/aff_covid_fortes_chaleurs__fr_page-0001.jpg",
      titre: "Dispositif 'Solidarité plan canicule'",
      date: "Publié le 7 juin 2024",
      description:
        "Chaque année, du 1er juin au 15 septembre le niveau de vigilance vert 'canicule' est...",
      objectPosition: "object-cover",
    },
  ]

  return (
    <FeatureGrid
      title="Les actualités à ne pas manquer..."
      subtitle="Retrouvez toute l'acutalités du réseau des services membres et du domaine de l'aide à domicile en général"
      badgeText="Actualités"
      buttonText="Voir toutes les actualités"
      items={actualites}
      columns={2}
      maxItems={4}
    />
  )
}
