import { useEffect, useRef, useState } from 'react';
import CELLS from 'vanta/dist/vanta.cells.min';
import * as THREE from 'three';

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        CELLS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x64FFDA, // Primary cyan color
          backgroundColor: 0x0A192F, // Dark navy background
          color1: 0x64FFDA,
          color2: 0x0A192F
        })
      );
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="fixed inset-0 w-full h-full">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background-light/60 dark:bg-background-dark/60 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default VantaBackground;