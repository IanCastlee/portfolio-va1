import React from 'react';
import { HeroBanner } from '../components/organisms/HeroBanner';
import { SectionEyebrow, Heading, Paragraph } from '../components/atoms/Typography';
import { ServiceSummaryCard } from '../components/molecules/ServiceSummaryCard';
import { Button } from '../components/atoms/Button';
import { HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { vaData } from '../data/vaData';

export const ServicesPage = () => {
  const { services } = vaData;

  return (
    <div>
      <HeroBanner
        eyebrow="Tailored Executive Solutions"
        title="Services & Core Capabilities"
        description="From day-to-day calendar choreography to full project workspace audits, here is how I support your business growth."
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceSummaryCard
                key={service.id}
                service={service}
                showDeliverables={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Scope / Hybrid Needs Section */}
      <section className="py-16 bg-slate-100/60 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-slate-800 p-10 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md">
          <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Have a Unique or Hybrid Project Requirement?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            Most client retainers are a blend of administrative management, customer support, and project coordination. We can easily customize a flexible hybrid package tailored precisely to your operational workflow.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
            >
              Discuss a Custom Retainer
            </Button>
            <Button
              to="/pricing"
              variant="outline"
              size="lg"
            >
              View Standard Pricing Tiers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
