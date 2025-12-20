import { motion } from "framer-motion";

const Investment = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6"
        >
          Investor Income Model
        </motion.h2>

        {/* Description */}
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Amrutdhhann offers a transparent, asset-backed investment model that
          delivers stable monthly income along with complete capital safety,
          built for long-term financial confidence.
        </p>

        {/* Investment Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-10"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div className="p-6 rounded-2xl bg-blue-50">
              <p className="text-sm text-gray-500 mb-1">Investment Amount</p>
              <p className="text-2xl font-bold text-blue-900">₹5,00,000</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50">
              <p className="text-sm text-gray-500 mb-1">Monthly Income</p>
              <p className="text-2xl font-bold text-emerald-700">₹10,000</p>
            </div>

            <div className="p-6 rounded-2xl bg-orange-50">
              <p className="text-sm text-gray-500 mb-1">Investment Period</p>
              <p className="text-2xl font-bold text-orange-600">15 Years</p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50">
              <p className="text-sm text-gray-500 mb-1">Capital Refund</p>
              <p className="text-2xl font-bold text-purple-700">100%</p>
            </div>

          </div>

          {/* Highlight Line */}
          <div className="mt-12 bg-blue-700 from-blue-600 to-emerald-600 text-white text-center p-6 rounded-2xl font-semibold text-lg shadow-lg">
            Invest ₹5 Lakhs • Earn ₹10,000 Every Month • Get Your Full Capital Back
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Investment;
