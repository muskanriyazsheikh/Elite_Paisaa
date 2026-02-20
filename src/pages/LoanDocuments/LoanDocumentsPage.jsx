import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Wallet, Home, Car, GraduationCap, Briefcase, CreditCard, 
  Heart, FileText, CheckCircle, ArrowLeft, ArrowRight, Upload, X, FileCheck, Eye
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
  const [uploadedDocs, setUploadedDocs] = useState({});
  
  const loan = loanData[loanType];

  const [previewDoc, setPreviewDoc] = useState(null);

  const handleFileUpload = (docName, file) => {
    const fileUrl = URL.createObjectURL(file);
    setUploadedDocs(prev => ({
      ...prev,
      [docName]: { file, url: fileUrl }
    }));
  };

  const handleRemoveFile = (docName) => {
    setUploadedDocs(prev => {
      const newDocs = { ...prev };
      delete newDocs[docName];
      return newDocs;
    });
  };

  const getAllDocuments = () => {
    if (loan.documents) return loan.documents;
    if (loan.sections) {
      return loan.sections.flatMap(section => section.documents);
    }
    return [];
  };

  const allDocs = getAllDocuments();
  const uploadedCount = Object.keys(uploadedDocs).length;
  const totalDocs = allDocs.length;
  
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

        {/* Upload Progress */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-blue-900">Document Upload Progress</span>
            <span className="text-blue-700 font-bold">{uploadedCount} / {totalDocs}</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${totalDocs > 0 ? (uploadedCount / totalDocs) * 100 : 0}%` }}
            ></div>
          </div>
          <p className="text-sm text-blue-600 mt-2">
            {uploadedCount === totalDocs ? 'All documents uploaded! You can now apply.' : 'Please upload all required documents'}
          </p>
        </div>

        {/* Documents List with Upload */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <FileText className="text-blue-600" size={28} />
              Required Documents
            </h3>
            <p className="text-gray-500 mt-2">Upload all documents to proceed with your application</p>
          </div>

          <div className="divide-y divide-gray-100">
            {allDocs.map((doc, idx) => (
              <div key={idx} className="p-6 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-start gap-3 flex-1">
                  {uploadedDocs[doc] ? (
                    <FileCheck className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  ) : (
                    <CheckCircle className="text-gray-400 flex-shrink-0 mt-0.5" size={20} />
                  )}
                  <div>
                    <span className={`block ${uploadedDocs[doc] ? 'text-green-700 font-medium' : 'text-gray-700'}`}>
                      {doc}
                    </span>
                    {uploadedDocs[doc] && (
                      <span className="text-sm text-green-600">
                        {uploadedDocs[doc].name}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="ml-4 flex items-center gap-2">
                  {uploadedDocs[doc] ? (
                    <>
                      <button
                        onClick={() => setPreviewDoc({ name: doc, ...uploadedDocs[doc] })}
                        className="flex items-center gap-1 bg-green-100 hover:bg-green-200 text-green-700 px-3 py-2 rounded-lg transition-colors"
                        title="Preview document"
                      >
                        <Eye size={16} />
                        <span className="text-sm font-medium">Preview</span>
                      </button>
                      <button
                        onClick={() => handleRemoveFile(doc)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                        title="Remove file"
                      >
                        <X size={18} />
                      </button>
                    </>
                  ) : (
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => e.target.files[0] && handleFileUpload(doc, e.target.files[0])}
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      />
                      <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                        <Upload size={18} />
                        <span className="text-sm font-medium">Upload</span>
                      </div>
                    </label>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Preview Modal */}
        {previewDoc && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">{previewDoc.name}</h3>
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 bg-gray-100 flex items-center justify-center" style={{ minHeight: '400px' }}>
                {previewDoc.file.type.startsWith('image/') ? (
                  <img
                    src={previewDoc.url}
                    alt={previewDoc.name}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                  />
                ) : previewDoc.file.type === 'application/pdf' ? (
                  <iframe
                    src={previewDoc.url}
                    title={previewDoc.name}
                    className="w-full h-[70vh] rounded-lg"
                  />
                ) : (
                  <div className="text-center p-8">
                    <FileText size={64} className="text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Preview not available for this file type</p>
                    <p className="text-sm text-gray-500 mt-2">{previewDoc.file.name}</p>
                    <a
                      href={previewDoc.url}
                      download={previewDoc.file.name}
                      className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Download File
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

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
            disabled={uploadedCount < totalDocs}
            className={`flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-lg transition-colors flex-1 ${
              uploadedCount === totalDocs 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {uploadedCount === totalDocs ? (
              <>
                Apply Now
                <ArrowRight size={20} />
              </>
            ) : (
              <>
                Upload All Documents First
                <span className="text-sm">({uploadedCount}/{totalDocs})</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanDocumentsPage;
