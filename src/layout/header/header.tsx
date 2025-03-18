import Link from "next/link"

//todo: make CTA button dynamic
//todo: adapt to the other mobile nav

import { RpdadLogo } from "@/components/LogoRpdad/logo"
import { Button } from "@/components/ui/button"
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
        "theme-dark:border-gray-600 border-b border-gray-50 shadow-xs"
      )}
    >
      <div className="center-element flex items-center justify-between py-6">
        <RpdadLogo />
        <NavbarSelector
          variant={navbarVariant}
          {...navbarProps}
          className="hidden lg:flex"
        />
        <div className="flex items-center gap-2">
          <Button variant={"outline"}>
            <Link href="#">Contactez-nous</Link>
          </Button>
          <MobileMenu />
          {/* <CTA label="Contactez-nous" link="/contact" variant="default" /> */}
        </div>
      </div>
    </header>
  )
}
