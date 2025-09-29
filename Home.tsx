/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Mission from './components/sections/Mission';
import Services from './components/sections/Services';
import Approach from './components/sections/Approach';
import Impact from './components/sections/Impact';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';
import { Bell, X, ArrowRight } from 'lucide-react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const vantaEffect = useRef(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    if (!vantaEffect.current && window.VANTA && vantaRef.current) {
      vantaEffect.current = window.VANTA.GLOBE({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x1a202c,
        color2: 0xffffff,
        backgroundColor: 0x000000,
        size: 1.0
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    }
  }, []);

  return (
    <div className="text-slate-200 relative">
      <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10" />
      {showBanner && (
        <div className="bg-blue-600 text-white relative">
          <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 py-2.5 text-center text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Bell size={16} className="hidden sm:inline" />
              <p>
                Need a vendor switch? Accelerate your AI research with a neutral data partner.
              </p>
              <a href="#" className="font-bold underline flex items-center gap-1 whitespace-nowrap">
                Learn More <ArrowRight size={14} />
              </a>
            </div>
            <button onClick={() => setShowBanner(false)} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white">
              <X size={18} />
            </button>
          </div>
        </div>
      )}
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Mission />
        <div id="services"><Services /></div>
        <div id="approach"><Approach /></div>
        <Impact />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}