import HeroImgGrid from "./hero-img-grid"
import { HeroLogo } from "./hero-logo"
import { HeroMini } from "./hero-mini"
import { Hero1 } from "./hero-one"
import { HeroSplit } from "./hero-split"
import HeroSplitImageForm from "./hero-split-image-form"

// Type pour les variantes disponibles
export type HeroVariant =
  | "logo"
  | "split"
  | "split-image-form"
  | "mini"
  | "img-grid"
  | "hero-on"
// Type de base pour toutes les props communes aux composants Hero
export type BaseHeroProps = {
  className?: string
  // Ajoutez ici d'autres props communes à tous les composants Hero
}

// Définir explicitement le type des composants Hero
type HeroComponentType = React.ComponentType<BaseHeroProps>

// Type spécifique pour le sélecteur de Hero
export type HeroSelectorProps = BaseHeroProps & {
  variant: HeroVariant
} & (
    | {
        variant: "mini" | "logo" | "split"
        title?: string
        description?: string
      }
    | {
        variant: "logo" | "split" | "split-image-form" | "img-grid" | "hero-on"
      }
  )

// Objet contenant toutes les variantes de Hero avec typage explicite
export const heroVariants: Record<HeroVariant, HeroComponentType> = {
  logo: HeroLogo as HeroComponentType,
  split: HeroSplit as HeroComponentType,
  "split-image-form": HeroSplitImageForm as HeroComponentType,
  mini: HeroMini as HeroComponentType,
  "img-grid": HeroImgGrid as HeroComponentType,
  "hero-on": Hero1 as HeroComponentType,
}

// Composant sélecteur de Hero
export const HeroSelector = ({ variant, ...props }: HeroSelectorProps) => {
  const HeroComponent = heroVariants[variant]
  return <HeroComponent {...props} />
}

// Exportation des composants individuels
export { Hero1, HeroImgGrid, HeroLogo, HeroMini, HeroSplit, HeroSplitImageForm }
