import { FaLeaf, FaSolarPanel, FaShieldAlt, FaChartLine } from "react-icons/fa";

export default function WhyAmrutdhhann() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* CENTERED HEADING & CONTENT */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Amrutdhhann ?
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Amrutdhhann is a unique platform that combines pure, organic dairy
            production with a dependable earning opportunity. By choosing
            Amrutdhhann, you become part of a system that delivers healthy milk
            to families while also creating financial growth for investors and
            agents.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Our model is built on transparency, sustainability, and long-term
            value, ensuring both nutritional benefits for consumers and steady
            income for partners. With Amrutdhhann, you are not just investing in
            a dairy business, you are supporting ethical animal care,
            eco-friendly farming, global-quality products, and a secure
            income-generating platform designed for the future.
          </p>
        </div>

        {/* CORE PILLARS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <PillarCard
            icon={<FaLeaf />}
            title="Ethical Animal Care"
            desc="Cruelty-free practices ensure healthier animals, higher milk quality, and responsible farming standards."
            color="green"
          />

          <PillarCard
            icon={<FaSolarPanel />}
            title="Sustainable Infrastructure"
            desc="Solar-powered farms and gobar gas systems reduce environmental impact and improve operational efficiency."
            color="blue"
          />

          <PillarCard
            icon={<FaShieldAlt />}
            title="Asset-Based Model"
            desc="Every investment is supported by real, revenue-generating dairy assets, creating transparency and trust."
            color="indigo"
          />

          <PillarCard
            icon={<FaChartLine />}
            title="Long-Term Growth Vision"
            desc="Designed for consistent income, scalability, and long-term financial confidence."
            color="orange"
          />

        </div>
      </div>
    </section>
  );
}

/* ENHANCED PILLAR CARD */
function PillarCard({ icon, title, desc, color }) {
  const accents = {
    green: "from-green-400 to-green-600",
    blue: "from-blue-400 to-blue-600",
    indigo: "from-indigo-400 to-indigo-600",
    orange: "from-orange-400 to-orange-600",
  };

  return (
    <div
      className="
        relative group rounded-2xl bg-white border border-gray-100
        p-7 text-center transition-all duration-300
        hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)]
      "
    >
      {/* GRADIENT ACCENT */}
      <div
        className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${accents[color]}`}
      />

      {/* ICON */}
      <div
        className={`
          mx-auto w-14 h-14 rounded-xl flex items-center justify-center mb-5
          bg-gradient-to-br ${accents[color]} text-white
          shadow-md group-hover:scale-110 transition
        `}
      >
        <span className="text-xl">{icon}</span>
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-blue-900">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
