import React from 'react';
import { Quote, Star } from 'lucide-react';

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-1 text-amber-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400" />
          ))}
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            {testimonial.author}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {testimonial.role} • {testimonial.location}
          </p>
        </div>
        <Quote className="w-6 h-6 text-purple-200 dark:text-purple-900/60" />
      </div>
    </div>
  );
};

export default TestimonialCard;
