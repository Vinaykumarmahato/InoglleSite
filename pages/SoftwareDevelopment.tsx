import React from 'react';

// --- Icon Components (from your provided code) ---
const CustomDevIcon = () => (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5 5 5M12 4.998V16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ScalableIcon = () => (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const EfficiencyIcon = () => (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path d="M9 17v-2a4 4 0 014-4h4m-6 6h6a2 2 0 002-2v-5a2 2 0 00-2-2h-6a2 2 0 00-2 2v5a2 2 0 002 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// --- Main Page Component ---
const App = () => {
  const services = [
    {
      icon: <CustomDevIcon />,
      title: 'Custom Development',
      description: 'Tailored software built for your business, from web apps to enterprise platforms.',
    },
    {
      icon: <ScalableIcon />,
      title: 'Scalable Solutions',
      description: 'Grow with confidence using robust, scalable software that adapts to your needs.',
    },
    {
      icon: <EfficiencyIcon />,
      title: 'Efficiency Improvement',
      description: 'Streamline operations and boost productivity with automation and smart integrations.',
    },
  ];

  const processSteps = [
    { number: 1, title: 'Discovery', description: 'We analyze your business needs and define clear project goals.' },
    { number: 2, title: 'Design & Prototyping', description: 'Our team creates intuitive UI/UX and technical blueprints for your solution.' },
    { number: 3, title: 'Development', description: 'We build, test, and iterate using agile methods for rapid delivery.' },
    { number: 4, title: 'Launch & Support', description: 'Your software goes live with ongoing support and future-proofing.' },
  ];

  const successStories = [
    {
      logo: 'https://placehold.co/48x48/E2E8F0/334155?text=AC',
      alt: 'Acme Corp logo',
      name: 'Acme Corp',
      story: 'Acme Corp scaled their operations by 300% with our custom ERP solution, improving efficiency and reducing costs.'
    },
    {
      logo: 'https://placehold.co/48x48/E2E8F0/334155?text=TN',
      alt: 'TechNova logo',
      name: 'TechNova',
      story: 'TechNova launched a new SaaS platform in record time, thanks to our agile development and scalable architecture.'
    }
  ];

  return (
    <div className="text-slate-800 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen font-sans">
      {/* --- Header --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">DevCraft</h1>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#process" className="text-slate-600 hover:text-blue-600 transition-colors">Process</a>
            <a href="#clients" className="text-slate-600 hover:text-blue-600 transition-colors">Clients</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-px">
            Build Your Solution
          </a>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* --- Hero Section --- */}
          <section className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6">Software Development Services</h1>
            <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto">
              Unlock your business potential with scalable, custom software solutions designed to drive efficiency, innovation, and growth. Our expert team delivers robust applications tailored to your unique needs.
            </p>
          </section>

          {/* --- Services Section --- */}
          <section id="services" className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 rounded-2xl p-8 shadow group hover:shadow-xl transition-all border border-blue-100 text-center">
                <span className="inline-block bg-gradient-to-tr from-blue-400 to-blue-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                <h3 className="font-bold text-xl text-blue-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </section>

          {/* --- How We Work Section --- */}
          <section id="process" className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">How We Work</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map(step => (
                <div key={step.number} className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100">
                  <div className="text-blue-500 text-3xl font-bold mb-2">{step.number}</div>
                  <h4 className="font-semibold text-blue-900 mb-1">{step.title}</h4>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- Client Success & Growth Graphic --- */}
          <section id="clients" className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Client Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white/90 rounded-xl p-6 shadow-sm border border-blue-100 flex items-center gap-4">
                  <img src={story.logo} alt={story.alt} className="h-12 w-12 rounded-full border border-blue-200" />
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">{story.name}</h4>
                    <p className="text-slate-600 text-sm">{story.story}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative flex justify-center items-center p-8 bg-white rounded-2xl shadow-lg border border-blue-100 min-h-[250px] overflow-hidden">
                <div className="text-center">
                    <h3 className="font-bold text-xl text-blue-900">Visualizing Your Growth</h3>
                    <p className="text-slate-600 text-sm max-w-sm mx-auto mt-2">Our solutions replace inefficient workflows, unlocking significant growth and scalability.</p>
                </div>
                {/* Visual Graphic */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-50 to-transparent flex items-end justify-center gap-4 px-8">
                     <div className="bg-blue-200 rounded-t-lg w-8 transition-all duration-500" style={{height: '20%'}}></div>
                     <div className="bg-blue-300 rounded-t-lg w-8 transition-all duration-500" style={{height: '40%'}}></div>
                     <div className="bg-blue-400 rounded-t-lg w-8 transition-all duration-500" style={{height: '60%'}}></div>
                     <div className="bg-blue-500 rounded-t-lg w-8 transition-all duration-500" style={{height: '80%'}}></div>
                </div>
            </div>
          </section>

          {/* --- Final CTA --- */}
          <section id="contact" className="text-center">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-transform hover:-translate-y-1 text-xl">
              Build Your Solution
            </button>
          </section>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} DevCraft. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

