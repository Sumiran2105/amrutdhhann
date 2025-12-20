import { MdCurrencyRupee, MdTrendingUp, MdHandshake } from "react-icons/md";

export default function EarningModel() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-19">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Predictable Monthly Income 
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Along with dairy excellence, Amrutdhhann offers a strong earning
            platform designed to provide consistent and reliable income to
            investors and agents. Our ecosystem is built on transparency,
            sustainability, and long-term value creation.
          </p>
        </div>

        {/* INVESTOR & AGENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* INVESTOR CARD */}
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-b from-blue-50 to-white p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-5 mx-auto">
              <MdCurrencyRupee size={26} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Investor Earnings
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed text-center">
              Our goal is to provide uninterrupted and dependable income to
              everyone who invests with us, supported by a strong and growing
              dairy ecosystem.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li>• Invest ₹5,00,000 and receive ₹10,000 every month</li>
              <li>• Monthly income continues for 15 years</li>
              <li>• Entire original investment of ₹5,00,000 is refunded after 15 years</li>
              <li>• Designed for stability, predictability, and long-term security</li>
            </ul>
          </div>

          {/* AGENT CARD */}
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-b from-orange-50 to-white p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-xl bg-orange-500 text-white flex items-center justify-center mb-5 mx-auto">
              <MdHandshake size={26} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Agent Income Opportunities
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed text-center">
              Agents partnering with Amrutdhhann benefit from immediate income
              opportunities and additional commissions for every investor they
              bring into the platform.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li>• Immediate earnings through investor onboarding</li>
              <li>• Additional commissions on every successful investment</li>
              <li>• Transparent and stable earning structure</li>
              <li>• Backed by a real, asset-driven dairy business</li>
            </ul>
          </div>
        </div>

        {/* FOOTER STATEMENT */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <p className="text-gray-700 leading-relaxed">
            Amrutdhhann is not just about milk or investments; it is about
            creating a trusted ecosystem where families receive pure, healthy
            dairy products while investors and agents build sustainable income
            and long-term financial growth with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
