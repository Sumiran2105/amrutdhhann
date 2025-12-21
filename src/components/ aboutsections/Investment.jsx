import { motion } from "framer-motion";
import { FaRupeeSign, FaCalendarAlt, FaSyncAlt, FaShieldAlt } from "react-icons/fa";

const Investment = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6"
        >
          A Clear & Reliable Investment Model
        </motion.h2>

        {/* Subheading */}
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-20 leading-relaxed">
          Amrutdhhann offers a transparent, asset-backed income model designed
          for investors seeking predictable monthly returns with complete
          capital security — backed by a real, growing dairy ecosystem.
        </p>

        {/* Investment Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-14 overflow-hidden"
        >
          {/* Soft background glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70"></div>

          {/* GRID */}
          <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {/* Investment */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FaRupeeSign />
              </div>
              <p className="text-sm text-gray-500 mb-1">Investment Amount</p>
              <p className="text-2xl font-bold text-blue-900">₹5,00,000</p>
            </div>

            {/* Monthly Income */}
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <FaSyncAlt />
              </div>
              <p className="text-sm text-gray-500 mb-1">Monthly Income</p>
              <p className="text-2xl font-bold text-emerald-700">₹10,000</p>
            </div>

            {/* Duration */}
            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <FaCalendarAlt />
              </div>
              <p className="text-sm text-gray-500 mb-1">Income Period</p>
              <p className="text-2xl font-bold text-orange-600">15 Years</p>
            </div>

            {/* Capital Refund */}
            <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-600 text-white flex items-center justify-center">
                <FaShieldAlt />
              </div>
              <p className="text-sm text-gray-500 mb-1">Capital Safety</p>
              <p className="text-2xl font-bold text-purple-700">100% Refund</p>
            </div>

          </div>

          {/* Highlight Statement */}
          <div className="relative mt-14 bg-gradient-to-r from-blue-700 to-emerald-600 text-white text-center p-6 rounded-2xl font-semibold text-lg shadow-lg">
            Invest ₹5 Lakhs • Earn ₹10,000 Every Month • Get Your Full Capital Back After 15 Years
          </div>

          {/* Trust Note */}
          <p className="relative mt-6 text-center text-sm text-gray-600 max-w-3xl mx-auto">
            This income model is supported by real dairy assets, ethical operations,
            and long-term production contracts — ensuring transparency,
            predictability, and investor confidence.
          </p>

          {/* CTA */}
          <div className="relative mt-10 flex justify-center">
            <button className="px-10 py-4 rounded-full bg-blue-700 text-white font-semibold text-lg hover:bg-blue-800 transition shadow-lg hover:shadow-xl">
              Apply / Invest Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Investment;
