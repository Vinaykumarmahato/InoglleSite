import React from 'react';


const ITInfrastructurePlanning = () => (
  <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-blue-200">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center">IT Infrastructure Planning Services</h1>
      <p className="text-lg text-slate-700 mb-10 text-center max-w-2xl mx-auto">Build a robust, scalable IT foundation for your business. We design and implement infrastructure that supports your growth and security needs.</p>

      {/* Infrastructure Diagram */}
      <div className="flex justify-center mb-12">
        <svg width="320" height="120" viewBox="0 0 320 120">
          <rect x="40" y="40" width="60" height="40" rx="8" fill="#2563eb" opacity="0.2" />
          <rect x="130" y="20" width="60" height="80" rx="8" fill="#3b82f6" opacity="0.2" />
          <rect x="220" y="40" width="60" height="40" rx="8" fill="#0ea5e9" opacity="0.2" />
          <line x1="100" y1="60" x2="130" y2="60" stroke="#2563eb" strokeWidth="4" />
          <line x1="190" y1="60" x2="220" y2="60" stroke="#2563eb" strokeWidth="4" />
        </svg>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Key Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">Reliability</h3>
            <p className="text-slate-600">Ensure uptime and business continuity with resilient infrastructure.</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">Scalability</h3>
            <p className="text-slate-600">Easily scale resources as your business grows.</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
            <h3 className="font-bold text-xl mb-2">Security</h3>
            <p className="text-slate-600">Protect your data and operations with best-in-class security.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Roadmap</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">1</div>
            <h4 className="font-semibold mb-1">Assessment</h4>
            <p className="text-slate-600 text-sm">We review your current infrastructure and needs.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">2</div>
            <h4 className="font-semibold mb-1">Design</h4>
            <p className="text-slate-600 text-sm">We architect a scalable, secure infrastructure plan.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">3</div>
            <h4 className="font-semibold mb-1">Implementation</h4>
            <p className="text-slate-600 text-sm">We deploy and configure your new infrastructure.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">4</div>
            <h4 className="font-semibold mb-1">Optimization</h4>
            <p className="text-slate-600 text-sm">We monitor, maintain, and optimize for performance.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Client Success</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
            <img src="/images/logo.png" alt="InfraMax logo" className="h-12 w-12 rounded-full border border-blue-200" />
            <div>
              <h4 className="font-bold text-blue-800 mb-1">InfraMax</h4>
              <p className="text-slate-600 text-sm">InfraMax upgraded to a cloud-first infrastructure, improving uptime and reducing costs by 30%.</p>
            </div>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
            <img src="/images/logo.png" alt="SecureIT logo" className="h-12 w-12 rounded-full border border-blue-200" />
            <div>
              <h4 className="font-bold text-blue-800 mb-1">SecureIT</h4>
              <p className="text-slate-600 text-sm">SecureIT implemented advanced security and backup, achieving 99.99% data protection.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-transform hover:-translate-y-1 text-xl">
          Plan Your Infrastructure
        </button>
      </div>
    </div>
  </section>
);

export default ITInfrastructurePlanning;
