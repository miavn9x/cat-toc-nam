import Image from "next/image";
import Link from "next/link";

const ServicesOverview = () => {
  const serviceCategories = [
    {
      title: "Men's Hair Services",
      description: "High style, smart spending",
      image: "/img/mens-hair-services.webp",
      services: ["Men's Haircut", "Fade Cut", "Hot Shave", "Beard Trim"],
      priceFrom: "$16",
      href: "/mens-hair-services",
    },
    {
      title: "Women's Hair Services",
      description: "Natural beauty, outstanding value",
      image: "/img/womens-hair-services.webp",
      services: ["Women's Haircut", "Hair Color", "Highlight", "Hair Perm"],
      priceFrom: "$55",
      href: "/womens-hair-services",
    },
    {
      title: "Baby Hair Services",
      description: "Beautiful hair, happy parents",
      image: "/img/kids-hair-services.webp",
      services: ["Boy Haircut", "Girl Haircut"],
      priceFrom: "$25",
      href: "/kids-hair-services",
    },
    {
      title: "Care & Styling",
      description: "Healthy hair, radiant beauty",
      image: "/img/hair-treatment-and-styling.webp",
      services: ["Hair Wash", "Treatment", "Scalp Massage"],
      priceFrom: "$20",
      href: "/hair-treatment-and-styling",
    },
    {
      title: "Beauty Care",
      description: "Radiant, relaxing & real results",
      image: "/img/beauty-services.webp",
      services: [
        "Facial Care",
        "Hair Removal",
        "Eyelash Extensions",
        "Microblading",
      ],
      priceFrom: "$16",
      href: "/beauty-services",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Service <span className="text-gray-500 font-extralight">Our</span>
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Discover a full range of professional hair and beauty services at
            Winchair Beauty Spa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-800 overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-gray-700 hover:border-gray-500">
                {/* Image */}
                <div className="relative overflow-hidden  aspect-[4/3]">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 bg-white text-slate-900 px-4 py-2 text-sm font-light tracking-wide">
                    FROM {category.priceFrom}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-3 text-white">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 font-light">
                    {category.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {category.services.slice(0, 3).map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-500 font-light"
                      >
                        <span className="w-1 h-1 bg-white rounded-full mr-3"></span>
                        {service}
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="text-sm text-gray-400 font-light">
                        +{category.services.length - 3} other services
                      </div>
                    )}
                  </div>

                  <Link
                    href={`service-and-price/${category.href}`}
                    aria-label={`See details for ${category.title}`}
                    className="block w-full border border-white text-white hover:bg-white hover:text-slate-900 font-light tracking-wide py-2 text-sm text-center transition-all duration-300"
                  >
                    SEE DETAILS
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/service-and-price"
            className="bg-white hover:bg-gray-100 text-slate-900 font-light px-12 py-4 text-lg tracking-wide transition-all duration-500"
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
