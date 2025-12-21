import { UnitCategory } from '../types';

export const forceCategory: UnitCategory = {
  id: 'force',
  name: 'Force',
  description: 'Convert between different units of force',
  icon: 'ArrowRight',
  baseUnit: 'newton',
  units: [
    { id: 'newton', name: 'Newton', symbol: 'N', toBase: 1, fromBase: 1 },
    { id: 'kilonewton', name: 'Kilonewton', symbol: 'kN', toBase: 1000, fromBase: 0.001 },
    { id: 'meganewton', name: 'Meganewton', symbol: 'MN', toBase: 1000000, fromBase: 0.000001 },
    { id: 'millinewton', name: 'Millinewton', symbol: 'mN', toBase: 0.001, fromBase: 1000 },
    { id: 'micronewton', name: 'Micronewton', symbol: 'μN', toBase: 0.000001, fromBase: 1000000 },
    { id: 'dyne', name: 'Dyne', symbol: 'dyn', toBase: 0.00001, fromBase: 100000 },
    { id: 'kilogram-force', name: 'Kilogram-force', symbol: 'kgf', toBase: 9.80665, fromBase: 1 / 9.80665 },
    { id: 'gram-force', name: 'Gram-force', symbol: 'gf', toBase: 0.00980665, fromBase: 1 / 0.00980665 },
    { id: 'ton-force', name: 'Metric Ton-force', symbol: 'tf', toBase: 9806.65, fromBase: 1 / 9806.65 },
    { id: 'pound-force', name: 'Pound-force', symbol: 'lbf', toBase: 4.4482216152605, fromBase: 1 / 4.4482216152605 },
    { id: 'kilopound-force', name: 'Kilopound-force', symbol: 'kip', toBase: 4448.2216152605, fromBase: 1 / 4448.2216152605 },
    { id: 'ounce-force', name: 'Ounce-force', symbol: 'ozf', toBase: 0.27801385095378, fromBase: 1 / 0.27801385095378 },
    { id: 'poundal', name: 'Poundal', symbol: 'pdl', toBase: 0.138254954376, fromBase: 1 / 0.138254954376 },
    { id: 'short-ton-force', name: 'Short Ton-force', symbol: 'ton-f (US)', toBase: 8896.443230521, fromBase: 1 / 8896.443230521 },
    { id: 'long-ton-force', name: 'Long Ton-force', symbol: 'ton-f (UK)', toBase: 9964.0164181707, fromBase: 1 / 9964.0164181707 },
    { id: 'sthene', name: 'Sthène', symbol: 'sn', toBase: 1000, fromBase: 0.001 },
    { id: 'kip', name: 'Kip', symbol: 'kip', toBase: 4448.2216, fromBase: 1 / 4448.2216 },
  ],
};
