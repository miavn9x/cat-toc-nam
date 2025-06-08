import { Button } from "@mui/material";
import Image from "next/image";

const WomenServices = () => {
  const services = [
    {
      name: "Cắt Tóc Nữ",
      price: "Từ $55 + tax",
      description:
        "Trải nghiệm tạo kiểu riêng biệt nhằm tôn vinh vẻ đẹp tự nhiên và phù hợp với lối sống của bạn. Bao gồm gội đầu sang trọng và tạo kiểu chuyên nghiệp.",
      benefits:
        "Tư vấn kỹ lưỡng đảm bảo kiểu tóc hoàn hảo, ít 'ngày tóc xấu' và tự tin vô giá",
      image: "/placeholder.svg",
    },
    {
      name: "Nhuộm Tóc",
      price: "Từ $65 + tax",
      description:
        "Màu tóc mới rực rỡ hoặc làm tươi mới màu hiện có với sự tư vấn chuyên nghiệp về tông màu hoàn hảo.",
      benefits:
        "Sản phẩm chất lượng cao bảo vệ tóc, màu bền lâu và độ bóng rực rỡ",
      image: "/placeholder.svg",
    },
    {
      name: "Highlight",
      price: "Từ $180 + tax",
      description:
        "Thêm chiều sâu và sự lấp lánh cho mái tóc bằng những sợi highlight tuyệt đẹp, tùy chỉnh để tạo hiệu ứng tự nhiên hoặc cá tính.",
      benefits:
        "Kỹ thuật chuyên nghiệp đảm bảo pha trộn liền mạch, ít cần chỉnh sửa thường xuyên",
      image: "/placeholder.svg",
    },
    {
      name: "Uốn Tóc",
      price: "Từ $85 + tax",
      description:
        "Thêm độ bồng bềnh, phồng và những lọn sóng hoặc xoăn đẹp mắt cho mái tóc với dịch vụ uốn chuyên nghiệp.",
      benefits:
        "Kết cấu tóc hoàn hảo, kết quả bền lâu nhiều tháng, giá trị tuyệt vời",
      image: "/placeholder.svg",
    },
    {
      name: "Duỗi Tóc",
      price: "Từ $160 + tax",
      description:
        "Mái tóc suôn mượt, óng ả và dễ quản lý với liệu trình duỗi tóc chuyên nghiệp giúp giảm xoăn cứng.",
      benefits:
        "Giảm thiểu hư tổn, tối đa độ mượt mà, tạo kiểu hàng ngày nhanh hơn",
      image: "/placeholder.svg",
    },
    {
      name: "Búi Tóc",
      price: "$120 + tax",
      description:
        "Hoàn hảo cho các dịp đặc biệt, kiểu búi tóc được tạo kiểu tinh xảo để mang lại vẻ ngoài thanh lịch và đáng nhớ.",
      benefits:
        "Đảm bảo hoàn hảo và giữ nếp suốt cả ngày/đêm, tận hưởng không lo lắng",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Dịch Vụ <span className="text-pink-600">Tóc Nữ</span>
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Đẹp Tự Nhiên, Giá Trị Vượt Trội! Biến mái tóc của bạn thành một tài
            sản đẹp, bền vững.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group h-full">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Image */}
                <div className="relative h-64 shrink-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={350}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>

                {/* Nội dung (chiếm phần còn lại) */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="bg-pink-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-pink-800">
                      <strong>💎 Lợi ích:</strong> {service.benefits}
                    </p>
                  </div>

                  {/* Nút nằm sát đáy */}
                  <div className="mt-auto flex justify-center">
                    <Button
                      variant="contained"
                      className="font-semibold rounded-full"
                      sx={{
                        backgroundColor: "#db2777", // pink-600
                        "&:hover": { backgroundColor: "#be185d" }, // pink-700
                        textTransform: "none",
                        fontWeight: 600,
                        paddingX: "24px",
                        paddingY: "8px",
                        borderRadius: "9999px",
                        width: "160px",
                      }}
                    >
                      Đặt Lịch Ngay
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ưu Đãi Đặc Biệt Cho Khách Hàng Nữ
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Đặt combo 2 dịch vụ trở lên và nhận ngay ưu đãi 15% cho lần đầu
              tiên!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="contained"
                className="font-semibold rounded-full"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#db2777", // pink-600
                  "&:hover": { backgroundColor: "#f1f5f9" }, // slate-100
                  textTransform: "none",
                  fontWeight: 600,
                  paddingX: "24px",
                  paddingY: "12px",
                  borderRadius: "9999px",
                }}
              >
                Xem Combo Ưu Đãi
              </Button>
              <Button
                variant="outlined"
                className="font-semibold rounded-full"
                sx={{
                  borderColor: "#ffffff",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    color: "#db2777", // pink-600
                    borderColor: "#ffffff",
                  },
                  textTransform: "none",
                  fontWeight: 600,
                  paddingX: "24px",
                  paddingY: "12px",
                  borderRadius: "9999px",
                  borderWidth: "2px",
                }}
              >
                Tư Vấn Miễn Phí
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenServices;
