"use client"; // Mark as Client Component

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: "💎",
      title: "Top Quality",
      description: "High quality products and services with modern technology",
    },
    {
      icon: "💰",
      title: "Affordable Price",
      description:
        "Luxurious beauty at Vietnamese prices, suitable for all budgets",
    },
    {
      icon: "🏆",
      title: "Experienced Professional",
      description: "A team of skilled and dedicated stylists and beauticians",
    },
    {
      icon: "🌟",
      title: "Relaxation Space",
      description: "The most friendly, clean and comfortable environment",
    },
    {
      icon: "⏰",
      title: "Save Time",
      description: "Fast, efficient service while still ensuring quality",
    },
    {
      icon: "🎯",
      title: "Personalized Consulting",
      description:
        "Services tailored to your needs and style",
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-medium text-slate-800 mb-6">
            Why Choose <span className="text-amber-600 font-light">We?</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl font-inter text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Are you ready to discover how Winchair Beauty Spa can help you look
            and feel great without breaking the bank?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-xl border border-stone-200 hover:bg-gradient-to-br hover:from-slate-800 hover:to-slate-900 hover:border-amber-500 transition-all duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 text-center"
              tabIndex={0}
              aria-label={`Benefit: ${benefit.title}`}
            >
              <div className="text-5xl mb-6 group-hover:scale-105 group-hover:text-amber-400 transition-all duration-300 ease-in-out">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-playfair font-medium text-slate-800 group-hover:text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-lg font-inter text-slate-600 group-hover:text-stone-200 font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
