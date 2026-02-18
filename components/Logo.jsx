/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

const Logo = ({ className = 'h-8' }) => (
  <div className={`flex items-center gap-2 font-bold text-white tracking-tight ${className}`} aria-label="Inoglle Home">
    <div className="relative w-8 h-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg rotate-3 group-hover:rotate-6 transition-transform"></div>
      <div className="absolute inset-0 bg-slate-950 rounded-lg m-[2px]"></div>
      <div className="relative w-4 h-4 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-sm"></div>
    </div>
    <span className="text-xl font-heading font-extrabold tracking-tight">Inoglle</span>
  </div>
);

export default Logo;