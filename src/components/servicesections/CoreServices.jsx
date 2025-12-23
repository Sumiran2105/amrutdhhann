import {
  FaSeedling,
  FaTruck,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";

export default function CoreServices() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-15">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-14 ">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Core Services
          </h2>
         <p className="mt-6 text-gray-700 leading-relaxed md:text-lg text-sm">
  Our services are thoughtfully designed to build a complete and
  future-ready dairy ecosystem — seamlessly integrating ethical dairy
  production, transparent operations, and dependable income
  opportunities. Every service supports long-term sustainability,
  trust, and value creation for all stakeholders.
</p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <ServiceCard
            icon={<FaSeedling />}
            title="Ethical Dairy Farming"
            desc="Cruelty-free dairy farming focused on animal welfare, hygiene, and high-quality milk production."
            color="green"
          />

          <ServiceCard
            icon={<FaTruck />}
            title="Milk & Dairy Supply"
            desc="Fresh milk and dairy by-products delivered through a controlled and transparent supply chain."
            color="blue"
          />

          <ServiceCard
            icon={<FaGlobe />}
            title="Export-Ready Operations"
            desc="Dairy products prepared to meet international standards for global markets."
            color="indigo"
          />

          <ServiceCard
            icon={<FaChartLine />}
            title="Investment Opportunities"
            desc="A predictable, asset-based income model designed for long-term financial stability."
            color="orange"
          />

          <ServiceCard
            icon={<FaHandshake />}
            title="Agent Partnership Program"
            desc="Opportunities for agents to earn immediate income and recurring commissions."
            color="teal"
          />

          <ServiceCard
            icon={<FaShieldAlt />}
            title="Quality & Transparency"
            desc="Strict quality checks, ethical practices, and transparency at every operational stage."
            color="purple"
          />

        </div>
      </div>
    </section>
  );
}

/* SERVICE CARD */
function ServiceCard({ icon, title, desc, color }) {
  const colors = {
    green: {
      card: "bg-green-50 border-green-200",
      icon: "bg-green-600 text-white",
    },
    blue: {
      card: "bg-blue-50 border-blue-200",
      icon: "bg-blue-600 text-white",
    },
    indigo: {
      card: "bg-indigo-50 border-indigo-200",
      icon: "bg-indigo-600 text-white",
    },
    orange: {
      card: "bg-orange-50 border-orange-200",
      icon: "bg-orange-600 text-white",
    },
    teal: {
      card: "bg-teal-50 border-teal-200",
      icon: "bg-teal-600 text-white",
    },
    purple: {
      card: "bg-purple-50 border-purple-200",
      icon: "bg-purple-600 text-white",
    },
  };

  const theme = colors[color];

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

