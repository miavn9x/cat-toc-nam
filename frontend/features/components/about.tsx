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
                Why Choose
                <br />
                <span className="text-gray-500 font-extralight">
                  Winchair Beauty Spa?
                </span>
              </h2>
              <div className="w-24 h-px bg-slate-900"></div>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light text-justify">
              <p>
                Hi! In the midst of busy Canadian life, taking time to take care
                of yourself is not just a luxury – it is a necessity.
              </p>

              <p>
                At Winchair Beauty Spa, we understand that. We have created a
                friendly, relaxing space where you can truly relax, recharge and
                leave looking confident and radiant.
              </p>

              <p className="text-slate-900 font-normal">
                What makes us different? We believe that high-quality hair care
                and beauty doesn&#39;t have to be expensive.
              </p>

              <p>
                That&#39;s why we offer luxury at an affordable price, ensuring
                you receive first-class service and great value every time you
                visit.
              </p>
            </div>

            <div className="bg-gray-100 p-8 border-l-2 border-slate-900">
              <p className="text-sm text-gray-500 italic font-light leading-relaxed">
                <strong className="font-normal">Note:</strong> Prices marked
                with &quot;from&quot; may vary depending on hair length,
                thickness, complexity of service, or amount of product used. All
                prices do not include applicable taxes.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-2xl">
              <Image
                src="/img/high-quality.webp"
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
                  <p className="font-light text-white text-lg">High Quality</p>
                  <p className="text-sm text-gray-400 font-light">Affordable</p>
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
