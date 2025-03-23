import BlogSection from "@/components/blog-content/content-blog"
import { getServiceBySlug } from "@/lib/services"

export default async function ServiceMembrePage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  // Accéder au premier élément du tableau slug
  const slugValue = (await params).slug[0] // 'Ar%C3%A8s'

  // Décoder l'URL
  const decodedSlug = decodeURIComponent(slugValue) // 'Arès'

  // Récupérer les informations du service à partir du slug décodé
  const service = getServiceBySlug(decodedSlug)
  const serviceName = service?.name || `CCAS/CIAS ${decodedSlug}`

  return (
    <div className="container mx-auto py-8">
      <BlogSection service={serviceName} />
    </div>
  )
}
