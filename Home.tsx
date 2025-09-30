/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import Header from './components/Header';
import { Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// You can remove the unused imports if you wish
// import AOS from 'aos';
// import Hero from './components/sections/Hero';
// import Mission from './components/sections/Mission';
// import Services from './components/sections/Services';
// import Approach from './components/sections/Approach';
// import Impact from './components/sections/Impact';
// import Testimonials from './components/sections/Testimonials';
// import CTA from './components/sections/CTA';
// import Footer from './components/sections/Footer';
// import { X } from 'lucide-react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* Notification Bar */}
      {showBanner && (
        <div className="w-full bg-gradient-to-r from-[#1662c4] to-[#0a2a6c] text-white flex items-center justify-between px-8 py-2 text-base font-medium">
          <div className="flex items-center gap-3">
            <Bell size={22} />
            <span>Need a vendor switch? Accelerate your AI research with a neutral data partner.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/VendorSwitchInfo" className="underline font-semibold flex items-center gap-1 hover:text-blue-200 transition">
              Learn More
              <ArrowRight size={16} />
            </Link>
            <button onClick={() => setShowBanner(false)} className="text-white text-2xl font-bold hover:text-blue-200">&#10005;</button>
          </div>
        </div>
      )}


      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-gradient-to-br from-[#0a0f1c] via-[#111] to-[#1a2a3c] rounded-2xl border border-blue-900 shadow-xl p-8 md:p-16 flex flex-col items-center text-center relative mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nurturing Innovation,<br />Cultivating Skills</h1>
          <p className="text-lg md:text-xl mb-6">Empowering businesses with custom IT solutions, software development, and strategic consulting.<br />Transform your vision into reality with Inoglle.</p>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <span className="bg-[#222] text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">Software Development</span>
            <span className="bg-[#222] text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">IT Consulting</span>
            <span className="bg-[#222] text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">System Integration</span>
          </div>
          <button className="bg-white text-[#2563eb] font-bold px-6 py-3 rounded-lg text-lg shadow hover:bg-blue-100 transition">Build Your Solution</button>
          <div className="relative w-full overflow-hidden mt-12 opacity-80">
            <div className="flex gap-16 items-center animate-scroll-logos whitespace-nowrap" style={{animation: 'scroll-logos 18s linear infinite'}}>
              {Array.from({length: 10}).map((_, i) => (
                <img src="/images/logo.png" alt={`Logo ${i+1}`} className="h-8 inline-block" key={i} />
              ))}
            </div>
          </div>
        </section>
        
        <div className="bg-[#101522] text-white py-20 px-4">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Inoglle partners with businesses to bridge the gap between their goals and technology, turning <span className="text-blue-400">strategic vision into tangible results.</span></h2>
          </section>
          
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-lg font-semibold text-slate-400 mb-2">OUR APPROACH</h3>
            <h4 className="text-2xl md:text-3xl font-bold mb-6">From Concept to Completion, We're Your Dedicated Partner</h4>
            <button className="bg-white text-[#2563eb] font-semibold px-6 py-2 rounded mb-8 shadow hover:bg-blue-100 transition">Learn About Our Process</button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mt-8">
              <div className="bg-[#181f2a] rounded-xl p-6 border border-slate-700 shadow flex flex-col items-start text-left">
                <div className="mb-2"><span className="inline-block bg-blue-900 p-2 rounded-full"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span></div>
                <h4 className="font-semibold text-lg mb-2">Strategize</h4>
                <p className="text-slate-300 mb-2">We work with you to understand your needs and create a tailored IT strategy.</p>
                <a href="#" className="text-blue-400 font-medium mt-auto">Start Planning &rarr;</a>
              </div>
              <div className="bg-[#181f2a] rounded-xl p-6 border border-slate-700 shadow flex flex-col items-start text-left">
                <div className="mb-2"><span className="inline-block bg-blue-900 p-2 rounded-full"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg></span></div>
                <h4 className="font-semibold text-lg mb-2">Build</h4>
                <p className="text-slate-300 mb-2">Our expert team develops and deploys robust, scalable solutions.</p>
                <a href="#" className="text-blue-400 font-medium mt-auto">Begin Development &rarr;</a>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-lg font-semibold text-slate-400 mb-2">OUR IMPACT</h3>
            <h4 className="text-2xl md:text-3xl font-bold mb-6">Delivering Measurable Results and Fostering Growth for Our Partners</h4>
            <button className="bg-white text-[#2563eb] font-semibold px-6 py-2 rounded mb-8 shadow hover:bg-blue-100 transition">View Case Studies</button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center max-w-3xl mx-auto mt-8">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">50+</span>
                <span className="text-slate-400 mt-2">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">99%</span>
                <span className="text-slate-400 mt-2">Client Satisfaction</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">11-50</span>
                <span className="text-slate-400 mt-2">Dedicated Members</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">2023</span>
                <span className="text-slate-400 mt-2">Year Founded</span>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-lg font-semibold text-slate-400 mb-2">TRUSTED BY INDUSTRY LEADERS</h3>
            <blockquote className="max-w-2xl mx-auto text-xl text-white font-medium mb-4">“Working with Inoglle on our custom software was a seamless experience. Their agile development process and transparent communication kept us aligned and resulted in a product that perfectly fits our needs.”</blockquote>
            <div className="text-slate-400 mb-2">Emily White<br /><span className="text-xs">Product Manager, Solutions Co.</span></div>
            <div className="flex justify-center gap-2 mt-4">
              <button className="w-3 h-3 rounded-full bg-white/30" aria-label="Previous"></button>
              <button className="w-3 h-3 rounded-full bg-white" aria-label="Current"></button>
              <button className="w-3 h-3 rounded-full bg-white/30" aria-label="Next"></button>
            </div>
          </section>

          <section className="bg-blue-600 text-white rounded-xl py-10 px-6 text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Innovate? Let's Shape the Future of Your IT.</h2>
            <p className="mb-6">Partner with Inoglle to deploy custom IT solutions, develop a winning strategy, and accelerate your business growth.</p>
            <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg text-lg shadow hover:bg-blue-100 transition">Schedule a Consultation</button>
          </section>
          
          <footer className="bg-[#181f2a] text-slate-300 py-10 mt-12 border-t border-blue-900">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="col-span-1 flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-2">
                  <img src="/images/logo.png" alt="Inoglle Logo" className="h-8" />
                  <span className="font-bold text-lg text-white">Inoglle</span>
                </div>
                <span className="text-xs">Industry</span>
                <span className="text-sm">IT Services and IT Consulting</span>
                <span className="text-xs mt-2">Website</span>
                <a href="https://inoglle.vercel.app/" className="text-blue-400 text-xs underline">https://inoglle.vercel.app/</a>
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <span className="font-semibold mb-2">Services</span>
                <a href="#" className="hover:text-white text-sm">Software Development</a>
                <a href="#" className="hover:text-white text-sm">System Integration</a>
                <a href="#" className="hover:text-white text-sm">IT Consulting</a>
                <a href="#" className="hover:text-white text-sm">Digital Transformation</a>
                <a href="#" className="hover:text-white text-sm">IT Infrastructure</a>
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <span className="font-semibold mb-2">Careers</span>
                <a href="#" className="hover:text-white text-sm">Why Join Inoglle</a>
                <a href="#" className="hover:text-white text-sm">Job Openings</a>
                <a href="#" className="hover:text-white text-sm">Internships</a>
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <span className="font-semibold mb-2">About Us</span>
                <a href="#" className="hover:text-white text-sm">Our Story</a>
                <a href="#" className="hover:text-white text-sm">Blog</a>
                <a href="#" className="hover:text-white text-sm">Press</a>
                <a href="#" className="hover:text-white text-sm">Contact Us</a>
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <span className="font-semibold mb-2">Connect</span>
                <a href="#" className="hover:text-white text-sm">Contact us</a>
                <a href="#" className="hover:text-white text-sm">Help center</a>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
              <div className="flex gap-4">
                <a href="#" aria-label="Twitter" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.763.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.729-.666 1.577-.666 2.483 0 1.713.872 3.229 2.197 4.117-.809-.026-1.57-.248-2.236-.616v.062c0 2.393 1.703 4.389 3.965 4.84-.415.113-.853.174-1.305.174-.319 0-.626-.031-.928-.088.627 1.956 2.444 3.377 4.6 3.417-1.68 1.316-3.809 2.101-6.102 2.101-.396 0-.787-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                <a href="#" aria-label="Instagram" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.947-.072c-1.276.06-2.687.334-3.678 1.325-.991.991-1.265 2.402-1.325 3.678-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.06 1.276.334 2.687 1.325 3.678.991.991 2.402 1.265 3.678 1.325 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.276-.06 2.687-.334 3.678-1.325.991-.991 1.265-2.402 1.325-3.678.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.06-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.265-3.678-1.325-1.28-.06-1.688-.072-4.947-.072zm0-2.163c-3.259 0-3.667.012-4.947.072-1.276.06-2.687.334-3.678 1.325-.991.991-1.265 2.402-1.325 3.678-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.06 1.276.334 2.687 1.325 3.678.991.991 2.402 1.265 3.678 1.325 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.276-.06 2.687-.334 3.678-1.325.991-.991 1.265-2.402 1.325-3.678.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.06-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.265-3.678-1.325-1.28-.06-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z"/></svg></a>
              </div>
              <div className="text-xs text-slate-400 mt-2">
                Sitemap &nbsp; Terms of service &nbsp; Privacy policy &nbsp; Cookie settings
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 text-xs text-slate-400 mt-4 text-right">
              Plot 56, Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100, IN | &copy; {new Date().getFullYear()} Inoglle
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}