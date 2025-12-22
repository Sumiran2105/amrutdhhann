import { motion } from "framer-motion";

const Closing = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-6">
      
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-extrabold leading-snug mb-5">
          <span className="text-white">Amrutdhhann</span>{" "}
     
          <br className="hidden md:block" />
          <span className="text-yellow-300">
            The Gold Standard of Pure Buffalo Milk
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
          From our farms to your home, we deliver purity, trust, and nutrition
          exactly as nature intended. Ethical farming, cruelty-free care, and 
          sustainable practices define every drop we produce.
        </p>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>

        {/* Closing Line */}
        <p className="text-base md:text-lg font-semibold tracking-wide text-yellow-200">
          Pure Milk • Honest Practices • Sustainable Future
        </p>
      </motion.div>
    </section>
  );
};

export default Closing;
