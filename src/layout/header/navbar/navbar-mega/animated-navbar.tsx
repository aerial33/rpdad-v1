"use client"

// Todo ajouter la fleche pour indiquer le sous-menu
// Importation des bibliothèques nécessaires
import { motion } from "framer-motion"

// Pour la navigation entre pages
import React from "react"

// Pour les animations
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Pour l'optimisation des images
import { cn } from "@/lib/utils"

// Bibliothèque React de base

// Configuration de la transition pour les animations
// Ces paramètres définissent comment les éléments animés se comportent
const transition = {
  type: "spring", // Animation de type ressort
  mass: 0.5, // Masse de l'élément (affecte l'inertie)
  damping: 11.5, // Amortissement (réduit les oscillations)
  stiffness: 100, // Rigidité du ressort
  restDelta: 0.001, // Seuil de différence pour considérer l'animation comme terminée
  restSpeed: 0.001, // Seuil de vitesse pour considérer l'animation comme terminée
}

// Composant MenuItem - Représente un élément du menu avec son contenu déroulant
export const MenuItem = ({
  setActive, // Fonction pour définir l'élément actif
  active, // État actuel de l'élément actif
  item, // Nom de l'élément de menu
  children, // Contenu à afficher dans le sous-menu
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      {/* Texte de l'élément du menu */}
      <motion.p
        transition={{ duration: 0.3 }}
        className="hover:text-primary theme-dark:text-neutral-50 cursor-pointer text-neutral-700"
      >
        {item}
      </motion.p>
      {/* Affichage conditionnel du sous-menu si un élément est actif */}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }} // État initial de l'animation
          animate={{ opacity: 1, scale: 1, y: 0 }} // État final de l'animation
          exit={{ opacity: 0, scale: 0.85, y: 10 }} // État final de l'animation
          transition={transition}
        >
          {/* Affiche le contenu uniquement si cet élément est l'élément actif */}
          {active === item && (
            <div className="absolute top-[calc(100%_+_1rem)] left-1/2 -translate-x-1/2 transform">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId assure une animation fluide entre les éléments
                className="theme-dark:border-white/[0.2] theme-dark:bg-black overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm"
              >
                <motion.div
                  layout // layout assure une animation fluide lors des changements de dimensions
                  className="h-full w-max p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

// Composant Menu - Conteneur principal pour les éléments du menu
export const Menu = ({
  setActive, // Fonction pour définir l'élément actif
  children, // Les éléments du menu (MenuItem)
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // Réinitialise l'état actif quand la souris quitte le menu
      className="relative flex items-center justify-center gap-4 py-4"
    >
      {children}
    </nav>
  )
}

// Composant ProductItem - Représente un produit dans le menu déroulant
export const ProductItem = ({
  title, // Titre du produit
  description, // Description du produit
  href, // Lien vers la page du produit
  src, // Source de l'image du produit
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className="flex gap-4">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="theme-dark:text-white mb-1 text-xl font-bold text-black">
          {title}
        </h4>
        <p className="theme-dark:text-neutral-300 max-w-[10rem] text-sm text-neutral-700">
          {description}
        </p>
      </div>
    </Link>
  )
}

// Composant HoveredLink - Lien avec effet de survol personnalisé
export const HoveredLink = ({ children, link, ...rest }: any) => {
  const pathname = usePathname()
  const isActive = pathname === link
  return (
    <Link
      {...rest}
      href={link}
      className={cn("group relative py-2 transition lg:px-2", {
        "text-primary font-bold": isActive,
        "theme-dark:text-gray-400 hover:text-primary text-gray-500": !isActive,
      })}
    >
      {children}
      <span
        className={cn(
          "bg-primary absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 transform rounded-full transition-transform duration-300 ease-out",
          "group-hover:scale-x-100"
        )}
      />
      {isActive && (
        <motion.div
          layoutId="underline"
          className="bg-primary absolute -bottom-2 left-0 h-0.5 w-full rounded-lg"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  )
}
