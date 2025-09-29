/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { ArrowRight, Target, Laptop } from 'lucide-react';

const Approach = () => (
  <section className="py-24 text-center bg-concentric">
    <p data-aos="fade-up" className="text-sm font-semibold text-slate-400 mb-2">OUR APPROACH</p>
    <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl font-bold max-w-3xl mx-auto mb-8">
      From Concept to Completion, We're Your Dedicated Partner
    </h2>
    <div data-aos="fade-up" data-aos-delay="200">
      <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-slate-200 mb-16 transition-transform hover:-translate-y-1">
        Learn About Our Process
      </button>
    </div>
    <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
      <div 
        data-aos="fade-up" 
        data-aos-delay="300"
        className="border border-slate-700 p-8 rounded-2xl bg-[#060814] transition-all hover:border-blue-500/50 hover:shadow-[0_0_20px_theme(colors.blue.500/20)]"
      >
        <div className="w-16 h-16 bg-slate-800 rounded-lg mb-6 flex items-center justify-center">
            <Target size={32} className="text-blue-400"/>
        </div>
        <h3 className="text-xl font-bold mb-2">Strategize</h3>
        <p className="text-slate-400 mb-4">We work with you to understand your needs and create a tailored IT strategy.</p>
        <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline transition-transform hover:translate-x-1">Start Planning <ArrowRight size={16} /></a>
      </div>
      <div 
        data-aos="fade-up"
        data-aos-delay="400" 
        className="border border-slate-700 p-8 rounded-2xl bg-[#060814] transition-all hover:border-blue-500/50 hover:shadow-[0_0_20px_theme(colors.blue.500/20)]"
      >
        <div className="w-16 h-16 bg-slate-800 rounded-lg mb-6 flex items-center justify-center">
            <Laptop size={32} className="text-blue-400"/>
        </div>
        <h3 className="text-xl font-bold mb-2">Build</h3>
        <p className="text-slate-400 mb-4">Our expert team develops and deploys robust, scalable solutions.</p>
        <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline transition-transform hover:translate-x-1">Begin Development <ArrowRight size={16} /></a>
      </div>
    </div>
  </section>
);

export default Approach;
