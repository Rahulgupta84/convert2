import { UnitCategory } from '../types';

export const soundCategory: UnitCategory = {
  id: 'sound',
  name: 'Sound Level',
  description: 'Convert between different units of sound level and intensity',
  icon: 'Volume2',
  baseUnit: 'bel',
  units: [
    { id: 'bel', name: 'Bel', symbol: 'B', toBase: 1, fromBase: 1 },
    { id: 'decibel', name: 'Decibel', symbol: 'dB', toBase: 0.1, fromBase: 10 },
    { id: 'neper', name: 'Neper', symbol: 'Np', toBase: 0.8686, fromBase: 1 / 0.8686 },
  ],
};

export const soundIntensityCategory: UnitCategory = {
  id: 'sound-intensity',
  name: 'Sound Intensity',
  description: 'Convert between different units of sound intensity',
  icon: 'Speaker',
  baseUnit: 'watt-per-square-meter',
  units: [
    { id: 'watt-per-square-meter', name: 'Watt per Square Meter', symbol: 'W/m²', toBase: 1, fromBase: 1 },
    { id: 'watt-per-square-centimeter', name: 'Watt per Square Centimeter', symbol: 'W/cm²', toBase: 10000, fromBase: 0.0001 },
    { id: 'watt-per-square-inch', name: 'Watt per Square Inch', symbol: 'W/in²', toBase: 1550.0031, fromBase: 1 / 1550.0031 },
    { id: 'picowatt-per-square-meter', name: 'Picowatt per Square Meter', symbol: 'pW/m²', toBase: 1e-12, fromBase: 1e12 },
  ],
};
