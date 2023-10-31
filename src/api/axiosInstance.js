import Axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";

const axios = Axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "application/json" },
});

axios.interceptors.request.use(
  (config) => {
    // Check if a token is available in localStorage
    const token = localStorage.getItem("token");

    // If a token exists, add it to the request headers
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
