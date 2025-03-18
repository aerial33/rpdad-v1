import { NavbarDefault } from "./navbar-default"
import { NavbarMedium } from "./navbar-medium/nav-medium"
import { NavbarMega } from "./navbar-mega/navbar-mega"

// Définir un type de base pour tous les navbars
type BaseNavbarProps = {
  className?: string
  // autres props communes
}

// Typer chaque variante
type NavbarDefaultProps = BaseNavbarProps & {
  // props spécifiques à NavbarDefault
}

type NavbarMegaProps = BaseNavbarProps & {
  // props spécifiques à NavbarMega
}
type NavbarMediumProps = BaseNavbarProps & {
  // props spécifiques à NavbarMedium
}

// Puis utiliser un type d'union pour le sélecteur
export const navbarVariants = {
  default: NavbarDefault,
  mega: NavbarMega,
  medium: NavbarMedium,
} as const

export { NavbarDefault, NavbarMedium, NavbarMega }

export type NavbarSelectorProps = {
  variant?: keyof typeof navbarVariants
} & (NavbarDefaultProps | NavbarMegaProps | NavbarMediumProps)
