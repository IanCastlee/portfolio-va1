import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '../atoms/Button';

export const PricingCard = ({ plan }) => {
  return (
    <div
      className={`relative p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
        plan.popular
          ? 'bg-white dark:bg-slate-800 border-2 border-purple-600 shadow-2xl shadow-purple-500/10 scale-105 z-10'
          : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-md'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3.5 rounded-full flex items-center gap-1 shadow-md">
          <Star className="w-3.5 h-3.5 fill-white" />
          <span>Most Popular</span>
        </div>
      )}

      <div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
            {plan.name}
          </h3>
          <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 block mb-3">
            {plan.hours}
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {plan.desc}
          </p>
        </div>

        <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
              {plan.price}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              /{plan.period}
            </span>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 block">
            {plan.rateNote}
          </span>
        </div>

        <div className="space-y-3 mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
            What's Included:
          </span>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Button
          to="/contact"
          variant={plan.popular ? 'primary' : 'outline'}
          size="md"
          className="w-full"
        >
          Select {plan.name}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
