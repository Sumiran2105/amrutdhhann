export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Our Services
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Amrutdhhann offers a comprehensive range of services built around
          ethical dairy farming, sustainable operations, and reliable income
          opportunities for investors, agents, and partners.
        </p>

        {/* Trust Highlights */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            "Ethical Dairy Farming",
            "Sustainable Operations",
            "Asset-Backed Income",
            "Global-Quality Standards",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full text-sm
                         bg-blue-100 text-blue-700 font-medium"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
