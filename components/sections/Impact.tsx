/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import AnimatedStatCard from '../AnimatedStatCard';

const Impact = () => (
  <section className="py-24 text-left">
    <p data-aos="fade-up" className="text-sm font-semibold text-slate-400 mb-2">OUR IMPACT</p>
    <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl font-bold max-w-3xl mb-8">
      Delivering Measurable Results and Fostering Growth for Our Partners
    </h2>
    <div data-aos="fade-up" data-aos-delay="200">
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-slate-200 mb-16 transition-transform hover:-translate-y-1">
            View Case Studies
        </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
      <div data-aos="fade-up" data-aos-delay="100">
        <AnimatedStatCard end={50} suffix="+" label="Projects Completed." />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <AnimatedStatCard end={99} suffix="%" label="Client Satisfaction Rate." />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <AnimatedStatCard end={50} prefix="11-" label="Dedicated Team Members." />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <AnimatedStatCard end={2023} label="Year Founded." duration={2} />
      </div>
    </div>
  </section>
);

export default Impact;
