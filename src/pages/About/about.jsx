import React, { useState } from 'react';
import { Plus, Minus, Phone } from 'lucide-react';
import Man1 from '/src/assets/aboutMan1.png';
import Man2 from '/src/assets/aboutMan2.png';
import Woman1 from '/src/assets/aboutWoman1.png';
import woman2 from '/src/assets/Woman2.png';
import Man3 from '/src/assets/Man3.png';
import Man4 from '/src/assets/Man4.png';

const AboutTeamPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const teamMembers = [
    { name: "Arjun Mehta", role: "Financial Expert", img:Man1 },
    { name: "Priya Sharma", role: "Loan Consultant", img:Man2 },
    { name: "Saniya Sheikh", role: "Senior Analyst", img: Woman1 },
    { name: "Ananya Iyer", role: "Expert Agent", img: Man4 },
    { name: "Rohan Das", role: "Compliance Officer", img: Man3 },
    { name: "Sana Khan", role: "Support Lead", img: woman2 },
  ];


  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header */}
      <div className="bg-[#0a1121] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <p className="text-sm font-bold opacity-70 mb-2">Home / Team Members</p>
          <h1 className="text-5xl font-black">About Our Team</h1>
        </div>
      </div>

        {/* 4. Team Members Grid */}
        <div className="mt-32">
          <div className="text-center mb-16">
             <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-blue-500"></div>
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Our Expert Staff</span>
                <div className="h-[2px] w-12 bg-blue-500"></div>
             </div>
             <h2 className="text-5xl font-black text-[#0a1121]">Meet Our Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white mx-6 mb-6 p-6 rounded-md shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="absolute top-0 left-0 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
                  <h3 className="text-2xl font-black text-[#0a1121]">{member.name}</h3>
                  <p className="text-blue-600 font-bold text-sm uppercase mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default AboutTeamPage;