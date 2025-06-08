import { Button } from "@mui/material";
import Image from "next/image";

const BeautyServices = () => {
  const services = [
    {
      name: "Chăm Sóc Da Mặt",
      duration: "1 Giờ",
      price: "Từ $90 + tax",
      description:
        "Trẻ hóa làn da với các liệu trình chăm sóc da mặt tùy chỉnh – được thiết kế để làm sạch, nuôi dưỡng và phục hồi làn da.",
      benefits:
        "Phân tích da chuyên nghiệp, kết quả rõ rệt lâu dài, cải thiện sức khỏe da",
      image: "/placeholder.svg?height=250&width=350",
      icon: "✨",
    },
    {
      name: "Tẩy Lông",
      duration: "Tùy vùng",
      price: "Từ $16 + tax",
      description:
        "Đạt được làn da mềm mại, mịn màng với dịch vụ tẩy lông chuyên nghiệp cho nhiều vùng khác nhau.",
      benefits:
        "Giảm thiểu khó chịu, kết quả bền lâu hơn cạo, ít lần tẩy lông hơn",
      image: "/placeholder.svg?height=250&width=350",
      icon: "🪒",
    },
    {
      name: "Nối Mi",
      duration: "2-3 Giờ",
      price: "Từ $85 + tax",
      description:
        "Nâng cao vẻ đẹp tự nhiên với hàng mi dài hơn, dày hơn, được nối một cách chuyên nghiệp để có vẻ ngoài tuyệt đẹp.",
      benefits:
        "Thức dậy với mi đẹp tự nhiên, loại bỏ mascara hàng ngày, tiết kiệm thời gian",
      image: "/placeholder.svg?height=250&width=350",
      icon: "👁️",
    },
    {
      name: "Phun Xăm Thẩm Mỹ Microblading",
      duration: "2-3 Giờ",
      price: "$450 + tax",
      description:
        "Đạt được cặp chân mày được định hình và rõ nét hoàn hảo với dịch vụ microblading bán vĩnh viễn, bao gồm 1 lần dặm lại miễn phí.",
      benefits:
        "Chân mày hoàn hảo mỗi ngày, tiết kiệm thời gian trang điểm, giải pháp lâu dài",
      image: "/placeholder.svg?height=250&width=350",
      icon: "🎨",
    },
  ];

  const waxingAreas = [
    { area: "Chân", price: "Từ $45" },
    { area: "Tay", price: "Từ $35" },
    { area: "Mặt", price: "Từ $16" },
    { area: "Bikini", price: "Từ $55" },
    { area: "Lưng", price: "Từ $65" },
    { area: "Nách", price: "Từ $25" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Dịch Vụ <span className="text-amber-600">Chăm Sóc Sắc Đẹp</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rạng Rỡ, Thư Giãn & Kết Quả Thực Tế! Nâng cao vẻ rạng rỡ tự nhiên và
            thúc đẩy sức khỏe tổng thể.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image */}
                  <div className="md:w-2/5 relative">
                    <div className="relative overflow-hidden h-48 md:h-full">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={350}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent"></div>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {service.icon}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 left-4 bg-white text-amber-600 px-3 py-1 rounded-full text-xs font-semibold">
                      ⏱️ {service.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-slate-900">
                        {service.name}
                      </h3>
                      <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                        {service.price}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
                      {service.description}
                    </p>

                    <div className="bg-amber-50 p-3 rounded-lg mb-4">
                      <p className="text-xs text-amber-800">
                        <strong>✨ Lợi ích:</strong> {service.benefits}
                      </p>
                    </div>

                    <div className="mt-auto flex justify-center">
                      <Button
                        variant="contained"
                        className="font-semibold rounded-full"
                        sx={{
                          backgroundColor: "#d97706", // amber-600
                          "&:hover": { backgroundColor: "#b45309" }, // amber-700
                          textTransform: "none",
                          fontWeight: 600,
                          paddingX: "24px",
                          paddingY: "8px",
                          borderRadius: "9999px",
                          width: "192px",
                        }}
                      >
                        Đặt Lịch Ngay
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Waxing Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-slate-900 mb-8">
            Dịch Vụ Tẩy Lông Chuyên Nghiệp
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {waxingAreas.map((item, index) => (
              <div
                key={index}
                className="bg-amber-50 hover:bg-amber-100 transition-colors duration-300 p-4 rounded-xl text-center"
              >
                <h4 className="font-semibold text-slate-900 mb-2">
                  {item.area}
                </h4>
                <p className="text-amber-800 font-medium">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="contained"
              className="font-semibold rounded-full"
              sx={{
                backgroundColor: "#d97706", // amber-600
                "&:hover": { backgroundColor: "#b45309" }, // amber-700
                textTransform: "none",
                fontWeight: 600,
                paddingX: "32px",
                paddingY: "12px",
                borderRadius: "9999px",
              }}
            >
              Xem Bảng Giá Đầy Đủ
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
            Khách Hàng Nói Gì Về Chúng Tôi?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Minh Anh",
                service: "Chăm Sóc Da Mặt",
                quote:
                  "Làn da của tôi đã thay đổi hoàn toàn sau liệu trình chăm sóc da mặt tại Winchair. Các chuyên viên rất tận tâm và chuyên nghiệp!",
              },
              {
                name: "Thanh Hà",
                service: "Nối Mi",
                quote:
                  "Tôi rất hài lòng với dịch vụ nối mi tại đây. Hàng mi tự nhiên, đẹp và bền. Giờ tôi không cần trang điểm mắt mỗi sáng nữa!",
              },
              {
                name: "Thu Trang",
                service: "Microblading",
                quote:
                  "Chân mày của tôi đã trở nên hoàn hảo sau khi phun xăm tại Winchair. Tiết kiệm rất nhiều thời gian và luôn trông thật tự nhiên.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-600 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs opacity-80">{testimonial.service}</p>
                  </div>
                </div>
                <p className="italic text-sm">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyServices;
