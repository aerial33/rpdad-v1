"use client"

import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { HeroSelector, HeroVariant } from "@/sections/Hero"

export function DynamicHeroSelector() {
  const [variant, setVariant] = useState<HeroVariant>("img-grid")
  const [showTitle, setShowTitle] = useState("")
  const [showDescription, setShowDescription] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Fonction pour gérer les clics à l'extérieur du panneau
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Si le panneau est ouvert et que le clic n'est ni sur le panneau ni sur le bouton
      if (
        isOpen &&
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    // Ajouter l'écouteur d'événements lorsque le panneau est ouvert
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    // Nettoyage de l'écouteur d'événements
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Toutes les variantes disponibles
  const variants: HeroVariant[] = [
    "logo",
    "split",
    "split-image-form",
    "mini",
    "img-grid",
  ]

  return (
    <div className="relative">
      {/* Le composant Hero sélectionné */}
      {variant === "mini" ? (
        <HeroSelector
          variant="mini"
          title={showTitle || "Titre par défaut"}
          description={showDescription || "Description par défaut"}
        />
      ) : (
        <HeroSelector variant={variant} />
      )}

      {/* Bouton pour ouvrir/fermer le panneau de contrôle */}
      <Button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="group absolute top-0 right-4 z-50 flex h-12 w-12 items-center gap-2 overflow-hidden rounded-full bg-slate-700 p-0 transition-all duration-300 hover:w-auto hover:rounded-full hover:px-4 hover:py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-0 ml-3 flex-shrink-0 transition-all group-hover:mr-2 group-hover:ml-0"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          <path d="M20 20 5.5 5.5"></path>
        </svg>
        <span className="w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:w-auto group-hover:opacity-100">
          Styles Hero
        </span>
      </Button>

      {/* Overlay pour fermer en cliquant en dehors */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-transparent">
          {/* Panneau de contrôle (affiché sur le côté) */}
          <div
            ref={panelRef}
            className="fixed top-0 right-0 z-40 h-full w-64 overflow-y-auto bg-slate-400/90 p-4 pt-20 text-white shadow-lg transition-all"
          >
            <div className="flex flex-col gap-3">
              <div className="mb-2 font-bold">Sélecteur de Hero:</div>
              {variants.map((v) => (
                <Button
                  key={v}
                  onClick={() => setVariant(v)}
                  variant={variant === v ? "default" : "outline"}
                  className="w-full capitalize"
                >
                  {v}
                </Button>
              ))}

              {/* Options supplémentaires pour le type "mini" */}
              {variant === "mini" && (
                <div className="mt-3 flex flex-col gap-2">
                  <label className="text-sm">Titre:</label>
                  <input
                    type="text"
                    placeholder="Titre"
                    value={showTitle}
                    onChange={(e) => setShowTitle(e.target.value)}
                    className="rounded px-2 py-1 text-black"
                  />
                  <label className="text-sm">Description:</label>
                  <input
                    type="text"
                    placeholder="Description"
                    value={showDescription}
                    onChange={(e) => setShowDescription(e.target.value)}
                    className="rounded px-2 py-1 text-black"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
