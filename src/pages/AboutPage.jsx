import React from 'react';
import { HeroBanner } from '../components/organisms/HeroBanner';
import { SectionEyebrow, Heading, Paragraph } from '../components/atoms/Typography';
import { Badge } from '../components/atoms/Badge';
import { ShieldCheck, HeartHandshake, Eye, Sparkles, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { vaData } from '../data/vaData';

export const AboutPage = () => {
  const { profile, stats, tools } = vaData;

  const values = [
    {
      icon: Sparkles,
      title: "Radical Proactivity",
      desc: "I don't just execute checklists; I constantly look 3 steps ahead. If a meeting changes, I reschedule the prep call and update the briefing notes before you even notice."
    },
    {
      icon: ShieldCheck,
      title: "Ironclad Discretion",
      desc: "From confidential board presentations to personal financial logs, your information is safe. I sign comprehensive NDAs and follow strict cybersecurity hygiene."
    },
    {
      icon: HeartHandshake,
      title: "Reliability as a Habit",
      desc: "When I say a task will be finished by 4:00 PM EST, it is finished by 4:00 PM EST. Zero ghosting, zero excuses, and transparent progress updates."
    },
    {
      icon: Eye,
      title: "SOP-First Mindset",
      desc: "Every recurring task I touch is documented into a step-by-step SOP with Loom video walk-throughs, building institutional memory for your scaling company."
    }
  ];

  return (
    <div>
      <HeroBanner
        eyebrow="Behind The Operations"
        title="Meet Aria Vance"
        description="Your dedicated executive right-hand, systems thinker, and fractional operations partner."
      />

      {/* Main Bio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-xs uppercase font-mono tracking-wider">
                      {profile.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{profile.name}</h3>
                  <p className="text-xs text-purple-300">{profile.title}</p>
                </div>
              </div>
            </div>

            {/* Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <SectionEyebrow>The Journey</SectionEyebrow>
              <Heading level={2}>
                Turning Operational Chaos Into Smooth, Effortless Systems.
              </Heading>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                <Paragraph size="md">
                  Six years ago, I began working with a fast-paced Silicon Valley founder who was working 80-hour weeks. He wasn't spending those hours on vision or fundraising—he was stuck sorting through 200 daily customer tickets, rescheduling conflicting Zoom links, and hunting down invoices.
                </Paragraph>
                <Paragraph size="md">
                  Within 30 days of systematizing his calendar, routing emails with strict priority tags, and building automated Zapier flows, he reclaimed 22 hours per week. That founder went on to raise their Series A.
                </Paragraph>
                <Paragraph size="md">
                  Since then, I have partnered with dozens of venture-backed founders, e-commerce brand owners, and executive consultants across North America, the UK, and Australia. I operate as a strategic business partner—not just an order-taker.
                </Paragraph>
              </div>

              {/* Working Hours Chip */}
              <div className="p-5 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 flex items-center gap-4">
                <Clock className="w-8 h-8 text-purple-600 dark:text-purple-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Synchronous Timezone Coverage
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Working hours: {profile.availableHours}. Fast response times during your core business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-100/60 dark:bg-slate-800/30 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mb-16">
          <SectionEyebrow className="justify-center">Guiding Principles</SectionEyebrow>
          <Heading level={2}>How I Protect Your Time & Peace of Mind</Heading>
          <Paragraph size="md" muted className="mt-3">
            Every partnership is built on accountability, precision, and relentless dedication to your business success.
          </Paragraph>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{val.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software Proficiency Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mb-12">
          <SectionEyebrow className="justify-center">Platforms & Mastery</SectionEyebrow>
          <Heading level={2}>Tool Stack & Workflow Automation</Heading>
          <Paragraph size="md" muted className="mt-2">
            Fully certified and fluent in modern digital workplace platforms.
          </Paragraph>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((t, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between shadow-sm"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{t.category}</span>
                </div>
                <Badge variant="default" size="xs">
                  {t.proficiency}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
