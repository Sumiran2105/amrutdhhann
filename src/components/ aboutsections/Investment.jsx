import { motion } from "framer-motion";
import {
  FaRupeeSign,
  FaCalendarAlt,
  FaSyncAlt,
  FaShieldAlt,
  FaUserTie,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Investment = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-14 mt-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ================= INVESTOR SECTION ================= */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6"
        >
          A Clear & Reliable Investment Model
        </motion.h2>

        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          Amrutdhhann offers a transparent, asset-based income model designed
          for investors seeking predictable monthly returns with complete
          capital security backed by a real, growing dairy ecosystem.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden mb-20"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70"></div>

          <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FaRupeeSign />
              </div>
              <p className="text-sm text-gray-500 mb-1">Investment Amount</p>
              <p className="text-2xl font-bold text-blue-900">₹5,00,000</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <FaSyncAlt />
              </div>
              <p className="text-sm text-gray-500 mb-1">Monthly Income</p>
              <p className="text-2xl font-bold text-emerald-700">₹10,000</p>
            </div>

            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <FaCalendarAlt />
              </div>
              <p className="text-sm text-gray-500 mb-1">Income Period</p>
              <p className="text-2xl font-bold text-orange-600">15 Years</p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-600 text-white flex items-center justify-center">
                <FaShieldAlt />
              </div>
              <p className="text-sm text-gray-500 mb-1">Capital Safety</p>
              <p className="text-2xl font-bold text-purple-700">100% Refund</p>
            </div>
          </div>

          <div className="relative mt-14 bg-gradient-to-r from-blue-700 to-emerald-600 text-white text-center p-6 rounded-2xl font-semibold text-lg shadow-lg">
            Invest ₹5 Lakhs • Earn ₹10,000 Every Month • Get Your Full Capital Back After 15 Years
          </div>

          <p className="relative mt-6 text-center text-sm text-gray-600 max-w-3xl mx-auto">
            This income model is supported by real dairy assets, ethical operations,
            and long-term production contracts ensuring transparency,
            predictability, and investor confidence.
          </p>

          <div className="relative mt-10 flex justify-center">
            <Link to="/contact" className="block">
              <button className="px-10 py-4 rounded-full bg-blue-700 text-white font-semibold text-lg hover:bg-blue-800 transition shadow-lg">
                Apply / Invest Now
              </button>
            </Link>
          </div>
        </motion.div>



        {/* ================= AGENT SECTION ================= */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-emerald-800 text-center mb-4"
        >
          Agent Opportunity & Earnings
        </motion.h2>

        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10">
          Earn instant commission and build a predictable monthly income by introducing
          investors to Amrutdhhann’s asset-backed dairy ecosystem.
        </p>

        {/* TOP SUMMARY STRIP */}
        <div className="mb-12 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center p-6 rounded-2xl font-semibold text-lg shadow-lg">
          ₹25,000 Instant Commission • ₹500 Monthly Per Investor • ₹10,000 Monthly with 20 Investors
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {/* MAIN AGENT BENEFITS */}
          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="h-full p-8 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl">
                <FaUserTie />
              </div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2">
                ₹25,000 Instant Commission
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Receive a one-time commission of ₹25,000 for every investor you
                successfully onboard.
              </p>
            </div>

            <div className="h-full p-8 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                ₹500 Monthly Per Investor
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                For every active investor earning ₹10,000 monthly, you earn ₹500
                every month — automatically.
              </p>
            </div>

            <div className="h-full p-8 rounded-2xl bg-orange-50 border border-orange-100 flex flex-col">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-2">
                Scalable Income Model
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your monthly income grows steadily as your investor network expands —
                with no upper limit.
              </p>
            </div>

          </div>

          {/* SPECIAL INCENTIVE */}
          <div className="mt-14 p-10 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 text-center">
            <h4 className="text-2xl font-bold text-indigo-900 mb-4">
              High-Performance Agent Incentive
            </h4>

            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Agents who successfully onboard <strong>20 active investors</strong> earn a
              guaranteed <strong>₹10,000 monthly income</strong>
              <strong> without investing any capital</strong>.
            </p>

            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              This is calculated as ₹500 per investor × 20 investors —
              matching an investor’s monthly earnings.
            </p>

            <div className="mt-6 inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow">
              20 Investors • ₹10,000 Monthly • Zero Capital Required
            </div>
          </div>

          {/* FOOTER NOTE */}
          <p className="mt-10 text-center text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            This agent model is backed by a real, asset-based dairy business designed
            for long-term stability, transparency, and trust.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Link to="/contact">
              <button className="px-12 py-4 rounded-full bg-emerald-600 text-white font-semibold text-lg hover:bg-emerald-700 transition shadow-lg">
                Become an Agent
              </button>
            </Link>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Investment;
