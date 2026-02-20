import { useState } from 'react';
import { contactAPI, loanQuoteAPI } from '../services/api';

export const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Submit contact form
  const submitContact = async (contactData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const response = await contactAPI.submitContact(contactData);
      
      if (response.success) {
        setSuccess(true);
        return { success: true, data: response.data };
      }
    } catch (err) {
      setError(err.message || 'Failed to submit contact form');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Request loan quote
  const requestQuote = async (quoteData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const response = await loanQuoteAPI.requestQuote(quoteData);
      
      if (response.success) {
        setSuccess(true);
        return { success: true, data: response.data };
      }
    } catch (err) {
      setError(err.message || 'Failed to request quote');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Reset state
  const reset = () => {
    setLoading(false);
    setError(null);
    setSuccess(false);
  };

  return {
    loading,
    error,
    success,
    submitContact,
    requestQuote,
    reset,
  };
};
