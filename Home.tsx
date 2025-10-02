/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import Header from './components/Header';
import { Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Approach from './components/sections/Approach';
import Impact from './components/sections/Impact';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

// --- SVG Assets defined as React Components ---

const IconAINode = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" strokeOpacity="0.5"/>
    <path d="M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0"/>
    <path d="M12 9V6.5" />
    <path d="M12 15v2.5" />
    <path d="M15 12h2.5" />
    <path d="M9 12H6.5" />
    <path d="M14.121 9.879l1.768-1.768" />
    <path d="M8.11 15.89l-1.767 1.768" />
    <path d="M15.89 15.89l-1.768-1.768" />
    <path d="M9.879 9.879l-1.768-1.768" />
  </svg>
);

const IconNetwork = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
    <path d="M19.5 13.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5zM4.5 13.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5zM12 6.5c1.381 0 2.5-1.119 2.5-2.5S13.381 1.5 12 1.5s-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5zM12 22.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5z" />
    <path d="M7 11.5l5-5.5" strokeOpacity="0.6"/>
    <path d="M12 6.5v13" strokeOpacity="0.6"/>
    <path d="M17 11.5l-5 5" strokeOpacity="0.6"/>
  </svg>
);

const HeroBackground = () => (
  <div className="absolute inset-0 -z-20 overflow-hidden">
    <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: 'rgba(12, 18, 44, 0.9)' }} />
          <stop offset="100%" style={{ stopColor: 'rgba(5, 8, 16, 0.9)' }} />
        </radialGradient>
        <radialGradient id="grad2" cx="10%" cy="20%" r="40%" fx="10%" fy="20%">
          <stop offset="0%" style={{ stopColor: 'rgba(0, 162, 255, 0.1)' }} />
          <stop offset="100%" style={{ stopColor: 'rgba(0, 162, 255, 0)' }} />
        </radialGradient>
        <radialGradient id="grad3" cx="90%" cy="80%" r="50%" fx="90%" fy="80%">
          <stop offset="0%" style={{ stopColor: 'rgba(138, 43, 226, 0.15)' }} />
          <stop offset="100%" style={{ stopColor: 'rgba(138, 43, 226, 0)' }} />
        </radialGradient>
      </defs>
      <rect width="1440" height="800" fill="url(#grad1)" />
      <rect width="1440" height="800" fill="url(#grad2)" />
      <rect width="1440" height="800" fill="url(#grad3)" />
    </svg>
  </div>
);

const AnimatedNeuralLines = () => (
  <div className="absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]">
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        .neural-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: dash 15s linear infinite alternate;
        }
        #path1 { animation-delay: -2s; }
        #path2 { animation-delay: -5s; }
        #path3 { animation-delay: -8s; }
        #path4 { animation-delay: -12s; }
      `}</style>
      <path id="path1" className="neural-path" d="M0 20 Q 25 5, 50 30 T 100 50" stroke="url(#line-grad)" strokeWidth="0.5" fill="none" />
      <path id="path2" className="neural-path" d="M0 80 Q 30 90, 60 50 T 100 20" stroke="url(#line-grad)" strokeWidth="0.5" fill="none" />
      <path id="path3" className="neural-path" d="M20 0 Q 30 50, 50 50 T 80 100" stroke="url(#line-grad)" strokeWidth="0.5" fill="none" />
      <path id="path4" className="neural-path" d="M100 80 Q 70 70, 50 50 T 0 30" stroke="url(#line-grad)" strokeWidth="0.5" fill="none" />
      <defs>
        <linearGradient id="line-grad" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="var(--accent-blue)" />
          <stop offset="100%" stopColor="var(--accent-purple)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);


// --- Main Component ---
export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  // Inlined CSS for the new theme
  const GlobalStyles = () => (
    <style>{`
      :root {
        --bg-dark-primary: #050810;
        --bg-dark-secondary: #0a0f1c;
        --accent-blue: #00a2ff;
        --accent-purple: #8a2be2;
        --accent-glow: #00a2ff4d;
        --text-primary: #e0e0e0;
        --text-secondary: #a0a0b0;
        --border-color: rgba(255, 255, 255, 0.1);
        --glass-bg: rgba(16, 22, 42, 0.5);
        --font-family-sans: 'Inter', sans-serif;
      }
      
      body {
        background-color: var(--bg-dark-primary);
        color: var(--text-primary);
        font-family: var(--font-family-sans);
        line-height: 1.6;
      }

      @keyframes gradient-pan {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes subtle-glow {
        0%, 100% { box-shadow: 0 0 20px -5px var(--accent-glow); }
        50% { box-shadow: 0 0 25px 0px var(--accent-glow); }
      }

      @keyframes dash {
        to { stroke-dashoffset: 0; }
      }

      .glass-card {
        background: var(--glass-bg);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .glass-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
      }
      .animation-subtle-glow {
        animation: subtle-glow 5s ease-in-out infinite;
      }

      .glass-card-neon {
        position: relative;
        background: var(--glass-bg);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 0.75rem;
        padding: 1.5rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: 2px solid transparent;
        background-clip: padding-box;
      }
      .glass-card-neon::before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -2px;
        border-radius: inherit;
        background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
      }
      .glass-card-neon:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow: 0 0 25px -5px var(--accent-glow);
      }

      .pill-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 2rem;
        font-weight: 700;
        border-radius: 9999px;
        color: white;
        background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
        background-size: 200% 200%;
        box-shadow: 0 4px 15px 0 rgba(138, 43, 226, 0.4);
        transition: all 0.3s ease;
      }
      .pill-btn:hover {
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 8px 25px 0 rgba(0, 162, 255, 0.5);
        animation: gradient-pan 4s linear infinite;
      }

      :focus-visible {
        outline: 3px solid var(--accent-blue);
        outline-offset: 3px;
        border-radius: 4px;
      }

      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `}</style>
  );

  return (
    <div className="min-h-screen bg-bg-dark-primary text-text-primary">
      <GlobalStyles />
      
      {/* Responsive Notification Bar */}
      {showBanner && (
        <div className="w-full bg-gradient-to-r from-[#1662c4] to-[#0a2a6c] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 sm:px-8 py-2 sm:py-2 text-base font-medium shadow-lg z-50 min-h-[48px] sm:min-h-[40px]">
          <div className="flex items-center gap-2 mb-1 sm:mb-0">
            <Bell size={20} className="flex-shrink-0" />
            <span className="text-xs sm:text-base font-semibold leading-tight sm:leading-normal">Need a vendor switch? <span className="block sm:inline">Accelerate your AI research with a neutral data partner.</span></span>
          </div>
          <div className="flex items-center gap-2 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
            <Link to="/VendorSwitchInfo" className="underline font-semibold text-xs sm:text-base whitespace-nowrap flex items-center gap-1 hover:text-blue-200 transition">
              Learn More
              <span className="hidden sm:inline"><ArrowRight size={16} /></span>
            </Link>
            <button onClick={() => setShowBanner(false)} className="text-white text-xl font-bold hover:text-blue-200 ml-2 sm:ml-0">&#10005;</button>
          </div>
        </div>
      )}

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center text-center p-8 md:p-16 mb-24 overflow-hidden">
          <HeroBackground />
          <AnimatedNeuralLines />
          
          <div className="glass-card p-8 md:p-12 animation-subtle-glow">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-200">
              Nurturing Innovation,<br />Cultivating Skills
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl text-text-secondary">
              Empowering businesses with custom IT solutions, software development, and strategic consulting.<br />Transform your vision into reality with Inoglle.
            </p>
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              <span className="bg-white/5 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">Software Development</span>
              <span className="bg-white/5 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">IT Consulting</span>
              <span className="bg-white/5 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">System Integration</span>
            </div>
            <Link to="/SoftwareDevelopment" className="pill-btn text-lg">
              Build Your Solution
            </Link>
          </div>
          
          <div className="relative w-full overflow-hidden mt-20 opacity-60">
              <style>{`@keyframes autoscroll {0% { transform: translateX(0); }100% { transform: translateX(-50%); }}`}</style>
              <div
                  className="flex gap-12 items-center whitespace-nowrap py-2"
                  style={{ animation: 'autoscroll 30s linear infinite', willChange: 'transform', minWidth: 'max-content', display: 'flex' }}
              >
                  {[
                      'logo.png', 'ADV HopeHaven Logo.png', 'ADV Indian Coder Logo.png', 'ADV SparkTech Logo.png', 'Elevtern logo.png',
                      'logo.png', 'ADV HopeHaven Logo.png', 'ADV Indian Coder Logo.png', 'ADV SparkTech Logo.png', 'Elevtern logo.png',
                  ].map((file, i) => (
                      <img src={`/images/${file}`} alt={file.replace(/\.png$/, '')} className="h-10 w-auto filter grayscale contrast-50 hover:grayscale-0 hover:contrast-100 transition-all duration-300" key={file + i} />
                  ))}
              </div>
          </div>
        </section>

        {/* Inoglle Video Section Description & Jump Button */}
        <section id="inoglle-video-info" className="bg-gradient-to-br from-[#181f2a] via-[#23234a] to-[#1a1a2e] rounded-2xl border border-blue-900 shadow-xl p-8 md:p-16 flex flex-col items-center text-center relative mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 mb-4 drop-shadow-lg">AI-Powered Video Generation</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-4">Transform your ideas into stunning visuals with Inoglle Video. Our AI-powered tool lets you create cinematic cityscapes, product ads, and personalized avatars directly from text and images.</p>
          <p className="text-base md:text-lg text-slate-400 mb-6">Experience enterprise-grade creativity with a sleek, modern interface and neon highlights.</p>
          <Link to="/inoglle-video" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-700 transition-transform hover:-translate-y-1 text-lg">Explore Inoglle Video</Link>
        </section>

        {/* Mission Section */}
        <section className="my-12 py-8 rounded-2xl bg-[#181f2a]/70 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-300">Inoglle partners with businesses to bridge the gap between their goals and technology, turning <span className='text-blue-400'>strategic vision into tangible results.</span></h2>
          <div className="max-w-3xl mx-auto text-center text-lg text-slate-300">Inoglle partners with businesses to bridge the gap between their goals and technology, turning strategic vision into tangible results.</div>
        </section>

        {/* Approach Section */}
        <section className="my-16 py-12 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">Our Approach</h2>
            <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
              We combine strategy, design, and technology to craft solutions that are practical, scalable, 
              and future-ready. Our step-by-step approach ensures success at every stage.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: <IconAINode className="w-10 h-10 mb-4 text-accent-blue" />, title: "Discover", desc: "Understanding business needs, pain points, and goals to craft tailored solutions." },
                { icon: <IconNetwork className="w-10 h-10 mb-4 text-accent-blue" />, title: "Innovate", desc: "Designing and building creative, cutting-edge solutions using modern technologies." },
                { icon: <Bell className="w-10 h-10 mb-4 text-accent-blue" />, title: "Deliver", desc: "Implementing scalable systems that generate measurable business impact." },
              ].map((step, idx) => (
                <div key={idx} className="glass-card-neon text-left">
                  {step.icon}
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-text-secondary mt-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="my-16 py-12 px-6 bg-[#181f2a]/70 rounded-2xl shadow-xl">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-300">Our Impact</h2>
            <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
              Through innovation and collaboration, Inoglle has transformed businesses and empowered communities 
              to embrace the digital future with confidence.
            </p>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                { stat: "50+", label: "Projects Delivered" },
                { stat: "20+", label: "Happy Clients" },
                { stat: "10+", label: "Industries Served" },
                { stat: "100%", label: "Client Satisfaction" },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#1f2937]/70 p-6 rounded-xl text-center hover:scale-105 transition">
                  <h3 className="text-3xl font-bold text-blue-400">{item.stat}</h3>
                  <p className="text-slate-400 mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-16 py-12 px-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl shadow-xl">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-300">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Hear from the people who’ve trusted us to shape their digital journey.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { quote: "Inoglle transformed our business operations with their scalable IT solutions. Truly a reliable partner.", name: "Ravi Kumar", role: "CEO, TechNova" },
                { quote: "The team’s innovative approach and continuous support made our digital transition smooth and impactful.", name: "Ananya Sharma", role: "Founder, GreenFuture" },
                { quote: "We gained not just a service provider but a long-term technology partner invested in our success.", name: "Michael Lee", role: "CTO, GlobalEdge" },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-[#1e293b]/70 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition text-left">
                  <p className="text-slate-300 italic">"{testimonial.quote}"</p>
                  <div className="mt-4">
                    <h4 className="text-blue-400 font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-20 py-16 px-6 relative bg-bg-dark-secondary rounded-2xl shadow-2xl text-center text-white overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[400px] bg-gradient-to-tr from-accent-blue to-accent-purple rounded-full filter blur-3xl opacity-20 -z-10"></div>
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Shape the Future of IT?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-text-secondary">
                Partner with Inoglle and let’s build innovative solutions together. Join us in turning vision into impact.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="/contact" className="pill-btn">
                    Contact Us
                </a>
                <a
                    href="/careers"
                    className="px-8 py-3 bg-white/5 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                    View Careers
                </a>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}