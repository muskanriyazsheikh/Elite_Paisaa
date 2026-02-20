import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext.jsx';
import { Loader2, AlertCircle } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    const result = await login({
      email: formData.email,
      password: formData.password
    });

    if (result.success) {
      // Check if user was trying to access a protected page
      const redirectTo = localStorage.getItem('redirectTo');
      localStorage.removeItem('redirectTo');
      
      // Redirect to the page they tried to access, or home if none
      navigate(redirectTo || '/');
    } else {
      setError(result.error || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
          <p className="text-gray-500 mt-2 text-sm">Log in to manage your Elite Paisaa account</p>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              required
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              required
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition-all mt-4 active:scale-95 flex items-center justify-center gap-2"
          >
            {loading ? <><Loader2 size={18} className="animate-spin" /> Signing In...</> : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account? {' '}
          <Link to="/signup" className="text-blue-600 font-bold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;