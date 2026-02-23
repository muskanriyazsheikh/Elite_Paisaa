import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import LoanEligibility from './pages/Home/LoanEligibility';
import ProfilePage from './pages/Profile/ProfilePage.jsx';
import LoanDocumentsPage from './pages/LoanDocuments/LoanDocumentsPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import ScrollToTop from './components/ScrollToTop';
import './index.css';



// --- 1. PROTECTED ROUTE COMPONENT ---
// This checks if the user is logged in. If not, it forces them to the login page.
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  const location = useLocation();
  
  if (!isAuthenticated) {
    // Store the page user tried to access so we can redirect back after login
    localStorage.setItem('redirectTo', location.pathname);
    return <Navigate to="/login" replace />;
  }
  return children;
};

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
        <Navbar />

        <Routes>
          {/* --- PUBLIC ROUTES (Everyone can see) --- */}
          <Route path="/" element={
            <>
              <Hero />
              <Hero2 />
              <Hero3 />
              <ServiceSlider />
              <StatsCounter />
              <WhyChooseUs />
              <Testimonials />
              <CTASection />
            </>
          } />
          
          {/* --- PUBLIC ROUTES (Everyone can see) --- */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calculator" element={<LoanCalculator />} />
          <Route path="/eligibility" element={<LoanEligibility />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* --- LOCKED ROUTES (Only for Logged In users) --- */}
          <Route path="/apply" element={
            <ProtectedRoute><ApplyNowPage /></ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute><ProfilePage /></ProtectedRoute>
          } />
          <Route path="/loan-documents/:loanType" element={<LoanDocumentsPage />} />

          {/* Fallback redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </motion.div>
    </BrowserRouter>
  );
}

export default App;