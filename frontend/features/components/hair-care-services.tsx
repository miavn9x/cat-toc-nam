import Link from "next/link";
import Image from "next/image";

const HairCareServices = () => {
  const services = [
    {
      name: "Head washing",
      price: "From $20 + tax",
      description:
        "Refreshing shampoo followed by professional blow drying with an air dryer leaves your hair clean and soft.",
      benefits: "Instantly refresh your look and save time on your busy day",
      image: "/placeholder.svg?height=200&width=300",
      icon: "🧴",
    },
    {
      name: "Shampoo & Styling",
      price: "Advice when booking",
      description:
        "Enjoy a luxurious shampoo followed by beautiful styling with a brush or curling/straightening iron, perfect for a finished look.",
      benefits: "'Just out of the salon' look, save effort in styling at home",
      image: "/placeholder.svg?height=200&width=300",
      icon: "💇‍♀️",
    },
    {
      name: "Hair Treatment",
      price: "$90 + tax",
      description:
        "Deeply nourish and revitalize hair with a specialized conditioning shampoo treatment that restores health and shine.",
      benefits:
        "Repairs damage, increases shine and improves long-term hair manageability",
      image: "/placeholder.svg?height=200&width=300",
      icon: "✨",
    },
    {
      name: "Scalp Massage",
      price: "$85 + tax",
      description:
        "Indulge in a deeply relaxing and therapeutic scalp massage that promotes blood circulation to the scalp.",
      benefits:
        "Promotes healthy hair growth, reduces stress and improves overall health",
      image: "/placeholder.svg?height=200&width=300",
      icon: "💆‍♀️",
    },
  ];

  const benefits = [
    {
      icon: "🌿",
      title: "Natural Products",
      description:
        "Use high quality hair care products that are safe for all hair types",
    },
    {
      icon: "🔬",
      title: "Modern Technology",
      description:
        "Applying the most advanced techniques and equipment in the industry",
    },
    {
      icon: "👩‍⚕️",
      title: "Consultant",
      description:
        "Experienced team of experts provide advice suitable for each hair type",
    },
    {
      icon: "💎",
      title: "Long Lasting Results",
      description: "Long lasting effect, helps save long term costs",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            <span className="text-indigo-600">Take care of</span> & Hair Styling
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Healthy Hair, Naturally Radiant Beauty! Invest in the health and
            vitality of your hair.
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
                        <strong>💜 Benefit:</strong> {service.benefits}
                      </p>
                    </div>

                    {/* Button luôn sát đáy */}
                    <div className="mt-auto flex justify-center">
                      <Link
                        href="/booking"
                        className="inline-block font-semibold rounded-full px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300 text-center"
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

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-slate-900 mb-8">
            Why Choose Hair Care Services At Winchair?
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
            Professional Care Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Advise",
                desc: "Hair and scalp condition analysis",
              },
              {
                step: "02",
                title: "Treatment",
                desc: "Apply appropriate treatment",
              },
              {
                step: "03",
                title: "Take care of",
                desc: "Massage and deep nourishment",
              },
              {
                step: "04",
                title: "Complete",
                desc: "Styling and care instructions",
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
            <Link
              href="/contact"
              className="inline-block font-semibold rounded-full px-8 py-3 bg-white text-indigo-600 hover:bg-slate-100 transition-colors duration-300 text-center"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairCareServices;
