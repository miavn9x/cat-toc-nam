import Image from "next/image";

const ServicesOverview = () => {
  const serviceCategories = [
    {
      title: "Dịch Vụ Tóc Nam",
      description: "Phong cách đỉnh cao, chi tiêu thông minh",
      image: "/placeholder.svg",
      services: ["Cắt Tóc Nam", "Cắt Fade", "Cạo Râu Nóng", "Tỉa Râu"],
      priceFrom: "$16",
    },
    {
      title: "Dịch Vụ Tóc Nữ",
      description: "Đẹp tự nhiên, giá trị vượt trội",
      image: "/placeholder.svg",
      services: ["Cắt Tóc Nữ", "Nhuộm Tóc", "Highlight", "Uốn Tóc"],
      priceFrom: "$55",
    },
    {
      title: "Dịch Vụ Tóc Cho Bé",
      description: "Tóc xinh, ba mẹ hài lòng",
      image: "/placeholder.svg",
      services: ["Cắt Tóc Bé Trai", "Cắt Tóc Bé Gái"],
      priceFrom: "$25",
    },
    {
      title: "Chăm Sóc & Tạo Kiểu",
      description: "Tóc khỏe đẹp, vẻ đẹp rạng ngời",
      image: "/placeholder.svg",
      services: ["Gội Đầu", "Liệu Trình Dưỡng", "Massage Da Đầu"],
      priceFrom: "$20",
    },
    {
      title: "Chăm Sóc Sắc Đẹp",
      description: "Rạng rỡ, thư giãn & kết quả thực tế",
      image: "/placeholder.svg",
      services: ["Chăm Sóc Da Mặt", "Tẩy Lông", "Nối Mi", "Microblading"],
      priceFrom: "$16",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Dịch Vụ{" "}
            <span className="text-gray-500 font-extralight">Của Chúng Tôi</span>
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Khám phá đầy đủ các dịch vụ chăm sóc tóc và làm đẹp chuyên nghiệp
            tại Winchair Beauty Spa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-800 overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-gray-700 hover:border-gray-500">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={500}
                    height={256}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/60"></div>
                  <div className="absolute top-6 right-6 bg-white text-slate-900 px-4 py-2 text-sm font-light tracking-wide">
                    TỪ {category.priceFrom}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-3 text-white">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 font-light">
                    {category.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {category.services.slice(0, 3).map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-500 font-light"
                      >
                        <span className="w-1 h-1 bg-white rounded-full mr-3"></span>
                        {service}
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="text-sm text-gray-400 font-light">
                        +{category.services.length - 3} dịch vụ khác
                      </div>
                    )}
                  </div>

                  <button className="w-full border border-white text-white hover:bg-white hover:text-slate-900 font-light tracking-wide py-2 text-sm transition-all duration-300">
                    XEM CHI TIẾT
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white hover:bg-gray-100 text-slate-900 font-light px-12 py-4 text-lg tracking-wide transition-all duration-500">
            XEM TẤT CẢ DỊCH VỤ
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
