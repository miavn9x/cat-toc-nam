"use client";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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

  // Handle navigation for mobile menu items
  const handleMobileNavigation = (
    item: MenuItem,
    index: number,
    subIndex?: number
  ) => {
    // If item has a link and no sub-items, navigate directly
    if (item.link && !item.subItems) {
      router.push(item.link);
      setIsOpen(false);
      return;
    }

    // If item has sub-items, toggle the submenu (no navigation)
    if (item.subItems) {
      toggleSubMenu(index, subIndex);
    }
  };

  // Handle link click for mobile menu items with both link and sub-items
  const handleLinkClick = (link: string) => {
    router.push(link);
    setIsOpen(false);
  };

  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      subItems: [
        { name: "Introduce", link: "/about/winchair-beauty-spa" },
        { name: "Outstanding Advantages", link: "/about/features" },
      ],
    },
    {
      name: "Services & Prices",
      link: "/service-and-price",
      subItems: [
        {
          name: "Men's Hair Services",
          link: "/service-and-price/mens-hair-services",
          subItems: [
            {
              name: "Men's Haircut",
              link: "/service-and-price/mens-hair-services/mens-haircut",
            },
            {
              name: "Cut Fade",
              link: "/service-and-price/mens-hair-services/fade-haircut",
            },
            {
              name: "Hot Shave",
              link: "/service-and-price/mens-hair-services/hot-shave",
            },
            {
              name: "Beard Trimming",
              link: "/service-and-price/mens-hair-services/beard-trim",
            },
          ],
        },
        {
          name: "Women's Hair Services",
          link: "/service-and-price/womens-hair-services",
          subItems: [
            {
              name: "Women's Haircut",
              link: "/service-and-price/womens-hair-services/womens-haircut",
            },
            {
              name: "Hair Coloring",
              link: "/service-and-price/womens-hair-services/hair-coloring",
            },
            {
              name: "Highlight",
              link: "/service-and-price/womens-hair-services/hair-highlights",
            },
            {
              name: "Hair Perm",
              link: "/service-and-price/womens-hair-services/hair-perm",
            },
            {
              name: "Hair Straightening",
              link: "/service-and-price/womens-hair-services/hair-straightening",
            },
            {
              name: "Updo",
              link: "/service-and-price/womens-hair-services/hair-updo",
            },
          ],
        },
        {
          name: "Baby Hair Services",
          link: "/service-and-price/kids-hair-services",
          subItems: [
            {
              name: "Boys Haircuts",
              link: "/service-and-price/kids-hair-services/boys-haircut",
            },
            {
              name: "Baby Girl Haircut",
              link: "/service-and-price/kids-hair-services/girls-haircut",
            },
          ],
        },
        {
          name: "Hair Care & Styling",
          link: "/service-and-price/hair-treatment-and-styling",
          subItems: [
            {
              name: "Head washing",
              link: "/service-and-price/hair-treatment-and-styling/hair-wash",
            },
            {
              name: "Shampoo & Styling",
              link: "/service-and-price/hair-treatment-and-styling/wash-and-style",
            },
            {
              name: "Hair Treatment",
              link: "/service-and-price/hair-treatment-and-styling/hair-treatment",
            },
            {
              name: "Scalp Massage",
              link: "/service-and-price/hair-treatment-and-styling/scalp-massage",
            },
          ],
        },
        {
          name: "Beauty Care Services",
          link: "/service-and-price/beauty-services",
          subItems: [
            {
              name: "Facial Care",
              link: "/service-and-price/beauty-services/facial-treatment",
            },
            {
              name: "Waxing",
              link: "/service-and-price/beauty-services/body-waxing",
            },
            {
              name: "Eyelash Extensions",
              link: "/service-and-price/beauty-services/eyelash-extension",
            },
            {
              name: "Microblading Cosmetic Tattooing",
              link: "/service-and-price/beauty-services/microblading",
            },
          ],
        },
        { name: "Other Services", link: "/service-and-price" },
      ],
    },
    { name: "Make an Appointment", link: "/booking" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 text-white z-50" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout: Logo trái, Menu phải */}
        <div className="hidden lg:flex items-center justify-between h-16">
          {/* Logo bên trái */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold hover:text-amber-300 transition-colors"
            >
              Winchair Beauty Spa
            </Link>
          </div>

          {/* Menu bên phải */}
          <div className="flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.link || "#"}
                  className="flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 whitespace-nowrap transition-colors"
                  title={item.name}
                >
                  <span>{item.name}</span>
                  {item.subItems && (
                    <FaChevronDown className="h-4 w-4 text-amber-200 ml-2" />
                  )}
                </Link>
                {item.subItems && (
                  <div className="absolute hidden group-hover:block bg-gray-700 min-w-[200px] rounded-md shadow-lg z-10 top-full left-0 transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    {item.subItems.map((subItem, subIndex) => (
                      <div key={subIndex} className="relative group/sub">
                        <Link
                          href={subItem.link || "#"}
                          className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-600 transition-colors"
                          title={subItem.name}
                        >
                          <span>{subItem.name}</span>
                          {subItem.subItems && (
                            <FaChevronDown className="h-4 w-4 text-amber-200 ml-1 group-hover/sub:-rotate-90 transition-transform" />
                          )}
                        </Link>
                        {subItem.subItems && (
                          <div className="absolute hidden group-hover/sub:block bg-gray-700 min-w-[200px] rounded-md shadow-lg left-full top-0 transform translate-x-[-100%] group-hover/sub:translate-x-0 transition-transform duration-300 ease-in-out">
                            {subItem.subItems.map((subSubItem, subSubIndex) => (
                              <Link
                                key={subSubIndex}
                                href={subSubItem.link || "#"}
                                className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-600 transition-colors"
                                title={subSubItem.name}
                              >
                                <span>{subSubItem.name}</span>
                              </Link>
                            ))}
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

        {/* Tablet Layout: Logo trên căn giữa, Menu dưới căn giữa */}
        <div className="hidden md:block lg:hidden">
          {/* Logo trên căn giữa */}
          <div className="flex justify-center py-4">
            <Link
              href="/"
              className="text-2xl font-bold hover:text-amber-300 transition-colors"
            >
              Winchair Beauty Spa
            </Link>
          </div>

          {/* Menu dưới căn giữa */}
          <div className="flex justify-center pb-4">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.link || "#"}
                    className="flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 whitespace-nowrap transition-colors"
                    title={item.name}
                  >
                    <span>{item.name}</span>
                    {item.subItems && (
                      <FaChevronDown className="h-4 w-4 text-amber-200 ml-2" />
                    )}
                  </Link>
                  {item.subItems && (
                    <div className="absolute hidden group-hover:block bg-gray-700 min-w-[200px] rounded-md shadow-lg z-10 top-full left-0 transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      {item.subItems.map((subItem, subIndex) => (
                        <div key={subIndex} className="relative group/sub">
                          <Link
                            href={subItem.link || "#"}
                            className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-600 transition-colors"
                            title={subItem.name}
                          >
                            <span>{subItem.name}</span>
                            {subItem.subItems && (
                              <FaChevronDown className="h-4 w-4 text-amber-200 ml-1 group-hover/sub:-rotate-90 transition-transform" />
                            )}
                          </Link>
                          {subItem.subItems && (
                            <div className="absolute hidden group-hover/sub:block bg-gray-700 min-w-[200px] rounded-md shadow-lg left-full top-0 transform translate-x-[-100%] group-hover/sub:translate-x-0 transition-transform duration-300 ease-in-out">
                              {subItem.subItems.map(
                                (subSubItem, subSubIndex) => (
                                  <Link
                                    key={subSubIndex}
                                    href={subSubItem.link || "#"}
                                    className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-600 transition-colors"
                                    title={subSubItem.name}
                                  >
                                    <span>{subSubItem.name}</span>
                                  </Link>
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
        </div>

        {/* Mobile Layout: Logo và hamburger button */}
        <div className="md:hidden flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold hover:text-amber-300 transition-colors"
            >
              Winchair Beauty Spa
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
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
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu slide-out */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-y-0 left-0 w-3/4 max-w-xs bg-gray-900 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-20 overflow-y-auto`}
        aria-hidden={!isOpen}
      >
        <nav
          className="px-4 pt-4 pb-6 space-y-2"
          aria-label="Mobile navigation"
        >
          {menuItems.map((item, index) => (
            <div key={index} className="space-y-1">
              {/* Main menu item */}
              {item.link && !item.subItems ? (
                // Direct link without submenu
                <Link
                  href={item.link}
                  className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                  title={item.name}
                >
                  <span>{item.name}</span>
                </Link>
              ) : (
                // Item with submenu
                <div className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors">
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="flex-grow"
                      onClick={() => item.link && handleLinkClick(item.link)}
                      title={item.name}
                    >
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <span className="flex-grow">{item.name}</span>
                  )}
                  {item.subItems && (
                    <button
                      className="p-2"
                      onClick={() => handleMobileNavigation(item, index)}
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <FaChevronDown
                        className={`h-4 w-4 text-amber-200 transition-transform ${
                          openSubMenus[index.toString()] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              )}

              {/* Submenu items */}
              {item.subItems && openSubMenus[index.toString()] && (
                <div className="pl-4 space-y-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="space-y-1">
                      {subItem.link && !subItem.subItems ? (
                        // Direct link without sub-submenu
                        <Link
                          href={subItem.link}
                          className="flex justify-between items-center w-full px-3 py-2 rounded-md text-sm hover:bg-gray-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                          title={subItem.name}
                        >
                          <span>{subItem.name}</span>
                        </Link>
                      ) : (
                        // Item with sub-submenu
                        <div className="flex justify-between items-center w-full px-3 py-2 rounded-md text-sm hover:bg-gray-600 transition-colors">
                          {subItem.link ? (
                            <Link
                              href={subItem.link}
                              className="flex-grow"
                              onClick={() =>
                                subItem.link && handleLinkClick(subItem.link)
                              }
                              title={subItem.name}
                            >
                              <span>{subItem.name}</span>
                            </Link>
                          ) : (
                            <span className="flex-grow">{subItem.name}</span>
                          )}
                          {subItem.subItems && (
                            <button
                              className="p-2"
                              onClick={() =>
                                handleMobileNavigation(subItem, index, subIndex)
                              }
                              aria-label={`Toggle ${subItem.name} submenu`}
                            >
                              <FaChevronDown
                                className={`h-4 w-4 text-amber-200 transition-transform ${
                                  openSubMenus[`${index}-${subIndex}`]
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>
                      )}

                      {/* Sub-submenu items */}
                      {subItem.subItems &&
                        openSubMenus[`${index}-${subIndex}`] && (
                          <div className="pl-4 space-y-1">
                            {subItem.subItems.map((subSubItem, subSubIndex) => (
                              <Link
                                key={subSubIndex}
                                href={subSubItem.link || "#"}
                                className="flex justify-between items-center w-full px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                                title={subSubItem.name}
                              >
                                <span>{subSubItem.name}</span>
                              </Link>
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

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Menu;
