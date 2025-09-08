import Link from "next/link";
import Image from "next/image";

const KidsServices = () => {
  const services = [
    {
      name: "Boys Haircuts",
      price: "From $25",
      description:
        "A friendly, hassle-free haircut experience for kids, guaranteed to leave with a stylish and comfortable hairstyle.",
      benefits:
        "Patient stylists ensure a positive experience, making future haircuts stress-free",
      image: "/img/boy-haircut.webp",
      icon: "👦",
    },
    {
      name: "Baby Girl Haircut",
      price: "From $35",
      description:
        "Fashionable and age-appropriate hairstyles for girls, styled according to your child's preferences and hair type.",
      benefits:
        "Cute and easy to manage hairstyles for parents, practical solutions for busy families",
      image: "/img/girl-haircut.webp",
      icon: "👧",
    },
  ];

  const features = [
    {
      icon: "🎈",
      title: "Environment Friendly",
      description: "Fun, comfortable space designed specifically for children",
    },
    {
      icon: "🎮",
      title: "Entertainment While Cutting",
      description: "Fun activities help children not feel bored",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Parents Rest Assured",
      description: "Professional, safe and affordable service",
    },
    {
      icon: "⭐",
      title: "Positive Experience",
      description:
        "Make a good impression so your child enjoys getting a haircut.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề chính */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Service <span className="text-emerald-600">Baby Hair</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beautiful Hair, Happy Parents! Fun and comfortable environment for
            even the youngest customers.
          </p>
        </div>

        {/* Danh sách dịch vụ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group h-full">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={600}
                      height={400}
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
                      <strong>🌟 Benefit:</strong> {service.benefits}
                    </p>
                  </div>
                  <div className="mt-auto flex justify-center">
                    <Link
                      href="/booking"
                      className="inline-block font-semibold rounded-full px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300 text-center"
                      style={{ width: "192px" }}
                    >
                      Schedule Your Baby
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tính năng nổi bật */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Why Do Parents Trust Winchair?
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
                💡 <strong>Tips:</strong> Schedule in the morning when baby is
                alert and happy for the best experience!
              </p>
            </div>
          </div>
        </div>

        {/* Gọi hành động cuối trang */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Baby&#39;s First Haircut? 🎉
            </h3>
            <p className="text-lg mb-6 opacity-90">
              We will create a special and memorable experience for your baby!
            </p>
            <Link
              href="/booking"
              className="inline-block font-semibold rounded-full px-8 py-3 bg-white text-emerald-600 hover:bg-slate-100 transition-colors duration-300 text-center"
            >
              Special Reservations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsServices;
