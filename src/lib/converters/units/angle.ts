import { UnitCategory } from '../types';

export const angleCategory: UnitCategory = {
  id: 'angle',
  name: 'Angle',
  description: 'Convert between different units of angle',
  icon: 'TriangleRight',
  baseUnit: 'radian',
  units: [
    { id: 'radian', name: 'Radian', symbol: 'rad', toBase: 1, fromBase: 1 },
    { id: 'degree', name: 'Degree', symbol: '°', toBase: Math.PI / 180, fromBase: 180 / Math.PI },
    { id: 'gradian', name: 'Gradian (Gon)', symbol: 'grad', toBase: Math.PI / 200, fromBase: 200 / Math.PI },
    { id: 'arcminute', name: 'Arcminute', symbol: '′', toBase: Math.PI / 10800, fromBase: 10800 / Math.PI },
    { id: 'arcsecond', name: 'Arcsecond', symbol: '″', toBase: Math.PI / 648000, fromBase: 648000 / Math.PI },
    { id: 'milliradian', name: 'Milliradian', symbol: 'mrad', toBase: 0.001, fromBase: 1000 },
    { id: 'turn', name: 'Turn (Revolution)', symbol: 'tr', toBase: 2 * Math.PI, fromBase: 1 / (2 * Math.PI) },
    { id: 'quadrant', name: 'Quadrant', symbol: 'quad', toBase: Math.PI / 2, fromBase: 2 / Math.PI },
    { id: 'sextant', name: 'Sextant', symbol: 'sext', toBase: Math.PI / 3, fromBase: 3 / Math.PI },
    { id: 'octant', name: 'Octant', symbol: 'oct', toBase: Math.PI / 4, fromBase: 4 / Math.PI },
    { id: 'sign', name: 'Sign', symbol: 'sign', toBase: Math.PI / 6, fromBase: 6 / Math.PI },
    { id: 'mil-nato', name: 'Mil (NATO)', symbol: 'mil', toBase: Math.PI / 3200, fromBase: 3200 / Math.PI },
    { id: 'mil-ussr', name: 'Mil (USSR)', symbol: 'mil (USSR)', toBase: Math.PI / 3000, fromBase: 3000 / Math.PI },
    { id: 'binary-degree', name: 'Binary Degree', symbol: 'brad', toBase: Math.PI / 128, fromBase: 128 / Math.PI },
    { id: 'centesimal-minute', name: 'Centesimal Minute', symbol: 'c′', toBase: Math.PI / 20000, fromBase: 20000 / Math.PI },
    { id: 'centesimal-second', name: 'Centesimal Second', symbol: 'c″', toBase: Math.PI / 2000000, fromBase: 2000000 / Math.PI },
  ],
};
