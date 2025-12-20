import { motion } from "framer-motion";
import {
  FaLeaf,
  FaHeart,
  FaGlobe,
  FaSolarPanel,
  FaCoins,
  FaHandshake,
} from "react-icons/fa";


export default function WhyAmrutdhhann() {
  const pillars = [
  {
    title: "Pure & Ethical Dairy",
    desc: "Organic, chemical-free milk produced through cruelty-free and responsible farming practices.",
    icon: FaLeaf,
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Animal Welfare First",
    desc: "Healthy, stress-free animals ensured through proper nutrition, hygiene, and compassionate care.",
    icon: FaHeart,
    color: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Sustainable Operations",
    desc: "Solar-powered farms and gobar gas systems creating an environmentally responsible ecosystem.",
    icon: FaSolarPanel,
    color: "from-green-500 to-green-700",
  },
  {
    title: "Global Dairy Vision",
    desc: "Built to meet international quality standards with exports planned across global markets.",
    icon: FaGlobe,
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Stable Income Model",
    desc: "Asset-backed earnings offering predictable monthly income and long-term financial security.",
    icon: FaCoins,
    color: "from-orange-500 to-orange-700",
  },
  {
    title: "Trusted Ecosystem",
    desc: "A transparent platform benefiting consumers, investors, and agents together.",
    icon: FaHandshake,
    color: "from-indigo-500 to-indigo-700",
  },
];


  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Amrutdhhann Exists
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Amrutdhhann was created to unite pure, organic dairy production with
            dependable earning opportunities. Our purpose goes beyond business —
            we are building trust, sustainability, and long-term value for
            families, investors, and agents.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition"
              >
                {/* Gradient Top Bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-gradient-to-r ${item.color}`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 mb-5 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${item.color}`}
                >
                  <Icon className="text-2xl" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Amrutdhhann is not just about milk or investment. It is about creating
            a future-ready ecosystem where people receive pure, healthy dairy
            products while building sustainable income and long-term financial
            growth.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
