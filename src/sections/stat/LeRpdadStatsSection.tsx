import { StatsSection } from "@/sections/stat/statistic"

export function LeRpdadStatsSection() {
  return (
    <StatsSection
      image={{
        src: "/about-9.jpg",
        alt: "Statistic",
      }}
      badgeText="Editorial"
      title="Se fédérer pour exister, résister, s'améliorer et innover"
      description="Le Réseau Public Départemental d'Aide à Domicile de la Gironde accompagne près de 5000 personnes âgées et personnes en situation de handicap qui choisissent de vivre à domicile."
      stats={[
        { value: "33", label: "CCAS et CIAS membres", showDot: true },
        { value: "+1200", label: "Professionnels de terrain" },
        { value: "700 000", label: "Heures réalisées", showDot: true },
        { value: "194", label: "Communes d'intervention" },
      ]}
    />
  )
}
