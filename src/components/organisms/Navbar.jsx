import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Briefcase, Menu, X, ArrowRight, Calendar } from 'lucide-react';
import { ThemeToggle } from '../molecules/ThemeToggle';
import { Button } from '../atoms/Button';

export const Navbar = ({ brandName = "Aria Vance Virtual Co." }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-9 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
            AV
          </div>
          <div>
            <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white block leading-tight">
              Aria Vance
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

        {/* Right CTA & Theme Switcher */}
        <div className="hidden sm:flex items-center gap-3">
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

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-3 animate-fadeIn">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              Book Discovery Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
