import axios from "axios";

// Create axios instance with base URL
const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://elitepaisa-backend-production.up.railway.app/api',
});

// Request interceptor to add auth token
Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
Api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 - Unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ============== AUTH ==============
export const signup = (userData) => Api.post("/auth/signup", userData);
export const login = (credentials) => Api.post("/auth/login", credentials);
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('isLoggedIn');
};

// ============== PROFILE ==============
export const getProfile = () => Api.get("/profile");
export const updateProfile = (profileData) => Api.put("/profile", profileData);

// ============== LOAN SERVICES ==============
export const getAllServices = () => Api.get("/loans");
export const getServiceById = (id) => Api.get(`/loans/${id}`);

// ============== CONTACT ==============
export const submitContact = (contactData) => Api.post("/contact", contactData);

// ============== LOAN QUOTE ==============
export const requestQuote = (quoteData) => Api.post("/quotes", quoteData);

// ============== LOAN APPLICATIONS ==============
export const submitApplication = (applicationData) => Api.post("/applications", applicationData);
export const getMyApplications = () => Api.get("/applications/my");
export const getApplicationById = (id) => Api.get(`/applications/${id}`);

// ============== ADMIN ==============
export const getAllApplications = () => Api.get("/admin/applications");
export const updateApplicationStatus = (id, statusData) => Api.put(`/admin/applications/${id}/status`, statusData);
export const getDashboardStats = () => Api.get("/admin/dashboard");

// ============== USERS (ADMIN) ==============
export const getAllUsers = (params) => Api.get("/admin/users", { params });
export const getUserById = (id) => Api.get(`/admin/users/${id}`);

// ============== LOANS (ADMIN) ==============
export const createLoan = (loanData) => Api.post("/admin/loans", loanData);
export const updateLoan = (id, loanData) => Api.put(`/admin/loans/${id}`, loanData);
export const deleteLoan = (id) => Api.delete(`/admin/loans/${id}`);
export const toggleLoanStatus = (id, isActive) => Api.patch(`/admin/loans/${id}/status`, { isActive });

// ============== QUOTES (ADMIN) ==============
export const getAllQuotes = (params) => Api.get("/quotes", { params });
export const updateQuoteStatus = (id, status) => Api.patch(`/quotes/${id}/status`, { status });
export const deleteQuote = (id) => Api.delete(`/quotes/${id}`);

// ============== CONTACTS (ADMIN) ==============
export const getAllContacts = () => Api.get("/contact");
export const deleteContact = (id) => Api.delete(`/contact/${id}`);

export default Api;
