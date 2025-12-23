export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT: CONTENT */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Our Services
            </h1>
            {/* SUB-STATEMENT */}
            <div className="mt-4 max-w-xl mx-auto lg:mx-0">
              <p className="text-base md:text-lg text-blue-800 font-medium leading-relaxed">
                Built on purity, sustainability, and trust, our services connect ethical
                dairy production with long-term income opportunities—creating value for
                consumers, investors, and agents alike.
              </p>

              {/* Accent Divider */}
              <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full mx-auto lg:mx-0" />
            </div>


            <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Amrutdhhann offers a comprehensive range of services built around
              ethical dairy farming, sustainable operations, and reliable income
              opportunities for investors, agents, and partners.
            </p>

            {/* Trust Highlights */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                "Ethical Dairy Farming",
                "Sustainable Operations",
                "Asset-Based Income",
                "Global Quality Standards",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full text-sm bg-blue-100 text-blue-700 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative">

            {/* Soft background glow (SAFE ON MOBILE) */}
            <div
              className="
                absolute
                -top-6 right-0
                md:-top-10 md:-right-10
                w-40 h-40
                md:w-72 md:h-72
                bg-blue-200/40
                rounded-full
                blur-3xl
                pointer-events-none
              "
            />

            {/* Image container */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
              <img
                src="/images/dairy.jpeg"
                alt="Amrutdhhann Dairy Services"
                className="w-full h-[220px] sm:h-[280px] md:h-[340px] object-cover"
              />

              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-sm font-medium text-blue-900">
                Ethical • Sustainable • Asset-Based
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
