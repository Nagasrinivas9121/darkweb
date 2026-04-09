import axios from "axios";

/*
GLOBAL API CONFIG
*/
const API = axios.create({

  baseURL: "https://darkwebbackend.onrender.com",

  headers: {

    "Content-Type": "application/json",

  },

});


/*
1. LOGIN (optional)
*/
export const loginUser = async (credentials) => {

  try {

    const res = await API.post("/login", credentials);

    return res.data;

  } catch (error) {

    console.error("Login error:", error);

    throw error;

  }

};


/*
2. SCAN KEYWORD
*/
export const scanKeyword = async (keyword) => {

  try {

    const res = await API.get("/scan", {

      params: { keyword },

    });

    return res.data;

  } catch (error) {

    console.error("Scan failed:", error);

    throw error;

  }

};


/*
3. GET THREATS HISTORY
*/
export const getThreats = async () => {

  try {

    const res = await API.get("/threats");

    return res.data;

  } catch (error) {

    console.error("Threat fetch error:", error);

    throw error;

  }

};


/*
4. GET INTELLIGENCE HISTORY
*/
export const getIntel = async () => {

  try {

    const res = await API.get("/intel");

    return res.data;

  } catch (error) {

    console.error("Intel fetch error:", error);

    throw error;

  }

};


/*
5. DOWNLOAD REPORT
*/
export const downloadReport = async () => {

  try {

    const res = await API.get("/report", {

      responseType: "blob",

    });

    return res.data;

  } catch (error) {

    console.error("Report download error:", error);

    throw error;

  }

};


export default API;