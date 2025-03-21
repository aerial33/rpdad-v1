import BlogSection from "@/components/blog-content/content-blog"
import { getServiceBySlug } from "@/lib/services"

export default async function ServiceMembrePage({
  params,
}: {
  params: { slug: string }
}) {
  const service = getServiceBySlug(params.slug)
  const serviceName = service?.name || `CCAS/CIAS ${params.slug}`

  return (
    <div className="container mx-auto py-8">
      <BlogSection service={serviceName} />
    </div>
  )
}
