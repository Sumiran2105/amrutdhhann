export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT: CONTENT */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Our Services
            </h1>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Amrutdhhann offers a comprehensive range of services built around
              ethical dairy farming, sustainable operations, and reliable income
              opportunities for investors, agents, and partners.
            </p>

            {/* Trust Highlights */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                "Ethical Dairy Farming",
                "Sustainable Operations",
                "Asset-Backed Income",
                "Global Quality Standards",
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

          {/* RIGHT: IMAGE */}
          <div className="relative">

            {/* Soft background glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>

            {/* Image container */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
              <img
                src="/images/dairy.jpeg"
                alt="Amrutdhhann Dairy Services"
                className="w-full h-[340px] object-cover"
              />

              {/* Optional overlay label */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-sm font-medium text-blue-900">
                Ethical • Sustainable • Asset-Backed
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
