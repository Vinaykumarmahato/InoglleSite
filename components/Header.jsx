/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, GitBranch, MessageSquare, Zap, Briefcase, BookOpen, FileText, Mail, HelpCircle, Users, Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const navItems = [
  {
    name: 'Services',
    dropdown: {
      type: 'mega',
      columns: [
        {
          title: 'Engineering',
          links: [
            { name: 'Custom Software', href: '/services/software', description: 'Tailored enterprise applications.', icon: Code },
            { name: 'Cloud & DevOps', href: '/services/cloud', description: 'Scalable infrastructure on AWS/Azure.', icon: Zap },
            { name: 'Legacy Modernization', href: '/services/modernization', description: 'Transforming outdated systems.', icon: GitBranch },
          ]
        },
        {
          title: 'Consulting',
          links: [
            { name: 'Digital Strategy', href: '/consulting/strategy', description: 'Roadmaps for digital transformation.', icon: MessageSquare },
            { name: 'Security & Compliance', href: '/consulting/security', description: 'ISO 27001 & GDPR adherence.', icon: Briefcase },
            { name: 'Data Analytics', href: '/consulting/data', description: 'Turning data into business value.', icon: BookOpen },
          ]
        }
      ],
      featured: {
        title: 'Case Study: FinTech Scale',
        description: 'How we helped a NeoBank scale to 5M users with 99.99% uptime.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400'
      }
    }
  },
  {
    name: 'Industries',
    dropdown: {
      type: 'simple',
      links: [
        { name: 'Banking & Finance', href: '/industries/bfsi', description: 'Secure, high-transaction systems.' },
        { name: 'Healthcare', href: '/industries/healthcare', description: 'HIPAA compliant patient solutions.' },
        { name: 'Manufacturing', href: '/industries/manufacturing', description: 'IoT and supply chain optimization.' },
        { name: 'Retail & E-commerce', href: '/industries/retail', description: 'Omnichannel customer experiences.' },
      ]
    }
  },
  {
    name: 'Company',
    dropdown: {
      type: 'simple',
      links: [
        { name: 'About Inoglle', href: '/about' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ]
    }
  }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-0'
        }`}
    >
      <div className={`max-w-7xl mx-auto px-4 transition-all duration-300`}>
        <div className={`
                    rounded-full border transition-all duration-300 px-6 py-3 flex items-center justify-between
                    ${scrolled
            ? 'bg-slate-900/95 backdrop-blur-xl border-slate-700/50 shadow-2xl shadow-black/50'
            : 'bg-slate-900/50 backdrop-blur-sm border-white/5'
          }
                `}>

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 z-[1000]">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 z-[1000]">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group px-4 py-2"
                onMouseEnter={() => setHoveredNav(item.name)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {item.name} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Dropdown */}
                <div className={`
                                    absolute top-full left-1/2 -translate-x-1/2 pt-8 transition-all duration-300 transform origin-top z-[1000]
                                    ${hoveredNav === item.name ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                                `}>
                  <div className="bg-slate-900/95 backdrop-blur-2xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden min-w-[320px]">
                    {item.dropdown.type === 'simple' && (
                      <div className="p-2 w-64">
                        {item.dropdown.links.map(link => (
                          <Link key={link.name} to={link.href} className="block px-4 py-3 rounded-xl hover:bg-slate-800/50 transition-colors group/link">
                            <div className="text-sm font-semibold text-slate-200 group-hover/link:text-white mb-0.5">{link.name}</div>
                            {link.description && <div className="text-xs text-slate-500 group-hover/link:text-slate-400">{link.description}</div>}
                          </Link>
                        ))}
                      </div>
                    )}

                    {item.dropdown.type === 'mega' && (
                      <div className="flex w-[800px]">
                        <div className="flex-1 grid grid-cols-2 gap-8 p-8 border-r border-slate-800">
                          {item.dropdown.columns.map(col => (
                            <div key={col.title}>
                              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">{col.title}</div>
                              <div className="space-y-4">
                                {col.links.map(link => (
                                  <Link key={link.name} to={link.href} className="flex gap-3 group/link">
                                    <div className="mt-1 text-slate-600 group-hover/link:text-blue-400">
                                      <link.icon size={18} />
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold text-slate-300 group-hover/link:text-white transition-colors">{link.name}</div>
                                      <div className="text-xs text-slate-500 line-clamp-1">{link.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <Link to="/case-studies/fintech-scale" className="w-64 bg-slate-950/30 p-6 flex flex-col justify-end relative overflow-hidden group/card block cursor-pointer">
                          <img
                            src={item.dropdown.featured.image}
                            alt="Featured"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover/card:opacity-50 transition-opacity"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                          <div className="relative z-10 text-left">
                            <div className="text-xs font-bold text-blue-400 mb-2">FEATURED</div>
                            <div className="text-sm font-bold text-white mb-2 leading-tight">{item.dropdown.featured.title}</div>
                            <div className="text-xs text-slate-400 mb-4 line-clamp-2">{item.dropdown.featured.description}</div>
                            <div className="text-xs font-bold text-white flex items-center gap-1">Read Story <ArrowRight size={12} className="group-hover/card:translate-x-1 transition-transform" /></div>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-6 z-[1000]">
            <Link to="/contact" className="hidden lg:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25">
              Start Transformation
            </Link>
          </div>

          {/* Mobile Menu Toggle Wrapper */}
          <div className="lg:hidden relative z-[1001]">
            <button
              className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus:outline-none focus:ring-2 focus:ring-blue-500/50
                ${isMobileMenuOpen
                  ? 'bg-blue-600 border-transparent text-white rotate-90 shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-md'
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative z-10 w-6 h-6 flex flex-col justify-center items-center gap-[5px]">
                {/* Top Bar */}
                <span
                  className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 ease-in-out transform origin-center
                    ${isMobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : 'group-hover:w-4 group-hover:translate-x-1'}`}
                />

                {/* Middle Bar */}
                <span
                  className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}
                />

                {/* Bottom Bar */}
                <span
                  className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 ease-in-out transform origin-center
                    ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : 'group-hover:w-4 group-hover:translate-x-1'}`}
                />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-0 bg-slate-950/98 z-[999] lg:hidden overflow-y-auto pt-24 pb-8 px-4 animate-in fade-in slide-in-from-bottom-10 duration-200 backdrop-blur-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="space-y-2">
              {navItems.map(item => (
                <div key={item.name} className="border-b border-slate-900 pb-4 mb-4">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">{item.name}</div>
                  <div className="space-y-3">
                    {(item.dropdown.links || item.dropdown.columns?.flatMap(c => c.links)).map(link => (
                      <Link key={link.name} to={link.href} className="flex items-center justify-between text-lg font-medium text-slate-200 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                        {link.name} <ArrowRight size={16} className="text-slate-600" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link to="/contact" className="mt-8 flex w-full justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-900/20" onClick={() => setIsMobileMenuOpen(false)}>
                Schedule Consultation
              </Link>
            </div>

            {/* Spacer for scroll indicator visibility */}
            <div className="h-16"></div>
          </div>

          {/* Fixed Scroll Indicator */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1002] flex flex-col items-center gap-1 animate-bounce pointer-events-none lg:hidden">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Scroll</span>
            <div className="w-8 h-8 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center shadow-lg">
              <ChevronDown size={18} className="text-blue-400" />
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;