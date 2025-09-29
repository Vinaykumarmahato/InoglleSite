/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  "Services": ["Software Development", "System Integration", "IT Consulting", "Digital Transformation", "IT Infrastructure"],
  "Careers": ["Why Join Inoglle", "Job Openings", "Internships"],
  "About Us": ["Our Story", "Blog", "Press", "Contact Us"],
  "Connect": ["Contact us", "Help center"],
};

const Footer = () => (
  <footer className="bg-black text-slate-400 text-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
          <a href="#" aria-label="Inoglle Home">
            <img className="h-9 w-auto" src="/images/logo.png" alt="Inoglle logo" />
          </a>
          <div>
            <p className="font-semibold text-white">Industry</p>
            <p>IT Services and IT Consulting</p>
          </div>
          <div>
            <p className="font-semibold text-white">Website</p>
            <a href="https://inoglle.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline break-all">
              https://inoglle.vercel.app/
            </a>
          </div>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-white mb-4">{title}</h4>
            <ul className="space-y-3">
              {links.map(link => <li key={link}><a href="#" className="hover:text-white">{link}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#" className="hover:text-white">Sitemap</a>
          <a href="#" className="hover:text-white">Terms of service</a>
          <a href="#" className="hover:text-white">Privacy policy</a>
          <a href="#" className="hover:text-white">Cookie settings</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white" aria-label="Twitter"><Twitter size={18} /></a>
          <a href="#" className="hover:text-white" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#" className="hover:text-white" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#" className="hover:text-white" aria-label="YouTube"><Youtube size={18} /></a>
        </div>
      </div>
      <div className="mt-6 text-center md:text-right text-xs text-slate-500">
        <p>Plot 56, Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100, IN  |  © 2024 Inoglle</p>
      </div>
    </div>
  </footer>
);

export default Footer;