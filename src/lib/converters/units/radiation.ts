import { UnitCategory } from '../types';

export const radiationCategory: UnitCategory = {
  id: 'radiation',
  name: 'Radiation',
  description: 'Convert between different units of radiation dose equivalent',
  icon: 'AlertTriangle',
  baseUnit: 'sievert',
  units: [
    { id: 'sievert', name: 'Sievert', symbol: 'Sv', toBase: 1, fromBase: 1 },
    { id: 'millisievert', name: 'Millisievert', symbol: 'mSv', toBase: 0.001, fromBase: 1000 },
    { id: 'microsievert', name: 'Microsievert', symbol: 'μSv', toBase: 0.000001, fromBase: 1000000 },
    { id: 'rem', name: 'Rem', symbol: 'rem', toBase: 0.01, fromBase: 100 },
    { id: 'millirem', name: 'Millirem', symbol: 'mrem', toBase: 0.00001, fromBase: 100000 },
    { id: 'roentgen-equivalent-physical', name: 'Roentgen Equivalent Physical', symbol: 'rep', toBase: 0.0093, fromBase: 1 / 0.0093 },
    { id: 'joule-per-kilogram', name: 'Joule per Kilogram', symbol: 'J/kg', toBase: 1, fromBase: 1 },
  ],
};

export const radiationActivityCategory: UnitCategory = {
  id: 'radiation-activity',
  name: 'Radiation Activity',
  description: 'Convert between different units of radioactivity',
  icon: 'RadioTower',
  baseUnit: 'becquerel',
  units: [
    { id: 'becquerel', name: 'Becquerel', symbol: 'Bq', toBase: 1, fromBase: 1 },
    { id: 'kilobecquerel', name: 'Kilobecquerel', symbol: 'kBq', toBase: 1000, fromBase: 0.001 },
    { id: 'megabecquerel', name: 'Megabecquerel', symbol: 'MBq', toBase: 1000000, fromBase: 0.000001 },
    { id: 'gigabecquerel', name: 'Gigabecquerel', symbol: 'GBq', toBase: 1e9, fromBase: 1e-9 },
    { id: 'terabecquerel', name: 'Terabecquerel', symbol: 'TBq', toBase: 1e12, fromBase: 1e-12 },
    { id: 'curie', name: 'Curie', symbol: 'Ci', toBase: 3.7e10, fromBase: 1 / 3.7e10 },
    { id: 'millicurie', name: 'Millicurie', symbol: 'mCi', toBase: 3.7e7, fromBase: 1 / 3.7e7 },
    { id: 'microcurie', name: 'Microcurie', symbol: 'μCi', toBase: 37000, fromBase: 1 / 37000 },
    { id: 'nanocurie', name: 'Nanocurie', symbol: 'nCi', toBase: 37, fromBase: 1 / 37 },
    { id: 'picocurie', name: 'Picocurie', symbol: 'pCi', toBase: 0.037, fromBase: 1 / 0.037 },
    { id: 'rutherford', name: 'Rutherford', symbol: 'Rd', toBase: 1000000, fromBase: 0.000001 },
    { id: 'disintegrations-per-second', name: 'Disintegrations per Second', symbol: 'dps', toBase: 1, fromBase: 1 },
    { id: 'disintegrations-per-minute', name: 'Disintegrations per Minute', symbol: 'dpm', toBase: 1 / 60, fromBase: 60 },
  ],
};

export const radiationExposureCategory: UnitCategory = {
  id: 'radiation-exposure',
  name: 'Radiation Exposure',
  description: 'Convert between different units of radiation exposure',
  icon: 'Radio',
  baseUnit: 'coulomb-per-kilogram',
  units: [
    { id: 'coulomb-per-kilogram', name: 'Coulomb per Kilogram', symbol: 'C/kg', toBase: 1, fromBase: 1 },
    { id: 'millicoulomb-per-kilogram', name: 'Millicoulomb per Kilogram', symbol: 'mC/kg', toBase: 0.001, fromBase: 1000 },
    { id: 'microcoulomb-per-kilogram', name: 'Microcoulomb per Kilogram', symbol: 'μC/kg', toBase: 0.000001, fromBase: 1000000 },
    { id: 'roentgen', name: 'Roentgen', symbol: 'R', toBase: 0.000258, fromBase: 1 / 0.000258 },
    { id: 'milliroentgen', name: 'Milliroentgen', symbol: 'mR', toBase: 2.58e-7, fromBase: 1 / 2.58e-7 },
    { id: 'microroentgen', name: 'Microroentgen', symbol: 'μR', toBase: 2.58e-10, fromBase: 1 / 2.58e-10 },
  ],
};

export const radiationAbsorbedDoseCategory: UnitCategory = {
  id: 'radiation-absorbed-dose',
  name: 'Radiation Absorbed Dose',
  description: 'Convert between different units of absorbed radiation dose',
  icon: 'Target',
  baseUnit: 'gray',
  units: [
    { id: 'gray', name: 'Gray', symbol: 'Gy', toBase: 1, fromBase: 1 },
    { id: 'milligray', name: 'Milligray', symbol: 'mGy', toBase: 0.001, fromBase: 1000 },
    { id: 'microgray', name: 'Microgray', symbol: 'μGy', toBase: 0.000001, fromBase: 1000000 },
    { id: 'kilogray', name: 'Kilogray', symbol: 'kGy', toBase: 1000, fromBase: 0.001 },
    { id: 'rad', name: 'Rad', symbol: 'rad', toBase: 0.01, fromBase: 100 },
    { id: 'millirad', name: 'Millirad', symbol: 'mrad', toBase: 0.00001, fromBase: 100000 },
    { id: 'joule-per-kilogram', name: 'Joule per Kilogram', symbol: 'J/kg', toBase: 1, fromBase: 1 },
    { id: 'erg-per-gram', name: 'Erg per Gram', symbol: 'erg/g', toBase: 0.0001, fromBase: 10000 },
  ],
};
