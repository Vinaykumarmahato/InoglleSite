/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, GitBranch, MessageSquare, Zap, Briefcase, BookOpen, FileText, Mail, HelpCircle, Users, Menu, X } from 'lucide-react';
import LoginModal from './LoginModal';

const navItems = [
  {
    name: 'What we do',
    dropdown: {
      type: 'mega',
      columns: [
        {
          title: 'Development',
          links: [
            { name: 'Software Development', description: 'Scalable software solutions for your business needs.', icon: Code },
            { name: 'System Integration', description: 'Seamlessly connect your disparate systems and services.', icon: GitBranch },
            { name: 'Digital Transformation', description: 'Modernize your operations for the digital age.', icon: Zap },
          ]
        },
        {
          title: 'Consulting',
          links: [
            { name: 'IT Consulting', description: 'Strategic guidance to align technology with your business goals.', icon: MessageSquare },
            { name: 'IT Infrastructure Planning', description: 'Building a robust and scalable IT foundation.', icon: Briefcase },
            { name: 'Deploy AI Talent', description: 'AI-native pods integrated into your team.', icon: Users },
          ]
        }
      ],
      featured: {
        title: 'Featured Resource: Fine-Tuning LLMs',
        description: 'Large language models (LLMs) have transformed the field of natural language processing with their advanced capabilities.',
        image: 'bg-slate-700'
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
        title: 'Featured Resource: Secure App Development',
        description: 'The convergence of generative AI and large language models (LLMs) has created a unique opportunity for enterprises to engineer powerful products.',
        image: 'bg-slate-700'
      }
    }
  },
  {
    name: 'For talent',
    dropdown: {
      type: 'simple',
      links: [
        { name: 'How to get hired', description: 'How Inoglle works and how we match you to job opportunities.' },
        { name: 'Developer resources', description: 'Tips, tricks, and more to enhance your tech skills and stand out with clients.' },
        { name: 'Talent support', description: 'Get answers to common questions about job matching and more.' },
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


const MegaMenu = ({ columns, featured }) => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-4xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg shadow-2xl grid grid-cols-3 gap-8 p-8">
      {columns.map(col => (
        <div key={col.title}>
          <h3 className="font-bold text-white mb-4 border-b border-slate-700 pb-2">{col.title}</h3>
          <ul className="space-y-4">
            {col.links.map(link => (
              <li key={link.name}>
                <a href="#" className="flex items-start gap-3 group/link">
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
        <div className={`w-full h-32 rounded-md mb-4 ${featured.image}`}></div>
        <h4 className="font-bold text-white mb-2">{featured.title}</h4>
        <p className="text-sm text-slate-400 mb-4">{featured.description}</p>
        <a href="#" className="text-sm text-blue-400 font-bold hover:underline">Read more</a>
        <a href="#" className="text-sm text-slate-300 hover:text-white mt-4 block">See all resources</a>
      </div>
    </div>
  </div>
);

const SimpleMenu = ({ links }) => (
  <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
              <a href="#" key={link.name} className="flex items-start gap-3 group/link">
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

  const handleToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  
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
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      
      {/* Menu Panel */}
      <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-[#060814] transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <a href="#" className="text-white font-bold text-xl tracking-wider">INOGLLE</a>
            <button onClick={onClose} className="p-2">
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto px-4">
            {navItems.map(item => (
              <MobileNavItem 
                key={item.name} 
                item={item}
                isOpen={openDropdown === item.name}
                onToggle={() => handleToggle(item.name)}
              />
            ))}
             <MobileNavItem 
                item={loginItem}
                isOpen={openDropdown === loginItem.name}
                onToggle={() => handleToggle(loginItem.name)}
              />
          </div>
          <div className="p-4 border-t border-slate-700">
            <a href="#" className="bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg text-sm w-full block text-center hover:bg-blue-700">
              Get Started
            </a>
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
    setIsMobileMenuOpen(false); // Close mobile menu when modal opens
  };

  useEffect(() => {
    if (isMobileMenuOpen || isLoginModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen, isLoginModalOpen]);

  return (
    <>
      <header className="sticky top-0 w-full bg-[#060814]/80 backdrop-blur-md z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-xl tracking-wider">INOGLLE</a>
            </div>
            <nav className="hidden md:flex items-center justify-center flex-grow">
              <div className="flex items-center gap-8">
                {navItems.map(item => (
                  <div key={item.name} className="group relative">
                    <a href="#" className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors py-5">
                      {item.name} <ChevronDown size={16} />
                    </a>
                    {item.dropdown?.type === 'mega' && <MegaMenu {...item.dropdown} />}
                    {item.dropdown?.type === 'simple' && <SimpleMenu {...item.dropdown} />}
                  </div>
                ))}
              </div>
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                Get Started
              </a>
              <div className="group relative">
                <div className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-white text-sm font-semibold cursor-pointer">
                  Login <ChevronDown size={16} />
                </div>
                <div className="absolute top-full right-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg shadow-2xl p-6">
                    <ul className="space-y-4">
                      <li>
                        <button onClick={() => openLoginModal('client')} className="group/link text-left w-full">
                          <p className="text-white font-medium group-hover/link:text-blue-400">For clients</p>
                          <p className="text-sm text-slate-400">Access your project dashboard and resources.</p>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => openLoginModal('talent')} className="group/link text-left w-full">
                          <p className="text-white font-medium group-hover/link:text-blue-400">For talent</p>
                          <p className="text-sm text-slate-400">Manage your profile and find opportunities.</p>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-slate-300 hover:text-white">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} openLoginModal={openLoginModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} initialTab={initialLoginTab} />
    </>
  );
};

export default Header;