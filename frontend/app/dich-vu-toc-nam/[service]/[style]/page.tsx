// app/dich-vu-toc-nam/[service]/[style]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

// Define types for our data
interface HairStyle {
  id: string;
  name: string;
  description: string;
  image: string;
  difficulty: "Dễ" | "Trung bình" | "Khó";
  maintenance: "Thấp" | "Trung bình" | "Cao";
  faceShape: string[];
  popular: boolean;
}

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  benefits: string[];
  styles: HairStyle[];
}

// This would typically come from a database or API
const getServiceData = (serviceId: string): ServiceData | null => {
  const services: Record<string, ServiceData> = {
    "cat-toc-nam": {
      id: "cat-toc-nam",
      title: "Cắt Tóc Nam",
      subtitle: "Men's Haircut",
      price: "Từ $35 + tax",
      description:
        "Kiểu tóc được thiết kế riêng, hoàn hảo với phong cách và cuộc sống của bạn.",
      longDescription:
        "Kiểu tóc được thiết kế riêng, hoàn hảo với phong cách và cuộc sống của bạn. Bao gồm gội đầu thư giãn và tạo kiểu chuyên nghiệp. Đây không chỉ là một lần cắt tóc; đó là nền tảng cho một vẻ ngoài luôn gọn gàng, sắc sảo lâu hơn, nghĩa là bạn ít phải ghé tiệm hơn và tiết kiệm tiền để làm những việc khác.",
      image: "/images/cat-toc-nam.jpg",
      features: [
        "Tư vấn phong cách cá nhân",
        "Gội đầu thư giãn",
        "Tạo kiểu chuyên nghiệp",
        "Bảo hành kiểu tóc",
      ],
      benefits: [
        "Vẻ ngoài luôn gọn gàng, sắc sảo lâu hơn",
        "Ít phải ghé tiệm hơn",
        "Tiết kiệm tiền",
        "Tự tin với vẻ ngoài chuyên nghiệp",
      ],
      styles: [
        {
          id: "classic-business",
          name: "Classic Business",
          description:
            "Kiểu tóc lịch lãm, phù hợp cho môi trường công sở và các sự kiện trang trọng.",
          image: "/images/classic-business.jpg",
          difficulty: "Dễ",
          maintenance: "Thấp",
          faceShape: ["Oval", "Vuông", "Chữ nhật"],
          popular: true,
        },
        {
          id: "modern-quiff",
          name: "Modern Quiff",
          description:
            "Phong cách hiện đại với phần trên được tạo độ phồng, thể hiện cá tính mạnh mẽ.",
          image: "/images/modern-quiff.jpg",
          difficulty: "Trung bình",
          maintenance: "Trung bình",
          faceShape: ["Oval", "Tròn", "Chữ nhật"],
          popular: true,
        },
        {
          id: "textured-crop",
          name: "Textured Crop",
          description:
            "Kiểu tóc ngắn với kết cấu tự nhiên, dễ tạo kiểu và phù hợp với mọi hoạt động.",
          image: "/images/textured-crop.jpg",
          difficulty: "Dễ",
          maintenance: "Thấp",
          faceShape: ["Tròn", "Vuông", "Oval"],
          popular: false,
        },
        {
          id: "side-part-classic",
          name: "Side Part Classic",
          description:
            "Kiểu tóc chia ngôi bên cổ điển, thanh lịch và phù hợp với mọi lứa tuổi.",
          image: "/images/side-part-classic.jpg",
          difficulty: "Dễ",
          maintenance: "Thấp",
          faceShape: ["Oval", "Chữ nhật", "Vuông"],
          popular: true,
        },
        {
          id: "pompadour-modern",
          name: "Modern Pompadour",
          description:
            "Phiên bản hiện đại của kiểu pompadour cổ điển, tạo điểm nhấn ấn tượng.",
          image: "/images/pompadour-modern.jpg",
          difficulty: "Khó",
          maintenance: "Cao",
          faceShape: ["Oval", "Chữ nhật"],
          popular: false,
        },
        {
          id: "buzz-cut-styled",
          name: "Styled Buzz Cut",
          description:
            "Kiểu tóc buzz cut được tạo kiểu tinh tế, mạnh mẽ và dễ bảo dưỡng.",
          image: "/images/buzz-cut-styled.jpg",
          difficulty: "Dễ",
          maintenance: "Thấp",
          faceShape: ["Vuông", "Oval", "Tròn"],
          popular: false,
        },
        {
          id: "messy-fringe",
          name: "Messy Fringe",
          description:
            "Kiểu tóc với phần mái tự nhiên, phù hợp với phong cách trẻ trung, năng động.",
          image: "/images/messy-fringe.jpg",
          difficulty: "Trung bình",
          maintenance: "Trung bình",
          faceShape: ["Oval", "Chữ nhật", "Tròn"],
          popular: true,
        },
        {
          id: "slicked-back",
          name: "Slicked Back",
          description:
            "Kiểu tóc chải ngược sang trọng, thể hiện phong cách lịch lãm và quyền lực.",
          image: "/images/slicked-back.jpg",
          difficulty: "Trung bình",
          maintenance: "Trung bình",
          faceShape: ["Oval", "Vuông", "Chữ nhật"],
          popular: false,
        },
      ],
    },
    "cat-fade": {
      id: "cat-fade",
      title: "Cắt Fade",
      subtitle: "Men's Skin Fade",
      price: "Từ $40 + tax",
      description: "Kiểu fade siêu gọn gàng, hiện đại với độ chính xác cao.",
      longDescription:
        "Bạn muốn có kiểu fade siêu gọn gàng, hiện đại? Các chuyên gia của chúng tôi sẽ thực hiện hoàn hảo từng lần. Hãy mong đợi một kiểu fade cực kỳ sạch sẽ, chính xác, giữ form lâu bền hơn.",
      image: "/images/cat-fade.jpg",
      features: [
        "Fade chính xác",
        "Kỹ thuật hiện đại",
        "Giữ form lâu bền",
        "Tư vấn bảo dưỡng",
      ],
      benefits: [
        "Vẻ ngoài hiện đại",
        "Dễ bảo dưỡng",
        "Phù hợp mọi hoạt động",
        "Tạo điểm nhấn cá tính",
      ],
      styles: [
        {
          id: "high-fade",
          name: "High Fade",
          description:
            "Fade cao tạo sự tương phản mạnh mẽ, phù hợp với phong cách hiện đại và năng động.",
          image: "/images/high-fade.jpg",
          difficulty: "Trung bình",
          maintenance: "Trung bình",
          faceShape: ["Oval", "Vuông", "Tròn"],
          popular: true,
        },
        {
          id: "mid-fade",
          name: "Mid Fade",
          description:
            "Fade trung bình cân bằng, phù hợp với đa số khuôn mặt và phong cách.",
          image: "/images/mid-fade.jpg",
          difficulty: "Trung bình",
          maintenance: "Trung bình",
          faceShape: ["Oval", "Chữ nhật", "Vuông"],
          popular: true,
        },
        {
          id: "low-fade",
          name: "Low Fade",
          description:
            "Fade thấp tinh tế, tạo sự chuyển tiếp mềm mại và tự nhiên.",
          image: "/images/low-fade.jpg",
          difficulty: "Dễ",
          maintenance: "Thấp",
          faceShape: ["Oval", "Tròn", "Chữ nhật"],
          popular: true,
        },
        {
          id: "skin-fade",
          name: "Skin Fade",
          description: "Fade xuống da tạo hiệu ứng mạnh mẽ và sắc nét nhất.",
          image: "/images/skin-fade.jpg",
          difficulty: "Khó",
          maintenance: "Cao",
          faceShape: ["Vuông", "Oval"],
          popular: false,
        },
        {
          id: "temple-fade",
          name: "Temple Fade",
          description:
            "Fade chỉ ở vùng thái dương, giữ lại độ dài ở các vùng khác.",
          image: "/images/temple-fade.jpg",
          difficulty: "Trung bình",
          maintenance: "Trung bình",
          faceShape: ["Oval", "Chữ nhật", "Tròn"],
          popular: false,
        },
        {
          id: "burst-fade",
          name: "Burst Fade",
          description:
            "Fade theo hình cung quanh tai, tạo hiệu ứng độc đáo và cá tính.",
          image: "/images/burst-fade.jpg",
          difficulty: "Khó",
          maintenance: "Cao",
          faceShape: ["Oval", "Vuông"],
          popular: false,
        },
      ],
    },
    "cao-rau-nong": {
      id: "cao-rau-nong",
      title: "Cạo Râu Nóng",
      subtitle: "Hot Towel Shave",
      price: "Từ $55 + tax",
      description: "Trải nghiệm cạo râu truyền thống với khăn nóng thư giãn.",
      longDescription:
        "Tự thưởng cho mình trải nghiệm cạo râu truyền thống đỉnh cao. Dịch vụ cạo râu khăn nóng truyền thống của chúng tôi mang lại cảm giác cạo sát, thoải mái và làm trẻ hóa làn da.",
      image: "/images/cao-rau-nong.jpg",
      features: [
        "Khăn nóng thư giãn",
        "Cạo râu truyền thống",
        "Chăm sóc da mặt",
        "Massage thư giãn",
      ],
      benefits: [
        "Cạo sát thoải mái",
        "Trẻ hóa làn da",
        "Thư giãn tối đa",
        "Tăng cường sức khỏe da",
      ],
      styles: [],
    },
    "tia-rau": {
      id: "tia-rau",
      title: "Tỉa Râu",
      subtitle: "Beard Trim",
      price: "Từ $16 + tax",
      description:
        "Tỉa và tạo dáng râu chuyên nghiệp, giữ bộ râu luôn hoàn hảo.",
      longDescription:
        "Giữ bộ râu của bạn luôn trong tình trạng tốt nhất với dịch vụ tỉa và tạo dáng chuyên nghiệp. Một bộ râu được tạo hình chuyên nghiệp không chỉ đẹp hơn mà còn mọc đều hơn.",
      image: "/images/tia-rau.jpg",
      features: [
        "Tạo dáng chuyên nghiệp",
        "Tư vấn phong cách",
        "Sản phẩm cao cấp",
        "Hướng dẫn chăm sóc",
      ],
      benefits: [
        "Râu đẹp hơn",
        "Mọc đều hơn",
        "Dễ chăm sóc tại nhà",
        "Tiết kiệm thời gian",
      ],
      styles: [],
    },
  };

  return services[serviceId] || null;
};

// Function to get style data
const getStyleData = (serviceId: string, styleId: string): HairStyle | null => {
  const service = getServiceData(serviceId);
  if (!service) return null;
  return service.styles.find((style) => style.id === styleId) || null;
};

// Generate static parameters for the dynamic route
export async function generateStaticParams() {
  const services = ["cat-toc-nam", "cat-fade", "cao-rau-nong", "tia-rau"];

  const params: { service: string; style: string }[] = [];

  services.forEach((serviceId) => {
    const service = getServiceData(serviceId);
    if (service && service.styles.length > 0) {
      service.styles.forEach((style) => {
        params.push({ service: serviceId, style: style.id });
      });
    }
  });

  return params;
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; style: string }>;
}) {
  const { service, style } = await params; // Await params
  const serviceData = getServiceData(service);
  const styleData = getStyleData(service, style);

  if (!serviceData || !styleData) {
    return {
      metadataBase: new URL("https://www.winchairbeautyspa.com"),
      title: "Không tìm thấy kiểu tóc - Winchair Beauty Spa",
      description: "Trang kiểu tóc không tồn tại",
      openGraph: {
        title: "Không tìm thấy kiểu tóc - Winchair Beauty Spa",
        description: "Trang kiểu tóc không tồn tại",
        url: "https://www.winchairbeautyspa.com/dich-vu-toc-nam",
        siteName: "Winchair Beauty Spa",
        locale: "vi_VN",
        type: "website",
      },
    };
  }

  return {
    metadataBase: new URL("https://www.winchairbeautyspa.com"),
    title: `${styleData.name} - ${serviceData.title} - Winchair Beauty Spa`,
    description: styleData.description,
    openGraph: {
      title: `${styleData.name} - ${serviceData.title} - Winchair Beauty Spa`,
      description: styleData.description,
      url: `https://www.winchairbeautyspa.com/dich-vu-toc-nam/${service}/${style}`,
      siteName: "Winchair Beauty Spa",
      images: [
        {
          url: styleData.image || "/images/default.jpg",
          width: 800,
          height: 600,
          alt: styleData.name,
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
  };
}

export default async function ServiceStylePage({
  params,
}: {
  params: Promise<{ service: string; style: string }>;
}) {
  const { service, style } = await params; // Await params
  const serviceData = getServiceData(service);
  const styleData = getStyleData(service, style);

  if (!serviceData || !styleData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-300 transition-colors">
                Trang chủ
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <Link
                href="/dich-vu-toc-nam"
                className="ml-2 hover:text-blue-300 transition-colors"
              >
                Dịch vụ tóc nam
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <Link
                href={`/dich-vu-toc-nam/${service}`}
                className="ml-2 hover:text-blue-300 transition-colors"
              >
                {serviceData.title}
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="ml-2 text-blue-300">{styleData.name}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-blue-400/20 mb-4">
                <span className="text-sm bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {serviceData.subtitle}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-light text-white mb-4 sm:mb-6">
                {styleData.name}
              </h1>

              <div className="flex items-center mb-6">
                <span className="text-2xl sm:text-3xl font-light bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {serviceData.price}
                </span>
              </div>

              <p className="text-gray-300 text-lg mb-8">
                {styleData.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Độ khó:</span>
                  <span className="text-blue-300">{styleData.difficulty}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Bảo dưỡng:</span>
                  <span className="text-blue-300">{styleData.maintenance}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Phù hợp: </span>
                  <span className="text-blue-300">
                    {styleData.faceShape.join(", ")}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  href="/booking"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all text-center"
                >
                  Đặt Lịch Ngay
                </Link>
                <Link
                  href="/lien-he"
                  className="px-8 py-3 border border-blue-400/50 text-blue-300 rounded-full hover:bg-blue-400/10 transition-all text-center"
                >
                  Liên Hệ Tư Vấn
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={styleData.image || "/images/default.jpg"}
                  alt={styleData.name}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {styleData.popular && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                      Phổ biến
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-400/20">
            <h2 className="text-2xl font-light text-white mb-6">
              Về Dịch Vụ {serviceData.title}
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              {serviceData.longDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-blue-300 mb-4">
                  Dịch Vụ Bao Gồm
                </h3>
                <ul className="space-y-4">
                  {serviceData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-300 mb-4">
                  Lợi Ích
                </h3>
                <ul className="space-y-4">
                  {serviceData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Styles */}
      {serviceData.styles.length > 0 && (
        <section className="py-12 sm:py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-4">
                Các Kiểu Tóc Khác
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Khám phá các kiểu tóc khác trong dịch vụ{" "}
                {serviceData.title.toLowerCase()}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {serviceData.styles
                .filter((s) => s.id !== style)
                .map((s, index) => (
                  <Link
                    href={`/dich-vu-toc-nam/${service}/${s.id}`}
                    key={index}
                    className="group block"
                  >
                    <div className="bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                      <div className="aspect-[3/4] overflow-hidden relative">
                        <img
                          src={s.image || "/images/default.jpg"}
                          alt={s.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {s.popular && (
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                              Phổ biến
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors mb-2">
                          {s.name}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                          {s.description}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">Độ khó:</span>
                            <span className="text-blue-300">
                              {s.difficulty}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">Bảo dưỡng:</span>
                            <span className="text-blue-300">
                              {s.maintenance}
                            </span>
                          </div>
                          <div className="text-xs">
                            <span className="text-gray-500">Phù hợp: </span>
                            <span className="text-blue-300">
                              {s.faceShape.join(", ")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-black to-slate-900/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10">
            <h2 className="text-2xl sm:text-4xl font-light text-white mb-6">
              Sẵn Sàng Trải Nghiệm {styleData.name}?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Đặt lịch ngay hôm nay để trải nghiệm kiểu tóc {styleData.name}{" "}
              trong dịch vụ {serviceData.title.toLowerCase()} tại Winchair
              Beauty Spa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Đặt Lịch Ngay
              </Link>
              <Link
                href="/lien-he"
                className="px-8 py-3 border border-blue-400/50 text-blue-300 rounded-full hover:bg-blue-400/10 transition-all"
              >
                Liên Hệ Tư Vấn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
