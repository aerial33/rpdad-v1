"use client"

// todo optimize responsive menu burger
// todo add hover effect to menu items
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { useState } from "react"

// Icônes du menu
import Link from "next/link"
import { usePathname } from "next/navigation"

import { navItems } from "@/data/nav-items"

export const NavbarMedium = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="p-2">
      {/* Desktop Navigation */}
      <div className="hidden space-x-6 md:flex">
        {navItems.map(({ label, path, subMenus }) =>
          subMenus ? (
            <div
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className="relative"
            >
              <Link
                key={label}
                href={path}
                className={`hover:text-primary relative flex items-center gap-1 py-2 transition lg:px-4 ${
                  pathname === path
                    ? "text-primary font-bold"
                    : "text-gray-700 dark:text-gray-400"
                }`}
              >
                {label}
                <ChevronDown
                  size={18}
                  className={`mt-0.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
                {pathname === path && (
                  <motion.div
                    layoutId="underline"
                    className="bg-primary absolute -bottom-4 left-0 h-1 w-full rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      type: "spring",
                      mass: 0.5,
                      damping: 11.5,
                      stiffness: 100,
                      restDelta: 0.001,
                      restSpeed: 0.001,
                    }}
                    className="bg-flamingo-lightest/50 absolute top-full left-0 z-50 min-w-[200px] rounded-xl p-4 shadow-lg dark:bg-gray-800"
                  >
                    {subMenus.map(({ title, items }) => (
                      <div className="mt-2 space-y-2">
                        {items.map(({ label, href }) => (
                          <Link
                            key={label}
                            href={href}
                            className="hover:bg-primary-lighter block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors dark:text-gray-200 dark:hover:bg-gray-700"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              key={label}
              href={path}
              className={`hover:text-primary relative py-2 transition lg:px-4 ${
                pathname === path
                  ? "text-primary font-bold"
                  : "text-gray-700 dark:text-gray-400"
              }`}
            >
              {label}
              {pathname === path && (
                <motion.div
                  layoutId="underline"
                  className="bg-primary absolute -bottom-4 left-0 h-1 w-full rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          )
        )}
      </div>
    </nav>
  )
}
