"use client"

import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

type SelectorConfig<T extends string> = {
  componentName: string // Nom du composant (ex: "Hero", "Section", etc.)
  variants: T[] // Les variantes disponibles
  defaultVariant: T // La variante par défaut
  additionalProps?: Record<string, any> // Props additionnelles spécifiques à certaines variantes
  customFields?: {
    // Champs personnalisés avec leurs types
    [key: string]: {
      type: "text" | "textarea" | "number" | "select"
      label: string
      default?: string | number
      options?: string[] // Pour les sélecteurs
      forVariants?: T[] // Spécifie pour quelles variantes ce champ est disponible
    }
  }
  renderComponent: (variant: T, props: any) => React.ReactNode // Fonction de rendu
}

export function DynamicComponentSelector<T extends string>({
  config,
}: {
  config: SelectorConfig<T>
}) {
  const {
    componentName,
    variants,
    defaultVariant,
    customFields = {},
    renderComponent,
  } = config

  // Clé de stockage dans localStorage
  const storageKeyPrefix = `dynamic_${componentName.toLowerCase()}_`

  // État pour la variante et les champs personnalisés
  const [variant, setVariant] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const savedVariant = localStorage.getItem(`${storageKeyPrefix}variant`)
      return (savedVariant as T) || defaultVariant
    }
    return defaultVariant
  })

  // État pour les champs personnalisés
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() => {
    if (typeof window !== "undefined") {
      const savedFields: Record<string, string> = {}

      Object.keys(customFields).forEach((fieldName) => {
        const savedValue = localStorage.getItem(
          `${storageKeyPrefix}${fieldName}`
        )
        savedFields[fieldName] =
          savedValue || customFields[fieldName].default?.toString() || ""
      })

      return savedFields
    }

    // Valeurs par défaut
    return Object.keys(customFields).reduce(
      (acc, fieldName) => {
        acc[fieldName] = customFields[fieldName].default?.toString() || ""
        return acc
      },
      {} as Record<string, string>
    )
  })

  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Sauvegarder les changements dans localStorage
  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}variant`, variant)
  }, [variant, storageKeyPrefix])

  useEffect(() => {
    Object.keys(fieldValues).forEach((fieldName) => {
      localStorage.setItem(
        `${storageKeyPrefix}${fieldName}`,
        fieldValues[fieldName]
      )
    })
  }, [fieldValues, storageKeyPrefix])

  // Gestion des clics en dehors du panneau
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Mettre à jour un champ
  const updateField = (fieldName: string, value: string) => {
    setFieldValues((prev) => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  // Préparation des props pour le rendu
  const componentProps = {
    variant,
    ...Object.keys(fieldValues).reduce(
      (acc, fieldName) => {
        acc[fieldName] = fieldValues[fieldName]
        return acc
      },
      {} as Record<string, any>
    ),
    ...config.additionalProps,
  }

  return (
    <div className="relative">
      {/* Rendu du composant avec la variante et les props */}
      {renderComponent(variant, componentProps)}

      {/* Bouton pour ouvrir/fermer le panneau de contrôle */}
      <Button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="group fixed top-20 right-4 z-50 flex h-12 w-12 items-center gap-2 overflow-hidden rounded-full bg-black/80 p-0 transition-all duration-300 hover:w-auto hover:rounded-full hover:px-4 hover:py-2"
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
          Styles {componentName}
        </span>
      </Button>

      {/* Overlay et panneau de contrôle */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-transparent">
          <div
            ref={panelRef}
            className="fixed top-0 right-0 z-40 h-full w-64 overflow-y-auto bg-slate-400/90 p-4 pt-20 text-white shadow-lg transition-all"
          >
            <div className="flex flex-col gap-3">
              <div className="mb-2 font-bold">
                Sélecteur de {componentName}:
              </div>

              {/* Sélection de variante */}
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

              {/* Champs personnalisés */}
              {Object.entries(customFields).map(([fieldName, field]) => {
                // Vérifier si ce champ s'applique à la variante actuelle
                if (field.forVariants && !field.forVariants.includes(variant)) {
                  return null
                }

                return (
                  <div key={fieldName} className="mt-3 flex flex-col gap-2">
                    <label className="text-sm">{field.label}:</label>

                    {field.type === "text" && (
                      <input
                        type="text"
                        placeholder={field.label}
                        value={fieldValues[fieldName] || ""}
                        onChange={(e) => updateField(fieldName, e.target.value)}
                        className="rounded px-2 py-1 text-black"
                      />
                    )}

                    {field.type === "textarea" && (
                      <textarea
                        placeholder={field.label}
                        value={fieldValues[fieldName] || ""}
                        onChange={(e) => updateField(fieldName, e.target.value)}
                        className="rounded px-2 py-1 text-black"
                        rows={3}
                      />
                    )}

                    {field.type === "number" && (
                      <input
                        type="number"
                        placeholder={field.label}
                        value={fieldValues[fieldName] || ""}
                        onChange={(e) => updateField(fieldName, e.target.value)}
                        className="rounded px-2 py-1 text-black"
                      />
                    )}

                    {field.type === "select" && field.options && (
                      <select
                        value={fieldValues[fieldName] || ""}
                        onChange={(e) => updateField(fieldName, e.target.value)}
                        className="rounded px-2 py-1 text-black"
                      >
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                )
              })}

              {/* Bouton d'enregistrement */}
              <Button
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full bg-green-600 hover:bg-green-700"
              >
                Enregistrer
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
