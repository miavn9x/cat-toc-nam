import { DataService } from "../../../../lib/data-service"
import { notFound } from "next/navigation"
import HairTreatmentServicePageClient from "./HairTreatmentServicePageClient"
import type { Metadata } from "next"

// Generate static parameters for all services
export async function generateStaticParams() {
  const category = DataService.getCategory("hair-treatments")
  if (!category) return []

  return Object.keys(category.services).map((serviceId) => ({
    service: serviceId,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>
}): Promise<Metadata> {
  const { service } = await params
  const serviceData = DataService.getService("hair-treatments", service)

  if (!serviceData) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${serviceData.title} - Winchair Beauty Spa`,
    description: serviceData.description,
    keywords: `${serviceData.title}, điều trị tóc, tạo kiểu tóc, Winchair Beauty Spa`,
  }
}

export default async function HairTreatmentServicePage({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service } = await params

  // Verify service exists
  const serviceData = DataService.getService("hair-treatments", service)

  if (!serviceData) {
    notFound()
  }

  return <HairTreatmentServicePageClient params={{ service }} />
}
