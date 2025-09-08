import Link from "next/link";
import Image from "next/image";

const WomenServices = () => {
  const services = [
    {
      name: "Women's Haircut",
      price: "From $55 + tax",
      description:
        "A bespoke styling experience that enhances your natural beauty and suits your lifestyle. Includes luxury shampooing and professional styling.",
      benefits:
        "Thorough consultation ensures perfect hairstyle, fewer 'bad hair days' and priceless confidence",
      image: "/img/women-haircut.webp",
    },
    {
      name: "Hair Coloring",
      price: "From $65 + tax",
      description:
        "Get a vibrant new hair colour or refresh your existing colour with professional advice on the perfect shade.",
      benefits:
        "High quality products protect hair, long lasting color and brilliant shine",
      image: "/img/hair-coloring.webp",
    },
    {
      name: "Highlight",
      price: "From $180 + tax",
      description:
        "Add depth and sparkle to hair with stunning, custom highlights for a natural or dramatic effect.",
      benefits:
        "Professional technique ensures seamless blending, with less need for frequent tweaking",
      image: "/img/highlight.webp",
    },
    {
      name: "Hair Perm",
      price: "From $85 + tax",
      description:
        "Add volume, bounce and beautiful waves or curls to your hair with a professional perm service.",
      benefits: "Perfect hair texture, months lasting results, great value",
      image: "/img/hair-perm.webp",
    },
    {
      name: "Hair Straightening",
      price: "From $160 + tax",
      description:
        "Smooth, shiny and manageable hair with a professional straightening treatment that reduces frizz.",
      benefits:
        "Minimize damage, maximize smoothness, and create everyday styles faster.",
      image: "/img/hair-straightening.webp",
    },
    {
      name: "Updo",
      price: "$120 + tax",
      description:
        "Perfect for special occasions, the updo is intricately styled for an elegant and memorable look.",
      benefits: "Guaranteed perfect and hold all day/night, enjoy worry-free",
      image: "/img/updo.webp",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Service <span className="text-pink-600">Women&#39;s Hair</span>
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Natural Beauty, Outstanding Value! Turn your hair into a beautiful,
            sustainable asset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group ">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={800}
                    height={600}
                    className="w-full h-full  object-cover group-hover:scale-110 transition-transform duration-300"
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
                      <strong>💎 Benefit:</strong> {service.benefits}
                    </p>
                  </div>

                  {/* Nút nằm sát đáy */}
                  <div className="mt-auto flex justify-center">
                    <Link
                      href="/booking"
                      className="inline-block font-semibold rounded-full px-6 py-2 text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300 text-center"
                      style={{ width: "160px" }}
                    >
                      BOOK NOW
                    </Link>
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
              Special Offer For Female Customers
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Book a combo of 2 or more services and get 15% off your first
              time!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/service-and-price/womens-hair-services"
                className="inline-block font-semibold rounded-full px-6 py-3 text-pink-600 bg-white hover:bg-slate-100 transition-colors duration-300 text-center"
              >
                View Combo Offers
              </Link>
              <Link
                href="/contact"
                className="inline-block font-semibold rounded-full px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-pink-600 transition-colors duration-300 text-center"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenServices;
