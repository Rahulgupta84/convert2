import { UnitCategory } from '../types';

export const areaCategory: UnitCategory = {
  id: 'area',
  name: 'Area',
  description: 'Convert between different units of area',
  icon: 'Square',
  baseUnit: 'square-meter',
  units: [
    { id: 'square-meter', name: 'Square Meter', symbol: 'm²', toBase: 1, fromBase: 1 },
    { id: 'square-kilometer', name: 'Square Kilometer', symbol: 'km²', toBase: 1000000, fromBase: 0.000001 },
    { id: 'square-centimeter', name: 'Square Centimeter', symbol: 'cm²', toBase: 0.0001, fromBase: 10000 },
    { id: 'square-millimeter', name: 'Square Millimeter', symbol: 'mm²', toBase: 0.000001, fromBase: 1000000 },
    { id: 'hectare', name: 'Hectare', symbol: 'ha', toBase: 10000, fromBase: 0.0001 },
    { id: 'acre', name: 'Acre', symbol: 'ac', toBase: 4046.8564224, fromBase: 1 / 4046.8564224 },
    { id: 'square-mile', name: 'Square Mile', symbol: 'mi²', toBase: 2589988.110336, fromBase: 1 / 2589988.110336 },
    { id: 'square-yard', name: 'Square Yard', symbol: 'yd²', toBase: 0.83612736, fromBase: 1 / 0.83612736 },
    { id: 'square-foot', name: 'Square Foot', symbol: 'ft²', toBase: 0.09290304, fromBase: 1 / 0.09290304 },
    { id: 'square-inch', name: 'Square Inch', symbol: 'in²', toBase: 0.00064516, fromBase: 1 / 0.00064516 },
    { id: 'are', name: 'Are', symbol: 'a', toBase: 100, fromBase: 0.01 },
    { id: 'barn', name: 'Barn', symbol: 'b', toBase: 1e-28, fromBase: 1e28 },
    { id: 'circular-mil', name: 'Circular Mil', symbol: 'cmil', toBase: 5.067074790975e-10, fromBase: 1 / 5.067074790975e-10 },
    { id: 'square-rod', name: 'Square Rod', symbol: 'sq rd', toBase: 25.29285264, fromBase: 1 / 25.29285264 },
    { id: 'rood', name: 'Rood', symbol: 'rood', toBase: 1011.7141056, fromBase: 1 / 1011.7141056 },
    { id: 'township', name: 'Township', symbol: 'twp', toBase: 93239571.972, fromBase: 1 / 93239571.972 },
    { id: 'homestead', name: 'Homestead', symbol: 'homestead', toBase: 647497.027584, fromBase: 1 / 647497.027584 },
  ],
};
