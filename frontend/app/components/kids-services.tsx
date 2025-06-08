import { Button } from "@mui/material";
import Image from "next/image";

const KidsServices = () => {
  const services = [
    {
      name: "Cắt Tóc Bé Trai",
      price: "Từ $25",
      description:
        "Trải nghiệm cắt tóc thân thiện, không rắc rối cho các bé, đảm bảo các bé sẽ rời đi với một kiểu tóc sành điệu và thoải mái.",
      benefits:
        "Stylist kiên nhẫn đảm bảo trải nghiệm tích cực, giúp những lần cắt tóc sau không căng thẳng",
      image: "/placeholder.svg?height=200&width=300",
      icon: "👦",
    },
    {
      name: "Cắt Tóc Bé Gái",
      price: "Từ $35",
      description:
        "Kiểu tóc thời trang và phù hợp lứa tuổi cho các bé gái, được tạo kiểu theo sở thích và loại tóc của bé.",
      benefits:
        "Kiểu tóc dễ thương và dễ quản lý cho ba mẹ, giải pháp thiết thực cho gia đình bận rộn",
      image: "/placeholder.svg?height=200&width=300",
      icon: "👧",
    },
  ];

  const features = [
    {
      icon: "🎈",
      title: "Môi Trường Thân Thiện",
      description:
        "Không gian vui vẻ, thoải mái được thiết kế riêng cho trẻ em",
    },
    {
      icon: "🎮",
      title: "Giải Trí Trong Lúc Cắt",
      description: "Hoạt động vui chơi giúp bé không cảm thấy nhàm chán",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Ba Mẹ Yên Tâm",
      description: "Dịch vụ chuyên nghiệp, an toàn và giá cả phải chăng",
    },
    {
      icon: "⭐",
      title: "Trải Nghiệm Tích Cực",
      description: "Tạo ấn tượng tốt để bé thích thú với việc cắt tóc",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề chính */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Dịch Vụ <span className="text-emerald-600">Tóc Cho Bé</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tóc Xinh, Ba Mẹ Hài Lòng! Môi trường vui vẻ và thoải mái cho những
            khách hàng nhỏ tuổi nhất.
          </p>
        </div>

        {/* Danh sách dịch vụ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group h-full">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent" />
                  </div>

                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {service.icon}
                  </div>

                  <div className="absolute top-4 right-4 bg-white text-emerald-600 px-3 py-1 rounded-full text-sm font-semibold shadow">
                    {service.price}
                  </div>
                </div>

                <div className="p-6 pt-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-emerald-800">
                      <strong>🌟 Lợi ích:</strong> {service.benefits}
                    </p>
                  </div>
                  <div className="mt-auto flex justify-center">
                    <Button
                      variant="contained"
                      className="font-semibold rounded-full"
                      sx={{
                        backgroundColor: "#059669",
                        "&:hover": { backgroundColor: "#047857" },
                        textTransform: "none",
                        fontWeight: 600,
                        paddingX: "24px",
                        paddingY: "8px",
                        borderRadius: "9999px",
                        width: "192px",
                      }}
                    >
                      Đặt Lịch Cho Bé
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tính năng nổi bật */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Tại Sao Ba Mẹ Tin Tưởng Chọn Winchair?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="bg-emerald-50 p-6 rounded-xl inline-block">
              <p className="text-emerald-800 font-medium">
                💡 <strong>Mẹo nhỏ:</strong> Đặt lịch vào buổi sáng khi bé còn
                tỉnh táo và vui vẻ để có trải nghiệm tốt nhất!
              </p>
            </div>
          </div>
        </div>

        {/* Gọi hành động cuối trang */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Lần Đầu Cắt Tóc Của Bé? 🎉
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Chúng tôi sẽ tạo ra trải nghiệm đặc biệt và đáng nhớ cho bé yêu
              của bạn!
            </p>
            <Button
              variant="contained"
              className="font-semibold rounded-full"
              sx={{
                backgroundColor: "#ffffff",
                color: "#059669", // emerald-600
                "&:hover": { backgroundColor: "#f1f5f9" }, // slate-100
                textTransform: "none",
                fontWeight: 600,
                paddingX: "32px",
                paddingY: "12px",
                borderRadius: "9999px",
              }}
            >
              Đặt Lịch Đặc Biệt
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsServices;
