"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Winchair Beauty Spa Interior"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="py-12 lg:py-24">
          <div className="mb-8 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-medium text-slate-100 leading-tight">
              WINCHAIR
              <br />
              <span className="text-gray-400 font-light">BEAUTY SPA</span>
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-6"></div>
          </div>

          <div className="mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-inter font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Nơi Làm Đẹp Sang Trọng Với Giá Việt Nam
            </h2>
            <p className="text-base sm:text-lg font-inter text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              3347 Bloor Street West, Etobicoke, Ontario
              <br />
              Không gian thân thiện, thư giãn - nơi bạn tái tạo năng lượng và
              rời đi với vẻ ngoài tự tin, rạng rỡ
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-6">
            <button
              className="bg-white text-black font-inter font-light text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Đặt lịch ngay"
            >
              ĐẶT LỊCH NGAY
            </button>
            <button
              className="border border-white text-white font-inter font-light text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Xem dịch vụ"
            >
              XEM DỊCH VỤ
            </button>
          </div>

          {/* Contact Info */}
          <div className="pt-12 text-center text-gray-500 font-inter font-light text-sm">
            <p>📍 3347 Bloor Street West, Etobicoke, Ontario</p>
            <p>📞 +1-123-456-7890</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
          <div className="w-px h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
