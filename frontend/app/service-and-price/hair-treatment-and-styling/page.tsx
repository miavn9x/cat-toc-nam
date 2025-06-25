"use client";
import Link from "next/link";
import Head from "next/head";
import { DataService } from "../../../lib/data-service";

const HairTreatmentServicesPage = () => {
  const category = DataService.getCategory("hair-treatments");

  if (!category) {
    return <div>Category not found</div>;
  }

  const services = Object.values(category.services).map((service) => ({
    ...service,
    styleCount: DataService.getStyleCount("hair-treatments", service.id),
    image: service.images[0] || "/placeholder.svg?height=400&width=600",
  }));

  return (
    <>
      <Head>
        <title>
          Hair Treatments & Styling - Winchair Beauty Spa | Healthy, Radiant
          Hair
        </title>
        <meta
          name="description"
          content="Professional hair treatments and styling at Winchair Beauty Spa - Shampoo, Conditioner, Scalp Massage starting at $20. Healthy, beautiful hair, natural radiance in Etobicoke, Ontario."
        />
        <meta
          name="keywords"
          content="hair treatment, hair styling, shampoo, hair conditioning, scalp massage, Winchair Beauty Spa Etobicoke"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-orange-200/30 to-amber-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-amber-200/30 to-yellow-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-br from-yellow-200/20 to-orange-300/20 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-amber-200/50 mb-6 sm:mb-8 shadow-sm">
                <span className="text-amber-600 font-medium text-xs sm:text-sm tracking-wider uppercase">
                  ✨ Healthier Hair, Effortless Glow!
                </span>
              </div>

              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extralight text-gray-800 leading-tight mb-6 sm:mb-8">
                {category.title}
                <span className="block text-lg sm:text-3xl lg:text-4xl bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-light mt-2 sm:mt-4">
                  {category.tagline}
                </span>
              </h1>

              <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
                {category.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link
                  href="/booking"
                  className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-300/30 transition-all transform hover:scale-105"
                >
                  Book Hair Treatment
                </Link>
                <Link
                  href="/contact"
                  className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-amber-300 text-amber-600 rounded-full hover:bg-amber-50 transition-all"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {services.map((service, index) => (
                <Link
                  href={`/service-and-price/hair-treatment-and-styling/${service.id}`}
                  key={index}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-100 hover:border-amber-200 hover:shadow-xl transition-all duration-500 h-full shadow-lg">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6">
                        <div className="mb-3 sm:mb-0">
                          <h2 className="text-lg sm:text-2xl font-light text-gray-800 mb-1 sm:mb-2 group-hover:text-amber-600 transition-colors">
                            {service.title}
                          </h2>
                          <p className="text-gray-500 text-xs sm:text-sm italic">
                            {service.subtitle}
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="text-xl sm:text-2xl font-light bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                            {service.price}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base line-clamp-3">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features
                          .slice(0, 2)
                          .map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-amber-50 border border-amber-200 text-amber-600"
                            >
                              {feature}
                            </span>
                          ))}
                        {service.features.length > 2 && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-50 border border-gray-200 text-gray-600">
                            +{service.features.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-amber-500 text-sm font-medium">
                            {service.styleCount > 0
                              ? `See ${service.styleCount} kiểu`
                              : "See details"}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2 text-amber-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        {service.styleCount > 0 && (
                          <div className="text-gray-400 text-xs">
                            {service.styleCount} style
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-800 mb-6">
                Why Choose Our Hair Treatment Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 border border-amber-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-3xl mb-4">💆‍♀️</div>
                  <h3 className="text-lg font-medium text-amber-600 mb-3">
                    Professional
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A team of experienced experts with modern and effective hair
                    treatments.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-amber-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-3xl mb-4">✨</div>
                  <h3 className="text-lg font-medium text-amber-600 mb-3">
                    High Quality Products
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Use high-quality hair care products that are safe and
                    suitable for all hair types.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-amber-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-3xl mb-4">🌟</div>
                  <h3 className="text-lg font-medium text-amber-600 mb-3">
                    Long Lasting Results
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The treatment provides long-lasting results, leaving hair
                    healthy and radiant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Benefits */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-800 mb-6">
                Benefits of Hair Treatment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 border border-orange-100 shadow-lg">
                  <div className="text-4xl mb-3">🧴</div>
                  <h3 className="text-sm font-medium text-orange-600 mb-2">
                    Deep Nourishment
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Provides essential nutrients for hair from root to tip
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-amber-100 shadow-lg">
                  <div className="text-4xl mb-3">💧</div>
                  <h3 className="text-sm font-medium text-amber-600 mb-2">
                    Optimal Moisturizing
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Restores natural moisture, leaving hair soft, smooth and
                    shiny
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-yellow-100 shadow-lg">
                  <div className="text-4xl mb-3">🌿</div>
                  <h3 className="text-sm font-medium text-yellow-600 mb-2">
                    Maximum Relaxation
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Scalp massage helps relax and improve blood circulation
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-orange-100 shadow-lg">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-sm font-medium text-orange-600 mb-2">
                    Damage Recovery
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Repairs hair damaged by chemicals, heat and environmental
                    influences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-amber-100 to-orange-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-amber-200 shadow-xl">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-800 mb-6">
                Ready for Healthy Hair?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Book your appointment today to experience professional hair
                treatments at Winchair Beauty Spa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-300/30 transition-all transform hover:scale-105"
                >
                  Book Hair Treatment
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-amber-300 text-amber-600 rounded-full hover:bg-amber-50 transition-all"
                >
                  Contact for consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HairTreatmentServicesPage;
