import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext.jsx';
import { Loader2, AlertCircle, CheckCircle } from 'lucide-react';

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup, loading } = useAuth();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Create state to hold the input values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    
    const result = await signup({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    });

    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setError(result.error || 'Signup failed. Please try again.');
    }
  };

  // Helper function to update state when typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 py-12">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Create Account</h2>
          <p className="text-gray-500 mt-2 text-sm">Join Elite Paisaa for quick loan approvals</p>
        </div>

        {success && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
            <CheckCircle size={20} />
            <span>Account created successfully! Redirecting to login...</span>
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              name="fullName"
              type="text" 
              required 
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" 
              placeholder="John Doe" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              name="email"
              type="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" 
              placeholder="name@company.com" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              name="phone"
              type="tel" 
              required 
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" 
              placeholder="+91 00000 00000" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              name="password"
              type="password" 
              required 
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" 
              placeholder="••••••••" 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading || success}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition-all mt-4 flex items-center justify-center gap-2"
          >
            {loading ? <><Loader2 size={18} className="animate-spin" /> Creating Account...</> : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account? {' '}
          <Link to="/" className="text-blue-600 font-bold hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;