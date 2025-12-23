import { motion } from "framer-motion";

const AboutVision = () => {
  return (
    <section className="bg-white py-16 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Image wrapper (SAFE) */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">

                <img
                  src="/images/founder.jpg"
                  alt="Anand – Founder of Amruthdhhann"
                  className=" w-full lg:h-[800px] object-cover"/>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* FOUNDER BADGE */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white px-4 py-3 rounded-2xl shadow-xl border">
                  <div className="text-center leading-tight">
                    <div className="text-lg font-bold text-gray-800">
                      Anand
                    </div>
                    <div className="text-sm font-semibold text-blue-900">
                      Founder, Amruthdhhann
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative glows (CLIPPED SAFELY) */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl hidden lg:block" />
              <div className="absolute -z-10 -top-6 -left-6 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl hidden lg:block" />
            </motion.div>

            {/* RIGHT — CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900">
                A Vision Beyond Milk
              </h3>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Amruthdhan is envisioned to become Asia’s largest integrated dairy
                enterprise, built on scale, quality, and long-term sustainability.
                We focus on producing organic and healthy milk and milk by-products
                that meet international quality standards.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our products are supplied across India and exported to global
                markets, positioning Amruthdhhann as a trusted international dairy
                brand.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We strongly believe healthy animals produce healthy milk. Our farms
                follow cruelty-free practices with compassion, care, and respect.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { number: "100%", label: "Pure Milk" },
                  { number: "Global", label: "Exports" },
                  { number: "15 Years", label: "Income Model" },
                  { number: "Eco", label: "Sustainable Farms" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow border"
                  >
                    <div className="text-2xl font-bold text-blue-900">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-emerald-500 pl-6 py-4 italic text-gray-600 text-base md:text-lg bg-gradient-to-r from-emerald-50 to-transparent rounded-r-2xl">
                “Amruthdhan is not just about milk or investment — it is about
                building a trusted ecosystem where purity, sustainability, and
                financial growth move forward together.”
              </blockquote>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVision;
