import { motion } from "framer-motion";

const OurProducts = () => {
  const products = [
    {
      name: "Pure Buffalo Milk",
      desc: "Fresh, 100% pure buffalo milk with no chemicals, dilution, or preservatives.",
      image: "https://images.unsplash.com/photo-1585238342028-4bbc4cda2b2a",
      nutrition: ["High Protein", "Rich Calcium", "Natural Fat"],
    },
    {
      name: "Fresh Curd",
      desc: "Naturally thick and creamy curd prepared from pure buffalo milk.",
      image: "https://images.unsplash.com/photo-1625944526405-98f2c92d25b3",
      nutrition: ["Probiotics", "Gut Friendly", "Calcium Rich"],
    },
    {
      name: "Desi Ghee",
      desc: "Traditional desi ghee prepared using age-old methods for rich aroma and nutrition.",
      image: "https://images.unsplash.com/photo-1604908177522-4029c7b17d0d",
      nutrition: ["Healthy Fats", "Boosts Immunity", "Rich Aroma"],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-gradient-to-b from-white to-slate-50">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 mb-10"
      >
        Our Milk Products
      </motion.h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
        Pure, natural, and traditionally prepared dairy products — crafted for
        everyday family nutrition.
      </p>

      {/* Product Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {item.name}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-5">
                {item.desc}
              </p>

              {/* Nutrition */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {item.nutrition.map((n, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 text-sm rounded-full bg-emerald-50 text-emerald-700 font-medium"
                  >
                    {n}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold hover:opacity-90 transition">
                Enquire Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
