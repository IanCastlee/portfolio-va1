import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export const Footer = ({ profile }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold">
                AV
              </div>
              <span className="font-bold text-xl text-white">
                Aria Vance Virtual Co.
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Executive-level virtual assistance and fractional operations management. Freeing founders and executives from daily admin burnout since 2018.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-300 font-medium">{profile.availabilityStatus}</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About & Bio</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Retainer Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Capabilities
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Calendar & Inbox</li>
              <li>SOP Documentation</li>
              <li>ClickUp / Asana Setup</li>
              <li>Customer Support</li>
              <li>Zapier Automations</li>
              <li>E-Commerce Ops</li>
            </ul>
          </div>

          {/* Direct Contact info */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h5>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">{profile.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs">{profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {profile.brandName}. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span>Confidentiality & NDA Guaranteed</span>
            <span>•</span>
            <Link to="/contact" className="text-purple-400 hover:underline">Schedule Discovery Call</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
