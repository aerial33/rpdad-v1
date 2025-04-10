import { Button } from "@/components/ui/button"

export default function EditorialSection() {
  return (
    <section className="py-32">
      <div className="center-element">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="flex flex-col gap-4">
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
            }{" "}
            <br />
            {
              "Les agents de la fonction publique vous aident et vous accompagnent dans les actes de la vie quotidienne. Ils vous apportent un service dans un esprit de coopération avec vous et avec les autres acteurs qui interviennent auprès de vous…."
            }
          </p>
        </div>
      </div>
    </section>
  )
}
