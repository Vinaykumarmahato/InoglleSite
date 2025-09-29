/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

const Logo = ({ className = 'h-8' }) => (
  <a href="#" className={`flex items-center font-bold text-white ${className}`} aria-label="Inoglle Home">
    <img 
  src="/images/logo.png"
      alt="Inoglle Logo"
      className="h-full w-auto mr-2"
    />
  </a>
);

export default Logo;