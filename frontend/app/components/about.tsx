import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 leading-tight">
                Vì Sao Nên Chọn
                <br />
                <span className="text-gray-500 font-extralight">
                  Winchair Beauty Spa?
                </span>
              </h2>
              <div className="w-24 h-px bg-slate-900"></div>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light text-justify">
              <p>
                Chào bạn! Giữa cuộc sống bận rộn ở Canada, việc dành thời gian
                chăm sóc bản thân không chỉ là điều xa xỉ – đó là một nhu cầu
                thiết yếu.
              </p>

              <p>
                Tại Winchair Beauty Spa, chúng tôi hiểu rõ điều đó. Chúng tôi đã
                tạo ra một không gian thân thiện, thư giãn, nơi bạn có thể thật
                sự nghỉ ngơi, tái tạo năng lượng và rời đi với vẻ ngoài tự tin,
                rạng rỡ.
              </p>

              <p className="text-slate-900 font-normal">
                Điều gì làm nên sự khác biệt của chúng tôi? Chúng tôi tin rằng
                chăm sóc tóc và làm đẹp chất lượng cao không cần phải tốn kém.
              </p>

              <p>
                Đó là lý do vì sao chúng tôi mang đến vẻ đẹp sang trọng với mức
                giá phải chăng, đảm bảo bạn luôn nhận được dịch vụ đẳng cấp và
                giá trị tuyệt vời mỗi khi ghé thăm.
              </p>
            </div>

            <div className="bg-gray-100 p-8 border-l-2 border-slate-900">
              <p className="text-sm text-gray-500 italic font-light leading-relaxed">
                <strong className="font-normal">Lưu ý:</strong> Mức giá có chữ
                &quot;từ&quot; có thể thay đổi tùy thuộc vào độ dài, độ dày của
                tóc, độ phức tạp của dịch vụ hoặc lượng sản phẩm sử dụng. Tất cả
                giá đều chưa bao gồm thuế áp dụng.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg"
                alt="Spa Interior"
                width={600}
                height={700}
                className="w-full h-[600px] lg:h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-8 shadow-2xl max-w-xs">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white text-slate-900 flex items-center justify-center">
                  <span className="font-light text-2xl">✨</span>
                </div>
                <div>
                  <p className="font-light text-white text-lg">
                    Chất Lượng Cao
                  </p>
                  <p className="text-sm text-gray-400 font-light">
                    Giá Phải Chăng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;