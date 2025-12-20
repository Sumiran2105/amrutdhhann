import { useState } from "react";
import { motion } from "framer-motion";

const missionData = [
  {
    title: "Pure Buffalo Milk",
    text: "Produce 100% pure, chemical-free buffalo milk",
    sub: "Preserving natural taste, nutrition, and freshness.",
    icon: "🥛",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Animal Welfare",
    text: "Follow cruelty-free animal welfare practices",
    sub: "Compassionate care for healthy livestock.",
    icon: "❤️",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    title: "Investor Stability",
    text: "Ensure stable income for investors and agents",
    sub: "Asset-backed dairy model with long-term returns.",
    icon: "💰",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Sustainable Farming",
    text: "Operate eco-friendly dairy farms",
    sub: "Solar energy, gobar gas, and green practices.",
    icon: "🌱",
    color: "from-green-400 to-green-600",
  },
  {
    title: "Global Trust",
    text: "Build a globally trusted dairy brand",
    sub: "Meeting international quality standards.",
    icon: "🌍",
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Healthy Nutrition",
    text: "Promote organic nutrition for families worldwide",
    sub: "Supporting wellness through natural dairy.",
    icon: "💪",
    color: "from-pink-400 to-pink-600",
  },
];

const visionText = `
To become Asia’s most trusted dairy enterprise by restoring purity,
protecting animal welfare, empowering investors, and delivering
healthy nutrition to families across the globe.
`;

const Mission = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative">

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 mb-10"
      >
        Our Purpose
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-14">
        {["mission", "vision"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {tab === "mission" ? "Our Mission" : "Our Vision"}
          </button>
        ))}
      </div>

      {/* Vision Content */}
      {activeTab === "vision" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-emerald-50 p-10 rounded-2xl shadow-lg"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {visionText}
          </p>
        </motion.div>
      )}

      {/* Mission Cards */}
      {activeTab === "mission" && (
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {missionData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative group bg-white rounded-2xl p-5 shadow-lg border border-blue-100 hover:shadow-2xl transition-all overflow-hidden text-center"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br ${item.color}`}
              ></div>

              {/* Icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={`relative z-10 w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full text-3xl text-white bg-gradient-to-br ${item.color}`}
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <h3 className="relative z-10 text-lg font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="relative z-10 text-gray-700 text-sm font-medium">
                {item.text}
              </p>
              <p className="relative z-10 text-xs text-gray-500 mt-1">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition">
          Join the Amrutdhhann Journey
          <span>→</span>
        </button>
      </motion.div>
    </section>
  );
};

export default Mission;
