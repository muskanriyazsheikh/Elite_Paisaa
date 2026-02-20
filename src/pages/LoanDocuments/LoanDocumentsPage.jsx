import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Wallet, Home, Car, GraduationCap, Briefcase, CreditCard, 
  Heart, FileText, CheckCircle, ArrowLeft, ArrowRight 
} from 'lucide-react';

const loanData = {
  'personal': {
    title: 'Personal Loan',
    icon: Wallet,
    interestRate: '10.70% to 14%',
    description: 'Get instant personal loans for your needs with flexible repayment options.',
    documents: [
      'Pan card',
      'Adhar card',
      'Ownership light bill',
      'Last 3 month salary slip',
      'Last 6 month bank statement',
      'Form 16'
    ],
    notes: [
      'As per profile',
      'Depending on credit score'
    ]
  },
  'home': {
    title: 'Home Loan',
    icon: Home,
    interestRate: '7.50% to 9.80%',
    description: 'Make your dream home a reality with our affordable home loan options.',
    sections: [
      {
        title: 'Salaried Persons',
        documents: [
          'Pan card',
          'Adhar card',
          'Ownership light bill',
          'Last 3 month salary slip',
          'Last 6 month bank statement',
          'Form 16'
        ]
      },
      {
        title: 'Property Documents',
        documents: [
          'Title Deed/Sale Deed: Establishes current ownership',
          'Sale Agreement: Agreement to buy/sell the property',
          'Link Documents: Previous title deeds showing chain of ownership',
          'Approved Building Plan: From local authority',
          'Occupancy Certificate (OC) & Completion Certificate (CC)',
          'Allotment Letter: From builder/society/housing board',
          'Tax Receipts: Latest property/land tax receipts',
          'Encumbrance Certificate (EC): Shows no legal dues',
          'NOCs: From builder/society/local authorities',
          'Payment Receipts: Proof of payments made'
        ]
      }
    ],
    notes: ['Depending on credit score']
  },
  'car': {
    title: 'Car Loan',
    icon: Car,
    interestRate: '10.45% to 15.60%',
    description: 'Drive your dream car with our low-interest car loan offerings.',
    sections: [
      {
        title: 'Salaried Individuals',
        documents: [
          'Valid Passport or Permanent Driving Licence',
          'Voters ID Card or Job card issued by NREGA',
          'Aadhaar Card (with consent letter)',
          'Latest salary slip and Form 16',
          'Bank statements for previous 6 months'
        ]
      },
      {
        title: 'Self-Employed (Sole Proprietorship)',
        documents: [
          'Valid Passport or Driving Licence',
          'Voters ID Card',
          'Latest Income Tax Returns (ITR)',
          'Bank statement of previous 6 months'
        ]
      },
      {
        title: 'Partnership Firms',
        documents: [
          'Audited Balance Sheet (2 years)',
          'Profit and Loss Account (2 years)',
          'Company ITR (2 years)',
          'Telephone Bill, Electricity Bill',
          'Shop and Establishment Act Certificate',
          'Bank statement (6 months)'
        ]
      },
      {
        title: 'Private/Public Limited Companies',
        documents: [
          'Audited Balance Sheet (2 years)',
          'Profit and Loss Account (2 years)',
          'Company ITR (2 years)',
          'Telephone Bill, Electricity Bill',
          'SSI Registered Certificate',
          'Bank statement (6 months)'
        ]
      }
    ]
  },
  'education': {
    title: 'Education Loan',
    icon: GraduationCap,
    interestRate: '8.90% to 10%',
    description: 'Invest in your future with our education loan for higher studies.',
    sections: [
      {
        title: 'Student Documents',
        documents: [
          'Identity & Address Proof: Aadhaar, Passport, Voter ID',
          'Academic Records: 10th, 12th, Graduation mark sheets',
          'Entrance exam results (JEE, CAT, GRE, TOEFL)',
          'Admission Proof: Offer letter from institution, I-20 for USA',
          'Cost Details: Schedule of expenses/fee structure',
          'Gap Certificate: If there\'s a gap in studies'
        ]
      },
      {
        title: 'Co-applicant/Guarantor Documents',
        documents: [
          'Identity & Address Proof: PAN card, Aadhaar, Passport',
          'Income Proof (Salaried): Last 3 months salary slips, Form 16',
          'Income Proof (Self-Employed): Last 2 years ITRs, P&L statements',
          'Bank Statements: For both student and co-applicant',
          'Collateral Documents: If loan requires security'
        ]
      }
    ]
  },
  'business': {
    title: 'Business Loan',
    icon: Briefcase,
    interestRate: '15% to 20%',
    description: 'Grow your business with our customized business loan solutions.',
    sections: [
      {
        title: 'Proprietorship Documents',
        documents: [
          'Pan card',
          'Adhar card',
          'Ownership light bill',
          'Last 3 year ITR',
          'Last 1 year bank statement (All bank)',
          'Business proof: GST certificate, Gumasta',
          'Office light bill'
        ]
      },
      {
        title: 'Partnership Documents',
        documents: [
          'Pan card (All Partners)',
          'Adhar card (All Partners)',
          'Ownership light bill',
          'Last 3 year ITR Partnership form',
          'Last 1 year bank statement (All bank)',
          'GST certificate, partnership deed',
          'All partner individual last 3 year ITR',
          'Office agreement & light bill'
        ]
      },
      {
        title: 'Private Limited Documents',
        documents: [
          'Personal & Director KYC: Pan, Aadhaar, Passport',
          'Certificate of incorporation',
          'MOA & AOA',
          'Company pan card, GST certificate',
          'Last 3 years company & director ITR',
          'Audited financial: Balance sheet, P&L, Cash flow',
          'Business bank statement (1 year)',
          'Business profile on letter head',
          'Board Resolution for loan'
        ]
      }
    ],
    notes: ['As per profile', 'Depending on credit score']
  },
  'gold': {
    title: 'Gold Loan',
    icon: CreditCard,
    interestRate: '7.50% to 9.95%',
    description: 'Get quick loans against your gold with minimal documentation.',
    documents: [
      'Valid passport (not expired)',
      'Valid driving license (not expired)',
      'Voter\'s ID card',
      'Aadhaar card issued by UIDAI',
      'PAN card or Form 60',
      'One passport-size photograph',
      'Agri-allied occupation documentation (for agriculture customers)'
    ]
  },
  'lap': {
    title: 'Loan Against Property',
    icon: Home,
    interestRate: '11.99% to 18.99%',
    description: 'Unlock the value of your property with our LAP solutions.',
    sections: [
      {
        title: 'Basic Documents',
        documents: [
          'Application Form: Duly filled with photos',
          'KYC Documents: PAN Card, Aadhaar, Passport',
          'Address Proof: Aadhaar, Passport, Utility Bill',
          'Photographs: Passport-sized'
        ]
      },
      {
        title: 'Salaried Individuals',
        documents: [
          'Salary Slips: Latest 3-6 months',
          'Bank Statements: Salary account, last 6 months',
          'Form 16: Last 2 years',
          'IT Returns (ITR): Last 2 years'
        ]
      },
      {
        title: 'Self-Employed/Professionals',
        documents: [
          'IT Returns & Financials: Audited statements (2-3 years)',
          'Bank Statements: Personal & Business (6-12 months)',
          'Business Proof: Registration/License'
        ]
      },
      {
        title: 'Property Documents',
        documents: [
          'Title Deed/Sale Deed: Original documents proving ownership',
          'Approved Building Plan: Sanctioned by local authority',
          'Property Tax Receipts: Latest payments',
          'NOC: From builder/society',
          'Sale Agreement/Allotment Letter'
        ]
      }
    ],
    notes: ['Depending on credit score']
  },
  'marriage': {
    title: 'Marriage Loan',
    icon: Heart,
    interestRate: '10.30% to 13.60%',
    description: 'Make your special day memorable with our marriage loan.',
    documents: [
      'Identity Proof: Aadhaar Card, PAN Card, Voter ID, Passport',
      'Address Proof: Aadhaar, Passport, Utility Bills',
      'Income Proof: Salary slips (2-3 months), Bank statements (3-6 months)',
      'Form 16 or IT Returns (if self-employed)',
      'Employment Proof: Employee ID card, appointment letter',
      'Photographs: Latest passport-sized photos'
    ]
  }
};

const LoanDocumentsPage = () => {
  const { loanType } = useParams();
  const navigate = useNavigate();
  
  const loan = loanData[loanType];
  
  if (!loan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Loan Type Not Found</h2>
          <button 
            onClick={() => navigate('/services')}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = loan.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl py-12 pb-20">
        {/* Interest Rate Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg mb-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <IconComponent size={32} />
            </div>
            <div>
              <p className="text-blue-100 text-sm">Interest Rate</p>
              <h2 className="text-3xl font-bold">{loan.interestRate}</h2>
              {loan.notes && (
                <div className="flex gap-4 mt-2">
                  {loan.notes.map((note, idx) => (
                    <span key={idx} className="text-xs bg-white/20 px-3 py-1 rounded-full">
                      {note}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <FileText className="text-blue-600" size={28} />
              Required Documents
            </h3>
          </div>

          {loan.sections ? (
            // Multiple sections
            <div className="divide-y divide-gray-100">
              {loan.sections.map((section, idx) => (
                <div key={idx} className="p-8">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.documents.map((doc, docIdx) => (
                      <li key={docIdx} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            // Single list
            <div className="p-8">
              <ul className="space-y-3">
                {loan.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button 
            onClick={() => navigate('/services')}
            className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 px-8 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </button>
          <button 
            onClick={() => navigate('/apply')}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors flex-1"
          >
            Apply Now
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanDocumentsPage;
