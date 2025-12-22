import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Be Part of Amrutdhhann?
        </h2>
        

        {/* Description */}
        <p className="mt-6 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Join a trusted dairy ecosystem built on purity, sustainability, and
          predictable income. Whether you are an investor, an agent, or a
          partner, Amrutdhhann offers long-term value you can trust.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="block">
            <button
              className="
              px-8 py-3 rounded-lg font-semibold
              bg-white text-blue-900
              hover:bg-blue-100 transition
            "
            >
              Invest Now
            </button>
          </Link>
          <Link to="/contact" className="block">
            <button
              className="
              px-8 py-3 rounded-lg font-semibold
              border border-white/70
              hover:bg-white/10 transition
            "
            >
              Become an Agent
            </button>
          </Link>
          <Link to="/contact" className="block">
            <button
              className="
              px-8 py-3 rounded-lg font-semibold
              bg-blue-700 hover:bg-blue-600 transition
            "
            >
              Contact Us
            </button>

          </Link>





        </div>
      </div>
    </section>
  );
}
