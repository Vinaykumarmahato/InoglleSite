import React, { useEffect, useRef } from 'react';

const VantaGlobeBackground = ({ position = 'center', size = 'full', color = 0x1a202c, color2 = 0xffffff, backgroundColor = 0x000000, style = {} }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && window.VANTA && window.VANTA.GLOBE && vantaRef.current && window.THREE) {
      vantaEffect.current = window.VANTA.GLOBE({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color,
        color2,
        backgroundColor,
        size: 1.0
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [color, color2, backgroundColor]);

  // Positioning presets
  let positionStyle = {};
  if (size === 'full') {
    positionStyle = { position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: -10 };
  } else if (position === 'left') {
    positionStyle = { position: 'absolute', left: 0, top: '20%', width: '40%', height: '60%', zIndex: -10 };
  } else if (position === 'right') {
    positionStyle = { position: 'absolute', right: 0, top: '20%', width: '40%', height: '60%', zIndex: -10 };
  } else if (position === 'top-right') {
    positionStyle = { position: 'absolute', right: '10%', top: 0, width: '30%', height: '50%', zIndex: -10 };
  } else if (position === 'bottom-left') {
    positionStyle = { position: 'absolute', left: '10%', bottom: 0, width: '30%', height: '50%', zIndex: -10 };
  } else if (position === 'center') {
    positionStyle = { position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '60%', zIndex: -10 };
  }

  return <div ref={vantaRef} style={{ ...positionStyle, ...style }} />;
};

export default VantaGlobeBackground;
