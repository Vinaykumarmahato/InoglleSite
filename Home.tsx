/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import Header from './components/Header';
import { ArrowRight, Code, Plus, ArrowLeft, ArrowRight as ArrowRightIcon, Twitter, Linkedin, Instagram, Youtube, Bell, X, Lightbulb, GitBranch, Zap, Server, Users } from 'lucide-react';

const StatCard = ({ value, label }) => (
  <div className="text-left">
    <p className="text-5xl font-bold">{value}</p>
    <p className="text-slate-400 mt-2">{label}</p>
  </div>
);

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  const specialties = [
    { icon: Lightbulb, label: "Innovative IT Solutions" },
    { icon: Code, label: "Software Development" },
    { icon: GitBranch, label: "System Integration" },
    { icon: Zap, label: "Digital Transformation" },
    { icon: Server, label: "IT Infrastructure" },
    { icon: Users, label: "Customer-Centric Approach" },
  ];

  const footerLinks = {
    "Services": ["Software Development", "System Integration", "IT Consulting", "Digital Transformation", "IT Infrastructure"],
    "Careers": ["Why Join Inoglle", "Job Openings", "Internships"],
    "About Us": ["Our Story", "Blog", "Press", "Contact Us"],
    "Connect": ["Contact us", "Help center"],
  };

  return (
    <div className="bg-[#060814] text-slate-200">
      {showBanner && (
        <div className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center text-sm relative">
            <Bell size={16} className="mr-3" />
            <p>
              Need a vendor switch? Accelerate your AI research with a neutral data partner.
            </p>
            <a href="#" className="font-bold underline ml-4 flex items-center gap-1">
              Learn More <ArrowRight size={14} />
            </a>
            <button onClick={() => setShowBanner(false)} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white">
              <X size={18} />
            </button>
          </div>
        </div>
      )}
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-20 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -top-1/2 opacity-30">
            <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-radial-gradient from-blue-500 to-transparent blur-3xl"></div>
            <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-radial-gradient from-yellow-500 to-transparent blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
              Inoglle: Nurturing Innovation<br />Shaping the Future of IT
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-400 mb-8">
              We are a forward-thinking IT solutions provider dedicated to fostering growth and innovation, offering services from cutting-edge software development to comprehensive IT consulting.
            </p>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg mb-16 hover:bg-slate-200">
              Contact Us
            </button>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="text-center py-16">
          <p className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed">
            Inoglle partners with businesses to bridge the gap between their goals and technology, turning <span className="text-blue-400">strategic vision into tangible results.</span>
          </p>
        </section>

        {/* Our Core Services Section */}
        <section className="py-16">
          <div className="text-left mb-12">
            <p className="text-sm font-semibold text-slate-400 mb-2">OUR CORE SERVICES</p>
            <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl">
              Custom IT Solutions to Power Your Business Growth
            </h2>
            <button className="mt-6 bg-white text-black font-semibold px-5 py-2 rounded-lg text-sm hover:bg-slate-200">
              Explore Our Services
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            <div>
              <h3 className="font-bold mb-2">IT Consulting</h3>
              <p className="text-slate-400 mb-4">Strategic technology selection, system integration, and IT infrastructure planning.</p>
              <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">Get Strategic Advice <ArrowRight size={16} /></a>
            </div>
            <div>
              <h3 className="font-bold mb-2">Software Development</h3>
              <p className="text-slate-400 mb-4">Custom, scalable software solutions built to drive efficiency and growth.</p>
              <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">Build Your Solution <ArrowRight size={16} /></a>
            </div>
            <div>
              <h3 className="font-bold mb-2">Learning & Development</h3>
              <p className="text-slate-400 mb-4">Empowering your team with free educational resources and hands-on internships.</p>
              <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">Explore Resources <ArrowRight size={16} /></a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {specialties.map(({ icon: Icon, label }) => (
              <div key={label} className="bg-slate-800/50 p-4 rounded-lg flex flex-col items-center justify-center h-24">
                <Icon className="text-slate-400 mb-2" size={24} />
                <span className="text-xs">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-24 text-center relative bg-concentric">
          <p className="text-sm font-semibold text-slate-400 mb-2">OUR APPROACH</p>
          <h2 className="text-3xl sm:text-4xl font-bold max-w-3xl mx-auto mb-8">
            From Concept to Completion, We're Your Dedicated Partner
          </h2>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-slate-200 mb-16">
            Learn About Our Process
          </button>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="border border-slate-700 p-8 rounded-2xl bg-[#060814]">
              <div className="w-24 h-24 bg-slate-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Strategize</h3>
              <p className="text-slate-400 mb-4">We work with you to understand your needs and create a tailored IT strategy.</p>
              <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">Start Planning <ArrowRight size={16} /></a>
            </div>
            <div className="border border-slate-700 p-8 rounded-2xl bg-[#060814]">
              <div className="w-24 h-24 bg-slate-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Build</h3>
              <p className="text-slate-400 mb-4">Our expert team develops and deploys robust, scalable solutions.</p>
              <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">Begin Development <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="py-24 text-left">
          <p className="text-sm font-semibold text-slate-400 mb-2">OUR IMPACT</p>
          <h2 className="text-3xl sm:text-4xl font-bold max-w-3xl mb-8">
            Delivering Measurable Results and Fostering Growth for Our Partners
          </h2>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-slate-200 mb-16">
            View Case Studies
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <StatCard value="50+" label="Projects Completed." />
            <StatCard value="99%" label="Client Satisfaction Rate." />
            <StatCard value="11-50" label="Dedicated Team Members." />
            <StatCard value="2023" label="Year Founded." />
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 text-center bg-dots">
          <p className="text-sm font-semibold text-slate-400 mb-4">TRUSTED BY INDUSTRY LEADERS</p>
          <blockquote className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed mb-8">
            “Inoglle transformed our operations. Their customer-centric approach and technical expertise were instrumental in our digital transformation journey, delivering results beyond our expectations.”
          </blockquote>
          <p className="font-semibold">Jane Doe</p>
          <p className="text-sm text-slate-400 mb-8">CTO, Innovate Inc.</p>
          <div className="flex items-center justify-center gap-4">
            <button className="p-2 border border-slate-600 rounded-full hover:bg-slate-800"><ArrowLeft size={16} /></button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
            </div>
            <button className="p-2 border border-slate-600 rounded-full hover:bg-slate-800"><ArrowRightIcon size={16} /></button>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16">
          <div className="bg-blue-600 rounded-2xl text-center p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Innovate? Let's Shape the Future of Your IT.</h2>
            <p className="max-w-2xl mx-auto text-blue-200 mb-8">Partner with Inoglle to deploy custom IT solutions, develop a winning strategy, and accelerate your business growth.</p>
            <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-100">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <h3 className="font-bold text-white text-lg">INOGLLE</h3>
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
              <Twitter size={18} />
              <Linkedin size={18} />
              <Instagram size={18} />
              <Youtube size={18} />
            </div>
          </div>
          <div className="mt-6 text-center md:text-right text-xs text-slate-500">
            <p>Plot 56, Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100, IN  |  © 2024 Inoglle</p>
          </div>
        </div>
      </footer>
    </div>
  );
}