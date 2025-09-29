import React from 'react';


const DigitalTransformation = () => (
  <section className="min-h-screen py-20 bg-gradient-to-br from-blue-200 via-white to-blue-300">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center">Digital Transformation Services</h1>
      <p className="text-lg text-slate-700 mb-10 text-center max-w-2xl mx-auto">Modernize your business with cloud adoption, automation, and bold digital strategies. We help you transform legacy systems and processes for the future.</p>

      {/* Before/After Comparison Graphic */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
        <div className="bg-white/80 rounded-xl p-6 shadow w-full md:w-1/2 text-center">
          <h3 className="font-bold text-lg mb-2 text-slate-500">Before</h3>
          <p className="text-slate-600 mb-4">Manual processes, siloed data, outdated systems.</p>
          <svg width="100" height="60"><rect x="10" y="20" width="80" height="20" rx="8" fill="#cbd5e1" /></svg>
        </div>
        <div className="bg-white/80 rounded-xl p-6 shadow w-full md:w-1/2 text-center">
          <h3 className="font-bold text-lg mb-2 text-blue-700">After</h3>
          <p className="text-slate-600 mb-4">Automated workflows, cloud platforms, real-time insights.</p>
          <svg width="100" height="60"><rect x="10" y="10" width="80" height="40" rx="20" fill="#2563eb" /></svg>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Transformation Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">1</div>
            <h4 className="font-semibold mb-1">Assessment</h4>
            <p className="text-slate-600 text-sm">We evaluate your current digital landscape and goals.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">2</div>
            <h4 className="font-semibold mb-1">Strategy</h4>
            <p className="text-slate-600 text-sm">We design a roadmap for modernization and automation.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">3</div>
            <h4 className="font-semibold mb-1">Implementation</h4>
            <p className="text-slate-600 text-sm">We migrate, automate, and integrate your systems.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">4</div>
            <h4 className="font-semibold mb-1">Impact</h4>
            <p className="text-slate-600 text-sm">We measure results and optimize for ongoing success.</p>
          </div>
        </div>
      </div>

      {/* Business Impact Stats & Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Business Impact</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-8">
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 text-center flex-1">
            <div className="text-3xl font-bold text-blue-700 mb-2">+60%</div>
            <p className="text-slate-600">Productivity Increase</p>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 text-center flex-1">
            <div className="text-3xl font-bold text-blue-700 mb-2">-40%</div>
            <p className="text-slate-600">Operational Costs</p>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 text-center flex-1">
            <div className="text-3xl font-bold text-blue-700 mb-2">99.9%</div>
            <p className="text-slate-600">System Uptime</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
            <img src="/images/logo.png" alt="NextGen logo" className="h-12 w-12 rounded-full border border-blue-200" />
            <div>
              <h4 className="font-bold text-blue-800 mb-1">NextGen</h4>
              <p className="text-slate-600 text-sm">NextGen modernized their legacy systems, reducing costs and boosting productivity with cloud automation.</p>
            </div>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
            <img src="/images/logo.png" alt="AutoPro logo" className="h-12 w-12 rounded-full border border-blue-200" />
            <div>
              <h4 className="font-bold text-blue-800 mb-1">AutoPro</h4>
              <p className="text-slate-600 text-sm">AutoPro adopted AI-driven automation, achieving 99.9% uptime and faster service delivery.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-transform hover:-translate-y-1 text-xl">
          Start Your Digital Journey
        </button>
      </div>
    </div>
  </section>
);

export default DigitalTransformation;
