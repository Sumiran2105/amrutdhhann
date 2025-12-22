import React from 'react';
import { Link } from 'react-router-dom';

const RiskDisclosure = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Risk Disclosure Statement
          </h1>
          <div className="h-1 w-32 bg-amber-600 mx-auto mb-8"></div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 max-w-3xl mx-auto">
            <p className="text-red-700 font-semibold text-lg">
              IMPORTANT: INVESTMENTS WITH AMRUTHDHAN CARRY SUBSTANTIAL RISK. YOU MAY LOSE SOME OR ALL OF YOUR INVESTED CAPITAL.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Purpose and Importance of This Disclosure</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                This Comprehensive Risk Disclosure Statement ("Disclosure") is provided by AmruthDhan (a division of Anand Foods Limited) to ensure that prospective investors, existing investors, agents, and all stakeholders fully understand the significant risks associated with investing in our dairy business ecosystem. The primary purpose of this Disclosure is to promote informed decision-making by clearly articulating the various risks, uncertainties, and potential adverse outcomes that could affect investments with AmruthDhan, including but not limited to the flagship investment model wherein investors contribute ₹5,00,000 and receive ₹10,000 monthly for 15 years with principal refund at maturity. This Disclosure supplements but does not replace the detailed risk information contained in investment agreements, offering documents, terms and conditions, and other formal documentation. By considering an investment with AmruthDhan, you acknowledge that you have read, understood, and carefully considered all risks disclosed herein, and you accept full responsibility for your investment decisions based on your personal risk tolerance, financial situation, and investment objectives.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                It is critically important to understand that investments with AmruthDhan are not comparable to traditional bank deposits, government securities, insured financial products, or guaranteed return instruments. Unlike bank deposits that may be insured up to certain limits by deposit insurance corporations, investments with AmruthDhan are not covered by any government or institutional guarantee or insurance scheme. Unlike market-traded securities that may offer liquidity through established secondary markets, investments with AmruthDhan are generally illiquid and intended to be held for the complete contractual term. The projected monthly returns and principal refund are contingent upon the continued successful operation, profitability, and sustainability of the AmruthDhan dairy business, which is subject to numerous risks and uncertainties that could materially affect the Company's ability to meet its obligations. This Disclosure categorizes and describes these risks in detail, but cannot possibly identify every risk factor that may impact your investment. You should consult with independent financial advisors, legal counsel, and tax professionals before making any investment decisions, and should only invest funds that you can afford to lose without affecting your essential living expenses, emergency savings, or long-term financial security.
              </p>
            </div>
          </div>

          {/* Business and Operational Risks */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Business and Operational Risks</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan's ability to generate returns for investors depends fundamentally on the successful operation and profitability of our integrated dairy business, which encompasses buffalo farming, milk production, processing, distribution, marketing, and export activities. These operations are subject to numerous business risks that could materially adversely affect our financial performance and consequently our ability to make timely monthly payments or refund principal amounts. Key business risks include: (1) Production Risks: Dairy farming is inherently subject to biological, environmental, and operational uncertainties including disease outbreaks among livestock, reproductive issues affecting milk yield, feed quality and availability, climate conditions impacting animal health and productivity, water scarcity, and natural disasters that could disrupt farming operations. Despite our implementation of modern farming practices, health protocols, and contingency plans, we cannot eliminate these inherent risks of agricultural production.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                (2) Cost Structure Risks: Our operations involve significant costs including animal feed, veterinary care, labor, transportation, energy, packaging, and compliance. Fluctuations in these input costs due to inflation, supply chain disruptions, regulatory changes, or market conditions could reduce profit margins and affect our ability to maintain scheduled payments to investors. While we implement cost control measures and efficiency improvements, we cannot guarantee insulation from cost pressures that affect the entire dairy industry. (3) Market and Competition Risks: The dairy industry is competitive, with numerous established players, new entrants, and substitute products. Changes in consumer preferences, price sensitivity, brand perception, or competitive dynamics could affect our sales volumes, pricing power, and market share. Our expansion plans, including ambitions to become Asia's largest dairy enterprise and a significant exporter, involve execution risks, market entry challenges, and competitive responses that could impact growth projections and profitability.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                (4) Execution and Scalability Risks: Our vision of rapid growth and scale expansion involves significant execution risks including timely completion of infrastructure projects, effective integration of new farms and facilities, maintenance of quality standards during expansion, management of increased operational complexity, and successful market development. Delays, cost overruns, quality issues, or management challenges in executing our growth strategy could adversely affect financial performance and investor returns. (5) Management and Human Capital Risks: Our success depends on the skills, experience, and performance of our management team and employees. Inability to attract, retain, and motivate qualified personnel, succession planning for key positions, or deficiencies in management decisions could negatively impact operations and financial results. While we invest in training, development, and competitive compensation, we cannot guarantee uninterrupted management effectiveness across all levels of our expanding organization.
              </p>
            </div>
          </div>

          {/* Financial and Investment Risks */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial and Investment-Specific Risks</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Investments with AmruthDhan involve specific financial risks that prospective investors must carefully evaluate before committing funds. These include: (1) Illiquidity Risk: Investments are generally intended to be held for the complete contractual term (15 years in the flagship model) and do not provide regular opportunities for early redemption or secondary market sale. Requests for early withdrawal are subject to Company discretion, evaluation of circumstances, and potentially significant penalties or reduced settlement amounts. Investors should not allocate funds that may be needed for emergencies, short-term goals, or other liquidity requirements during the investment period. (2) Capital Loss Risk: There is a substantial risk that investors may lose some or all of their invested capital if the Company encounters financial difficulties, operates at a loss, faces insolvency, or ceases operations. The refund of principal after 15 years is contingent upon the Company's financial position and ability to meet obligations at maturity, not an unconditional guarantee unaffected by business performance.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                (3) Return Variability Risk: While the investment model projects consistent monthly returns of ₹10,000 for a ₹5,00,000 investment, actual payments may vary based on business performance, cash flow availability, and operational considerations. The Company may need to adjust payment schedules, amounts, or methods based on financial circumstances, though we strive to maintain consistency as outlined in investment agreements. (4) Inflation Risk: The fixed nature of monthly returns means that their purchasing power may be eroded by inflation over the 15-year investment period. ₹10,000 received in year 15 will likely have significantly less purchasing power than ₹10,000 received in year 1 if inflation persists, potentially reducing the real value of returns despite nominal consistency. (5) Concentration Risk: Investing with AmruthDhan represents concentration in a single business within the dairy sector, without the diversification benefits of broader investment portfolios. Adverse developments specific to our Company, management, or operations could disproportionately affect your investment compared to more diversified investment approaches.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                (6) Reinvestment Risk: The structure of monthly returns means that investors receive periodic cash flows that may need to be reinvested, potentially at lower rates of return than the original investment, affecting overall investment performance. (7) Tax Considerations: Investment returns may have tax implications that vary based on individual circumstances, jurisdictional rules, and changing tax legislation. Investors are responsible for understanding and complying with applicable tax obligations, and tax treatment of returns could affect net investment outcomes. (8) Model Sustainability Risk: The investment model's long-term sustainability depends on continuous successful recruitment of new investors, maintenance of growth rates, and effective reinvestment of capital. Challenges in any of these areas could strain the model's financial mechanics and affect ability to meet obligations to all investors throughout the investment cycle.
              </p>
            </div>
          </div>

          {/* Regulatory and Compliance Risks */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory, Legal, and Compliance Risks</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan operates in a complex regulatory environment encompassing agriculture, food safety, animal welfare, environmental protection, corporate governance, and potentially financial regulations depending on the classification and marketing of investment opportunities. Changes in regulations, enforcement priorities, or interpretive guidance could materially affect our operations, cost structure, business model, and consequently investor returns. Key regulatory risks include: (1) Food Safety and Quality Regulations: Increasingly stringent regulations governing dairy production, processing, packaging, labeling, and distribution could require significant capital investments, operational changes, or compliance costs that affect profitability. Non-compliance could result in fines, operational restrictions, reputational damage, or business disruption. (2) Agricultural and Environmental Regulations: Regulations governing animal welfare, waste management, water usage, land use, and environmental protection could impose additional costs, operational constraints, or compliance burdens that affect farming efficiency and economics.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                (3) Financial Regulations: Depending on regulatory classification, our investment programs may become subject to securities regulations, collective investment scheme rules, crowdfunding regulations, or other financial market regulations that could impose registration requirements, disclosure obligations, investor qualification criteria, marketing restrictions, or operational changes. Regulatory developments in this area could affect our ability to offer investment opportunities, modify terms, or continue existing programs without significant compliance investments or structural changes. (4) International Trade Regulations: Our export ambitions subject us to international trade regulations, tariffs, sanitary and phytosanitary requirements, certification standards, and geopolitical considerations that could affect market access, competitiveness, and profitability of export operations. (5) Legal and Litigation Risks: As a growing business with multiple stakeholders, we face potential legal risks including contractual disputes, product liability claims, employment matters, intellectual property issues, or investor complaints that could result in litigation costs, settlements, judgments, or operational disruptions.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                (6) Taxation Changes: Changes in tax laws, rates, incentives, or interpretations could affect our effective tax rate, cash flows, and profitability, potentially impacting investor returns. (7) Regulatory Interpretation and Enforcement: Even without formal regulatory changes, shifts in regulatory interpretation, enforcement priorities, or supervisory approaches could affect our operations and compliance costs. Regulatory ambiguity in emerging areas like agricultural technology, sustainable farming, or alternative investment structures creates additional uncertainty. We maintain compliance programs, legal counsel, and regulatory monitoring, but cannot guarantee immunity from regulatory changes, enforcement actions, or compliance costs that could materially affect business performance and consequently our ability to meet investment obligations. Investors should consider the regulatory environment as a dynamic factor that could significantly impact investment outcomes over the 15-year horizon.
              </p>
            </div>
          </div>

          {/* External and Macro Risks */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">External, Macroeconomic, and Force Majeure Risks</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan's operations and investment performance are subject to external factors beyond our control that could materially adversely affect business outcomes. These include: (1) Macroeconomic Risks: Economic cycles, recessions, inflation, interest rate changes, currency fluctuations, and broader financial market conditions could affect consumer spending on dairy products, input costs, financing availability, and overall business environment. Economic downturns could reduce demand for premium dairy products, increase price sensitivity, and strain our financial performance. (2) Climate and Environmental Risks: As an agricultural business, we are particularly exposed to climate-related risks including droughts, floods, extreme temperatures, changing weather patterns, water scarcity, and natural disasters that could affect animal health, feed availability, milk production, and operational continuity. While we implement climate adaptation measures and sustainable practices, we cannot eliminate vulnerability to environmental factors.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                (3) Geopolitical Risks: Regional conflicts, trade disputes, international relations, political instability, or policy changes could affect our operations, supply chains, export markets, or investment climate. (4) Pandemic and Health Crisis Risks: The COVID-19 pandemic demonstrated how health crises can disrupt supply chains, consumer behavior, workforce availability, and economic activity. Future pandemics or health emergencies could similarly affect our business in unpredictable ways. (5) Technological Disruption Risks: Advances in alternative proteins, plant-based dairy substitutes, lab-grown dairy, or nutritional technologies could disrupt traditional dairy markets and consumer preferences over the 15-year investment horizon. While we monitor and adapt to technological trends, disruptive innovations could affect long-term demand for conventional dairy products. (6) Social and Consumer Trend Risks: Changing consumer preferences regarding health, nutrition, animal welfare, sustainability, and ethical consumption could affect demand for our products and willingness to pay premium prices. Negative publicity, social media campaigns, or activist pressure regarding dairy farming practices could affect brand reputation and sales.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                (7) Supply Chain Risks: Our operations depend on complex supply chains for feed, veterinary supplies, packaging, equipment, and transportation. Disruptions due to logistical issues, supplier failures, transportation challenges, or global supply chain pressures could affect operations and costs. (8) Force Majeure Events: Unforeseen events beyond reasonable control including natural disasters, wars, terrorism, civil unrest, government actions, or other exceptional circumstances could disrupt operations, damage assets, or create liabilities that affect our ability to meet investment obligations. Investment agreements typically include force majeure provisions that may excuse or delay performance under such circumstances, potentially affecting payment schedules or other obligations. These external risks highlight the uncertainty inherent in long-term investments tied to business operations, particularly in the agricultural sector with its unique vulnerabilities to environmental, economic, and social factors.
              </p>
            </div>
          </div>

          {/* Final Acknowledgement */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Investor Acknowledgement and Responsibility</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                BY CONSIDERING AN INVESTMENT WITH AMRUTHDHAN, YOU ACKNOWLEDGE AND CONFIRM THAT: (1) You have read this Comprehensive Risk Disclosure Statement in its entirety and understand the significant risks involved in investing with AmruthDhan; (2) You recognize that investments are not comparable to bank deposits, government securities, or guaranteed return instruments and are not covered by any deposit insurance or government guarantee; (3) You understand that you may lose some or all of your invested capital, and that projected returns are contingent upon business performance, not guaranteed outcomes; (4) You accept that investments are generally illiquid and intended to be held for the complete contractual term, with limited opportunities for early redemption; (5) You have considered your personal financial situation, risk tolerance, investment objectives, and time horizon, and have determined that an investment with AmruthDhan is suitable for your circumstances; (6) You have consulted with independent financial advisors, legal counsel, and tax professionals as needed to understand the implications of this investment; (7) You are investing funds that you can afford to lose without affecting your essential living expenses, emergency savings, or long-term financial security; (8) Your investment decision is based on your independent evaluation, not solely on representations by the Company, its agents, or marketing materials; (9) You accept full responsibility for your investment decision and will not hold AmruthDhan, Anand Foods Limited, their directors, officers, employees, agents, or affiliates liable for investment outcomes, except to the extent of specific contractual obligations expressly stated in investment agreements.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
                <p className="text-yellow-800 font-semibold mb-2">Critical Reminder:</p>
                <p className="text-yellow-700">
                  This Risk Disclosure Statement does not constitute investment advice, a recommendation to invest, or a complete enumeration of all possible risks. Risks may materialize in ways not anticipated in this Disclosure, and new risks may emerge over the investment period. The Company's financial condition, business prospects, and ability to meet obligations may change materially over time. You should monitor your investment, review periodic updates from the Company, and reassess your investment periodically based on changing circumstances. Do not invest based solely on this Disclosure or any single source of information. Conduct thorough due diligence, seek multiple perspectives, and make investment decisions that align with your comprehensive financial plan and risk management approach.
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                If you have questions about risks, require clarification, or need additional information before making an investment decision, please contact our Investor Relations Department at risks@amruthdhan.com or +91-40-5555-6666. We encourage prospective investors to ask questions, request additional documentation, and ensure complete understanding before committing funds. However, please understand that our representatives cannot provide personalized investment advice, guarantee returns, or eliminate risks. The decision to invest, and the responsibility for that decision, rests ultimately with you as the investor. We believe in transparent communication about both opportunities and risks, and we provide this Comprehensive Risk Disclosure Statement as part of our commitment to ethical business practices and informed investor relationships. We appreciate your consideration of AmruthDhan as a potential investment opportunity and encourage careful, deliberate decision-making that aligns with your financial goals and risk tolerance.
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <Link to="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RiskDisclosure;