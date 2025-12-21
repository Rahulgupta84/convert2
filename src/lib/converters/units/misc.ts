import { UnitCategory } from '../types';

export const volumeDryCategory: UnitCategory = {
  id: 'volume-dry',
  name: 'Volume (Dry)',
  description: 'Convert between different units of dry volume',
  icon: 'Package',
  baseUnit: 'liter',
  units: [
    { id: 'liter', name: 'Liter', symbol: 'L', toBase: 1, fromBase: 1 },
    { id: 'barrel-dry-us', name: 'Barrel (Dry, US)', symbol: 'bbl (dry, US)', toBase: 115.6271, fromBase: 1 / 115.6271 },
    { id: 'pint-dry-us', name: 'Pint (Dry, US)', symbol: 'pt (dry, US)', toBase: 0.5506105, fromBase: 1 / 0.5506105 },
    { id: 'quart-dry-us', name: 'Quart (Dry, US)', symbol: 'qt (dry, US)', toBase: 1.101221, fromBase: 1 / 1.101221 },
    { id: 'peck-us', name: 'Peck (US)', symbol: 'pk (US)', toBase: 8.809768, fromBase: 1 / 8.809768 },
    { id: 'bushel-us', name: 'Bushel (US)', symbol: 'bu (US)', toBase: 35.23907, fromBase: 1 / 35.23907 },
    { id: 'bushel-uk', name: 'Bushel (UK)', symbol: 'bu (UK)', toBase: 36.36872, fromBase: 1 / 36.36872 },
    { id: 'peck-uk', name: 'Peck (UK)', symbol: 'pk (UK)', toBase: 9.09218, fromBase: 1 / 9.09218 },
    { id: 'gallon-dry-us', name: 'Gallon (Dry, US)', symbol: 'gal (dry, US)', toBase: 4.404884, fromBase: 1 / 4.404884 },
    { id: 'quart-uk', name: 'Quart (UK)', symbol: 'qt (UK)', toBase: 1.136523, fromBase: 1 / 1.136523 },
    { id: 'pint-uk', name: 'Pint (UK)', symbol: 'pt (UK)', toBase: 0.5682613, fromBase: 1 / 0.5682613 },
    { id: 'cubic-meter', name: 'Cubic Meter', symbol: 'm³', toBase: 1000, fromBase: 0.001 },
    { id: 'cubic-foot', name: 'Cubic Foot', symbol: 'ft³', toBase: 28.31685, fromBase: 1 / 28.31685 },
    { id: 'cubic-inch', name: 'Cubic Inch', symbol: 'in³', toBase: 0.01638706, fromBase: 1 / 0.01638706 },
  ],
};

export const typographyCategory: UnitCategory = {
  id: 'typography',
  name: 'Typography',
  description: 'Convert between different units of typography',
  icon: 'Type',
  baseUnit: 'meter',
  units: [
    { id: 'meter', name: 'Meter', symbol: 'm', toBase: 1, fromBase: 1 },
    { id: 'twip', name: 'Twip', symbol: 'twip', toBase: 0.0000176389, fromBase: 1 / 0.0000176389 },
    { id: 'point-computer', name: 'Point (Computer)', symbol: 'pt', toBase: 0.000352778, fromBase: 1 / 0.000352778 },
    { id: 'point-didot', name: 'Point (Didot)', symbol: 'pt (Didot)', toBase: 0.000376065, fromBase: 1 / 0.000376065 },
    { id: 'point-ata', name: 'Point (ATA)', symbol: 'pt (ATA)', toBase: 0.000351460, fromBase: 1 / 0.000351460 },
    { id: 'pica-computer', name: 'Pica (Computer)', symbol: 'pica', toBase: 0.00423333, fromBase: 1 / 0.00423333 },
    { id: 'pica-printers', name: 'Pica (Printers)', symbol: 'pica (printers)', toBase: 0.00422675, fromBase: 1 / 0.00422675 },
    { id: 'cicero', name: 'Cicero', symbol: 'cicero', toBase: 0.00451278, fromBase: 1 / 0.00451278 },
    { id: 'inch', name: 'Inch', symbol: 'in', toBase: 0.0254, fromBase: 1 / 0.0254 },
    { id: 'centimeter', name: 'Centimeter', symbol: 'cm', toBase: 0.01, fromBase: 100 },
    { id: 'millimeter', name: 'Millimeter', symbol: 'mm', toBase: 0.001, fromBase: 1000 },
    { id: 'pixel', name: 'Pixel (96 dpi)', symbol: 'px', toBase: 0.000264583, fromBase: 1 / 0.000264583 },
    { id: 'em', name: 'Em (16px)', symbol: 'em', toBase: 0.00423333, fromBase: 1 / 0.00423333 },
  ],
};

export const prefixCategory: UnitCategory = {
  id: 'prefix',
  name: 'SI Prefixes',
  description: 'Convert between SI prefix multipliers',
  icon: 'Hash',
  baseUnit: 'unit',
  units: [
    { id: 'quetta', name: 'Quetta', symbol: 'Q', toBase: 1e30, fromBase: 1e-30 },
    { id: 'ronna', name: 'Ronna', symbol: 'R', toBase: 1e27, fromBase: 1e-27 },
    { id: 'yotta', name: 'Yotta', symbol: 'Y', toBase: 1e24, fromBase: 1e-24 },
    { id: 'zetta', name: 'Zetta', symbol: 'Z', toBase: 1e21, fromBase: 1e-21 },
    { id: 'exa', name: 'Exa', symbol: 'E', toBase: 1e18, fromBase: 1e-18 },
    { id: 'peta', name: 'Peta', symbol: 'P', toBase: 1e15, fromBase: 1e-15 },
    { id: 'tera', name: 'Tera', symbol: 'T', toBase: 1e12, fromBase: 1e-12 },
    { id: 'giga', name: 'Giga', symbol: 'G', toBase: 1e9, fromBase: 1e-9 },
    { id: 'mega', name: 'Mega', symbol: 'M', toBase: 1e6, fromBase: 1e-6 },
    { id: 'kilo', name: 'Kilo', symbol: 'k', toBase: 1e3, fromBase: 1e-3 },
    { id: 'hecto', name: 'Hecto', symbol: 'h', toBase: 1e2, fromBase: 1e-2 },
    { id: 'deka', name: 'Deka', symbol: 'da', toBase: 10, fromBase: 0.1 },
    { id: 'unit', name: 'Unit', symbol: '1', toBase: 1, fromBase: 1 },
    { id: 'deci', name: 'Deci', symbol: 'd', toBase: 0.1, fromBase: 10 },
    { id: 'centi', name: 'Centi', symbol: 'c', toBase: 0.01, fromBase: 100 },
    { id: 'milli', name: 'Milli', symbol: 'm', toBase: 1e-3, fromBase: 1e3 },
    { id: 'micro', name: 'Micro', symbol: 'μ', toBase: 1e-6, fromBase: 1e6 },
    { id: 'nano', name: 'Nano', symbol: 'n', toBase: 1e-9, fromBase: 1e9 },
    { id: 'pico', name: 'Pico', symbol: 'p', toBase: 1e-12, fromBase: 1e12 },
    { id: 'femto', name: 'Femto', symbol: 'f', toBase: 1e-15, fromBase: 1e15 },
    { id: 'atto', name: 'Atto', symbol: 'a', toBase: 1e-18, fromBase: 1e18 },
    { id: 'zepto', name: 'Zepto', symbol: 'z', toBase: 1e-21, fromBase: 1e21 },
    { id: 'yocto', name: 'Yocto', symbol: 'y', toBase: 1e-24, fromBase: 1e24 },
    { id: 'ronto', name: 'Ronto', symbol: 'r', toBase: 1e-27, fromBase: 1e27 },
    { id: 'quecto', name: 'Quecto', symbol: 'q', toBase: 1e-30, fromBase: 1e30 },
  ],
};

export const numberBaseCategory: UnitCategory = {
  id: 'number-base',
  name: 'Number Bases',
  description: 'Convert between different number systems',
  icon: 'Binary',
  baseUnit: 'decimal',
  units: [
    { id: 'binary', name: 'Binary', symbol: 'base 2', toBase: 1, fromBase: 1 },
    { id: 'octal', name: 'Octal', symbol: 'base 8', toBase: 1, fromBase: 1 },
    { id: 'decimal', name: 'Decimal', symbol: 'base 10', toBase: 1, fromBase: 1 },
    { id: 'hexadecimal', name: 'Hexadecimal', symbol: 'base 16', toBase: 1, fromBase: 1 },
  ],
};

export const specificVolumeCategory: UnitCategory = {
  id: 'specific-volume',
  name: 'Specific Volume',
  description: 'Convert between different units of specific volume',
  icon: 'Cube',
  baseUnit: 'cubic-meter-per-kilogram',
  units: [
    { id: 'cubic-meter-per-kilogram', name: 'Cubic Meter per Kilogram', symbol: 'm³/kg', toBase: 1, fromBase: 1 },
    { id: 'cubic-centimeter-per-gram', name: 'Cubic Centimeter per Gram', symbol: 'cm³/g', toBase: 0.001, fromBase: 1000 },
    { id: 'liter-per-kilogram', name: 'Liter per Kilogram', symbol: 'L/kg', toBase: 0.001, fromBase: 1000 },
    { id: 'liter-per-gram', name: 'Liter per Gram', symbol: 'L/g', toBase: 1, fromBase: 1 },
    { id: 'cubic-foot-per-kilogram', name: 'Cubic Foot per Kilogram', symbol: 'ft³/kg', toBase: 0.02831685, fromBase: 1 / 0.02831685 },
    { id: 'cubic-foot-per-pound', name: 'Cubic Foot per Pound', symbol: 'ft³/lb', toBase: 0.06242796, fromBase: 1 / 0.06242796 },
    { id: 'cubic-inch-per-pound', name: 'Cubic Inch per Pound', symbol: 'in³/lb', toBase: 0.00003612729, fromBase: 1 / 0.00003612729 },
    { id: 'gallon-per-pound-us', name: 'Gallon per Pound (US)', symbol: 'gal/lb (US)', toBase: 0.008345404, fromBase: 1 / 0.008345404 },
  ],
};

export const velocityAngularCategory: UnitCategory = {
  id: 'velocity-angular',
  name: 'Angular Velocity',
  description: 'Convert between different units of angular velocity',
  icon: 'RefreshCw',
  baseUnit: 'radian-per-second',
  units: [
    { id: 'radian-per-second', name: 'Radian per Second', symbol: 'rad/s', toBase: 1, fromBase: 1 },
    { id: 'radian-per-minute', name: 'Radian per Minute', symbol: 'rad/min', toBase: 1 / 60, fromBase: 60 },
    { id: 'radian-per-hour', name: 'Radian per Hour', symbol: 'rad/h', toBase: 1 / 3600, fromBase: 3600 },
    { id: 'radian-per-day', name: 'Radian per Day', symbol: 'rad/d', toBase: 1 / 86400, fromBase: 86400 },
    { id: 'degree-per-second', name: 'Degree per Second', symbol: '°/s', toBase: Math.PI / 180, fromBase: 180 / Math.PI },
    { id: 'degree-per-minute', name: 'Degree per Minute', symbol: '°/min', toBase: Math.PI / 10800, fromBase: 10800 / Math.PI },
    { id: 'degree-per-hour', name: 'Degree per Hour', symbol: '°/h', toBase: Math.PI / 648000, fromBase: 648000 / Math.PI },
    { id: 'revolution-per-second', name: 'Revolution per Second', symbol: 'rev/s', toBase: 2 * Math.PI, fromBase: 1 / (2 * Math.PI) },
    { id: 'revolution-per-minute', name: 'Revolution per Minute (RPM)', symbol: 'rpm', toBase: Math.PI / 30, fromBase: 30 / Math.PI },
    { id: 'revolution-per-hour', name: 'Revolution per Hour', symbol: 'rev/h', toBase: Math.PI / 1800, fromBase: 1800 / Math.PI },
    { id: 'revolution-per-day', name: 'Revolution per Day', symbol: 'rev/d', toBase: Math.PI / 43200, fromBase: 43200 / Math.PI },
  ],
};

export const surfaceTensionCategory: UnitCategory = {
  id: 'surface-tension',
  name: 'Surface Tension',
  description: 'Convert between different units of surface tension',
  icon: 'Droplet',
  baseUnit: 'newton-per-meter',
  units: [
    { id: 'newton-per-meter', name: 'Newton per Meter', symbol: 'N/m', toBase: 1, fromBase: 1 },
    { id: 'millinewton-per-meter', name: 'Millinewton per Meter', symbol: 'mN/m', toBase: 0.001, fromBase: 1000 },
    { id: 'dyne-per-centimeter', name: 'Dyne per Centimeter', symbol: 'dyn/cm', toBase: 0.001, fromBase: 1000 },
    { id: 'erg-per-square-centimeter', name: 'Erg per Square Centimeter', symbol: 'erg/cm²', toBase: 0.001, fromBase: 1000 },
    { id: 'pound-force-per-inch', name: 'Pound-force per Inch', symbol: 'lbf/in', toBase: 175.1268, fromBase: 1 / 175.1268 },
  ],
};

export const permeabilityCategory: UnitCategory = {
  id: 'permeability',
  name: 'Permeability',
  description: 'Convert between different units of permeability',
  icon: 'Grid',
  baseUnit: 'square-meter',
  units: [
    { id: 'square-meter', name: 'Square Meter', symbol: 'm²', toBase: 1, fromBase: 1 },
    { id: 'square-centimeter', name: 'Square Centimeter', symbol: 'cm²', toBase: 1e-4, fromBase: 1e4 },
    { id: 'square-millimeter', name: 'Square Millimeter', symbol: 'mm²', toBase: 1e-6, fromBase: 1e6 },
    { id: 'darcy', name: 'Darcy', symbol: 'D', toBase: 9.869233e-13, fromBase: 1 / 9.869233e-13 },
    { id: 'millidarcy', name: 'Millidarcy', symbol: 'mD', toBase: 9.869233e-16, fromBase: 1 / 9.869233e-16 },
    { id: 'square-foot', name: 'Square Foot', symbol: 'ft²', toBase: 0.09290304, fromBase: 1 / 0.09290304 },
    { id: 'square-inch', name: 'Square Inch', symbol: 'in²', toBase: 6.4516e-4, fromBase: 1 / 6.4516e-4 },
  ],
};

export const concentrationCategory: UnitCategory = {
  id: 'concentration-molar',
  name: 'Molar Concentration',
  description: 'Convert between different units of molar concentration',
  icon: 'Flask',
  baseUnit: 'mol-per-cubic-meter',
  units: [
    { id: 'mol-per-cubic-meter', name: 'Mole per Cubic Meter', symbol: 'mol/m³', toBase: 1, fromBase: 1 },
    { id: 'mol-per-liter', name: 'Mole per Liter', symbol: 'mol/L', toBase: 1000, fromBase: 0.001 },
    { id: 'mol-per-cubic-centimeter', name: 'Mole per Cubic Centimeter', symbol: 'mol/cm³', toBase: 1000000, fromBase: 0.000001 },
    { id: 'millimol-per-liter', name: 'Millimole per Liter', symbol: 'mmol/L', toBase: 1, fromBase: 1 },
    { id: 'micromol-per-liter', name: 'Micromole per Liter', symbol: 'μmol/L', toBase: 0.001, fromBase: 1000 },
    { id: 'nanomol-per-liter', name: 'Nanomole per Liter', symbol: 'nmol/L', toBase: 0.000001, fromBase: 1000000 },
    { id: 'picomol-per-liter', name: 'Picomole per Liter', symbol: 'pmol/L', toBase: 1e-9, fromBase: 1e9 },
    { id: 'mol-per-cubic-foot', name: 'Mole per Cubic Foot', symbol: 'mol/ft³', toBase: 35.31467, fromBase: 1 / 35.31467 },
    { id: 'mol-per-gallon-us', name: 'Mole per Gallon (US)', symbol: 'mol/gal (US)', toBase: 264.172, fromBase: 1 / 264.172 },
  ],
};
