import BlogSection from "@/components/blog-content/content-blog"
import { getServiceBySlug } from "@/lib/services"

const ServicesMembres = async ({ params }: { params: { slug: string } }) => {
  const service = (await getServiceBySlug(params.slug)?.name) || `CCAS/CIAS `
  return (
    <div>
      <BlogSection service={service} />
    </div>
  )
}

export default ServicesMembres
