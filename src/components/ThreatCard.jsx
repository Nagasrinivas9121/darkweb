import React from 'react';

/**
 * ThreatCard Component
 * Displays individual threat intelligence entries with stylized severity levels.
 */
export default function ThreatCard({ data }) {
  // Defensive check: if data is missing, don't crash
  if (!data) return null;

  // Severity color mapping
  const severityMap = {
    CRITICAL: { color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)", border: "#7f1d1d" },
    HIGH: { color: "#f97316", bg: "rgba(249, 115, 22, 0.1)", border: "#7c2d12" },
    MEDIUM: { color: "#eab308", bg: "rgba(234, 179, 8, 0.1)", border: "#713f12" },
    LOW: { color: "#22c55e", bg: "rgba(34, 197, 94, 0.1)", border: "#064e3b" },
  };

  const theme = severityMap[data.severity?.toUpperCase()] || { color: "#94a3b8", bg: "#1e293b", border: "#334155" };

  return (
    <div style={{
      background: "#0f172a",
      color: "white",
      padding: "16px",
      marginBottom: "16px",
      borderRadius: "8px",
      borderLeft: `4px solid ${theme.color}`, // Color-coded accent bar
      borderTop: `1px solid ${theme.border}`,
      borderRight: `1px solid ${theme.border}`,
      borderBottom: `1px solid ${theme.border}`,
      fontFamily: "monospace",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)"
    }}>
      
      {/* Header Info */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <span style={{
          fontSize: "0.75rem",
          fontWeight: "bold",
          padding: "2px 8px",
          borderRadius: "4px",
          backgroundColor: theme.bg,
          color: theme.color,
          border: `1px solid ${theme.color}40`,
          letterSpacing: "1px"
        }}>
          {data.severity || "UNKNOWN"}
        </span>
        
        {data.phishing && (
          <span style={{ fontSize: "0.7rem", color: "#ef4444", fontWeight: "bold", animation: "pulse 2s infinite" }}>
            ⚠️ PHISHING DETECTED
          </span>
        )}
      </div>

      {/* Description / Log Text */}
      <div style={{ 
        fontSize: "0.9rem", 
        lineHeight: "1.5", 
        color: "#cbd5e1",
        backgroundColor: "#020617",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #1e293b"
      }}>
        {data.text || "No threat description available."}
      </div>

      {/* Footer Timestamp or Metadata */}
      <div style={{ marginTop: "12px", fontSize: "0.7rem", color: "#475569", textAlign: "right" }}>
        Source: DarkWeb_Scanner_v3
      </div>
    </div>
  );
}