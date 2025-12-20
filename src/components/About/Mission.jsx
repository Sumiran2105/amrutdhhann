import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTint,
  FaHeart,
  FaCoins,
  FaLeaf,
  FaGlobe,
  FaHeartbeat,
} from "react-icons/fa";

const missionData = [
  {
    title: "Pure Buffalo Milk",
    text: "Produce 100% pure, chemical-free buffalo milk",
    sub: "Preserving natural taste, nutrition, and freshness.",
    icon: FaTint,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Animal Welfare",
    text: "Follow cruelty-free animal welfare practices",
    sub: "Compassionate care for healthy livestock.",
    icon: FaHeart,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    title: "Investor Stability",
    text: "Ensure stable income for investors and agents",
    sub: "Asset-backed dairy model with long-term returns.",
    icon: FaCoins,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Sustainable Farming",
    text: "Operate eco-friendly dairy farms",
    sub: "Solar energy, gobar gas, and green practices.",
    icon: FaLeaf,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Global Trust",
    text: "Build a globally trusted dairy brand",
    sub: "Meeting international quality standards.",
    icon: FaGlobe,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Healthy Nutrition",
    text: "Promote organic nutrition for families worldwide",
    sub: "Supporting wellness through natural dairy.",
    icon: FaHeartbeat,
    color: "from-pink-400 to-pink-600",
  },
];

export default function Mission() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6"
      >
        Our Purpose
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-16">
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

      {/* ================= VISION ================= */}
      {activeTab === "vision" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/images/6985.jpg"
              alt="Our Vision"
              className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
              Building a Global Dairy Legacy
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Amrutdhhann is envisioned to become Asia’s most trusted and
              respected dairy enterprise. Our vision is rooted in purity,
              sustainability, and long-term value creation for families,
              investors, and partners worldwide.
            </p>

            <ul className="space-y-4 text-gray-800 text-lg">
              {[
                "Deliver organic, healthy milk meeting global standards",
                "Expand as a leading exporter of dairy products worldwide",
                "Protect animal welfare through cruelty-free practices",
                "Create stable, long-term income opportunities",
                "Build a sustainable ecosystem using green energy",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* ================= MISSION ================= */}
      {activeTab === "mission" && (
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {missionData.map((item, index) => {
            const Icon = item.icon; // ✅ CRITICAL FIX

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-2xl transition-all text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full text-3xl text-white bg-gradient-to-br ${item.color}`}
                >
                  <Icon />
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm font-medium">
                  {item.text}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {item.sub}
                </p>
              </motion.div>
            );
          })}
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
          Join the Amrutdhhann Journey →
        </button>
      </motion.div>
    </section>
  );
}
