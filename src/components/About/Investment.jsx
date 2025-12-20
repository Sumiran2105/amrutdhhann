const Investment = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 mb-10">
          Investor Income Model
        </h2>

        <p className="text-gray-700 max-w-3xl mb-8">
          Amrutdhhann provides consistent and reliable income through a strong,
          asset-backed dairy business model designed for long-term stability.
        </p>

        <div className="bg-white rounded-2xl shadow p-8 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-sm text-gray-500">Investment</p>
            <p className="text-xl font-bold">₹5,00,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Monthly Income</p>
            <p className="text-xl font-bold">₹10,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="text-xl font-bold">15 Years</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Refund</p>
            <p className="text-xl font-bold">100%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
