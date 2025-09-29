/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { ISourceOptions } from 'tsparticles-engine';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  // FIX: Explicitly type particlesOptions to prevent type widening of string literals, which caused a type error.
  const particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: false,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out',
        },
        random: false,
        speed: 0.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.1,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }

  return (
    <section className="text-center py-20 sm:py-32 relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 opacity-60">
        <div className="hero-glow absolute -left-1/2 -top-1/4 w-full h-full bg-gradient-radial from-blue-500 to-transparent blur-3xl"></div>
        <div className="hero-glow absolute -right-1/2 -top-1/4 w-full h-full bg-gradient-radial from-yellow-500 to-transparent blur-3xl animation-delay-[-10s]"></div>
      </div>
      <div className="relative z-10">
        <div data-aos="fade-up" className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg px-4 py-2 inline-flex items-center justify-center gap-x-4 md:gap-x-8 mx-auto mb-8">
          <a href="#approach"><button className="text-xs md:text-sm font-medium tracking-widest text-slate-300 uppercase hover:text-white transition-colors px-3 py-1">Strategize & Consult</button></a>
          <a href="#services"><button className="text-xs md:text-sm font-medium tracking-widest text-slate-300 uppercase hover:text-white transition-colors px-3 py-1">Build & Deploy</button></a>
          <a href="#services"><button className="text-xs md:text-sm font-medium tracking-widest text-slate-300 uppercase hover:text-white transition-colors px-3 py-1">Hire Talent</button></a>
        </div>
        
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Inoglle: Nurturing Innovation<br />Shaping the Future of IT
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="max-w-3xl mx-auto text-lg text-slate-400 mb-8">
          We are a forward-thinking IT solutions provider dedicated to fostering growth and innovation, offering services from cutting-edge software development to comprehensive IT consulting.
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-slate-200 transition-transform hover:-translate-y-1">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
};

// FIX: Add default export to be consumable by other components
export default Hero;
