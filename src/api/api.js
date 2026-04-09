import axios from "axios";

/*
==============================
 AXIOS INSTANCE
==============================
*/

const API = axios.create({

  baseURL: "https://darkwebbackend.onrender.com",

  headers: {

    "Content-Type": "application/json"

  },

  timeout: 20000

});



/*
==============================
 SCAN KEYWORD
==============================
*/

export const scanKeyword = async (keyword) => {

  try {

    const res = await API.get("/scan", {

      params: { keyword }

    });

    return res.data;

  }

  catch (error) {

    console.log("Backend sleeping... retrying");



    /* wait for render cold start */

    await new Promise(

      resolve => setTimeout(resolve, 6000)

    );



    try {

      const retry = await API.get("/scan", {

        params: { keyword }

      });

      return retry.data;

    }

    catch (err) {

      console.error("SCAN ERROR:", err);

      throw err;

    }

  }

};



/*
==============================
 THREAT HISTORY
==============================
*/

export const getThreats = async () => {

  try {

    const res = await API.get("/threats");

    return res.data;

  }

  catch (err) {

    console.error("THREATS ERROR:", err);

    throw err;

  }

};



/*
==============================
 INTEL HISTORY
==============================
*/

export const getIntel = async () => {

  try {

    const res = await API.get("/intel");

    return res.data;

  }

  catch (err) {

    console.error("INTEL ERROR:", err);

    throw err;

  }

};



/*
==============================
 REPORT DOWNLOAD
==============================
*/

export const downloadReport = async () => {

  try {

    const res = await API.get("/report", {

      responseType: "blob"

    });

    return res.data;

  }

  catch (err) {

    console.error("REPORT ERROR:", err);

    throw err;

  }

};



export default API;