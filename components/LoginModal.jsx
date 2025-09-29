/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, initialTab = 'client' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
        window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tabButtonClasses = (tabName) => 
    `w-1/2 py-3 text-sm font-bold text-center border-b-2 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-t-sm ${
      activeTab === tabName
        ? 'border-blue-500 text-white'
        : 'border-slate-700 text-slate-400 hover:bg-slate-800'
    }`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      aria-labelledby="login-modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-slate-700 rounded-lg shadow-2xl w-full max-w-sm m-4 relative transition-transform transform scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 p-1 text-slate-400 hover:text-white rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close login dialog"
        >
          <X size={20} />
        </button>

        <div className="flex border-b border-slate-700">
          <button onClick={() => setActiveTab('client')} className={tabButtonClasses('client')}>
            For Clients
          </button>
          <button onClick={() => setActiveTab('talent')} className={tabButtonClasses('talent')}>
            For Talent
          </button>
        </div>

        <div className="p-8">
          <h2 id="login-modal-title" className="text-2xl font-bold text-white text-center mb-1">
            Welcome Back
          </h2>
          <p className="text-slate-400 text-center text-sm mb-8">
            Login as a {activeTab === 'client' ? 'Client' : 'Talent'} to continue.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                  <a href="#" className="text-xs text-blue-400 hover:underline">Forgot password?</a>
                </div>
                <input 
                  type="password" 
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg mt-8 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-slate-400 mt-6">
            Don't have an account? <a href="#" className="font-medium text-blue-400 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
