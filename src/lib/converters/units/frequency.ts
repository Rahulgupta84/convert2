import { UnitCategory } from '../types';

export const frequencyCategory: UnitCategory = {
  id: 'frequency',
  name: 'Frequency',
  description: 'Convert between different units of frequency',
  icon: 'Activity',
  baseUnit: 'hertz',
  units: [
    { id: 'hertz', name: 'Hertz', symbol: 'Hz', toBase: 1, fromBase: 1 },
    { id: 'kilohertz', name: 'Kilohertz', symbol: 'kHz', toBase: 1000, fromBase: 0.001 },
    { id: 'megahertz', name: 'Megahertz', symbol: 'MHz', toBase: 1000000, fromBase: 0.000001 },
    { id: 'gigahertz', name: 'Gigahertz', symbol: 'GHz', toBase: 1e9, fromBase: 1e-9 },
    { id: 'terahertz', name: 'Terahertz', symbol: 'THz', toBase: 1e12, fromBase: 1e-12 },
    { id: 'millihertz', name: 'Millihertz', symbol: 'mHz', toBase: 0.001, fromBase: 1000 },
    { id: 'rpm', name: 'Revolutions per Minute', symbol: 'rpm', toBase: 1 / 60, fromBase: 60 },
    { id: 'rps', name: 'Revolutions per Second', symbol: 'rps', toBase: 1, fromBase: 1 },
    { id: 'rad-per-second', name: 'Radian per Second', symbol: 'rad/s', toBase: 1 / (2 * Math.PI), fromBase: 2 * Math.PI },
    { id: 'degree-per-second', name: 'Degree per Second', symbol: '°/s', toBase: 1 / 360, fromBase: 360 },
    { id: 'cycle-per-second', name: 'Cycle per Second', symbol: 'cps', toBase: 1, fromBase: 1 },
    { id: 'beat-per-minute', name: 'Beat per Minute', symbol: 'BPM', toBase: 1 / 60, fromBase: 60 },
    { id: 'frame-per-second', name: 'Frame per Second', symbol: 'fps', toBase: 1, fromBase: 1 },
  ],
};
