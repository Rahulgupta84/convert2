import { UnitCategory } from '../types';

export const fuelConsumptionCategory: UnitCategory = {
  id: 'fuel-consumption',
  name: 'Fuel Consumption',
  description: 'Convert between different units of fuel consumption',
  icon: 'Fuel',
  baseUnit: 'liter-per-100km',
  units: [
    { id: 'liter-per-100km', name: 'Liter per 100 km', symbol: 'L/100km', toBase: 1, fromBase: 1 },
    { id: 'mile-per-gallon-us', name: 'Mile per Gallon (US)', symbol: 'mpg (US)', toBase: (v: number) => 235.214583 / v, fromBase: (v: number) => 235.214583 / v },
    { id: 'mile-per-gallon-uk', name: 'Mile per Gallon (UK)', symbol: 'mpg (UK)', toBase: (v: number) => 282.48094 / v, fromBase: (v: number) => 282.48094 / v },
    { id: 'kilometer-per-liter', name: 'Kilometer per Liter', symbol: 'km/L', toBase: (v: number) => 100 / v, fromBase: (v: number) => 100 / v },
    { id: 'liter-per-10km', name: 'Liter per 10 km', symbol: 'L/10km', toBase: 10, fromBase: 0.1 },
    { id: 'mile-per-liter', name: 'Mile per Liter', symbol: 'mi/L', toBase: (v: number) => 62.1371192 / v, fromBase: (v: number) => 62.1371192 / v },
    { id: 'gallon-per-100-mile-us', name: 'Gallon per 100 Mile (US)', symbol: 'gal/100mi (US)', toBase: (v: number) => v * 2.352145833, fromBase: (v: number) => v / 2.352145833 },
    { id: 'gallon-per-100-mile-uk', name: 'Gallon per 100 Mile (UK)', symbol: 'gal/100mi (UK)', toBase: (v: number) => v * 2.8248094, fromBase: (v: number) => v / 2.8248094 },
  ],
};
