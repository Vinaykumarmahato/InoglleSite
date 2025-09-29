/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { ChevronDown, Code, GitBranch, MessageSquare, Zap, Briefcase } from 'lucide-react';

const navItems = [
  {
    name: 'Services',
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
          ]
        }
      ],
      featured: {
        title: 'Featured Case Study: Digital Transformation',
        description: 'Learn how we helped a client increase efficiency by 40% through strategic system integration and custom software.',
        image: 'bg-slate-700'
      }
    }
  },
  {
    name: 'Careers',
    dropdown: {
      type: 'simple',
      links: [
        { name: 'Why Join Inoglle', description: 'Become part of an innovative and nurturing team.' },
        { name: 'Job Openings', description: 'Explore current opportunities to join our team.' },
        { name: 'Internships', description: 'Kickstart your IT career with our hands-on internship programs.' },
      ]
    }
  },
  {
    name: 'About Us',
    dropdown: {
      type: 'simple',
      links: [
        { name: 'Our Story' },
        { name: 'Blog' },
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

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-[#060814]/80 backdrop-blur-md z-50 border-b border-slate-800">
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
          <div className="flex items-center gap-4">
            <a href="#" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
              Get Started
            </a>
            <a href="#" className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-white text-sm font-semibold">
              Login <ChevronDown size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;