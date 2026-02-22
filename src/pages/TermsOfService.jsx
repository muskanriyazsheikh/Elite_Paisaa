import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0a1121] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Terms of Service</h1>
          {/* <p className="text-gray-400 text-center mt-4">Last updated: {new Date().toLocaleDateString()}</p> */}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Elite Paisa&apos;s website and services, you agree to be bound by these 
              Terms of Service. If you do not agree to all the terms and conditions, you may not access 
              the website or use any services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Loan Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Elite Paisa provides loan aggregation and facilitation services. We connect borrowers 
              with banks and NBFCs (Non-Banking Financial Companies) to help you find suitable loan 
              products. We offer:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Personal Loans</li>
              <li>Home Loans</li>
              <li>Business Loans</li>
              <li>Car Loans</li>
              <li>Education Loans</li>
              <li>Gold Loans</li>
              <li>Marriage Loans</li>
              <li>Loan Against Property</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
            <p className="text-gray-600 leading-relaxed">
              To use our services, you must:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
              <li>Be at least 18 years of age</li>
              <li>Be a resident of India</li>
              <li>Have valid identity and address proof</li>
              <li>Have a regular source of income</li>
              <li>Provide accurate and complete information</li>
              <li>Upload all required documents</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Document Requirements</h2>
            <p className="text-gray-600 leading-relaxed">
              All loan applications require submission of specific documents based on loan type. 
              Documents may include PAN card, Aadhaar card, income proof, bank statements, and 
              property documents. You agree to provide authentic documents. Providing false 
              information or forged documents is a criminal offense and will result in immediate 
              rejection of your application.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Interest Rates and Fees</h2>
            <p className="text-gray-600 leading-relaxed">
              Interest rates vary by loan type and are determined by our banking partners based on 
              your credit profile. Typical rates are:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
              <li>Personal Loan: 10.70% to 14% per annum</li>
              <li>Home Loan: 7.50% to 9.80% per annum</li>
              <li>Business Loan: 15% to 20% per annum</li>
              <li>Car Loan: 10.45% to 15.60% per annum</li>
              <li>Education Loan: 8.90% to 10% per annum</li>
              <li>Gold Loan: 7.50% to 9.95% per annum</li>
              <li>Marriage Loan: 10.30% to 13.60% per annum</li>
              <li>Loan Against Property: 11.99% to 18.99% per annum</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Processing fees and other charges may apply as per the respective bank&apos;s policies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Repay loans as per the agreed schedule</li>
              <li>Not use our services for any illegal purposes</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Credit Check</h2>
            <p className="text-gray-600 leading-relaxed">
              By applying for a loan, you authorize us and our banking partners to conduct credit 
              checks through credit bureaus such as CIBIL, Experian, or Equifax. This may impact 
              your credit score.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Elite Paisa acts as a loan facilitator and is not a lender. We are not responsible 
              for loan approval decisions, which are made solely by our banking partners. We do 
              not guarantee loan approval or specific interest rates.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, 
              Maharashtra.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions regarding these Terms of Service, please contact us:
            </p>
            <div className="mt-4 text-gray-600">
              <p>Email: info@elitepaisa.in</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: 1st Floor Mohota Complex, Above State Bank Of India, Katol Road, Chhaoni Rd, Nagpur, Maharashtra, 440013</p>
            </div>
          </section>

          <div className="border-t pt-8 mt-8">
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
