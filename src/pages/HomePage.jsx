import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Calendar, ShieldCheck, Zap, Clock, Users, Award, Star, Check, Mail, Bell, Sparkles } from 'lucide-react';
import { Button } from '../components/atoms/Button';
import { SectionEyebrow, Heading, Paragraph } from '../components/atoms/Typography';
import { ToolLogo } from '../components/atoms/ToolLogo';
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

  const operationalGallery = [
    {
      title: "Executive Calendar Mastery",
      category: "Calendar Choreography",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      description: "Color-coded priority buffers, timezone synchronization, and zero double-booked meetings."
    },
    {
      title: "Notion Systems & SOP Hubs",
      category: "Operations Architecture",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
      description: "Turning recurring manual tasks into step-by-step institutional guides with Loom walkthroughs."
    },
    {
      title: "Zero-Inbox Triage System",
      category: "Inbox Zero Protocol",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      description: "Automated filters, VIP labeling, and canned templates clearing out 150+ daily emails."
    },
    {
      title: "Global Client Coordination",
      category: "Worldwide Remote Sync",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      description: "Seamless team accountability across New York, London, Singapore, and Sydney timezones."
    }
  ];

  return (
    <div>
      {/* Hero Section — Perfectly balanced with wide, expansive showcase matching user's red box */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-8 lg:pb-16 overflow-hidden bg-gradient-to-b from-purple-50/70 via-slate-50 to-slate-50 dark:from-slate-800/40 dark:via-slate-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-xs font-semibold text-emerald-800 dark:text-emerald-300 mb-3 sm:mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{profile.availabilityStatus}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-4">
                Reclaim <span className="text-purple-600 dark:text-purple-400 underline decoration-purple-300 dark:decoration-purple-500 underline-offset-8">20+ Hours</span> of Focus Every Single Week.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-6 font-normal">
                I partner with high-growth CEOs, founders, and boutique agencies as a high-level <strong>Executive Virtual Assistant & Operations Partner</strong>. Let me handle calendar choreography, inbox zero, customer success, and team task management.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 mb-6">
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
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 w-full max-w-xl">
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

            {/* Right Showcase — Expanded Wide & Commanding (Exactly fills user's red box) */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-[480px] xl:max-w-[530px]">
                {/* Main Executive Portrait Card — Wide, balanced, proportional aspect ratio */}
                <div className="relative rounded-3xl overflow-hidden aspect-[16/13] sm:aspect-[4/3] lg:aspect-[16/13] w-full shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-purple-300 block mb-0.5">
                      Operations Partner
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold">{profile.name}</h3>
                    <p className="text-xs text-slate-300 mt-0.5">Fluent in Asana, Notion, ClickUp & Zendesk</p>
                  </div>
                </div>

                {/* Floating Widget 1: Live Notification Pill */}
                <div className="absolute -top-3.5 -left-3 sm:-top-4 sm:-left-5 bg-white dark:bg-slate-800 p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 max-w-[240px] z-20">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] leading-tight">
                    <span className="font-bold text-slate-800 dark:text-white block">Inbox Zero Achieved</span>
                    <span className="text-slate-500 dark:text-slate-400">0 unread emails today</span>
                  </div>
                </div>

                {/* Floating Widget 2: Hours Saved Metric (Within safe bounds) */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg shrink-0">
                    ⚡
                  </div>
                  <div>
                    <span className="block text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">3,800+ hrs</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Reclaimed for CEOs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Brand Logobar */}
      <section className="py-8 bg-white dark:bg-slate-800/80 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 whitespace-nowrap">
              Trusted by leaders backed by:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-400 dark:text-slate-500 font-bold text-sm tracking-wider">
              <span className="hover:text-purple-600 transition-colors">Y COMBINATOR ALUMNI</span>
              <span className="hover:text-purple-600 transition-colors">TECHSTARS</span>
              <span className="hover:text-purple-600 transition-colors">SEQUOIA SCOUTS</span>
              <span className="hover:text-purple-600 transition-colors">MAVEN INSTRUCTORS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Workspace & Operations Gallery Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionEyebrow>Inside The Operations</SectionEyebrow>
              <Heading level={2}>A Look Into Frictionless Daily Management</Heading>
              <Paragraph size="md" muted className="mt-2 max-w-xl">
                See how precision systems transform messy, scattered tasks into streamlined daily executive momentum.
              </Paragraph>
            </div>
            <Button to="/services" variant="outline" size="sm" icon={ArrowRight}>
              See All Capabilities
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalGallery.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-purple-700 dark:text-purple-300 px-2.5 py-1 rounded-full backdrop-blur-sm border border-slate-200/50 dark:border-slate-700">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tech Stack Proficiency with Real Brand Logos */}
      <section className="py-20 bg-white dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <SectionEyebrow className="justify-center">Tech Stack Mastery</SectionEyebrow>
          <Heading level={2}>Seamless Integration With Your Existing Tools</Heading>
          <Paragraph size="md" muted className="mt-3 max-w-xl mx-auto">
            Zero ramp-up time required. I am already fluent in the core platforms modern startups and remote teams depend on.
          </Paragraph>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {tools.map((t, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 flex flex-col items-center text-center shadow-sm hover:border-purple-500 hover:shadow-lg transition-all duration-200"
              >
                {/* Real Brand Logo */}
                <div className="mb-3 transform group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                  <ToolLogo name={t.name} className="w-10 h-10" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{t.name}</h4>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">{t.category}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/80 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800/60">
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
