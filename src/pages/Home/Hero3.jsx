import React from 'react';
import { Percent, CheckCircle, CalendarDays } from 'lucide-react';

const BusinessLoanFeatures = () => {
  const features = [
    {
      icon: <Percent className="text-blue-500" size={40} strokeWidth={1.5} />,
      title: "Very Low Rates on All Loans"
    },
    {
      icon: <CheckCircle className="text-blue-500" size={40} strokeWidth={1.5} />,
      title: "99.9% Success Rate Guarantee"
    },
    {
      icon: <CalendarDays className="text-blue-500" size={40} strokeWidth={1.5} />,
      title: "Flexible with Your Repayments"
    }
  ];

  return (
    <section className="bg-[#f4f7fa] py-20 overflow-hidden relative">
      {/* Background Decorative Element (Optional light bank notes) */}
      <div className="absolute top-14 right-15 opacity-5 rotate-12 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="2" y="6" width="20" height="12" rx="2"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
      </div>

      <div className="container mx-auto px-8 max-w-10xl">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start mb-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-500 font-bold text-xs uppercase tracking-widest">Get to Know About</span>
              <div className="h-[2px] w-12 bg-blue-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1121] leading-tight">
              Flexible and Quick Business Loans For You
            </h2>
          </div>
          
          <div className="lg:w-1/2">
            <p className="text-gray-500 text-lg leading-relaxed pt-2">
              Turpis cursus in hac habitasse platea dictumst quisque. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. There of available but the majority have suffered alteration in some form, by injected humour or randomised words which don't look even slightly believable.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.03)] border-b-4 border-transparent hover:border-blue-500 transition-all duration-300 group flex items-center gap-6"
            >
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <span className="group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0a1121] leading-snug">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanFeatures;