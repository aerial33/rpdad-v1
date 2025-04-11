"use client"

//todo create a component for the contact section
import { DynamicComponentSelector } from "./DynamiComponent"

export function DynamicContactSelector() {
  return (
    <DynamicComponentSelector
      config={{
        componentName: "Contact",
        variants: ["standard", "map", "simple"],
        defaultVariant: "standard",
        customFields: {
          title: {
            type: "text",
            label: "Titre de la section",
            default: "Contactez-nous",
          },
          email: {
            type: "text",
            label: "Email de contact",
            default: "contact@example.com",
          },
          showMap: {
            type: "select",
            label: "Afficher la carte",
            options: ["oui", "non"],
            default: "oui",
            forVariants: ["map"],
          },
        },
        // Cette fonction devrait correspondre à votre composant réel de Contact
        renderComponent: (variant, props) => {
          return (
            <div>
              <h1>Contact</h1>
            </div>
            // <SectionContact
            //   variant={variant}
            //   title={props.title}
            //   email={props.email}
            //   showMap={props.showMap === "oui"}
            // />
          )
        },
      }}
    />
  )
}
