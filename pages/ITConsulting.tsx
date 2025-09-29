import React from 'react';


const ITConsulting = () => (
  <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-blue-200">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center">IT Consulting Services</h1>
      <p className="text-lg text-slate-700 mb-10 text-center max-w-2xl mx-auto">Strategic technology guidance to align your business goals with the right IT solutions. Our expert consultants help you plan, optimize, and future-proof your technology investments.</p>

      {/* Team Photos */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <div className="flex flex-col items-center">
          <img src="/images/logo.png" alt="Consultant 1" className="h-16 w-16 rounded-full border-2 border-blue-300 mb-2" />
          <span className="font-semibold text-blue-800">Priya Sharma</span>
          <span className="text-xs text-slate-500">Lead Consultant</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/logo.png" alt="Consultant 2" className="h-16 w-16 rounded-full border-2 border-blue-300 mb-2" />
          <span className="font-semibold text-blue-800">Rahul Mehta</span>
          <span className="text-xs text-slate-500">Cloud Architect</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/logo.png" alt="Consultant 3" className="h-16 w-16 rounded-full border-2 border-blue-300 mb-2" />
          <span className="font-semibold text-blue-800">Aisha Khan</span>
          <span className="text-xs text-slate-500">IT Strategist</span>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Consulting Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">1</div>
            <h4 className="font-semibold mb-1">Assessment</h4>
            <p className="text-slate-600 text-sm">We analyze your business and IT landscape.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">2</div>
            <h4 className="font-semibold mb-1">Strategy</h4>
            <p className="text-slate-600 text-sm">We develop a tailored IT roadmap for your goals.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">3</div>
            <h4 className="font-semibold mb-1">Implementation</h4>
            <p className="text-slate-600 text-sm">We guide you through solution deployment.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">4</div>
            <h4 className="font-semibold mb-1">Optimization</h4>
            <p className="text-slate-600 text-sm">We monitor, optimize, and support your IT growth.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Client Success</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
            <img src="/images/logo.png" alt="BizGrowth logo" className="h-12 w-12 rounded-full border border-blue-200" />
            <div>
              <h4 className="font-bold text-blue-800 mb-1">BizGrowth</h4>
              <p className="text-slate-600 text-sm">BizGrowth realigned their IT strategy, resulting in 2x faster project delivery and improved ROI.</p>
            </div>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
            <img src="/images/logo.png" alt="CloudEdge logo" className="h-12 w-12 rounded-full border border-blue-200" />
            <div>
              <h4 className="font-bold text-blue-800 mb-1">CloudEdge</h4>
              <p className="text-slate-600 text-sm">CloudEdge adopted a new cloud strategy, reducing costs by 35% and increasing agility.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-transform hover:-translate-y-1 text-xl">
          Get Strategic Advice
        </button>
      </div>
    </div>
  </section>
);

export default ITConsulting;
