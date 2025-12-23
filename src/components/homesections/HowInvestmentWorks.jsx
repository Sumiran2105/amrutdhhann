import { MdCurrencyRupee, MdTrendingUp, MdAutorenew, MdVerified } from "react-icons/md";

export default function HowInvestmentWorks() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6  py-8">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            How the Investment Works
          </h2>

          <p className="mt-6 text-sm md:text-lg text-sm text-gray-700">
            Amrutdhhann offers a structured and transparent earning model backed
            by a strong and growing dairy ecosystem. The process is designed to
            provide consistent income, long-term stability, and financial
            confidence to investors and agents.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <StepCard
            step="01"
            icon={<MdCurrencyRupee size={26} />}
            title="Make an Investment"
            desc="An investor invests ₹5,00,000 into the Amrutdhhann platform, becoming part of a real, asset-based dairy ecosystem."
          />

          <StepCard
            step="02"
            icon={<MdTrendingUp size={26} />}
            title="Receive Monthly Income"
            desc="The investor receives ₹10,000 every month as consistent and uninterrupted income supported by dairy operations."
          />

          <StepCard
            step="03"
            icon={<MdAutorenew size={26} />}
            title="Earn for 15 Years"
            desc="Monthly income continues for a fixed period of 15 years, ensuring long-term predictability and financial stability."
          />

          <StepCard
            step="04"
            icon={<MdVerified size={26} />}
            title="Capital is Refunded"
            desc="At the end of 15 years, the entire original investment of ₹5,00,000 is refunded to the investor."
          />
        </div>

        {/* FOOTER NOTE */}
        <div className="max-w-4xl mx-auto text-center mt-8">
          <p className="text-sm md:text-lg text-gray-700">
            This model is designed to benefit both investors and agents through
            stable earnings, transparency, and long-term value creation, all
            supported by a real, income generating dairy business.
          </p>
        </div>
      </div>
    </section>
  );
}

/* STEP CARD */
function StepCard({ step, icon, title, desc }) {
  return (
    <div className="relative bg-white rounded-2xl border border-gray-100 p-7 text-center shadow-sm hover:shadow-lg transition">
      
      {/* Step Number */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
        Step {step}
      </div>

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-5">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-blue-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm md:text-base text-gray-600">
        {desc}
      </p>
    </div>
  );
}
