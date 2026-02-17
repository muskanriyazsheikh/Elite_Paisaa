import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Need a lower monthly payment plan?",
    answer: "There are many variations of passages of the have suffered in some to injected humour, or words believable. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question: "Want to study at prestigious university?",
    answer: "We offer specialized education loans that cover tuition fees, living expenses, and travel costs with a moratorium period that allows you to focus on your studies first."
  },
  {
    question: "Want to invest and don't have money?",
    answer: "Our flexible personal loans can act as a bridge for your investment needs, offering competitive rates so your ROI stays high while your interest costs stay manageable."
  },
  {
    question: "What documents are required for a loan?",
    answer: "Standard documentation includes identity proof, address proof, income statements (salary slips or ITR), and bank statements from the last six months."
  },
  {
    question: "Is there a penalty for early repayment?",
    answer: "At Elite Paisaa, we believe in financial freedom. Most of our loan products come with zero or minimal prepayment charges after a certain tenure."
  },
  {
    question: "How long does the loan approval process take?",
    answer: "With Elite Paisaa, most personal loans are approved within 24 to 48 hours after document verification, ensuring you get funds when you need them most."
  }
];

const FAQPage = () => {
  const [activeIdx, setActiveIdx] = useState(0); // First one open by default

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section with Dark Overlay */}
      <div className="relative h-[300px] bg-[#0a1121] flex flex-col justify-center px-10 md:px-20 text-white">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <p className="text-sm font-bold bg-white/10 w-fit px-3 py-1 rounded mb-4">Home / FAQ's</p>
          <h1 className="text-5xl font-black tracking-tighter">FAQ's</h1>
        </div>
      </div>

      {/* 2. Main Content Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
          
          {/* Left Side: Accordion (FAQs) */}
          <div className="w-full lg:w-2/3 space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm bg-[#f4f7f9]">
                <button 
                  onClick={() => setActiveIdx(activeIdx === index ? -1 : index)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-all ${
                    activeIdx === index ? 'bg-white shadow-md' : 'bg-transparent'
                  }`}
                >
                  <span className={`font-bold text-lg ${activeIdx === index ? 'text-blue-600' : 'text-slate-700'}`}>
                    {item.question}
                  </span>
                  <span className="text-xl font-bold">
                    {activeIdx === index ? '−' : '+'}
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeIdx === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-6 text-gray-500 leading-relaxed border-t border-gray-50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side: Contact Image Card */}
          <div className="w-full lg:w-1/3 sticky top-24">
            <div className="relative rounded-xl overflow-hidden shadow-2xl group">
              {/* Indian Professional Image */}
              <img 
                src="https://images.rawpixel.com/image_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjNfMS5qcGc.jpg" 
                alt="Support Head" 
                className="w-full h-[550px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Blue Calling Banner */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0051a1] p-6 text-white flex items-center gap-4">
                <div className="flex-shrink-0">
                  {/* Matching Headset Icon */}
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Call Anytime</p>
                  <p className="text-xl font-black tracking-tight underline decoration-1 underline-offset-4">
                     (+91) 98123 0000
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQPage;