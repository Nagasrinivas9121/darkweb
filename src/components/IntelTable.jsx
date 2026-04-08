import React from 'react';

/**
 * IntelTable Component
 * Renders a data grid for security intelligence findings.
 */
export default function IntelTable({ data }) {
  // Prevent crash if data is null or undefined
  if (!data || data.length === 0) {
    return (
      <div style={{ color: "#888", textAlign: "center", padding: "2rem" }}>
        No intelligence data found.
      </div>
    );
  }

  const cellStyle = {
    padding: "12px 15px",
    borderBottom: "1px solid #333",
    textAlign: "left"
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: "#1a1a1a",
    color: "#00ff41", // Matrix/Security green for headers
    textTransform: "uppercase",
    fontSize: "0.8rem",
    letterSpacing: "1px"
  };

  return (
    <div style={{ width: "100%", overflowX: "auto", borderRadius: "8px", backgroundColor: "#0f0f0f" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", color: "white", fontFamily: "monospace" }}>
        <thead>
          <tr>
            <th style={headerStyle}>Email</th>
            <th style={headerStyle}>Username</th>
            <th style={headerStyle}>Password</th>
            <th style={headerStyle}>API Key</th>
            <th style={headerStyle}>IP</th>
            <th style={headerStyle}>Domain</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ transition: "background 0.2s" }}>
              <td style={cellStyle}>{row.email || "N/A"}</td>
              <td style={cellStyle}>{row.username || "N/A"}</td>
              <td style={{ ...cellStyle, color: "#ff4d4d" }}>
                {row.password ? "********" : "N/A"} 
                {/* Masking passwords by default is safer for UI display */}
              </td>
              <td style={cellStyle}>
                <code style={{ background: "#222", padding: "2px 4px" }}>
                  {row.api_key ? `${row.api_key.substring(0, 8)}...` : "N/A"}
                </code>
              </td>
              <td style={cellStyle}>{row.ip || "N/A"}</td>
              <td style={cellStyle}>{row.domain || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}