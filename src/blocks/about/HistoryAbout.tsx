import { ArrowUpRight } from "lucide-react"

import { Timeline, TimelineItem } from "@/components/Timeline"
import { cn } from "@/lib/utils"
import { SectionContent } from "@/sections/sections/SectionContent"

const timelineData: TimelineItem[] = [
  {
    date: "2002",
    title: "Professionnalisation des services",
    description:
      "Les services d'aide-ménagère deviennent des Services d'Aide et d'Accompagnement à Domicile (SAAD) pour prendre en compte la perte d'autonomie et les situations de handicap. Il s'agit d'accompagner au quotidien et de façon personnalisée chaque bénéficiaire dans son environnement.",
  },
  {
    date: "2008 - 2010",
    title: "Phase de réflexion",
    description:
      "Un groupe de directeurs de CCAS porteur de SAAD publics et issu du comité de directeurs de l'UDCCAS a réfléchi à la mise en place d'un groupement pour mutualiser les forces et permettre aux services d'aide à domicile de continuer à exercer.",
  },
  {
    date: "2010",
    title: "Création du réseau",
    description:
      "Naissance du Réseau Public Départemental d'Aide à Domicile (RPDAD). Dans un premier temps, le réseau a été porté par l'UDCCAS, constituant sa branche médico-sociale (établissement de l'UDCCAS).",
  },
  {
    date: "2011",
    title: "Création du GCSMS",
    description:
      "Le département et la direction des finances publiques demandaient la création d'un GCSMS adossé à l'UDCCAS pour sécuriser juridiquement les flux financiers publics.",
  },
  {
    date: "2011 - 2024",
    title: "Structuration progressive",
    description:
      "Depuis plus de 10 ans, la structuration progressive du réseau a répondu sans conteste aux objectifs fixés. Le réseau est reconnu pour sa compétence et satisfait globalement les membres du réseau.",
  },
  {
    date: "2025",
    title: "Le RPDAD aujourd'hui",
    description:
      "Le réseau compte 33 services membres. Il accompagne près de 5000 personnes âgées et personnes en situation de handicap avec 1200 agents et intervient sur 194 communes de Gironde.",
  },
]

export const HistoryAbout = ({ className }: { className?: string }) => {
  return (
    <>
      <section className={cn("py-16", className)}>
        <div className="container mx-auto px-6 pt-20 pb-16 md:pt-16 md:pb-20 lg:pt-16 lg:pb-20 xl:pb-20">
          <div className="container pb-8">
            <div className="mx-[-15px] !mt-[-50px] !mb-24 flex flex-wrap items-center md:mx-[-20px] md:!mb-[8rem] lg:mx-[-20px] lg:!mb-[8rem] xl:mx-[-35px] xl:!mb-[8rem]">
              <div className="!mx-auto !mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-8/12 md:!px-[20px] lg:w-6/12 lg:!px-[20px] xl:w-6/12 xl:!px-[35px]">
                <div className="img-mask mask-3 xxl:!px-5">
                  <div className="relative h-96 w-full overflow-hidden rounded-lg bg-gradient-to-r from-gray-200 to-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-medium text-gray-500">
                        Image
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <SectionContent
                title="Notre Histoire"
                paragraphs={[
                  "👋 Hello! I'm Camille, a multidisciplinary product designer 🧸 based in New York City 🚕. I'm very passionate about the work 💌 that I do.",
                  "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa justo sit amet risus.",
                  "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur.",
                ]}
                buttonText="En savoir plus"
                buttonHref="#"
                buttonIcon={<ArrowUpRight />}
              />
            </div>
          </div>
        </div>
        {/* ----------------------------- */}
        <div>
          <div className="container mx-auto px-6">
            {/* /.row */}
            <div className="mx-[-15px] flex flex-wrap items-start">
              <div
                className="mb-10 w-full max-w-2xl flex-[0_0_auto] lg:!sticky lg:w-5/12 xl:!sticky xl:w-5/12"
                style={{ top: "8rem" }}
              >
                <SectionContent
                  className="sticky top-20 w-full max-w-full px-6 lg:!sticky lg:w-full lg:px-0 xl:w-full xl:px-0"
                  title="Notre Histoire"
                  paragraphs={[
                    "Découvrez les étapes clés du développement du Réseau Public Départemental d'Aide à Domicile de la Gironde depuis sa création",
                    "Depuis sa création, le réseau a connu une évolution remarquable et maintient un engagement ferme pour l'excellence des services d'aide à domicile, répondant aux besoins spécifiques de tous les Girondins avec professionnalisme et bienveillance.",
                  ]}
                  buttonText="En savoir plus"
                  buttonHref="#"
                  buttonIcon={<ArrowUpRight />}
                />
              </div>
              {/* /column */}
              <div className="!ml-auto w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-6/12 xl:w-7/12">
                <Timeline items={timelineData} />
              </div>
              {/* /column */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
