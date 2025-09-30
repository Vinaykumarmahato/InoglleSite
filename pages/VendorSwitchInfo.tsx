import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import { MegaMenu, SimpleMenu } from '../components/Header.jsx';
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
    X,
    Unlink,
    ShieldCheck,
    Scale,
    Shuffle
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


// Duplicate MegaMenu and SimpleMenu definitions commented out to avoid conflicts. Use imported versions from Header.jsx.

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

// Removed local Header definition. Use imported Header from components/Header.jsx.
// --- End: Header Data and Components ---


// --- Main Page Component ---
const VendorSwitchInfo = () => {
    const [showBanner, setShowBanner] = useState(true);

    const painPoints = [
        { icon: <Unlink />, title: "Data Silos & Vendor Lock-In", description: "Your current partner's ecosystem may limit your access to diverse datasets, trapping your valuable IP and hindering innovation." },
        { icon: <Scale />, title: "Biased & Skewed Models", description: "A vendor with their own models has a vested interest in promoting them, potentially leading to biased results and suboptimal performance for your specific needs." },
        { icon: <Zap />, title: "Lack of Flexibility", description: "Proprietary platforms can stifle your ability to integrate best-in-class tools and adapt to the rapidly evolving AI landscape." },
    ];

  return (
    <div className="min-h-screen bg-[#111]">
      <Header />

            <main className="flex-1">
                <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Hero Section */}
                        <div className="text-center mb-20">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6">Liberate Your AI Research</h1>
                            <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto">Break free from vendor lock-in and accelerate your innovation with a truly neutral data partner. We empower you to build objective, high-performing AI models without compromise.</p>
                            <a href="/ContactUs" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">Schedule a Neutrality Assessment</a>
                        </div>

                        {/* Problems Section */}
                        <div className="mb-20">
                            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">The Hidden Costs of a Biased Data Partner</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {painPoints.map(point => (
                                    <div key={point.title} className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                                         <div className="inline-block bg-red-100 p-3 rounded-full mb-4">
                                            {React.cloneElement(point.icon, { className: 'w-6 h-6 text-red-600' })}
                                        </div>
                                        <h3 className="text-xl font-bold text-blue-900 mb-2">{point.title}</h3>
                                        <p className="text-slate-600">{point.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Solution Section */}
                         <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-xl border border-blue-100 mb-20">
                             <div className="p-4">
                                <h2 className="text-3xl font-bold text-blue-900 mb-4">The Inoglle Advantage: True Neutrality</h2>
                                <p className="text-slate-600 mb-6">
                                    As a neutral data partner, our only goal is your success. We are technology-agnostic, which means we provide unbiased data sourcing, annotation, and validation services to ensure your AI models are objective, accurate, and built for performance.
                                </p>
                                <ul className="space-y-4">
                                   <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700"><strong>Objective & Unbiased:</strong> We don't build or sell models, ensuring our data services are free from conflicts of interest.</span>
                                    </li>
                                     <li className="flex items-start gap-3">
                                        <Shuffle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700"><strong>Total Flexibility:</strong> Integrate seamlessly with any model, platform, or cloud provider. Your AI stack, your choice.</span>
                                    </li>
                                     <li className="flex items-start gap-3">
                                        <Zap className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700"><strong>Accelerated Innovation:</strong> Focus on building groundbreaking AI without being constrained by a vendor's ecosystem.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="h-full">
                               <img src="https://placehold.co/500x400/dbeafe/1e3a8a?text=Data+Neutrality" alt="Data Neutrality" className="rounded-lg shadow-md w-full h-full object-cover"/>
                            </div>
                        </div>

                         {/* CTA Section */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Make the Switch?</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto mb-8">A smooth transition is our priority. Contact our team today to learn more about our seamless onboarding process and how a neutral data partner can de-risk and accelerate your AI development.</p>
                             <a href="/ContactUs" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
                                Discuss Your Transition Plan
                            </a>
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

export default VendorSwitchInfo;
