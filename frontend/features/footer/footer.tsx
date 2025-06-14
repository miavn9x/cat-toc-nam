"use client";
import React from "react";

const Footer = () => {
  const services = [
    {
      category: "Dịch Vụ Tóc Nam",
      items: [
        {
          name: "Cắt Tóc Nam",
          link: "/service-and-price/dich-vu-toc-nam/cat-toc-nam",
        },
        {
          name: "Cắt Fade",
          link: "/service-and-price/dich-vu-toc-nam/cat-fade",
        },
        {
          name: "Cạo Râu Nóng",
          link: "/service-and-price/dich-vu-toc-nam/cao-rau-nong",
        },
        { name: "Tỉa Râu", link: "/service-and-price/dich-vu-toc-nam/tia-rau" },
      ],
    },
    {
      category: "Dịch Vụ Tóc Nữ",
      items: [
        {
          name: "Cắt Tóc Nữ",
          link: "/service-and-price/dich-vu-toc-nu/cat-toc-nu",
        },
        {
          name: "Nhuộm Tóc",
          link: "/service-and-price/dich-vu-toc-nu/nhuom-toc",
        },
        {
          name: "Highlight",
          link: "/service-and-price/dich-vu-toc-nu/highlight",
        },
        { name: "Uốn Tóc", link: "/service-and-price/dich-vu-toc-nu/uon-toc" },
        {
          name: "Duỗi Tóc",
          link: "/service-and-price/dich-vu-toc-nu/duoi-toc",
        },
        { name: "Búi Tóc", link: "/service-and-price/dich-vu-toc-nu/bui-toc" },
      ],
    },
    {
      category: "Dịch Vụ Tóc Cho Bé",
      items: [
        {
          name: "Cắt Tóc Bé Trai",
          link: "/service-and-price/dich-vu-toc-cho-be/cat-toc-be-trai",
        },
        {
          name: "Cắt Tóc Bé Gái",
          link: "/service-and-price/dich-vu-toc-cho-be/cat-toc-be-gai",
        },
      ],
    },
    {
      category: "Chăm Sóc & Tạo Kiểu Tóc",
      items: [
        {
          name: "Gội Đầu",
          link: "/service-and-price/dieu-tri-va-tao-kieu-toc",
        },
        {
          name: "Gội & Tạo Kiểu",
          link: "/service-and-price/dieu-tri-va-tao-kieu-toc/goi-tao-kieu",
        },
        {
          name: "Liệu Trình Dưỡng Tóc",
          link: "/service-and-price/dieu-tri-va-tao-kieu-toc/lieu-trinh-duong-toc",
        },
        {
          name: "Massage Da Đầu",
          link: "/service-and-price/dieu-tri-va-tao-kieu-toc/massage-da-dau",
        },
      ],
    },
    {
      category: "Chăm Sóc Sắc Đẹp",
      items: [
        {
          name: "Chăm Sóc Da Mặt",
          link: "/service-and-price/dich-vu-tham-my/cham-soc-da-mat",
        },
        {
          name: "Tẩy Lông",
          link: "/service-and-price/dich-vu-tham-my/tay-long",
        },
        { name: "Nối Mi", link: "/service-and-price/dich-vu-tham-my/noi-mi" },
        {
          name: "Phun Xăm Thẩm Mỹ Microblading",
          link: "/service-and-price/dich-vu-tham-my/phun-xam-tham-my",
        },
      ],
    },
    {
      category: "Dịch Vụ Khác",
      items: [{ name: "Liên hệ để biết thêm", link: "/service-and-price" }],
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
                  Nơi làm đẹp sang trọng với giá Việt Nam! Tọa lạc tại{" "}
                  <span
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                    className="text-amber-200"
                  >
                    <span itemProp="streetAddress">3347 Bloor Street West</span>,{" "}
                    <span itemProp="addressLocality">Etobicoke</span>,{" "}
                    <span itemProp="addressRegion">Ontario</span>
                  </span>
                  . Chúng tôi mang đến không gian thân thiện, thư giãn, nơi bạn có
                  thể nghỉ ngơi, tái tạo năng lượng và rời đi với vẻ ngoài tự tin,
                  rạng rỡ.
                </p>
                <p className="text-gray-300 text-sm lg:text-base">
                  Chăm sóc tóc và làm đẹp chất lượng cao với mức giá phải chăng,
                  đảm bảo giá trị tuyệt vời mỗi khi ghé thăm.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center items-center">
                <a
                  href="/booking"
                  className="inline-block px-6 py-3 bg-amber-400 text-gray-900 font-semibold rounded-full hover:bg-amber-500 transition-colors text-center"
                >
                  Đặt Lịch
                </a>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 border-2 border-amber-400 text-amber-400 font-semibold rounded-full hover:bg-amber-400 hover:text-gray-900 transition-colors text-center"
                >
                  Liên Hệ
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-4 bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl lg:text-2xl font-bold text-amber-300">
                Thông Tin Liên Hệ
              </h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-amber-200 text-sm lg:text-base">
                    Địa Chỉ:
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
                    Điện Thoại:
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
              Dịch Vụ Của Chúng Tôi
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
              © 2025 Winchair Beauty Spa. Thiết kế bởi{" "}
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
