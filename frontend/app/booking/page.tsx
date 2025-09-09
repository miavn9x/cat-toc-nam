"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";

// Gửi bằng FormSubmit /ajax (CORS + JSON)
const FORM_ENDPOINT = "https://formsubmit.co/ajax/miavn9x@gmail.com";

// ---- DỮ LIỆU DỊCH VỤ ----
const serviceCategories: { [key: string]: { name: string; price: string }[] } = {
  "Men's Hair Services": [
    { name: "Men's Haircut", price: "From $35 + tax" },
    { name: "Cut Fade", price: "From $40 + tax" },
    { name: "Hot Shave", price: "From $55 + tax" },
    { name: "Beard Trimming", price: "From $16 + tax" },
  ],
  "Women's Hair Services": [
    { name: "Women's Haircut", price: "From $55 + tax" },
    { name: "Hair Coloring", price: "From $65 + tax" },
    { name: "Highlight", price: "From $180 + tax" },
    { name: "Hair Perm", price: "From $85 + tax" },
    { name: "Hair Straightening", price: "From $160 + tax" },
    { name: "Updo", price: "$120 + tax" },
  ],
  "Baby Hair Services": [
    { name: "Boys Haircuts", price: "From $25 + tax" },
    { name: "Baby Girl Haircut", price: "From $35 + tax" },
  ],
  "Hair Care & Styling": [
    { name: "Head washing", price: "From $20 + tax" },
    { name: "Shampoo & Styling", price: "Price upon consultation" },
    { name: "Hair Treatment", price: "$90 + tax" },
    { name: "Scalp Massage", price: "$85 + tax" },
  ],
  "Beauty Care Services": [
    { name: "Facial Care", price: "From $90 + tax" },
    { name: "Waxing", price: "From $16 + tax" },
    { name: "Eyelash Extensions", price: "From $85 + tax" },
    { name: "Microblading Cosmetic Tattooing", price: "$450 + tax (includes one touch-up)" },
  ],
};

const serviceOptions: { [key: string]: { label: string; options: string[] } } = {
  "Men's Haircut": { label: "Hair Length", options: ["Short", "Medium", "Long"] },
  "Cut Fade": { label: "Fade Style", options: ["Low Fade", "Mid Fade", "High Fade", "Taper"] },
  "Hot Shave": { label: "Add-On", options: ["None", "Facial Moisturizer", "Aftershave Treatment"] },
  "Beard Trimming": { label: "Beard Style", options: ["Short Trim", "Full Shape", "Detailed Design"] },
  "Women's Haircut": { label: "Hair Length", options: ["Short", "Medium", "Long", "Extra Long"] },
  "Hair Coloring": { label: "Colour Type", options: ["Full Colour", "Root Touch-Up", "Balayage"] },
  Highlight: { label: "Highlight Style", options: ["Partial Highlights", "Full Highlights", "Lowlights"] },
  "Hair Perm": { label: "Curl Type", options: ["Loose Waves", "Medium Curls", "Tight Curls"] },
  "Hair Straightening": { label: "Hair Type", options: ["Fine", "Medium", "Coarse"] },
  Updo: { label: "Style Preference", options: ["Classic Updo", "Modern Updo", "Braided Updo"] },
  "Boys Haircuts": { label: "Hair Length", options: ["Short", "Medium"] },
  "Baby Girl Haircut": { label: "Hair Length", options: ["Short", "Medium", "Long"] },
  "Head washing": { label: "Add-On", options: ["None", "Conditioner Treatment"] },
  "Shampoo & Styling": { label: "Style Preference", options: ["Blowout", "Curls", "Straight"] },
  "Hair Treatment": { label: "Focus Area", options: ["Hydration", "Damage Repair", "Volume"] },
  "Scalp Massage": { label: "Duration", options: ["15 Minutes", "30 Minutes"] },
  "Facial Care": { label: "Skin Concern", options: ["Hydration", "Anti-Aging", "Acne Treatment"] },
  Waxing: { label: "Area", options: ["Eyebrows", "Upper Lip", "Full Face", "Underarms", "Legs", "Bikini"] },
  "Eyelash Extensions": { label: "Lash Style", options: ["Natural", "Dramatic", "Volume"] },
  "Microblading Cosmetic Tattooing": { label: "Brow Style", options: ["Natural", "Bold", "Feathered"] },
};

// Helper lỗi an toàn kiểu
function getErrorMessage(err: unknown, fallback = "Error sending booking. Please try again later.") {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  return fallback;
}

type FormDataState = {
  category: string;
  service: string;
  serviceOption: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  notes: string;
  _honey: string;
};

// ---- Helpers cho giờ mở cửa theo ngày ----
function getOpeningHours(dateStr: string): { min: string; max: string; note: string; isClosed: boolean } {
  if (!dateStr) {
    return { min: "09:00", max: "19:00", note: "Mon–Fri 9:00–19:00, Sat 10:00–18:00", isClosed: false };
  }
  const d = new Date(dateStr + "T00:00:00");
  const day = d.getDay(); // 0=Sun, 6=Sat
  if (day === 0) return { min: "00:00", max: "00:00", note: "Closed on Sunday", isClosed: true };
  if (day === 6) return { min: "10:00", max: "18:00", note: "Saturday 10:00–18:00", isClosed: false };
  return { min: "09:00", max: "19:00", note: "Mon–Fri 9:00–19:00", isClosed: false };
}
function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map((x) => parseInt(x, 10));
  if (Number.isNaN(h) || Number.isNaN(m)) return NaN;
  return h * 60 + m;
}
function formatTime12h(hhmm: string): string {
  const [hStr, mStr] = hhmm.split(":");
  let h = parseInt(hStr, 10);
  const m = mStr ?? "00";
  if (Number.isNaN(h)) return hhmm;
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  return `${String(h).padStart(2, "0")}:${m} ${ampm}`;
}

const BookingPage = () => {
  const [formData, setFormData] = useState<FormDataState>({
    category: "",
    service: "",
    serviceOption: "N/A",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
    _honey: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "category") {
      setFormData((prev) => ({ ...prev, category: value, service: "", serviceOption: "N/A" }));
      setError(null);
      return;
    }
    if (name === "service") {
      setFormData((prev) => ({
        ...prev,
        service: value,
        serviceOption: serviceOptions[value] ? "" : "N/A",
      }));
      setError(null);
      return;
    }
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: value }));
      if (value) {
        const phoneDigits = /^[0-9]{0,15}$/;
        if (!phoneDigits.test(value)) setError("Please enter only digits (up to 15 digits).");
        else if (value.length < 10) setError("Phone number must be 10-15 digits.");
        else setError(null);
      } else setError(null);
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const opening = getOpeningHours(formData.date);
  const dynamicMin = opening.min;
  const dynamicMax = opening.max;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Honeypot
    if (formData._honey) {
      setSuccess(true);
      setLoading(false);
      window.setTimeout(() => setSuccess(false), 5000);
      return;
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid phone number (10-15 digits).");
      setLoading(false);
      return;
    }

    // Validate thời gian theo ngày mở cửa
    if (opening.isClosed) {
      setError("We are closed on Sunday. Please choose another date.");
      setLoading(false);
      return;
    }
    if (!formData.time) {
      setError("Please select a preferred time.");
      setLoading(false);
      return;
    }
    const tMin = toMinutes(dynamicMin);
    const tMax = toMinutes(dynamicMax);
    const tSel = toMinutes(formData.time);
    if (Number.isNaN(tSel) || tSel < tMin || tSel > tMax) {
      setError(`Time must be between ${dynamicMin} and ${dynamicMax} for the selected day.`);
      setLoading(false);
      return;
    }

    // Lấy giá theo Category + Service để hiển thị đúng như UI
    const selectedPrice =
      formData.category && formData.service
        ? serviceCategories[formData.category]?.find((s) => s.name === formData.service)?.price ?? ""
        : "";

    // Nếu service có options → yêu cầu chọn (không để rỗng)
    if (serviceOptions[formData.service] && !formData.serviceOption) {
      setError(`Please select: ${serviceOptions[formData.service].label}.`);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Gửi khóa BẰNG TIẾNG VIỆT + ghép giá + giờ 12h
        body: JSON.stringify({
          "Danh mục dịch vụ": formData.category,
          "Dịch vụ": `${formData.service}${selectedPrice ? ` (${selectedPrice})` : ""}`,
          "Tùy chọn dịch vụ": formData.serviceOption || "N/A",
          "Họ và tên": formData.name,
          "Email": formData.email,
          "Số điện thoại": formData.phone,
          "Ngày mong muốn": formData.date,
          "Giờ mong muốn": `${formData.time} (${formatTime12h(formData.time)})`,
          "Ghi chú bổ sung": formData.notes,

          _subject: "Booking mới - Winchair Beauty Spa",
          _template: "table",
          _captcha: false,
        }),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "FormSubmit error");
      }

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
        _honey: "",
      });
      window.setTimeout(() => setSuccess(false), 5000);
    } catch (err: unknown) {
      setError(getErrorMessage(err));
      window.setTimeout(() => setError(null), 5000);
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
          Schedule your visit to Winchair Beauty Spa and experience luxurious beauty services tailored to you. Select your category, service, and preferences below, and we’ll confirm your appointment promptly.
        </p>

        <p className="text-xs sm:text-sm md:text-base text-center text-gray-500 mb-4 sm:mb-6">
          Note: Prices marked “From” may vary based on hair length, thickness, service complexity, or product usage. All prices exclude applicable taxes.
        </p>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Appointment Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>
            {/* Honeypot */}
            <input
              type="text"
              name="_honey"
              value={formData._honey}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div>
              <label htmlFor="category" className="block text-gray-700 font-semibold text-sm sm:text-base">
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
                <label htmlFor="service" className="block text-gray-700 font-semibold text-sm sm:text-base">
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
                  {serviceCategories[formData.category].map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} ({s.price})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {formData.service && serviceOptions[formData.service] && (
              <div>
                <label htmlFor="serviceOption" className="block text-gray-700 font-semibold text-sm sm:text-base">
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
                  {serviceOptions[formData.service].options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {formData.service && !serviceOptions[formData.service] && (
              <input type="hidden" name="serviceOption" value="N/A" />
            )}

            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold text-sm sm:text-base">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold text-sm sm:text-base">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold text-sm sm:text-base">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                placeholder="Your Phone Number"
                required
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-gray-700 font-semibold text-sm sm:text-base">
                Preferred Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-gray-700 font-semibold text-sm sm:text-base">
                Preferred Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm sm:text-base"
                min={dynamicMin}
                max={dynamicMax}
                step={900} // 15 phút
                required
                disabled={opening.isClosed}
              />
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1">
                {opening.isClosed ? "Closed on Sunday" : `Available: ${opening.note}`}
              </p>
            </div>

            <div>
              <label htmlFor="notes" className="block text-gray-700 font-semibold text-sm sm:text-base">
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

            {error && <p className="text-red-600 mt-2 font-semibold text-center">{error}</p>}
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
