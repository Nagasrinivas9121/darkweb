import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020617] text-white selection:bg-red-500/30">
        <Routes>
          {/* Public Route */}

          {/* Protected Dashboard Route */}
          <Route 
            path="/" 
            element={
            
                <Dashboard />
            } 
          />

          {/* Catch-all Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;