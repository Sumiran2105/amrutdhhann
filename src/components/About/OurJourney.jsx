import { motion } from "framer-motion";
import {
  FaSeedling,
  FaIndustry,
  FaChartLine,
  FaGlobeAsia,
} from "react-icons/fa";

export default function OurJourney() {
  const journey = [
    {
      year: "Phase 1",
      title: "Foundation & Vision",
      desc: "Conceptualizing Amrutdhhann with a focus on purity, ethical dairy farming, and a sustainable income model.",
      icon: FaSeedling,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      year: "Phase 2",
      title: "Infrastructure Development",
      desc: "Establishing modern dairy farms, cruelty-free animal care systems, and eco-friendly infrastructure.",
      icon: FaIndustry,
      color: "from-blue-500 to-blue-700",
    },
    {
      year: "Phase 3",
      title: "Scaling Operations",
      desc: "Expanding milk production, strengthening the supply chain, and onboarding investors and agents.",
      icon: FaChartLine,
      color: "from-orange-500 to-orange-700",
    },
    {
      year: "Phase 4",
      title: "Global Expansion",
      desc: "Exporting dairy products globally while building Amrutdhhann as a trusted international dairy brand.",
      icon: FaGlobeAsia,
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6">
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
            Our Journey
          </h2>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            From a powerful idea to a scalable dairy ecosystem, Amrutdhhann’s
            journey is built on clarity, responsibility, and long-term vision.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-100 -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {journey.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md w-full ${
                      isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <span className="text-sm font-semibold text-blue-600">
                      {step.year}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Icon Node */}
                  <div
                    className={`absolute md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${step.color}`}
                  >
                    <Icon className="text-xl" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
