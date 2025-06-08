import { Button } from "@mui/material";
import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight">
            Sẵn Sàng Trải Nghiệm Sự Khác Biệt Của{" "}
            <span className="text-amber-300 font-extralight">Winchair?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
            Hãy đặt lịch hẹn ngay hôm nay và khám phá vẻ đẹp phải chăng được
            thiết kế riêng cho bạn, ngay tại Etobicoke này!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              variant="contained"
              className="font-semibold rounded-full"
              sx={{
                backgroundColor: "#ffffff",
                color: "#d97706", // amber-600
                "&:hover": { backgroundColor: "#f3f4f6" }, // gray-100
                textTransform: "none",
                fontWeight: 600,
                paddingX: "24px",
                paddingY: "8px",
                borderRadius: "9999px",
                width: "192px",
              }}
            >
              ĐẶT LỊCH NGAY
            </Button>
            <Button
              variant="outlined"
              className="font-semibold rounded-full"
              sx={{
                borderColor: "#d97706", // amber-600
                color: "#d97706", // amber-600
                "&:hover": {
                  backgroundColor: "#d97706", // amber-600
                  color: "#ffffff",
                  borderColor: "#d97706", // amber-600
                },
                textTransform: "none",
                fontWeight: 600,
                paddingX: "24px",
                paddingY: "8px",
                borderRadius: "9999px",
                width: "192px",
              }}
            >
              LIÊN HỆ VỚI CHÚNG TÔI
            </Button>
          </div>

          <div className="bg-gray-800 p-12 border border-gray-700 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-light mb-3 text-white text-lg">Địa Chỉ</p>
                <p className="text-xl text-gray-400 font-light">
                  3347 Bloor Street West, Etobicoke, Ontario
                </p>
              </div>
              <div>
                <p className="font-light mb-3 text-white text-lg">Liên Hệ</p>
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
