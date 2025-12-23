import { motion } from "framer-motion";
import {
  FaTint,
  FaHeart,
  FaLeaf,
  FaGlobe,
  FaCoins,
  FaCheckCircle,
} from "react-icons/fa";

export default function   PurposeAndPromise() {
  return (
    <section className="max-w-7xl mx-auto px-6  space-y-20">

      {/* ================= BRAND PROMISE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
          AmruthDhan
        </h2>

        <p className="text-xl font-semibold text-orange-500 mb-4">
          The Gold Standard of Pure Buffalo Milk
        </p>

        <p className="text-gray-700 text-lg ">
          In a world where adulteration has become common, AmruthDhan was created
          to restore purity. We deliver 100% genuine buffalo milk free from
          chemicals, dilution, preservatives, or shortcuts exactly as nature
          intended.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {[
            "100% Pure Buffalo Milk",
            "No additives or preservatives",
            "Stringent quality checks",
            "Farm-to-home freshness",
            "Rich nutrition & natural taste",
            "Transparent sourcing",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-gray-800">
              <FaCheckCircle className="text-blue-600 mt-1" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= ECOSYSTEM VISION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-4 items-center"
      >
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            A Scalable, Sustainable Dairy Ecosystem
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            AmruthDhan is envisioned to become Asia’s largest integrated dairy
            enterprise, built on quality, scale, and long-term sustainability.
            Our operations extend beyond India, supplying and exporting milk and
            dairy products to global markets.
          </p>

          <ul className="space-y-4 text-gray-800 text-lg">
            <li className="flex gap-3">
              <FaGlobe className="text-blue-600 mt-1" />
              Global export-ready dairy meeting international standards
            </li>
            <li className="flex gap-3">
              <FaLeaf className="text-green-600 mt-1" />
              Solar-powered farms and gobar gas ecosystems
            </li>
            <li className="flex gap-3">
              <FaHeart className="text-pink-600 mt-1" />
              Cruelty-free animal care with stress-free living
            </li>
            <li className="flex gap-3">
              <FaTint className="text-indigo-600 mt-1" />
              High-quality cattle breeding supported by a sperm bank
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-10 shadow-lg">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose AmruthDhan?
          </h4>

          <p className="text-gray-700 leading-relaxed  text-sm md:text-md text-justify">
            We combine ethical dairy production with dependable earning
            opportunities. Our model is built on transparency, sustainability,
            and long-term value benefiting families, investors, and agents
            alike.
          </p>
        </div>
      </motion.div>

      {/* ================= MISSION PILLARS ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-14">
          Our Mission Pillars
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Purity First",
              text: "Deliver organic, unadulterated milk with uncompromising quality.",
              icon: FaTint,
              color: "bg-blue-600",
            },
            {
              title: "Ethical Animal Care",
              text: "Healthy animals, treated with compassion and respect.",
              icon: FaHeart,
              color: "bg-pink-600",
            },
            {
              title: "Sustainable Operations",
              text: "Eco-friendly farms powered by renewable energy.",
              icon: FaLeaf,
              color: "bg-green-600",
            },
            {
              title: "Global Quality",
              text: "Dairy products that meet international standards.",
              icon: FaGlobe,
              color: "bg-indigo-600",
            },
            {
              title: "Stable Income Model",
              text: "Predictable monthly income for investors and agents.",
              icon: FaCoins,
              color: "bg-yellow-600",
            },
            {
              title: "Long-Term Value",
              text: "A trusted ecosystem built for future generations.",
              icon: FaCheckCircle,
              color: "bg-emerald-600",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-2xl transition"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl mb-4 ${item.color}`}
                >
                  <Icon />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
