"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataService } from "../../../../lib/data-service";
import { useState, useCallback } from "react";

export default function KidsServicePageClient({
  params,
}: {
  params: { service: string };
}) {
  const serviceData = DataService.getService("kids-hair", params.service);
  const [selectedImage, setSelectedImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!serviceData) {
    notFound();
  }

  const popularStyles = DataService.getPopularStyles(
    "kids-hair",
    params.service
  );
  const allStyles = DataService.getServiceStyles("kids-hair", params.service);

  const maxPopularStyles = 10;
  const displayedPopularStyles = popularStyles.slice(0, maxPopularStyles);
  const stylesPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const nextSlide = useCallback(() => {
    const maxSlides = Math.ceil(
      displayedPopularStyles.length / stylesPerSlide.desktop
    );
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  }, [displayedPopularStyles.length, stylesPerSlide.desktop]);

  const prevSlide = useCallback(() => {
    const maxSlides = Math.ceil(
      displayedPopularStyles.length / stylesPerSlide.desktop
    );
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  }, [displayedPopularStyles.length, stylesPerSlide.desktop]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 pb-3 sm:pb-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500 overflow-x-auto">
            <li>
              <Link
                href="/"
                className="hover:text-purple-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                className="h-4 w-4 text-gray-400"
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
              <Link
                href="/service-and-price"
                className="ml-2 hover:text-purple-600 transition-colors"
              >
                Service
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                className="h-4 w-4 text-gray-400"
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
              <Link
                href="/service-and-price/kids-hair-services"
                className="ml-2 hover:text-purple-600 transition-colors"
              >
                Baby hair service
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                className="h-4 w-4 text-gray-400"
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
              <span className="ml-2 text-purple-600 font-medium">
                {serviceData.title}
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
            <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 md:space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/50 mb-4">
                <span className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
                  {serviceData.subtitle}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-3 sm:mb-4 md:mb-6 leading-tight">
                {serviceData.title}
              </h1>

              <div className="flex items-center mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {serviceData.price}
                </span>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {serviceData.longDescription}
              </p>

              <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 md:gap-6">
                <Link
                  href="/booking"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-300/30 transition-all text-center text-sm sm:text-base transform hover:scale-105"
                >
                  Schedule Your Baby
                </Link>
                <Link
                  href="/contact"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-purple-300 text-purple-600 rounded-full hover:bg-purple-50 transition-all text-center text-sm sm:text-base"
                >
                  Contact for consultation
                </Link>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="order-1 lg:order-2">
              <div className="space-y-3 sm:space-y-4">
                {/* Main Image */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl cursor-pointer group border border-purple-100">
                  <img
                    src={
                      serviceData.images[selectedImage] ||
                      "/placeholder.svg?height=400&width=600" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt={`${serviceData.title} - Main image`}
                    className="w-full h-auto aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>

                  {/* Zoom indicator */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Thumbnail Images */}
                {serviceData.images.length > 1 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3">
                    {serviceData.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative rounded-md sm:rounded-lg overflow-hidden aspect-square transition-all duration-300 border-2 ${
                          selectedImage === index
                            ? "border-purple-400 shadow-lg"
                            : "border-purple-100 hover:border-purple-300"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${serviceData.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-purple-500/10 hover:bg-purple-500/5 transition-colors"></div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Styles Carousel */}
      {allStyles.length > 0 && displayedPopularStyles.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-3 sm:mb-4">
                Popular Hairstyles For Kids
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                Most popular hairstyles for service{" "}
                {serviceData.title.toLowerCase()}
              </p>
            </div>

            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {Array.from({
                    length: Math.ceil(
                      displayedPopularStyles.length / stylesPerSlide.desktop
                    ),
                  }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {displayedPopularStyles
                          .slice(
                            slideIndex * stylesPerSlide.desktop,
                            (slideIndex + 1) * stylesPerSlide.desktop
                          )
                          .map((style, index) => (
                            <Link
                              href={`/service-and-price/kids-hair-services/${serviceData.id}/${style.id}`}
                              key={index}
                              className="group block"
                            >
                              <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden border border-purple-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
                                <div className="aspect-[3/4] overflow-hidden">
                                  <img
                                    src={
                                      style.images[0] ||
                                      "/placeholder.svg?height=600&width=400" ||
                                      "/placeholder.svg" ||
                                      "/placeholder.svg"
                                    }
                                    alt={style.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                                <div className="p-2.5 sm:p-3 md:p-4">
                                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-800 group-hover:text-purple-600 transition-colors line-clamp-1">
                                      {style.name}
                                    </h3>
                                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-100 text-purple-600 text-xs rounded-full flex-shrink-0">
                                      Popular
                                    </span>
                                  </div>
                                  <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3">
                                    {style.description}
                                  </p>
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-400">
                                      Difficulty: {style.difficulty}
                                    </span>
                                    <span className="text-gray-400">
                                      Age: {style.ageRange || "N/A"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              {displayedPopularStyles.length > stylesPerSlide.desktop && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white border border-purple-200 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 hover:shadow-lg transition-all duration-300 z-10"
                    aria-label="Previous slide"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white border border-purple-200 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 hover:shadow-lg transition-all duration-300 z-10"
                    aria-label="Next slide"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {displayedPopularStyles.length > stylesPerSlide.desktop && (
                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({
                    length: Math.ceil(
                      displayedPopularStyles.length / stylesPerSlide.desktop
                    ),
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-purple-500"
                          : "bg-purple-200 hover:bg-purple-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Features & Benefits */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-100 shadow-lg">
              <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 mb-4 sm:mb-6">
                Services Included
              </h2>
              <ul className="space-y-4">
                {serviceData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-100 shadow-lg">
              <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 mb-4 sm:mb-6">
                Benefit
              </h2>
              <ul className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-purple-200 shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4 sm:mb-6">
              Ready to Experience {serviceData.title}?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your appointment today for a fun and safe haircut experience{" "}
              {allStyles.length > 0
                ? `with ${allStyles.length} variety of hairstyles`
                : ""}{" "}
              at Winchair Beauty Spa.
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
  );
}
