import { motion } from "framer-motion";

const AboutVision = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 mb-12"
      >
        About Amrutdhhann
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Amrutdhhann is a purpose-driven dairy enterprise built on the
              principles of purity, ethics, and sustainability. Our mission is
              to deliver 100% pure buffalo milk and premium dairy by-products
              while maintaining the highest standards of quality and trust.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Through cruelty-free animal welfare practices and environmentally
              responsible farming, we support farmers, nourish families, and
              contribute to a healthier ecosystem. Our dairy operations are
              designed for long-term stability and global quality compliance.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              At Amrutdhhann, integrity guides every decision we make. From farm
              management to product delivery, our focus remains on transparency,
              ethical responsibility, and building a legacy of trust for future
              generations.
            </p>
            <p className="mt-4 font-semibold text-gray-900 text-center">
              — Founder, Amrutdhhann
            </p>
          </div>
        </motion.div>

        {/* Right Highlight Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-50 p-8 rounded-2xl shadow text-center border-l-4 border-blue-600"
        >
          <p className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
            Pure milk. Ethical farming. Sustainable futures.  
            Delivering trust from our farms to your home.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutVision;
