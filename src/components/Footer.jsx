import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-[#081526] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white text-blue-800 font-bold flex items-center justify-center">
                A
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-wide">
                  Amrutdhhann
                </h2>
                <p className="text-xs italic text-blue-200">
                  Trust • Growth • Security
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering financial stability through transparent,
              reliable, and growth-focused financial solutions.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-gray-300 text-sm hover:text-orange-400 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Contact
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              Hyderabad, Telangana  
              <br />
              India
            </p>

            <p className="text-gray-300 text-sm mt-2">
              📞 +91 90000 00000
            </p>
            <p className="text-gray-300 text-sm">
              📧 info@Amrutdhhann.com
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">
          <p>© {currentYear} Amrutdhhann. All rights reserved.</p>

          <p>
            Designed by{" "}
            <span className="text-orange-400 font-medium">
              Design Career Metrics
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
