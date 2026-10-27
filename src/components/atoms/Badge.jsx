import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  size = 'sm',
  className = ''
}) => {
  const base = "inline-flex items-center font-medium rounded-full tracking-tight transition-colors";

  const sizes = {
    xs: "text-[11px] px-2.5 py-0.5 gap-1",
    sm: "text-xs px-3 py-1 gap-1.5",
    md: "text-sm px-3.5 py-1.5 gap-2"
  };

  const variants = {
    default: "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60",
    success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60",
    neutral: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
    outline: "border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-400"
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
