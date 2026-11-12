import React, { useEffect, useState } from 'react';

/**
 * Scrollytelling Progress Bar for VA Portfolio
 * Tracks vertical scroll percentage and renders a glowing purple/indigo filament
 * at the very top of the viewport.
 */
export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-purple-100/30 dark:bg-purple-950/40 overflow-hidden"
    >
      <div
        className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
