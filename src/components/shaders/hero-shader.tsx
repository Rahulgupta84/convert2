'use client';

import { LiquidMetal } from '@paper-design/shaders-react';

// Hero shader configuration - adjust these to customize the effect
const heroConfig = {
  // Very light theme colors - soft pastel purple
  colorBack: '#faf8ff',
  colorTint: '#c4b5fd',

  // Animation - slow and smooth
  speed: 0.1,

  // Effect parameters - extra soft and blurred
  shape: 'metaballs' as const,
  scale: 2.5,
  repetition: 2,
  softness: 1,
  distortion: 0.1,
  contour: 0.05,
  shiftRed: 0.03,
  shiftBlue: -0.03,
};

export function HeroShader() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <LiquidMetal
        {...heroConfig}
        style={{ width: '100%', height: '100%' }}
      />
      {/* Extra blur overlay for dreamy effect */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/20" />
    </div>
  );
}
