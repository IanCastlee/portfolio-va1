import React from 'react';

export const SectionEyebrow = ({ children, className = '' }) => (
  <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-purple-600 dark:text-purple-400 mb-3 bg-purple-50 dark:bg-purple-950/50 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800/60 ${className}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
    <span>{children}</span>
  </div>
);

export const Heading = ({
  level = 2,
  children,
  className = '',
  ...props
}) => {
  const styles = {
    1: 'text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]',
    2: 'text-3xl sm:text-4xl font-bold tracking-tight leading-[1.2]',
    3: 'text-2xl sm:text-3xl font-bold tracking-tight leading-snug',
    4: 'text-xl sm:text-2xl font-bold leading-snug',
    5: 'text-lg font-semibold',
  };

  const Component = `h${level}`;

  return (
    <Component
      className={`text-slate-900 dark:text-white ${styles[level]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Paragraph = ({
  children,
  size = 'md',
  className = '',
  muted = false,
  ...props
}) => {
  const sizes = {
    sm: "text-xs leading-relaxed",
    md: "text-sm sm:text-base leading-relaxed",
    lg: "text-base sm:text-lg leading-relaxed",
    xl: "text-lg sm:text-xl leading-relaxed font-light"
  };

  const color = muted
    ? "text-slate-600 dark:text-slate-400"
    : "text-slate-800 dark:text-slate-200";

  return (
    <p className={`${sizes[size]} ${color} ${className}`} {...props}>
      {children}
    </p>
  );
};
