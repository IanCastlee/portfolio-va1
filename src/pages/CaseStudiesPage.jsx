import React from 'react';
import { HeroBanner } from '../components/organisms/HeroBanner';
import { CaseStudyCard } from '../components/molecules/CaseStudyCard';
import { SectionEyebrow, Heading, Paragraph } from '../components/atoms/Typography';
import { vaData } from '../data/vaData';

export const CaseStudiesPage = () => {
  const { caseStudies, stats } = vaData;

  return (
    <div>
      <HeroBanner
        eyebrow="Measurable Business Wins"
        title="Client Case Studies & Results"
        description="Detailed breakdowns of how strategic delegation and operational rigor helped our clients scale with clarity and ease."
      />

      {/* Case Studies List */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-12 max-w-5xl">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} caseStudy={study} />
          ))}
        </div>
      </section>

      {/* Summary Metrics Bar */}
      <section className="py-16 bg-purple-50 dark:bg-purple-950/30 border-t border-purple-200 dark:border-purple-900/40">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center max-w-2xl mb-10">
          <SectionEyebrow className="justify-center">Aggregate Impact</SectionEyebrow>
          <Heading level={2}>The Numbers Behind The Partnerships</Heading>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                <span className="text-3xl font-extrabold text-purple-600 dark:text-purple-400 block mb-1">
                  {st.value}
                </span>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
