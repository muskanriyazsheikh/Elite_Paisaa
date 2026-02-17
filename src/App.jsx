import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Hero from './pages/Home/Hero1';
import Hero2 from './pages/Home/Hero2';
import Hero3 from './pages/Home/Hero3';
import ServiceSlider from './pages/Home/ServiceSlider';
import StatsCounter from './pages/Home/StatsCounter';
import WhyChooseUs from './pages/Home/Hero4';
import About from './pages/About/about';
import Services from './pages/Home/Services';
import LoanCalculator from './pages/Home/LoanCalculator';
import Contact from './pages/Contactus';
import Testimonials from './pages/Home/Testimonials';
import CTASection from './pages/Home/CTASection';
import LoginPage from './pages/Home/LoginPage';
import SignupPage from './pages/Home/SignupPage';
import FAQPage from './pages/Home/FAQspage';
import ApplyNowPage from './pages/ApplyNowPage';
import LoanEligibility  from './pages/Home/LoanEligibility';
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import { CloudSnow } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <motion.div 
        className="font-sans antialiased text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* The Navbar handles its own visibility inside its component */}
        <Navbar />

        <Routes>
          {/* 1. Login is now the default landing page */}
          <Route path="/" element={<LoginPage />} />
          
          {/* 2. Signup Page */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/apply" element={<ApplyNowPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<LoanCalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/eligibility" element={<LoanEligibility />} />

          {/* 3. Main Home content moved to /home */}
          <Route path="/home" element={
            <>
              <Hero />
              <Hero2 />
              <Hero3 />
              <ServiceSlider />
              <StatsCounter />
              <WhyChooseUs />
              {/* <LoanCalculator /> */}
              <Testimonials />
              <CTASection />
            </>
          } />
        </Routes>

        <Footer />
      </motion.div>
    </BrowserRouter>
  );
}

export default App;