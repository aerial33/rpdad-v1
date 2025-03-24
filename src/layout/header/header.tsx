//todo: make CTA button dynamic
//todo: adapt to the other mobile nav
import { Facebook, Linkedin, Youtube } from "lucide-react"

import { RpdadLogo } from "@/components/LogoRpdad/logo"
import { cn } from "@/lib/utils"

import { NavbarSelectorProps } from "./navbar"
import { MobileMenu } from "./navbar/navbar-mega/mobile-nav"
import { NavbarSelector } from "./navbar/navbar-selector"

type HeaderProps = {
  navbarVariant?: "default" | "mega" | "medium"
  className?: string
} & Omit<NavbarSelectorProps, "variant">

export const Header = ({
  navbarVariant = "default",
  className = "",
  ...navbarProps
}: HeaderProps) => {
  return (
    <header
      className={cn(
        className,
        "from-flamingo-lightest bg-gradient-to-t to-white"
      )}
    >
      <div className="center-element flex items-center justify-between py-6">
        <RpdadLogo />
        <NavbarSelector
          variant={navbarVariant}
          {...navbarProps}
          className="hidden lg:flex"
        />
        <div className="flex items-center gap-8">
          <ul className="text-muted-foreground flex items-center space-x-6">
            <li className="hover:text-primary font-medium">
              <a href="#">
                <Facebook className="size-6" />
              </a>
            </li>
            <li className="hover:text-primary font-medium">
              <a href="#">
                <Youtube className="size-6" />
              </a>
            </li>
            <li className="hover:text-primary font-medium">
              <a href="#">
                <Linkedin className="size-6" />
              </a>
            </li>
          </ul>
          <MobileMenu />
          {/* <CTA label="Contactez-nous" link="/contact" variant="default" /> */}
        </div>
      </div>
    </header>
  )
}
