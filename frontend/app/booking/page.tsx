"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";

// Định nghĩa API_URL từ biến môi trường
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://winchair-beauty-spa.onrender.com";


// Define service categories with an index signature
const serviceCategories: { [key: string]: { name: string; price: string }[] } =
  {
    "Dịch Vụ Tóc Nam": [
      { name: "Cắt Tóc Nam (Men’s Haircut)", price: "From $35 + tax" },
      { name: "Cắt Fade (Men’s Skin Fade)", price: "From $40 + tax" },
      { name: "Cạo Râu Nóng (Hot Towel Shave)", price: "From $55 + tax" },
      { name: "Tỉa Râu (Beard Trim)", price: "From $16 + tax" },
    ],
    "Dịch Vụ Tóc Nữ": [
      { name: "Cắt Tóc Nữ (Women’s Haircut)", price: "From $55 + tax" },
      { name: "Nhuộm Tóc (Colour)", price: "From $65 + tax" },
      { name: "Highlight", price: "From $180 + tax" },
      { name: "Uốn Tóc (Perm)", price: "From $85 + tax" },
      { name: "Duỗi Tóc (Relaxer)", price: "From $160 + tax" },
      { name: "Búi Tóc (Updo)", price: "$120 + tax" },
    ],
    "Dịch Vụ Tóc Cho Bé": [
      { name: "Cắt Tóc Bé Trai (Boys’ Haircut)", price: "From $25 + tax" },
      { name: "Cắt Tóc Bé Gái (Girls’ Haircut)", price: "From $35 + tax" },
    ],
    "Chăm Sóc & Tạo Kiểu Tóc": [
      { name: "Gội Đầu (Wash)", price: "From $20 + tax" },
      {
        name: "Gội & Tạo Kiểu (Wash & Style)",
        price: "Price upon consultation",
      },
      {
        name: "Liệu Trình Dưỡng Tóc (Nourishing Shampoo Therapy)",
        price: "$90 + tax",
      },
      { name: "Massage Da Đầu (Scalp Massage)", price: "$85 + tax" },
    ],
    "Dịch Vụ Chăm Sóc Sắc Đẹp": [
      { name: "Chăm Sóc Da Mặt (Facial - 1 Hour)", price: "From $90 + tax" },
      { name: "Tẩy Lông (Waxing)", price: "From $16 + tax" },
      { name: "Nối Mi (Eyelash Extensions)", price: "From $85 + tax" },
      {
        name: "Phun Xăm Thẩm Mỹ Microblading (Microblading PMU)",
        price: "$450 + tax (includes one touch-up)",
      },
    ],
  };

// Define additional options for each service
const serviceOptions: { [key: string]: { label: string; options: string[] } } =
  {
    "Cắt Tóc Nam (Men’s Haircut)": {
      label: "Hair Length",
      options: ["Short", "Medium", "Long"],
    },
    "Cắt Fade (Men’s Skin Fade)": {
      label: "Fade Style",
      options: ["Low Fade", "Mid Fade", "High Fade", "Taper"],
    },
    "Cạo Râu Nóng (Hot Towel Shave)": {
      label: "Add-On",
      options: ["None", "Facial Moisturizer", "Aftershave Treatment"],
    },
    "Tỉa Râu (Beard Trim)": {
      label: "Beard Style",
      options: ["Short Trim", "Full Shape", "Detailed Design"],
    },
    "Cắt Tóc Nữ (Women’s Haircut)": {
      label: "Hair Length",
      options: ["Short", "Medium", "Long", "Extra Long"],
    },
    "Nhuộm Tóc (Colour)": {
      label: "Colour Type",
      options: ["Full Colour", "Root Touch-Up", "Balayage"],
    },
    Highlight: {
      label: "Highlight Style",
      options: ["Partial Highlights", "Full Highlights", "Lowlights"],
    },
    "Uốn Tóc (Perm)": {
      label: "Curl Type",
      options: ["Loose Waves", "Medium Curls", "Tight Curls"],
    },
    "Duỗi Tóc (Relaxer)": {
      label: "Hair Type",
      options: ["Fine", "Medium", "Coarse"],
    },
    "Búi Tóc (Updo)": {
      label: "Style Preference",
      options: ["Classic Updo", "Modern Updo", "Braided Updo"],
    },
    "Cắt Tóc Bé Trai (Boys’ Haircut)": {
      label: "Hair Length",
      options: ["Short", "Medium"],
    },
    "Cắt Tóc Bé Gái (Girls’ Haircut)": {
      label: "Hair Length",
      options: ["Short", "Medium", "Long"],
    },
    "Gội Đầu (Wash)": {
      label: "Add-On",
      options: ["None", "Conditioner Treatment"],
    },
    "Gội & Tạo Kiểu (Wash & Style)": {
      label: "Style Preference",
      options: ["Blowout", "Curls", "Straight"],
    },
    "Liệu Trình Dưỡng Tóc (Nourishing Shampoo Therapy)": {
      label: "Focus Area",
      options: ["Hydration", "Damage Repair", "Volume"],
    },
    "Massage Da Đầu (Scalp Massage)": {
      label: "Duration",
      options: ["15 Minutes", "30 Minutes"],
    },
    "Chăm Sóc Da Mặt (Facial - 1 Hour)": {
      label: "Skin Concern",
      options: ["Hydration", "Anti-Aging", "Acne Treatment"],
    },
    "Tẩy Lông (Waxing)": {
      label: "Area",
      options: [
        "Eyebrows",
        "Upper Lip",
        "Full Face",
        "Underarms",
        "Legs",
        "Bikini",
      ],
    },
    "Nối Mi (Eyelash Extensions)": {
      label: "Lash Style",
      options: ["Natural", "Dramatic", "Volume"],
    },
    "Phun Xăm Thẩm Mỹ Microblading (Microblading PMU)": {
      label: "Brow Style",
      options: ["Natural", "Bold", "Feathered"],
    },
  };

const BookingPage = () => {
  const [formData, setFormData] = useState({
    category: "",
    service: "",
    serviceOption: "N/A", // Giá trị mặc định để đảm bảo không rỗng
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

 const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  // Reset service và serviceOption khi category thay đổi
  if (name === "category") {
    setFormData((prevState) => ({
      ...prevState,
      category: value,
      service: "",
      serviceOption: "N/A",
    }));
    setError(null);
  }
  // Reset serviceOption khi service thay đổi
  else if (name === "service") {
    setFormData((prevState) => ({
      ...prevState,
      service: value,
      serviceOption: serviceOptions[value] ? "" : "N/A",
    }));
    setError(null);
  }
  // Validation cho phone
  else if (name === "phone") {
    // Cập nhật giá trị phone ngay cả khi đang nhập
    setFormData((prevState) => ({
      ...prevState,
      phone: value,
    }));
    // Chỉ kiểm tra lỗi khi có giá trị
    if (value) {
      const phoneRegex = /^[0-9]{0,15}$/;
      if (!phoneRegex.test(value)) {
        setError("Please enter only digits (up to 15 digits).");
      } else if (value.length < 10) {
        setError("Phone number must be 10-15 digits.");
      } else {
        setError(null);
      }
    } else {
      setError(null); // Xóa lỗi nếu phone rỗng
    }
  }
  // Các trường khác
  else {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError(null);
  }
};
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Validation trước khi gửi
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid phone number (10-15 digits).");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/mailer/send-booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          category: "",
          service: "",
          serviceOption: "N/A",
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          notes: "",
        });
        setTimeout(() => setSuccess(false), 5000); // Tăng thời gian hiển thị
      } else {
        const resData = await response.json();
        setError(resData.message || "Failed to send booking.");
        setTimeout(() => setError(null), 5000); // Tăng thời gian hiển thị
      }
    } catch {
      setError("Error sending booking. Please try again later.");
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6 sm:py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4 sm:mb-6 md:mb-8">
          Book Your Appointment
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-center text-gray-600 mb-4 sm:mb-6 md:mb-10 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
          Schedule your visit to Winchair Beauty Spa and experience luxurious
          beauty services tailored to you. Select your category, service, and
          preferences below, and we’ll confirm your appointment promptly.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-center text-gray-500 mb-4 sm:mb-6">
          Note: Prices marked “From” may vary based on hair length, thickness,
          service complexity, or product usage. All prices exclude applicable
          taxes.
        </p>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Appointment Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label
                htmlFor="category"
                className="block text-gray-700 font-semibold text-sm sm:text-base"
              >
                Service Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                required
              >
                <option value="" disabled>
                  Select a Category
                </option>
                {Object.keys(serviceCategories).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {formData.category && (
              <div>
                <label
                  htmlFor="service"
                  className="block text-gray-700 font-semibold text-sm sm:text-base"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                  required
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  {serviceCategories[formData.category].map(
                    (service: { name: string; price: string }) => (
                      <option key={service.name} value={service.name}>
                        {service.name} ({service.price})
                      </option>
                    )
                  )}
                </select>
              </div>
            )}
            {formData.service && serviceOptions[formData.service] && (
              <div>
                <label
                  htmlFor="serviceOption"
                  className="block text-gray-700 font-semibold text-sm sm:text-base"
                >
                  {serviceOptions[formData.service].label}
                </label>
                <select
                  id="serviceOption"
                  name="serviceOption"
                  value={formData.serviceOption}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                  required
                >
                  <option value="" disabled>
                    Select {serviceOptions[formData.service].label}
                  </option>
                  {serviceOptions[formData.service].options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {formData.service && !serviceOptions[formData.service] && (
              <input type="hidden" name="serviceOption" value="N/A" />
            )}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold text-sm sm:text-base"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold text-sm sm:text-base"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold text-sm sm:text-base"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-gray-700 font-semibold text-sm sm:text-base"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block text-gray-700 font-semibold text-sm sm:text-base"
              >
                Preferred Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                min="09:00"
                max="19:00"
                required
              />
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1">
                Available: Mon-Fri 9:00 AM–7:00 PM, Sat 10:00 AM–6:00 PM
              </p>
            </div>
            <div>
              <label
                htmlFor="notes"
                className="block text-gray-700 font-semibold text-sm sm:text-base"
              >
                Additional Service Details
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                rows={4}
                placeholder="Specify any additional requests or details about the service"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800 transition duration-300"
              disabled={loading}
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>

            {error && (
              <p className="text-red-600 mt-2 font-semibold text-center">
                {error}
              </p>
            )}
            {success && (
              <p className="text-green-600 mt-2 font-semibold text-center">
                Your booking request has been sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
