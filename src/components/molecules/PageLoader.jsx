import React from 'react';
import { vaData } from '../../data/vaData';

export const PageLoader = ({ isExiting = false }) => {
  const name = vaData?.profile?.name || 'E-yhan';
  const initials = name.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase() || 'EY';

  return (
    <div
      aria-label="Loading page content"
      role="status"
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-out ${
        isExiting
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100 pointer-events-auto'
      } bg-white/75 dark:bg-[#0b0f19]/80 backdrop-blur-md`}
    >
      {/* Top Luxury Progress Filament */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-slate-200/50 dark:bg-slate-800/50 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-amber-300 w-full animate-loader-progress shadow-[0_0_12px_rgba(147,51,234,0.6)]" />
      </div>

      {/* Elegant Center Medallion */}
      <div className="relative flex flex-col items-center">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 via-indigo-500/20 to-amber-400/10 rounded-full blur-2xl animate-pulse-glow" />

        {/* Outer Frosted Glass Vessel */}
        <div className="relative flex flex-col items-center px-8 py-7 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Concentric Orbital Rings with Monogram */}
          <div className="relative w-20 h-20 flex items-center justify-center mb-4">
            {/* Outer Subtle Guide Track */}
            <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-slate-800/80" />

            {/* Slow Rotating Luxury Accent Ring */}
            <div className="absolute inset-0 rounded-full border border-transparent border-t-purple-600 dark:border-t-purple-400 border-r-indigo-500/50 animate-spin-slow" />

            {/* Inner Counter-spinning Fine Dotted Orbit */}
            <div
              className="absolute inset-2 rounded-full border border-purple-400/20 dark:border-purple-500/20"
              style={{ animation: 'spinSlow 6s linear infinite reverse' }}
            />

            {/* Monogram Seal */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-50 via-white to-purple-100/50 dark:from-slate-800 dark:via-slate-850 dark:to-purple-950/40 border border-purple-200/60 dark:border-purple-500/30 flex items-center justify-center shadow-inner">
              <span className="font-serif italic text-lg font-semibold tracking-wider bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 dark:from-purple-300 dark:via-indigo-200 dark:to-purple-400 bg-clip-text text-transparent">
                {initials}
              </span>
            </div>
          </div>

          {/* Typography & Editorial Branding */}
          <div className="text-center space-y-1">
            <h4 className="text-[12px] font-bold tracking-[0.32em] uppercase text-slate-800 dark:text-slate-100">
              {name}
            </h4>
            <p className="text-[9px] font-medium tracking-[0.24em] uppercase text-purple-600 dark:text-purple-400">
              Executive Operations
            </p>
          </div>

          {/* Minimalist Micro Progress Bar */}
          <div className="mt-4 w-20 h-[2px] bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full animate-loader-progress" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
