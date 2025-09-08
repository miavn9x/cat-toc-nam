import Link from "next/link";
import Image from "next/image";

const BeautyServices = () => {
  const services = [
    {
      name: "Facial Care",
      duration: "1 Hour",
      price: "From $90 + tax",
      description:
        "Rejuvenate your skin with customized facial treatments – designed to cleanse, nourish and restore your skin.",
      benefits:
        "Professional skin analysis, long lasting visible results, improve skin health",
      image: "/img/facial-care.webp",
      icon: "✨",
    },
    {
      name: "Waxing",
      duration: "Depends on region",
      price: "From $16 + tax",
      description:
        "Achieve soft, smooth skin with professional hair removal for multiple areas.",
      benefits:
        "Less discomfort, longer lasting results than shaving, fewer waxing sessions",
      image: "/img/waxing-service.webp",
      icon: "🪒",
    },
    {
      name: "Eyelash Extensions",
      duration: "2-3 Hours",
      price: "From $85 + tax",
      description:
        "Enhance natural beauty with longer, thicker lashes, professionally applied for a stunning look.",
      benefits:
        "Wake up with naturally beautiful lashes, eliminate daily mascara, save time",
      image: "/img/eyelash-extensions.webp",
      icon: "👁️",
    },
    {
      name: "Microblading Cosmetic Tattooing",
      duration: "2-3 Hours",
      price: "$450 + tax",
      description:
        "Achieve perfectly defined and defined brows with semi-permanent microblading, including 1 free touch-up.",
      benefits:
        "Perfect eyebrows every day, save makeup time, long-term solution",
      image: "/img/microblading-cosmetic-tattooing.webp",
      icon: "🎨",
    },
  ];

  const waxingAreas = [
    { area: "Foot", price: "From $45" },
    { area: "Hand", price: "From $35" },
    { area: "Face", price: "From $16" },
    { area: "Bikini", price: "From $55" },
    { area: "Back", price: "From $65" },
    { area: "Armpit", price: "From $25" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Service <span className="text-amber-600">Beauty Care</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Radiant, Relaxed & Real Results! Enhances natural radiance and
            promotes overall health.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
                        <strong>✨ Benefit:</strong> {service.benefits}
                      </p>
                    </div>

                    <div className="mt-auto flex justify-center">
                      <Link
                        href="/booking"
                        className="inline-block font-semibold rounded-full px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white transition-colors duration-300 text-center"
                        style={{ width: "192px" }}
                      >
                        Book Now
                      </Link>
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
            Professional Hair Removal Service
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
            <Link
              href="/service-and-price/beauty-services"
              className="inline-block font-semibold rounded-full px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white transition-colors duration-300 text-center"
            >
              View Full Price List
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
            What Do Our Customers Say About Us?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Minh Anh",
                service: "Facial Care",
                quote:
                  "My skin has completely changed after the facial treatment at Winchair. The specialists are very dedicated and professional!",
              },
              {
                name: "Thanh Hà",
                service: "Eyelash Extensions",
                quote:
                  "I am very satisfied with the eyelash extension service here. The lashes are natural, beautiful and long lasting. Now I don't need to put on eye makeup every morning!",
              },
              {
                name: "Thu Trang",
                service: "Microblading",
                quote:
                  "My eyebrows are perfect after getting them done at Winchair. Saves a lot of time and always looks natural.",
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
