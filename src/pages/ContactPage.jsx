import React from 'react';
import { HeroBanner } from '../components/organisms/HeroBanner';
import { ContactForm } from '../components/molecules/ContactForm';
import { SectionEyebrow, Heading, Paragraph } from '../components/atoms/Typography';
import { Mail, Phone, MapPin, Calendar, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { vaData } from '../data/vaData';

export const ContactPage = () => {
  const { profile } = vaData;

  return (
    <div>
      <HeroBanner
        eyebrow="Get In Touch"
        title="Schedule Your 30-Minute Discovery Call"
        description="Let's discuss where your business is losing hours and map out an operational game plan to get them back."
      />

      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Contact Info & Credibility */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionEyebrow>Direct Contact</SectionEyebrow>
                <Heading level={2} className="mb-4">
                  I'm Here to Help You Thrive.
                </Heading>
                <Paragraph size="md" muted>
                  Whether you need an immediate inbox detox or a long-term operations partner, fill out the form or reach out directly.
                </Paragraph>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 dark:text-slate-500 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 dark:text-slate-500 block">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 dark:text-slate-500 block">
                      Working Hours
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {profile.availableHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="p-6 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  <span>What happens after you submit?</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>I personally review your message within 24 hours.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>You receive a link to pick a convenient 30-min Zoom slot.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>No aggressive sales pitch—just a genuine fit assessment.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
