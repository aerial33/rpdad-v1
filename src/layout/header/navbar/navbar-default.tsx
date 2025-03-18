"use client"

// todo: add menu mobile
import { motion } from "framer-motion"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { navItems } from "@/data/nav-items"
import { cn } from "@/lib/utils"

export const NavbarDefault = ({ className }: { className?: string }) => {
  const pathname = usePathname()

  return (
    <div
      className={cn("flex items-center justify-center gap-4 py-2", className)}
    >
      {navItems.map(({ label, path }) => (
        <Link
          key={label}
          href={path}
          className={cn(
            "hover:text-primary group relative py-2 transition lg:px-4",
            {
              "text-primary font-bold": pathname === path,
              "theme-dark:text-gray-400 text-gray-500": pathname !== path,
            }
          )}
        >
          {label}
          <span
            className={cn(
              "bg-primary absolute -bottom-4 left-0 h-0.5 w-full origin-left scale-x-0 transform rounded-full transition-transform duration-300 ease-out",
              "group-hover:scale-x-100"
            )}
          />
          {pathname === path && (
            <motion.div
              layoutId="underline"
              className="bg-primary absolute -bottom-4 left-0 h-0.5 w-full rounded-lg"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </div>
  )
}
