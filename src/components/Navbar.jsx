import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Check authentication status on mount and periodically
  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsAuthenticated(loggedIn);
    };
    
    // Clear any stale auth data on first load to ensure buttons are hidden
    // Remove this line if you want to persist login across browser restarts
    localStorage.removeItem('isLoggedIn');
    
    // Check immediately on mount
    checkAuth();
    
    // Check every second to detect login/logout changes
    const interval = setInterval(checkAuth, 1000);
    
    // Also listen for storage changes (in case login happens in another tab)
    window.addEventListener('storage', checkAuth);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

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

  // Function to update auth state after login
  const updateAuthState = () => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsAuthenticated(loggedIn);
  };

  return (
    <>
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
                  ELITE<span className="text-pylon-blue"> PAISA</span>
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
    <div className="relative">
      {/* Profile Button with Dropdown */}
      <button 
        onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
        className={`flex items-center gap-1 xl:gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-md transition-all duration-300 whitespace-nowrap ${
          isScrolled ? 'px-3 py-2 text-xs' : 'px-4 py-2 text-sm'
        }`}
      >
        <User size={16} />
        <span className="hidden xl:inline">Profile</span>
        <svg className={`w-4 h-4 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Profile Dropdown */}
      {isProfileDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          <button
            onClick={() => { navigate('/profile'); setIsProfileDropdownOpen(false); }}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View Profile
          </button>
          <hr className="my-1 border-gray-100" />
          <button
            onClick={() => { handleLogout(); setIsProfileDropdownOpen(false); }}
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
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