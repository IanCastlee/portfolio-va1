import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';
import { CtaBanner } from '../organisms/CtaBanner';
import { PageLoader } from '../molecules/PageLoader';
import { vaData } from '../../data/vaData';

export const MainLayout = () => {
  const { pathname } = useLocation();
  const [pageLoading, setPageLoading] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Trigger smooth luxury loader on route change
  useEffect(() => {
    setIsExiting(false);
    setPageLoading(true);
    window.scrollTo({ top: 0, behavior: 'instant' });

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 420);

    const finishTimer = setTimeout(() => {
      setPageLoading(false);
      setIsExiting(false);
    }, 700);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [pathname]);

  const isContactPage = pathname === '/contact';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Route Transition Loader */}
      {pageLoading && <PageLoader isExiting={isExiting} />}

      <Navbar brandName={vaData.profile.brandName} name={vaData.profile.name} />

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Show CTA banner on all pages except the contact page */}
      {!isContactPage && <CtaBanner />}

      <Footer profile={vaData.profile} />
    </div>
  );
};

export default MainLayout;
