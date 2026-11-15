import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  CreditCard, 
  Send, 
  MoreHorizontal, 
  X, 
  User, 
  TrendingUp, 
  Calendar,
  ChevronRight,
  ShieldCheck,
  Mail,
  Sparkles
} from 'lucide-react';
import { Button } from '../atoms/Button';
import { vaData } from '../../data/vaData';

export const MobileBottomNav = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();

  // Close More drawer automatically on route navigation
  useEffect(() => {
    setIsMoreOpen(false);
  }, [location.pathname]);

  // Lock body scroll when More drawer is open
  useEffect(() => {
    if (isMoreOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMoreOpen]);

  // The 4 most important primary tabs
  const primaryTabs = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Services', path: '/services', icon: Briefcase },
    { label: 'Pricing', path: '/pricing', icon: CreditCard },
    { label: 'Contact', path: '/contact', icon: Send },
  ];

  // Secondary pages accessible via "More"
  const isMoreActive = location.pathname === '/about' || location.pathname === '/case-studies';

  return (
    <>
      {/* Mobile Bottom Tab Bar */}
      <nav 
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/90 dark:border-slate-800 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_24px_rgba(0,0,0,0.5)] transition-colors pb-[env(safe-area-inset-bottom)]"
        aria-label="Mobile Navigation"
      >
        <div className="grid grid-cols-5 h-16 items-center px-2">
          {primaryTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center py-1 transition-all group ${
                    isActive
                      ? 'text-purple-600 dark:text-purple-400 font-bold'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 font-medium'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="relative">
                      <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110 stroke-[2.4]' : 'scale-100'}`} />
                      {isActive && (
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                      )}
                    </div>
                    <span className="text-[11px] tracking-tight mt-1 leading-none">
                      {tab.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}

          {/* 5th Tab: "More" Button */}
          <button
            type="button"
            onClick={() => setIsMoreOpen(true)}
            className={`flex flex-col items-center justify-center py-1 transition-all group ${
              isMoreOpen || isMoreActive
                ? 'text-purple-600 dark:text-purple-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 font-medium'
            }`}
            aria-label="More navigation options"
            aria-expanded={isMoreOpen}
          >
            <div className="relative">
              <MoreHorizontal className={`w-5 h-5 transition-transform duration-200 ${isMoreOpen || isMoreActive ? 'scale-110 stroke-[2.4]' : 'scale-100'}`} />
              {isMoreActive && (
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
              )}
            </div>
            <span className="text-[11px] tracking-tight mt-1 leading-none">
              More
            </span>
          </button>
        </div>
      </nav>

      {/* More Options Drawer (Bottom Sheet) */}
      {isMoreOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
          {/* Dimmed Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMoreOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-Up Bottom Sheet */}
          <div 
            className="relative z-10 bg-white dark:bg-slate-900 rounded-t-[28px] border-t border-slate-200 dark:border-slate-800 p-6 pb-8 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-300"
            role="dialog"
            aria-modal="true"
            aria-label="More options"
          >
            {/* Pill drag indicator */}
            <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-5" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80 mb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Explore E-yhan Virtual Co.</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Additional portfolio sections & quick actions
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMoreOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close more options"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Additional Core Links */}
            <div className="space-y-2.5 mb-6">
              <Link
                to="/about"
                onClick={() => setIsMoreOpen(false)}
                className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                  location.pathname === '/about'
                    ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300'
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200/80 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-sm">About E-yhan</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 font-normal">
                      Background, core working values & tech stack
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </Link>

              <Link
                to="/case-studies"
                onClick={() => setIsMoreOpen(false)}
                className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                  location.pathname === '/case-studies'
                    ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300'
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200/80 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-sm">Client Case Studies</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 font-normal">
                      Problem-Solution breakdowns with measurable ROI
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </Link>
            </div>

            {/* Quick Action Discovery Call */}
            <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/60 mb-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Immediate Booking</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3.5">
                Ready to reclaim 20+ hours each week? Book an introductory 30-minute discovery call directly.
              </p>
              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center shadow-lg shadow-purple-500/20"
                icon={Calendar}
                iconPosition="left"
                onClick={() => setIsMoreOpen(false)}
              >
                Schedule Free Discovery Call
              </Button>
            </div>

            {/* Direct Contact & Availability Footer */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {vaData.profile.availabilityStatus || 'Accepting New Clients'}
                </span>
              </div>
              <a 
                href={`mailto:${vaData.profile.email}`} 
                className="inline-flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{vaData.profile.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileBottomNav;
