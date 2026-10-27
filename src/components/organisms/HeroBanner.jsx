import React from 'react';
import { SectionEyebrow, Heading, Paragraph } from '../atoms/Typography';

export const HeroBanner = ({
  eyebrow,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`py-16 sm:py-20 bg-gradient-to-b from-purple-50/60 to-transparent dark:from-slate-800/40 dark:to-transparent border-b border-slate-200/60 dark:border-slate-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        {eyebrow && <SectionEyebrow className="justify-center mb-4">{eyebrow}</SectionEyebrow>}
        <Heading level={1} className="mb-4">
          {title}
        </Heading>
        {description && (
          <Paragraph size="lg" muted className="max-w-2xl mx-auto">
            {description}
          </Paragraph>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
