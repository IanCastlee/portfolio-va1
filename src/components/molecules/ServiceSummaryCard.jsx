import React from 'react';
import { Briefcase, Layers, Headphones, Share2, ShoppingBag, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '../atoms/Button';

const iconMap = {
  Briefcase,
  Layers,
  Headphones,
  Share2,
  ShoppingBag,
  Users
};

export const ServiceSummaryCard = ({ service, showDeliverables = true }) => {
  const IconComponent = iconMap[service.icon] || Briefcase;

  return (
    <div className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {showDeliverables && service.deliverables && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-2 mb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
              Key Deliverables:
            </span>
            {service.deliverables.slice(0, 4).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4">
        <Button
          to="/contact"
          variant="outline"
          size="sm"
          className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all"
        >
          Inquire This Service
        </Button>
      </div>
    </div>
  );
};

export default ServiceSummaryCard;
