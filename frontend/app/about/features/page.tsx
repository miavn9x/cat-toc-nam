import Head from "next/head";
import Link from "next/link";

const FeaturesPage = () => {
  return (
    <>
      <Head>
        <title>
          Service Advantages - Winchair Beauty Spa | Luxury Beauty Vietnam Price
        </title>
        <meta
          name="description"
          content="Discover the great benefits of Winchair Beauty Spa - High quality hair and beauty services at affordable prices in Etobicoke, Ontario. High style, smart spending."
        />
        <meta
          name="keywords"
          content="service advantages, Winchair Beauty Spa, Etobicoke hair salon, men's and women's haircuts, hair coloring, skin care, cheap, high quality"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://www.winchairbeautyspa.com/service-advantages"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Service Advantages - Winchair Beauty Spa",
              "description": "High quality beauty services at affordable prices",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Winchair Beauty Spa",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "3347 Bloor Street West",
                  "addressLocality": "Etobicoke",
                  "addressRegion": "Ontario",
                  "addressCountry": "Canada"
                }
              }
            }
          `}
        </script>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Hero Section - Fully Responsive */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Pattern - Responsive */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8">
                <span className="text-amber-300 font-medium text-xs sm:text-sm tracking-wider uppercase">
                  Premium Beauty Experience
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-extralight text-white leading-none mb-6 sm:mb-8 px-4">
              Why Choose
              <span className="block font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mt-2 sm:mt-4">
                Winchair Beauty Spa
              </span>
            </h1>

            <div className="w-16 sm:w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8 sm:mb-12"></div>

            <p className="text-lg sm:text-2xl lg:text-3xl text-gray-300 font-light mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed px-4">
              Luxury Beauty Salon With Vietnamese Prices
            </p>

            <p className="text-sm sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
              At{" "}
              <span className="text-amber-300 font-medium">
                3347 Bloor Street West, Etobicoke, Ontario
              </span>
              , We offer world-class beauty experiences at affordable prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full text-black font-semibold text-base sm:text-lg tracking-wide shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-auto">
                <Link href={"/booking"} className="relative z-10">
                  Make an Appointment Now
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <Link
                href={"/contact"}
                className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-white/20 rounded-full text-white font-medium text-base sm:text-lg tracking-wide backdrop-blur-sm hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-300 w-full sm:w-auto"
              >
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div> */}
        </section>

        {/* Value Proposition - Responsive */}
        <section className="py-16 sm:py-32 bg-gradient-to-b from-black to-slate-900 relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1200&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-6 sm:mb-8">
                  <span className="text-amber-400 font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
                    Our Philosophy
                  </span>
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-white leading-tight mb-6 sm:mb-8">
                    What to Do
                    <span className="block bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent font-light mt-2">
                      The Difference
                    </span>
                  </h2>
                </div>

                <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-12 text-justify">
                  We believe that beauty is not the privilege of the rich. At
                  Winchair Beauty Spa, we offer world-class services at prices
                  that are accessible to everyone.
                </p>

                <div className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-base sm:text-lg">
                        !
                      </span>
                    </div>
                    <div>
                      <h3 className="text-amber-300 font-semibold text-base sm:text-lg mb-2">
                        Important Note
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-justify">
                        Price level &quot;from&quot; may vary depending on
                        complexity, hair length and amount of product used. All
                        prices exclude tax. We are committed to transparency in
                        our pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/img/classy-space.webp"
                    alt="Luxury spa interior with modern design"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                      <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">
                        Luxurious Space
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm text-justify">
                        Modern design, high-end equipment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-12 sm:w-24 h-12 sm:h-24 bg-gradient-to-br from-rose-400/30 to-pink-500/30 rounded-full blur-xl opacity-60"></div>
                <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-xl opacity-40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Men's Services - Responsive */}
        <section className="py-16 sm:py-32 bg-gradient-to-br from-slate-900 to-gray-900 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <span className="text-blue-400 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 block">
                For Gentlemen
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extralight text-white leading-tight mb-6 sm:mb-8 px-4">
                Men&#39;s Hair Services
                <span className="block text-lg sm:text-3xl lg:text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-light mt-2 sm:mt-4">
                  High Style, Smart Spending
                </span>
              </h2>
              <p className="text-base sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 text-justify">
                A great hairstyle is more than just a cut – it&#39;s about your
                personal style and confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-6 mb-12 sm:mb-16">
              <div className="lg:col-span-2">
                <div className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/img/satisfaction-guarantee.webp"
                    alt="Professional men's haircut service"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 w-full">
                  <h3 className="text-xl sm:text-2xl font-light text-white mb-4 sm:mb-6">
                    Professional & Modern
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base text-justify">
                    From classic cuts to the latest trends, we create styles to
                    suit every individual and lifestyle.
                  </p>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base">
                        ✓
                      </span>
                    </div>
                    <span className="text-blue-300 font-medium text-sm sm:text-base">
                      100% Satisfaction Guaranteed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6">
              {[
                {
                  title: "High-end Men's Haircut",
                  subtitle: "Premium Men's Haircut",
                  price: "From $35",
                  image: "/img/mens-hair-services.webp",
                  features: [
                    "Personal Style Advice",
                    "Relaxing Shampoo",
                    "Professional Styling",
                    "Hairstyle Guarantee",
                  ],
                  description:
                    "Custom hair styles that perfectly fit your style and your life.",
                },
                {
                  title: "Professional Fade Cut",
                  subtitle: "Professional Skin Fade",
                  price: "From $40",
                  image: "/img/mens-haircut.webp",
                  features: [
                    "Precise Fade",
                    "Modern Technique",
                    "Long Lasting Form",
                    "Maintenance Advice",
                  ],
                  description:
                    "Super clean, modern fade with precision from the pros.",
                },
                {
                  title: "Hot Towel Shave",
                  subtitle: "Traditional Hot Towel Shave",
                  price: "From $55",
                  image: "/img/mens-hot-shave-1.webp",
                  features: [
                    "Relaxing Hot Towel",
                    "Traditional Shave",
                    "Facial Care",
                    "Relaxing Massage",
                  ],
                  description:
                    "A classy shaving experience with traditional and modern techniques.",
                },
                {
                  title: "Artistic Beard Trimming",
                  subtitle: "Artistic Beard Trim",
                  price: "From $16",
                  image: "/img/mens-beard-trim.webp",
                  features: [
                    "Professional styling",
                    "Style advice",
                    "Premium products",
                    "Care instructions",
                  ],
                  description:
                    "Professional beard styling that suits your face and personal style.",
                },
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-blue-400/30 transition-all duration-500">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6">
                        <div className="mb-3 sm:mb-0">
                          <h3 className="text-lg sm:text-2xl font-light text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-xs sm:text-sm italic">
                            {service.subtitle}
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="text-2xl sm:text-3xl font-light bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {service.price}
                          </span>
                          <p className="text-gray-500 text-xs">+ thuế</p>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base text-justify">
                        {service.description}
                      </p>

                      <div className="space-y-2 sm:space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2 sm:space-x-3"
                          >
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                            <span className="text-gray-400 text-xs sm:text-sm text-justify">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Women's Services - Responsive */}
        <section className="py-16 sm:py-32 bg-gradient-to-br from-gray-900 to-rose-900/20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <span className="text-rose-400 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 block">
                For Ladies
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extralight text-white leading-tight mb-6 sm:mb-8 px-4">
                Women&#39;s Hair Services
                <span className="block text-lg sm:text-3xl lg:text-4xl bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent font-light mt-2 sm:mt-4">
                  Natural Beauty, Outstanding Value
                </span>
              </h2>
              <p className="text-base sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
                We strive to transform your hair into a beautiful, sustainable
                and confident asset.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
              {[
                {
                  title: "High-end Women's Haircut",
                  subtitle: "Premium Women's Haircut",
                  price: "From $55",
                  image: "/img/womens-hair-services.webp",
                  specialty: "Personal style advice",
                },
                {
                  title: "Professional Hair Coloring",
                  subtitle: "Professional Hair Coloring",
                  price: "From $65",
                  image: "/img/hair-coloring.webp",
                  specialty: "High quality products from Italy",
                },
                {
                  title: "Art Highlight",
                  subtitle: "Artistic Hair Highlights",
                  price: "From $180",
                  image: "/img/hair-highlights.webp",
                  specialty: "Seamless blending technique",
                },
                {
                  title: "Modern Hair Perm",
                  subtitle: "Modern Hair Perm",
                  price: "From $85",
                  image: "/img/hair-perm.webp",
                  specialty: "Lasts for months",
                },
                {
                  title: "High Quality Hair Straightening",
                  subtitle: "Premium Hair Relaxer",
                  price: "From $160",
                  image: "/img/hair-straightening.webp",
                  specialty: "Advanced Keratin Technology",
                },
                {
                  title: "Prom Hairstyle",
                  subtitle: "Elegant Evening Updo",
                  price: "$120",
                  image: "/img/prom-hairstyle.webp",
                  specialty: "Perfect for special events",
                },
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-rose-400/30 transition-all duration-500 h-full">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-base sm:text-xl font-light text-white mb-1 sm:mb-2 group-hover:text-rose-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm italic mb-2 sm:mb-3">
                          {service.subtitle}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg sm:text-2xl font-light bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                            {service.price}
                          </span>
                          <span className="text-gray-500 text-xs">+ tax</span>
                        </div>
                      </div>

                      <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
                          <span className="text-rose-300 text-xs sm:text-sm font-medium">
                            {service.specialty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kids & Additional Services - Responsive */}
        <section className="py-16 sm:py-32 bg-gradient-to-br from-slate-900 to-purple-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">
              {/* Kids Services */}
              <div>
                <div className="mb-8 sm:mb-12">
                  <span className="text-purple-400 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 block">
                    For Baby
                  </span>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extralight text-white leading-tight mb-4 sm:mb-6">
                    Children&#39;s Hair Services
                    <span className="block text-base sm:text-2xl bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent font-light mt-1 sm:mt-2">
                      Pretty Hair, Happy Parents
                    </span>
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                    Fun and comfortable environment for our youngest customers.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      title: "Boys Haircuts",
                      price: "From $25",
                      image: "/img/boy-haircut.webp",
                      features: [
                        "Friendly space",
                        "Patient stylist",
                        "Entertainment toys",
                      ],
                    },
                    {
                      title: "Baby Girl Haircut",
                      price: "From $35",
                      image: "/img/girl-haircut.webp",
                      features: [
                        "Cute hairstyle",
                        "Age appropriate",
                        "Easy care",
                      ],
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="w-full sm:w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3">
                            <h3 className="text-base sm:text-xl font-light text-white mb-1 sm:mb-0">
                              {service.title}
                            </h3>
                            <span className="text-base sm:text-xl font-light bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                              {service.price}
                            </span>
                          </div>
                          <div className="space-y-1 sm:space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-400 rounded-full"></div>
                                <span className="text-gray-400 text-xs sm:text-sm">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beauty & Care Services */}
              <div>
                <div className="mb-8 sm:mb-12">
                  <span className="text-emerald-400 font-medium text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 block">
                    Care & Beauty
                  </span>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extralight text-white leading-tight mb-4 sm:mb-6">
                    Premium Service
                    <span className="block text-base sm:text-2xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-light mt-1 sm:mt-2">
                      Radiant & Relaxing
                    </span>
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                    Intensive treatments to enhance natural beauty and overall
                    health.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      title: "Premium Facial Care",
                      subtitle: "Premium Facial Treatment",
                      price: "From $90",
                      duration: "60 minutes",
                      image: "/img/facial-care.webp",
                    },
                    {
                      title: "Hair Treatment",
                      subtitle: "Hair Nourishing Therapy",
                      price: "$90",
                      duration: "45 minutes",
                      image: "/img/hair-treatment.webp",
                    },
                    {
                      title: "Relaxing Scalp Massage",
                      subtitle: "Relaxing Scalp Massage",
                      price: "$85",
                      duration: "30 minutes",
                      image: "/img/scalp-massage.webp",
                    },
                    {
                      title: "Professional Hair Removal",
                      subtitle: "Professional Waxing",
                      price: "From $16",
                      duration: "15-30 minutes",
                      image: "/img/waxing-service.webp",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400/30 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-32 h-32 sm:h-24 flex-shrink-0">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-3 sm:p-4">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 sm:mb-2">
                            <div className="mb-2 sm:mb-0">
                              <h3 className="text-sm sm:text-lg font-light text-white">
                                {service.title}
                              </h3>
                              <p className="text-gray-400 text-xs sm:text-sm italic">
                                {service.subtitle}
                              </p>
                            </div>
                            <div className="text-left sm:text-right">
                              <span className="text-sm sm:text-lg font-light bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                {service.price}
                              </span>
                              <p className="text-gray-500 text-xs">
                                {service.duration}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Responsive */}
        <section className="py-16 sm:py-32 bg-gradient-to-br from-black to-slate-900 relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1200&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 sm:p-16 border border-white/10">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-white leading-tight mb-6 sm:mb-8 px-4">
                Ready to Explore
                <span className="block bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent font-light mt-2">
                  Classy Beauty?
                </span>
              </h2>

              <div className="w-16 sm:w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8 sm:mb-12"></div>

              <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
                Let us help you shine with your natural beauty and unique style.
                Book an appointment today to experience the difference at
                Winchair Beauty Spa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="group relative px-12 sm:px-16 py-4 sm:py-6 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full text-black font-bold text-lg sm:text-xl tracking-wide shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-auto">
                  <Link href={"/booking"} className="relative z-10 text-lg">
                    Make an Appointment Now
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <Link
                  href={"/contact"}
                  className="px-12 sm:px-16 py-4 sm:py-6 border-2 border-white/20 rounded-full text-white font-semibold text-lg tracking-wide backdrop-blur-sm hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-300 w-full sm:w-auto"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FeaturesPage;
