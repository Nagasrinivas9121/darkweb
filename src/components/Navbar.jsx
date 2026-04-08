import React from 'react';

/**
 * Navbar Component
 * Features a sticky header, status indicator, and responsive layout.
 */
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-zinc-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo and Brand Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center bg-red-600/10 p-2 rounded border border-red-600/20">
            {/* Simple Security Icon (SVG) */}
            <svg 
              className="w-5 h-5 text-red-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          
          <h1 className="text-xl font-bold font-mono tracking-tighter">
            DARK WEB <span className="text-zinc-500 font-light">INTELLIGENCE</span>
          </h1>
        </div>

        {/* Dashboard Status Section */}
        <div className="hidden md:flex items-center gap-6 text-sm font-mono">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-zinc-400 uppercase text-[10px] tracking-widest">
              Live Monitoring: <span className="text-white">Active</span>
            </span>
          </div>
          
          <div className="h-4 w-[1px] bg-zinc-800"></div>
          
          <div className="text-zinc-400 uppercase text-[10px] tracking-widest">
            v3.0.2
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;