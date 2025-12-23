import { FaLeaf, FaSolarPanel, FaGlobe, FaHeart } from "react-icons/fa";

export default function DairyEcosystem() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 pb-10">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Dairy Products & Farms
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed text-sm sm:text-lg">
            Amrutdhhann is envisioned to become Asia’s largest integrated dairy
            enterprise, built with a long-term vision of quality, scale, and
            sustainability. We focus on producing organic and healthy milk and
            milk by-products that meet high international standards and are
            supplied to markets across India and the world.
          </p>
        </div>

        {/* DAIRY OPERATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">

          {/* CARD 1 */}
          <EcosystemCard
            icon={<FaHeart />}
            color="green"
            badge="Cruelty-Free Farming"
            title="Ethical Animal Welfare"
            text="Animal welfare is a core value at Amrutdhhann. We follow cruelty-free practices and treat animals with kindness, care, and affection, believing that healthy and happy animals produce healthy milk."
          />

          {/* CARD 2 */}
          <EcosystemCard
            icon={<FaSolarPanel />}
            color="blue"
            badge="Renewable Energy"
            title="Sustainable Farm Ecosystem"
            text="Our farms operate as environmentally responsible ecosystems, powered by solar energy and gobar gas, reducing environmental impact while promoting clean and renewable energy."
          />

          {/* CARD 3 */}
          <EcosystemCard
            icon={<FaGlobe />}
            color="indigo"
            badge="Export-Ready Operations"
            title="Global-Ready Dairy Operations"
            text="Amrutdhhann aims to become one of the largest exporters of milk and milk by-products, meeting international quality standards and building a trusted global dairy brand."
          />

          {/* CARD 4 */}
          <EcosystemCard
            icon={<FaLeaf />}
            color="emerald"
            badge="Advanced Genetics"
            title="Advanced Livestock Genetics"
            text="We plan to establish a high-quality sperm bank to maintain superior cattle genetics, ensuring long-term productivity, consistency, and quality across our dairy operations."
          />
        </div>

        {/* PRODUCTS */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Dairy Products
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Delivered in their most natural form — pure, safe, and exactly as
            nature intended.
          </p>
        </div>

        {/* PRODUCT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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

/* ================= ECOSYSTEM CARD ================= */

function EcosystemCard({ icon, badge, title, text, color }) {
  const colors = {
    green: "from-green-500 to-emerald-500 bg-green-600 text-green-700 bg-green-100",
    blue: "from-blue-500 to-cyan-500 bg-blue-600 text-blue-700 bg-blue-100",
    indigo: "from-indigo-500 to-purple-500 bg-indigo-600 text-indigo-700 bg-indigo-100",
    emerald: "from-emerald-500 to-teal-500 bg-emerald-600 text-emerald-700 bg-emerald-100",
  };

  return (
    <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition border border-gray-200 overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors[color].split(" ")[0]} ${colors[color].split(" ")[1]}`} />

      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
        <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl ${colors[color].split(" ")[2]} text-white flex items-center justify-center shadow-md flex-shrink-0`}>
          <span className="text-lg sm:text-xl">{icon}</span>
        </div>

        <div className="min-w-0">
          <span className={`inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full ${colors[color].split(" ")[4]} ${colors[color].split(" ")[3]}`}>
            {badge}
          </span>

          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h4>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= PRODUCT CARD ================= */

function ProductCard({ title, desc, color }) {
  const themes = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    orange: "bg-orange-50 border-orange-200",
    indigo: "bg-indigo-50 border-indigo-200",
  };

  return (
    <div className={`rounded-2xl border p-6 text-center shadow-sm hover:shadow-lg transition ${themes[color]}`}>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h4>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
