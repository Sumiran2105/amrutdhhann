import { FaShieldAlt, FaClipboardCheck, FaLeaf, FaIndustry } from "react-icons/fa";

export default function TransparencyTrust() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Transparency & Trust
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed md:text-lg text-sm">
            Amrutdhhann is built on transparency, ethical operations, and
            long-term responsibility. Every aspect of our dairy ecosystem
            and earning model is designed to be clear, accountable, and
            supported by real assets.
          </p>
        </div>

        {/* TRUST PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <TrustCard
            icon={<FaIndustry />}
            title="Real, Asset-Based Operations"
            desc="Our income model is supported by a functioning dairy ecosystem that includes farms, livestock, infrastructure, and production facilities — ensuring tangible value and operational clarity."
            color="blue"
          />

          <TrustCard
            icon={<FaClipboardCheck />}
            title="Clear & Structured Earning Model"
            desc="Income and returns are defined through a transparent structure designed for consistency and predictability, allowing investors and agents to understand how value is created."
            color="indigo"
          />

          <TrustCard
            icon={<FaLeaf />}
            title="Ethical & Sustainable Practices"
            desc="We follow cruelty-free animal care, environmentally responsible farming, and renewable energy usage, reinforcing our commitment to ethical and sustainable operations."
            color="green"
          />

          <TrustCard
            icon={<FaShieldAlt />}
            title="Long-Term Vision & Accountability"
            desc="Amrutdhhann is built with a long-term outlook, focusing on stable growth, responsible operations, and trust-based relationships with investors, agents, and consumers."
            color="emerald"
          />

        </div>
      </div>
    </section>
  );
}

/* TRUST CARD */
function TrustCard({ icon, title, desc, color }) {
  const themes = {
    blue: {
      card: "bg-blue-50 border-blue-200",
      icon: "bg-blue-600 text-white",
    },
    indigo: {
      card: "bg-indigo-50 border-indigo-200",
      icon: "bg-indigo-600 text-white",
    },
    green: {
      card: "bg-green-50 border-green-200",
      icon: "bg-green-600 text-white",
    },
    emerald: {
      card: "bg-emerald-50 border-emerald-200",
      icon: "bg-emerald-600 text-white",
    },
  };

  const theme = themes[color];

  return (
    <div
      className={`
        rounded-2xl border p-8
        ${theme.card}
       
        shadow-sm hover:shadow-lg transition
      `}
    >
      {/* ICON */}
      <div
        className={`
             mx-auto
          w-14 h-14 mb-5 rounded-xl
          flex items-center justify-center
          ${theme.icon}
          shadow-md
        `}
      >
        <span className="text-2xl ">{icon}</span>
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-700 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}
