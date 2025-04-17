import { HistoryAbout } from "@/blocks/about/HistoryAbout"
import { FeatureOne } from "@/blocks/features/FeatureOne"
import { HeroSelector } from "@/sections/Hero"

const LeRPDAD = () => {
  return (
    <div>
      <HeroSelector
        variant="logo"
        title="Le Réseau Public Départemental d'Aide à Domicile de la Gironde"
        description="La présentation du Réseau Public Départemental d'Aide à Domicile de la Gironde"
      />
      <FeatureOne />
      <HistoryAbout />
    </div>
  )
}
export default LeRPDAD
