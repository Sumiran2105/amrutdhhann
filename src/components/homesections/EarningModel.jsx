import { MdCurrencyRupee, MdTrendingUp, MdHandshake } from "react-icons/md";

export default function EarningModel() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-20">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Predictable Monthly Income
          </h2>

          <p className="mt-6 text-sm md:text-base text-gray-700">
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

            <p className="mt-4 text-sm md:text-base text-gray-700 text-center">
              Our goal is to provide uninterrupted and dependable income to
              everyone who invests with us, supported by a strong and growing
              dairy ecosystem.
            </p>

            <ul className="mt-6 space-y-3 text-sm md:text-base text-gray-700">
              <li className="font-medium">
                • Invest <span className="text-blue-800">₹5,00,000</span> and
                receive <span className="text-blue-800">₹10,000 every month</span>
              </li>
              <li className="font-medium">
                • Monthly income continues for <span className="text-blue-800">15 years</span>
              </li>
              <li className="font-medium">
                • Entire original investment of <span className="text-blue-800">₹5,00,000</span> is refunded after 15 years
              </li>
              <li className="font-medium">
                • Designed for stability, predictability, and long-term security
              </li>
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

            <p className="mt-4 text-sm md:text-base text-gray-700 text-center">
              Agents partnering with Amrutdhhann benefit from immediate income
              opportunities and additional commissions for every investor they
              bring into the platform.
            </p>

            <ul className="mt-6 space-y-3 text-sm md:text-base text-gray-700">
              <li className="font-medium">
                • Immediate earnings through investor onboarding
              </li>
              <li className="font-medium">
                • Additional commissions on every successful investment
              </li>
              <li className="font-medium">
                • Transparent and stable earning structure
              </li>
              <li className="font-medium">
                • Backed by a real, asset-driven dairy business
              </li>
            </ul>
          </div>
        </div>

        {/* FOOTER STATEMENT */}
        <div className="max-w-4xl mx-auto text-center mt-10">
          <p className="text-sm md:text-lg text-sm text-gray-700">
            Amrutdhhann is not just about milk or investments it is about
            creating a trusted ecosystem where families receive pure, healthy
            dairy products while investors and agents build sustainable income
            and long-term financial growth with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
