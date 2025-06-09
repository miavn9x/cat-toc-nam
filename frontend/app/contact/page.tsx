"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";

// Định nghĩa API_URL từ biến môi trường
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.yourdomain.com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/mailer/send-contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        const resData = await response.json();
        setError(resData.message || "Failed to send message.");
      }
    } catch {
      setError("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
          Contact Winchair Beauty Spa
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-2xl">
          We’re here to help you look and feel your best! Reach out with any
          questions or to book your appointment today.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold">Address:</span>
                <br />
                3347 Bloor Street West, Etobicoke, Ontario, Canada
              </p>
              <p>
                <span className="font-semibold">Phone:</span>
                <br />
                (123) 456-7890
              </p>
              <p>
                <span className="font-semibold">Email:</span>
                <br />
                info@winchairbeautyspa.com
              </p>
              <p>
                <span className="font-semibold">Hours:</span>
                <br />
                Monday - Friday: 9:00 AM - 7:00 PM
                <br />
                Saturday: 10:00 AM - 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Your Name"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Your Email"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  rows={5}
                  placeholder="Your Message"
                  required
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800 transition duration-300"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {error && (
                <p className="text-red-600 mt-2 font-semibold text-center">
                  {error}
                </p>
              )}
              {success && (
                <p className="text-green-600 mt-2 font-semibold text-center">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
