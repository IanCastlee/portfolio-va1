import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqAccordion = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <span className="text-base sm:text-lg">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-4 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
