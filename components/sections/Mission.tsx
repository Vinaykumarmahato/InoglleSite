/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import VantaGlobeBackground from '../VantaGlobeBackground';

const Mission = () => (
  <section className="text-center py-16 relative overflow-hidden" data-aos="fade-up">
  <VantaGlobeBackground position="left" size="partial" style={{ left: 0, bottom: 0, top: 'auto', width: '25vw', height: '40vh', opacity: 0.3, minWidth: 180, minHeight: 180, maxWidth: 400, maxHeight: 400 }} />
    <p className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed relative z-10">
      Inoglle partners with businesses to bridge the gap between their goals and technology, turning <span className="text-blue-400">strategic vision into tangible results.</span>
    </p>
  </section>
);

export default Mission;
