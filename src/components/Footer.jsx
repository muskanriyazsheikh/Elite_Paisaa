import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    loans: [
      { name: 'Personal Loan', href: '/apply' },
      { name: 'Home Loan', href: '/apply' },
      { name: 'Business Loan', href: '/apply' },
      { name: 'Gold Loan', href: '/apply' },
      { name: 'Vehicle Loan', href: '/apply' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' }, // Assuming team is on about page
      { name: 'Contact Us', href: '/contact' },
    ],
    support: [
      { name: 'FAQs', href: '/faqs' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Sitemap', href: '#' },
    ],
  };

  return (
    <footer id="contact" className="bg-[#0a1121] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-pylon-blue rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">ELITE<span className="text-pylon-blue"> PAISAA</span></span>
                <span className="text-xs text-gray-400 tracking-wider">LOAN & FINANCE</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              ElitePaisaa is your trusted partner for all your financial needs. 
              We provide quick and hassle-free loans with competitive interest rates.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-pylon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>123 Finance Street, Mumbai, Maharashtra 400001</span>
              </div>
              
              {/* EMAIL LINK: mailto: protocol */}
              <a href="mailto:info@elitepaisaa.com" className="flex items-center gap-3 text-gray-300 hover:text-pylon-blue transition">
                <svg className="w-5 h-5 text-pylon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>info@elitepaisaa.com</span>
              </a>

              {/* PHONE LINK: tel: protocol */}
              <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-300 hover:text-pylon-blue transition">
                <svg className="w-5 h-5 text-pylon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Links Columns using Link component */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Loans</h4>
            <ul className="space-y-3">  
              {footerLinks.loans.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-gray-400 hover:text-pylon-blue transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-gray-400 hover:text-pylon-blue transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-gray-400 hover:text-pylon-blue transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Rest of bottom bar remains similar... */}
    </footer>
  );
};

export default Footer;