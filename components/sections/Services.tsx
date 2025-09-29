/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { ArrowRight, Code, Lightbulb, GitBranch, Zap, Server, Users } from 'lucide-react';

const specialties = [
  { icon: Lightbulb, label: "Innovative IT Solutions" },
  { icon: Code, label: "Software Development" },
  { icon: GitBranch, label: "System Integration" },
  { icon: Zap, label: "Digital Transformation" },
  { icon: Server, label: "IT Infrastructure" },
  { icon: Users, label: "Customer-Centric Approach" },
];

const Services = () => (
  <section className="py-16">
    <div className="text-left mb-12">
      <p data-aos="fade-up" className="text-sm font-semibold text-slate-400 mb-2">OUR CORE SERVICES</p>
      <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl font-bold max-w-2xl">
        Custom IT Solutions to Power Your Business Growth
      </h2>
      <div data-aos="fade-up" data-aos-delay="200">
        <button className="mt-6 bg-white text-black font-semibold px-5 py-2 rounded-lg text-sm hover:bg-slate-200 transition-transform hover:-translate-y-0.5">
          Explore Our Services
        </button>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
      <div data-aos="fade-up" data-aos-delay="100">
        <h3 className="font-bold mb-2">IT Consulting</h3>
        <p className="text-slate-400 mb-4">Strategic technology selection, system integration, and IT infrastructure planning.</p>
        <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline transition-transform hover:translate-x-1">Get Strategic Advice <ArrowRight size={16} /></a>
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <h3 className="font-bold mb-2">Software Development</h3>
        <p className="text-slate-400 mb-4">Custom, scalable software solutions built to drive efficiency and growth.</p>
        <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline transition-transform hover:translate-x-1">Build Your Solution <ArrowRight size={16} /></a>
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <h3 className="font-bold mb-2">Learning & Development</h3>
        <p className="text-slate-400 mb-4">Empowering your team with free educational resources and hands-on internships.</p>
        <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline transition-transform hover:translate-x-1">Explore Resources <ArrowRight size={16} /></a>
      </div>
    </div>

    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
      {specialties.map(({ icon: Icon, label }, index) => (
        <div 
          key={label} 
          className="bg-slate-800/50 p-4 rounded-lg flex flex-col items-center justify-center h-24 group transition-all hover:bg-slate-800 hover:-translate-y-1 service-card"
          data-aos="fade-up"
          data-aos-delay={100 + index * 50}
        >
          <Icon className="text-slate-400 mb-2 transition-transform group-hover:scale-110 group-hover:text-blue-400" size={24} />
          <span className="text-xs">{label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
