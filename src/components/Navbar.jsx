import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path) => location.pathname === path;
  const isDropdownActive = (submenu) =>
    submenu.some((s) => s.path === location.pathname);

  /* Scroll Shadow */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Close menus on route change */
  useEffect(() => {
    setIsMenuOpen(false);
    setDesktopDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-300 border-b ${
        isScrolled ? "shadow-md border-gray-300" : "border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* BRAND */}
          <Link to="/" className="flex items-center gap-3">
            {/* Logo Placeholder */}
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">
              A
            </div>

            <div className="leading-tight">
              <h1 className="text-xl font-bold text-gray-900">
                Amrutdhhann
              </h1>
              <p className="text-xs text-gray-500 italic">
                Trust • Growth • Security
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-3">
            {navItems.map((item) =>
              item.type !== "dropdown" ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    isActiveLink(item.path)
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() =>
                      setDesktopDropdownOpen(!desktopDropdownOpen)
                    }
                    className={`px-4 py-2 rounded-lg font-medium flex items-center gap-1 transition ${
                      desktopDropdownOpen || isDropdownActive(item.submenu)
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`transition-transform ${
                        desktopDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {desktopDropdownOpen && (
                    <div className="absolute left-0 top-12 w-60 bg-white border rounded-xl shadow-lg py-2 z-50">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-3xl text-blue-700"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t pt-4 pb-6 space-y-2">
            {navItems.map((item) =>
              item.type !== "dropdown" ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-50"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="px-4">
                  <button
                    onClick={() =>
                      setMobileDropdownOpen(!mobileDropdownOpen)
                    }
                    className="w-full flex justify-between items-center py-3 font-medium bg-gray-50 rounded-lg px-4"
                  >
                    {item.label}
                    <span
                      className={`transition-transform ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {mobileDropdownOpen && (
                    <div className="mt-2 space-y-1 pl-4">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
