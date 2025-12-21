import { UnitCategory } from '../types';

export const viscosityDynamicCategory: UnitCategory = {
  id: 'viscosity-dynamic',
  name: 'Dynamic Viscosity',
  description: 'Convert between different units of dynamic viscosity',
  icon: 'Waves',
  baseUnit: 'pascal-second',
  units: [
    { id: 'pascal-second', name: 'Pascal Second', symbol: 'Pa·s', toBase: 1, fromBase: 1 },
    { id: 'poise', name: 'Poise', symbol: 'P', toBase: 0.1, fromBase: 10 },
    { id: 'centipoise', name: 'Centipoise', symbol: 'cP', toBase: 0.001, fromBase: 1000 },
    { id: 'millipascal-second', name: 'Millipascal Second', symbol: 'mPa·s', toBase: 0.001, fromBase: 1000 },
    { id: 'kilogram-per-meter-second', name: 'Kilogram per Meter Second', symbol: 'kg/(m·s)', toBase: 1, fromBase: 1 },
    { id: 'newton-second-per-square-meter', name: 'Newton Second per Square Meter', symbol: 'N·s/m²', toBase: 1, fromBase: 1 },
    { id: 'dyne-second-per-square-centimeter', name: 'Dyne Second per Square Centimeter', symbol: 'dyn·s/cm²', toBase: 0.1, fromBase: 10 },
    { id: 'pound-per-foot-second', name: 'Pound per Foot Second', symbol: 'lb/(ft·s)', toBase: 1.4881639, fromBase: 1 / 1.4881639 },
    { id: 'pound-per-foot-hour', name: 'Pound per Foot Hour', symbol: 'lb/(ft·h)', toBase: 0.000413379, fromBase: 1 / 0.000413379 },
    { id: 'pound-force-second-per-square-foot', name: 'Pound-force Second per Square Foot', symbol: 'lbf·s/ft²', toBase: 47.88026, fromBase: 1 / 47.88026 },
    { id: 'pound-force-second-per-square-inch', name: 'Pound-force Second per Square Inch', symbol: 'lbf·s/in²', toBase: 6894.757, fromBase: 1 / 6894.757 },
    { id: 'slug-per-foot-second', name: 'Slug per Foot Second', symbol: 'slug/(ft·s)', toBase: 47.88026, fromBase: 1 / 47.88026 },
  ],
};

export const viscosityKinematicCategory: UnitCategory = {
  id: 'viscosity-kinematic',
  name: 'Kinematic Viscosity',
  description: 'Convert between different units of kinematic viscosity',
  icon: 'Wind',
  baseUnit: 'square-meter-per-second',
  units: [
    { id: 'square-meter-per-second', name: 'Square Meter per Second', symbol: 'm²/s', toBase: 1, fromBase: 1 },
    { id: 'stokes', name: 'Stokes', symbol: 'St', toBase: 0.0001, fromBase: 10000 },
    { id: 'centistokes', name: 'Centistokes', symbol: 'cSt', toBase: 0.000001, fromBase: 1000000 },
    { id: 'square-centimeter-per-second', name: 'Square Centimeter per Second', symbol: 'cm²/s', toBase: 0.0001, fromBase: 10000 },
    { id: 'square-millimeter-per-second', name: 'Square Millimeter per Second', symbol: 'mm²/s', toBase: 0.000001, fromBase: 1000000 },
    { id: 'square-foot-per-second', name: 'Square Foot per Second', symbol: 'ft²/s', toBase: 0.09290304, fromBase: 1 / 0.09290304 },
    { id: 'square-foot-per-hour', name: 'Square Foot per Hour', symbol: 'ft²/h', toBase: 0.09290304 / 3600, fromBase: 3600 / 0.09290304 },
    { id: 'square-inch-per-second', name: 'Square Inch per Second', symbol: 'in²/s', toBase: 0.00064516, fromBase: 1 / 0.00064516 },
  ],
};
