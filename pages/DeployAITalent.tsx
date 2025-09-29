import React from 'react';


const DeployAITalent = () => (
  <section className="min-h-screen py-20 bg-gradient-to-br from-blue-100 via-white to-blue-300">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center">Deploy AI Talent Services</h1>
      <p className="text-lg text-slate-700 mb-10 text-center max-w-2xl mx-auto">Integrate AI-native pods into your team for next-level innovation. Our experts deliver AI-driven solutions that accelerate your business growth.</p>

      {/* AI Visuals / Holographic Effect */}
      <div className="flex justify-center mb-12">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="#2563eb" opacity="0.1" />
          <circle cx="60" cy="60" r="35" fill="#2563eb" opacity="0.15" />
          <circle cx="60" cy="60" r="20" fill="#2563eb" opacity="0.2" />
          <text x="60" y="68" textAnchor="middle" fontSize="32" fill="#2563eb" opacity="0.7">AI</text>
        </svg>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">Faster Innovation</h3>
            <p className="text-slate-600">Accelerate R&D and product launches with AI expertise.</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">Seamless Integration</h3>
            <p className="text-slate-600">AI pods work alongside your team, enhancing capabilities.</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">Cost Efficiency</h3>
            <p className="text-slate-600">Reduce overhead with flexible, on-demand AI talent.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-1">AI-Powered Analytics</h4>
            <p className="text-slate-600 text-sm">Unlock insights from your data with advanced machine learning models.</p>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-1">Intelligent Automation</h4>
            <p className="text-slate-600 text-sm">Automate repetitive tasks and workflows for greater efficiency.</p>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-1">Natural Language Processing</h4>
            <p className="text-slate-600 text-sm">Enhance customer experience with chatbots and language models.</p>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-1">Predictive Maintenance</h4>
            <p className="text-slate-600 text-sm">Reduce downtime and costs with AI-driven maintenance schedules.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-transform hover:-translate-y-1 text-xl">
          Hire AI Talent Now
        </button>
      </div>
    </div>
  </section>
);

export default DeployAITalent;
