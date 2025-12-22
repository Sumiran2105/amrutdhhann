import React from 'react';
import { Link } from 'react-router-dom';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Important Disclaimer
          </h1>
          <div className="h-1 w-32 bg-amber-600 mx-auto mb-8"></div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 max-w-3xl mx-auto">
            <p className="text-red-700 font-semibold">
              PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE USING OUR SERVICES OR MAKING ANY INVESTMENT DECISIONS
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* General Disclaimer */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Disclaimer</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                The information, content, materials, products, and services provided by AmruthDhan (a division of Anand Foods Limited) through our website, mobile applications, investment platforms, marketing materials, customer communications, and any other channels ("Information") are provided for general informational purposes only and should not be construed as professional advice, recommendations, or guarantees of any kind. While we strive to ensure the accuracy, completeness, and timeliness of all Information presented, we make no representations or warranties of any kind, express or implied, about the reliability, suitability, availability, or accuracy of the Information, products, services, or related graphics contained within our platform for any purpose. Any reliance you place on such Information is therefore strictly at your own risk, and you acknowledge that you must conduct your own independent research, due diligence, and verification before making any decisions based on the Information provided by AmruthDhan.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan expressly disclaims all liability for any loss or damage of any kind arising directly or indirectly from the use of, reliance on, or inability to use our Information, products, or services, including but not limited to loss of data, revenue, profits, business opportunities, or personal injury, whether based on contract, tort (including negligence), strict liability, or otherwise, even if we have been advised of the possibility of such damages. The Information provided on our platform may include forward-looking statements regarding future performance, growth projections, expansion plans, revenue estimates, and other anticipatory information that involves risks, uncertainties, and assumptions that could cause actual results to differ materially from those expressed or implied. Such forward-looking statements are based on current expectations and projections about future events and are subject to risks, uncertainties, and assumptions relating to our operations, results of operations, growth strategy, liquidity, regulatory environment, market conditions, and other factors that may be beyond our control.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The content on our platform may contain references or links to third-party websites, resources, or content that are not owned or controlled by AmruthDhan. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that AmruthDhan shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them, and we expressly disclaim any responsibility for the accuracy, content, or availability of information found on sites that link to or from our platform.
              </p>
            </div>
          </div>

          {/* Investment Disclaimer */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment-Specific Disclaimer</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                THE INVESTMENT OPPORTUNITIES OFFERED THROUGH AMRUTHDHAN ARE SUBJECT TO SIGNIFICANT RISKS AND ARE NOT SUITABLE FOR ALL INVESTORS. THE INFORMATION PROVIDED REGARDING INVESTMENT PROGRAMS, INCLUDING BUT NOT LIMITED TO THE FLAGSHIP MODEL WHEREIN AN INVESTOR CONTRIBUTES ₹5,00,000 AND RECEIVES ₹10,000 MONTHLY FOR 15 YEARS WITH PRINCIPAL REFUND AT MATURITY, IS FOR INFORMATIONAL PURPOSES ONLY AND SHOULD NOT BE CONSTRUED AS FINANCIAL ADVICE, INVESTMENT RECOMMENDATION, OR SOLICITATION TO BUY OR SELL ANY SECURITY OR INVESTMENT PRODUCT. Past performance, if any, is not indicative of future results, and there can be no assurance that any investment objectives will be achieved or that investors will receive the returns outlined in promotional materials or investment agreements. All investment decisions should be based on careful consideration of your personal financial situation, investment objectives, risk tolerance, and time horizon, preferably in consultation with independent financial advisors, tax consultants, and legal counsel who can provide personalized advice based on your specific circumstances.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Investments with AmruthDhan involve substantial risk of loss and are not guaranteed or insured by any government agency, deposit insurance corporation, or other protective scheme. The projected monthly returns of ₹10,000 and the refund of principal after 15 years are contingent upon the continued successful operation, profitability, and sustainability of the AmruthDhan dairy business and may be affected by numerous factors including but not limited to: changes in market conditions for dairy products; fluctuations in feed and operational costs; regulatory changes affecting agriculture or investment sectors; climate conditions impacting milk production; competition within the dairy industry; management decisions and operational efficiency; technological disruptions; global economic conditions; and unforeseen events such as natural disasters, pandemics, or political instability. There is no guarantee that the Company will be able to meet its payment obligations under the investment agreements, and investors may lose some or all of their invested capital if the business encounters financial difficulties or ceases operations.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The investment model described represents participation in a business enterprise rather than a traditional fixed-income instrument, bank deposit, or government security. Unlike bank deposits that may be insured up to certain limits by deposit insurance schemes, investments with AmruthDhan are not covered by any such protection. Unlike market-traded securities that may offer liquidity through secondary markets, investments with AmruthDhan are generally illiquid and intended to be held for the complete contractual term, with early redemption subject to Company discretion, potential penalties, and market conditions. Prospective investors should carefully review all investment documentation, including the detailed investment agreement, risk disclosure statement, terms and conditions, and any supplementary materials, and should ensure they fully understand the nature of the investment, the risks involved, the fee structure, the rights and obligations of both parties, and the dispute resolution mechanisms before committing any funds. The decision to invest should be based solely on your independent evaluation and not on any representation, guarantee, or assurance provided by AmruthDhan representatives, agents, or marketing materials.
              </p>
            </div>
          </div>

          {/* Product Disclaimer */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Product and Health Disclaimer</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan dairy products, including our pure buffalo milk and related items, are natural agricultural products subject to biological variations, seasonal changes, and the inherent characteristics of animal husbandry and dairy farming. While we implement rigorous quality control measures, testing protocols, and hygiene standards throughout our production and processing chain, we cannot guarantee that our products will always meet every individual's expectations, preferences, or specific requirements. Dairy products are perishable commodities that require proper refrigeration, handling, and consumption within recommended timeframes to maintain safety and quality. We disclaim any liability for health issues, allergic reactions, or adverse effects resulting from consumption of our products if such consumption occurs contrary to storage instructions, after expiration dates, by individuals with specific allergies or medical conditions, or in combination with other factors beyond our control. Customers with lactose intolerance, milk allergies, or specific dietary restrictions should consult healthcare professionals before consuming our products, and should carefully review product labels and information provided.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nutritional information, health claims, and product descriptions provided on our platform or in marketing materials are based on standard testing, industry knowledge, and general characteristics of buffalo milk. These statements have not been evaluated by food safety authorities in all jurisdictions, and our products are not intended to diagnose, treat, cure, or prevent any disease or health condition. Individual nutritional needs, health responses, and digestive tolerances vary significantly, and the information provided should not be considered medical advice or a substitute for professional healthcare guidance. The benefits of consuming pure, unadulterated buffalo milk as part of a balanced diet may vary among individuals, and we make no therapeutic claims beyond general nutritional information. Customers should maintain realistic expectations regarding the health benefits of dairy consumption and should incorporate our products as part of a varied, balanced diet rather than relying on them for specific health outcomes.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our commitment to "100% pure buffalo milk" refers to our rigorous standards against adulteration with water, chemicals, preservatives, or other milk types, but natural variations in fat content, protein levels, and other constituents may occur based on factors including breed of buffalo, feed composition, lactation stage, season, and farming practices. While we strive for consistency through blending and standardization processes, absolute uniformity cannot be guaranteed in natural agricultural products. The term "organic" when used in relation to our products refers to our farming practices that minimize synthetic inputs and follow natural approaches, but certification status may vary, and customers should verify current certification details if this is important to them. All product images, descriptions, and specifications are for illustrative purposes only, and actual products may vary slightly in appearance, packaging, or characteristics. We reserve the right to modify product formulations, packaging, or specifications without prior notice while maintaining our core commitment to purity and quality.
              </p>
            </div>
          </div>

          {/* Agent Disclaimer */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Agent and Representation Disclaimer</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan agents and representatives act as independent contractors promoting our products and investment opportunities under specific agreements with the Company. While we provide training, guidelines, and marketing materials to our agents, we cannot control every aspect of their communications, representations, or conduct. AmruthDhan expressly disclaims responsibility for any unauthorized, exaggerated, misleading, or inaccurate statements made by agents or representatives beyond the official Information provided by the Company through approved channels. Prospective investors and customers should verify all claims, representations, and promises directly with AmruthDhan through official communication channels before making any decisions or commitments. No agent or representative has authority to modify investment terms, make binding guarantees beyond those contained in official investment agreements, or commit the Company to obligations not formally documented through proper channels.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Commission structures, incentive programs, and partnership terms for agents are detailed in specific Agent Agreements and may be subject to change based on Company policies, market conditions, and regulatory requirements. Past agent earnings or performance examples provided in recruitment materials or presentations are for illustrative purposes only and do not guarantee future results. Agent success depends on numerous factors including individual effort, skills, market conditions, regulatory environment, and economic factors beyond the Company's or the agent's control. The Company makes no representations or warranties regarding potential earnings, market reception, or business viability for individual agents, and prospective agents should conduct their own due diligence and realistic assessment before committing to the partnership program. Agent status does not constitute employment with Anand Foods Limited, and agents are responsible for their own tax obligations, business expenses, regulatory compliance, and liability insurance as independent contractors.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Information shared by agents through social media, personal networks, or other unofficial channels represents their personal views and interpretations unless explicitly confirmed as official Company communication through verified channels. The Company monitors agent activities to ensure compliance with policies and regulations but cannot guarantee that all communications from all agents at all times will be completely accurate, compliant, or aligned with official positions. Customers and investors should exercise caution and verify important Information directly through official Company sources rather than relying solely on agent communications. In cases of discrepancy between agent representations and official Company documentation, the official Company documentation shall prevail, and any claims based on unauthorized agent representations will not be binding on the Company. Agents are expressly prohibited from providing financial advice, making investment recommendations, or guaranteeing returns, and any such communications should be viewed with appropriate skepticism and verified through proper channels.
              </p>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Acknowledgement</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                BY USING AMRUTHDHAN'S SERVICES, PURCHASING OUR PRODUCTS, CONSIDERING OUR INVESTMENT OPPORTUNITIES, OR INTERACTING WITH OUR PLATFORM IN ANY MANNER, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO THIS COMPREHENSIVE DISCLAIMER IN ITS ENTIRETY. You recognize that all transactions, investments, and engagements with AmruthDhan involve risks, uncertainties, and variables that cannot be completely controlled or predicted. You accept full responsibility for your decisions and actions based on Information obtained through our platform, and you agree not to hold AmruthDhan, Anand Foods Limited, their directors, officers, employees, agents, affiliates, or partners liable for any outcomes, results, or consequences arising from your use of our Information, products, or services, except to the extent specifically provided for in formal, written agreements executed between you and the Company.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
                <p className="text-yellow-800 font-semibold mb-2">Important Reminder:</p>
                <p className="text-yellow-700">
                  This Disclaimer supplements but does not replace the detailed Terms and Conditions, Privacy Policy, Investment Agreements, and other formal documentation governing your relationship with AmruthDhan. In case of any conflict between this Disclaimer and specific contractual agreements, the contractual agreements shall prevail to the extent of such conflict. This Disclaimer may be updated periodically to reflect changes in our operations, regulatory environment, or risk factors, and your continued use of our services constitutes acceptance of such updates. We recommend reviewing this Disclaimer regularly along with all other governing documents to maintain awareness of your rights, responsibilities, and the risks associated with engaging with AmruthDhan's ecosystem.
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Disclaimer or require clarification on any aspect of our services, products, or investment opportunities, please contact our compliance department before proceeding. Our team is available to provide additional information, address concerns, and help you make informed decisions aligned with your personal circumstances and objectives. However, please understand that our representatives cannot provide personalized financial, legal, or medical advice, and you should consult appropriate professionals for guidance tailored to your specific situation. We appreciate your interest in AmruthDhan and encourage responsible, informed engagement with our platform as we work together toward sustainable dairy production, ethical business practices, and mutually beneficial partnerships built on transparency and trust.
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

export default Disclaimer;