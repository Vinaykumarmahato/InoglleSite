/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import VantaGlobeBackground from '../VantaGlobeBackground';

const CTA = () => (
  <section className="py-16 relative overflow-hidden" data-aos="fade-up">
  <VantaGlobeBackground position="center" size="partial" style={{ left: '50%', top: '60%', transform: 'translate(-50%, -50%)', width: '25vw', height: '25vh', opacity: 0.15, minWidth: 100, minHeight: 100, maxWidth: 200, maxHeight: 200 }} />
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-center p-8 sm:p-12 relative z-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Innovate? Let's Shape the Future of Your IT.</h2>
      <p className="max-w-2xl mx-auto text-blue-200 mb-8">Partner with Inoglle to deploy custom IT solutions, develop a winning strategy, and accelerate your business growth.</p>
      <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-100 transition-transform hover:-translate-y-1">
        Schedule a Consultation
      </button>
    </div>
  </section>
);

export default CTA;
