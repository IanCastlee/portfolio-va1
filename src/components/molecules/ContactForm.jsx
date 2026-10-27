import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Input, TextArea } from '../atoms/Input';
import { Button } from '../atoms/Button';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: 'Executive & Administrative Support',
    estimatedHours: 'Growth Partner (40 hrs/mo)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center justify-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Discovery Request Received!
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mb-6 leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.name}</span>. I will review your operational requirements and reach out via email within 24 hours to schedule our discovery call.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              company: '',
              serviceInterest: 'Executive & Administrative Support',
              estimatedHours: 'Growth Partner (40 hrs/mo)',
              message: ''
            });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Full Name"
          id="name"
          placeholder="e.g. Marcus Thorne"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          label="Work Email Address"
          id="email"
          type="email"
          placeholder="marcus@payflow.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Company / Brand Name"
          id="company"
          placeholder="PayFlow Technologies"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="serviceInterest" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Primary Area of Need
          </label>
          <select
            id="serviceInterest"
            value={formData.serviceInterest}
            onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-purple-600 text-sm shadow-sm"
          >
            <option value="Executive & Administrative Support">Executive & Administrative Support</option>
            <option value="Project Management & SOP Building">Project Management & SOP Building</option>
            <option value="Customer Support & Community Care">Customer Support & Community Care</option>
            <option value="Social Media & Content Operations">Social Media & Content Operations</option>
            <option value="E-Commerce & Store Operations">E-Commerce & Store Operations</option>
            <option value="CRM & Lead Management">CRM & Lead Management</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="estimatedHours" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Preferred Retainer Tier
        </label>
        <select
          id="estimatedHours"
          value={formData.estimatedHours}
          onChange={(e) => setFormData({ ...formData, estimatedHours: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-purple-600 text-sm shadow-sm"
        >
          <option value="Starter Retainer (20 hrs/mo) - $600">Starter Retainer (20 hrs/mo) - $600</option>
          <option value="Growth Partner (40 hrs/mo) - $1,100">Growth Partner (40 hrs/mo) - $1,100 (Recommended)</option>
          <option value="Executive Dedicated (80 hrs/mo) - $2,000">Executive Dedicated (80 hrs/mo) - $2,000</option>
          <option value="Custom Project Scope">Custom Project Scope</option>
        </select>
      </div>

      <TextArea
        label="What is your biggest operational bottleneck right now?"
        id="message"
        rows={4}
        placeholder="Briefly describe what tasks are taking up too much of your time, what tools you currently use, and your ideal timeline..."
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={loading}
        icon={Send}
      >
        {loading ? 'Submitting Discovery Request...' : 'Book 30-Min Discovery Call'}
      </Button>
    </form>
  );
};

export default ContactForm;
