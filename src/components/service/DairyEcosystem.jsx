import { FaLeaf, FaSolarPanel, FaGlobe, FaHeart } from "react-icons/fa";

export default function DairyEcosystem() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Dairy Farms & Products
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Amrutdhhann is envisioned to become Asia’s largest integrated dairy
            enterprise, built with a long-term vision of quality, scale, and
            sustainability. We focus on producing organic and healthy milk and
            milk by-products that meet high international standards and are
            supplied to markets across India and the world.
          </p>
        </div>

                  {/* DAIRY OPERATIONS – GRADIENT + KPI BADGES */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

  {/* CARD 1 */}
  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-200 overflow-hidden">
    {/* Gradient Top Border */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>

    <div className="flex items-start gap-5">
      <div className="w-14 h-14 rounded-xl bg-green-600 text-white flex items-center justify-center shadow-md flex-shrink-0">
        <FaHeart className="text-xl" />
      </div>

      <div>
        {/* KPI Badge */}
        <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
          Cruelty-Free Farming
        </span>

        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Ethical Animal Welfare
        </h4>

        <p className="text-gray-700 leading-relaxed">
          Animal welfare is a core value at Amrutdhhann. We follow
          cruelty-free practices and treat animals with kindness, care,
          and affection, believing that healthy and happy animals produce
          healthy milk.
        </p>
      </div>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-200 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

    <div className="flex items-start gap-5">
      <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md flex-shrink-0">
        <FaSolarPanel className="text-xl" />
      </div>

      <div>
        <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
          Renewable Energy
        </span>

        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Sustainable Farm Ecosystem
        </h4>

        <p className="text-gray-700 leading-relaxed">
          Our farms operate as environmentally responsible ecosystems,
          powered by solar energy and gobar gas, reducing environmental
          impact while promoting clean and renewable energy.
        </p>
      </div>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-200 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

    <div className="flex items-start gap-5">
      <div className="w-14 h-14 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md flex-shrink-0">
        <FaGlobe className="text-xl" />
      </div>

      <div>
        <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700">
          Export-Ready Operations
        </span>

        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Global-Ready Dairy Operations
        </h4>

        <p className="text-gray-700 leading-relaxed">
          Amrutdhhann aims to become one of the largest exporters of milk
          and milk by-products, meeting international quality standards
          and building a trusted global dairy brand.
        </p>
      </div>
    </div>
  </div>

  {/* CARD 4 */}
  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-200 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>

    <div className="flex items-start gap-5">
      <div className="w-14 h-14 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md flex-shrink-0">
        <FaLeaf className="text-xl" />
      </div>

      <div>
        <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
          Advanced Genetics
        </span>

        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Advanced Livestock Genetics
        </h4>

        <p className="text-gray-700 leading-relaxed">
          We plan to establish a high-quality sperm bank to maintain
          superior cattle genetics, ensuring long-term productivity,
          consistency, and quality across our dairy operations.
        </p>
      </div>
    </div>
  </div>

</div>



        {/* PRODUCTS */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Dairy Products
          </h2>
          <p className="mt-4 text-gray-700">
            Delivered in their most natural form — pure, safe, and exactly as
            nature intended.
          </p>
        </div>

        {/* PRODUCT CARDS (ONLY 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <ProductCard
            title="Pure Buffalo Milk"
            desc="100% pure, organic buffalo milk sourced from cruelty-free farms and delivered fresh."
            color="blue"
          />

          <ProductCard
            title="Curd"
            desc="Naturally fermented curd, rich in nutrition, taste, and purity."
            color="green"
          />

          <ProductCard
            title="Ghee"
            desc="Traditional ghee prepared using high-quality milk fat and authentic methods."
            color="orange"
          />

          <ProductCard
            title="Paneer"
            desc="Fresh, protein-rich paneer made without additives or preservatives."
            color="indigo"
          />

        </div>

      </div>
    </section>
  );
}

/* ICON WRAPPER */
function Icon({ children, bg }) {
  return (
    <div
      className={`w-12 h-12 rounded-xl ${bg} text-white flex items-center justify-center shadow-md flex-shrink-0`}
    >
      <span className="text-xl">{children}</span>
    </div>
  );
}

/* PRODUCT CARD */
function ProductCard({ title, desc, color }) {
  const themes = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    orange: "bg-orange-50 border-orange-200",
    indigo: "bg-indigo-50 border-indigo-200",
  };

  return (
    <div
      className={`rounded-2xl border p-6 text-center shadow-sm hover:shadow-lg transition ${themes[color]}`}
    >
      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h4>
      <p className="text-gray-700 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
