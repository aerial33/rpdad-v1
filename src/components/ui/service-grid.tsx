import Image from "next/image"
import Link from "next/link"

// Type pour les éléments à afficher dans la grille
export type GridItem = {
  id?: number | string
  titre: string
  description: string
  image?: string
  lien?: string
}

// Props du composant
export interface ServiceGridProps {
  items: GridItem[]
  columns?: 2 | 3 | 4
  className?: string
  colorBorder?: "primary" | "secondary"
  withBorder?: boolean
  imageHeight?: "small" | "medium" | "large"
}

/**
 * Composant réutilisable pour afficher une grille d'éléments
 * Peut être utilisé pour des services, des membres d'équipe, des produits, etc.
 */
export function ServiceGrid({
  items,
  columns = 3,
  className = "",
  colorBorder = "primary",
  withBorder = true,
  imageHeight = "medium",
}: ServiceGridProps) {
  // Déterminer le nombre de colonnes pour différentes tailles d'écran
  const getGridCols = () => {
    switch (columns) {
      case 2:
        return "sm:grid-cols-1 md:grid-cols-2"
      case 4:
        return "sm:grid-cols-2 lg:grid-cols-4"
      case 3:
      default:
        return "sm:grid-cols-2 lg:grid-cols-3"
    }
  }

  // Déterminer la hauteur de l'image
  const getImageHeight = () => {
    switch (imageHeight) {
      case "small":
        return "aspect-[4/3]"
      case "large":
        return "aspect-[16/10]"
      case "medium":
      default:
        return "aspect-video"
    }
  }

  // Déterminer si on applique une bordure
  const getBorderStyle = withBorder ? `border-${colorBorder} border-2` : ""

  return (
    <div className={`grid grid-cols-1 gap-8 ${getGridCols()} ${className}`}>
      {items.map((item, index) => {
        const content = (
          <div
            key={item.id || index}
            className={`flex flex-col gap-2 rounded-2xl ${getBorderStyle}`}
          >
            <div
              className={`relative mb-2 ${getImageHeight()} rounded-t-2xl bg-gray-300`}
            >
              <Image
                src={
                  item.image ||
                  "https://sandbox-tailwind-template.netlify.app/assets/img/photos/b7.jpg"
                }
                alt={item.titre}
                fill
                className="absolute rounded-t-2xl object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold tracking-tight">{item.titre}</h3>
              <p className="text-muted-foreground mt-4 text-base">
                {item.description}
              </p>
            </div>
          </div>
        )

        // Si un lien est fourni, envelopper dans un composant Link
        return item.lien ? (
          <Link href={item.lien} key={item.id || index}>
            {content}
          </Link>
        ) : (
          content
        )
      })}
    </div>
  )
}
