import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Refund and Cancellation Policy
          </h1>
          <div className="h-1 w-32 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Comprehensive Policy for Dairy Products and Investment Services
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                This comprehensive Refund and Cancellation Policy ("Policy") outlines the terms, conditions, and procedures governing refunds, cancellations, returns, and related matters for all transactions conducted through AmruthDhan, the flagship milk division of Anand Foods Limited. This Policy applies to two distinct categories of our offerings: (1) Dairy Products and Consumer Services encompassing the purchase of pure buffalo milk, related dairy items, subscriptions, and associated delivery services; and (2) Investment Services covering participation in our investment programs, including the flagship model wherein investors contribute ₹5,00,000 and receive monthly returns with principal refund at maturity. Each category operates under different refund and cancellation principles reflecting the nature of the products/services, regulatory considerations, and practical constraints. By engaging with AmruthDhan's platform, making purchases, entering investment agreements, or using our services, you acknowledge that you have read, understood, and agreed to be bound by this Policy in its entirety, along with our Terms and Conditions, Privacy Policy, and any specific agreements governing individual transactions.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                It is imperative to recognize that dairy products and investment opportunities represent fundamentally different categories with distinct characteristics, risks, and operational considerations. Dairy products are perishable consumer goods subject to biological variations, storage requirements, and immediate consumption timelines, necessitating specific refund approaches focused on quality assurance and customer satisfaction. Investment opportunities, conversely, represent long-term financial commitments to a business enterprise, subject to contractual terms, regulatory frameworks, and inherent business risks, requiring different cancellation and refund mechanisms that balance investor protection with business sustainability. This Policy clearly delineates the applicable rules for each category, providing transparency and predictability while acknowledging the practical realities of operating a dual-focused enterprise that combines dairy production with investment facilitation. We encourage all users to carefully review the relevant sections of this Policy before making purchase or investment decisions to ensure clear understanding of refund eligibility, procedures, timelines, and limitations.
              </p>
            </div>
          </div>

          {/* Dairy Products Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dairy Products Refund Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan is committed to delivering 100% pure, high-quality buffalo milk and related dairy products that meet stringent quality standards and customer expectations. Our refund policy for dairy products is designed to ensure customer satisfaction while acknowledging the practical realities of perishable goods, supply chain logistics, and product characteristics. Refunds or replacements for dairy products are available under specific circumstances outlined in this section, primarily focused on quality issues, delivery problems, or significant deviations from product specifications. Due to the perishable nature of dairy products and hygiene considerations, we generally do not accept returns or provide refunds for change of mind, taste preferences, minor variations in product characteristics, or situations where proper storage and handling after delivery cannot be verified. All refund requests for dairy products must be initiated within 24 hours of delivery or the issue becoming apparent, supported by appropriate evidence such as photographs, detailed descriptions, or in some cases, retention of the product for quality inspection by our team.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Eligible grounds for dairy product refunds or replacements include: (1) products delivered in spoiled, rancid, or otherwise unsafe condition for consumption when proper storage can be verified; (2) significant deviation from advertised specifications such as noticeable adulteration, contamination, or foreign materials; (3) damaged packaging that compromises product safety or quality; (4) delivery of incorrect products or quantities compared to the order; (5) delivery failures where products are not received within the promised timeframe due to Company error (excluding circumstances beyond our reasonable control such as extreme weather, traffic disruptions, or recipient unavailability). For subscription services, customers may cancel or modify their subscriptions according to the terms specified in their subscription agreement, typically requiring advance notice (usually 3-7 days) before the next billing cycle to avoid charges for that cycle. Refunds for subscription payments will be prorated based on unused portions of the service period, minus any applicable administrative fees or discounts that need to be reconciled.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The refund process for dairy products typically involves: (1) submitting a refund request through our customer service portal, mobile application, or designated communication channels within the specified timeframe; (2) providing order details, photographs if applicable, and a detailed description of the issue; (3) evaluation by our quality assurance team, which may include requests for additional information, product inspection, or consultation with delivery personnel; (4) resolution through either replacement delivery in the next available slot, credit to the customer's account for future purchases, or in some cases, refund to the original payment method. Refunds to payment methods may take 7-14 business days to process depending on financial institution procedures. For quality issues that require product testing or laboratory analysis, resolution may take additional time, during which we will maintain transparent communication with the customer. We reserve the right to refuse refunds if we determine, based on reasonable evidence, that the product issue resulted from customer mishandling, improper storage, consumption after the recommended period, or failure to follow storage instructions provided with the product.
              </p>
            </div>
          </div>

          {/* Investment Refund Policy */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Refund and Cancellation Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                INVESTMENTS WITH AMRUTHDHAN ARE GENERALLY INTENDED TO BE HELD FOR THE FULL CONTRACTUAL TERM AND ARE NOT DESIGNED AS LIQUID OR SHORT-TERM FINANCIAL INSTRUMENTS. The flagship investment model, wherein an investor contributes ₹5,00,000 and receives ₹10,000 monthly for 15 years with principal refund at maturity, represents a long-term commitment to our dairy business ecosystem and is governed by specific investment agreements that outline rights, obligations, and cancellation provisions. Unlike consumer products or services, investment cancellations and refunds are subject to more stringent conditions, regulatory considerations, and business sustainability factors. Prospective investors should carefully consider their financial situation, liquidity needs, and investment horizon before committing funds, as early cancellation may involve significant restrictions, penalties, or limitations designed to protect the integrity of the investment program and the interests of all stakeholders in our dairy ecosystem.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Under normal circumstances, investments with AmruthDhan do not include a general cancellation right or refund guarantee during the investment term. However, specific circumstances may warrant consideration of cancellation requests, subject to Company discretion, contractual terms, and regulatory requirements. These may include: (1) statutory cooling-off periods as mandated by applicable regulations, typically ranging from 15 to 30 days from the investment date, during which investors may cancel and receive a refund of their investment amount minus any administrative charges, processing fees, or proportionate deductions for services already rendered; (2) material misrepresentation or fraud by the Company in the investment solicitation process, proven through established dispute resolution mechanisms; (3) incapacity or death of the investor, subject to verification and transfer procedures to legal heirs or representatives; (4) regulatory orders or legal requirements mandating cancellation or refund; or (5) mutual agreement between the investor and the Company based on exceptional circumstances, negotiated terms, and business considerations. Each cancellation request is evaluated on a case-by-case basis, considering the investor's situation, investment duration, business impact, and contractual provisions.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The cancellation process for investments involves: (1) submitting a formal written request to our investment relations department with detailed justification, supporting documentation, and investor information; (2) review and evaluation by our investment committee, which may include consultation with legal advisors, assessment of business impact, and consideration of precedent; (3) decision communication within a reasonable timeframe, typically 30-45 days for non-urgent requests; (4) if approved, calculation of settlement amount based on investment duration, returns already paid, administrative costs, and any applicable penalties or adjustments as per the investment agreement; (5) execution of cancellation documentation and settlement payment through agreed channels. Approved refunds may be processed as lump-sum payments or structured settlements based on mutual agreement and business considerations. It is important to note that cancellation approvals are exceptional rather than routine, and investors should not enter investment agreements with expectations of early exit options. The principal refund after 15 years is a contractual commitment contingent upon the Company's financial position and ability to meet obligations at maturity, not a guaranteed right unaffected by business performance or external factors.
              </p>
            </div>
          </div>

          {/* General Provisions */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Provisions and Limitations</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                This Refund and Cancellation Policy operates within the broader framework of our Terms and Conditions, Privacy Policy, and specific agreements governing individual transactions. In case of any conflict between this Policy and specific contractual agreements, the contractual agreements shall prevail to the extent of such conflict. We reserve the right to modify, amend, or update this Policy at any time without prior notice, with changes becoming effective upon posting on our platform. Continued use of our services after such changes constitutes acceptance of the modified Policy. We are not obligated to provide refunds, replacements, or cancellations beyond what is explicitly stated in this Policy or required by applicable law, and any discretionary refunds or accommodations provided in specific cases do not establish precedent or create entitlements for other situations. All refund and cancellation decisions are made at the sole discretion of AmruthDhan, exercised reasonably and in good faith considering the specific circumstances, contractual terms, regulatory requirements, and business considerations.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Refund processing timelines vary based on the nature of the transaction, payment method, and specific circumstances. For dairy product refunds to original payment methods, processing typically takes 7-14 business days after approval, though bank processing times may extend this period. For investment-related refunds, processing may take 30-60 days depending on complexity, verification requirements, and settlement calculations. All refund amounts are calculated in Indian Rupees (₹), and foreign currency transactions will be converted at prevailing exchange rates at the time of refund, potentially resulting in differences from the original transaction amount due to exchange rate fluctuations. We are not responsible for any bank fees, transaction charges, or currency conversion losses incurred during the refund process. In cases where refunds are provided as account credits or vouchers for future purchases, these are typically valid for 6-12 months from issuance and cannot be converted to cash, transferred to third parties, or combined with other offers unless explicitly permitted.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                This Policy does not affect your statutory rights as a consumer under applicable laws, including but not limited to the Consumer Protection Act, 2019, which may provide additional protections or remedies in certain circumstances. If you believe a refund decision violates your statutory rights, you may pursue available legal remedies through appropriate channels. However, we encourage attempting resolution through our internal grievance redressal mechanism first, as we are committed to fair and transparent resolution of refund and cancellation matters. Our customer service and investment relations teams are trained to handle refund requests professionally, explain applicable policies clearly, and seek reasonable solutions within the framework of this Policy and our broader commitments to customer satisfaction and investor relations. We maintain records of all refund and cancellation requests, decisions, and transactions for quality assurance, compliance, and continuous improvement of our policies and processes.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact and Grievance Redressal</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                For refund requests, cancellation inquiries, or policy clarifications, please contact the appropriate department based on your transaction type:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Dairy Products Refunds</h3>
                  <p className="text-gray-700 mb-1">Customer Service Department</p>
                  <p className="text-gray-700 mb-1">Email: customerservice@amruthdhan.com</p>
                  <p className="text-gray-700 mb-1">Phone: +91-40-1111-2222</p>
                  <p className="text-gray-700 text-sm">Available: 8 AM - 8 PM (All days)</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Investment Refunds</h3>
                  <p className="text-gray-700 mb-1">Investment Relations Department</p>
                  <p className="text-gray-700 mb-1">Email: investments@amruthdhan.com</p>
                  <p className="text-gray-700 mb-1">Phone: +91-40-3333-4444</p>
                  <p className="text-gray-700 text-sm">Available: 10 AM - 6 PM (Weekdays)</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                For formal complaints or escalation of refund matters, please address written communications to our Grievance Redressal Officer at grievance@amruthdhan.com or by post to: Grievance Redressal Officer, Anand Foods Limited, Dairy Complex, Sustainable Agriculture Zone, Hyderabad, Telangana 500032, India. We acknowledge receipt of grievances within 48 hours and aim to resolve them within 30 days, with interim updates provided as needed. For unresolved grievances, you may approach relevant consumer forums, investment regulatory bodies, or other dispute resolution mechanisms as per applicable laws. We encourage maintaining clear documentation of all communications, transactions, and issues related to refund requests to facilitate efficient resolution. Our team is committed to handling all refund and cancellation matters with professionalism, fairness, and respect for our customers and investors, balancing individual circumstances with the sustainable operation of our dairy business and investment ecosystem.
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

export default RefundPolicy;