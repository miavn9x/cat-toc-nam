import Head from "next/head";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>
          About Winchair Beauty Spa - Luxury Hair & Beauty in Etobicoke
        </title>
        <meta
          name="description"
          content="Discover luxury hair and beauty services at Winchair Beauty Spa in Etobicoke, Ontario. Affordable men's and women's haircuts, coloring, facials, waxing, and more."
        />
        <meta
          name="keywords"
          content="Winchair Beauty Spa, hair salon Etobicoke, men's haircut, women's haircut, hair coloring, facials, waxing, affordable beauty services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.winchairbeautyspa.com/about" />
      </Head>

      <div className=" bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Hero Section - Responsive */}
        <section className="pt-20 sm:pt-32 pb-12 sm:pb-20 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-rose-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Content */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-4 rounded-full bg-white/5 backdrop-blur-xl border border-amber-500/30 mb-8 sm:mb-12">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-amber-400 rounded-full mr-2 sm:mr-4 animate-pulse"></div>
                <span className="text-amber-300 font-semibold text-xs sm:text-lg tracking-wide uppercase">
                  Welcome To Winchair Beauty Spa
                </span>
              </div>

              <h1 className="text-4xl sm:text-7xl lg:text-9xl font-extralight text-white leading-none mb-8 sm:mb-12">
                Winchair
                <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-light mt-2 sm:mt-4">
                  Beauty Spa
                </span>
              </h1>

              <div className="flex items-center justify-center mb-8 sm:mb-16">
                <div className="w-16 sm:w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-amber-400 rounded-full mx-4 sm:mx-8 shadow-lg shadow-amber-400/50"></div>
                <div className="w-16 sm:w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>

              <h2 className="text-xl sm:text-4xl lg:text-5xl text-gray-300 font-light mb-8 sm:mb-12 leading-relaxed px-4">
                Luxury Beauty at Affordable Prices
              </h2>

              <p className="text-base sm:text-2xl text-gray-400 max-w-5xl mx-auto leading-relaxed mb-12 sm:mb-16 px-4">
                Located at{" "}
                <span className="text-amber-300 font-semibold">
                  3347 Bloor Street West, Etobicoke, Ontario
                </span>
                , we offer a luxurious relaxing space where you can recharge and
                shine with natural beauty.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <button className="group relative px-8 sm:px-16 py-4 sm:py-6 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full text-black font-bold text-lg sm:text-2xl tracking-wide shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Explore Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-8 sm:px-16 py-4 sm:py-6 border-2 border-amber-400/50 rounded-full text-amber-300 font-semibold text-lg sm:text-2xl backdrop-blur-sm hover:bg-amber-400/10 hover:border-amber-400 transition-all duration-300">
                  View Price List
                </button>
              </div>
            </div>

            {/* Stats Cards - Responsive Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-20 px-4">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-5xl font-light text-amber-400 mb-2 sm:mb-4">
                  5+
                </div>
                <div className="text-gray-300 font-medium uppercase tracking-wider text-xs sm:text-base">
                  Years of Experience
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-5xl font-light text-amber-400 mb-2 sm:mb-4">
                  2000+
                </div>
                <div className="text-gray-300 font-medium uppercase tracking-wider text-xs sm:text-base">
                  Client
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-5xl font-light text-amber-400 mb-2 sm:mb-4">
                  15+
                </div>
                <div className="text-gray-300 font-medium uppercase tracking-wider text-xs sm:text-base">
                  Service
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-5xl font-light text-amber-400 mb-2 sm:mb-4">
                  100%
                </div>
                <div className="text-gray-300 font-medium uppercase tracking-wider text-xs sm:text-base">
                  Quality
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Story - Responsive Layout */}
        <section className="py-16 sm:py-32 bg-gradient-to-b from-black/50 to-slate-900/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <span className="text-amber-400 font-semibold text-sm sm:text-lg tracking-wider uppercase mb-4 sm:mb-8 block">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-6xl lg:text-7xl font-extralight text-white leading-tight mb-4 sm:mb-8 px-4">
                Why Choose
                <span className="block bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent font-light mt-2 sm:mt-4">
                  Winchair Beauty Spa
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Winchair Beauty Spa elegant interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                      <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">
                        Classy Space
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        Modern, luxurious design in the heart of Etobicoke
                      </p>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-br from-amber-400/30 to-yellow-500/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-rose-400/30 to-pink-500/30 rounded-full blur-2xl"></div>
              </div>

              {/* Content */}
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <div className="space-y-6 sm:space-y-8 text-base sm:text-xl text-gray-300 leading-relaxed text-justify">
                  <p>
                    In the midst of Canada&#39;s busy life, self-care is not
                    just a luxury but a necessity. At Winchair Beauty Spa, we
                    understand that every client deserves to experience
                    first-class service.
                  </p>
                  <p>
                    We pride ourselves on providing a luxurious, relaxing space
                    where you can temporarily forget about your daily stresses,
                    recharge your energy and confidently shine with your most
                    natural beauty.
                  </p>
                  <p>
                    With a team of experienced professionals and modern
                    equipment, we are committed to providing the perfect beauty
                    experience at a price that everyone can access.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-lg sm:text-2xl">
                        💡
                      </span>
                    </div>
                    <div>
                      <h3 className="text-amber-300 font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                        Commitment to Transparency
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-lg text-justify">
                        Price level &quot;from&quot; may vary depending on
                        complexity, hair length and amount of product used. All
                        prices do not include tax. We always provide detailed
                        consultations before performing the service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Responsive Grid */}
        <section className="py-16 sm:py-32 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <span className="text-blue-400 font-semibold text-sm sm:text-lg tracking-wider uppercase mb-4 sm:mb-8 block">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-6xl lg:text-7xl font-extralight text-white leading-tight mb-4 sm:mb-8 px-4">
                The Complete Experience
              </h2>
              <p className="text-lg sm:text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-light mb-4 sm:mb-8">
                For All Beauty Needs
              </p>
              <p className="text-base sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
                From men&#39;s and women&#39;s haircuts to intensive skin care
                treatments, we offer the perfect beauty solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6">
              {[
                {
                  category: "Men's Hair Services",
                  icon: "👨‍💼",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Men's Haircut",
                    "Cut Fade",
                    "Hot Shave",
                    "Beard Trimming",
                  ],
                  priceRange: "$16 - $55",
                  color: "from-blue-400 to-cyan-400",
                  bgColor: "from-blue-900/20 to-cyan-900/20",
                  borderColor: "border-blue-400/30",
                },
                {
                  category: "Women's Hair Services",
                  icon: "👩‍💼",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Women's Haircut",
                    "Hair Coloring",
                    "Highlight",
                    "Bending/Stretching",
                  ],
                  priceRange: "$55 - $180",
                  color: "from-rose-400 to-pink-400",
                  bgColor: "from-rose-900/20 to-pink-900/20",
                  borderColor: "border-rose-400/30",
                },
                {
                  category: "Children's Services",
                  icon: "👶",
                  image: "/placeholder.svg?height=400&width=600",
                  services: ["Boys Haircuts", "Girls Haircuts"],
                  priceRange: "$25 - $35",
                  color: "from-purple-400 to-indigo-400",
                  bgColor: "from-purple-900/20 to-indigo-900/20",
                  borderColor: "border-purple-400/30",
                },
                {
                  category: "Care & Beauty",
                  icon: "✨",
                  image: "/placeholder.svg?height=400&width=600",
                  services: ["Facial Care", "Hair Removal", "Scalp Massage"],
                  priceRange: "$16 - $90",
                  color: "from-emerald-400 to-teal-400",
                  bgColor: "from-emerald-900/20 to-teal-900/20",
                  borderColor: "border-emerald-400/30",
                },
              ].map((category, index) => (
                <div key={index} className="group">
                  <div
                    className={`bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:${category.borderColor} hover:bg-white/10 transition-all duration-500 h-full`}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.category}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                        <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0">
                          <div className="text-2xl sm:text-4xl">
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-2xl font-light text-white mb-1 sm:mb-2">
                              {category.category}
                            </h3>
                            <div
                              className={`text-base sm:text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                            >
                              {category.priceRange}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`bg-gradient-to-r ${category.bgColor} border ${category.borderColor} rounded-xl sm:rounded-2xl p-4 sm:p-6`}
                      >
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {category.services.map((service, serviceIndex) => (
                            <li
                              key={serviceIndex}
                              className="flex items-center text-gray-300 text-sm sm:text-base"
                            >
                              <div
                                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${category.color} rounded-full mr-2 sm:mr-3 flex-shrink-0`}
                              ></div>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Responsive Grid */}
        <section className="py-16 sm:py-32 bg-gradient-to-br from-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <span className="text-amber-400 font-semibold text-sm sm:text-lg tracking-wider uppercase mb-4 sm:mb-8 block">
                Outstanding Advantages
              </span>
              <h2 className="text-3xl sm:text-6xl lg:text-7xl font-extralight text-white leading-tight mb-4 sm:mb-8 px-4">
                Why Choose Us
              </h2>
              <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                We are committed to providing a wonderful beauty experience with
                top quality service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
              {[
                {
                  icon: "💎",
                  title: "Premium Quality",
                  desc: "Using world-class products and equipment, ensuring optimal results for every service.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  icon: "👨‍💼",
                  title: "Team of Experts",
                  desc: "Stylists and estheticians are well trained and have many years of experience in the industry.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  icon: "🏢",
                  title: "Luxurious Space",
                  desc: "Modern, luxurious design with a relaxing, clean environment in the heart of Etobicoke.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  icon: "🎯",
                  title: "Personalized Service",
                  desc: "Each service is tailored to your needs, style and personal characteristics.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  icon: "💰",
                  title: "Reasonable Price",
                  desc: "High quality service at competitive prices to suit every budget and need.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  icon: "⭐",
                  title: "Satisfaction Guarantee",
                  desc: "We are committed to providing 100% satisfaction with our dedicated warranty and support policies.",
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/30 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 sm:p-8">
                      <div className="text-3xl sm:text-5xl mb-4 sm:mb-6">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-light text-white mb-3 sm:mb-4 group-hover:text-amber-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-lg">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact - Responsive */}
        <section className="py-16 sm:py-32 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <span className="text-emerald-400 font-semibold text-sm sm:text-lg tracking-wider uppercase mb-4 sm:mb-8 block">
                Location and Contact
              </span>
              <h2 className="text-3xl sm:text-6xl lg:text-7xl font-extralight text-white leading-tight mb-4 sm:mb-8 px-4">
                Visit Us
              </h2>
              <p className="text-lg sm:text-2xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-light">
                At Etobicoke Centre
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
              {/* Contact Info */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg sm:text-2xl">
                        📍
                      </span>
                    </div>
                    <div>
                      <h3 className="text-emerald-300 font-bold text-lg sm:text-2xl mb-2 sm:mb-3">
                        Address
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">
                        3347 Bloor Street West
                        <br />
                        Etobicoke, Ontario, Canada
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg sm:text-2xl">
                        🚗
                      </span>
                    </div>
                    <div>
                      <h3 className="text-blue-300 font-bold text-lg sm:text-2xl mb-2 sm:mb-3">
                        Traffic
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">
                        Easily accessible by car and public transport
                        <br />
                        Convenient parking available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg sm:text-2xl">
                        ⏰
                      </span>
                    </div>
                    <div>
                      <h3 className="text-amber-300 font-bold text-lg sm:text-2xl mb-2 sm:mb-3">
                        Working Hours
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">
                        Monday - Sunday
                        <br />
                        9:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Image */}
              <div className="relative order-1 lg:order-2">
                <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Winchair Beauty Spa location and exterior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                      <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">
                        📍 Winchair Beauty Spa
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                        3347 Bloor Street West, Etobicoke, ON
                      </p>
                      <button className="px-4 sm:px-6 py-2 sm:py-3 border border-white/30 rounded-full text-white font-medium backdrop-blur-sm hover:border-emerald-400/50 hover:bg-emerald-400/10 transition-all duration-300 text-sm sm:text-base">
                        View Map
                      </button>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Responsive */}
        <section className="py-16 sm:py-32 bg-gradient-to-br from-black to-slate-900 relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1200&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-20 border border-white/10">
              <h2 className="text-3xl sm:text-6xl lg:text-7xl font-extralight text-white leading-tight mb-8 sm:mb-12 px-4">
                Ready to Shine With
                <span className="block bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent font-light mt-2 sm:mt-4">
                  Winchair Beauty Spa?
                </span>
              </h2>

              <div className="flex items-center justify-center mb-8 sm:mb-16">
                <div className="w-16 sm:w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-amber-400 rounded-full mx-4 sm:mx-8 shadow-lg shadow-amber-400/50"></div>
                <div className="w-16 sm:w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>

              <p className="text-base sm:text-2xl text-gray-300 leading-relaxed mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
                Come to us to experience high-class service at affordable
                prices. Book an appointment today to discover your natural
                beauty!
              </p>

              <button className="group relative px-12 sm:px-20 py-4 sm:py-8 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full text-black font-bold text-xl sm:text-3xl tracking-wide shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden w-full sm:w-auto">
                <Link href={"/booking"} className="relative z-10">
                  Make an Appointment Now
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
