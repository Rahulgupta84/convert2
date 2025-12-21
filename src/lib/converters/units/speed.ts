import { UnitCategory } from '../types';

export const speedCategory: UnitCategory = {
  id: 'speed',
  name: 'Speed',
  description: 'Convert between different units of speed and velocity',
  icon: 'Gauge',
  baseUnit: 'meter-per-second',
  units: [
    { id: 'meter-per-second', name: 'Meter per Second', symbol: 'm/s', toBase: 1, fromBase: 1 },
    { id: 'kilometer-per-hour', name: 'Kilometer per Hour', symbol: 'km/h', toBase: 1 / 3.6, fromBase: 3.6 },
    { id: 'mile-per-hour', name: 'Mile per Hour', symbol: 'mph', toBase: 0.44704, fromBase: 1 / 0.44704 },
    { id: 'foot-per-second', name: 'Foot per Second', symbol: 'ft/s', toBase: 0.3048, fromBase: 1 / 0.3048 },
    { id: 'knot', name: 'Knot', symbol: 'kn', toBase: 0.514444444, fromBase: 1 / 0.514444444 },
    { id: 'mach', name: 'Mach (at sea level)', symbol: 'M', toBase: 340.29, fromBase: 1 / 340.29 },
    { id: 'speed-of-light', name: 'Speed of Light', symbol: 'c', toBase: 299792458, fromBase: 1 / 299792458 },
    { id: 'kilometer-per-second', name: 'Kilometer per Second', symbol: 'km/s', toBase: 1000, fromBase: 0.001 },
    { id: 'mile-per-second', name: 'Mile per Second', symbol: 'mi/s', toBase: 1609.344, fromBase: 1 / 1609.344 },
    { id: 'yard-per-second', name: 'Yard per Second', symbol: 'yd/s', toBase: 0.9144, fromBase: 1 / 0.9144 },
    { id: 'meter-per-minute', name: 'Meter per Minute', symbol: 'm/min', toBase: 1 / 60, fromBase: 60 },
    { id: 'centimeter-per-second', name: 'Centimeter per Second', symbol: 'cm/s', toBase: 0.01, fromBase: 100 },
    { id: 'millimeter-per-second', name: 'Millimeter per Second', symbol: 'mm/s', toBase: 0.001, fromBase: 1000 },
    { id: 'foot-per-minute', name: 'Foot per Minute', symbol: 'ft/min', toBase: 0.00508, fromBase: 1 / 0.00508 },
    { id: 'inch-per-second', name: 'Inch per Second', symbol: 'in/s', toBase: 0.0254, fromBase: 1 / 0.0254 },
    { id: 'kilometer-per-minute', name: 'Kilometer per Minute', symbol: 'km/min', toBase: 16.666666667, fromBase: 0.06 },
    { id: 'mile-per-minute', name: 'Mile per Minute', symbol: 'mi/min', toBase: 26.8224, fromBase: 1 / 26.8224 },
  ],
};
