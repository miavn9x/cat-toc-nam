"use client";
import React from "react";

const Footer = () => {
  const services = [
    {
      category: "Dịch Vụ Tóc Nam",
      items: [
        { name: "Cắt Tóc Nam", link: "/men-haircut" },
        { name: "Cắt Fade", link: "/fade" },
        { name: "Cạo Râu Nóng", link: "/hot-shave" },
        { name: "Tỉa Râu", link: "/beard-trim" },
      ],
    },
    {
      category: "Dịch Vụ Tóc Nữ",
      items: [
        { name: "Cắt Tóc Nữ", link: "/women-haircut" },
        { name: "Nhuộm Tóc", link: "/hair-dye" },
        { name: "Highlight", link: "/highlight" },
        { name: "Uốn Tóc", link: "/curl" },
        { name: "Duỗi Tóc", link: "/straighten" },
        { name: "Búi Tóc", link: "/updo" },
      ],
    },
    {
      category: "Dịch Vụ Tóc Cho Bé",
      items: [
        { name: "Cắt Tóc Bé Trai", link: "/boys-haircut" },
        { name: "Cắt Tóc Bé Gái", link: "/girls-haircut" },
      ],
    },
    {
      category: "Chăm Sóc & Tạo Kiểu Tóc",
      items: [
        { name: "Gội Đầu", link: "/shampoo" },
        { name: "Gội & Tạo Kiểu", link: "/shampoo-style" },
        { name: "Liệu Trình Dưỡng Tóc", link: "/hair-treatment" },
        { name: "Massage Da Đầu", link: "/scalp-massage" },
      ],
    },
    {
      category: "Chăm Sóc Sắc Đẹp",
      items: [
        { name: "Chăm Sóc Da Mặt", link: "/facial" },
        { name: "Tẩy Lông", link: "/waxing" },
        { name: "Nối Mi", link: "/eyelash-extension" },
        { name: "Phun Xăm Thẩm Mỹ Microblading", link: "/microblading" },
      ],
    },
    {
      category: "Dịch Vụ Khác",
      items: [{ name: "Liên hệ để biết thêm", link: "/other-services" }],
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
    url: "https://www.example.com", // Replace with actual website URL
    telephone: "+1-123-456-7890", // Replace with actual phone number
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About and Contact Section */}
          <div className="space-y-6">
            {/* About Section */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-amber-300">
                Winchair Beauty Spa
              </h3>
              <p className="text-gray-300 text-sm">
                Nơi làm đẹp sang trọng với giá Việt Nam! Tọa lạc tại{" "}
                <span
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">3347 Bloor Street West</span>,{" "}
                  <span itemProp="addressLocality">Etobicoke</span>,{" "}
                  <span itemProp="addressRegion">Ontario</span>.
                </span>{" "}
                Chúng tôi mang đến không gian thân thiện, thư giãn, nơi bạn có
                thể nghỉ ngơi, tái tạo năng lượng và rời đi với vẻ ngoài tự tin,
                rạng rỡ. Chăm sóc tóc và làm đẹp chất lượng cao với mức giá phải
                chăng, đảm bảo giá trị tuyệt vời mỗi khi ghé thăm.
              </p>
              <a
                href="/booking"
                className="inline-block px-5 py-2 bg-amber-400 text-gray-900 font-medium rounded-full hover:bg-amber-500"
              >
                Đặt Lịch
              </a>
            </div>
            {/* Contact Section */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-amber-300">Liên Hệ</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex">
                  <span className="font-semibold text-amber-200 mr-2">
                    Địa Chỉ:
                  </span>
                  <span
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">3347 Bloor Street West</span>
                    , <span itemProp="addressLocality">Etobicoke</span>,{" "}
                    <span itemProp="addressRegion">Ontario</span>
                  </span>
                </li>
                <li className="flex">
                  <span className="font-semibold text-amber-200 mr-2">
                    Liên Hệ:
                  </span>
                  <span itemProp="telephone">
                    <a href="tel:+11234567890">+1-123-456-7890</a>
                  </span>{" "}
                  {/* Replace with actual phone number */}
                </li>
              </ul>
            </div>
          </div>

          {/* Services Section 1 (Tóc Nam, Tóc Nữ) */}
          <nav className="space-y-4" aria-label="Dịch vụ tóc">
            {services.slice(0, 2).map((service, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-sm font-semibold text-white">
                  {service.category}
                </h4>
                <ul className="text-gray-300 text-xs space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-amber-200">
                      <a href={item.link || "#"} title={item.name}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Services Section 2 (Tóc Cho Bé, Chăm Sóc & Tạo Kiểu Tóc) */}
          <nav
            className="space-y-4"
            aria-label="Dịch vụ tóc cho bé và tạo kiểu"
          >
            {services.slice(2, 4).map((service, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-sm font-semibold text-white">
                  {service.category}
                </h4>
                <ul className="text-gray-300 text-xs space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-amber-200">
                      <a href={item.link || "#"} title={item.name}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Services Section 3 (Chăm Sóc Sắc Đẹp, Dịch Vụ Khác) */}
          <nav className="space-y-4" aria-label="Dịch vụ sắc đẹp và khác">
            {services.slice(4).map((service, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-sm font-semibold text-white">
                  {service.category}
                </h4>
                <ul className="text-gray-300 text-xs space-y-1">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-amber-200">
                      <a href={item.link || "#"} title={item.name}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p className="text-xs">
            © 2025 Winchair Beauty Spa. Design by
            <span
              id="wfour-link"
              className="text-amber-300 hover:text-amber-500 transition-colors cursor-pointer mx-2"
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
    </footer>
  );
};

export default Footer;
