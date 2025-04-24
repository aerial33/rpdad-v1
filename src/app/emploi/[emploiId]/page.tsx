import Emplois from "@/data/emploi"

type Params = {
  params: Promise<{ emploiId: string }>
}

export default async function EmploiPage({ params }: Params) {
  const { emploiId } = await params
  const emploi = Emplois.find((emploi) => emploi.id === emploiId)
  return (
    <div className="mx-auto max-w-7xl py-16">
      <h1 className="text-4xl font-bold">{emploi?.titre}</h1>
      <p className="text-lg">{emploi?.description}</p>
      {/* <BlogSection
        title={emploi?.titre}
        description={emploi?.description}
        image={emploi?.image}
        date={emploi?.date}
      /> */}
    </div>
  )
}
