export default function Products() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Products
          </h2>

          <p className="mt-6 text-gray-700 lg:text-lg text-base text-justify ">
            Amrutdhhann offers a wide range of pure milk and dairy by-products
            produced through ethical, cruelty-free farming practices.
          
            Every product is crafted to meet high quality standards and
            delivered in its most natural form, free from chemicals,
            preservatives, or adulteration.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <ProductCard
            image="/images/milk2.jpeg"
            title="Pure Buffalo Milk"
            desc="Fresh, unadulterated buffalo milk sourced from trusted farms."
          />

          <ProductCard
            image="/images/curd.jpeg"
            title="Curd"
            desc="Naturally fermented curd rich in taste and nutrition."
          />

          <ProductCard
            image="/images/ghee.jpg"
            title="Ghee"
            desc="Traditional ghee prepared from pure buffalo milk."
          />

          <ProductCard
            image="/images/panner.jpeg"
            title="Paneer"
            desc="Soft, fresh paneer made under strict quality controls."
          />

          <ProductCard
            image="/images/cheese.jpeg"
            title="Cheese"
            desc="High-quality cheese crafted for domestic and global markets."
          />

          <ProductCard
            image="/images/butter1.jpeg"
            title="Butter"
            desc="Creamy butter produced using traditional methods."
          />

          <ProductCard
            image="/images/cream.jpeg"
            title="Fresh Cream"
            desc="Rich dairy cream retaining natural texture and flavor."
          />

          <ProductCard
            image="/images/all.jpeg"
            title="Value-Added Products"
            desc="A growing range of dairy products designed for modern needs."
          />

        </div>
      </div>
    </section>
  );
}

/* PRODUCT CARD */
function ProductCard({ image, title, desc }) {
  return (
    <div
      className="
        group bg-white rounded-2xl border border-gray-100 overflow-hidden
        shadow-sm transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
        flex flex-col
      "
    >
      {/* IMAGE */}
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 text-center flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className=" text-sm md:text-base  text-gray-700">
  {desc}
</p>

      </div>
    </div>
  );
}
