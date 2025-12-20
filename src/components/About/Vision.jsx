import { motion } from "framer-motion";

const AboutVision = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 mb-6"
      >
        About Amrutdhhann
      </motion.h2>

      {/* Subheading */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
        A vision built on purity, trust, and sustainable dairy excellence.
      </p>

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* 🔥 UPDATED CARD UI */}
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 
                          p-8 rounded-2xl shadow-md 
                          border-l-4 border-orange-500">

            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              A Purpose-Driven Global Dairy Brand
            </h3>

            <p className="text-gray-800 leading-relaxed mb-4">
              Amrutdhhann is envisioned as a next-generation dairy enterprise,
              dedicated to producing <strong>100% pure buffalo milk</strong> and
              premium dairy products that meet strict quality and safety standards.
            </p>

            <p className="text-gray-800 leading-relaxed mb-4">
              Our farms follow <strong>cruelty-free animal welfare practices</strong>
              and eco-friendly operations powered by renewable energy, ensuring
              healthier animals and better milk quality.
            </p>

            <p className="text-gray-800 leading-relaxed mb-4">
              Integrity, transparency, and trust guide every step—from farm
              management to final delivery—backed by a long-term global vision.
            </p>

            <p className="mt-4 font-semibold text-gray-900">
              — Founder, Amrutdhhann
            </p>
          </div>

          {/* Impact Strip (UNCHANGED) */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-xl font-bold text-blue-900">100%</p>
              <p className="text-sm text-gray-600">Pure Milk</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl">
              <p className="text-xl font-bold text-emerald-700">Cruelty-Free</p>
              <p className="text-sm text-gray-600">Animal Care</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl">
              <p className="text-xl font-bold text-orange-600">Sustainable</p>
              <p className="text-sm text-gray-600">Farming</p>
            </div>
          </div>

          {/* Gradient Highlight (UNCHANGED) */}
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6 rounded-2xl text-center text-white shadow-lg">
            <p className="text-lg md:text-xl font-semibold leading-relaxed">
              Pure milk. Ethical farming. Sustainable futures.  
              Trust delivered from our farms to your home.
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/images/founder.jpg"
            alt="Founder"
            className="w-[320px] md:w-[380px] rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutVision;
