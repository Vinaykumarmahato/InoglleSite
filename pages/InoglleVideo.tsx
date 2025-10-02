import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/sections/Footer.tsx';

const InoglleVideo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181f2a] via-[#1a1a2e] to-[#23234a] text-white flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <section className="w-full max-w-4xl mx-auto px-6 py-12 rounded-3xl shadow-2xl bg-[#181f2a]/90 border border-blue-900 relative overflow-hidden">
          {/* Futuristic AI Video Generator Illustration */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Glowing holographic screen */}
            <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[420px] h-[260px] bg-gradient-to-br from-blue-500/40 via-purple-600/30 to-blue-900/20 rounded-2xl shadow-2xl border-2 border-blue-400/40 animate-pulse">
              {/* Cinematic video frames */}
              <div className="absolute top-6 left-8 w-32 h-20 bg-[#23234a] rounded-lg border border-blue-400/60 shadow-lg flex items-center justify-center">
                <span className="text-xs text-blue-300">Futuristic City</span>
              </div>
              <div className="absolute top-24 left-36 w-28 h-16 bg-[#23234a] rounded-lg border border-purple-400/60 shadow-lg flex items-center justify-center">
                <span className="text-xs text-purple-300">Product Ad</span>
              </div>
              <div className="absolute top-16 left-64 w-20 h-20 bg-[#23234a] rounded-full border border-blue-400/60 shadow-lg flex items-center justify-center">
                <span className="text-xs text-blue-200">Avatar</span>
              </div>
            </div>
            {/* Digital waves and neural network lines */}
            <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 600 400" fill="none">
              <path d="M0 300 Q150 200 300 300 T600 300" stroke="#4f46e5" strokeWidth="2" opacity="0.3" />
              <path d="M0 350 Q200 250 400 350 T600 350" stroke="#a78bfa" strokeWidth="2" opacity="0.2" />
              <path d="M100 0 Q200 200 500 100" stroke="#6366f1" strokeWidth="1.5" opacity="0.18" />
              {/* Neural network nodes */}
              <circle cx="150" cy="200" r="6" fill="#4f46e5" opacity="0.5" />
              <circle cx="300" cy="300" r="7" fill="#a78bfa" opacity="0.5" />
              <circle cx="400" cy="350" r="5" fill="#6366f1" opacity="0.5" />
              <circle cx="500" cy="100" r="8" fill="#4f46e5" opacity="0.5" />
            </svg>
          </div>
          {/* Section Content */}
          <div className="relative z-10 text-center pt-8 pb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 mb-6 drop-shadow-lg">Inoglle Video: Transform Ideas into Stunning Visuals</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-4">Bring your imagination to life with our AI-powered video generation tool.</p>
            <p className="text-base md:text-lg text-slate-400 mb-8">From cinematic cityscapes to personalized avatars, create high-quality videos directly from text and images.</p>
            <p className="text-lg font-semibold text-blue-400 mb-8">Your creativity, powered by Inoglle. <span className="ml-2">🚀</span></p>
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-700 transition-transform hover:-translate-y-1 text-lg">Inspire Me</button>
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:from-purple-700 hover:to-blue-600 transition-transform hover:-translate-y-1 text-lg">Generate Now</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InoglleVideo;
