import axios from "axios";

/**
 * Global Axios Instance
 * Centralizes the base URL and default headers.
 */
const API = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 1. Authentication
 * Used by Login.jsx
 */
export const loginUser = (credentials) => {
  return API.post("/login", credentials);
};

/**
 * 2. Keyword Scanning
 * Used by Dashboard.jsx
 */
export const scanKeyword = (keyword) => {
  return API.get("/scan", {
    params: { keyword },
  });
};

/**
 * 3. Fetching Intelligence / Threats
 * Included both names to match your Dashboard imports
 */
export const getThreats = () => {
  return API.get("/threats");
};

export const getIntel = () => {
  return API.get("/threats"); // Alias for getThreats
};

/**
 * 4. Reporting
 * Used for file downloads
 */
export const downloadReport = () => {
  // Fixed: Changed 'api' to 'API' to match the constant above
  return API.get("/report", {
    responseType: "blob",
  });
};

// Fixed: Changed 'api' to 'API'
export default API;