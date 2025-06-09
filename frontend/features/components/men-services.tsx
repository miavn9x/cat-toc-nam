import Image from "next/image";

const MenServices = () => {
  const services = [
    {
      name: "Cắt Tóc Nam",
      price: "Từ $35 + tax",
      description:
        "Kiểu tóc được thiết kế riêng, hoàn hảo với phong cách và cuộc sống của bạn. Bao gồm gội đầu thư giãn và tạo kiểu chuyên nghiệp.",
      benefits:
        "Nền tảng cho một vẻ ngoài luôn gọn gàng, sắc sảo lâu hơn, tiết kiệm chi phí",
      image: "/placeholder.svg",
    },
    {
      name: "Cắt Fade",
      price: "Từ $40 + tax",
      description:
        "Kiểu fade siêu gọn gàng, hiện đại được thực hiện hoàn hảo từng lần bởi các chuyên gia.",
      benefits:
        "Fade cực kỳ sạch sẽ, chính xác, giữ form lâu bền, giảm chi phí chỉnh sửa thường xuyên",
      image: "/placeholder.svg",
    },
    {
      name: "Cạo Râu Nóng",
      price: "Từ $55 + tax",
      description:
        "Trải nghiệm cạo râu truyền thống đỉnh cao với khăn nóng, mang lại cảm giác cạo sát và thoải mái.",
      benefits:
        "Không chỉ cạo râu mà còn là trị liệu mặt thư giãn, thúc đẩy sức khỏe da",
      image: "/placeholder.svg",
    },
    {
      name: "Tỉa Râu",
      price: "Từ $16 + tax",
      description:
        "Giữ bộ râu của bạn luôn trong tình trạng tốt nhất với dịch vụ tỉa và tạo dáng chuyên nghiệp.",
      benefits:
        "Bộ râu được tạo hình chuyên nghiệp mọc đều hơn, dễ tự chăm sóc tại nhà",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
            Dịch Vụ{" "}
            <span className="text-gray-500 font-extralight">Tóc Nam</span>
          </h2>
          <div className="w-24 h-px bg-slate-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Phong Cách Đỉnh Cao, Chi Tiêu Thông Minh! Đầu tư vào chất lượng và
            phong cách bền vững thật sự đáng giá.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gray-100 hover:bg-slate-900 transition-all duration-700 overflow-hidden shadow-lg hover:shadow-2xl">
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-2/5">
                    <div className="relative overflow-hidden h-80 md:h-full">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-all duration-700"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-8 lg:p-10">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl lg:text-3xl font-light text-slate-900 group-hover:text-white transition-colors duration-700">
                        {service.name}
                      </h3>
                      <span className="bg-slate-900 group-hover:bg-white text-white group-hover:text-slate-900 px-4 py-2 text-sm font-light whitespace-nowrap ml-4 transition-all duration-700 tracking-wide">
                        {service.price}
                      </span>
                    </div>

                    <p className="text-gray-600 group-hover:text-gray-300 mb-6 leading-relaxed font-light transition-colors duration-700">
                      {service.description}
                    </p>

                    <div className="bg-white group-hover:bg-gray-800 p-6 mb-6 transition-all duration-700 border-l-2 border-slate-900 group-hover:border-white">
                      <p className="text-sm text-slate-900 group-hover:text-white font-light transition-colors duration-700">
                        <strong className="font-normal">Lợi ích:</strong>{" "}
                        {service.benefits}
                      </p>
                    </div>

                    <button className="w-full bg-slate-900 group-hover:bg-white text-white group-hover:text-slate-900 font-light py-4 transition-all duration-700 tracking-wide">
                      ĐẶT LỊCH NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-900 text-white p-12 shadow-2xl max-w-5xl mx-auto">
            <h3 className="text-3xl font-light mb-8">
              Tại Sao Chọn Dịch Vụ Tóc Nam Tại Winchair?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-white text-slate-900 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✂️</span>
                </div>
                <h4 className="font-light text-white mb-3 text-lg">
                  Chuyên Gia Lành Nghề
                </h4>
                <p className="text-sm text-gray-400 font-light">
                  Stylist giàu kinh nghiệm, hiểu rõ xu hướng nam giới
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-white text-slate-900 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h4 className="font-light text-white mb-3 text-lg">
                  Giá Cả Hợp Lý
                </h4>
                <p className="text-sm text-gray-400 font-light">
                  Chất lượng cao với mức giá phải chăng nhất thị trường
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-white text-slate-900 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⏱️</span>
                </div>
                <h4 className="font-light text-white mb-3 text-lg">
                  Tiết Kiệm Thời Gian
                </h4>
                <p className="text-sm text-gray-400 font-light">
                  Dịch vụ nhanh chóng, hiệu quả cho lối sống bận rộn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenServices;
