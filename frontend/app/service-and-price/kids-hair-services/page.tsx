"use client";
import Link from "next/link";
import Head from "next/head";
import { DataService } from "../../../lib/data-service";

const KidsHairServicesPage = () => {
  const category = DataService.getCategory("kids-hair");

  if (!category) {
    return <div>Category not found</div>;
  }

  const services = Object.values(category.services).map((service) => ({
    ...service,
    styleCount: DataService.getStyleCount("kids-hair", service.id),
    image: service.images[0] || "/placeholder.svg?height=400&width=600",
  }));

  return (
    <>
      <Head>
        <title>
          Baby Hair Services - Winchair Beauty Spa | Fun, Safe, Professional
        </title>
        <meta
          name="description"
          content="Boys and Girls Haircuts at Winchair Beauty Spa - Safe, Fun, Professional, Starting at $25. Happy Hair, Happy Parents in Etobicoke, Ontario."
        />
        <meta
          name="keywords"
          content="kids haircuts, boys haircuts, girls haircuts, Etobicoke kids hair salon, Winchair Beauty Spa"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-blue-200/30 to-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-200/30 to-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-br from-yellow-200/20 to-orange-300/20 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-purple-200/50 mb-6 sm:mb-8 shadow-sm">
                <span className="text-purple-600 font-medium text-xs sm:text-sm tracking-wider uppercase">
                  🌈 For Babies
                </span>
              </div>

              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extralight text-gray-800 leading-tight mb-6 sm:mb-8">
                {category.title}
                <span className="block text-lg sm:text-3xl lg:text-4xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-light mt-2 sm:mt-4">
                  {category.tagline}
                </span>
              </h1>

              <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
                {category.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link
                  href="/booking"
                  className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-300/30 transition-all transform hover:scale-105"
                >
                  Schedule Your Baby
                </Link>
                <Link
                  href="/contact"
                  className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-purple-300 text-purple-600 rounded-full hover:bg-purple-50 transition-all"
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
                  href={`/service-and-price/kids-hair-services/${service.id}`}
                  key={index}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-100 hover:border-purple-200 hover:shadow-xl transition-all duration-500 h-full shadow-lg">
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
                          <h2 className="text-lg sm:text-2xl font-light text-gray-800 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">
                            {service.title}
                          </h2>
                          <p className="text-gray-500 text-xs sm:text-sm italic">
                            {service.subtitle}
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="text-xl sm:text-2xl font-light bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
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
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-50 border border-purple-200 text-purple-600"
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
                          <span className="text-purple-500 text-sm font-medium">
                            {service.styleCount > 0
                              ? `See ${service.styleCount} hair style`
                              : "See details"}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2 text-purple-500"
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
        <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-800 mb-6">
                Why Choose Our Baby Hair Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-3xl mb-4">🎈</div>
                  <h3 className="text-lg font-medium text-purple-600 mb-3">
                    Fun & Safety
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Friendly, fun environment for children. Use safe,
                    child-friendly tools.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-3xl mb-4">👶</div>
                  <h3 className="text-lg font-medium text-purple-600 mb-3">
                    Professional
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The stylist team has experience with children, understands
                    their psychology and how to work with them.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-3xl mb-4">😊</div>
                  <h3 className="text-lg font-medium text-purple-600 mb-3">
                    Happy Parents
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Happy baby, peace of mind for parents. Fast, quality service
                    at reasonable prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Features */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-purple-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-800 mb-6">
                Special Experiences for Kids
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-lg">
                  <div className="text-4xl mb-3">🎮</div>
                  <h3 className="text-sm font-medium text-blue-600 mb-2">
                    Car Barber Chair
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Fun car shaped barber chair for boys
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-pink-100 shadow-lg">
                  <div className="text-4xl mb-3">🎀</div>
                  <h3 className="text-sm font-medium text-pink-600 mb-2">
                    Princess Chair
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Cute princess barber chair for girls
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-green-100 shadow-lg">
                  <div className="text-4xl mb-3">📺</div>
                  <h3 className="text-sm font-medium text-green-600 mb-2">
                    Watch Cartoons
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Baby can watch cartoons while getting haircut
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-yellow-100 shadow-lg">
                  <div className="text-4xl mb-3">🎁</div>
                  <h3 className="text-sm font-medium text-yellow-600 mb-2">
                    Small Gift
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Each child will receive a small gift.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-purple-100 to-pink-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-purple-200 shadow-xl">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-800 mb-6">
                Ready for a Fun Experience?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Book your appointment today for a fun and safe haircut
                experience at Winchair Beauty Spa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-300/30 transition-all transform hover:scale-105"
                >
                  Schedule Your Baby
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-purple-300 text-purple-600 rounded-full hover:bg-purple-50 transition-all"
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

export default KidsHairServicesPage;
