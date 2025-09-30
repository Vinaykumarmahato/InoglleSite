import React, { useState, useEffect } from 'react';
import {
    Bell,
    ChevronDown,
    Code,
    GitBranch,
    MessageSquare,
    Zap,
    Briefcase,
    BookOpen,
    FileText,
    Mail,
    HelpCircle,
    Users,
    Menu,
    X
} from 'lucide-react';

// --- Begin: Placeholder Components for Header ---
const LoginModal = ({ isOpen, onClose, initialTab }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={onClose}>
            <div className="bg-slate-800 text-white rounded-lg p-8 w-96" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Login</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-white">&times;</button>
                </div>
                <p>Login form for <span className="font-bold capitalize">{initialTab}</span> would appear here.</p>
                <button onClick={onClose} className="mt-6 bg-blue-600 px-4 py-2 rounded-lg w-full hover:bg-blue-700">Close</button>
            </div>
        </div>
    );
};

const Logo = () => (
    <a href="/" className="flex items-center gap-3">
        <img src="https://placehold.co/100x40/111/FFF?text=Inoglle" alt="Inoglle Logo" className="h-8" />
        <span className="font-bold text-xl text-white sr-only">Inoglle</span>
    </a>
);
// --- End: Placeholder Components ---


// --- Begin: Header Data and Components ---
const navItems = [
  {
    name: 'What we do',
    dropdown: {
      type: 'mega',
      columns: [
        {
          title: 'Development',
          links: [
            { name: 'Software Development', href: '/SoftwareDevelopment', description: 'Scalable software solutions for your business needs.', icon: Code },
            { name: 'System Integration', href: '/SystemIntegration', description: 'Seamlessly connect your disparate systems and services.', icon: GitBranch },
            { name: 'Digital Transformation', href: '/DigitalTransformation', description: 'Modernize your operations for the digital age.', icon: Zap },
          ]
        },
        {
          title: 'Consulting',
          links: [
            { name: 'IT Consulting', href: '/ITConsulting', description: 'Strategic guidance to align technology with your business goals.', icon: MessageSquare },
            { name: 'IT Infrastructure Planning', href: '/ITInfrastructurePlanning', description: 'Building a robust and scalable IT foundation.', icon: Briefcase },
            { name: 'Deploy AI Talent', href: '/DeployAITalent', description: 'AI-native pods integrated into your team.', icon: Users },
          ]
        }
      ],
      featured: {
        title: 'Featured: Fine-Tuning LLMs',
        description: 'Explore how large language models have transformed the field of natural language processing.',
        image: 'https://placehold.co/400x200/18233a/a0aec0?text=Featured+Resource'
      }
    }
  },
  {
    name: 'Resources',
    dropdown: {
      type: 'mega',
      columns: [
        {
          title: 'Learn',
          links: [
            { name: 'Enterprise Insights', description: 'In-depth articles and analyses on IT trends.', icon: BookOpen },
            { name: 'Case Studies', description: 'See how we\'ve helped businesses like yours succeed.', icon: FileText },
            { name: 'Use Cases', description: 'Explore practical applications of our IT solutions.', icon: Zap },
          ]
        },
        {
          title: 'Connect',
          links: [
            { name: 'Contact Us', description: 'Get in touch with our team of experts.', icon: Mail },
            { name: 'Help Center', description: 'Find answers to frequently asked questions.', icon: HelpCircle },
            { name: 'Inoglle Careers', description: 'Join our team and shape the future of IT.', icon: Briefcase },
          ]
        }
      ],
      featured: {
        title: 'Featured: Secure App Development',
        description: 'Leverage generative AI and LLMs to engineer powerful, secure enterprise-grade products.',
        image: 'https://placehold.co/400x200/18233a/a0aec0?text=Secure+Development'
      }
    }
  },
  {
    name: 'For talent',
    dropdown: {
      type: 'simple',
      links: [
        { name: 'How to get hired', description: 'How Inoglle works and we match you to opportunities.' },
        { name: 'Developer resources', description: 'Tips and tricks to enhance your tech skills.' },
        { name: 'Talent support', description: 'Get answers to common questions about job matching.' },
      ]
    }
  },
  {
    name: 'Company',
    dropdown: {
      type: 'simple',
      links: [
        { name: 'About' },
        { name: 'Careers' },
        { name: 'Blog' },
        { name: 'Press' },
        { name: 'Contact Us' },
      ]
    }
  },
];


const MegaMenu = ({ columns, featured, align = 'center' }) => (
  <div className={
    align === 'left'
  ? 'absolute top-full left-0 mt-2 w-screen max-w-2xl lg:ml-16 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:delay-150 transition-all duration-300'
  : 'absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:delay-150 transition-all duration-300'
  }>
  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg shadow-2xl grid grid-cols-3 gap-8 p-8 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-slate-900">
      {columns.map(col => (
        <div key={col.title}>
          <h3 className="font-bold text-white mb-4 border-b border-slate-700 pb-2">{col.title}</h3>
          <ul className="space-y-4">
            {col.links.map(link => (
              <li key={link.name}>
                <a href={link.href || '#'} className="flex items-start gap-3 group/link">
                  {link.icon && <link.icon className="w-5 h-5 mt-1 text-slate-400 group-hover/link:text-blue-400" />}
                  <div>
                    <p className="text-white font-medium group-hover/link:text-blue-400">{link.name}</p>
                    {link.description && <p className="text-sm text-slate-400">{link.description}</p>}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="bg-slate-800/50 rounded-lg p-4">
        <p className="text-xs font-semibold text-slate-400 mb-2">Featured resource</p>
        <img src={featured.image} alt={featured.title} className="w-full h-32 object-cover rounded-md mb-4" />
        <h4 className="font-bold text-white mb-2">{featured.title}</h4>
        <p className="text-sm text-slate-400 mb-4">{featured.description}</p>
        <a href="#" className="text-sm text-blue-400 font-bold hover:underline">Read more</a>
        <a href="#" className="text-sm text-slate-300 hover:text-white mt-4 block">See all resources</a>
      </div>
    </div>
  </div>
);

const SimpleMenu = ({ links }) => (
  <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:delay-150 transition-all duration-300">
    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg shadow-2xl p-6">
      <ul className="space-y-4">
        {links.map(link => (
          <li key={link.name}>
            <a href="#" className="group/link">
              <p className="text-white font-medium group-hover/link:text-blue-400">{link.name}</p>
              {link.description && <p className="text-sm text-slate-400">{link.description}</p>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const MobileNavItem = ({ item, isOpen, onToggle }) => {
  const hasDropdown = item.dropdown && (item.dropdown.links?.length > 0 || item.dropdown.columns?.length > 0);
  const getLinks = () => {
    if (!hasDropdown) return [];
    if (item.dropdown.type === 'simple') return item.dropdown.links;
    if (item.dropdown.type === 'mega') return item.dropdown.columns.flatMap(c => c.links);
    return [];
  };
  const LinkContent = ({ link }) => (
    <>
      {link.icon && <link.icon className="w-5 h-5 mt-1 text-slate-400" />}
      <div>
        <p className="text-white font-medium">{link.name}</p>
        {link.description && <p className="text-sm text-slate-400">{link.description}</p>}
      </div>
    </>
  );
  return (
    <div className="border-b border-slate-700">
      <button onClick={onToggle} className="w-full flex justify-between items-center py-4 text-left">
        <span className="text-lg text-white font-medium">{item.name}</span>
        {hasDropdown && <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </button>
      {hasDropdown && isOpen && (
        <div className="pb-4 pl-4 space-y-3">
          {getLinks().map(link => (
             link.onClick ? (
               <button key={link.name} onClick={link.onClick} className="flex items-start gap-3 group/link text-left w-full">
                 <LinkContent link={link} />
               </button>
               ) : (
               <a href={link.href || '#'} key={link.name} className="flex items-start gap-3 group/link">
                 <LinkContent link={link} />
               </a>
               )
          ))}
        </div>
      )}
    </div>
  )
}

const MobileMenu = ({ isOpen, onClose, openLoginModal }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const handleToggle = (name) => setOpenDropdown(openDropdown === name ? null : name);
  const loginItem = {
    name: 'Login',
    dropdown: {
      type: 'simple',
      links: [
        { name: 'For clients', description: 'Access your project dashboard and resources.', onClick: () => openLoginModal('client') },
        { name: 'For talent', description: 'Manage your profile and find opportunities.', onClick: () => openLoginModal('talent') },
      ]
    }
  };
  return (
    <div className={`fixed inset-0 z-50 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-[#060814] transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <Logo />
            <button onClick={onClose} className="p-2 text-white"><X size={24} /></button>
          </div>
          <div className="flex-grow overflow-y-auto px-4">
            {navItems.map(item => (<MobileNavItem key={item.name} item={item} isOpen={openDropdown === item.name} onToggle={() => handleToggle(item.name)} />))}
            <MobileNavItem item={loginItem} isOpen={openDropdown === loginItem.name} onToggle={() => handleToggle(loginItem.name)} />
          </div>
          <div className="p-4 border-t border-slate-700">
            <a href="#" className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold px-4 py-3 rounded-lg text-sm w-full block text-center hover:from-blue-600 hover:to-blue-700">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [initialLoginTab, setInitialLoginTab] = useState('client');

  const openLoginModal = (tab) => {
    setInitialLoginTab(tab);
    setIsLoginModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.overflow = (isMobileMenuOpen || isLoginModalOpen) ? 'hidden' : 'auto';
    return () => { bodyStyle.overflow = 'auto'; };
  }, [isMobileMenuOpen, isLoginModalOpen]);

  return (
    <>
      <header className="sticky top-0 w-full bg-[#111] z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0"><Logo /></div>
            <nav className="hidden md:flex items-center justify-center flex-grow">
              <div className="flex items-center gap-8">
                {navItems.map(item => (
                  <div key={item.name} className="group relative">
                    <a href="#" className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors py-5 font-semibold">
                      {item.name} <ChevronDown size={16} />
                    </a>
                    {item.dropdown?.type === 'mega' && (
                      <MegaMenu columns={item.dropdown.columns} featured={item.dropdown.featured} align={item.name === 'What we do' ? 'left' : 'center'} />
                    )}
                    {item.dropdown?.type === 'simple' && (
                      <SimpleMenu links={item.dropdown.links} />
                    )}
                  </div>
                ))}
              </div>
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-2 rounded-lg text-base transition-colors">Get Started</a>
              <div className="group relative">
                <div className="hidden sm:flex items-center gap-1 text-white hover:text-blue-400 text-base font-semibold cursor-pointer">
                  Login <ChevronDown size={16} />
                </div>
                <div className="absolute top-full right-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:delay-150 transition-all duration-300">
                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg shadow-2xl p-6">
                    <ul className="space-y-4">
                      <li><button onClick={() => openLoginModal('client')} className="group/link text-left w-full"><p className="text-white font-medium group-hover/link:text-blue-400">For clients</p><p className="text-sm text-slate-400">Access your project dashboard.</p></button></li>
                      <li><button onClick={() => openLoginModal('talent')} className="group/link text-left w-full"><p className="text-white font-medium group-hover/link:text-blue-400">For talent</p><p className="text-sm text-slate-400">Manage your profile.</p></button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-white hover:text-blue-400"><Menu size={24} /></button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} openLoginModal={openLoginModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} initialTab={initialLoginTab} />
    </>
  );
};
// --- End: Header Data and Components ---

// --- Main Page Component ---
const SystemIntegration = () => {
    const [showBanner, setShowBanner] = useState(true);

    return (
        <div className="min-h-screen bg-[#111]">
            {showBanner && (
                <div className="w-full bg-gradient-to-r from-[#1662c4] to-[#0a2a6c] text-white flex items-center justify-between px-8 py-2 text-base font-medium">
                    <div className="flex items-center gap-3">
                        <Bell size={22} />
                        <span>Need a vendor switch? Accelerate your AI research with a neutral data partner.</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="underline font-semibold">Learn More &rarr;</a>
                        <button onClick={() => setShowBanner(false)} className="text-white text-2xl font-bold hover:text-blue-200">&#10005;</button>
                    </div>
                </div>
            )}

            <Header />

            <main>
                <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center">System Integration Services</h1>
                            <p className="text-lg text-slate-700 mb-10 text-center max-w-2xl mx-auto">Connect your business with seamless system integration. We unify disparate systems and services, enabling effortless data flow and operational efficiency.</p>
                            
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
                                        <h3 className="font-bold text-xl text-blue-900 mb-2">Unified Data</h3>
                                        <p className="text-slate-600">Centralize your data for better insights and decision-making.</p>
                                    </div>
                                    <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
                                        <h3 className="font-bold text-xl text-blue-900 mb-2">Automated Workflows</h3>
                                        <p className="text-slate-600">Reduce manual work and errors with automated integrations.</p>
                                    </div>
                                    <div className="bg-white/80 rounded-2xl p-8 shadow border border-blue-100 text-center">
                                        <h3 className="font-bold text-xl text-blue-900 mb-2">Scalable Architecture</h3>
                                        <p className="text-slate-600">Grow your business with flexible, future-proof systems.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mb-16">
                                <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Process</h2>
                                <div className="grid md:grid-cols-4 gap-6">
                                    <div className="bg-white rounded-xl p-6 shadow text-center">
                                        <div className="text-blue-500 text-3xl font-bold mb-2">1</div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Assessment</h4>
                                        <p className="text-slate-600 text-sm">We evaluate your current systems and integration needs.</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow text-center">
                                        <div className="text-blue-500 text-3xl font-bold mb-2">2</div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Design</h4>
                                        <p className="text-slate-600 text-sm">We architect a solution that connects all your platforms.</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow text-center">
                                        <div className="text-blue-500 text-3xl font-bold mb-2">3</div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Implementation</h4>
                                        <p className="text-slate-600 text-sm">We build and test integrations for seamless operation.</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow text-center">
                                        <div className="text-blue-500 text-3xl font-bold mb-2">4</div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Optimization</h4>
                                        <p className="text-slate-600 text-sm">We monitor and refine for ongoing performance.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-16">
                                <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Case Studies</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
                                        <img src="https://placehold.co/48x48/e0e7ff/3730a3?text=FE" alt="FinEdge logo" className="h-12 w-12 rounded-full" />
                                        <div>
                                            <h4 className="font-bold text-blue-800 mb-1">FinEdge</h4>
                                            <p className="text-slate-600 text-sm">FinEdge unified their CRM, ERP, and analytics platforms, reducing data silos and boosting productivity by 40%.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/90 rounded-xl p-6 shadow border border-blue-100 flex items-center gap-4">
                                        <img src="https://placehold.co/48x48/e0e7ff/3730a3?text=RX" alt="RetailX logo" className="h-12 w-12 rounded-full" />
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
                    </div>
                </section>
            </main>

            <footer className="bg-[#181f2a] text-slate-300 py-10 border-t border-blue-900">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="col-span-1 flex flex-col gap-2">
                        <div className="flex items-center gap-3 mb-2">
                             <img src="https://placehold.co/100x40/181f2a/FFF?text=Inoglle" alt="Inoglle Logo" className="h-8" />
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
    );
};

export default SystemIntegration;
