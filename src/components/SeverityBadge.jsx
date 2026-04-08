import React from 'react';

/**
 * SeverityBadge Component
 * Renders a color-coded badge based on threat levels.
 */
function SeverityBadge({ level }) {
  // Normalize input to uppercase to prevent casing bugs
  const severity = level?.toUpperCase() || "UNKNOWN";

  // Mapping levels to specific Tailwind styles
  const styles = {
    CRITICAL: "bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] animate-pulse",
    HIGH: "bg-orange-500 text-white",
    MEDIUM: "bg-yellow-500 text-black", // Black text for better contrast on yellow
    LOW: "bg-emerald-500 text-white",
    UNKNOWN: "bg-zinc-600 text-zinc-300",
  };

  // Default to UNKNOWN style if the level isn't in our map
  const activeStyle = styles[severity] || styles.UNKNOWN;

  return (
    <span
      className={`
        inline-block 
        px-2.5 
        py-0.5 
        rounded 
        text-[10px] 
        font-bold 
        font-mono 
        tracking-wider 
        ${activeStyle}
      `}
    >
      {severity}
    </span>
  );
}

export default SeverityBadge;