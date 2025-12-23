import { motion } from "framer-motion";
import {
  FaGlobe,
  FaLeaf,
  FaSolarPanel,
  FaSeedling,
  FaHandshake,
} from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

/* Animation */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhatIsAmrutdhhann() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            What is Amrutdhhann
          </h2>

          <p className="mt-8 lg:text-lg text-gray-700 text-sm leading-relaxed text-justify">
            Amrutdhhann is a unique platform that combines pure, organic dairy production with a dependable earning opportunity. By choosing Amrutdhhann, you become part of a system that delivers healthy milk to families while also creating financial growth for investors and agents.

            Our model is built on transparency, sustainability, and long-term value, ensuring both nutritional benefits for consumers and steady income for partners. With Amrutdhhann, you are not just investing in a dairy business, you are supporting ethical animal care, eco-friendly farming, global-quality products, and a secure income-generating platform designed for the future
          </p>
        </motion.div>

        {/* 3 x 2 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5">

          <InfoCard
            icon={<FaGlobe />}
            title="Global Dairy Vision"
            accent="blue"
          >
            Producing organic and healthy milk and milk by-products for India
            and global markets, meeting international quality standards.
          </InfoCard>

          <InfoCard
            icon={<FaLeaf />}
            title="Ethical Animal Care"
            accent="green"
          >
            Cruelty-free practices ensure animals are treated with kindness,
            care, and respect, resulting in healthier milk.
          </InfoCard>

          <InfoCard
            icon={<FaSolarPanel />}
            title="Sustainable Operations"
            accent="emerald"
          >
            Farms operate as self-sustaining ecosystems powered by solar energy
            and gobar gas.
          </InfoCard>

          <InfoCard
            icon={<FaSeedling />}
            title="Strong Livestock Genetics"
            accent="teal"
          >
            A high-quality sperm bank supports strong, healthy cattle breeding
            and long-term productivity.
          </InfoCard>

          <InfoCard
            icon={<MdCurrencyRupee />}
            title="Predictable Income Model"
            accent="indigo"
          >
            ₹5,00,000 investment earns ₹10,000 monthly for 15 years, with full
            capital refunded at maturity.
          </InfoCard>

          <InfoCard
            icon={<FaHandshake />}
            title="Opportunities for Agents"
            accent="orange"
          >
            Agents earn immediate income with additional commissions for every
            investor they introduce.
          </InfoCard>

        </div>
      </div>
    </section>
  );
}

/* GRID CARD */
function InfoCard({ icon, title, children, accent }) {
  const accents = {
    blue: "bg-blue-50 border-blue-200 text-blue-600",
    green: "bg-green-50 border-green-200 text-green-600",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-600",
    teal: "bg-teal-50 border-teal-200 text-teal-600",
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-600",
    orange: "bg-orange-50 border-orange-200 text-orange-600",
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`
        rounded-2xl border md:p-8 p-6 
        ${accents[accent]}
        bg-opacity-80
        shadow-sm hover:shadow-xl transition
      `}
    >
      {/* ICON */}
      <div className="w-14 h-14 mb-5 rounded-xl bg-white flex items-center justify-center shadow-md">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold text-blue-900 mb-3">
        {title}
      </h3>

      {/* CONTENT */}
      <p className="text-gray-700 text-sm md:text-md ">
        {children}
      </p>
    </motion.div>
  );
}
