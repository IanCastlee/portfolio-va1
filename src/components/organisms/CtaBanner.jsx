import React from 'react';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../atoms/Button';

export const CtaBanner = () => {
  return (
    <section className="py-20 sm:py-24 bg-purple-700 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-800/80 border border-purple-500/30 text-xs font-semibold uppercase tracking-wider text-purple-200 mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Frictionless 48-Hour Onboarding</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Ready to Reclaim 20+ Hours Every Single Week?
        </h2>

        <p className="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Stop drowning in administrative friction and endless emails. Let’s streamline your daily operations so you can focus 100% on high-level growth.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/contact"
            variant="secondary"
            size="lg"
            className="bg-white text-purple-900 hover:bg-purple-50 hover:text-purple-900 shadow-xl"
            icon={Calendar}
          >
            Schedule Free 30-Min Discovery Call
          </Button>
          <Button
            to="/pricing"
            variant="outline"
            size="lg"
            className="border-purple-300 text-white hover:bg-purple-800/80 hover:border-white"
            icon={ArrowRight}
          >
            Explore Retainer Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
