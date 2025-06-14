import { DataService } from "../../../../../lib/data-service";
import { notFound } from "next/navigation";
import WomenServiceStylePageClient from "./WomenServiceStylePageClient";
import type { Metadata } from "next";

// Generate static parameters for the dynamic route
export async function generateStaticParams() {
  const category = DataService.getCategory("women-hair");
  if (!category) return [];

  const params: { service: string; style: string }[] = [];

  Object.keys(category.services).forEach((serviceId) => {
    const styles = DataService.getServiceStyles("women-hair", serviceId);
    styles.forEach((style) => {
      params.push({ service: serviceId, style: style.id });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; style: string }>;
}): Promise<Metadata> {
  const { service, style } = await params;
  const serviceData = DataService.getService("women-hair", service);
  const styleData = DataService.getStyle("women-hair", service, style);

  if (!serviceData || !styleData) {
    return {
      title: "Style Not Found",
    };
  }

  return {
    title: `${styleData.name} - ${serviceData.title} - Winchair Beauty Spa`,
    description: styleData.description,
    keywords: `${styleData.name}, ${serviceData.title}, dịch vụ tóc nữ, Winchair Beauty Spa`,
  };
}

export default async function WomenServiceStylePage({
  params,
}: {
  params: Promise<{ service: string; style: string }>;
}) {
  const { service, style } = await params;

  // Verify both service and style exist
  const serviceData = DataService.getService("women-hair", service);
  const styleData = DataService.getStyle("women-hair", service, style);

  if (!serviceData || !styleData) {
    notFound();
  }

  return <WomenServiceStylePageClient params={{ service, style }} />;
}
