import { ArrowRight } from "lucide-react"

import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-col items-start gap-4">
            <div>
              <Badge
                variant={"outline"}
                className="bg-flamingo-light text-md mb-4 text-white"
              >
                {"Actualités"}
              </Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h2>{"Les actualités à ne pas manquer..."}</h2>
              <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-neutral-500 lg:max-w-lg">
                {
                  "Retrouvez toute l’acutalités du réseau des services membres  et du domaine de l’aide à domicile en général"
                }
              </p>
            </div>
            <Button className="group my-6">
              {"Voir toutes les actualités"}{" "}
              <ArrowRight className="ml-2 text-lg transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="bg-primary-lightest mb-2 aspect-video rounded-2xl shadow">
                <Image
                  src="https://www.rpdad.fr/images/Actualites/invitation_apero_debat_Belin-Beliet_page-0001.jpg"
                  alt="Actualité 1"
                  width={100}
                  height={100}
                  className="h-full w-full rounded-2xl object-cover object-left"
                />
              </div>
              <h3 className="text-xl tracking-tight">
                {"Les rencontres des professionnels du domicile"}
              </h3>
              <p className="text-sm text-gray-300">
                {"Publié le 3 mars 2025."}
              </p>
              <p className="text-muted-foreground text-base">
                {
                  "CCAS du Val de l’Eyre vous invitent le 29 mars à partir de 16h30..."
                }
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-primary-lightest mb-2 aspect-video rounded-2xl shadow">
                <Image
                  src="https://www.rpdad.fr/images/Actualites/Venez_nous_voir_-_Journ%C3%A9e_Portes_Ouvertes_SAD_-_25_MARS_2025_page-0001.jpg"
                  alt="Actualité 1"
                  width={100}
                  height={100}
                  className="aspect-video w-full rounded-2xl object-cover object-top"
                />
              </div>
              <h3 className="text-xl tracking-tight">
                {"CIAS de Blaye - Journée Portes Ouvertes"}
              </h3>
              <p className="text-sm text-gray-300">
                {"Publié le 3 mars 2025."}
              </p>
              <p className="text-muted-foreground text-base">
                {
                  "Venez découvrir le ServiceVenez découvrir le Serviced’Autonomie à..."
                }
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-primary-lightest mb-2 aspect-video rounded-2xl shadow">
                <Image
                  src="https://www.rpdad.fr/images/Actualites/Affiche_Job_Dating_Audenge_3.png"
                  alt="Actualité 1"
                  width={100}
                  height={100}
                  className="aspect-video w-full rounded-2xl object-cover object-top"
                />
              </div>
              <h3 className="text-xl tracking-tight">
                {"Publié le 19 décembre 2024."}
              </h3>
              <p className="text-sm text-gray-300">
                {"Publié le 3 mars 2025."}
              </p>
              <p className="text-muted-foreground text-base">
                {
                  "📢 Job Dating SAD du CCAS d’Audenge : Découvrez les Métiers du Domicile!..."
                }
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-primary-lightest mb-2 aspect-video rounded-2xl shadow">
                <Image
                  src="https://www.rpdad.fr/images/Actualites/aff_covid_fortes_chaleurs__fr_page-0001.jpg"
                  alt="Actualité 1"
                  width={100}
                  height={100}
                  className="aspect-video w-full rounded-2xl object-cover"
                />
              </div>
              <h3 className="text-xl tracking-tight">
                {"Dispositif 'Solidarité plan canicule'"}
              </h3>
              <p className="text-sm text-gray-300">
                {"Publié le 7 juin 2024."}
              </p>
              <p className="text-muted-foreground text-base">
                {
                  "Chaque année, du 1er juin au 15 septembre le niveau de vigilance vert 'canicule' est..."
                }
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-primary-lightest mb-2 aspect-video rounded-2xl shadow"></div>
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-primary-lightest mb-2 aspect-video rounded-2xl shadow"></div>
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }
