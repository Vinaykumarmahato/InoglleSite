/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

const Logo = ({ className = 'h-8' }) => (
  <div className={`${className}`} aria-label="Inoglle Home">
    <img
      src="/images/logo.png"
      alt="Inoglle Logo"
      className="h-full w-auto object-contain"
    />
  </div>
);

export default Logo;