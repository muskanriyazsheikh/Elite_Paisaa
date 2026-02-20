import { useState, useEffect, useCallback } from 'react';
import { loanServicesAPI } from '../services/api';

// Fallback sample data in case API fails
// Using valid MongoDB ObjectId format (24 hex characters)
const sampleLoanServices = [
  {
    _id: '507f1f77bcf86cd799439011',
    title: 'Personal Loan',
    description: 'Get instant personal loans for your needs with flexible repayment options.',
    icon: 'personal',
    interestRate: 10.5
  },
  {
    _id: '507f1f77bcf86cd799439012',
    title: 'Home Loan',
    description: 'Make your dream home a reality with our affordable home loan options.',
    icon: 'home',
    interestRate: 8.5
  },
  {
    _id: '507f1f77bcf86cd799439013',
    title: 'Car Loan',
    description: 'Drive your dream car with our low-interest car loan offerings.',
    icon: 'car',
    interestRate: 9.0
  },
  {
    _id: '507f1f77bcf86cd799439014',
    title: 'Education Loan',
    description: 'Invest in your future with our education loan for higher studies.',
    icon: 'education',
    interestRate: 7.5
  },
  {
    _id: '507f1f77bcf86cd799439015',
    title: 'Business Loan',
    description: 'Grow your business with our customized business loan solutions.',
    icon: 'business',
    interestRate: 11.0
  }
];

export const useLoanServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all loan services
  const fetchServices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await loanServicesAPI.getAllServices();
      console.log('Loan services response:', response);
      
      if (response.success) {
        // Handle different response structures
        const servicesData = response.data?.loanServices || response.data || [];
        console.log('Setting services:', servicesData);
        setServices(servicesData);
      } else {
        setError(response.message || 'Failed to fetch loan services');
      }
    } catch (err) {
      console.error('Error fetching services:', err);
      setError(err.message || 'Failed to fetch loan services');
      // Use sample data as fallback
      console.log('Using sample loan services as fallback');
      setServices(sampleLoanServices);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch service by ID
  const getServiceById = useCallback(async (id) => {
    try {
      const response = await loanServicesAPI.getServiceById(id);
      return response.data?.loanService || null;
    } catch (err) {
      console.error('Failed to fetch service:', err);
      return null;
    }
  }, []);

  // Load services on mount
  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return {
    services,
    loading,
    error,
    fetchServices,
    getServiceById,
  };
};
