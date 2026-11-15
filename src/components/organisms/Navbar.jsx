import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { ThemeToggle } from '../molecules/ThemeToggle';
import { Button } from '../atoms/Button';

export const Navbar = ({ brandName = "E-yhan Virtual Co.", name = "E-yhan" }) => {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' }
  ];

  const initials = name ? name.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase() : 'EY';

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
            {initials}
          </div>
          <div>
            <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white block leading-tight">
              {name}
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 block">
              Virtual Operations
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right CTA & Theme Switcher */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            to="/contact"
            variant="primary"
            size="sm"
            icon={Calendar}
          >
            Book Discovery Call
          </Button>
        </div>

        {/* Mobile Right: Theme Switcher situated right where the menu used to be */}
        <div className="flex md:hidden items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
