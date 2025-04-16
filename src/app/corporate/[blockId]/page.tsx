import { ContentOne, ContentThree, ContentTwo } from "@/blocks/contents"
import { FeatureOne } from "@/blocks/features"
import Blocks from "@/data/blocks-data"

type Params = {
  params: Promise<{ blockId: string }>
}

const CorporateBlockPage = async ({ params }: Params) => {
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
    <div className="container mx-auto flex flex-col gap-4 py-16 lg:py-24">
      {block.title === "Features" && (
        <div className="">
          <FeatureOne />
        </div>
      )}
      {block.title === "Content" && (
        <div className="">
          <ContentOne />
          <ContentTwo />
          <ContentThree />
        </div>
      )}
    </div>
  )
}

export default CorporateBlockPage
