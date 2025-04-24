import Emplois from "@/data/emploi"
import { HeroSelector } from "@/sections/Hero"

export default async function EmploiLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ emploiId: string }>
}>) {
  const { emploiId } = await params
  const emploi = Emplois.find((emploi) => emploi.id === emploiId)
  if (!emploi) {
    return (
      <div className="flex min-h-lvh flex-1 items-center justify-center">
        <h1 className="text-7xl font-bold">Block not found 🤔</h1>
      </div>
    )
  }

  return (
    <main className="flex-1">
      <HeroSelector
        variant="mini"
        title={emploi?.titre}
        description={emploi?.contrat}
      />

      {children}
    </main>
  )
}
