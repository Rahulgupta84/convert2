import { UnitCategory } from '../types';

export const densityCategory: UnitCategory = {
  id: 'density',
  name: 'Density',
  description: 'Convert between different units of density',
  icon: 'Layers',
  baseUnit: 'kilogram-per-cubic-meter',
  units: [
    { id: 'kilogram-per-cubic-meter', name: 'Kilogram per Cubic Meter', symbol: 'kg/m³', toBase: 1, fromBase: 1 },
    { id: 'gram-per-cubic-centimeter', name: 'Gram per Cubic Centimeter', symbol: 'g/cm³', toBase: 1000, fromBase: 0.001 },
    { id: 'gram-per-milliliter', name: 'Gram per Milliliter', symbol: 'g/mL', toBase: 1000, fromBase: 0.001 },
    { id: 'kilogram-per-liter', name: 'Kilogram per Liter', symbol: 'kg/L', toBase: 1000, fromBase: 0.001 },
    { id: 'gram-per-liter', name: 'Gram per Liter', symbol: 'g/L', toBase: 1, fromBase: 1 },
    { id: 'milligram-per-liter', name: 'Milligram per Liter', symbol: 'mg/L', toBase: 0.001, fromBase: 1000 },
    { id: 'pound-per-cubic-foot', name: 'Pound per Cubic Foot', symbol: 'lb/ft³', toBase: 16.01846337, fromBase: 1 / 16.01846337 },
    { id: 'pound-per-cubic-inch', name: 'Pound per Cubic Inch', symbol: 'lb/in³', toBase: 27679.9047, fromBase: 1 / 27679.9047 },
    { id: 'pound-per-gallon-us', name: 'Pound per Gallon (US)', symbol: 'lb/gal (US)', toBase: 119.826427, fromBase: 1 / 119.826427 },
    { id: 'pound-per-gallon-uk', name: 'Pound per Gallon (UK)', symbol: 'lb/gal (UK)', toBase: 99.77637, fromBase: 1 / 99.77637 },
    { id: 'ounce-per-cubic-inch', name: 'Ounce per Cubic Inch', symbol: 'oz/in³', toBase: 1729.994, fromBase: 1 / 1729.994 },
    { id: 'ounce-per-gallon-us', name: 'Ounce per Gallon (US)', symbol: 'oz/gal (US)', toBase: 7.489152, fromBase: 1 / 7.489152 },
    { id: 'ton-per-cubic-meter', name: 'Metric Ton per Cubic Meter', symbol: 't/m³', toBase: 1000, fromBase: 0.001 },
    { id: 'slug-per-cubic-foot', name: 'Slug per Cubic Foot', symbol: 'slug/ft³', toBase: 515.3788, fromBase: 1 / 515.3788 },
  ],
};
