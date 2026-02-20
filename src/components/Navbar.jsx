import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail, Clock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState('false');
  const navigate = useNavigate();



  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsAuthenticated(false);
    navigate('/');
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Calculator', path: '/calculator' },
    { label: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   const changeProfile = () => {

    setIsAuthenticated('true');

    console.log('Login status:', localStorage.getItem('isLoggedIn')); // Debugging line
      
    };

    const navigateToProfile = () => {
      navigate('/profile');
    }

  return (
    <>
      {/* Top Bar */}
       <motion.div 
  className={`bg-[#f4f7f9] text-[#4b5563] py-2 border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}
  initial={{ y: 0 }}
  animate={{ y: isScrolled ? -50 : 0 }}
>
  <div className="container mx-auto px-4 flex justify-between items-center text-[13px] font-medium">
    
    {/* Left Side: Social Icons & Quick Links */}
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-4 border-r border-gray-300 pr-6">
        <Facebook size={14} className="cursor-pointer hover:text-blue-600 transition-colors" />
        <Twitter size={14} className="cursor-pointer hover:text-blue-400 transition-colors" />
        <Instagram size={14} className="cursor-pointer hover:text-pink-600 transition-colors" />
        {/* Pinterest icon substitute */}
        <div className="w-3.5 h-3.5 border-2 border-[#4b5563] rounded-full flex items-center justify-center text-[8px] font-bold cursor-pointer hover:border-red-600 hover:text-red-600">P</div>
      </div>
      
      <div className="hidden lg:flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-4">
  {isAuthenticated ? (
    <>
      <button 
        onClick={handleLogout}
        className="hover:text-red-600 transition-colors cursor-pointer font-medium"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login" onClick={changeProfile} className="hover:text-blue-600 transition-colors cursor-pointer">
        Login
      </Link>
      <span className="text-gray-300">/</span>
      <Link to="/signup" className="hover:text-blue-600 transition-colors">
        Sign Up
      </Link>
    </>
  )}
  <span className="text-gray-300">/</span>
  <Link to="/faqs" className="hover:text-blue-600 transition-colors">
    FAQs
  </Link>
</div>
      
      </div>
    </div>

    {/* Right Side: Contact Details */}
    <div className="flex items-center gap-6">
      <a 
  href="mailto:info@elitepaisaa.com" 
  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
>
  <Mail size={14} className="text-blue-500" /> 
  info@elitepaisaa.com
</a>
      <span className="hidden sm:flex items-center gap-2">
        <Clock size={15} className="text-blue-600" />
        Mon - Sat 9:00 AM - 6:00 PM
      </span>
    </div>

  </div>
</motion.div>

      {/* Main Navbar */}
      <motion.nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className={`bg-pylon-blue rounded-lg flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-9 h-9' : 'w-12 h-14'}`}>
                <svg className={`text-white transition-all duration-300 ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold font-heading text-pylon-dark transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
                  ELITE<span className="text-pylon-blue"> PAISAA</span>
                </span>
                <span className={`text-gray-500 tracking-wider transition-all duration-300 ${isScrolled ? 'text-[10px]' : 'text-xs'}`}>LOAN & FINANCE</span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {menuItems.map((item) => (
                <Link 
                  key={item.label}
                  to={item.path} 
                  className="relative text-gray-700 font-medium hover:text-pylon-blue transition group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pylon-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
<div className="hidden lg:flex items-center gap-2 xl:gap-3">
  {isAuthenticated && (
    <button 
      onClick={navigateToProfile}
      className={`flex items-center gap-1 xl:gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-md transition-all duration-300 whitespace-nowrap ${
        isScrolled ? 'px-3 py-2 text-xs' : 'px-4 py-2 text-sm'
      }`}
    >
      <User size={16} />
      <span className="hidden xl:inline">Profile</span>
    </button>
  )}

  <button 
    onClick={() => navigate('/apply')}
    className={`bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-all duration-300 whitespace-nowrap ${
      isScrolled ? 'px-4 py-2 text-xs' : 'px-6 py-2 text-sm'
    }`}
  >
    Apply Now
  </button>
</div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div 
              className="lg:hidden py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link 
                    key={item.label}
                    to={item.path} 
                    className="text-gray-700 font-medium hover:text-pylon-blue transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {isAuthenticated && (
                  <button 
                    onClick={() => { navigate('/profile'); setIsOpen(false); }}
                    className="lg:hidden w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-md px-6 py-3 flex items-center justify-center gap-2"
                  >
                    <User size={18} />
                    Profile
                  </button>
                )}
                <button 
                  onClick={() => { navigate('/apply'); setIsOpen(false); }}
                  className="lg:hidden w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md px-6 py-3"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};
export default Navbar;