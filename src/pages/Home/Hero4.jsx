import React from 'react';
import { ChevronRight } from 'lucide-react';
import hero4 from '/src/assets/Hero4.png';

const WhyChooseUs = () => {
  const stats = [
    { label: "Loan Process", value: "90%" },
    { label: "Consultancy", value: "80%" },
    { label: "Payment Benefits", value: "85%" },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image with Blue Overlay Box */}
          <div className="lg:w-1/2 relative">
            {/* The Blue Experience Box */}
            <div className="bg-[#0051a1] text-white p-8 flex items-center gap-4 w-fit absolute -top-10 left-0 z-10 rounded-sm shadow-xl">
              <div className="bg-white/20 p-3 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-xl font-bold leading-tight">26 years of <br /> working experience</span>
            </div>

            {/* Main Image */}
            <div className="relative pt-10 pl-10">
              <div className="absolute inset-0 bg-blue-600 rounded-sm -z-10 translate-x-4 translate-y-4 opacity-10"></div>
              <img 
                src={hero4}
                alt="Business Meeting" 
                className="rounded-sm shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content and Progress Bars */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Our Benifits</span>
                <div className="h-[2px] w-12 bg-blue-500"></div>
              </div>
              <h2 className="text-5xl font-black text-[#0a1121] mb-6">Why Choose Us?</h2>
              <p className="text-gray-500 leading-relaxed text-lg mb-10">
                Provide your best loan services and our experience staff help you. Less document and fast approve process of passages. Also we are providing credit card facility to per day interest credit card lorem Ipsum available, but the majority have suffered.
              </p>
            </div>

            {/* Feature Mini-Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-bold text-[#0a1121] text-lg">
                  <ChevronRight size={18} className="text-blue-600" /> Professional Team
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">Lorem Ipsum dolor sit is amet, consectetur notted.</p>
              </div>
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-bold text-[#0a1121] text-lg">
                  <ChevronRight size={18} className="text-blue-600" /> Quick Payments
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">Lorem Ipsum dolor sit is amet, consectetur notted.</p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center font-bold text-[#0a1121]">
                    <span>{stat.label}</span>
                    <span>{stat.value}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-1000 ease-out"
                      style={{ width: stat.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;