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
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Dairy Farms & Operations
          </h2>

          <p className="mt-6 text-sm md:text-lg text-gray-700">
            Amruthdhan is envisioned to become Asia’s largest integrated dairy
            enterprise, built on scale, quality, and long-term sustainability.
            Our farms are developed with modern infrastructure and ethical
            farming practices.
          </p>

          <p className="mt-4 text-sm md:text-lg text-gray-700">
            We focus on producing organic and healthy milk and milk by-products
            that meet international quality standards, serving both the Indian
            market and global export destinations.
          </p>
        </div>

        {/* MAIN OPERATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          {/* Ethical Farming */}
          <OperationCard
            icon={<FaHeart />}
            title="Ethical Farming & Animal Welfare"
            color="green"
          >
            <p className="text-sm md:text-base">
              Animal welfare is a core value at Amruthdhan. We strongly believe
              that healthy animals produce healthy milk.
            </p>
            <p className="mt-3 text-sm md:text-base">
              Our dairy farms follow cruelty-free practices, ensuring proper
              nutrition, hygiene, and stress-free living conditions that directly
              reflect in the purity and quality of our milk.
            </p>
          </OperationCard>

          {/* Sustainability */}
          <OperationCard
            icon={<FaSolarPanel />}
            title="Sustainable & Global-Ready Operations"
            color="blue"
          >
            <p className="text-sm md:text-base">
              Our dairy ecosystem is designed to be environmentally responsible,
              operating on renewable energy sources such as solar power and
              gobar gas.
            </p>
            <p className="mt-3 text-sm md:text-base">
              To support long-term productivity and strong cattle genetics,
              Amruthdhan plans to maintain a high-quality breeding program while
              expanding into international dairy export markets.
            </p>
          </OperationCard>
        </div>

        {/* DIFFERENT SECTION */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
            What Makes Amruthdhan Different
          </h3>
        </div>

        {/* DIFFERENTIATOR CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          <DiffCard
            icon={<FaCheckCircle />}
            text="Pure, organic milk produced through ethical and transparent dairy practices"
            color="green"
          />

          <DiffCard
            icon={<FaLeaf />}
            text="No harmful chemicals, preservatives, or adulteration at any stage"
            color="emerald"
          />

          <DiffCard
            icon={<FaCheckCircle />}
            text="Strict quality control from farm operations to final dairy output"
            color="blue"
          />

          <DiffCard
            icon={<FaCheckCircle />}
            text="Sustainable farm ecosystem focused on long-term environmental responsibility"
            color="indigo"
          />

          <DiffCard
            icon={<FaCheckCircle />}
            text="Healthy animals, ethical care, and stress-free farming environments"
            color="orange"
          />

          <DiffCard
            icon={<FaGlobe />}
            text="International-quality dairy products supplied to domestic and global markets"
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

      <div className="space-y-2 text-gray-700">
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
      <p className="text-sm md:text-lg text-gray-700">
        {text}
      </p>
    </div>
  );
}
