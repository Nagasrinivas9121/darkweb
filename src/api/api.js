import axios from "axios";

/**
 * Global Axios Instance
 * Centralizes the base URL and default headers.
 */
const API = axios.create({
  baseURL: "https://darkwebbackend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 1. Authentication
 */
export const loginUser = (credentials) => {
  return API.post("/login", credentials);
};

/**
 * 2. Keyword Scanning
 */
export const scanKeyword = (keyword) => {
  return API.get("/scan", {
    params: { keyword },
  });
};

/**
 * 3. Fetch Threat Intelligence
 */
export const getThreats = () => {
  return API.get("/threats");
};

export const getIntel = () => {
  return API.get("/threats");
};

/**
 * 4. Download Report
 */
export const downloadReport = () => {
  return API.get("/report", {
    responseType: "blob",
  });
};

export default API;