import { UnitCategory } from '../types';

export const torqueCategory: UnitCategory = {
  id: 'torque',
  name: 'Torque',
  description: 'Convert between different units of torque',
  icon: 'RotateCw',
  baseUnit: 'newton-meter',
  units: [
    { id: 'newton-meter', name: 'Newton Meter', symbol: 'N·m', toBase: 1, fromBase: 1 },
    { id: 'newton-centimeter', name: 'Newton Centimeter', symbol: 'N·cm', toBase: 0.01, fromBase: 100 },
    { id: 'newton-millimeter', name: 'Newton Millimeter', symbol: 'N·mm', toBase: 0.001, fromBase: 1000 },
    { id: 'kilonewton-meter', name: 'Kilonewton Meter', symbol: 'kN·m', toBase: 1000, fromBase: 0.001 },
    { id: 'meganewton-meter', name: 'Meganewton Meter', symbol: 'MN·m', toBase: 1000000, fromBase: 0.000001 },
    { id: 'dyne-centimeter', name: 'Dyne Centimeter', symbol: 'dyn·cm', toBase: 1e-7, fromBase: 1e7 },
    { id: 'kilogram-force-meter', name: 'Kilogram-force Meter', symbol: 'kgf·m', toBase: 9.80665, fromBase: 1 / 9.80665 },
    { id: 'kilogram-force-centimeter', name: 'Kilogram-force Centimeter', symbol: 'kgf·cm', toBase: 0.0980665, fromBase: 1 / 0.0980665 },
    { id: 'gram-force-centimeter', name: 'Gram-force Centimeter', symbol: 'gf·cm', toBase: 0.0000980665, fromBase: 1 / 0.0000980665 },
    { id: 'pound-force-foot', name: 'Pound-force Foot', symbol: 'lbf·ft', toBase: 1.3558179483, fromBase: 1 / 1.3558179483 },
    { id: 'pound-force-inch', name: 'Pound-force Inch', symbol: 'lbf·in', toBase: 0.112984829, fromBase: 1 / 0.112984829 },
    { id: 'ounce-force-foot', name: 'Ounce-force Foot', symbol: 'ozf·ft', toBase: 0.084738622, fromBase: 1 / 0.084738622 },
    { id: 'ounce-force-inch', name: 'Ounce-force Inch', symbol: 'ozf·in', toBase: 0.007061552, fromBase: 1 / 0.007061552 },
  ],
};

export const momentOfInertiaCategory: UnitCategory = {
  id: 'moment-of-inertia',
  name: 'Moment of Inertia',
  description: 'Convert between different units of moment of inertia',
  icon: 'Circle',
  baseUnit: 'kilogram-square-meter',
  units: [
    { id: 'kilogram-square-meter', name: 'Kilogram Square Meter', symbol: 'kg·m²', toBase: 1, fromBase: 1 },
    { id: 'kilogram-square-centimeter', name: 'Kilogram Square Centimeter', symbol: 'kg·cm²', toBase: 0.0001, fromBase: 10000 },
    { id: 'kilogram-square-millimeter', name: 'Kilogram Square Millimeter', symbol: 'kg·mm²', toBase: 0.000001, fromBase: 1000000 },
    { id: 'gram-square-centimeter', name: 'Gram Square Centimeter', symbol: 'g·cm²', toBase: 1e-7, fromBase: 1e7 },
    { id: 'pound-square-foot', name: 'Pound Square Foot', symbol: 'lb·ft²', toBase: 0.042140110, fromBase: 1 / 0.042140110 },
    { id: 'pound-square-inch', name: 'Pound Square Inch', symbol: 'lb·in²', toBase: 0.000292640, fromBase: 1 / 0.000292640 },
    { id: 'ounce-square-inch', name: 'Ounce Square Inch', symbol: 'oz·in²', toBase: 0.0000182900, fromBase: 1 / 0.0000182900 },
    { id: 'slug-square-foot', name: 'Slug Square Foot', symbol: 'slug·ft²', toBase: 1.3558179483, fromBase: 1 / 1.3558179483 },
  ],
};
