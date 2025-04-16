//todo: make CTA button dynamic
//todo: adapt to the other mobile nav
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

import Link from "next/link"

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
    <header className={cn(className, "bg-transparent")}>
      <div className="container mx-auto flex items-center justify-between px-4 py-6 xl:px-0">
        <div className="flex w-full items-center gap-7">
          <Link href="/">
            <RpdadLogo />
          </Link>
          <NavbarSelector
            variant={navbarVariant}
            {...navbarProps}
            className="hidden lg:flex"
          />
        </div>
        <div className="flex items-center gap-8">
          <ul className="text-foreground flex items-center space-x-6">
            <li className="hover:text-primary-light font-medium">
              <Link
                href="https://www.facebook.com/rpdadgironde"
                target="_blank"
              >
                <Facebook className="size-6" />
              </Link>
            </li>
            <li className="font-medium hover:text-white">
              <Link href="https://www.youtube.com/@RPDAD33" target="_blank">
                <Youtube className="size-6" />
              </Link>
            </li>
            <li className="font-medium hover:text-white">
              <Link
                href="https://www.linkedin.com/company/rpdad33/posts/?feedView=all"
                target="_blank"
              >
                <Linkedin className="size-6" />
              </Link>
            </li>
            <li className="font-medium hover:text-white">
              <Link href="https://www.instagram.com/rpdad_33/" target="_blank">
                <Instagram className="size-6" />
              </Link>
            </li>
          </ul>
          <MobileMenu />
          {/* <CTA label="Contactez-nous" link="/contact" variant="default" /> */}
        </div>
      </div>
    </header>
  )
}
