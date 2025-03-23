import { Badge } from "@/components/ui/badge"

const Membres = () => {
  return (
    <div>
      <FeatureMembres />
    </div>
  )
}

export default Membres

function FeatureMembres() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start gap-4">
            <div>
              <Badge>{"Services membres"}</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-left text-3xl text-balance md:text-5xl">
                {
                  "Les membres du Réseau Public Départemental d'Aide à Domicile de la Gironde"
                }
              </h2>
              <div className="container mx-auto mt-4 flex w-full flex-wrap gap-4">
                <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight lg:max-w-lg">
                  {
                    "Créé en 2010, le Réseau Public Départemental d’Aide à Domicile de la Gironde compte à ce jour 34 services membres. Il s’agit exclusivement de services publics de proximité :"
                  }
                </p>
                <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight lg:max-w-lg">
                  {
                    "Centres Communaux d’Action Sociale (CCAS),Centres Intercommunaux d’Action Sociale (CIAS),Syndicat d'aide ménagère (SAMD) Chaque service comprend :"
                  }
                </p>
                <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight lg:max-w-lg">
                  {
                    "Un personnel chargé de l’accueil, de l’information et de la gestion administrative de l’activité d’aide et d’accompagnement à domicile, Un personnel d’encadrement de terrain et de coordination des interventions à domicile, Une équipe d’intervenants composée d’auxiliaires de vie et d’aides à domicile."
                  }
                </p>
                <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight lg:max-w-lg">
                  {
                    "Ces services, par leur présence sur 177 communes de Gironde et leur proximité, constituent d’incontournables acteurs de l’aide à domicile. Chaque service intervient sur un périmètre géographique clairement délimité."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="bg-muted mb-2 aspect-video rounded-md"></div>
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted mb-2 aspect-video rounded-md"></div>
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted mb-2 aspect-video rounded-md"></div>
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted mb-2 aspect-video rounded-md"></div>
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted mb-2 aspect-video rounded-md"></div>
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted mb-2 aspect-video rounded-md"></div>
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
