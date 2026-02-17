import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoanCalculator = () => {
  const navigate = useNavigate();
  // State for calculation
  const [amount, setAmount] = useState(1000000);
  const [months, setMonths] = useState(120);
  const [interest, setInterest] = useState(10);

  // Simple EMI Calculation Logic
  const r = interest / 12 / 100;
  const emi = amount * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
  const totalPayable = emi * months;
  const totalInterest = totalPayable - amount;

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side: Sliders */}
          <div className="lg:w-2/3 w-full">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-blue-500 font-bold text-xs uppercase tracking-widest">Monthly EMI</span>
                <div className="h-[2px] w-12 bg-blue-500"></div>
              </div>
              <h2 className="text-4xl font-black text-[#0a1121]">Loan Interest Calculator</h2>
            </div>

            <div className="space-y-12">
              {/* Amount Slider */}
              <div className="space-y-4">
                <div className="flex justify-between font-bold text-[#0a1121]">
                  <label>Loan Amount</label>
                </div>
                <input 
                  type="range" min="10000" max="5000000" step="10000"
                  value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <p className="text-gray-500 font-medium">₹ {amount.toLocaleString()}</p>
              </div>

              {/* Months Slider */}
              <div className="space-y-4">
                <div className="flex justify-between font-bold text-[#0a1121]">
                  <label>Loan Months</label>
                </div>
                <input 
                  type="range" min="12" max="360" step="12"
                  value={months} onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <p className="text-gray-500 font-medium">{months} Months</p>
              </div>

              {/* Interest Slider */}
              <div className="space-y-4">
                <div className="flex justify-between font-bold text-[#0a1121]">
                  <label>Interest Rate</label>
                </div>
                <input 
                  type="range" min="5" max="25" step="0.5"
                  value={interest} onChange={(e) => setInterest(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <p className="text-gray-500 font-medium">{interest} %</p>
              </div>
            </div>
          </div>

          {/* Right Side: Summary Card */}
          <div className="lg:w-3/6 p-7 w-50 sticky top-50">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-[#0051a1] p-8 text-center relative">
                <h3 className="text-white text-2xl font-bold">How Much You Need</h3>
                {/* Small triangle arrow at bottom of blue header */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#0051a1]"></div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-500 font-medium">Monthly EMI</span>
                  <span className="text-[#0a1121] font-bold">₹ {Math.round(emi).toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-500 font-medium">Total Interest</span>
                  <span className="text-[#0a1121] font-bold">₹ {Math.round(totalInterest).toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-500 font-medium">Total Amount Payable</span>
                  <span className="text-[#0a1121] font-bold">₹ {Math.round(totalPayable).toLocaleString()}</span>
                </div>

                <button 
                  onClick={() => navigate('/apply')}
                  className="w-full bg-[#0051a1] hover:bg-blue-700 text-white font-bold py-4 rounded transition-all mt-4 uppercase tracking-wider text-sm"
                >
                  Apply For Loan
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;