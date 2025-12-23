import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaLeaf,
  FaGlobe,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import { MdTrendingUp, MdCurrencyRupee } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  /* ---------- SLIDES ---------- */
  const slides = [
    {
      id: "dairy",
      content: (
        <>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Dairy Excellence
          </h3>

          <ul className="md:space-y-4 space-y-3">
            <li className="flex gap-4">
              <FaCheckCircle className="text-blue-600 w-6 h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-700 md:text-base text-sm ">
                Organic and healthy milk and milk by-products
              </p>
            </li>

            <li className="flex gap-4">
              <FaLeaf className="text-green-600 w-6 h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-700 md:text-base text-sm ">
                Cruelty-free farming with ethical animal care
              </p>
            </li>

            <li className="flex gap-4">
              <FaGlobe className="text-indigo-600 w-6 h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-700 md:text-base text-sm ">
                Dairy products supplied and exported worldwide
              </p>
            </li>
          </ul>

          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="text-sm md:text-base  text-gray-700 ">
              A self-sustaining ecosystem powered by
              renewable energy, ensuring environmentally responsible dairy
              production.
            </p>
          </div>

          <div className="mt-6">
             <Link to="/contact" className="block">
            <button className="w-full px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
              Explore Our Dairy
            </button>
            </Link>
          </div>
        </>
      ),
    },

    {
      id: "invest",
      content: (
        <>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Investor Benefits
          </h3>

          <ul className="md:space-y-4 space-y-3">
            <li className="flex gap-4">
              <MdTrendingUp className="text-orange-500 w-6 h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-700 md:text-base text-sm">
                Consistent and uninterrupted monthly income
              </p>
            </li>

            <li className="flex gap-4">
              <MdCurrencyRupee className="text-orange-500 w-6 h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-700 md:text-base text-sm ">
                ₹5,00,000 investment earns ₹10,000 every month for 15 years
              </p>
            </li>

            <li className="flex gap-4">
              <HiOutlineRefresh className="text-orange-500 w-6 h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-700 md:text-base text-sm ">
                Entire original investment refunded after 15 years
              </p>
            </li>
          </ul>

          <div className="mt-6 bg-orange-50 border border-orange-100 rounded-xl p-4">
            <p className="text-sm  md:text-base text-gray-700 md:text-base text-sm">
              A transparent, asset-based earning model designed for long-term
              financial security.
            </p>
          </div>

          <div className="mt-6">
            <Link to="/contact" className="block">
            <button className="w-full px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
              Apply / Invest Now
            </button>
            </Link>

          </div>
        </>
      ),
    },

    {
      id: "agent",
      content: (
        <>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Agent Opportunities
          </h3>

          <ul className="md:space-y-4 space-y-3">
            <li className="flex gap-4">
              <FaHandshake className="text-emerald-600 w-6 h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-700 md:text-base text-sm ">
                Immediate income opportunities for agents
              </p>
            </li>

            <li className="flex gap-4">
              <MdCurrencyRupee className="text-emerald-600 w-6 h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-700 md:text-base text-sm ">
                Additional commission for every investor introduced
              </p>
            </li>

            <li className="flex gap-4">
              <FaShieldAlt className="text-emerald-600 w-6 h-6 md:w-5 md:h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-700 md:text-base text-sm ">
                Stable earnings backed by a real dairy business
              </p>
            </li>
          </ul>

          <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-xl p-4">
            <p className="text-sm  md:text-base text-gray-700 ">
              Agents benefit from a transparent and long-term earning structure
              while being part of a growing global dairy ecosystem.
            </p>
          </div>

          <div className="mt-6">
         <Link to="/contact" className="block">
            <button className="w-full px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
              Become an Agent
            </button></Link>
          </div>
        </>
      ),
    },
  ];

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(
      () => setActiveSlide((p) => (p + 1) % slides.length),
      3500
    );
    return () => clearInterval(interval);
  }, [paused, slides.length]);

  return (
   <section className="bg-gradient-to-b from-white to-blue-50 ">
  <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6 md:py-12 py-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    {/* LEFT SIDE */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
        Amrutdhhann
        <span className="block text-blue-700 mt-2">
          Asia’s Largest Sustainable Dairy Ecosystem
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-gray-700 text-base md:text-lg leading-relaxed">
  Focused on purity, sustainability, and scale, Amrutdhhann is envisioned to
  become Asia’s largest integrated dairy ecosystem. We produce organic,
  healthy milk and milk by-products for India and global markets, while
  creating a reliable, asset-based income platform for investors and agents
  built on ethical farming, cruelty-free animal care, and environmentally
  responsible operations.
</p>


      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          { value: "100%", label: "Pure Milk" },
          { value: "Global", label: "Global Exports" },
          { value: "₹10K", label: "Monthly Income" },
          { value: "Ethical", label: "Cruelty-Free" },
        ].map(({ value, label }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-xl p-4 text-center bg-blue-50 border border-blue-300"
          >
            <p className="text-2xl font-bold text-blue-700">{value}</p>
            <p className="text-xs font-medium text-gray-600">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* RIGHT SLIDER */}
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[activeSlide].id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          className="bg-white border rounded-2xl shadow-xl md:p-8 p-6"
        >
          {slides[activeSlide].content}
        </motion.div>
      </AnimatePresence>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              i === activeSlide ? "bg-blue-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>

  </div>
</section>

  );
}
