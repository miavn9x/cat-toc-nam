import { Button } from "@mui/material";
import Image from "next/image";

const HairCareServices = () => {
  const services = [
    {
      name: "Gội Đầu",
      price: "Từ $20 + tax",
      description:
        "Gội đầu sảng khoái sau đó sấy khô chuyên nghiệp bằng máy sấy khí, giúp tóc bạn sạch sẽ và nhẹ nhàng.",
      benefits:
        "Làm mới diện mạo tức thì và tiết kiệm thời gian trong ngày bận rộn",
      image: "/placeholder.svg?height=200&width=300",
      icon: "🧴",
    },
    {
      name: "Gội & Tạo Kiểu",
      price: "Tư vấn khi đặt lịch",
      description:
        "Tận hưởng việc gội đầu sang trọng sau đó là tạo kiểu tóc đẹp bằng lược hoặc máy uốn/duỗi, hoàn hảo cho vẻ ngoài hoàn thiện.",
      benefits:
        "Vẻ 'vừa bước ra từ salon', tiết kiệm công sức tự tạo kiểu tại nhà",
      image: "/placeholder.svg?height=200&width=300",
      icon: "💇‍♀️",
    },
    {
      name: "Liệu Trình Dưỡng Tóc",
      price: "$90 + tax",
      description:
        "Nuôi dưỡng sâu và phục hồi sức sống cho mái tóc với liệu trình gội đầu dưỡng chuyên biệt, phục hồi sức khỏe và độ bóng.",
      benefits:
        "Sửa chữa hư tổn, tăng độ bóng và cải thiện khả năng quản lý tóc lâu dài",
      image: "/placeholder.svg?height=200&width=300",
      icon: "✨",
    },
    {
      name: "Massage Da Đầu",
      price: "$85 + tax",
      description:
        "Đắm mình trong liệu trình massage da đầu thư giãn sâu và trị liệu, thúc đẩy lưu thông máu đến da đầu.",
      benefits:
        "Khuyến khích tóc mọc khỏe mạnh, giảm căng thẳng và cải thiện sức khỏe tổng thể",
      image: "/placeholder.svg?height=200&width=300",
      icon: "💆‍♀️",
    },
  ];

  const benefits = [
    {
      icon: "🌿",
      title: "Sản Phẩm Tự Nhiên",
      description:
        "Sử dụng các sản phẩm chăm sóc tóc cao cấp, an toàn cho mọi loại tóc",
    },
    {
      icon: "🔬",
      title: "Công Nghệ Hiện Đại",
      description: "Áp dụng kỹ thuật và thiết bị tiên tiến nhất trong ngành",
    },
    {
      icon: "👩‍⚕️",
      title: "Chuyên Gia Tư Vấn",
      description:
        "Đội ngũ chuyên viên giàu kinh nghiệm tư vấn phù hợp từng loại tóc",
    },
    {
      icon: "💎",
      title: "Kết Quả Bền Lâu",
      description: "Hiệu quả duy trì lâu dài, giúp tiết kiệm chi phí dài hạn",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            <span className="text-indigo-600">Chăm Sóc</span> & Tạo Kiểu Tóc
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tóc Khỏe Đẹp, Vẻ Đẹp Rạng Ngời Tự Nhiên! Đầu tư vào sức khỏe và sức
            sống của mái tóc bạn.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group h-full">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image */}
                  <div className="md:w-2/5 relative">
                    <div className="relative overflow-hidden h-48 md:h-full">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent" />
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-slate-900">
                        {service.name}
                      </h3>
                      <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                        {service.price}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
                      {service.description}
                    </p>

                    <div className="bg-indigo-50 p-3 rounded-lg mb-4">
                      <p className="text-xs text-indigo-700">
                        <strong>💜 Lợi ích:</strong> {service.benefits}
                      </p>
                    </div>

                    {/* Button luôn sát đáy */}
                    <div className="mt-auto flex justify-center">
                      <Button
                        variant="contained"
                        className="font-semibold rounded-full"
                        sx={{
                          backgroundColor: "#4f46e5", // indigo-600
                          "&:hover": { backgroundColor: "#4338ca" }, // indigo-700
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

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-slate-900 mb-8">
            Tại Sao Chọn Dịch Vụ Chăm Sóc Tóc Tại Winchair?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Process */}
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
            Quy Trình Chăm Sóc Chuyên Nghiệp
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Tư Vấn",
                desc: "Phân tích tình trạng tóc và da đầu",
              },
              {
                step: "02",
                title: "Điều Trị",
                desc: "Áp dụng liệu trình phù hợp",
              },
              {
                step: "03",
                title: "Chăm Sóc",
                desc: "Massage và nuôi dưỡng sâu",
              },
              {
                step: "04",
                title: "Hoàn Thiện",
                desc: "Tạo kiểu và hướng dẫn bảo quản",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {process.step}
                </div>
                <h4 className="font-bold mb-2">{process.title}</h4>
                <p className="text-sm opacity-90">{process.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="contained"
              className="font-semibold rounded-full"
              sx={{
                backgroundColor: "#ffffff",
                color: "#4f46e5", // indigo-600
                "&:hover": { backgroundColor: "#f1f5f9" }, // slate-100
                textTransform: "none",
                fontWeight: 600,
                paddingX: "32px",
                paddingY: "12px",
                borderRadius: "9999px",
              }}
            >
              Tư Vấn Miễn Phí
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairCareServices;
