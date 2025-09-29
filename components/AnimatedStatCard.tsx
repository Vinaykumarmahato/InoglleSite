/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// FIX: Provide default values for prefix and suffix to make them optional props.
const AnimatedStatCard = ({ end, prefix = '', suffix = '', label, duration = 3 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="text-left">
      <p className="text-5xl font-bold">
        {inView && <CountUp start={0} end={end} duration={duration} prefix={prefix} suffix={suffix} />}
        {!inView && <span>{prefix}{0}{suffix}</span>}
      </p>
      <p className="text-slate-400 mt-2">{label}</p>
    </div>
  );
};

export default AnimatedStatCard;