import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoanEligibility = () => {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState(900000);
  const [income, setIncome] = useState(37818);
  const [tenure, setTenure] = useState(13);
  const [interest, setInterest] = useState(10);
  const [otherEmi, setOtherEmi] = useState(0);

  const monthlyEMI = Math.round((loanAmount * (interest/12/100) * Math.pow(1 + (interest/12/100), tenure*12)) / (Math.pow(1 + (interest/12/100), tenure*12) - 1));
  const maxEligibility = Math.round((income * 0.5 - otherEmi) * 100); 

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Hero Section */}
      <div className="bg-[#0a1121] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <p className="text-xs font-bold opacity-70 mb-2 tracking-widest uppercase">Home / Loan Eligibility</p>
          <h1 className="text-5xl font-black tracking-tight">Loan Eligibility</h1>
        </div>
      </div>

      {/* 2. Calculator Content */}
      <div className="container mx-auto px-20 md:px-10 max-w-7xl py-20">
        {/* Changed items-start to items-stretch for equal height alignment */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          
          {/* Left Side: Input Sliders */}
          <div className="lg:w-2/4 w-full space-y-4 bg-gray-50/50 p-30 rounded-xl border border-gray-100">
            
            {/* Loan Amount */}
            <div className="space-y-4">
              <label className="block text-[#0a1121] font-bold text-lg">Loan Amount</label>
              <input 
                type="range" min="100000" max="10000000" step="50000"
                value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00a3e0]"
              />
              <p className="text-[#00a3e0] font-bold text-xl">₹ {Number(loanAmount).toLocaleString('en-IN')}</p>
            </div>

            {/* Gross Income */}
            <div className="space-y-4">
              <label className="block text-[#0a1121] font-bold text-lg">Gross Income (Monthly)</label>
              <input 
                type="range" min="10000" max="500000" step="1000"
                value={income} onChange={(e) => setIncome(e.target.value)}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00a3e0]"
              />
              <p className="text-[#00a3e0] font-bold text-xl">₹ {Number(income).toLocaleString('en-IN')}</p>
            </div>

            {/* Tenure */}
            <div className="space-y-4">
              <label className="block text-[#0a1121] font-bold text-lg">Tenure (Years)</label>
              <input 
                type="range" min="1" max="30" step="1"
                value={tenure} onChange={(e) => setTenure(e.target.value)}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00a3e0]"
              />
              <p className="text-[#00a3e0] font-bold text-xl">{tenure} Years</p>
            </div>

            {/* Interest Rate */}
            <div className="space-y-4">
              <label className="block text-[#0a1121] font-bold text-lg">Interest Rate</label>
              <input 
                type="range" min="5" max="20" step="0.1"
                value={interest} onChange={(e) => setInterest(e.target.value)}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00a3e0]"
              />
              <p className="text-[#00a3e0] font-bold text-xl">{interest} %</p>
            </div>

            {/* Other EMIs */}
            <div className="space-y-4">
              <label className="block text-[#0a1121] font-bold text-lg">Other EMIs (Monthly)</label>
              <input 
                type="range" min="0" max="100000" step="500"
                value={otherEmi} onChange={(e) => setOtherEmi(e.target.value)}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00a3e0]"
              />
              <p className="text-[#00a3e0] font-bold text-xl">₹ {Number(otherEmi).toLocaleString('en-IN')}</p>
            </div>
          </div>

          {/* Right Side: Result Card */}
          <div className="lg:w-2/5 w-full">
            <div className="bg-[#0051a1] text-white rounded-xl shadow-2xl p-10 h-30 flex flex-col justify-between border-b-8 border-[#00a3e0]">
              <div>
                <div className="mb-12">
                  <h3 className="text-xl font-medium opacity-90 mb-2">Monthly EMI</h3>
                  <p className="text-4xl font-black">₹ {monthlyEMI.toLocaleString('en-IN')}</p>
                </div>
                
                <div className="border-t border-white/20 pt-10">
                  <h3 className="text-xl font-medium opacity-90 mb-2">Maximum Loan Eligibility</h3>
                  <p className="text-4xl font-black">₹ {maxEligibility.toLocaleString('en-IN')}</p>
                  <p className="text-lg opacity-70 mt-2 font-medium">Estimated EMI: ₹ 18,909</p>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <button 
                  onClick={() => navigate('/apply')}
                  className="w-full bg-[#00a3e0] hover:bg-white hover:text-[#0051a1] text-white font-black py-5 px-8 rounded-md transition-all uppercase tracking-widest text-sm shadow-lg active:scale-95"
                >
                  Apply For Loan
                </button>
                <p className="text-[11px] opacity-60 leading-relaxed italic text-center">
                  *This calculator provides an estimate based on provided details. Final eligibility is subject to credit policy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoanEligibility;