"use client";

// todo optimize responsive menu burger
// todo add hover effect to menu items
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { useState } from "react";

// Icônes du menu
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/data/nav-items";

export const NavbarMedium = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-2">
      {/* Desktop Navigation */}
      <div className="hidden space-x-6 md:flex">
        {navItems.map(({ label, path }) => (
          <Link
            key={label}
            href={path}
            className={`hover:text-primary relative py-2 transition lg:px-4 ${
              pathname === path
                ? "text-primary font-bold"
                : "theme-dark:text-gray-400 text-gray-500"
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
        ))}
      </div>

      {/* Menu Burger (Mobile) */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 flex flex-col space-y-4 rounded-lg bg-white p-4 shadow-md md:hidden"
          >
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                className={`block rounded px-4 py-2 text-lg transition ${
                  pathname === path ? "bg-primary text-white" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)} // Ferme le menu après clic
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
