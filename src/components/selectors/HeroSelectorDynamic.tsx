"use client"

import { HeroSelector, HeroVariant } from "@/sections/Hero"

import { DynamicComponentSelector } from "./DynamiComponent"

export function DynamicHeroSelector() {
  return (
    <DynamicComponentSelector
      config={{
        componentName: "Hero",
        variants: ["logo", "split", "split-image-form", "mini", "img-grid"],
        defaultVariant: "img-grid",
        customFields: {
          title: {
            type: "text",
            label: "Titre",
            default: "Titre par défaut",
            forVariants: ["mini"],
          },
          description: {
            type: "textarea",
            label: "Description",
            default: "Description par défaut",
            forVariants: ["mini"],
          },
        },
        renderComponent: (variant, props) => {
          if (variant === "mini") {
            return (
              <HeroSelector
                variant="mini"
                title={props.title}
                description={props.description}
              />
            )
          }
          return <HeroSelector variant={variant as HeroVariant} />
        },
      }}
    />
  )
}
