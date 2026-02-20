import React, { useState } from 'react';
import { Phone, Mail, MapPin, Loader2, CheckCircle } from 'lucide-react';
import { useContact } from '../hooks';

const ContactPage = () => {
  const { submitContact, loading, success, error, reset } = useContact();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitContact(formData);
    if (result.success) {
      setFormData({ fullName: '', email: '', phone: '', message: '' });
      setTimeout(() => reset(), 3000);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <div className="bg-[#0a1121] py-20 text-center text-white relative overflow-hidden">
        {/* Dark overlay background image */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <p className="text-sm font-bold opacity-70 mb-2">Home / Contact Us</p>
          <h1 className="text-5xl font-black">Contact Us</h1>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="container mx-auto px-6 max-w-7xl py-24">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Contact Details */}
          <div className="lg:w-1/3">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-blue-500 font-bold text-xs uppercase tracking-widest">Get in touch with us</span>
                <div className="h-[2px] w-12 bg-blue-500"></div>
              </div>
              <h2 className="text-4xl font-black text-[#0a1121]">Ask for your query</h2>
            </div>

            <div className="space-y-8">
              {/* Call Anytime */}
              <div className="flex items-start gap-5 group">
                <div className="bg-pylon-blue p-4 rounded-full text-white transition-transform group-hover:scale-110">
                  <Phone size={24} fill="white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1121] text-lg">Call Anytime</h4>
                  <p className="text-gray-500 font-medium">92 888 666 0000</p>
                </div>
              </div>

              {/* Write Email */}
              <div className="flex items-start gap-5 group border-t border-gray-100 pt-8">
                <div className="bg-pylon-blue p-4 rounded-full text-white transition-transform group-hover:scale-110">
                  <Mail size={24} fill="white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1121] text-lg">Write Email</h4>
                  <p className="text-gray-500 font-medium">needhelp@company.com</p>
                </div>
              </div>

              {/* Visit Office */}
              <div className="flex items-start gap-5 group border-t border-gray-100 pt-8">
                <div className="bg-pylon-blue p-4 rounded-full text-white transition-transform group-hover:scale-110">
                  <MapPin size={24} fill="white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1121] text-lg">Visit Office</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    80 Manhtan Dr. Blkdyd, New York, USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-2/3">
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
                <CheckCircle size={20} />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Name" 
                required
                className="w-full p-4 bg-[#f4f7fa] border border-transparent rounded focus:border-blue-400 focus:bg-white outline-none transition-all placeholder:text-gray-400" 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required
                className="w-full p-4 bg-[#f4f7fa] border border-transparent rounded focus:border-blue-400 focus:bg-white outline-none transition-all placeholder:text-gray-400" 
              />
              <input 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number" 
                required
                className="w-full p-4 bg-[#f4f7fa] border border-transparent rounded focus:border-blue-400 focus:bg-white outline-none transition-all placeholder:text-gray-400 md:col-span-2" 
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Message" 
                rows="6"
                required
                className="w-full p-4 bg-[#f4f7fa] border border-transparent rounded focus:border-blue-400 focus:bg-white outline-none transition-all placeholder:text-gray-400 md:col-span-2 resize-none"
              ></textarea>
              
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-pylon-blue hover:bg-blue-600 disabled:bg-gray-400 text-white font-bold py-4 px-10 rounded transition-all shadow-lg uppercase tracking-wider text-sm flex items-center gap-2"
                >
                  {loading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : 'Send a Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 3. Full Width Map */}
      <div className="w-full h-[500px] bg-gray-200 overflow-hidden mt-10">
        <iframe 
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1675865234567!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;