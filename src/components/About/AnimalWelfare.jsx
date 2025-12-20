import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaSun } from "react-icons/fa";

const AnimalWelfare = () => {
  return (
    <section className=" from-emerald-50 to-blue-50  px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-14"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">
          Animal Welfare & Sustainability
        </h2>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed text-lg md:text-xl max-w-4xl mx-auto text-center mb-14">
          Animal welfare is a core value at{" "}
          <span className="font-semibold text-emerald-600">Amrutdhhann</span>.
          We follow cruelty-free practices, ensuring hygienic living conditions,
          nutritious feed, and compassionate care. Healthy and happy animals
          produce healthier milk.
        </p>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-emerald-50">
            <FaHeart className="text-4xl text-rose-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Cruelty-Free Care</h3>
            <p className="text-gray-600">
              Animals are treated with kindness, respect, and continuous care.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-blue-50">
            <FaLeaf className="text-4xl text-green-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Eco-Friendly Farms</h3>
            <p className="text-gray-600">
              Sustainable farming methods that protect nature and resources.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-yellow-50">
            <FaSun className="text-4xl text-yellow-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Renewable Energy</h3>
            <p className="text-gray-600">
              Farms powered by solar energy and gobar gas ecosystems.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AnimalWelfare;
