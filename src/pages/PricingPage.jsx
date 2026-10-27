import React from 'react';
import { HeroBanner } from '../components/organisms/HeroBanner';
import { PricingCard } from '../components/molecules/PricingCard';
import { FaqAccordion } from '../components/molecules/FaqAccordion';
import { SectionEyebrow, Heading, Paragraph } from '../components/atoms/Typography';
import { ShieldCheck, Clock, RefreshCw } from 'lucide-react';
import { vaData } from '../data/vaData';

export const PricingPage = () => {
  const { pricingPlans, faqs } = vaData;

  return (
    <div>
      <HeroBanner
        eyebrow="Straightforward & Transparent"
        title="Predictable Monthly Retainer Packages"
        description="Choose the right level of dedicated support for your stage of growth. No surprise fees, no hidden overhead."
      />

      {/* Pricing Cards Grid */}
      <section className="py-20">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-9">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
            {pricingPlans.map((plan, idx) => (
              <PricingCard key={idx} plan={plan} />
            ))}
          </div>

          {/* Guarantees Row */}
          <div className="mt-16 p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center shadow-sm">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Mutual NDA Signed</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">100% confidential data and intellectual property protection.</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Precise Time Tracking</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Detailed down-to-the-minute weekly Toggl reports.</p>
            </div>
            <div className="flex flex-col items-center">
              <RefreshCw className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Flexible Scalability</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Upgrade, pause, or adjust hours as your business needs evolve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-100/60 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-9 text-center max-w-2xl mb-12">
          <SectionEyebrow className="justify-center">Got Questions?</SectionEyebrow>
          <Heading level={2}>Frequently Asked Questions</Heading>
          <Paragraph size="md" muted className="mt-2">
            Everything you need to know about working with an executive virtual assistant.
          </Paragraph>
        </div>

        <div className="max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-9">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
