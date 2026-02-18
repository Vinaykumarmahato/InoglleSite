/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const footerLinks = {
  "Services": [
    { name: "Custom Software", href: "/services/software" },
    { name: "Cloud & DevOps", href: "/services/cloud" },
    { name: "Legacy Modernization", href: "/services/modernization" },
    { name: "IT Consulting", href: "/consulting/strategy" },
    { name: "Data Analytics", href: "/consulting/data" }
  ],
  "Industries": [
    { name: "Banking & Finance", href: "/industries/bfsi" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Retail & E-commerce", href: "/industries/retail" }
  ],
  "Company": [
    { name: "About Inoglle", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" }
  ],
  "Legal": [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "SLA Agreements", href: "/sla" }
  ],
};

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-12 text-sm relative overflow-hidden">

    {/* Subtle Background Glow */}
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="container-xl relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

        {/* Brand Column */}
        <div className="col-span-1 lg:col-span-2 space-y-8 pr-8">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <p className="text-slate-400 leading-relaxed max-w-sm text-balance">
            Inoglle is a strategic technology partner for forward-thinking enterprises. We design, build, and support mission-critical software systems that drive real business value.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://linkedin.com/company/inoglle" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://twitter.com/inoglle" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="https://youtube.com/@inoglle" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>

        {/* Dynamic Links - Perfectly Aligned Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="col-span-1 pt-2">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs border-b border-white/5 pb-2 inline-block">{title}</h4>
            <ul className="space-y-4">
              {links.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-500 hover:text-blue-400 transition-colors inline-block">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-600 font-medium tracking-wide">
        <p>&copy; {new Date().getFullYear()} Inoglle Technologies Pvt. Ltd. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Bengaluru, India
          </span>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">contact@inoglle.com</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;