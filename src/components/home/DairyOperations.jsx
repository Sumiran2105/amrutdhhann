import {
  FaHeart,
  FaSolarPanel,
  FaCheckCircle,
  FaGlobe,
  FaLeaf
} from "react-icons/fa";

export default function DairyOperations() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-19">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Dairy Farms & Operations
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Amrutdhhann is envisioned to become Asia’s largest integrated dairy
            enterprise, built with modern infrastructure and ethical farming
            practices. Our focus is on producing organic and healthy milk and
            milk by-products that meet international quality standards.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Our products are not limited to India. Amrutdhhann aims to export
            milk and dairy products across global markets, establishing itself
            as a trusted international dairy brand.
          </p>
        </div>

        {/* MAIN OPERATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">

          {/* Ethical Farming */}
          <OperationCard
            icon={<FaHeart />}
            title="Ethical Farming & Animal Welfare"
            color="green"
          >
            <p>
              Animal welfare is a core value at Amrutdhhann. We strongly believe
              that healthy and happy animals produce healthy milk.
            </p>
            <p className="mt-3">
              Our farms follow cruelty-free practices with proper nutrition,
              hygiene, and stress-free living conditions, directly reflecting
              in the purity and quality of our milk.
            </p>
          </OperationCard>

          {/* Sustainability */}
          <OperationCard
            icon={<FaSolarPanel />}
            title="Sustainable & Global-Ready Operations"
            color="blue"
          >
            <p>
              Our dairy ecosystem is designed to be environmentally
              responsible, powered by solar energy and gobar gas systems.
            </p>
            <p className="mt-3">
              To ensure long-term productivity and superior cattle genetics,
              Amrutdhhann plans to establish a high-quality sperm bank and
              expand into global export markets.
            </p>
          </OperationCard>
        </div>

        {/* DIFFERENT SECTION */}
        <div className="text-center mb-14">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
            What Makes Amrutdhhann Different
          </h3>
        </div>

        {/* DIFFERENTIATOR CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <DiffCard
            icon={<FaCheckCircle />}
            text="100% pure buffalo milk sourced from trusted dairy farms"
            color="green"
          />

          <DiffCard
            icon={<FaLeaf />}
            text="No chemicals, no preservatives, no adulteration, no shortcuts"
            color="emerald"
          />

          <DiffCard
            icon={<FaCheckCircle />}
            text="Stringent quality checks at every stage of production"
            color="blue"
          />

          <DiffCard
            icon={<FaCheckCircle />}
            text="Supply chain designed to ensure freshness from farm to home"
            color="indigo"
          />

          <DiffCard
            icon={<FaCheckCircle />}
            text="Delivered in its most natural form, rich in nutrition and taste"
            color="orange"
          />

          <DiffCard
            icon={<FaGlobe />}
            text="Global-quality dairy products supplied and exported worldwide"
            color="purple"
          />
        </div>
      </div>
    </section>
  );
}

/* OPERATION CARD */
function OperationCard({ icon, title, color, children }) {
  const colors = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${colors[color]}`}>
        <span className="text-xl">{icon}</span>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {title}
      </h3>

      <div className="text-sm text-gray-700 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

/* DIFFERENTIATOR CARD */
function DiffCard({ icon, text, color }) {
  const colors = {
    green: "bg-green-50 text-green-600",
    emerald: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
    indigo: "bg-indigo-50 text-indigo-600",
    orange: "bg-orange-50 text-orange-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition flex items-start gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors[color]}`}>
        <span className="text-lg">{icon}</span>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
