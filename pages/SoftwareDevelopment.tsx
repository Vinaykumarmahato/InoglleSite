import React from 'react';


const SoftwareDevelopment = () => (
  <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center">Software Development Services</h1>
      <p className="text-lg text-slate-700 mb-10 text-center max-w-2xl mx-auto">Unlock your business potential with scalable, custom software solutions designed to drive efficiency, innovation, and growth. Our expert team delivers robust applications tailored to your unique needs.</p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/80 rounded-2xl p-8 shadow group hover:shadow-xl transition-all border border-blue-100 text-center" data-aos="fade-up" data-aos-delay="100">
          <span className="inline-block bg-gradient-to-tr from-blue-400 to-blue-600 p-4 rounded-full mb-4"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5 5 5M12 4.998V16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          <h3 className="font-bold text-xl mb-2">Custom Development</h3>
          <p className="text-slate-600 mb-4">Tailored software built for your business, from web apps to enterprise platforms.</p>
        </div>
        <div className="bg-white/80 rounded-2xl p-8 shadow group hover:shadow-xl transition-all border border-blue-100 text-center" data-aos="fade-up" data-aos-delay="200">
          <span className="inline-block bg-gradient-to-tr from-blue-400 to-blue-600 p-4 rounded-full mb-4"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          <h3 className="font-bold text-xl mb-2">Scalable Solutions</h3>
          <p className="text-slate-600 mb-4">Grow with confidence using robust, scalable software that adapts to your needs.</p>
        </div>
        <div className="bg-white/80 rounded-2xl p-8 shadow group hover:shadow-xl transition-all border border-blue-100 text-center" data-aos="fade-up" data-aos-delay="300">
          <span className="inline-block bg-gradient-to-tr from-blue-400 to-blue-600 p-4 rounded-full mb-4"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 014-4h4m-6 6h6a2 2 0 002-2v-5a2 2 0 00-2-2h-6a2 2 0 00-2 2v5a2 2 0 002 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          <h3 className="font-bold text-xl mb-2">Efficiency Improvement</h3>
          <p className="text-slate-600 mb-4">Streamline operations and boost productivity with automation and smart integrations.</p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">How We Work</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">1</div>
            <h4 className="font-semibold mb-1">Discovery</h4>
            <p className="text-slate-600 text-sm">We analyze your business needs and define clear project goals.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">2</div>
            <h4 className="font-semibold mb-1">Design & Prototyping</h4>
            <p className="text-slate-600 text-sm">Our team creates intuitive UI/UX and technical blueprints for your solution.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">3</div>
            <h4 className="font-semibold mb-1">Development</h4>
            <p className="text-slate-600 text-sm">We build, test, and iterate using agile methods for rapid delivery.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-blue-500 text-3xl font-bold mb-2">4</div>
            <h4 className="font-semibold mb-1">Launch & Support</h4>
            <p className="text-slate-600 text-sm">Your software goes live with ongoing support and future-proofing.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
            <img src="/images/logo.png" alt="Acme Corp logo" className="h-12 w-12 rounded-full border border-blue-200" />
            <div>
              <h4 className="font-bold text-blue-800 mb-1">Acme Corp</h4>
              <p className="text-slate-600 text-sm">Acme Corp scaled their operations by 300% with our custom ERP solution, improving efficiency and reducing costs.</p>
            </div>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
            <img src="/images/logo.png" alt="TechNova logo" className="h-12 w-12 rounded-full border border-blue-200" />
            <div>
              <h4 className="font-bold text-blue-800 mb-1">TechNova</h4>
              <p className="text-slate-600 text-sm">TechNova launched a new SaaS platform in record time, thanks to our agile development and scalable architecture.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="w-full max-w-md h-48 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden">
          {/* Example growth graphic: upward arrow and bars */}
          <div className="absolute bottom-4 left-8 flex gap-2 items-end">
            <div className="bg-blue-500 rounded-md" style={{width:'16px',height:'32px'}}></div>
            <div className="bg-blue-400 rounded-md" style={{width:'16px',height:'48px'}}></div>
            <div className="bg-blue-300 rounded-md" style={{width:'16px',height:'64px'}}></div>
            <div className="bg-blue-200 rounded-md" style={{width:'16px',height:'80px'}}></div>
          </div>
          <svg width="80" height="80" viewBox="0 0 80 80" className="absolute right-8 top-8">
            <polyline points="10,70 30,50 50,30 70,10" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
            <polygon points="70,10 65,20 75,20" fill="#2563eb" />
          </svg>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-transform hover:-translate-y-1 text-xl">
          Build Your Solution
        </button>
      </div>
    </div>
  </section>
);

export default SoftwareDevelopment;
