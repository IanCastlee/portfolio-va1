import React from 'react';

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm transition-all duration-300">
      {/* Top Animated Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 w-full animate-pulse" />
      </div>

      {/* Center Branded Pulse */}
      <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl">
        <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center font-extrabold text-xl shadow-lg shadow-purple-500/30 animate-bounce">
          AV
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Loading View...
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
