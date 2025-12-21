import { UnitCategory } from '../types';

export const magneticFluxCategory: UnitCategory = {
  id: 'magnetic-flux',
  name: 'Magnetic Flux',
  description: 'Convert between different units of magnetic flux',
  icon: 'Magnet',
  baseUnit: 'weber',
  units: [
    { id: 'weber', name: 'Weber', symbol: 'Wb', toBase: 1, fromBase: 1 },
    { id: 'milliweber', name: 'Milliweber', symbol: 'mWb', toBase: 0.001, fromBase: 1000 },
    { id: 'microweber', name: 'Microweber', symbol: 'μWb', toBase: 0.000001, fromBase: 1000000 },
    { id: 'kiloweber', name: 'Kiloweber', symbol: 'kWb', toBase: 1000, fromBase: 0.001 },
    { id: 'maxwell', name: 'Maxwell', symbol: 'Mx', toBase: 1e-8, fromBase: 1e8 },
    { id: 'volt-second', name: 'Volt Second', symbol: 'V·s', toBase: 1, fromBase: 1 },
    { id: 'unit-pole', name: 'Unit Pole', symbol: 'unit pole', toBase: 1.2566e-7, fromBase: 1 / 1.2566e-7 },
    { id: 'tesla-square-meter', name: 'Tesla Square Meter', symbol: 'T·m²', toBase: 1, fromBase: 1 },
    { id: 'gauss-square-centimeter', name: 'Gauss Square Centimeter', symbol: 'G·cm²', toBase: 1e-8, fromBase: 1e8 },
  ],
};

export const magneticFluxDensityCategory: UnitCategory = {
  id: 'magnetic-flux-density',
  name: 'Magnetic Flux Density',
  description: 'Convert between different units of magnetic flux density',
  icon: 'Magnet',
  baseUnit: 'tesla',
  units: [
    { id: 'tesla', name: 'Tesla', symbol: 'T', toBase: 1, fromBase: 1 },
    { id: 'millitesla', name: 'Millitesla', symbol: 'mT', toBase: 0.001, fromBase: 1000 },
    { id: 'microtesla', name: 'Microtesla', symbol: 'μT', toBase: 0.000001, fromBase: 1000000 },
    { id: 'nanotesla', name: 'Nanotesla', symbol: 'nT', toBase: 1e-9, fromBase: 1e9 },
    { id: 'kilotesla', name: 'Kilotesla', symbol: 'kT', toBase: 1000, fromBase: 0.001 },
    { id: 'gauss', name: 'Gauss', symbol: 'G', toBase: 0.0001, fromBase: 10000 },
    { id: 'milligauss', name: 'Milligauss', symbol: 'mG', toBase: 1e-7, fromBase: 1e7 },
    { id: 'weber-per-square-meter', name: 'Weber per Square Meter', symbol: 'Wb/m²', toBase: 1, fromBase: 1 },
    { id: 'maxwell-per-square-centimeter', name: 'Maxwell per Square Centimeter', symbol: 'Mx/cm²', toBase: 0.0001, fromBase: 10000 },
    { id: 'gamma', name: 'Gamma', symbol: 'γ', toBase: 1e-9, fromBase: 1e9 },
    { id: 'line-per-square-centimeter', name: 'Line per Square Centimeter', symbol: 'line/cm²', toBase: 0.0001, fromBase: 10000 },
  ],
};

export const magneticFieldStrengthCategory: UnitCategory = {
  id: 'magnetic-field-strength',
  name: 'Magnetic Field Strength',
  description: 'Convert between different units of magnetic field strength',
  icon: 'Magnet',
  baseUnit: 'ampere-per-meter',
  units: [
    { id: 'ampere-per-meter', name: 'Ampere per Meter', symbol: 'A/m', toBase: 1, fromBase: 1 },
    { id: 'ampere-turn-per-meter', name: 'Ampere Turn per Meter', symbol: 'AT/m', toBase: 1, fromBase: 1 },
    { id: 'kiloampere-per-meter', name: 'Kiloampere per Meter', symbol: 'kA/m', toBase: 1000, fromBase: 0.001 },
    { id: 'oersted', name: 'Oersted', symbol: 'Oe', toBase: 79.5774715, fromBase: 1 / 79.5774715 },
    { id: 'gilbert-per-centimeter', name: 'Gilbert per Centimeter', symbol: 'Gi/cm', toBase: 79.5774715, fromBase: 1 / 79.5774715 },
    { id: 'ampere-turn-per-inch', name: 'Ampere Turn per Inch', symbol: 'AT/in', toBase: 39.3700787, fromBase: 1 / 39.3700787 },
  ],
};

export const magnetomotiveForceCategory: UnitCategory = {
  id: 'magnetomotive-force',
  name: 'Magnetomotive Force',
  description: 'Convert between different units of magnetomotive force',
  icon: 'Magnet',
  baseUnit: 'ampere-turn',
  units: [
    { id: 'ampere-turn', name: 'Ampere Turn', symbol: 'AT', toBase: 1, fromBase: 1 },
    { id: 'kiloampere-turn', name: 'Kiloampere Turn', symbol: 'kAT', toBase: 1000, fromBase: 0.001 },
    { id: 'milliampere-turn', name: 'Milliampere Turn', symbol: 'mAT', toBase: 0.001, fromBase: 1000 },
    { id: 'gilbert', name: 'Gilbert', symbol: 'Gi', toBase: 0.7957747, fromBase: 1 / 0.7957747 },
  ],
};
