//app/service-and-price/page.tsx
"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { DataService } from "../../lib/data-service";

export default function ServicePage() {
  const categories = DataService.getAllCategories();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Winchair Beauty Spa, we&apos;re not just about appointments;
            we&apos;re about delivering an amazing experience with expert care
            and top-quality products.
          </p>
        </div>

        {/* Men's Services */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Hair Services for Men
            </h3>
            <p className="text-gray-600 mt-2">Look Sharp, Live Smart!</p>
          </div>
          <p className="text-gray-700 mb-6">
            Guys, a great haircut is more than just a trim – it&apos;s a
            statement. At Winchair Beauty Spa, you&apos;re investing in quality
            and lasting style that truly pays off.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(categories["men-hair"].services).map(
              (service, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h4>
                    <span className="text-lg font-medium text-blue-600">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              )
            )}
          </div>
          <div className="mt-8 text-center">
            <Link href="/service-and-price/mens-hair-services">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Book Men&apos;s Service
              </Button>
            </Link>
          </div>
        </section>

        {/* Women's Services */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Hair Services for Women
            </h3>
            <p className="text-gray-600 mt-2">
              Effortless Beauty, Exceptional Value!
            </p>
          </div>
          <p className="text-gray-700 mb-6">
            Ladies, at Winchair Beauty Spa, we&apos;re all about transforming
            your hair into a beautiful, lasting asset.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(categories["women-hair"].services).map(
              (service, index) => (
                <div key={index} className="border-l-4 border-pink-500 pl-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h4>
                    <span className="text-lg font-medium text-pink-600">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              )
            )}
          </div>
          <div className="mt-8 text-center">
            <Link href="/service-and-price/womens-hair-services">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ec4899",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Book Women&apos;s Service
              </Button>
            </Link>
          </div>
        </section>

        {/* Kids' Services */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Hair Services for Kids
            </h3>
            <p className="text-gray-600 mt-2">Happy Hair, Happy Parents!</p>
          </div>
          <p className="text-gray-700 mb-6">
            At Winchair Beauty Spa, we make haircuts fun and comfortable for
            your little ones:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(categories["kids-hair"].services).map(
              (service, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h4>
                    <span className="text-lg font-medium text-purple-600">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              )
            )}
          </div>
          <div className="mt-8 text-center">
            <Link href="/service-and-price/dich-vu-toc-tre-em">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#9333ea",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Book Kids&apos; Service
              </Button>
            </Link>
          </div>
        </section>

        {/* Hair Treatments & Styling */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Hair Treatments & Styling
            </h3>
            <p className="text-gray-600 mt-2">
              Healthier Hair, Effortless Glow!
            </p>
          </div>
          <p className="text-gray-700 mb-6">
            Invest in the vitality of your hair with our specialized treatments
            at Winchair Beauty Spa:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(categories["hair-treatments"].services).map(
              (service, index) => (
                <div key={index} className="border-l-4 border-amber-500 pl-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h4>
                    <span className="text-lg font-medium text-amber-600">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              )
            )}
          </div>
          <div className="mt-8 text-center">
            <Link href="/service-and-price/hair-treatment-and-styling">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#d97706",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Book Hair Treatment
              </Button>
            </Link>
          </div>
        </section>

        {/* Esthetic Services */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Esthetic Services
            </h3>
            <p className="text-gray-600 mt-2">
              Radiance, Relaxation & Real Results!
            </p>
          </div>
          <p className="text-gray-700 mb-6">
            Our beauty services at Winchair Beauty Spa are designed to enhance
            your natural glow and promote well-being, all while offering
            exceptional value:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(categories["esthetic-services"].services).map(
              (service, index) => (
                <div key={index} className="border-l-4 border-emerald-500 pl-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h4>
                    <span className="text-lg font-medium text-emerald-600">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              )
            )}
          </div>
          <div className="mt-8 text-center">
            <Link href="/service-and-price/beauty-services">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#10b981",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Book Esthetic Service
              </Button>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-4">...And So Much More!</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We&apos;re always expanding our services to meet your beauty needs.
            Feel free to chat with our friendly front desk team for more info on
            our additional offerings.
          </p>
          <p className="mb-8 max-w-2xl mx-auto">
            At Winchair Beauty Spa, we&apos;re not just about appointments; we&apos;re
            about delivering an amazing experience. It&apos;s about expert care,
            top-quality products, a truly relaxing atmosphere, and making sure
            you leave feeling completely revitalized.
          </p>
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "#1f2937",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Book Your Appointment Today
          </Button>
        </section>
      </main>
    </div>
  );
}
