import Link from "next/link"
import Head from "next/head"

const MensHairServicesPage = () => {
  const services = [
    {
      id: "cat-toc-nam",
      title: "Cắt Tóc Nam",
      subtitle: "Men's Haircut",
      price: "Từ $35 + tax",
      description:
        "Kiểu tóc được thiết kế riêng, hoàn hảo với phong cách và cuộc sống của bạn. Bao gồm gội đầu thư giãn và tạo kiểu chuyên nghiệp. Đây không chỉ là một lần cắt tóc; đó là nền tảng cho một vẻ ngoài luôn gọn gàng, sắc sảo lâu hơn, nghĩa là bạn ít phải ghé tiệm hơn và tiết kiệm tiền để làm những việc khác.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Tư vấn phong cách cá nhân", "Gội đầu thư giãn", "Tạo kiểu chuyên nghiệp", "Bảo hành kiểu tóc"],
      styleCount: 8,
    },
    {
      id: "cat-fade",
      title: "Cắt Fade",
      subtitle: "Men's Skin Fade",
      price: "Từ $40 + tax",
      description:
        "Bạn muốn có kiểu fade siêu gọn gàng, hiện đại? Các chuyên gia của chúng tôi sẽ thực hiện hoàn hảo từng lần. Hãy mong đợi một kiểu fade cực kỳ sạch sẽ, chính xác, giữ form lâu bền, giúp bạn tận dụng tối đa kiểu tóc của mình và giảm chi phí cho việc chỉnh sửa thường xuyên.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Fade chính xác", "Kỹ thuật hiện đại", "Giữ form lâu bền", "Tư vấn bảo dưỡng"],
      styleCount: 6,
    },
    {
      id: "cao-rau-nong",
      title: "Cạo Râu Nóng",
      subtitle: "Hot Towel Shave",
      price: "Từ $55 + tax",
      description:
        "Tự thưởng cho mình trải nghiệm cạo râu truyền thống đỉnh cao. Dịch vụ cạo râu khăn nóng truyền thống của chúng tôi mang lại cảm giác cạo sát, thoải mái và làm trẻ hóa làn da. Không chỉ là cạo râu; đó là một trị liệu mặt nhỏ thư giãn giúp thúc đẩy sức khỏe da, mang lại lợi ích nhân đôi chỉ với một mức giá.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Khăn nóng thư giãn", "Cạo râu truyền thống", "Chăm sóc da mặt", "Massage thư giãn"],
      styleCount: 3,
    },
    {
      id: "tia-rau",
      title: "Tỉa Râu",
      subtitle: "Beard Trim",
      price: "Từ $16 + tax",
      description:
        "Giữ bộ râu của bạn luôn trong tình trạng tốt nhất với dịch vụ tỉa và tạo dáng chuyên nghiệp. Một bộ râu được tạo hình chuyên nghiệp không chỉ đẹp hơn mà còn mọc đều hơn, giúp bạn dễ dàng tự chăm sóc tại nhà và tiết kiệm thời gian.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Tạo dáng chuyên nghiệp", "Tư vấn phong cách", "Sản phẩm cao cấp", "Hướng dẫn chăm sóc"],
      styleCount: 5,
    },
  ]

  return (
    <>
      <Head>
        <title>Dịch Vụ Tóc Nam - Winchair Beauty Spa | Phong Cách Đỉnh Cao</title>
        <meta
          name="description"
          content="Dịch vụ tóc nam chuyên nghiệp tại Winchair Beauty Spa - Cắt tóc, Fade, Cạo râu nóng, Tỉa râu với giá từ $16. Phong cách đỉnh cao, chi tiêu thông minh tại Etobicoke, Ontario."
        />
        <meta
          name="keywords"
          content="cắt tóc nam, fade, cạo râu, tỉa râu, salon tóc nam Etobicoke, Winchair Beauty Spa"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">

        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-indigo-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 backdrop-blur-md border border-blue-400/30 mb-6 sm:mb-8">
                <span className="text-blue-300 font-medium text-xs sm:text-sm tracking-wider uppercase">
                  Dành Cho Quý Ông
                </span>
              </div>

              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extralight text-white leading-tight mb-6 sm:mb-8">
                Dịch Vụ Tóc Nam
                <span className="block text-lg sm:text-3xl lg:text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-light mt-2 sm:mt-4">
                  Phong Cách Đỉnh Cao, Chi Tiêu Thông Minh
                </span>
              </h1>

              <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
                Các quý ông, một kiểu tóc đẹp không chỉ là cắt tỉa – đó là phong cách cá nhân. Tại Winchair Beauty Spa,
                bạn đang đầu tư vào chất lượng và phong cách bền vững thật sự đáng giá.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link
                  href="/booking"
                  className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Đặt Lịch Ngay
                </Link>
                <Link
                  href="/lien-he"
                  className="px-8 sm:px-12 py-3 sm:py-4 border border-blue-400/50 text-blue-300 rounded-full hover:bg-blue-400/10 transition-all"
                >
                  Tư Vấn Miễn Phí
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {services.map((service, index) => (
                <Link href={`/dich-vu-toc-nam/${service.id}`} key={index} className="group block">
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-500 h-full">
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
                          <h2 className="text-lg sm:text-2xl font-light text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors">
                            {service.title}
                          </h2>
                          <p className="text-gray-400 text-xs sm:text-sm italic">{service.subtitle}</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="text-xl sm:text-2xl font-light bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {service.price}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base line-clamp-3">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 2).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-blue-900/20 border border-blue-400/30 text-blue-300"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 2 && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-white/10 border border-white/20 text-gray-300">
                            +{service.features.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-blue-400 text-sm font-medium">Xem {service.styleCount} mẫu tóc</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="text-gray-500 text-xs">{service.styleCount} kiểu</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-6">
                Tại Sao Chọn Dịch Vụ Tóc Nam Của Chúng Tôi?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-blue-400/20">
                  <div className="text-3xl mb-4">💼</div>
                  <h3 className="text-lg font-medium text-blue-300 mb-3">Chuyên Nghiệp</h3>
                  <p className="text-gray-400 text-sm">
                    Đội ngũ stylist nam giàu kinh nghiệm, hiểu rõ xu hướng và phong cách nam giới hiện đại.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-blue-400/20">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="text-lg font-medium text-blue-300 mb-3">Nhanh Chóng</h3>
                  <p className="text-gray-400 text-sm">
                    Dịch vụ hiệu quả, tiết kiệm thời gian cho lịch trình bận rộn của quý ông.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-blue-400/20">
                  <div className="text-3xl mb-4">💰</div>
                  <h3 className="text-lg font-medium text-blue-300 mb-3">Giá Trị</h3>
                  <p className="text-gray-400 text-sm">
                    Chất lượng cao với mức giá hợp lý, mang lại giá trị tốt nhất cho khoản đầu tư của bạn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-black to-slate-900/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10">
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-6">Sẵn Sàng Cho Phong Cách Mới?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Đặt lịch ngay hôm nay để trải nghiệm dịch vụ tóc nam chuyên nghiệp tại Winchair Beauty Spa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Đặt Lịch Ngay
                </Link>
                <Link
                  href="/lien-he"
                  className="px-8 py-3 border border-blue-400/50 text-blue-300 rounded-full hover:bg-blue-400/10 transition-all"
                >
                  Liên Hệ Tư Vấn
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default MensHairServicesPage
