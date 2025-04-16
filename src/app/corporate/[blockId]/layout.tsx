import Link from "next/link"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Blocks from "@/data/blocks-data"
import { HeroSelector } from "@/sections/Hero"

export default async function CorporateLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ blockId: string }>
}>) {
  const { blockId } = await params
  const block = Blocks.find((block) => block.title.toLowerCase() === blockId)
  if (!block) {
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
        title={block?.title}
        description={block?.description}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-12 md:grid-cols-2 lg:grid-cols-3 lg:px-0 lg:py-24">
        {Blocks.map((block) => (
          <Link href={block.link} key={block.id}>
            <Card className="to-primary-lightest border-flamingo hover:to-primary-lighter h-auto bg-gradient-to-b from-white transition-colors duration-300 hover:bg-gradient-to-b hover:shadow-md">
              <CardHeader>
                <CardTitle>{block.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {children}
    </main>
  )
}
