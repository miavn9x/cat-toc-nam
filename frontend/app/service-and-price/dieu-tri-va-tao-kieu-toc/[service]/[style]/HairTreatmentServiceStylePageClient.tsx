"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataService } from "../../../../../lib/data-service";
import { useState, useEffect } from "react";

export default function HairTreatmentServiceStylePageClient({
  params,
}: {
  params: { service: string; style: string };
}) {
  const serviceData = DataService.getService("hair-treatments", params.service);
  const styleData = DataService.getStyle(
    "hair-treatments",
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
    "hair-treatments",
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
  });

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
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 pb-3 sm:pb-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500 overflow-x-auto">
            <li>
              <Link href="/" className="hover:text-amber-600 transition-colors">
                Trang chủ
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
                className="ml-2 hover:text-amber-600 transition-colors"
              >
                Dịch vụ
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
                href="/service-and-price/dieu-tri-va-tao-kieu-toc"
                className="ml-2 hover:text-amber-600 transition-colors"
              >
                Điều trị & tạo kiểu tóc
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
                href={`/service-and-price/dieu-tri-va-tao-kieu-toc/${params.service}`}
                className="ml-2 hover:text-amber-600 transition-colors"
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
              <span className="ml-2 text-amber-600 font-medium">
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 mb-4">
                <span className="text-sm bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-medium">
                  {serviceData.subtitle}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-3 sm:mb-4 md:mb-6 leading-tight">
                {styleData.name}
              </h1>

              <div className="flex flex-col xs:flex-row sm:flex-row items-start xs:items-center sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  {serviceData.price}
                </span>
                {styleData.popular && (
                  <span className="px-2 sm:px-3 py-1 bg-amber-100 text-amber-600 text-xs sm:text-sm rounded-full border border-amber-200">
                    Phổ biến
                  </span>
                )}
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {styleData.description}
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-gray-500">Độ khó:</span>
                  <span className="text-amber-600 font-medium">
                    {styleData.difficulty}
                  </span>
                </div>
                {styleData.maintenance && (
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="text-gray-500">Bảo dưỡng:</span>
                    <span className="text-amber-600 font-medium">
                      {styleData.maintenance}
                    </span>
                  </div>
                )}
                {styleData.faceShape && styleData.faceShape.length > 0 && (
                  <div className="text-sm sm:text-base">
                    <span className="text-gray-500">Khuôn mặt phù hợp: </span>
                    <span className="text-amber-600 font-medium">
                      {styleData.faceShape.join(", ")}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  href="/booking"
                  className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-300/30 transition-all text-center transform hover:scale-105"
                >
                  Đặt Lịch Điều Trị
                </Link>
                <Link
                  href="/lien-he"
                  className="px-8 py-3 border-2 border-amber-300 text-amber-600 rounded-full hover:bg-amber-50 transition-all text-center"
                >
                  Liên Hệ Tư Vấn
                </Link>
              </div>
            </div>

            {/* Style Image Gallery */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                {/* Main Image - Clickable to open modal */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group border border-amber-100">
                  <img
                    src={
                      styleData.images[selectedImage] ||
                      "/placeholder.svg?height=600&width=400" ||
                      "/placeholder.svg"
                    }
                    alt={`${styleData.name} - Hình chính`}
                    className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                    onClick={() => openModal(selectedImage)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent"></div>

                  {/* Zoom indicator */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <svg
                      className="w-5 h-5 text-amber-600"
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
                            ? "border-amber-400 shadow-lg"
                            : "border-amber-100 hover:border-amber-300"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${styleData.name} - Góc ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-amber-500/10 hover:bg-amber-500/5 transition-colors"></div>
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
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-amber-100 shadow-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 mb-4 sm:mb-6">
              Về Dịch Vụ {serviceData.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {serviceData.longDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg font-medium text-amber-600 mb-4">
                  Dịch Vụ Bao Gồm
                </h3>
                <ul className="space-y-4">
                  {serviceData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                <h3 className="text-lg font-medium text-amber-600 mb-4">
                  Lợi Ích
                </h3>
                <ul className="space-y-4">
                  {serviceData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-3 sm:mb-4">
                Các Phương Pháp Điều Trị Khác
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
                Khám phá các phương pháp điều trị khác trong dịch vụ{" "}
                {serviceData.title.toLowerCase()}
              </p>

              {/* Show All Button */}
              {relatedStyles.length > 8 && (
                <button
                  onClick={() => setShowAllStyles(!showAllStyles)}
                  className="inline-flex items-center px-6 py-3 border-2 border-amber-300 text-amber-600 rounded-full hover:bg-amber-50 transition-all duration-300 mb-8"
                >
                  {showAllStyles ? (
                    <>
                      Thu gọn
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
                      Xem tất cả {relatedStyles.length} phương pháp
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
                  href={`/service-and-price/dieu-tri-va-tao-kieu-toc/${params.service}/${s.id}`}
                  key={index}
                  className="group block"
                >
                  <div className="bg-white rounded-xl overflow-hidden border border-amber-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
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
                          <span className="px-2 py-1 bg-amber-500 text-white text-xs rounded-full shadow-lg">
                            Phổ biến
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="text-sm sm:text-lg font-medium text-gray-800 group-hover:text-amber-600 transition-colors mb-2 line-clamp-1">
                        {s.name}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 mb-3">
                        {s.description}
                      </p>
                      <div className="space-y-1 sm:space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Độ khó:</span>
                          <span className="text-amber-600">{s.difficulty}</span>
                        </div>
                        {s.maintenance && (
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-400">Bảo dưỡng:</span>
                            <span className="text-amber-600">
                              {s.maintenance}
                            </span>
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
      )}

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-amber-200 shadow-xl">
            <h2 className="text-2xl sm:text-4xl font-light text-gray-800 mb-6">
              Sẵn Sàng Trải Nghiệm {styleData.name}?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Đặt lịch ngay hôm nay để trải nghiệm phương pháp {styleData.name}{" "}
              trong dịch vụ {serviceData.title.toLowerCase()} tại Winchair
              Beauty Spa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-300/30 transition-all transform hover:scale-105"
              >
                Đặt Lịch Điều Trị
              </Link>
              <Link
                href="/lien-he"
                className="px-8 py-3 border-2 border-amber-300 text-amber-600 rounded-full hover:bg-amber-50 transition-all"
              >
                Liên Hệ Tư Vấn
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
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm border border-amber-200 rounded-full flex items-center justify-center text-amber-600 hover:bg-white transition-all shadow-lg"
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
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-amber-200 rounded-full flex items-center justify-center text-amber-600 hover:bg-white transition-all z-10 shadow-lg"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-amber-200 rounded-full flex items-center justify-center text-amber-600 hover:bg-white transition-all z-10 shadow-lg"
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
                alt={`${styleData.name} - Hình ${modalImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Image counter */}
              {styleData.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-amber-600 text-sm font-medium shadow-lg">
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
                        ? "border-amber-400"
                        : "border-amber-200 opacity-60 hover:opacity-100"
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
