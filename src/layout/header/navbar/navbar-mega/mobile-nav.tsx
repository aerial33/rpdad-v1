"use client"

//todo: adapt to the other mobile nav
import { AnimatePresence, motion } from "framer-motion"
import { Menu as MenuIcon, X } from "lucide-react"

import { useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { megaNavItems } from "@/data/nav-items"
import { cn } from "@/lib/utils"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label)
  }

  return (
    <div className="lg:hidden">
      {/* Bouton d'ouverture du menu */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? (
          <X className="h-8 w-8 text-black" />
        ) : (
          <MenuIcon className="h-8 w-8" />
        )}
      </Button>

      {/* Overlay du menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-background/80 fixed inset-0 z-50 backdrop-blur-xl"
            onClick={closeMenu}
          >
            {/* Contenu du menu mobile */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background fixed top-0 right-0 h-full w-4/5 max-w-xs p-6 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-6 pt-10">
                {megaNavItems.map((item) => {
                  // Si c'est un lien simple sans sous-menu
                  if (item.link) {
                    const isActive = pathname === item.link
                    return (
                      <Link
                        key={item.id}
                        href={item.link}
                        className={cn(
                          "py-2 text-lg transition-colors",
                          isActive
                            ? "text-primary font-bold"
                            : "hover:text-primary text-gray-600"
                        )}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    )
                  }

                  // Si c'est un élément avec sous-menus
                  return (
                    <div key={item.id} className="space-y-1">
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="hover:text-primary flex w-full items-center justify-between py-2 text-lg font-medium text-gray-600"
                      >
                        {item.label}
                        <span className="text-xl">
                          {openSubmenu === item.label ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence>
                        {openSubmenu === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {item.subMenus?.map((subMenu) => (
                              <div key={subMenu.title} className="my-2">
                                <p className="mb-1 text-sm font-medium text-gray-500">
                                  {subMenu.title}
                                </p>
                                <div className="flex flex-col space-y-2">
                                  {subMenu.items.map((subItem, idx) => (
                                    <Link
                                      key={idx}
                                      href={subItem.href || "#"}
                                      className="hover:text-primary text-gray-600"
                                      onClick={closeMenu}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
