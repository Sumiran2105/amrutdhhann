import { MdCurrencyRupee } from "react-icons/md";
import { FaShieldAlt, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";


export default function ReliableIncome() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Reliable Income
          </h2>

          <p className="mt-6 text-gray-700 md:text-lg text-sm leading-relaxed">
            Along with dairy excellence, Amrutdhhann is designed to provide
            consistent and reliable income to those who invest with us.
            Investors and agents benefit from uninterrupted and stable earnings,
            supported by a strong, asset-based dairy business.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT: EXPLANATION */}
          <div className="relative md:space-y-8  space-y-3">

            {/* Vertical accent line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-green-200 to-indigo-200 hidden sm:block"></div>
            {/* POINT 1 */}
            <div className="relative flex items-center gap-6">

              {/* LEFT ICON — DESKTOP ONLY */}
              <div className="hidden md:flex w-12 h-12 rounded-xl bg-blue-600 text-white items-center justify-center shadow-md flex-shrink-0 z-10">
                <FaShieldAlt className="text-xl" />
              </div>

              {/* CARD */}
              <div className="bg-white w-full rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">

                {/* MOBILE ICON — INSIDE CARD */}
                <motion.div
                  className="flex md:hidden mb-3"
                  initial={{ opacity: 0, scale: 0.8, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow">
                    <FaShieldAlt className="text-lg" />
                  </div>
                </motion.div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Asset-Based Income Model
                </h4>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Amrutdhhann’s income structure is supported by a real,
                  revenue-generating dairy ecosystem. This asset-based foundation
                  ensures predictable monthly earnings and long-term financial
                  stability.
                </p>
              </div>
            </div>


            {/* POINT 2 */}
            <div className="relative flex items-center gap-6">

              {/* DESKTOP ICON */}
              <div className="hidden md:flex w-12 h-12 rounded-xl bg-green-600 text-white items-center justify-center shadow-md flex-shrink-0 z-10">
                <MdCurrencyRupee className="text-xl" />
              </div>

              <div className="bg-white w-full rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">

                {/* MOBILE ICON */}
                <motion.div
                  className="flex md:hidden mb-3"
                  initial={{ opacity: 0, scale: 0.8, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-green-600 text-white flex items-center justify-center shadow">
                    <MdCurrencyRupee className="text-lg" />
                  </div>
                </motion.div>


                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Consistent & Uninterrupted Earnings
                </h4>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Investors and agents benefit from uninterrupted monthly income,
                  driven by continuous dairy operations designed for reliability,
                  transparency, and long-term confidence.
                </p>
              </div>
            </div>
            {/* POINT 3 */}
            <div className="relative flex items-center gap-6">

              {/* DESKTOP ICON */}
              <div className="hidden md:flex w-12 h-12 rounded-xl bg-indigo-600 text-white items-center justify-center shadow-md flex-shrink-0 z-10">
                <FaHandshake className="text-xl" />
              </div>

              <div className="bg-white w-full rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">

                <motion.div
                  className="flex md:hidden mb-3"
                  initial={{ opacity: 0, scale: 0.8, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow">
                    <FaHandshake className="text-lg" />
                  </div>
                </motion.div>


                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Shared Growth for Investors & Agents
                </h4>

                <p className="text-gray-700 text-sm leading-relaxed">
                  The ecosystem rewards both investors and agents. Investors receive
                  stable monthly returns, while agents earn immediate income and
                  recurring commissions — creating shared, sustainable growth.
                </p>
              </div>
            </div>

          </div>



          {/* RIGHT: INVESTMENT EXAMPLE */}
          <div className="bg-white border border-blue-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Example Investment Structure
            </h3>

            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span>Investment Amount</span>
                <span className="font-semibold">₹5,00,000</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Monthly Income</span>
                <span className="font-semibold">₹10,000</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Income Duration</span>
                <span className="font-semibold">15 Years</span>
              </div>

              <div className="flex justify-between">
                <span>Capital Refund After Term</span>
                <span className="font-semibold">₹5,00,000</span>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-600 leading-relaxed text-center">
              After 15 years, the entire original investment amount is refunded,
              while monthly income continues throughout the term.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
