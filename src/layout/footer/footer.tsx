import { Facebook, Linkedin, Youtube } from "lucide-react"

import { RpdadLogo } from "@/components/LogoRpdad/logo"
import { navItems } from "@/data/nav-items"

// const sections = [
//   {
//     title: "Product",
//     links: [
//       { name: "Overview", href: "#" },
//       { name: "Pricing", href: "#" },
//       { name: "Marketplace", href: "#" },
//       { name: "Features", href: "#" },
//     ],
//   },
//   {
//     title: "Company",
//     links: [
//       { name: "About", href: "#" },
//       { name: "Team", href: "#" },
//       { name: "Blog", href: "#" },
//       { name: "Careers", href: "#" },
//     ],
//   },
//   {
//     title: "Resources",
//     links: [
//       { name: "Help", href: "#" },
//       { name: "Sales", href: "#" },
//       { name: "Advertise", href: "#" },
//       { name: "Privacy", href: "#" },
//     ],
//   },
// ]

export const Footer = () => {
  return (
    <footer className="center-element py-12 md:pt-16">
      <div className="flex flex-col items-center justify-between gap-10 border-t border-gray-200 text-center lg:flex-row lg:text-left">
        <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
          <div>
            <RpdadLogo height={90} className="m-auto lg:m-0" />
            <p className="gradient-secondary text-lg font-semibold">
              Réseau Public Départemental <br /> d&apos;Aide à Domicile de la
              Gironde
            </p>
            <p className="text-muted-foreground mt-6 text-sm">
              Aide à la vie quotidienne pour les personnes âgées ou en situation
              de handicap.
            </p>
          </div>
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
        </div>
        <div className="grid grid-cols-4 gap-6 lg:gap-20">
          {navItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-6 font-bold">{section.label}</h3>
              <ul className="text-muted-foreground space-y-4 text-sm">
                <li key={sectionIdx} className="hover:text-primary font-medium">
                  <a href={section.path}>{section.label}</a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-muted-foreground mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium lg:flex-row lg:items-center lg:text-left">
        <p>© 2025 RPDAD. Tous droits réservés.</p>
        <ul className="flex justify-center gap-4 lg:justify-start">
          <li className="hover:text-primary">
            <a href="#"> Mentions légales</a>
          </li>
          <li className="hover:text-primary">
            <a href="#"> Politique de confidentialité</a>
          </li>
          <li className="hover:text-primary">
            <a href="#"> Cookies</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
