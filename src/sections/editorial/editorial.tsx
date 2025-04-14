import { ArrowRight } from "lucide-react"

import Link from "next/link"

import { FadeUp } from "@/components/motion/animations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function EditorialSection() {
  return (
    <FadeUp delay={0.7}>
      <section className="py-16">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="mb-14">
              <div className="mb-2">
                <Badge
                  variant="outline"
                  className="bg-flamingo-light py-1 tracking-wider text-white uppercase"
                >
                  Ce que nous faisons
                </Badge>
              </div>
              <h2 className="mb-6 text-4xl font-bold text-gray-700">
                Le service que nous offrons est <br />
                spécifiquement conçu pour <br />
                répondre à vos besoins.
              </h2>
              <p className="mb-4 max-w-2xl text-gray-600">
                Le RPDAD accompagne près de 5000 personnes âgées et personnes en
                situation de handicap qui choisissent de vivre à domicile. Les
                agents de la fonction publique vous aident et vous accompagnent
                dans les actes de la vie quotidienne.
              </p>

              <Button asChild className="mt-8">
                <Link href="le-rpdad">
                  {"Plus de détails sur le RPDAD"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="bg-yellow-lightest rounded-xl p-8 shadow">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-amber-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="4"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                      />
                      <text
                        x="12"
                        y="11"
                        fontSize="5"
                        textAnchor="middle"
                        fill="currentColor"
                        fontWeight="bold"
                      >
                        24
                      </text>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    Aide à domicile
                  </h3>
                  <p className="text-gray-600">
                    Notre réseau est composé de spécialistes de l'action sociale
                    qui vous accompagnent au quotidien et de façon personnalisée
                    dans votre environnement.
                  </p>
                </div>

                {/* Carte 2 */}
                <div className="bg-primary-lightest rounded-xl p-8 shadow">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-rose-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    Service de qualité reconnu
                  </h3>
                  <p className="text-gray-600">
                    Tous nos services sont détenteurs du label "Service d'aide à
                    Domicile" délivré par le Conseil Départemental de la
                    Gironde.
                  </p>
                </div>

                {/* Carte 3 */}
                <div className="bg-chateau-lightest rounded-xl p-8 shadow">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    Partenariats territoriaux
                  </h3>
                  <p className="text-gray-600">
                    Notre visibilité contribue à développer des partenariats sur
                    les territoires dans l'articulation entre social,
                    médico-social et sanitaire.
                  </p>
                </div>

                {/* Carte 4 */}
                <div className="bg-picton-blue-lightest rounded-xl p-8 shadow">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    Projets innovants
                  </h3>
                  <p className="text-gray-600">
                    Le développement de projets innovants nous permet de
                    moderniser l'organisation des services et de renforcer la
                    professionnalisation et la qualité de vie au travail des
                    agents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeUp>
  )
}
