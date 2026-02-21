import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLoanServices } from '../../hooks';
import { Loader2 } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const ServiceSlider = () => {
  const navigate = useNavigate();
  const { services, loading, error } = useLoanServices();
  
  // Fallback static data if API fails or returns empty
  const staticServices = [
    {
      title: "Personal Loan",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      ),
      desc: "Get personal loans up to ₹25 lakhs with minimal documentation and quick approval for all your needs.",
      rate: "10.5%",
      amount: "₹25 Lakhs",
      features: ["No Collateral Required", "Quick Disbursal", "Flexible Tenure"]
    },
    {
      title: "Home Loan",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      ),
      desc: "Fulfill your dream of owning a home with our affordable home loan options and competitive rates.",
      rate: "8.5%",
      amount: "₹5 Crores",
      features: ["Low Interest Rates", "Long Tenure", "Tax Benefits"]
    },
    {
      title: "Business Loan",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      desc: "Fuel your business growth with our customized business loan solutions for MSMEs and startups.",
      rate: "11%",
      amount: "₹2 Crores",
      features: ["Unsecured Options", "Quick Approval", "Minimal Docs"]
    },
    {
      title: "Gold Loan",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      desc: "Get instant cash against your gold jewelry with our secure gold loan service at best rates.",
      rate: "9%",
      amount: "₹50 Lakhs",
      features: ["Instant Approval", "Safe Storage", "Low Interest"]
    },
    {
      title: "Vehicle Loan",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
      ),
      desc: "Drive your dream car or bike home with our easy vehicle loan options and flexible repayment.",
      rate: "9.5%",
      amount: "₹50 Lakhs",
      features: ["Up to 100% Financing", "Quick Processing", "Flexible EMI"]
    }
  ];

  // Map API data to component format or use static data
  const displayServices = services.length > 0 ? services.map(service => ({
    title: service.title,
    desc: service.description,
    rate: `${service.interestRate}%`,
    amount: `₹${service.maxAmount?.toLocaleString() || 'N/A'}`,
    features: service.eligibility?.requiredDocuments || ['Quick Approval', 'Minimal Documentation', 'Flexible Terms'],
    icon: getIconForService(service.title)
  })) : staticServices;

  function getIconForService(title) {
    const icons = {
      'Personal Loan': (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      ),
      'Home Loan': (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      ),
      'Business Loan': (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      'Gold Loan': (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      'Vehicle Loan': (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
      )
    };
    return icons[title] || icons['Personal Loan'];
  }

  return (
    <section id="services" className="py-20 bg-pylon-gray">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title mt-2">Loan Products We Offer</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose from our wide range of loan products designed to meet your financial needs
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 size={40} className="animate-spin text-pylon-blue" />
          </div>
        )}

        {error && (
          <div className="text-center py-8 text-red-600">
            Failed to load services. Showing default options.
          </div>
        )}

        {!loading && (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {displayServices.map((service, idx) => (
              <SwiperSlide key={idx}>
                <motion.div 
                  className="bg-white rounded-2xl p-6 h-full border border-gray-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icon */}
                  <div className="w-20 h-20 bg-pylon-blue/10 rounded-2xl flex items-center justify-center text-pylon-blue mb-6 group-hover:bg-pylon-blue group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold font-heading text-pylon-dark mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.desc}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-pylon-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Details */}
                  <div className="flex items-center justify-between py-4 border-t border-gray-100 mb-4">
                    <div>
                      <p className="text-xs text-gray-400">Interest From</p>
                      <p className="font-bold text-pylon-blue">{service.rate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Max Amount</p>
                      <p className="font-bold text-pylon-dark">{service.amount}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => navigate(`/apply?loan=${service._id || service.title}`)} 
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default ServiceSlider;
