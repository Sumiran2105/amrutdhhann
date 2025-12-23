import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaChevronRight,
  FaBuilding,
  FaLeaf,

  FaGlobe,
} from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-[#081526] text-white">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6 py-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow">
                <img
                  src="/images/logo.jpeg"
                  alt="Amrutdhhann Logo"
                  className="w-11 h-11 object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">Amrutdhhann</h2>
                <p className="text-xs text-gray-300 italic">
                  “Dharmo Rakshati Rakshitah”
                </p>
              </div>
            </div>

            <p className="text-gray-100 text-sm text-justify">
              Milk is not just another product  it is part of every family’s daily life.
              Amrutdhhann ensures what reaches your home is pure, safe, and exactly as nature
              intended, while building a sustainable, ethical dairy ecosystem that creates
              long-term value for consumers, investors, and agents.

            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="hidden md:flex justify-center">
            <div className="text-center ">
              <h3 className="text-lg font-semibold mb-4">
                Quick Links
              </h3>

              <div className="flex flex-col items-center gap-2 text-sm">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/services", label: "Services" },
                  { path: "/contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="group flex items-center w-32 justify-start text-gray-100 hover:text-white transition"
                  >
                    <FaChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition" />
                    <span>{item.label}</span>
                  </Link>

                ))}
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <div>
              <h3 className="text-lg font-semibold  mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About Us" },
                  { path: "/services", label: "Services" },
                  { path: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="flex items-center text-gray-300 hover: transition"
                    >
                      <FaChevronRight className="w-3 h-3 mr-2 " />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>






          {/* OUR ECOSYSTEM */}
          <div>
            <h3 className="text-lg font-semibold  mb-4">
              Our Ecosystem
            </h3>
            <ul className="space-y-2 text-sm text-gray-100">
              <li className="flex items-center gap-2">
                <FaBuilding className="w-3 h-3" />
                Integrated Dairy Farms
              </li>

              <li className="flex items-center gap-2">
                <FaLeaf className="w-3 h-3" />
                Ethical & Cruelty-Free Farming
              </li>

              <li className="flex items-center gap-2">
                <FaGlobe className="w-3 h-3 " />
                Global Dairy Exports
              </li>

              <li className="flex items-center gap-2">
                <MdCurrencyRupee className="w-3 h-3" />
                Predictable Monthly Income for Investors
              </li>
            </ul>

          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold  mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-100">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className=" w-12 h-12 " />
                <span>H.No. 131/A, 2nd Floor, MLA Colony, Beside Vamsiram Banjara Abodes, Road No.12, Lane 14, Banjara Hills, Hyderabad-500034.</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className=" w-4 h-4" />
                +91 90000 00000
              </li>
              <li className="flex items-center gap-2 break-all">
                <FaEnvelope className=" w-4 h-4" />
                info@anandgroup.org
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-gray-400">

          {/* Social Icons */}
          <div className="flex gap-5">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-white hover:text-blue-900 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p>© {currentYear} Amrutdhhann. All rights reserved.</p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white transition">
              Terms
            </Link>
            <Link to="/disclaimer" className="hover:text-white transition">
              Disclaimer
            </Link>
            <Link to="/refund-policy" className="hover:text-white transition">
              Refund
            </Link>
            <Link to="/risk-disclosure" className="hover:text-white transition">
              Risk Disclosure
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
