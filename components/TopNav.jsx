import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    name: 'Development',
    dropdown: [
      { name: 'Software Development', path: '/SoftwareDevelopment' },
      { name: 'System Integration', path: '/SystemIntegration' },
      { name: 'Digital Transformation', path: '/DigitalTransformation' },
    ]
  },
  {
    name: 'Consulting',
    dropdown: [
      { name: 'IT Consulting', path: '/ITConsulting' },
      { name: 'IT Infrastructure Planning', path: '/ITInfrastructurePlanning' },
      { name: 'Deploy AI Talent', path: '/DeployAITalent' },
    ]
  },
  {
    name: 'Resources',
    dropdown: [
      { name: 'Featured Resource: Fine-Tuning LLMs', path: '/FeaturedResourceLLMs' }
    ]
  }
];

const TopNav = () => (
  <header className="sticky top-0 w-full bg-[#060814]/90 backdrop-blur-md z-50 border-b border-slate-800">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <Link to="/" className="h-10">
        <img src="/images/logo.png" alt="Inoglle Logo" className="h-full w-auto object-contain" />
      </Link>
      <div className="flex items-center gap-8">
        {navLinks.map((item) => (
          <div key={item.name} className="group relative">
            <button className="text-slate-300 hover:text-white transition-colors py-2 px-3 font-semibold flex items-center gap-1">
              {item.name}
              <span className="ml-1">▼</span>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ul className="py-2">
                {item.dropdown.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="block px-4 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-800 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </nav>
  </header>
);

export default TopNav;
