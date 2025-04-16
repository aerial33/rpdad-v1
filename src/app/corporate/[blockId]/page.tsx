type Params = {
  params: Promise<{ blockId: string }>
}

const CorporateBlockPage = async ({ params }: Params) => {
  const { blockId } = await params

  if (blockId === "features") {
    return <div>Features</div>
  } else if (blockId === "about") {
    return <div>About</div>
  } else if (blockId === "contact") {
    return <div>Contact</div>
  } else if (blockId === "call-to-action") {
    return <div>Call to Action</div>
  } else if (blockId === "blog") {
    return <div>Blog</div>
  }

  return <div>Not found</div>
}

export default CorporateBlockPage
