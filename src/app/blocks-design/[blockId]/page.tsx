import { HistoryAbout } from "@/blocks/about"
import {
  ContentFeature,
  ContentOne,
  ContentThree,
  ContentTwo,
} from "@/blocks/contents"
import { FeatureOne } from "@/blocks/features"
import { TeamsCaroussel } from "@/blocks/teams"
import BlogSection from "@/components/blog-content/content-blog"
import Blocks from "@/data/blocks-data"
import { FeatureBlog } from "@/sections/actualites/FeatureActu"
import { LeRpdadStatsSection } from "@/sections/stat/LeRpdadStatsSection"

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
          <LeRpdadStatsSection />
        </div>
      )}
      {block.title === "Content" && (
        <div className="">
          <ContentOne />
          <ContentTwo />
          <ContentThree />
          <ContentFeature />
        </div>
      )}
      {block.title === "About" && (
        <div className="">
          <HistoryAbout />
          <TeamsCaroussel />
        </div>
      )}
      {block.title === "Blog" && (
        <div className="">
          <FeatureBlog />
          <BlogSection />
        </div>
      )}
    </div>
  )
}

export default CorporateBlockPage
