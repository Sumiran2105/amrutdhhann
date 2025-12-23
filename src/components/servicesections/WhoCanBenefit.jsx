import { FaUserTie, FaHandshake, FaUsers } from "react-icons/fa";

export default function WhoCanBenefit() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Who Can Benefit
          </h2>

          <p className="mt-6 text-gray-700 md:text-lg text-sm leading-relaxed">
            Amrutdhhann’s ecosystem is designed to create value for everyone
            involved from those investing in growth, to partners expanding
            the network, to families consuming pure and healthy dairy products.
          </p>
        </div>

        {/* BENEFICIARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* INVESTORS */}
          <BenefitCard
            icon={<FaUserTie />}
            title="Investors"
            desc="Individuals seeking predictable monthly income backed by real, income-generating dairy assets and a long-term growth vision."
            color="blue"
          />

          {/* AGENTS */}
          <BenefitCard
            icon={<FaHandshake />}
            title="Agents & Partners"
            desc="Entrepreneurs and agents looking for immediate income, recurring commissions, and continuous earning opportunities."
            color="green"
          />

          {/* CONSUMERS */}
          <BenefitCard
            icon={<FaUsers />}
            title="Consumers & Families"
            desc="Households that value pure, organic milk and dairy products produced through ethical and sustainable farming practices."
            color="orange"
          />

        </div>
      </div>
    </section>
  );
}

/* BENEFIT CARD */
function BenefitCard({ icon, title, desc, color }) {
  const themes = {
    blue: {
      card: "bg-blue-50 border-blue-200",
      icon: "bg-blue-600 text-white",
    },
    green: {
      card: "bg-green-50 border-green-200",
      icon: "bg-green-600 text-white",
    },
    orange: {
      card: "bg-orange-50 border-orange-200",
      icon: "bg-orange-600 text-white",
    },
  };

  const theme = themes[color];

  return (
    <div
      className={`
        rounded-2xl border p-8 text-center
        ${theme.card}
        shadow-sm hover:shadow-xl transition
      `}
    >
      {/* ICON */}
      <div
        className={`
          w-14 h-14 mx-auto mb-5 rounded-xl
          flex items-center justify-center
          ${theme.icon}
          shadow-md
        `}
      >
        <span className="text-2xl">{icon}</span>
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold text-blue-900 mb-3">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-700 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}
