"use client"

import { motion } from "framer-motion"

import { useState } from "react"

import { MapGironde } from "@/components/geomap/gironde"
import { FadeUp } from "@/components/motion/animations"

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

export default function MapGirondeSection() {
  const [selectedArea, setSelectedArea] = useState<{
    id: string
    name: string
  } | null>(null)

  const handleAreaClick = (areaId: string, areaName: string) => {
    if (selectedArea?.id === areaId) {
      setSelectedArea(null)
    } else {
      setSelectedArea({ id: areaId, name: areaName })
    }
  }

  return (
    <section className="py-12">
      <div className="center-element mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <FadeUp className="p-4">
          <h2 className="text-xl font-bold text-balance text-gray-800 md:text-4xl">
            {
              "Les CCAS et CIAS de vos communes ou intercommunalité vous proposent un service d’aide et d’accompagnement à domicile de qualité : "
            }
          </h2>
          <p className="text-sm text-gray-500">
            Une carte interactive de la Gironde créée avec D3.js et TopoJSON
          </p>
          {selectedArea && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-md bg-blue-100 p-3"
            >
              <p className="text-sm text-blue-800">
                Zone sélectionnée: <strong>{selectedArea.name}</strong>
              </p>
            </motion.div>
          )}
        </FadeUp>
        <div className="rounded-md border border-gray-200 bg-white p-4 shadow-md">
          <MapGironde
            highlightedAreaId={selectedArea?.id || null}
            onAreaClick={handleAreaClick}
          />
        </div>
      </div>
    </section>
  )
}
