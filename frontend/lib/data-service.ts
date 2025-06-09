import servicesData from "../data/services.json";

// Định nghĩa interface cho HairStyle, biểu diễn một kiểu tóc cụ thể
export interface HairStyle {
  id: string; // Mã định danh duy nhất của kiểu tóc
  name: string; // Tên của kiểu tóc (ví dụ: "Classic Business")
  description: string; // Mô tả chi tiết về kiểu tóc
  images: string[]; // Danh sách URL hình ảnh minh họa
  difficulty: string; // Độ khó tạo kiểu (ví dụ: "Dễ", "Trung bình", "Khó")
  maintenance: string; // Mức độ bảo dưỡng (ví dụ: "Thấp", "Trung bình", "Cao")
  faceShape: string[]; // Các dạng khuôn mặt phù hợp (ví dụ: ["Oval", "Vuông"])
  popular: boolean; // Trạng thái phổ biến của kiểu tóc
}

// Định nghĩa interface cho Service, biểu diễn một dịch vụ (ví dụ: Cắt Tóc Nam)
export interface Service {
  id: string; // Mã định danh duy nhất của dịch vụ
  title: string; // Tiêu đề dịch vụ (ví dụ: "Cắt Tóc Nam")
  subtitle: string; // Phụ đề dịch vụ (ví dụ: "Men's Haircut")
  price: string; // Giá dịch vụ (ví dụ: "Từ $35 + tax")
  description: string; // Mô tả ngắn gọn về dịch vụ
  longDescription: string; // Mô tả chi tiết về dịch vụ
  images: string[]; // Danh sách URL hình ảnh minh họa
  features: string[]; // Các tính năng của dịch vụ (ví dụ: ["Gội đầu thư giãn"])
  benefits: string[]; // Lợi ích của dịch vụ (ví dụ: ["Vẻ ngoài gọn gàng"])
  styles: Record<string, HairStyle>; // Danh sách các kiểu tóc liên quan
}

// Định nghĩa interface cho ServiceCategory, biểu diễn một danh mục dịch vụ
export interface ServiceCategory {
  id: string; // Mã định danh duy nhất của danh mục
  title: string; // Tiêu đề danh mục (ví dụ: "Dịch Vụ Tóc Nam")
  subtitle: string; // Phụ đề danh mục (ví dụ: "Hair Services for Men")
  description: string; // Mô tả chi tiết về danh mục
  tagline: string; // Khẩu hiệu của danh mục (ví dụ: "Phong Cách Đỉnh Cao")
  color: string; // Màu sắc đại diện (ví dụ: "blue")
  services: Record<string, Service>; // Danh sách các dịch vụ trong danh mục
}

// Interface mở rộng Service để bao gồm thông tin về trạng thái styles
interface ServiceWithStylesInfo extends Service {
  hasStyles: boolean; // Cho biết dịch vụ có styles hay không
}

// Lớp DataService cung cấp các phương thức để truy xuất dữ liệu từ JSON
export class DataService {
  // Dữ liệu JSON được import và ép kiểu thành cấu trúc mong muốn
  private static data = servicesData as {
    categories: Record<string, ServiceCategory>;
  };

  // Lấy tất cả danh mục dịch vụ
  static getAllCategories(): Record<string, ServiceCategory> {
    return this.data.categories;
  }

  // Lấy một danh mục dịch vụ dựa trên categoryId
  // Trả về null nếu không tìm thấy
  static getCategory(categoryId: string): ServiceCategory | null {
    return this.data.categories[categoryId] || null;
  }

  // Lấy một dịch vụ cụ thể dựa trên categoryId và serviceId
  // Trả về null nếu không tìm thấy danh mục hoặc dịch vụ
  static getService(categoryId: string, serviceId: string): Service | null {
    const category = this.getCategory(categoryId);
    if (!category) return null;
    return category.services[serviceId] || null;
  }

  // Lấy một kiểu tóc cụ thể dựa trên categoryId, serviceId, và styleId
  // Trả về null nếu không tìm thấy dịch vụ hoặc kiểu tóc
  static getStyle(
    categoryId: string,
    serviceId: string,
    styleId: string
  ): HairStyle | null {
    const service = this.getService(categoryId, serviceId);
    if (!service) return null;
    return service.styles[styleId] || null;
  }

  // Lấy danh sách tất cả dịch vụ trong một danh mục
  // Trả về mảng rỗng nếu không tìm thấy danh mục
  static getCategoryServices(categoryId: string): Service[] {
    const category = this.getCategory(categoryId);
    if (!category) return [];
    return Object.values(category.services);
  }

  // Lấy danh sách tất cả kiểu tóc trong một dịch vụ
  // Trả về mảng rỗng nếu không tìm thấy dịch vụ
  static getServiceStyles(categoryId: string, serviceId: string): HairStyle[] {
    const service = this.getService(categoryId, serviceId);
    if (!service) return [];
    return Object.values(service.styles);
  }

  // Lấy danh sách các kiểu tóc phổ biến (popular: true) trong một dịch vụ
  // Trả về mảng rỗng nếu không tìm thấy dịch vụ hoặc không có kiểu tóc phổ biến
  static getPopularStyles(categoryId: string, serviceId: string): HairStyle[] {
    const styles = this.getServiceStyles(categoryId, serviceId);
    return styles.filter((style) => style.popular);
  }

  // Đếm số lượng kiểu tóc trong một dịch vụ
  // Trả về 0 nếu không tìm thấy dịch vụ
  static getStyleCount(categoryId: string, serviceId: string): number {
    return this.getServiceStyles(categoryId, serviceId).length;
  }

  // BỔ SUNG: Kiểm tra xem một dịch vụ có styles rỗng hay không
  // Trả về false nếu không tìm thấy dịch vụ
  static hasEmptyStyles(categoryId: string, serviceId: string): boolean {
    const service = this.getService(categoryId, serviceId);
    if (!service) return false;
    return Object.keys(service.styles).length === 0;
  }

  // BỔ SUNG: Lấy danh sách các dịch vụ có styles rỗng
  // Nếu categoryId được cung cấp, chỉ kiểm tra trong danh mục đó
  // Nếu không, kiểm tra toàn bộ danh mục
  static getServicesWithEmptyStyles(categoryId?: string): Service[] {
    const categories = categoryId
      ? { [categoryId]: this.getCategory(categoryId) }
      : this.getAllCategories();

    const servicesWithEmptyStyles: Service[] = [];

    for (const category of Object.values(categories)) {
      if (!category) continue;
      for (const service of Object.values(category.services)) {
        if (Object.keys(service.styles).length === 0) {
          servicesWithEmptyStyles.push(service);
        }
      }
    }

    return servicesWithEmptyStyles;
  }

  // BỔ SUNG: Lấy tất cả dịch vụ từ mọi danh mục
  // Trả về danh sách phẳng chứa tất cả Service
  static getAllServices(): Service[] {
    return Object.values(this.data.categories).flatMap((category) =>
      Object.values(category.services)
    );
  }

  // BỔ SUNG: Lấy thông tin dịch vụ kèm trạng thái styles
  // Trả về null nếu không tìm thấy dịch vụ
  static getServiceWithStylesInfo(
    categoryId: string,
    serviceId: string
  ): ServiceWithStylesInfo | null {
    const service = this.getService(categoryId, serviceId);
    if (!service) return null;
    return {
      ...service,
      hasStyles: Object.keys(service.styles).length > 0,
    };
  }

  // BỔ SUNG: Xác thực dữ liệu JSON để đảm bảo tính toàn vẹn
  // Trả về true nếu dữ liệu hợp lệ, false nếu thiếu trường bắt buộc
  static validateData(): boolean {
    if (!this.data.categories) return false;
    for (const category of Object.values(this.data.categories)) {
      if (!category.id || !category.services) return false;
      for (const service of Object.values(category.services)) {
        if (!service.id || typeof service.styles !== "object") return false;
        for (const style of Object.values(service.styles)) {
          if (!style.id) return false;
        }
      }
    }
    return true;
  }
}
