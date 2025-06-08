"use client"; // Mark as Client Component

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: "💎",
      title: "Chất Lượng Đẳng Cấp",
      description: "Sản phẩm và dịch vụ chất lượng cao với công nghệ hiện đại",
    },
    {
      icon: "💰",
      title: "Giá Cả Phải Chăng",
      description:
        "Vẻ đẹp sang trọng với mức giá Việt Nam, phù hợp mọi túi tiền",
    },
    {
      icon: "🏆",
      title: "Chuyên Gia Giàu Kinh Nghiệm",
      description: "Đội ngũ stylist và chuyên viên thẩm mỹ lành nghề, tận tâm",
    },
    {
      icon: "🌟",
      title: "Không Gian Thư Giãn",
      description: "Môi trường thân thiện, sạch sẽ và thoải mái nhất",
    },
    {
      icon: "⏰",
      title: "Tiết Kiệm Thời Gian",
      description: "Dịch vụ nhanh chóng, hiệu quả mà vẫn đảm bảo chất lượng",
    },
    {
      icon: "🎯",
      title: "Tư Vấn Cá Nhân Hóa",
      description:
        "Dịch vụ được thiết kế riêng theo nhu cầu và phong cách của bạn",
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-medium text-slate-800 mb-6">
            Tại Sao Chọn{" "}
            <span className="text-amber-600 font-light">Chúng Tôi?</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl font-inter text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Bạn đã sẵn sàng khám phá cách Winchair Beauty Spa giúp bạn đẹp hơn
            và cảm thấy tuyệt vời hơn mà không lo {"cháy túi"} chưa?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-xl border border-stone-200 hover:bg-gradient-to-br hover:from-slate-800 hover:to-slate-900 hover:border-amber-500 transition-all duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 text-center"
              tabIndex={0}
              aria-label={`Lợi ích: ${benefit.title}`}
            >
              <div className="text-5xl mb-6 group-hover:scale-105 group-hover:text-amber-400 transition-all duration-300 ease-in-out">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-playfair font-medium text-slate-800 group-hover:text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-lg font-inter text-slate-600 group-hover:text-stone-200 font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
