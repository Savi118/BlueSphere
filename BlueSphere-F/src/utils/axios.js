import axios from "axios";
import { store } from "../redux/store";
import { logout } from "../redux/authSlice";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: true,
});

// -----------------------------
// ADD TOKEN TO EVERY REQUEST
// -----------------------------
api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// -----------------------------
// HANDLE ERRORS GLOBALLY
// -----------------------------
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    // Auto logout on 401 / expired token
    if (status === 401) {
      store.dispatch(logout());
      toast.error("Session expired. Please log in again.");
    }

    // Display API error messages
    if (error.response?.data?.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Something went wrong!");
    }

    return Promise.reject(error);
  }
);

export default api;
