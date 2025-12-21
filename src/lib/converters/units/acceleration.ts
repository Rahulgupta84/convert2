import { UnitCategory } from '../types';

export const accelerationCategory: UnitCategory = {
  id: 'acceleration',
  name: 'Acceleration',
  description: 'Convert between different units of acceleration',
  icon: 'TrendingUp',
  baseUnit: 'meter-per-second-squared',
  units: [
    { id: 'meter-per-second-squared', name: 'Meter per Second Squared', symbol: 'm/s²', toBase: 1, fromBase: 1 },
    { id: 'kilometer-per-second-squared', name: 'Kilometer per Second Squared', symbol: 'km/s²', toBase: 1000, fromBase: 0.001 },
    { id: 'centimeter-per-second-squared', name: 'Centimeter per Second Squared', symbol: 'cm/s²', toBase: 0.01, fromBase: 100 },
    { id: 'millimeter-per-second-squared', name: 'Millimeter per Second Squared', symbol: 'mm/s²', toBase: 0.001, fromBase: 1000 },
    { id: 'foot-per-second-squared', name: 'Foot per Second Squared', symbol: 'ft/s²', toBase: 0.3048, fromBase: 1 / 0.3048 },
    { id: 'inch-per-second-squared', name: 'Inch per Second Squared', symbol: 'in/s²', toBase: 0.0254, fromBase: 1 / 0.0254 },
    { id: 'standard-gravity', name: 'Standard Gravity', symbol: 'g', toBase: 9.80665, fromBase: 1 / 9.80665 },
    { id: 'galileo', name: 'Galileo (Gal)', symbol: 'Gal', toBase: 0.01, fromBase: 100 },
    { id: 'milligalileo', name: 'Milligalileo', symbol: 'mGal', toBase: 0.00001, fromBase: 100000 },
    { id: 'kilometer-per-hour-squared', name: 'Kilometer per Hour Squared', symbol: 'km/h²', toBase: 1 / 12960, fromBase: 12960 },
    { id: 'mile-per-hour-squared', name: 'Mile per Hour Squared', symbol: 'mi/h²', toBase: 0.000124178, fromBase: 1 / 0.000124178 },
    { id: 'knot-per-second', name: 'Knot per Second', symbol: 'kn/s', toBase: 0.514444, fromBase: 1 / 0.514444 },
  ],
};

export const accelerationAngularCategory: UnitCategory = {
  id: 'acceleration-angular',
  name: 'Angular Acceleration',
  description: 'Convert between different units of angular acceleration',
  icon: 'RotateCcw',
  baseUnit: 'radian-per-second-squared',
  units: [
    { id: 'radian-per-second-squared', name: 'Radian per Second Squared', symbol: 'rad/s²', toBase: 1, fromBase: 1 },
    { id: 'degree-per-second-squared', name: 'Degree per Second Squared', symbol: '°/s²', toBase: Math.PI / 180, fromBase: 180 / Math.PI },
    { id: 'revolution-per-second-squared', name: 'Revolution per Second Squared', symbol: 'rev/s²', toBase: 2 * Math.PI, fromBase: 1 / (2 * Math.PI) },
    { id: 'revolution-per-minute-squared', name: 'Revolution per Minute Squared', symbol: 'rev/min²', toBase: Math.PI / 1800, fromBase: 1800 / Math.PI },
    { id: 'radian-per-minute-squared', name: 'Radian per Minute Squared', symbol: 'rad/min²', toBase: 1 / 3600, fromBase: 3600 },
  ],
};
