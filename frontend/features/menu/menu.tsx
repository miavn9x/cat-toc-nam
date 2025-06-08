"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

// Define types for menu items
interface MenuItem {
  name: string;
  link?: string;
  subItems?: MenuItem[];
}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>(
    {}
  );
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleSubMenu = (index: number, subIndex: number | null = null) => {
    setOpenSubMenus((prev) => {
      const key = subIndex !== null ? `${index}-${subIndex}` : index.toString();
      return { ...prev, [key]: !prev[key] };
    });
  };

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems: MenuItem[] = [
    { name: "Trang Chủ", link: "/" },
    {
      name: "Về Chúng Tôi",
      subItems: [
        { name: "Giới Thiệu", link: "/about" },
        { name: "Ưu Điểm Nổi Bật", link: "/features" },
      ],
    },
    {
      name: "Dịch Vụ & Giá",
      subItems: [
        {
          name: "Dịch Vụ Tóc Nam",
          subItems: [
            { name: "Cắt Tóc Nam", link: "/men-haircut" },
            { name: "Cắt Fade", link: "/fade" },
            { name: "Cạo Râu Nóng", link: "/hot-shave" },
            { name: "Tỉa Râu", link: "/beard-trim" },
          ],
        },
        {
          name: "Dịch Vụ Tóc Nữ",
          subItems: [
            { name: "Cắt Tóc Nữ", link: "/women-haircut" },
            { name: "Nhuộm Tóc", link: "/hair-dye" },
            { name: "Highlight", link: "/highlight" },
            { name: "Uốn Tóc", link: "/curl" },
            { name: "Duỗi Tóc", link: "/straighten" },
            { name: "Búi Tóc", link: "/updo" },
          ],
        },
        {
          name: "Dịch Vụ Tóc Cho Bé",
          subItems: [
            { name: "Cắt Tóc Bé Trai", link: "/boys-haircut" },
            { name: "Cắt Tóc Bé Gái", link: "/girls-haircut" },
          ],
        },
        {
          name: "Chăm Sóc & Tạo Kiểu Tóc",
          subItems: [
            { name: "Gội Đầu", link: "/shampoo" },
            { name: "Gội & Tạo Kiểu", link: "/shampoo-style" },
            { name: "Liệu Trình Dưỡng Tóc", link: "/hair-treatment" },
            { name: "Massage Da Đầu", link: "/scalp-massage" },
          ],
        },
        {
          name: "Dịch Vụ Chăm Sóc Sắc Đẹp",
          subItems: [
            { name: "Chăm Sóc Da Mặt", link: "/facial" },
            { name: "Tẩy Lông (Waxing)", link: "/waxing" },
            { name: "Nối Mi", link: "/eyelash-extension" },
            { name: "Phun Xăm Thẩm Mỹ Microblading", link: "/microblading" },
          ],
        },
        { name: "Dịch Vụ Khác", link: "/other-services" },
      ],
    },
    { name: "Đặt Lịch Hẹn", link: "/booking" },
    {
      name: "Liên Hệ",
      subItems: [
        { name: "Địa Chỉ", link: "/address" },
        { name: "Điện Thoại", link: "/phone" },
        { name: "Giờ Mở Cửa", link: "/hours" },
      ],
    },
  ];

  return (
    <nav className="bg-gray-800 text-white" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold">Winchair Beauty Spa</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.link || "#"}
                    className="flex justify-between items-center w-full px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                    title={item.name}
                  >
                    <span>{item.name}</span>
                    {item.subItems && (
                      <FaChevronDown className="h-4 w-4 text-amber-200 ml-4" />
                    )}
                  </a>
                  {item.subItems && (
                    <div className="absolute hidden group-hover:block bg-gray-700 min-w-[200px] rounded-md shadow-lg z-10">
                      {item.subItems.map((subItem, subIndex) => (
                        <div key={subIndex} className="relative group/sub">
                          <a
                            href={subItem.link || "#"}
                            className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-600"
                            title={subItem.name}
                          >
                            <span>{subItem.name}</span>
                            {subItem.subItems && (
                              <FaChevronDown className="h-4 w-4 text-amber-200 ml-1 group-hover/sub:-rotate-90 transition-transform" />
                            )}
                          </a>
                          {subItem.subItems && (
                            <div className="absolute hidden group-hover/sub:block bg-gray-700 min-w-[200px] rounded-md shadow-lg left-full top-0">
                              {subItem.subItems.map(
                                (subSubItem, subSubIndex) => (
                                  <a
                                    key={subSubIndex}
                                    href={subSubItem.link || "#"}
                                    className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-600"
                                    title={subSubItem.name}
                                  >
                                    <span>{subSubItem.name}</span>
                                  </a>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-y-0 left-0 w-3/4 max-w-xs bg-gray-900 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-20`}
        aria-hidden={!isOpen}
      >
        <nav
          className="px-4 pt-4 pb-6 space-y-2"
          aria-label="Mobile navigation"
        >
          {menuItems.map((item, index) => (
            <div key={index} className="space-y-1">
              <div
                className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 cursor-pointer"
                onClick={() => toggleSubMenu(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleSubMenu(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={openSubMenus[index.toString()]}
                aria-label={`Toggle ${item.name} submenu`}
              >
                <span>{item.name}</span>
                {item.subItems && (
                  <FaChevronDown
                    className={`h-4 w-4 text-amber-200 ml-1 transition-transform ${
                      openSubMenus[index.toString()] ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>
              {item.subItems && openSubMenus[index.toString()] && (
                <div className="pl-4 space-y-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="space-y-1">
                      <div
                        className="flex justify-between items-center w-full px-3 py-2 rounded-md text-sm hover:bg-gray-600 cursor-pointer"
                        onClick={() => toggleSubMenu(index, subIndex)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            toggleSubMenu(index, subIndex);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-expanded={openSubMenus[`${index}-${subIndex}`]}
                        aria-label={`Toggle ${subItem.name} submenu`}
                      >
                        <span>{subItem.name}</span>
                        {subItem.subItems && (
                          <FaChevronDown
                            className={`h-4 w-4 text-amber-200 ml-1 transition-transform ${
                              openSubMenus[`${index}-${subIndex}`]
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        )}
                      </div>
                      {subItem.subItems &&
                        openSubMenus[`${index}-${subIndex}`] && (
                          <div className="pl-4 space-y-1">
                            {subItem.subItems.map((subSubItem, subSubIndex) => (
                              <a
                                key={subSubIndex}
                                href={subSubItem.link || "#"}
                                className="flex justify-between items-center w-full px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-600"
                                onClick={() => setIsOpen(false)}
                                title={subSubItem.name}
                              >
                                <span>{subSubItem.name}</span>
                              </a>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Menu;