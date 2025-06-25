import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight">
            Get Ready to Experience the Difference{" "}
            <span className="text-amber-300 font-extralight">Winchair?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
            Book your appointment today and discover affordable beauty tailored
            just for you, right here in Etobicoke!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/booking"
              className="inline-block font-semibold rounded-full px-6 py-2 bg-white text-amber-600 hover:bg-gray-100 transition-colors duration-300 text-center"
              style={{ width: "192px" }}
            >
              BOOK NOW
            </Link>
            <Link
              href="/contact"
              className="inline-block font-semibold rounded-full px-6 py-2 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300 text-center"
              style={{ width: "192px" }}
            >
              CONTACT US
            </Link>
          </div>

          <div className="bg-gray-800 p-12 border border-gray-700 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-light mb-3 text-white text-lg">Address</p>
                <p className="text-xl text-gray-400 font-light">
                  3347 Bloor Street West, Etobicoke, Ontario
                </p>
              </div>
              <div>
                <p className="font-light mb-3 text-white text-lg">Contact</p>
                <p className="text-xl text-gray-400 font-light">
                  +1-123-456-7890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
