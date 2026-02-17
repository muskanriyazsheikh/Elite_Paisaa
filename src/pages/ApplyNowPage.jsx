import React from 'react';

const ApplyNowPage = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. Hero Header Section */}
      <div className="relative h-[300px] bg-[#0a1121] flex flex-col justify-center px-10 md:px-20 text-white">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <p className="text-sm font-bold bg-white/10 w-fit px-3 py-1 rounded mb-4">Home / Apply Now</p>
          <h1 className="text-5xl font-black tracking-tighter">Apply Now</h1>
        </div>
      </div>

      {/* 2. Form Container */}
      <div className="container mx-auto px-6 max-w-5xl mt-12">
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          
          {/* Section 1: Loan Details */}
          <section>
            <div className="mb-6">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                Calculate your loan amount <span className="h-[2px] w-12 bg-blue-600 inline-block"></span>
              </p>
              <h2 className="text-3xl font-black text-slate-900 mt-2">Loan Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="number" placeholder="Loan Amount*" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none focus:border-blue-600 transition" />
              <input type="number" placeholder="Monthly Income*" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none focus:border-blue-600 transition" />
              <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none appearance-none">
                <option>Select Purpose of Loan</option>
                <option>Personal Loan</option>
                <option>Home Loan</option>
                <option>Education Loan</option>
                
              </select>
              <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none appearance-none">
                <option>Select Loan Year</option>
                <option>1 Year</option>
                <option>3 Years</option>
                <option>5 Years</option>
              </select>
            </div>
          </section>

          {/* Section 2: Personal Details */}
          <section>
            <div className="mb-6">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                Ask for More Details <span className="h-[2px] w-12 bg-blue-600 inline-block"></span>
              </p>
              <h2 className="text-3xl font-black text-slate-900 mt-2">Personal Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name [as per Taxpayer ID]*" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none" />
              <input type="email" placeholder="Email*" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none" />
              <input type="tel" placeholder="Mobile Number*" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none" />
              <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none">
                <option>Select Marital Status*</option>
                <option>Single</option>
                <option>Married</option>
              </select>
              <input type="date" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none text-gray-400" />
              <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none">
                <option>Number Of Dependents*</option>
                <option>0</option>
                <option>1</option>
                <option>2+</option>
              </select>
            </div>
          </section>

          {/* Section 3: Address Details */}
          <section>
            <div className="mb-6">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                Street, City and State <span className="h-[2px] w-12 bg-blue-600 inline-block"></span>
              </p>
              <h2 className="text-3xl font-black text-slate-900 mt-2">Address Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input type="text" placeholder="House No/Name*" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none" />
              <input type="text" placeholder="Street*" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none" />
              <input type="text" placeholder="City*" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none" />
              <input type="text" placeholder="State*" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none" />
              <input type="text" placeholder="Country*" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none" />
              <input type="text" placeholder="Pin Code*" className="w-full p-4 bg-gray-50 border border-gray-100 rounded outline-none" />
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-6">
            <button className="bg-[#00a3e0] hover:bg-[#008cc0] text-white font-bold py-4 px-10 rounded shadow-lg transition-all active:scale-95">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowPage;