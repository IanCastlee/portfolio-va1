import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/atoms/Button';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <span className="text-7xl font-extrabold text-purple-600 dark:text-purple-400 mb-4">
        404
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-8">
        The page you are looking for might have been moved, renamed, or is temporarily unavailable.
      </p>
      <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
        Return to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
