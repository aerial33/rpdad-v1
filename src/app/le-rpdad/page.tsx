import { HeroSelector } from "@/sections/Hero"
import NotreMission from "@/sections/features/NotreMission"

const LeRPDAD = () => {
  return (
    <div>
      <HeroSelector
        variant="logo"
        title="Le Réseau Public Départemental d'Aide à Domicile de la Gironde"
        description="La présentation du Réseau Public Départemental d'Aide à Domicile de la Gironde"
      />
      <NotreMission />
    </div>
  )
}
export default LeRPDAD
