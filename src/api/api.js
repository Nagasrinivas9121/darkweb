import axios from "axios";

/*
Backend API URL
*/
const API = axios.create({

  baseURL: "https://darkwebbackend.onrender.com",

  headers: {
    "Content-Type": "application/json",
  },

});


/*
SCAN KEYWORD
*/
export const scanKeyword = async (keyword) => {

  try {

    const response = await API.get("/scan", {

      params: { keyword }

    });

    return response.data;

  } catch (error) {

    console.error("Scan API error:", error);

    throw error;

  }

};


/*
GET THREATS HISTORY
*/
export const getThreats = async () => {

  const response = await API.get("/threats");

  return response.data;

};


/*
GET INTELLIGENCE HISTORY
*/
export const getIntel = async () => {

  const response = await API.get("/intel");

  return response.data;

};


/*
DOWNLOAD REPORT
*/
export const downloadReport = async () => {

  const response = await API.get("/report", {

    responseType: "blob"

  });

  return response.data;

};


export default API;