import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function EditorialSection() {
  return (
    <section className="bg-picton-blue-lighter py-32">
      <div className="center-element">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="flex flex-col">
            <Badge variant="secondary" className="mb-4 text-white">
              Editorial
            </Badge>
            <h2 className="lg:text-left">
              {
                "Découvrez nos services d'aide à domicile adaptés à vos besoins."
              }
            </h2>
            <div className="mt-8 flex space-x-4 lg:justify-start">
              <Button>En Lire plus</Button>
              <Button variant="outline">En Savoir plus</Button>
            </div>
          </div>
          <p className="mb-8 max-w-xl text-center text-zinc-600 lg:text-left">
            {
              "Le Réseau Public Départemental d'Aide à Domicile de la Gironde accompagne près de 5000 personnes âgées et personnes en situation de handicap qui choisissent de vivre à domicile."
            }
          </p>
        </div>
      </div>
    </section>
  )
}
