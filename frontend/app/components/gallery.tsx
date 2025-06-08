"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

const Gallery = () => {
  // Categories for filtering
  const categories = [
    "Tất Cả",
    "Tóc Nam",
    "Tóc Nữ",
    "Tóc Trẻ Em",
    "Chăm Sóc Da",
    "Không Gian Spa",
  ];
  const [activeCategory, setActiveCategory] = useState("Tất Cả");

  // Gallery images with categories
  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Kiểu tóc nam hiện đại",
      category: "Tóc Nam",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Kiểu tóc nữ sang trọng",
      category: "Tóc Nữ",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Chăm sóc da mặt",
      category: "Chăm Sóc Da",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Không gian spa",
      category: "Không Gian Spa",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Kiểu tóc trẻ em",
      category: "Tóc Trẻ Em",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Kiểu tóc nữ hiện đại",
      category: "Tóc Nữ",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Kiểu tóc nam cổ điển",
      category: "Tóc Nam",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Khu vực tiếp tân",
      category: "Không Gian Spa",
    },
  ];

  // Filter images based on active category
  const filteredImages =
    activeCategory === "Tất Cả"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Bộ Sưu Tập <span className="text-amber-600">Hình Ảnh</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khám phá không gian và các dịch vụ tuyệt vời của Winchair Beauty Spa
            qua bộ sưu tập hình ảnh
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "contained" : "outlined"}
              sx={{
                backgroundColor:
                  activeCategory === category ? "#d97706" : "transparent", // amber-600
                color: activeCategory === category ? "#ffffff" : "#4b5563", // white or gray-600
                borderColor:
                  activeCategory === category ? "#d97706" : "#d1d5db", // amber-600 or gray-200
                "&:hover": {
                  backgroundColor:
                    activeCategory === category ? "#b45309" : "#f3f4f6", // amber-700 or gray-100
                  color: activeCategory === category ? "#ffffff" : "#d97706", // white or amber-600
                  borderColor:
                    activeCategory === category ? "#b45309" : "#d1d5db", // amber-700 or gray-200
                },
                textTransform: "none",
                fontWeight: 600,
                paddingX: "24px",
                paddingY: "8px",
                borderRadius: "9999px",
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                  <p className="text-amber-300 text-xs">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Button
            variant="contained"
            className="font-semibold rounded-full"
            sx={{
              backgroundColor: "#d97706", // amber-600
              "&:hover": { backgroundColor: "#b45309" }, // amber-700
              textTransform: "none",
              fontWeight: 600,
              paddingX: "24px",
              paddingY: "8px",
              borderRadius: "9999px",
              width: "192px",
            }}
          >
            Xem Thêm Hình Ảnh
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
