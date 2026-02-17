import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import heroImage from '/src/assets/woman.png';

const Hero = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Thank you! We will contact you shortly.');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Professional woman"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-pylon-dark/95 via-pylon-dark/30 to-pylon-dark/60"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-pylon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pylon-blue/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-pylon-gold rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">#1 Trusted Loan Provider in India</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6"
              variants={itemVariants}
            >
              Get Your Loan Approved in 
              <span className="text-pylon-blue-600"> 24 Hours</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-xl"
              variants={itemVariants}
            >
              Quick and hassle-free loans for all your needs. Low interest rates, minimal documentation, 
              and instant approval. Trusted by over 50,000+ satisfied customers across India.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={itemVariants}
            >
              <motion.button 
              onClick={() => navigate('/apply')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-3 transition-colors  shadow-blue-200"
              whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
              >
              <span className="uppercase tracking-wider text-sm">Apply For Loan</span>
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
              </motion.button>
              <motion.button 
                onClick={() => navigate('/eligibility')}
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check Eligibility
              </motion.button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
              variants={itemVariants}
            >
              {[
                { value: "₹500Cr+", label: "Loans Disbursed" },
                { value: "50K+", label: "Happy Customers" },
                { value: "98%", label: "Approval Rate" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-pylon-Blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Content - Loan Form Card */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md ml-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-pylon-dark mb-2">Get a Loan Quote</h3>
                <p className="text-gray-500 text-sm">Fill in your details and we'll get back to you</p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pylon-blue transition"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    {...register('phone', { 
                      required: 'Phone is required',
                      pattern: { value: /^[0-9]{10}$/, message: 'Enter valid 10-digit number' }
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pylon-blue transition"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label>
                  <select {...register('amount')} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pylon-blue transition">
                    <option value="">Select loan amount</option>
                    <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                    <option value="100000-500000">₹1,00,000 - ₹5,00,000</option>
                    <option value="500000-1000000">₹5,00,000 - ₹10,00,000</option>
                    <option value="1000000+">₹10,00,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Type</label>
                  <select {...register('loanType')} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pylon-blue transition">
                    <option value="">Select loan type</option>
                    <option value="personal">Personal Loan</option>
                    <option value="home">Home Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="gold">Gold Loan</option>
                  </select>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-pylon-blue hover:bg-pylon-blue-dark text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-blue-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Quote Now
                </motion.button>
              </form>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                By submitting, you agree to our Terms & Privacy Policy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;