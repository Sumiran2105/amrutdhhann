import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <div className="h-1 w-32 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Welcome to AmruthDhan, the flagship milk division of Anand Foods, dedicated to delivering pure, unadulterated buffalo milk through a transparent and sustainable ecosystem. This comprehensive Privacy Policy outlines our unwavering commitment to protecting your privacy and personal information as you engage with our platform, whether as a consumer, investor, agent, or partner. At AmruthDhan, we recognize that trust is the cornerstone of our relationship with you, and we treat your personal data with the same level of care and respect that we apply to our dairy production processes. This document explains in detail how we collect, use, store, protect, and share your information across all touchpoints of your interaction with AmruthDhan, including but not limited to our website, mobile applications, investment platforms, customer service channels, and distribution networks. We are committed to maintaining the highest standards of data protection in compliance with applicable laws and regulations, including the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023, ensuring that your journey with us remains secure, transparent, and aligned with our core values of purity and authenticity.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Your privacy is not merely a legal obligation for us but a fundamental aspect of our ethical framework. As we strive to become Asia's largest integrated dairy enterprise, we understand that the data you share with us enables us to provide personalized services, improve your experience, and build a sustainable community around healthy dairy consumption and ethical investment. This policy applies to all users of AmruthDhan services, regardless of geographical location, and covers all forms of data collection, from basic contact information to detailed investment profiles and consumption patterns. We encourage you to read this policy thoroughly to understand our practices and your rights concerning your personal information. Should you have any questions or concerns about our privacy practices, we have established clear communication channels for you to reach out to our dedicated privacy team, ensuring that your queries are addressed with the same diligence we apply to quality control in our dairy farms.
              </p>
            </div>
          </div>

          {/* Information Collection */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan collects various types of information to provide you with seamless services, facilitate investment opportunities, ensure product delivery, and enhance your overall experience with our ecosystem. This collection occurs through multiple channels, including direct interactions when you register on our platform, make investments, purchase our dairy products, subscribe to our newsletters, participate in surveys, or communicate with our customer support team. The information we gather can be broadly categorized into personal identification data (such as your full name, date of birth, gender, photograph, and government-issued identification numbers), contact information (including email addresses, telephone numbers, and physical addresses), financial data (bank account details, payment information, transaction history, and investment records), technical information (IP addresses, browser type, device identifiers, operating system, and usage patterns), and preference data (your product choices, consumption habits, feedback, and communication preferences).
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                For our investment partners, we collect additional detailed information necessary for regulatory compliance and service delivery, including Know Your Customer (KYC) documentation, proof of address, income verification documents, risk profiling questionnaires, and investment objectives. This comprehensive data collection enables us to tailor our services to your specific needs, ensure regulatory compliance, prevent fraudulent activities, and provide you with personalized recommendations and updates about your investments and our dairy products. We employ advanced encryption technologies and secure protocols during data transmission and storage, ensuring that your sensitive information remains protected against unauthorized access. It is important to note that we only collect information that is necessary for the purposes stated in this policy and that we obtain your explicit consent before collecting any sensitive personal data, maintaining transparency throughout our engagement with you.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                In addition to information you provide directly, we may collect data automatically through cookies and similar tracking technologies when you visit our website or use our mobile applications. These technologies help us understand user behavior, optimize website performance, personalize content, and deliver targeted advertisements about our dairy products and investment opportunities. We also collect aggregated and anonymized data for analytical purposes, which helps us improve our services, develop new products, and understand market trends without identifying individual users. This analytical data forms the foundation of our continuous improvement efforts, enabling us to enhance both our dairy production processes and our customer engagement strategies. We maintain strict protocols to ensure that automatically collected data is processed in accordance with this policy and applicable laws, with clear options for you to manage your cookie preferences through our website settings.
              </p>
            </div>
          </div>

          {/* Data Usage */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                At AmruthDhan, we utilize the information we collect for multiple legitimate purposes that align with our mission of delivering pure dairy products and sustainable investment opportunities. Primarily, we use your personal data to process and manage your investments in our dairy ecosystem, including calculating monthly returns, facilitating timely payments, maintaining accurate records of your investment portfolio, and providing comprehensive statements and updates about your financial engagement with AmruthDhan. For our dairy product customers, we use your information to process orders, arrange deliveries, manage subscriptions, handle payments, and provide customer support, ensuring that you receive fresh, pure buffalo milk and related products according to your preferences and schedule. We also employ your data to communicate important updates about our services, including changes to terms and conditions, new product offerings, seasonal promotions, and maintenance notifications that might affect your experience with our platform.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Beyond transactional purposes, we analyze user data to enhance our services and develop new offerings that better meet your needs. This includes conducting market research, analyzing consumption patterns, evaluating investment trends, and gathering feedback to improve our dairy products, investment models, and customer service approaches. We use your information to personalize your experience by recommending products based on your purchase history, suggesting investment opportunities aligned with your financial profile, and tailoring communications to your interests and preferences. For regulatory and security purposes, we employ your data to verify identities, prevent fraudulent activities, comply with legal obligations, conduct audits, and maintain the integrity of our platform. These uses are essential for protecting both your interests and the stability of the AmruthDhan ecosystem, ensuring that our operations remain transparent, secure, and trustworthy for all stakeholders.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Furthermore, we use aggregated and anonymized data for strategic planning and business development, helping us identify growth opportunities, optimize our supply chain, improve animal welfare practices, and expand our market presence both domestically and internationally. This analytical approach supports our vision of becoming Asia's largest dairy enterprise by enabling data-driven decisions that enhance operational efficiency, product quality, and customer satisfaction. We may also use your contact information to send you newsletters, educational content about dairy nutrition, updates about our sustainability initiatives, and information about community events, always providing you with clear opt-out options for marketing communications. In all cases, our use of your information is guided by the principles of necessity, proportionality, and transparency, with robust safeguards to prevent unauthorized or excessive processing of your personal data.
              </p>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing and Disclosure</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan maintains a principled approach to sharing your personal information, recognizing that your trust depends on our responsible handling of your data. We do not sell, rent, or trade your personal information to third parties for marketing purposes without your explicit consent. However, we may share your data with trusted partners and service providers who assist us in operating our platform, delivering our services, and achieving our business objectives. These entities include payment processors who facilitate investment transactions and product purchases, logistics partners who manage the delivery of our dairy products, cloud service providers who host our digital infrastructure, customer relationship management platforms that help us maintain communication with you, and professional advisors such as legal counsel, auditors, and consultants who support our compliance and operational needs. All third-party service providers are carefully vetted and bound by strict contractual obligations to protect your data, use it only for specified purposes, and comply with applicable privacy laws and regulations.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We may also disclose your information when required by law, regulation, legal process, or governmental request, including to comply with court orders, respond to regulatory inquiries, or cooperate with law enforcement investigations. Such disclosures are made in accordance with applicable legal procedures and with appropriate safeguards to protect your rights and interests. In the context of business transitions, such as mergers, acquisitions, or asset sales, your personal information may be transferred to the relevant successor entity, subject to the same privacy commitments outlined in this policy. Additionally, we may share aggregated, anonymized statistical data with research institutions, industry partners, and stakeholders to advance dairy industry knowledge, promote sustainable farming practices, and contribute to agricultural development, ensuring that no individual can be identified from such shared information.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                For our investment community, we may share necessary information with financial institutions, regulatory bodies, and compliance agencies as required by investment regulations and anti-money laundering laws. This includes sharing KYC documents, transaction records, and identification details with authorized entities to verify identities, prevent financial crimes, and ensure regulatory compliance. We maintain detailed records of all data sharing activities, including the purpose, recipients, and legal basis for each disclosure, and we regularly review our data sharing practices to ensure they remain aligned with our privacy commitments and your reasonable expectations. You will be notified of any significant changes to our data sharing practices through updates to this policy, with clear explanations of how these changes might affect your privacy rights and options.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security Measures</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan implements comprehensive, multi-layered security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction, reflecting the same commitment to quality and safety that defines our dairy production processes. Our security framework incorporates advanced technological safeguards, including end-to-end encryption for data in transit and at rest, secure socket layer (SSL) technology for web communications, tokenization for payment information, and robust firewalls and intrusion detection systems to monitor and prevent unauthorized access to our networks. We employ industry-standard authentication protocols, including multi-factor authentication for sensitive operations, role-based access controls that limit employee access to personal data based on job requirements, and regular security audits to identify and address potential vulnerabilities in our systems. These technical measures are complemented by physical security controls at our data centers and offices, ensuring comprehensive protection across all storage and processing environments.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our organizational security practices include comprehensive employee training programs on data protection principles and privacy regulations, strict confidentiality agreements for all personnel with access to personal information, and clear internal policies governing data handling, retention, and disposal. We maintain incident response plans to effectively address any potential data breaches, with procedures for timely notification to affected individuals and regulatory authorities as required by law. Regular vulnerability assessments and penetration testing help us proactively identify and remediate security weaknesses, while data backup and disaster recovery systems ensure business continuity and data integrity in the event of technical failures or unforeseen circumstances. We also conduct periodic privacy impact assessments to evaluate the effectiveness of our security measures and identify opportunities for enhancement, ensuring that our protections evolve in response to emerging threats and technological developments.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Despite our rigorous security measures, it is important to recognize that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security of your personal information. However, we commit to implementing reasonable and appropriate safeguards based on the sensitivity of the data, the state of technological development, and the costs of implementation. We encourage you to play an active role in protecting your information by using strong, unique passwords for your AmruthDhan account, enabling available security features such as two-factor authentication, keeping your login credentials confidential, and being cautious about sharing personal information in unsecured environments. If you suspect any unauthorized access to your account or believe your interaction with us is no longer secure, please immediately notify our privacy team through the contact information provided in this policy, enabling us to take prompt investigative and remedial actions to protect your data and restore the integrity of our systems.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our dedicated Privacy Team at:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 font-semibold mb-2">AmruthDhan Privacy Office</p>
                <p className="text-gray-700 mb-1">Anand Foods Limited</p>
                <p className="text-gray-700 mb-1">Dairy Complex, Sustainable Agriculture Zone</p>
                <p className="text-gray-700 mb-1">Hyderabad, Telangana 500032, India</p>
                <p className="text-gray-700 mb-1">Email: privacy@amruthdhan.com</p>
                <p className="text-gray-700">Phone: +91-40-1234-5678</p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                We are committed to addressing your privacy concerns promptly and transparently. Our privacy team typically responds to inquiries within 7-10 business days, though complex requests may require additional time for thorough investigation and response. For formal complaints regarding our privacy practices, we have established an internal grievance redressal mechanism to ensure fair and timely resolution. You also have the right to lodge complaints with relevant data protection authorities if you believe our processing of your personal information violates applicable laws. We regularly review and update this Privacy Policy to reflect changes in our practices, legal requirements, and stakeholder feedback, with the most current version always available on our website. We encourage you to periodically review this policy to stay informed about how we are protecting your personal information and upholding your privacy rights in our shared journey toward sustainable dairy production and ethical investment.
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

export default PrivacyPolicy;