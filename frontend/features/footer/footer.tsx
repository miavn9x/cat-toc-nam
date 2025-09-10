"use client";
import React from "react";

const Footer = () => {
  const services = [
    {
      category: "Men's Hair Services",
      items: [
        {
          name: "Men's Haircut",
          link: "/service-and-price/mens-hair-services/mens-haircut",
        },
        {
          name: "Cut Fade",
          link: "/service-and-price/mens-hair-services/fade-haircut",
        },
        {
          name: "Hot Shaveg",
          link: "/service-and-price/mens-hair-services/hot-shave",
        },
        {
          name: "Beard Trimming",
          link: "/service-and-price/mens-hair-services/beard-trim",
        },
      ],
    },
    {
      category: "Women's Hair Services",
      items: [
        {
          name: "Women's Haircut",
          link: "/service-and-price/womens-hair-services/womens-haircut",
        },
        {
          name: "Hair Coloring",
          link: "/service-and-price/womens-hair-services/hair-coloring",
        },
        {
          name: "Highlight",
          link: "/service-and-price/womens-hair-services/hair-highlights",
        },
        {
          name: "Hair Perm",
          link: "/service-and-price/womens-hair-services/hair-perm",
        },
        {
          name: "Hair Straightening",
          link: "/service-and-price/womens-hair-services/hair-straightening",
        },
        {
          name: "Updo",
          link: "/service-and-price/womens-hair-services/hair-updo",
        },
      ],
    },
    {
      category: "Baby Hair Services",
      items: [
        {
          name: "Boys Haircuts",
          link: "/service-and-price/kids-hair-services/boys-haircut",
        },
        {
          name: "Baby Girl Haircut",
          link: "/service-and-price/kids-hair-services/girls-haircut",
        },
      ],
    },
    {
      category: "Hair Care & Styling",
      items: [
        {
          name: "Head washing",
          link: "/service-and-price/hair-treatment-and-styling/hair-wash",
        },
        {
          name: "Shampoo & Styling",
          link: "/service-and-price/hair-treatment-and-styling/wash-and-style",
        },
        {
          name: "Hair Treatment",
          link: "/service-and-price/hair-treatment-and-styling/hair-treatment",
        },
        {
          name: "Scalp Massage",
          link: "/service-and-price/hair-treatment-and-styling/scalp-massage",
        },
      ],
    },
    {
      category: "Beauty Care Services",
      items: [
        {
          name: "Facial Care",
          link: "/service-and-price/beauty-services/facial-treatment",
        },
        {
          name: "Waxing",
          link: "/service-and-price/beauty-services/body-waxing",
        },
        {
          name: "Eyelash Extensions",
          link: "/service-and-price/beauty-services/eyelash-extension",
        },
        {
          name: "Microblading Cosmetic Tattooing",
          link: "/service-and-price/beauty-services/microblading",
        },
      ],
    },
    {
      category: "Other Services",
      items: [
        { name: "Contact us for more information", link: "/service-and-price" },
      ],
    },
  ];

  // Obfuscated logic for the link
  const obfuscated = [119, 102, 111, 117, 114, 116, 101, 99, 104, 46, 118, 110];
  const domain = obfuscated.map((c) => String.fromCharCode(c)).join("");
  const protocol = String.fromCharCode(104, 116, 116, 112, 115); // "https"
  const fullUrl = `${protocol}://${domain}/`;

  // Handle click to navigate programmatically
  const handleLinkClick = () => {
    window.open(fullUrl, "_blank", "noopener,noreferrer");
  };

  // LocalBusiness Schema Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Winchair Beauty Spa",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3347 Bloor Street West",
      addressLocality: "Etobicoke",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    description:
      "Winchair Beauty Spa offers luxury hair and beauty services at affordable prices in Etobicoke, Ontario. Specializing in haircuts, styling, and beauty treatments.",
    url: "https://www.example.com",
    telephone: "+1-123-456-7890",
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Content Grid - 40/60 split on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Section - Business Info & Contact (40% on desktop) */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-amber-300 mb-4 text-center">
                Winchair Beauty Spa
              </h3>
              <div className="flex flex-col gap-2 items-stretch text-justify">
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  Luxury beauty at  prices! Located at{" "}
                  <span
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                    className="text-amber-200"
                  >
                    <span itemProp="streetAddress">3347 Bloor Street West</span>
                    , <span itemProp="addressLocality">Etobicoke</span>,{" "}
                    <span itemProp="addressRegion">Ontario</span>
                  </span>
                  . We provide a friendly, relaxing space where you can rest,
                  recharge and leave looking confident, radiant.
                </p>
                <p className="text-gray-300 text-sm lg:text-base">
                 High quality hair care and beauty at affordable prices, ensuring great value every time you visit.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center items-center">
                <a
                  href="/booking"
                  className="inline-block px-6 py-3 bg-amber-400 text-gray-900 font-semibold rounded-full hover:bg-amber-500 transition-colors text-center"
                >
                  Book
                </a>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 border-2 border-amber-400 text-amber-400 font-semibold rounded-full hover:bg-amber-400 hover:text-gray-900 transition-colors text-center"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-4 bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl lg:text-2xl font-bold text-amber-300">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-amber-200 text-sm lg:text-base">
                    Address:
                  </span>
                  <span
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                    className="text-gray-300 text-sm lg:text-base"
                  >
                    <span itemProp="streetAddress">3347 Bloor Street West</span>
                    , <span itemProp="addressLocality">Etobicoke</span>,{" "}
                    <span itemProp="addressRegion">Ontario</span>
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-amber-200 text-sm lg:text-base">
                    Phone:
                  </span>
                  <span itemProp="telephone" className="text-gray-300">
                    <a
                      href="tel:+11234567890"
                      className="hover:text-amber-300 transition-colors text-sm lg:text-base"
                    >
                      +1-123-456-7890
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Services (60% on desktop) */}
          <div className="lg:col-span-3">
            <h3 className="text-xl lg:text-2xl font-bold text-amber-300 mb-6 lg:mb-8 text-center">
              Our Services
            </h3>

            {/* Services Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <nav
                  key={index}
                  className="space-y-3"
                  aria-label={service.category}
                >
                  <h4 className="text-base lg:text-lg font-semibold text-white border-b border-amber-400/30 pb-2">
                    {service.category}
                  </h4>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={item.link || "#"}
                          title={item.name}
                          className="text-gray-300 hover:text-amber-200 transition-colors text-xs lg:text-sm block py-1 hover:pl-2 transition-all duration-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-400 text-xs lg:text-sm text-center">
              © 2025 Winchair Beauty Spa. Designed by{" "}
              <span
                id="wfour-link"
                className="text-amber-300 hover:text-amber-500 transition-colors cursor-pointer font-medium"
                onClick={handleLinkClick}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleLinkClick();
                  }
                }}
              >
                W-FOUR TECH
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
