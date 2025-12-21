import { UnitCategory } from '../types';

export const chargeCategory: UnitCategory = {
  id: 'charge',
  name: 'Electric Charge',
  description: 'Convert between different units of electric charge',
  icon: 'Zap',
  baseUnit: 'coulomb',
  units: [
    { id: 'coulomb', name: 'Coulomb', symbol: 'C', toBase: 1, fromBase: 1 },
    { id: 'millicoulomb', name: 'Millicoulomb', symbol: 'mC', toBase: 0.001, fromBase: 1000 },
    { id: 'microcoulomb', name: 'Microcoulomb', symbol: 'μC', toBase: 0.000001, fromBase: 1000000 },
    { id: 'nanocoulomb', name: 'Nanocoulomb', symbol: 'nC', toBase: 1e-9, fromBase: 1e9 },
    { id: 'picocoulomb', name: 'Picocoulomb', symbol: 'pC', toBase: 1e-12, fromBase: 1e12 },
    { id: 'ampere-hour', name: 'Ampere Hour', symbol: 'Ah', toBase: 3600, fromBase: 1 / 3600 },
    { id: 'milliampere-hour', name: 'Milliampere Hour', symbol: 'mAh', toBase: 3.6, fromBase: 1 / 3.6 },
    { id: 'ampere-second', name: 'Ampere Second', symbol: 'As', toBase: 1, fromBase: 1 },
    { id: 'faraday', name: 'Faraday', symbol: 'F', toBase: 96485.3321, fromBase: 1 / 96485.3321 },
    { id: 'elementary-charge', name: 'Elementary Charge', symbol: 'e', toBase: 1.602176634e-19, fromBase: 1 / 1.602176634e-19 },
    { id: 'statcoulomb', name: 'Statcoulomb', symbol: 'statC', toBase: 3.33564e-10, fromBase: 1 / 3.33564e-10 },
    { id: 'abcoulomb', name: 'Abcoulomb', symbol: 'abC', toBase: 10, fromBase: 0.1 },
    { id: 'franklin', name: 'Franklin', symbol: 'Fr', toBase: 3.33564e-10, fromBase: 1 / 3.33564e-10 },
  ],
};

export const currentCategory: UnitCategory = {
  id: 'current',
  name: 'Electric Current',
  description: 'Convert between different units of electric current',
  icon: 'Activity',
  baseUnit: 'ampere',
  units: [
    { id: 'ampere', name: 'Ampere', symbol: 'A', toBase: 1, fromBase: 1 },
    { id: 'milliampere', name: 'Milliampere', symbol: 'mA', toBase: 0.001, fromBase: 1000 },
    { id: 'microampere', name: 'Microampere', symbol: 'μA', toBase: 0.000001, fromBase: 1000000 },
    { id: 'nanoampere', name: 'Nanoampere', symbol: 'nA', toBase: 1e-9, fromBase: 1e9 },
    { id: 'picoampere', name: 'Picoampere', symbol: 'pA', toBase: 1e-12, fromBase: 1e12 },
    { id: 'kiloampere', name: 'Kiloampere', symbol: 'kA', toBase: 1000, fromBase: 0.001 },
    { id: 'megaampere', name: 'Megaampere', symbol: 'MA', toBase: 1000000, fromBase: 0.000001 },
    { id: 'abampere', name: 'Abampere (Biot)', symbol: 'abA', toBase: 10, fromBase: 0.1 },
    { id: 'statampere', name: 'Statampere', symbol: 'statA', toBase: 3.33564e-10, fromBase: 1 / 3.33564e-10 },
    { id: 'gilbert', name: 'Gilbert', symbol: 'Gi', toBase: 0.7957747, fromBase: 1 / 0.7957747 },
  ],
};

export const voltageCategory: UnitCategory = {
  id: 'voltage',
  name: 'Electric Potential (Voltage)',
  description: 'Convert between different units of electric potential',
  icon: 'Zap',
  baseUnit: 'volt',
  units: [
    { id: 'volt', name: 'Volt', symbol: 'V', toBase: 1, fromBase: 1 },
    { id: 'millivolt', name: 'Millivolt', symbol: 'mV', toBase: 0.001, fromBase: 1000 },
    { id: 'microvolt', name: 'Microvolt', symbol: 'μV', toBase: 0.000001, fromBase: 1000000 },
    { id: 'nanovolt', name: 'Nanovolt', symbol: 'nV', toBase: 1e-9, fromBase: 1e9 },
    { id: 'kilovolt', name: 'Kilovolt', symbol: 'kV', toBase: 1000, fromBase: 0.001 },
    { id: 'megavolt', name: 'Megavolt', symbol: 'MV', toBase: 1000000, fromBase: 0.000001 },
    { id: 'abvolt', name: 'Abvolt', symbol: 'abV', toBase: 1e-8, fromBase: 1e8 },
    { id: 'statvolt', name: 'Statvolt', symbol: 'statV', toBase: 299.792458, fromBase: 1 / 299.792458 },
  ],
};

export const resistanceCategory: UnitCategory = {
  id: 'resistance',
  name: 'Electric Resistance',
  description: 'Convert between different units of electric resistance',
  icon: 'MinusCircle',
  baseUnit: 'ohm',
  units: [
    { id: 'ohm', name: 'Ohm', symbol: 'Ω', toBase: 1, fromBase: 1 },
    { id: 'milliohm', name: 'Milliohm', symbol: 'mΩ', toBase: 0.001, fromBase: 1000 },
    { id: 'microohm', name: 'Microohm', symbol: 'μΩ', toBase: 0.000001, fromBase: 1000000 },
    { id: 'kiloohm', name: 'Kiloohm', symbol: 'kΩ', toBase: 1000, fromBase: 0.001 },
    { id: 'megaohm', name: 'Megaohm', symbol: 'MΩ', toBase: 1000000, fromBase: 0.000001 },
    { id: 'gigaohm', name: 'Gigaohm', symbol: 'GΩ', toBase: 1e9, fromBase: 1e-9 },
    { id: 'abohm', name: 'Abohm', symbol: 'abΩ', toBase: 1e-9, fromBase: 1e9 },
    { id: 'statohm', name: 'Statohm', symbol: 'statΩ', toBase: 8.987552e11, fromBase: 1 / 8.987552e11 },
    { id: 'volt-per-ampere', name: 'Volt per Ampere', symbol: 'V/A', toBase: 1, fromBase: 1 },
  ],
};

export const conductanceCategory: UnitCategory = {
  id: 'conductance',
  name: 'Electric Conductance',
  description: 'Convert between different units of electric conductance',
  icon: 'Cable',
  baseUnit: 'siemens',
  units: [
    { id: 'siemens', name: 'Siemens', symbol: 'S', toBase: 1, fromBase: 1 },
    { id: 'millisiemens', name: 'Millisiemens', symbol: 'mS', toBase: 0.001, fromBase: 1000 },
    { id: 'microsiemens', name: 'Microsiemens', symbol: 'μS', toBase: 0.000001, fromBase: 1000000 },
    { id: 'kilosiemens', name: 'Kilosiemens', symbol: 'kS', toBase: 1000, fromBase: 0.001 },
    { id: 'mho', name: 'Mho', symbol: '℧', toBase: 1, fromBase: 1 },
    { id: 'micromho', name: 'Micromho', symbol: 'μ℧', toBase: 0.000001, fromBase: 1000000 },
    { id: 'abmho', name: 'Abmho', symbol: 'abmho', toBase: 1e9, fromBase: 1e-9 },
    { id: 'statmho', name: 'Statmho', symbol: 'statmho', toBase: 1.11265e-12, fromBase: 1 / 1.11265e-12 },
  ],
};

export const capacitanceCategory: UnitCategory = {
  id: 'capacitance',
  name: 'Electrostatic Capacitance',
  description: 'Convert between different units of capacitance',
  icon: 'Battery',
  baseUnit: 'farad',
  units: [
    { id: 'farad', name: 'Farad', symbol: 'F', toBase: 1, fromBase: 1 },
    { id: 'millifarad', name: 'Millifarad', symbol: 'mF', toBase: 0.001, fromBase: 1000 },
    { id: 'microfarad', name: 'Microfarad', symbol: 'μF', toBase: 0.000001, fromBase: 1000000 },
    { id: 'nanofarad', name: 'Nanofarad', symbol: 'nF', toBase: 1e-9, fromBase: 1e9 },
    { id: 'picofarad', name: 'Picofarad', symbol: 'pF', toBase: 1e-12, fromBase: 1e12 },
    { id: 'kilofarad', name: 'Kilofarad', symbol: 'kF', toBase: 1000, fromBase: 0.001 },
    { id: 'abfarad', name: 'Abfarad', symbol: 'abF', toBase: 1e9, fromBase: 1e-9 },
    { id: 'statfarad', name: 'Statfarad', symbol: 'statF', toBase: 1.11265e-12, fromBase: 1 / 1.11265e-12 },
  ],
};

export const inductanceCategory: UnitCategory = {
  id: 'inductance',
  name: 'Inductance',
  description: 'Convert between different units of inductance',
  icon: 'Coil',
  baseUnit: 'henry',
  units: [
    { id: 'henry', name: 'Henry', symbol: 'H', toBase: 1, fromBase: 1 },
    { id: 'millihenry', name: 'Millihenry', symbol: 'mH', toBase: 0.001, fromBase: 1000 },
    { id: 'microhenry', name: 'Microhenry', symbol: 'μH', toBase: 0.000001, fromBase: 1000000 },
    { id: 'nanohenry', name: 'Nanohenry', symbol: 'nH', toBase: 1e-9, fromBase: 1e9 },
    { id: 'picohenry', name: 'Picohenry', symbol: 'pH', toBase: 1e-12, fromBase: 1e12 },
    { id: 'kilohenry', name: 'Kilohenry', symbol: 'kH', toBase: 1000, fromBase: 0.001 },
    { id: 'megahenry', name: 'Megahenry', symbol: 'MH', toBase: 1000000, fromBase: 0.000001 },
    { id: 'abhenry', name: 'Abhenry', symbol: 'abH', toBase: 1e-9, fromBase: 1e9 },
    { id: 'stathenry', name: 'Stathenry', symbol: 'statH', toBase: 8.987552e11, fromBase: 1 / 8.987552e11 },
    { id: 'weber-per-ampere', name: 'Weber per Ampere', symbol: 'Wb/A', toBase: 1, fromBase: 1 },
  ],
};
