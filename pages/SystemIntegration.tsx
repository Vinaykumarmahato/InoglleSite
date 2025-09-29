import React from 'react';


const SystemIntegration = () => (
  <section className="min-h-screen py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center">System Integration Services</h1>
      <p className="text-lg text-slate-700 mb-10 text-center max-w-2xl mx-auto">Connect your business with seamless system integration. We unify disparate systems and services, enabling effortless data flow and operational efficiency.</p>

      {/* Interconnected network graphic */}
      <div className="flex justify-center mb-12">
        <svg width="320" height="120" viewBox="0 0 320 120" className="hidden md:block">
          <circle cx="60" cy="60" r="30" fill="#3b82f6" opacity="0.2" />
          <circle cx="160" cy="60" r="30" fill="#2563eb" opacity="0.2" />
          <circle cx="260" cy="60" r="30" fill="#0ea5e9" opacity="0.2" />
          <line x1="90" y1="60" x2="130" y2="60" stroke="#2563eb" strokeWidth="4" />
          <line x1="190" y1="60" x2="230" y2="60" stroke="#2563eb" strokeWidth="4" />
        </svg>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">Unified Data</h3>
            <p className="text-slate-600">Centralize your data for better insights and decision-making.</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">Automated Workflows</h3>
            <p className="text-slate-600">Reduce manual work and errors with automated integrations.</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">Scalable Architecture</h3>
            <p className="text-slate-600">Grow your business with flexible, future-proof systems.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">1</div>
            <h4 className="font-semibold mb-1">Assessment</h4>
            <p className="text-slate-600 text-sm">We evaluate your current systems and integration needs.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">2</div>
            <h4 className="font-semibold mb-1">Design</h4>
            <p className="text-slate-600 text-sm">We architect a solution that connects all your platforms.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">3</div>
            <h4 className="font-semibold mb-1">Implementation</h4>
            <p className="text-slate-600 text-sm">We build and test integrations for seamless operation.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">4</div>
            <h4 className="font-semibold mb-1">Optimization</h4>
            <p className="text-slate-600 text-sm">We monitor and refine for ongoing performance.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
            <img src="/images/logo.png" alt="FinEdge logo" className="h-12 w-12 rounded-full border border-blue-200" />
            <div>
              <h4 className="font-bold text-blue-800 mb-1">FinEdge</h4>
              <p className="text-slate-600 text-sm">FinEdge unified their CRM, ERP, and analytics platforms, reducing data silos and boosting productivity by 40%.</p>
            </div>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
            <img src="/images/logo.png" alt="RetailX logo" className="h-12 w-12 rounded-full border border-blue-200" />
            <div>
              <h4 className="font-bold text-blue-800 mb-1">RetailX</h4>
              <p className="text-slate-600 text-sm">RetailX integrated their e-commerce and inventory systems, enabling real-time stock updates and faster order fulfillment.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-transform hover:-translate-y-1 text-xl">
          Integrate Your Systems Today
        </button>
      </div>
    </div>
  </section>
);

export default SystemIntegration;
