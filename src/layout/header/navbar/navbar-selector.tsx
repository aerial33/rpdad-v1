import { NavbarSelectorProps, navbarVariants } from "@/layout/header/navbar"

const navbarComponents = navbarVariants

type SelectorProps = {
  variant?: keyof typeof navbarVariants
} & NavbarSelectorProps

export const NavbarSelector = ({
  variant = "default",
  ...props
}: SelectorProps) => {
  const NavbarComponent = navbarComponents[variant] || navbarComponents.default

  return <NavbarComponent {...props} />
}
