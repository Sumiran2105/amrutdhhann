import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaLeaf,
  FaGlobe,
  FaCheckCircle,
  FaSolarPanel,
  FaRegClock,
} from "react-icons/fa";
import { MdTrendingUp, MdCurrencyRupee } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";

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

      <ul className="space-y-4">
        <li className="flex gap-4">
          <FaShieldAlt className="text-blue-600 w-5 h-5 mt-1" />
          <p className="text-gray-700">
            100% pure buffalo milk and dairy by-products
          </p>
        </li>

        <li className="flex gap-4">
          <FaLeaf className="text-green-600 w-5 h-5 mt-1" />
          <p className="text-gray-700">
            No chemicals, no preservatives, no adulteration
          </p>
        </li>

        <li className="flex gap-4">
          <FaGlobe className="text-indigo-600 w-5 h-5 mt-1" />
          <p className="text-gray-700">
            Export-ready dairy meeting international standards
          </p>
        </li>
      </ul>

      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-sm text-gray-700">
          Powered by solar energy and gobar gas, our farms operate as a
          self-sustaining, environmentally responsible ecosystem.
        </p>
      </div>

      {/* ✅ CTA FOR DAIRY */}
      <div className="mt-6 flex gap-3">
        <button className="w-full px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
          Explore Our Dairy Products
        </button>

        {/* Optional secondary CTA (remove if not needed) */}
        <button className="w-full px-6 py-3 rounded-lg border border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 transition">
          View Farm Operations
        </button>
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

          <ul className="space-y-4">
            <li className="flex gap-4">
              <MdTrendingUp className="text-orange-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">
                Predictable and uninterrupted monthly income
              </p>
            </li>

            <li className="flex gap-4">
              <MdCurrencyRupee className="text-orange-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">
                ₹5,00,000 investment earns ₹10,000 per month for 15 years
              </p>
            </li>

            <li className="flex gap-4">
              <HiOutlineRefresh className="text-orange-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">
                Entire original investment returned after the term
              </p>
            </li>
          </ul>

          <div className="mt-6 bg-orange-50 border border-orange-100 rounded-xl p-4">
            <p className="text-sm text-gray-700">
              A transparent, asset backed investment model designed for
              long-term income visibility and capital protection.
            </p>
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
              Apply / Invest Now
            </button>
          </div>
        </>
      ),
    },
  ];

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, slides.length]);

  /* ---------- METRIC SYNC ---------- */
  const activeMetrics =
    activeSlide === 0
      ? ["Pure Milk", "Powered Farms"]
      : ["Backed Model", "Vision"];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 leading-tight">
            Amrutdhhann
            <span className="block text-blue-700 mt-2">
              Asia’s Largest Sustainable
              <br className="hidden sm:block" />
              Dairy Ecosystem
            </span>
          </h1>

          <div className="mt-5 flex flex-wrap gap-3">
            {["Cruelty-Free", "Asset-Backed", "Sustainable"].map((item) => (
              <span
                key={item}
                className="px-4 py-1 rounded-full text-sm bg-blue-100 text-blue-700 font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-lg text-gray-700">
              Amrutdhhann is envisioned to become Asia’s largest integrated dairy
              enterprise, built on quality, scale, and long-term sustainability.
            </p>
            <p className="text-gray-700">
              Organic milk and dairy by-products produced through responsible,
              cruelty-free farming practices.
            </p>
          </div>

          {/* METRICS */}
                 <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
  {[
    { value: "100%", label: "Pure Milk", Icon: FaCheckCircle },
    { value: "Solar", label: "Powered Farms", Icon: FaSolarPanel },
    { value: "Asset", label: "Backed Model", Icon: FaShieldAlt },
    { value: "Long-Term", label: "Vision", Icon: FaRegClock },
  ].map(({ value, label, Icon }) => {
    const isActive = activeMetrics.includes(label);

    const activeColor = "#1D4ED8";   // blue-700
    const inactiveColor = "#475569"; // slate-600

    return (
      <motion.div
        key={label}
        layout
        initial={false}
        animate={{ scale: isActive ? 1.05 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`
          rounded-xl p-4 flex flex-col items-center text-center
          ${isActive
            ? "bg-blue-50 outline outline-2 outline-blue-400"
            : "bg-white border border-slate-200"}
        `}
      >
        {/* ICON – FORCED COLOR */}
        <div className="mb-2 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
          <Icon size={20} color={isActive ? activeColor : inactiveColor} />
        </div>

        {/* VALUE – FORCED COLOR */}
        <p
          className="text-2xl font-bold leading-tight"
          style={{ color: isActive ? activeColor : inactiveColor }}
        >
          {value}
        </p>

        {/* LABEL – FORCED COLOR */}
        <p
          className="mt-0.5 text-xs font-medium"
          style={{ color: isActive ? "#2563EB" : "#64748B" }}
        >
          {label}
        </p>
      </motion.div>
    );
  })}
</div>

        </div>

        {/* RIGHT SLIDER */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[activeSlide].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              {slides[activeSlide].content}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  index === activeSlide
                    ? "bg-blue-700"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
