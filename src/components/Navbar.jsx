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

  /* Scroll shadow */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close menus on route change */
  useEffect(() => {
    setIsMenuOpen(false);
    setDesktopDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  return (
  
<header className="sticky top-0 z-50 bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">

          {/* BRAND */}
          <Link
            to="/"
            className="flex items-center md:space-x-3 space-x-1 group cursor-pointer"
          >
            {/* Founder Image */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
              <img
                src="/images/founder.jpg"
                alt="Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Logo + Text */}
            <div className="flex items-center md:space-x-2 space-x-1">
              <img
                src="/images/logo.jpeg"
                alt="Amrutdhhann Logo"
                className="w-11 h-11 md:w-14 md:h-14 object-contain"
              />

              <div className="flex flex-col leading-tight">
                <h1 className="text-lg md:text-xl font-bold text-blue-800">
                  <span className="text-orange-500">AMRUT</span>DHHANN
                </h1>
                <p className="text-xs text-gray-600 italic mt-1">
                "Dharmo Rakshati Rakshitah"
              </p>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
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
            ))}
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
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg transition ${
                  isActiveLink(item.path)
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-blue-50 text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
