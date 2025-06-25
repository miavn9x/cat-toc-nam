"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataService } from "../../../../../lib/data-service";
import { useState, useEffect } from "react";

export default function WomenServiceStylePageClient({
  params,
}: {
  params: { service: string; style: string };
}) {
  const serviceData = DataService.getService("women-hair", params.service);
  const styleData = DataService.getStyle(
    "women-hair",
    params.service,
    params.style
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllStyles, setShowAllStyles] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  if (!serviceData || !styleData) {
    notFound();
  }

  const relatedStyles = DataService.getServiceStyles(
    "women-hair",
    params.service
  ).filter((s) => s.id !== params.style);
  const displayedRelatedStyles = showAllStyles
    ? relatedStyles
    : relatedStyles.slice(0, 8);

  // Modal functions
  const openModal = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % styleData.images.length);
  };

  const prevModalImage = () => {
    setModalImageIndex(
      (prev) => (prev - 1 + styleData.images.length) % styleData.images.length
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        prevModalImage();
      } else if (e.key === "ArrowRight") {
        nextModalImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 pb-3 sm:pb-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500 overflow-x-auto">
            <li>
              <Link href="/" className="hover:text-pink-600 transition-colors">
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
                className="ml-2 hover:text-pink-600 transition-colors"
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
                href="/service-and-price/womens-hair-services"
                className="ml-2 hover:text-pink-600 transition-colors"
              >
                Women&#39;s Hair Services
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
                href={`/service-and-price/womens-hair-services/${params.service}`}
                className="ml-2 hover:text-pink-600 transition-colors"
              >
                {serviceData.title}
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
              <span className="ml-2 text-pink-600 font-medium">
                {styleData.name}
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200/50 mb-4">
                <span className="text-sm bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent font-medium">
                  {serviceData.subtitle}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-3 sm:mb-4 md:mb-6 leading-tight">
                {styleData.name}
              </h1>

              <div className="flex flex-col xs:flex-row sm:flex-row items-start xs:items-center sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  {serviceData.price}
                </span>
                {styleData.popular && (
                  <span className="px-2 sm:px-3 py-1 bg-pink-100 text-pink-600 text-xs sm:text-sm rounded-full border border-pink-200">
                    Popular
                  </span>
                )}
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {styleData.description}
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-gray-500">Difficulty:</span>
                  <span className="text-pink-600 font-medium">
                    {styleData.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-gray-500">Maintenance:</span>
                  <span className="text-pink-600 font-medium">
                    {styleData.maintenance}
                  </span>
                </div>
                <div className="text-sm sm:text-base">
                  <span className="text-gray-500">Fit: </span>
                  <span className="text-pink-600 font-medium">
                    {styleData.faceShape?.join(", ") || "Không xác định"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  href="/booking"
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-300/30 transition-all text-center transform hover:scale-105"
                >
                  Book Now
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-pink-300 text-pink-600 rounded-full hover:bg-pink-50 transition-all text-center"
                >
                  Contact for consultation
                </Link>
              </div>
            </div>

            {/* Style Image Gallery */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                {/* Main Image - Clickable to open modal */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group border border-pink-100">
                  <img
                    src={
                      styleData.images[selectedImage] ||
                      "/placeholder.svg?height=600&width=400" ||
                      "/placeholder.svg"
                    }
                    alt={`${styleData.name} - Main image`}
                    className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                    onClick={() => openModal(selectedImage)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent"></div>

                  {/* Zoom indicator */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <svg
                      className="w-5 h-5 text-pink-600"
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
                {styleData.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    {styleData.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative rounded-lg overflow-hidden aspect-square transition-all duration-300 border-2 ${
                          selectedImage === index
                            ? "border-pink-400 shadow-lg"
                            : "border-pink-100 hover:border-pink-300"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${styleData.name} - Corner ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-pink-500/10 hover:bg-pink-500/5 transition-colors"></div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-pink-100 shadow-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 mb-4 sm:mb-6">
            About Service {serviceData.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {serviceData.longDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg font-medium text-pink-600 mb-4">
                  Services Included
                </h3>
                <ul className="space-y-4">
                  {serviceData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
              <div>
                <h3 className="text-lg font-medium text-pink-600 mb-4">
                  Benefit
                </h3>
                <ul className="space-y-4">
                  {serviceData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
        </div>
      </section>

      {/* Related Styles with Show More */}
      {relatedStyles.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-3 sm:mb-4">
                Other Hairstyles
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
                Explore other hairstyles in the service{" "}
                {serviceData.title.toLowerCase()}
              </p>

              {/* Show All Button */}
              {relatedStyles.length > 8 && (
                <button
                  onClick={() => setShowAllStyles(!showAllStyles)}
                  className="inline-flex items-center px-6 py-3 border-2 border-pink-300 text-pink-600 rounded-full hover:bg-pink-50 transition-all duration-300 mb-8"
                >
                  {showAllStyles ? (
                    <>
                    Collapse
                      <svg
                        className="ml-2 h-4 w-4 transform rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      View all {relatedStyles.length} hair style
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {displayedRelatedStyles.map((s, index) => (
                <Link
                  href={`/service-and-price/womens-hair-services/${params.service}/${s.id}`}
                  key={index}
                  className="group block"
                >
                  <div className="bg-white rounded-xl overflow-hidden border border-pink-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <img
                        src={
                          s.images[0] || "/placeholder.svg?height=600&width=400"
                        }
                        alt={s.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {s.popular && (
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                          <span className="px-2 py-1 bg-pink-500 text-white text-xs rounded-full shadow-lg">
                            Popular
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="text-sm sm:text-lg font-medium text-gray-800 group-hover:text-pink-600 transition-colors mb-2 line-clamp-1">
                        {s.name}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 mb-3">
                        {s.description}
                      </p>
                      <div className="space-y-1 sm:space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Difficulty:</span>
                          <span className="text-pink-600">{s.difficulty}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Maintenance:</span>
                          <span className="text-pink-600">{s.maintenance}</span>
                        </div>
                        <div className="text-xs">
                          <span className="text-gray-400">Fit: </span>
                          <span className="text-pink-600 line-clamp-1">
                            {s.faceShape?.join(", ") || "Không xác định"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-pink-200 shadow-xl">
            <h2 className="text-2xl sm:text-4xl font-light text-gray-800 mb-6">
              Ready to Experience {styleData.name}?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your appointment today to experience the hairstyle {styleData.name}{" "}
              in service {serviceData.title.toLowerCase()} at Winchair
              Beauty Spa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-300/30 transition-all transform hover:scale-105"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-pink-300 text-pink-600 rounded-full hover:bg-pink-50 transition-all"
              >
                Contact for consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative container max-h-full w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm border border-pink-200 rounded-full flex items-center justify-center text-pink-600 hover:bg-white transition-all shadow-lg"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous button */}
            {styleData.images.length > 1 && (
              <button
                onClick={prevModalImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-pink-200 rounded-full flex items-center justify-center text-pink-600 hover:bg-white transition-all z-10 shadow-lg"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
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
            )}

            {/* Next button */}
            {styleData.images.length > 1 && (
              <button
                onClick={nextModalImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-pink-200 rounded-full flex items-center justify-center text-pink-600 hover:bg-white transition-all z-10 shadow-lg"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
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
            )}

            {/* Main modal image */}
            <div className="relative max-w-full max-h-full">
              <img
                src={styleData.images[modalImageIndex] || "/placeholder.svg"}
                alt={`${styleData.name} - Image ${modalImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Image counter */}
              {styleData.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-pink-600 text-sm font-medium shadow-lg">
                  {modalImageIndex + 1} / {styleData.images.length}
                </div>
              )}
            </div>

            {/* Thumbnail navigation */}
            {styleData.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                {styleData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setModalImageIndex(index)}
                    className={`w-12 h-12 rounded-md overflow-hidden transition-all border-2 ${
                      modalImageIndex === index
                        ? "border-pink-400"
                        : "border-pink-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
