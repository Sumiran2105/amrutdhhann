import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms and Conditions
          </h1>
          <div className="h-1 w-32 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Effective Date: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction and Acceptance</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Welcome to AmruthDhan, the flagship milk division of Anand Foods, an integrated dairy enterprise committed to delivering pure, unadulterated buffalo milk and creating sustainable investment opportunities through ethical farming practices and transparent business operations. These comprehensive Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "Investor," "Agent," or "Customer") and Anand Foods Limited, operating under the brand name AmruthDhan ("Company," "we," "us," or "our"), governing your access to and use of our website, mobile applications, investment platforms, dairy products, services, and any related content (collectively, the "Services"). By accessing, browsing, registering on our platform, purchasing our dairy products, making investments, or otherwise engaging with our Services in any manner, you acknowledge that you have read, understood, and irrevocably agree to be bound by these Terms in their entirety, including any additional guidelines, policies, or disclaimers referenced herein or made available through our platform.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                If you do not agree to any provision of these Terms, you must immediately cease all access and use of our Services. Your continued use of our Services following any modifications to these Terms constitutes your acceptance of such changes. These Terms supersede all prior oral or written agreements, communications, or understandings between you and AmruthDhan regarding the subject matter herein. We reserve the exclusive right, at our sole discretion, to modify, amend, or replace these Terms at any time without prior notice, with the updated version becoming effective immediately upon posting on our platform. It is your responsibility to regularly review these Terms to stay informed of any changes that may affect your rights or obligations. For significant changes that materially affect your use of our Services or your legal rights, we will make reasonable efforts to provide notice through our platform, email communication, or other appropriate channels, though the ultimate responsibility for reviewing updates remains with you.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our Services are intended for users who are at least 18 years of age and possess the legal capacity to enter into binding contracts under applicable law. By using our Services, you represent and warrant that you meet these eligibility requirements and that all information you provide during registration, investment processes, or product purchases is accurate, current, and complete. We reserve the right to refuse access to our Services to anyone for any reason at any time, including but not limited to cases where we suspect fraudulent activity, misrepresentation of identity, violation of these Terms, or any activity that may harm our platform, other users, or our reputation as a trusted provider of pure dairy products and ethical investment opportunities. Your access to certain features of our Services may require additional verification procedures, compliance with specific eligibility criteria, or acceptance of supplemental terms, particularly for investment-related activities that are subject to regulatory requirements and financial compliance standards.
              </p>
            </div>
          </div>

          {/* Investment Terms */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Investment Terms and Conditions</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                The investment opportunities offered through AmruthDhan represent participation in our integrated dairy ecosystem, where investors contribute capital to support the expansion of our pure buffalo milk production, processing facilities, distribution networks, and sustainable farming operations. These investments are structured as contractual agreements between the investor and Anand Foods Limited, governed by the specific terms outlined in the investment agreement, these general Terms, and applicable Indian laws and regulations. The flagship investment model, wherein an investor contributes ₹5,00,000 (Five Lakh Indian Rupees) and receives ₹10,000 every month for 15 years, with the principal amount refunded at maturity, is subject to the complete fulfillment of contractual obligations by both parties, including timely payments by the Company and adherence to investment conditions by the investor. It is crucial to understand that this investment represents participation in a business enterprise rather than a traditional banking product, insurance policy, or government-guaranteed instrument, and as such, carries inherent business risks that must be carefully considered before committing funds.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                All investment transactions are subject to comprehensive Know Your Customer (KYC) verification, anti-money laundering checks, and compliance with relevant financial regulations. Investors must provide accurate and complete documentation, including valid identity proof, address verification, income details, and any other information reasonably required by the Company to process the investment and comply with regulatory obligations. The monthly returns of ₹10,000 are calculated based on the operational performance of the AmruthDhan dairy ecosystem and are contingent upon the continued profitability and sustainability of our business operations. While we strive to maintain consistent returns as outlined in our investment agreements, investors should be aware that these payments are subject to business performance and may be affected by factors including but not limited to market conditions, production costs, regulatory changes, climate factors affecting dairy farming, and overall economic circumstances. The refund of the principal investment amount after 15 years is similarly dependent on the Company's financial position and ability to meet its obligations at maturity, representing a long-term commitment that requires careful consideration of your financial goals and risk tolerance.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Investments with AmruthDhan are generally intended to be held for the complete duration of the agreed term, and early withdrawal requests may be subject to evaluation based on specific circumstances, availability of funds, and applicable terms outlined in your investment agreement. Any requests for early redemption must be submitted in writing to our investment relations department and will be processed in accordance with the policies in effect at the time of request, potentially involving administrative fees, reduced returns, or other conditions as specified in the investment documentation. We maintain transparent communication channels regarding investment performance, with regular updates provided through our platform, email communications, and annual statements, though investors are encouraged to actively monitor their investments and seek clarification whenever needed. It is imperative to thoroughly review all investment documentation, including the detailed investment agreement, risk disclosure statement, and these Terms, before committing funds, and to consult with independent financial and legal advisors if you have questions about the suitability of this investment for your particular financial situation, objectives, or risk profile.
              </p>
            </div>
          </div>

          {/* Product Terms */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Dairy Product Terms and Conditions</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan is committed to delivering 100% pure, unadulterated buffalo milk and related dairy products sourced from our network of trusted farms, adhering to stringent quality control measures at every stage of production, processing, packaging, and distribution. All products sold through our platform are subject to availability, and we reserve the right to limit quantities, discontinue products, or modify specifications without prior notice, though we strive to maintain consistent quality and availability for our valued customers. Prices for our dairy products are subject to change based on factors including production costs, seasonal variations in milk supply, transportation expenses, and market conditions, with current prices displayed at the time of purchase. While we implement rigorous quality assurance protocols, including regular testing for purity, absence of adulterants, and nutritional composition, customers should be aware that dairy products are natural, perishable commodities that require proper storage and handling to maintain freshness and safety, and we cannot guarantee product condition if improper storage occurs after delivery.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Delivery of dairy products is available within designated service areas, with schedules and fees determined by location, order value, and delivery preferences. We make reasonable efforts to ensure timely delivery according to committed schedules, but delivery times are estimates only and may be affected by factors beyond our control, including traffic conditions, weather, logistical challenges, or unforeseen circumstances. Customers are responsible for providing accurate delivery information, being available to receive products during the specified delivery window, and ensuring appropriate refrigeration is available immediately upon receipt. In cases of delivery failure due to incorrect address, recipient unavailability, or refusal to accept delivery, additional delivery charges may apply for rescheduling. We offer subscription services for regular milk delivery, which can be modified, paused, or canceled according to the terms specified in your subscription agreement, typically requiring advance notice for changes to ensure proper planning of production and delivery logistics.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Returns and refunds for dairy products are handled according to our Quality Assurance Policy, which provides for replacement or refund in cases where products are delivered damaged, spoiled, or significantly deviate from quality standards, provided such issues are reported within the specified timeframe and supported by appropriate evidence. Due to the perishable nature of dairy products, we generally do not accept returns for change of mind or preference issues, though we are committed to addressing genuine quality concerns to ensure customer satisfaction. All product descriptions, nutritional information, and health claims are provided for informational purposes based on our testing and quality standards, but individual experiences may vary, and we recommend consulting healthcare professionals for specific dietary advice or concerns. Customers with allergies or specific health conditions should carefully review product information and consult medical professionals before consuming our dairy products, as we process milk in facilities that may handle other allergens, despite our stringent cleaning and separation protocols.
              </p>
            </div>
          </div>

          {/* Agent Terms */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Agent Partnership Terms</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                The AmruthDhan Agent Partnership Program offers individuals and entities the opportunity to represent our brand, promote our dairy products, and introduce potential investors to our platform in exchange for commissions and other benefits as outlined in the specific Agent Agreement. Agent appointments are subject to application review, background verification, and acceptance by the Company, with no automatic right to partnership regardless of qualifications or experience. Approved agents must comply with all terms of the Agent Agreement, these general Terms, and any additional guidelines provided by the Company regarding representation, marketing practices, commission structures, and ethical standards. Agents act as independent representatives, not employees of Anand Foods Limited, and are responsible for their own expenses, taxes, insurance, and compliance with applicable laws governing their activities, including but not limited to regulations related to direct selling, financial promotions, and consumer protection in their respective jurisdictions.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Commission payments to agents are calculated based on the specific terms outlined in the Agent Agreement, typically including percentages of investment amounts introduced, bonuses for achieving targets, and sometimes overrides on subsequent investments by referred clients. Commissions are subject to verification of successful completion of investments, fulfillment of any holding periods, and compliance with all applicable terms and conditions. The Company reserves the right to modify commission structures, introduce new incentive programs, or change partnership terms with reasonable notice to agents, though existing agreements will generally be honored according to their original terms for the duration specified. Agents must maintain accurate records of their activities, provide regular reports as requested by the Company, and adhere to ethical marketing practices that accurately represent our products and investment opportunities without exaggeration, misrepresentation, or pressure tactics that might compromise the informed decision-making of potential customers or investors.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The Agent Partnership may be terminated by either party according to the terms specified in the Agent Agreement, typically involving notice periods and settlement of any outstanding commissions or obligations. Grounds for immediate termination by the Company include but are not limited to: violation of these Terms or the Agent Agreement, engagement in fraudulent or unethical practices, misrepresentation of the Company or its offerings, failure to maintain required standards of conduct, or any activity that damages the reputation or interests of AmruthDhan. Upon termination, agents must cease all representation of the Company, return any marketing materials or proprietary information, and settle any outstanding obligations. The Company reserves the right to withhold commission payments during investigation of suspected violations or following termination if breaches of agreement are confirmed, with detailed dispute resolution procedures outlined in the Agent Agreement and these Terms. Agents are expressly prohibited from making binding commitments on behalf of the Company, modifying investment terms, or providing guarantees beyond those officially published by AmruthDhan, and any such unauthorized representations will not be binding on the Company.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Limitation of Liability and Indemnification</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                To the maximum extent permitted by applicable law, Anand Foods Limited, its directors, officers, employees, agents, affiliates, successors, and assigns shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the Services; (iii) any content obtained from the Services; (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose. Our total cumulative liability to you for all claims arising from or related to these Terms or your use of our Services shall not exceed the total amount of fees actually paid by you to us in the twelve (12) months preceding the event giving rise to the claim, or one hundred Indian rupees (₹100), whichever is greater.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                You agree to defend, indemnify, and hold harmless Anand Foods Limited and its subsidiaries, affiliates, officers, agents, employees, and partners from any claim, demand, loss, damage, cost, or liability (including reasonable attorneys' fees) arising out of or relating to: (a) your use of or conduct in connection with the Services; (b) your violation of these Terms; (c) your violation of any rights of any third party, including investors, customers, or other users; (d) your violation of any applicable laws, rules, or regulations; (e) any content you submit, post, or transmit through the Services; (f) your investment decisions or recommendations made to others based on information obtained through our platform; or (g) your interactions with other users of the Services. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which case you will cooperate with us in asserting any available defenses and reimburse us for all costs and expenses incurred in connection with such defense. This indemnification obligation will survive the termination of these Terms and your use of the Services.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Notwithstanding the foregoing limitations, nothing in these Terms shall limit or exclude liability for: (a) death or personal injury caused by our negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be limited or excluded by applicable law. These limitations of liability reflect the allocation of risk between the parties and form an essential basis of the bargain between you and AmruthDhan. The limitations specified in this section will apply even if any limited remedy fails of its essential purpose. Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations and exclusions may not apply to you to the extent such jurisdiction's law is applicable to these Terms and your use of the Services. In such cases, our liability will be limited to the greatest extent permitted by applicable law. You acknowledge and agree that the consideration reflected in the pricing of our products and services, if any, and the terms of these Terms have been set in reliance upon the limitations of liability set forth herein, and that such limitations represent an essential element of the agreement between the parties.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                For any questions, clarifications, or concerns regarding these Terms and Conditions, please contact our legal department:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 font-semibold mb-2">AmruthDhan Legal Department</p>
                <p className="text-gray-700 mb-1">Anand Foods Limited</p>
                <p className="text-gray-700 mb-1">Corporate Office, Legal Wing</p>
                <p className="text-gray-700 mb-1">Hyderabad, Telangana 500032, India</p>
                <p className="text-gray-700 mb-1">Email: legal@amruthdhan.com</p>
                <p className="text-gray-700">Phone: +91-40-8765-4321</p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions constitute the entire agreement between you and AmruthDhan regarding the subject matter herein and supersede all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between you and AmruthDhan. A printed version of these Terms and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to these Terms to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. Our failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. If any provision of these Terms is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of these Terms remain in full force and effect. The section titles in these Terms are for convenience only and have no legal or contractual effect.
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

export default TermsConditions;