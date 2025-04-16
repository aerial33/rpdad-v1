import Link from "next/link"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Blocks from "@/data/blocks-data"
import { HeroSelector } from "@/sections/Hero"

const CorporatePage = () => {
  return (
    <main className="flex-1">
      <HeroSelector
        variant="mini"
        title="Design and Composition"
        description="Blocks of text, images, and other elements are arranged to create a cohesive and visually appealing design."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-12 md:grid-cols-2 lg:grid-cols-3 lg:px-0 lg:py-24">
        {Blocks.map((block) => (
          <Link href={block.link} key={block.id}>
            <Card className="to-primary-lightest border-flamingo hover:to-primary-lighter h-auto bg-gradient-to-b from-white transition-colors duration-300 hover:bg-gradient-to-b hover:shadow-md">
              <CardHeader>
                <CardTitle>{block.title}</CardTitle>
                <CardDescription>{block.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
export default CorporatePage
