// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://elitepaisa-backend-production.up.railway.app/api';

// Helper function to get auth token
const getToken = () => localStorage.getItem('token');

// Helper function for API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add auth token if available
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    // Don't log CORS errors - they're expected when backend is not configured
    throw error;
  }
};

// ==================== AUTH API ====================
export const authAPI = {
  // Register new user
  signup: async (userData) => {
    return apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Login user
  login: async (credentials) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
  },
};

// ==================== PROFILE API ====================
export const profileAPI = {
  // Get user profile
  getProfile: async () => {
    return apiRequest('/profile', {
      method: 'GET',
    });
  },

  // Update user profile
  updateProfile: async (profileData) => {
    return apiRequest('/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  },
};

// ==================== LOAN SERVICES API ====================
export const loanServicesAPI = {
  // Get all loan services
  getAllServices: async () => {
    return apiRequest('/loans', {
      method: 'GET',
    });
  },

  // Get loan service by ID
  getServiceById: async (id) => {
    return apiRequest(`/loans/${id}`, {
      method: 'GET',
    });
  },
};

// ==================== CONTACT API ====================
export const contactAPI = {
  // Submit contact form
  submitContact: async (contactData) => {
    return apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  },
};

// ==================== LOAN QUOTE API ====================
export const loanQuoteAPI = {
  // Request loan quote
  requestQuote: async (quoteData) => {
    return apiRequest('/quotes', {
      method: 'POST',
      body: JSON.stringify(quoteData),
    });
  },
};

// ==================== LOAN APPLICATIONS API ====================
export const loanApplicationAPI = {
  // Submit loan application
  submitApplication: async (applicationData) => {
    return apiRequest('/applications', {
      method: 'POST',
      body: JSON.stringify(applicationData),
    });
  },

  // Get my applications
  getMyApplications: async () => {
    return apiRequest('/applications/my', {
      method: 'GET',
    });
  },

  // Get application by ID
  getApplicationById: async (id) => {
    return apiRequest(`/applications/${id}`, {
      method: 'GET',
    });
  },
};

// ==================== ADMIN API (For Admin Users) ====================
export const adminAPI = {
  // Get all applications (Admin only)
  getAllApplications: async () => {
    return apiRequest('/admin/applications', {
      method: 'GET',
    });
  },

  // Update application status (Admin only)
  updateApplicationStatus: async (id, statusData) => {
    return apiRequest(`/admin/applications/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify(statusData),
    });
  },

  // Get dashboard stats (Admin only)
  getDashboardStats: async () => {
    return apiRequest('/admin/dashboard', {
      method: 'GET',
    });
  },
};

export default {
  auth: authAPI,
  profile: profileAPI,
  loanServices: loanServicesAPI,
  contact: contactAPI,
  loanQuote: loanQuoteAPI,
  loanApplication: loanApplicationAPI,
  admin: adminAPI,
};
