import { useState, useEffect, useCallback } from 'react';
import { loanApplicationAPI } from '../services/api';

export const useLoanApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch my applications
  const fetchMyApplications = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await loanApplicationAPI.getMyApplications();
      
      if (response.success) {
        setApplications(response.data.applications || []);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch applications');
    } finally {
      setLoading(false);
    }
  }, []);

  // Submit new application
  const submitApplication = useCallback(async (applicationData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await loanApplicationAPI.submitApplication(applicationData);
      
      if (response.success) {
        // Refresh applications list
        await fetchMyApplications();
        return { success: true, data: response.data };
      }
    } catch (err) {
      setError(err.message || 'Failed to submit application');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, [fetchMyApplications]);

  // Get application by ID
  const getApplicationById = useCallback(async (id) => {
    try {
      const response = await loanApplicationAPI.getApplicationById(id);
      return response.data?.application || null;
    } catch (err) {
      console.error('Failed to fetch application:', err);
      return null;
    }
  }, []);

  // Load applications on mount
  useEffect(() => {
    fetchMyApplications();
  }, [fetchMyApplications]);

  return {
    applications,
    loading,
    error,
    fetchMyApplications,
    submitApplication,
    getApplicationById,
  };
};
