import React from 'react';
import { TrendingUp, Quote, CheckCircle2 } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const CaseStudyCard = ({ caseStudy }) => {
  return (
    <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <Badge variant="default" size="sm">
          {caseStudy.clientType}
        </Badge>
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
          Duration: {caseStudy.duration}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        {caseStudy.title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
          <span className="text-xs uppercase font-bold tracking-wider text-rose-500 dark:text-rose-400 block mb-2">
            The Bottleneck & Challenge
          </span>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>

        <div className="p-5 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40">
          <span className="text-xs uppercase font-bold tracking-wider text-purple-600 dark:text-purple-400 block mb-2">
            The Strategic Solution
          </span>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {caseStudy.solution}
          </p>
        </div>
      </div>

      {/* Results Checklist */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
          <TrendingUp className="w-4 h-4" />
          <span>Measurable Business Outcomes:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {caseStudy.results.map((res, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{res}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Quote */}
      {caseStudy.testimonial && (
        <div className="p-5 rounded-xl bg-slate-100/70 dark:bg-slate-900/80 border-l-4 border-purple-600">
          <p className="text-sm italic text-slate-700 dark:text-slate-300 mb-2">
            "{caseStudy.testimonial}"
          </p>
          <span className="text-xs font-bold text-slate-900 dark:text-white">
            — {caseStudy.author}
          </span>
        </div>
      )}
    </div>
  );
};

export default CaseStudyCard;
