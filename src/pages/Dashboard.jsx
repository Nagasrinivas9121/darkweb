import React, { useState } from "react";
import ThreatCard from "../components/ThreatCard";
import IntelTable from "../components/IntelTable";
import Navbar from "../components/Navbar";

import {
  scanKeyword,
  getThreats,
  downloadReport
} from "../api/api";


export default function Dashboard() {

  const [keyword, setKeyword] = useState("");
  const [threats, setThreats] = useState([]);
  const [intel, setIntel] = useState([]);
  const [severity, setSeverity] = useState("LOW");
  const [loading, setLoading] = useState(false);



  /* =========================
     SCAN
  ========================= */

  const handleScan = async () => {

    if (!keyword.trim()) {

      alert("Enter keyword");

      return;

    }

    setLoading(true);

    try {

      const res = await scanKeyword(keyword);

      console.log("API RESULT:", res);


      /* severity */

      setSeverity(res.severity || "LOW");


      /* threats */

      setThreats(res.threats || []);


      /* intelligence */

      const intelObj = res.intel || {};


      const rows = [];


      const maxLength = Math.max(

        intelObj.emails?.length || 0,

        intelObj.usernames?.length || 0,

        intelObj.passwords?.length || 0,

        intelObj.api_keys?.length || 0,

        intelObj.ips?.length || 0,

        intelObj.domains?.length || 0,

        intelObj.financial?.cards?.length || 0,

        intelObj.financial?.crypto_wallets?.length || 0

      );


      for (let i = 0; i < maxLength; i++) {

        rows.push({

          email: intelObj.emails?.[i] || "N/A",

          username: intelObj.usernames?.[i] || "N/A",

          password:

            intelObj.passwords?.[i] ||

            intelObj.financial?.cards?.[i] ||

            "N/A",

          api_key:

            intelObj.api_keys?.[i] ||

            intelObj.financial?.crypto_wallets?.[i] ||

            "N/A",

          ip: intelObj.ips?.[i] || "N/A",

          domain: intelObj.domains?.[i] || "N/A"

        });

      }


      setIntel(rows);

    }

    catch (err) {

      console.error("SCAN ERROR:", err);

      alert("Scan failed");

    }

    setLoading(false);

  };



  /* =========================
     HISTORY
  ========================= */

  const handleLoadIntel = async () => {

    try {

      const res = await getThreats();

      console.log("HISTORY:", res);

      setIntel(res.data || []);

    }

    catch {

      alert("History load failed");

    }

  };



  /* =========================
     EXPORT
  ========================= */

  const handleDownloadReport = async () => {

    try {

      const blob = await downloadReport();

      const url = window.URL.createObjectURL(

        new Blob([blob])

      );

      const link = document.createElement("a");

      link.href = url;

      link.download = "darkweb_report.pdf";

      link.click();

    }

    catch {

      alert("Export failed");

    }

  };



  /* =========================
     UI
  ========================= */

  return (

    <div style={page}>

      <Navbar />


      <div style={container}>


        <h2 style={title}>

          Darkweb Intelligence Engine

        </h2>


        <p style={subtitle}>

          Scan emails, domains, IPs, API keys & leaked credentials

        </p>



        {/* SEARCH */}

        <div style={searchBox}>


          <input

            value={keyword}

            onChange={(e)=>setKeyword(e.target.value)}

            placeholder="google.com or admin@email.com"

            style={input}

          />


          <button

            onClick={handleScan}

            style={btnBlue}

          >

            {loading ? "Scanning..." : "Search"}

          </button>



          <button

            onClick={handleLoadIntel}

            style={btnGray}

          >

            History

          </button>



          <button

            onClick={handleDownloadReport}

            style={btnRed}

          >

            Export

          </button>


        </div>



        {/* SEVERITY */}

        <div style={severityBox(severity)}>

          Risk Level: {severity}

        </div>



        {/* GRID */}

        <div style={grid}>


          {/* THREATS */}

          <div>

            <h3 style={sectionTitle}>

              Threat Feed

            </h3>


            {

              threats.length === 0

              ?

              <div style={empty}>

                No threats detected

              </div>

              :

              threats.map(

                (t,i)=>

                <ThreatCard key={i} data={t}/>

              )

            }

          </div>



          {/* INTELLIGENCE */}

          <div>

            <h3 style={sectionTitle}>

              Extracted Intelligence

            </h3>


            <IntelTable data={intel}/>

          </div>



        </div>


      </div>


    </div>

  );

}



/* =========================
   STYLES
========================= */

const page = {

  background:"#020617",

  minHeight:"100vh",

  color:"white"

};


const container = {

  maxWidth:"1200px",

  margin:"auto",

  padding:"40px 20px"

};


const title = {

  fontSize:"28px",

  fontWeight:"bold"

};


const subtitle = {

  color:"#64748b",

  marginBottom:"30px"

};


const searchBox = {

  display:"flex",

  gap:"10px",

  background:"#0f172a",

  padding:"20px",

  borderRadius:"10px",

  marginBottom:"25px"

};


const input = {

  flex:1,

  padding:"12px",

  background:"#020617",

  border:"1px solid #334155",

  borderRadius:"6px",

  color:"white"

};


const btnBlue = {

  background:"#2563eb",

  border:"none",

  padding:"10px 18px",

  borderRadius:"6px",

  color:"white"

};


const btnGray = {

  background:"#1e293b",

  border:"none",

  padding:"10px 18px",

  borderRadius:"6px",

  color:"white"

};


const btnRed = {

  background:"#dc2626",

  border:"none",

  padding:"10px 18px",

  borderRadius:"6px",

  color:"white"

};


const grid = {

  display:"grid",

  gridTemplateColumns:"1fr 1fr",

  gap:"30px"

};


const sectionTitle = {

  marginBottom:"15px",

  color:"#94a3b8",

  textTransform:"uppercase"

};


const empty = {

  padding:"40px",

  border:"1px dashed #334155",

  borderRadius:"10px",

  textAlign:"center",

  color:"#64748b"

};


const severityBox = (level) => ({

  padding:"10px",

  marginBottom:"20px",

  borderRadius:"6px",

  fontWeight:"bold",

  background:

    level==="CRITICAL" ? "#7f1d1d"

    :

    level==="HIGH" ? "#991b1b"

    :

    level==="MEDIUM" ? "#92400e"

    :

    "#064e3b"

});