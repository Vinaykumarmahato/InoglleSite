import React from 'react';


const FeaturedResourceLLMs = () => (
  <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center">Featured Resource: Fine-Tuning LLMs</h1>
      <p className="text-lg text-slate-700 mb-10 text-center max-w-2xl mx-auto">Unlock the power of Large Language Models (LLMs) in NLP. Learn how fine-tuning can transform your business with advanced AI capabilities.</p>

      {/* Infographic Visual */}
      <div className="flex justify-center mb-12">
        <svg width="320" height="120" viewBox="0 0 320 120">
          <rect x="20" y="40" width="60" height="40" rx="8" fill="#2563eb" opacity="0.2" />
          <rect x="100" y="20" width="60" height="80" rx="8" fill="#3b82f6" opacity="0.2" />
          <rect x="180" y="40" width="60" height="40" rx="8" fill="#0ea5e9" opacity="0.2" />
          <rect x="260" y="60" width="40" height="20" rx="8" fill="#2563eb" opacity="0.2" />
        </svg>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Step-by-Step Learning Modules</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">1. Introduction to LLMs</h3>
            <p className="text-slate-600">Understand the basics and business value of large language models.</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">2. Fine-Tuning Techniques</h3>
            <p className="text-slate-600">Learn how to adapt LLMs for your specific use cases and data.</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">3. Deployment & Best Practices</h3>
            <p className="text-slate-600">Discover how to deploy, monitor, and optimize LLMs in production.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Download Resource</h2>
        <div className="flex flex-col items-center">
          <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-transform hover:-translate-y-1 text-lg mb-4">
            Read More / Download Resource
          </a>
          <span className="text-slate-500 text-sm">PDF, eBook, and video modules available</span>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedResourceLLMs;
