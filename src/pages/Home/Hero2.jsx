import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, ShieldCheck, Zap, Percent } from 'lucide-react';

const LoanCalculatorSection = () => {
  const navigate = useNavigate();
  
  // State for Calculator
  const [amount, setAmount] = useState(16000);
  const [months, setMonths] = useState(8);

  // Simple calculation logic
  const monthlyPay = Math.round(amount / months);
  const totalPayback = Math.round(amount * 1.15); // Example 15% interest

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        
       

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <p className="text-blue-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                Company Introductions <span className="h-[2px] w-12 bg-blue-500 inline-block"></span>
              </p>
              <h2 className="text-6xl font-black text-slate-900 mt-4 leading-tight">
                Our Loans will Fill Your Dreams Come True
              </h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
             There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.Nam aliquam sem et tortor consequat mattis pellentesque semper tailored for specific uses and specific market segment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-4 rounded-full text-blue-600">
                  <Trophy size={30} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Award Winning</h4>
                  <p className="text-sm text-gray-500">Finance categories winning more than 10 awards</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-4 rounded-full text-blue-600">
                  <ShieldCheck size={30} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Certified Company</h4>
                  <p className="text-sm text-gray-500">Approved Finance company to provide loans</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Calculator Card */}
           <div className="lg:w-2/5 w-full">
  <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
    <div className="bg-[#0051a1] p-8 text-center text-white">
      <h3 className="text-2xl font-bold">How Much You Need</h3>
      {/* Small arrow/triangle detail */}
      <div className="w-4 h-4 bg-[#0051a1] rotate-45 mx-auto -mb-10 mt-6 shadow-xl"></div>
    </div>

    <div className="p-10 space-y-8">
      {/* Amount Slider */}
      <div>
        <div className="flex justify-between text-sm font-bold text-gray-400 mb-4">
          <span>₹1,000</span>
          {/* Using toLocaleString('en-IN') for Indian number formatting */}
          <span className="text-blue-600 font-black text-lg">
            ₹{Number(amount).toLocaleString('en-IN')}
          </span>
          <span>₹4,00,000</span>
        </div>
        <input 
          type="range" min="1000" max="400000" step="1000"
          value={amount} onChange={(e) => setAmount(e.target.value)}
          className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
      </div>

      {/* Month Slider */}
      <div>
        <div className="flex justify-between text-sm font-bold text-gray-400 mb-4">
          <span>1 Month</span>
          <span className="text-blue-600 font-black text-lg">{months}</span>
          <span>12 Months</span>
        </div>
        <input 
          type="range" min="1" max="12"
          value={months} onChange={(e) => setMonths(e.target.value)}
          className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
      </div>

      {/* Results Table */}
      <div className="space-y-4 pt-4 border-t border-gray-50">
        <div className="flex justify-between items-center text-gray-600">
          <span className="font-medium">Pay Monthly</span>
          <span className="text-slate-900 font-bold">
            ₹{Number(monthlyPay).toLocaleString('en-IN')}
          </span>
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <span className="font-medium">Term of Use</span>
          <span className="text-slate-900 font-bold">{months} Months</span>
        </div>
        <div className="flex justify-between items-center text-gray-600 pt-4 border-t border-gray-50">
          <span className="font-medium">Total Pay Back</span>
          <span className="text-slate-900 font-black text-xl">
            ₹{Number(totalPayback).toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  </div>

  <button 
    onClick={() => navigate('/apply')}
    className="w-full bg-[#0051a1] hover:bg-[#0051a1] text-white font-bold py-4 rounded-md transition-all shadow-lg active:scale-95 mt-6"
  >
    Apply For Loan
  </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoanCalculatorSection;