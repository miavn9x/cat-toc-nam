import Image from "next/image";
import Link from "next/link";

const MenServices = () => {
  const services = [
    {
      name: "Men's Haircut",
      price: "From $35 + tax",
      description:
        "Tailored hairstyles to suit your style and lifestyle. Includes relaxing shampoo and professional styling.",
      benefits:
        "The foundation for a longer lasting, sharper look that's cost-effective",
      image: "/img/mens-haircut.webp",
    },
    {
      name: "Cut Fade",
      price: "From $40 + tax",
      description:
        "Super clean, modern fade done perfectly every time by the pros.",
      benefits:
        "Extremely clean, precise fade, long lasting form, reducing the cost of frequent editing",
      image: "/img/mens-fade-cut.webp",
    },
    {
      name: "Hot Shave",
      price: "From $55 + tax",
      description:
        "Experience the ultimate traditional shave with a hot towel, delivering a close and comfortable shave.",
      benefits:
        "Not just a shave but a relaxing facial treatment that promotes skin health",
      image: "/img/mens-hot-shave.webp",
    },
    {
      name: "Beard Trimming",
      price: "From $16 + tax",
      description:
        "Keep your beard in tip-top condition with professional trimming and styling services.",
      benefits:
        "Professionally shaped beard grows more evenly and is easy to care for at home",
      image: "/img/mens-beard-trim.webp",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
            Service{" "}
            <span className="text-gray-500 font-extralight">
              Men&#39;s Hair
            </span>
          </h2>
          <div className="w-24 h-px bg-slate-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            High Style, Smart Spending! Investing in quality and sustainable
            style is worth it.
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
                        <strong className="font-normal">Benefit:</strong>{" "}
                        {service.benefits}
                      </p>
                    </div>

                    <Link
                      href="/booking"
                      className="block w-full bg-slate-900 group-hover:bg-white text-white group-hover:text-slate-900 font-light py-4 transition-all duration-700 tracking-wide text-center"
                    >
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-900 text-white p-12 shadow-2xl max-w-5xl mx-auto">
            <h3 className="text-3xl font-light mb-8">
              Why Choose Men&#39;s Hair Services At Winchair?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-white text-slate-900 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✂️</span>
                </div>
                <h4 className="font-light text-white mb-3 text-lg">
                  Skilled Professional
                </h4>
                <p className="text-sm text-gray-400 font-light">
                  Experienced stylist, understands men&#39;s trends
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-white text-slate-900 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h4 className="font-light text-white mb-3 text-lg">
                  Reasonable Price
                </h4>
                <p className="text-sm text-gray-400 font-light">
                  High quality with the most affordable price on the market
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-white text-slate-900 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⏱️</span>
                </div>
                <h4 className="font-light text-white mb-3 text-lg">
                  Save Time
                </h4>
                <p className="text-sm text-gray-400 font-light">
                  Fast, efficient service for busy lifestyles
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
