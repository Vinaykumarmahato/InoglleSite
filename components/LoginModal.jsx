/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, initialTab = 'client' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [view, setView] = useState('login'); // 'login', 'register', 'forgotPassword', 'confirmation'
  const [resetEmail, setResetEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);
  
  // Reset internal state when modal opens
  useEffect(() => {
    if (isOpen) {
      setView('login');
      setResetEmail('');
      setIsLoading(false);
    }
  }, [isOpen]);

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
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    // Simulate API call
    setTimeout(() => {
        setIsLoading(false);
        if (view === 'forgotPassword') {
            setResetEmail(email);
            setView('confirmation');
        } else {
            // For login/register, you would handle success/error from the API
            // For this demo, we'll just close the modal on success.
            console.log('Simulating successful submission for', view);
            onClose(); 
        }
    }, 1500);
  };


  if (!isOpen) return null;

  const tabButtonClasses = (tabName) => 
    `w-1/2 py-3 text-sm font-bold text-center border-b-2 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-t-sm ${
      activeTab === tabName
        ? 'border-blue-500 text-white'
        : 'border-slate-700 text-slate-400 hover:bg-slate-800'
    }`;
  
  const submitButtonClasses = "w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg mt-8 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed flex items-center justify-center";

  const renderContent = () => {
    switch (view) {
      case 'register':
        return (
          <>
            <h2 id="login-modal-title" className="text-2xl font-bold text-white text-center mb-1">
              Create Account
            </h2>
            <p className="text-slate-400 text-center text-sm mb-8">
              Create a new {activeTab === 'client' ? 'Client' : 'Talent'} account to get started.
            </p>

            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                 <div>
                  <label htmlFor="register-name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="register-name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="register-email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="register-email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="register-password" className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                  <input
                    type="password"
                    id="register-password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <button type="submit" disabled={isLoading} className={submitButtonClasses}>
                {isLoading ? <span className="spinner" /> : 'Create Account'}
              </button>
            </form>

            <p className="text-center text-sm text-slate-400 mt-6">
              Already have an account?{' '}
              <button onClick={() => setView('login')} className="font-medium text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                Login
              </button>
            </p>
          </>
        );

      case 'forgotPassword':
        return (
          <>
            <h2 id="login-modal-title" className="text-2xl font-bold text-white text-center mb-1">
              Reset Password
            </h2>
            <p className="text-slate-400 text-center text-sm mb-8">
              Enter your email to receive a reset link.
            </p>

            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="reset-email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="reset-email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <button type="submit" disabled={isLoading} className={submitButtonClasses}>
                 {isLoading ? <span className="spinner" /> : 'Send Reset Link'}
              </button>
            </form>

            <p className="text-center text-sm text-slate-400 mt-6">
              Remembered your password?{' '}
              <button onClick={() => setView('login')} className="font-medium text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                Back to Login
              </button>
            </p>
          </>
        );

      case 'confirmation':
        return (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20 mb-4">
              <Mail size={24} className="text-blue-300" />
            </div>
            <h2 id="login-modal-title" className="text-2xl font-bold text-white text-center mb-2">
              Check your inbox
            </h2>
            <p className="text-slate-400 text-center text-sm mb-8 leading-relaxed">
              If an account exists for <br />
              <span className="font-medium text-slate-200">{resetEmail}</span>,
              <br /> you will receive password reset instructions.
            </p>
            <button
              onClick={() => setView('login')}
              className="w-full bg-slate-700 text-white font-semibold py-2.5 rounded-lg hover:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500"
            >
              Back to Login
            </button>
          </div>
        );

      case 'login':
      default:
        return (
          <>
            <h2 id="login-modal-title" className="text-2xl font-bold text-white text-center mb-1">
              Welcome Back
            </h2>
            <p className="text-slate-400 text-center text-sm mb-8">
              Login as a {activeTab === 'client' ? 'Client' : 'Talent'} to continue.
            </p>

            <form onSubmit={handleFormSubmit}>
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
                    <button type="button" onClick={() => setView('forgotPassword')} className="text-xs text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Forgot password?</button>
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

              <button type="submit" disabled={isLoading} className={submitButtonClasses}>
                {isLoading ? <span className="spinner" /> : 'Login'}
              </button>
            </form>

            <p className="text-center text-sm text-slate-400 mt-6">
              Don't have an account?{' '}
              <button onClick={() => setView('register')} className="font-medium text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                Sign up
              </button>
            </p>
          </>
        );
    }
  };


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
        
        {view === 'login' && (
          <div className="flex border-b border-slate-700">
            <button onClick={() => setActiveTab('client')} className={tabButtonClasses('client')}>
              For Clients
            </button>
            <button onClick={() => setActiveTab('talent')} className={tabButtonClasses('talent')}>
              For Talent
            </button>
          </div>
        )}

        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
