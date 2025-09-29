/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import VantaGlobeBackground from '../VantaGlobeBackground';
import { ArrowRight, Code, Lightbulb, GitBranch, Zap, Server, Users } from 'lucide-react';

const specialties = [
  { icon: Lightbulb, label: "Innovative IT Solutions" },
  { icon: Code, label: "Software Development" },
  { icon: GitBranch, label: "System Integration" },
  { icon: Zap, label: "Digital Transformation" },
  { icon: Server, label: "IT Infrastructure" },
  { icon: Users, label: "Customer-Centric Approach" },
];


const clientStories = [
  {
    name: "Acme Corp",
    story: "Acme Corp scaled their operations by 300% with our custom ERP solution, improving efficiency and reducing costs.",
    logo: "/images/logo.png"
  },
  {
    name: "TechNova",
    story: "TechNova launched a new SaaS platform in record time, thanks to our agile development and scalable architecture.",
    logo: "/images/logo.png"
  }
];

const Services = () => (
  <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <VantaGlobeBackground position="right" size="partial" style={{ right: 0, top: 0, bottom: 'auto', width: '25vw', height: '40vh', opacity: 0.2, minWidth: 180, minHeight: 180, maxWidth: 400, maxHeight: 400 }} />
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4" data-aos="fade-up">Software Development Services</h2>
        <p className="text-lg text-slate-600 mb-6" data-aos="fade-up" data-aos-delay="100">Scalable software solutions, custom development, and efficiency improvement for your business.</p>
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-transform hover:-translate-y-1 text-lg" data-aos="fade-up" data-aos-delay="200">
          Build Your Solution
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/80 rounded-2xl p-8 shadow group hover:shadow-xl transition-all border border-blue-100" data-aos="fade-up" data-aos-delay="100">
          <Code className="text-blue-500 mb-4 group-hover:scale-110 group-hover:text-blue-700 transition-transform" size={40} />
          <h3 className="font-bold text-xl mb-2">Custom Development</h3>
          <p className="text-slate-600 mb-4">Tailored software built for your unique needs, from web apps to enterprise platforms.</p>
        </div>
        <div className="bg-white/80 rounded-2xl p-8 shadow group hover:shadow-xl transition-all border border-blue-100" data-aos="fade-up" data-aos-delay="200">
          <Zap className="text-blue-500 mb-4 group-hover:scale-110 group-hover:text-blue-700 transition-transform" size={40} />
          <h3 className="font-bold text-xl mb-2">Scalable Solutions</h3>
          <p className="text-slate-600 mb-4">Grow your business with robust, scalable software that adapts to your needs.</p>
        </div>
        <div className="bg-white/80 rounded-2xl p-8 shadow group hover:shadow-xl transition-all border border-blue-100" data-aos="fade-up" data-aos-delay="300">
          <GitBranch className="text-blue-500 mb-4 group-hover:scale-110 group-hover:text-blue-700 transition-transform" size={40} />
          <h3 className="font-bold text-xl mb-2">Efficiency Improvement</h3>
          <p className="text-slate-600 mb-4">Streamline operations and boost productivity with automation and smart integrations.</p>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-blue-900 mb-6" data-aos="fade-up">Client Success Stories</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {clientStories.map((client, idx) => (
            <div key={client.name} className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4" data-aos="fade-up" data-aos-delay={100 + idx * 100}>
              <img src={client.logo} alt={client.name + ' logo'} className="h-12 w-12 rounded-full border border-blue-200" />
              <div>
                <h4 className="font-bold text-blue-800 mb-1">{client.name}</h4>
                <p className="text-slate-600 text-sm">{client.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="w-full max-w-md h-48 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden">
          {/* Example growth graphic: upward arrow and bars */}
          <div className="absolute bottom-4 left-8 flex gap-2 items-end">
            <div className="bg-blue-500 rounded-md" style={{width:'16px',height:'32px'}}></div>
            <div className="bg-blue-400 rounded-md" style={{width:'16px',height:'48px'}}></div>
            <div className="bg-blue-300 rounded-md" style={{width:'16px',height:'64px'}}></div>
            <div className="bg-blue-200 rounded-md" style={{width:'16px',height:'80px'}}></div>
          </div>
          <svg width="80" height="80" viewBox="0 0 80 80" className="absolute right-8 top-8">
            <polyline points="10,70 30,50 50,30 70,10" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
            <polygon points="70,10 65,20 75,20" fill="#2563eb" />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
