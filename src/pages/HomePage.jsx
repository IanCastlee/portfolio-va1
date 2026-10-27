import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Calendar, ShieldCheck, Zap, Clock, Users, Award, Star } from 'lucide-react';
import { Button } from '../components/atoms/Button';
import { SectionEyebrow, Heading, Paragraph } from '../components/atoms/Typography';
import { ServiceSummaryCard } from '../components/molecules/ServiceSummaryCard';
import { CaseStudyCard } from '../components/molecules/CaseStudyCard';
import { TestimonialCard } from '../components/molecules/TestimonialCard';
import { vaData } from '../data/vaData';

export const HomePage = () => {
  const { profile, stats, services, caseStudies, testimonials, tools } = vaData;

  const steps = [
    { number: "01", title: "Discovery Call", desc: "A 30-min strategy session to map your daily bottlenecks, preferred tools, and priorities." },
    { number: "02", title: "NDA & Fast Setup", desc: "Mutual NDA signed and encrypted credential handoff via 1Password within 48 hours." },
    { number: "03", title: "Workflow Calibration", desc: "I organize your inbox, calendar, and task boards with standardized SOPs." },
    { number: "04", title: "Effortless Execution", desc: "Continuous daily task execution, proactive problem-solving, and weekly time logs." }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-purple-50/70 via-slate-50 to-slate-50 dark:from-slate-800/40 dark:via-slate-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{profile.availabilityStatus}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Reclaim <span className="text-purple-600 dark:text-purple-400 underline decoration-purple-300 underline-offset-8">20+ Hours</span> of Focus Every Single Week.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
                I partner with high-growth CEOs, founders, and boutique agencies as a high-level <strong>Executive Virtual Assistant & Operations Partner</strong>. Let me handle calendar choreography, inbox zero, customer success, and team task management.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={Calendar}
                >
                  Book Discovery Call
                </Button>
                <Button
                  to="/services"
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                >
                  Explore Services
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>Strict NDA Signed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>EST / PST / AEST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>6+ Yrs Experience</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image & Stats Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white dark:border-slate-800">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs uppercase tracking-wider font-bold text-purple-300 block mb-1">
                      Operations Partner
                    </span>
                    <h3 className="text-xl font-bold">{profile.name}</h3>
                    <p className="text-xs text-slate-300 mt-1">Specialized in Asana, Notion, ClickUp & Zendesk</p>
                  </div>
                </div>

                {/* Floating Stat Chip */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xl">
                    ⚡
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-slate-900 dark:text-white">3,800+</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Hours Reclaimed for Clients</span>
                  </div>
                </div>

                {/* Floating Review Chip */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 py-3 px-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-white">5.0 (48+ Founders)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="py-12 bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-purple-600 dark:text-purple-400 tracking-tight">
                  {stat.value}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tech Stack Proficiency */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <SectionEyebrow className="justify-center">Tech Stack Mastery</SectionEyebrow>
          <Heading level={2}>Seamless Integration With Your Existing Tools</Heading>
          <Paragraph size="md" muted className="mt-3 max-w-xl mx-auto">
            Zero ramp-up time required. I am already fluent in the core platforms modern startups and remote teams depend on.
          </Paragraph>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex flex-col items-center text-center shadow-sm hover:border-purple-400 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold mb-2">
                  {t.name.charAt(0)}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</h4>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">{t.category}</span>
                <span className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-full">
                  {t.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-slate-100/60 dark:bg-slate-800/30 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionEyebrow>Core Capabilities</SectionEyebrow>
              <Heading level={2}>Specialized Operations Support</Heading>
              <Paragraph size="md" muted className="mt-2 max-w-lg">
                Comprehensive executive support designed to relieve cognitive overload and streamline team execution.
              </Paragraph>
            </div>
            <Button to="/services" variant="outline" size="md" icon={ArrowRight}>
              View All 6 Services & Deliverables
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceSummaryCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Collaborative Workflow */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mb-16">
          <SectionEyebrow className="justify-center">Simple Onboarding</SectionEyebrow>
          <Heading level={2}>How We Work Together</Heading>
          <Paragraph size="md" muted className="mt-3">
            Getting high-level administrative support shouldn't create more work for you. Here is our effortless 4-step framework:
          </Paragraph>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm relative overflow-hidden"
              >
                <span className="text-4xl font-extrabold text-purple-200 dark:text-purple-900/40 block mb-4">
                  {st.number}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{st.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study Highlight */}
      <section className="py-20 bg-slate-100/60 dark:bg-slate-800/30 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionEyebrow>Proven Client Wins</SectionEyebrow>
              <Heading level={2}>Real Results for Real Founders</Heading>
              <Paragraph size="md" muted className="mt-2 max-w-lg">
                Explore how operational delegation translated directly into reclaimed time, higher revenue, and zero missed deadlines.
              </Paragraph>
            </div>
            <Button to="/case-studies" variant="outline" size="md" icon={ArrowRight}>
              Read All Case Studies
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <CaseStudyCard caseStudy={caseStudies[0]} />
          </div>
        </div>
      </section>

      {/* Client Endorsements / Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mb-16">
          <SectionEyebrow className="justify-center">Client Endorsements</SectionEyebrow>
          <Heading level={2}>Trusted by Founders & Executives Worldwide</Heading>
          <Paragraph size="md" muted className="mt-3">
            Read what entrepreneurs from New York to Melbourne have to say about partnering with Aria Vance Virtual Co.
          </Paragraph>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
