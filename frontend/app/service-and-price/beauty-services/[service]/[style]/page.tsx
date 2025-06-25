import { DataService } from "../../../../../lib/data-service"
import { notFound } from "next/navigation"
import EstheticStylePageClient from "./EstheticStylePageClient"
import type { Metadata } from "next"

// Generate static parameters for the dynamic route
export async function generateStaticParams() {
  const category = DataService.getCategory("esthetic-services")
  if (!category) return []

  const params: { service: string; style: string }[] = []

  Object.keys(category.services).forEach((serviceId) => {
    const styles = DataService.getServiceStyles("esthetic-services", serviceId)
    styles.forEach((style) => {
      params.push({ service: serviceId, style: style.id })
    })
  })

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; style: string }>
}): Promise<Metadata> {
  const { service, style } = await params
  const serviceData = DataService.getService("esthetic-services", service)
  const styleData = DataService.getStyle("esthetic-services", service, style)

  if (!serviceData || !styleData) {
    return {
      title: "Style Not Found",
    }
  }

  return {
    title: `${styleData.name} - ${serviceData.title} - Winchair Beauty Spa`,
    description: styleData.description,
    keywords: `${styleData.name}, ${serviceData.title}, cosmetic services, Winchair Beauty Spa`,
  }
}

export default async function EstheticStylePage({
  params,
}: {
  params: Promise<{ service: string; style: string }>
}) {
  const { service, style } = await params

  // Verify both service and style exist
  const serviceData = DataService.getService("esthetic-services", service)
  const styleData = DataService.getStyle("esthetic-services", service, style)

  if (!serviceData || !styleData) {
    notFound()
  }

  return <EstheticStylePageClient params={{ service, style }} />
}
