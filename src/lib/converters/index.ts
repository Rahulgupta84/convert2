import { UnitCategory, CategoryGroup, Unit, ConversionResult } from './types';

// Common Converters
import { lengthCategory } from './units/length';
import { weightCategory } from './units/weight';
import { temperatureCategory } from './units/temperature';
import { areaCategory } from './units/area';
import { volumeCategory } from './units/volume';
import { pressureCategory } from './units/pressure';
import { energyCategory } from './units/energy';
import { powerCategory } from './units/power';
import { forceCategory } from './units/force';
import { timeCategory } from './units/time';
import { speedCategory } from './units/speed';
import { angleCategory } from './units/angle';
import { fuelConsumptionCategory } from './units/fuel-consumption';
import { dataStorageCategory } from './units/data-storage';
import { dataTransferCategory } from './units/data-transfer';
import { frequencyCategory } from './units/frequency';

// Engineering Converters
import { accelerationCategory, accelerationAngularCategory } from './units/acceleration';
import { torqueCategory, momentOfInertiaCategory } from './units/torque';
import { densityCategory } from './units/density';
import { flowCategory, flowMassCategory } from './units/flow';
import { viscosityDynamicCategory, viscosityKinematicCategory } from './units/viscosity';

// Electricity Converters
import {
  chargeCategory,
  currentCategory,
  voltageCategory,
  resistanceCategory,
  conductanceCategory,
  capacitanceCategory,
  inductanceCategory,
} from './units/electric';

// Magnetic Converters
import {
  magneticFluxCategory,
  magneticFluxDensityCategory,
  magneticFieldStrengthCategory,
  magnetomotiveForceCategory,
} from './units/magnetic';

// Radiation Converters
import {
  radiationCategory,
  radiationActivityCategory,
  radiationExposureCategory,
  radiationAbsorbedDoseCategory,
} from './units/radiation';

// Light Converters
import {
  luminanceCategory,
  luminousIntensityCategory,
  illuminationCategory,
  digitalImageResolutionCategory,
  frequencyWavelengthCategory,
} from './units/light';

// Thermal Converters
import {
  thermalConductivityCategory,
  thermalResistanceCategory,
  heatCapacityCategory,
  heatFluxDensityCategory,
  thermalExpansionCategory,
  heatTransferCoefficientCategory,
  heatDensityCategory,
} from './units/thermal';

// Sound Converters
import { soundCategory, soundIntensityCategory } from './units/sound';

// Miscellaneous Converters
import {
  volumeDryCategory,
  typographyCategory,
  prefixCategory,
  specificVolumeCategory,
  velocityAngularCategory,
  surfaceTensionCategory,
  permeabilityCategory,
  concentrationCategory,
} from './units/misc';

// All categories array
export const allCategories: UnitCategory[] = [
  // Common
  lengthCategory,
  weightCategory,
  temperatureCategory,
  areaCategory,
  volumeCategory,
  pressureCategory,
  energyCategory,
  powerCategory,
  forceCategory,
  timeCategory,
  speedCategory,
  angleCategory,
  fuelConsumptionCategory,
  dataStorageCategory,
  dataTransferCategory,
  frequencyCategory,
  // Engineering
  accelerationCategory,
  accelerationAngularCategory,
  torqueCategory,
  momentOfInertiaCategory,
  densityCategory,
  flowCategory,
  flowMassCategory,
  viscosityDynamicCategory,
  viscosityKinematicCategory,
  specificVolumeCategory,
  velocityAngularCategory,
  // Electricity
  chargeCategory,
  currentCategory,
  voltageCategory,
  resistanceCategory,
  conductanceCategory,
  capacitanceCategory,
  inductanceCategory,
  // Magnetism
  magneticFluxCategory,
  magneticFluxDensityCategory,
  magneticFieldStrengthCategory,
  magnetomotiveForceCategory,
  // Radiation
  radiationCategory,
  radiationActivityCategory,
  radiationExposureCategory,
  radiationAbsorbedDoseCategory,
  // Light
  luminanceCategory,
  luminousIntensityCategory,
  illuminationCategory,
  digitalImageResolutionCategory,
  frequencyWavelengthCategory,
  // Thermal
  thermalConductivityCategory,
  thermalResistanceCategory,
  heatCapacityCategory,
  heatFluxDensityCategory,
  thermalExpansionCategory,
  heatTransferCoefficientCategory,
  heatDensityCategory,
  // Sound
  soundCategory,
  soundIntensityCategory,
  // Miscellaneous
  volumeDryCategory,
  typographyCategory,
  prefixCategory,
  surfaceTensionCategory,
  permeabilityCategory,
  concentrationCategory,
];

// Organized category groups
export const categoryGroups: CategoryGroup[] = [
  {
    name: 'Common Converters',
    categories: [
      lengthCategory,
      weightCategory,
      temperatureCategory,
      areaCategory,
      volumeCategory,
      pressureCategory,
      energyCategory,
      powerCategory,
      forceCategory,
      timeCategory,
      speedCategory,
      angleCategory,
      fuelConsumptionCategory,
      dataStorageCategory,
      dataTransferCategory,
      frequencyCategory,
    ],
  },
  {
    name: 'Engineering Converters',
    categories: [
      accelerationCategory,
      accelerationAngularCategory,
      torqueCategory,
      momentOfInertiaCategory,
      densityCategory,
      flowCategory,
      flowMassCategory,
      viscosityDynamicCategory,
      viscosityKinematicCategory,
      specificVolumeCategory,
      velocityAngularCategory,
    ],
  },
  {
    name: 'Electricity Converters',
    categories: [
      chargeCategory,
      currentCategory,
      voltageCategory,
      resistanceCategory,
      conductanceCategory,
      capacitanceCategory,
      inductanceCategory,
    ],
  },
  {
    name: 'Magnetism Converters',
    categories: [
      magneticFluxCategory,
      magneticFluxDensityCategory,
      magneticFieldStrengthCategory,
      magnetomotiveForceCategory,
    ],
  },
  {
    name: 'Radiology Converters',
    categories: [
      radiationCategory,
      radiationActivityCategory,
      radiationExposureCategory,
      radiationAbsorbedDoseCategory,
    ],
  },
  {
    name: 'Light Converters',
    categories: [
      luminanceCategory,
      luminousIntensityCategory,
      illuminationCategory,
      digitalImageResolutionCategory,
      frequencyWavelengthCategory,
    ],
  },
  {
    name: 'Heat Converters',
    categories: [
      thermalConductivityCategory,
      thermalResistanceCategory,
      heatCapacityCategory,
      heatFluxDensityCategory,
      thermalExpansionCategory,
      heatTransferCoefficientCategory,
      heatDensityCategory,
    ],
  },
  {
    name: 'Fluids Converters',
    categories: [
      flowCategory,
      flowMassCategory,
      viscosityDynamicCategory,
      viscosityKinematicCategory,
      surfaceTensionCategory,
      permeabilityCategory,
      concentrationCategory,
    ],
  },
  {
    name: 'Sound Converters',
    categories: [soundCategory, soundIntensityCategory],
  },
  {
    name: 'Other Converters',
    categories: [volumeDryCategory, typographyCategory, prefixCategory],
  },
];

// Category lookup map
export const categoryMap = new Map<string, UnitCategory>(
  allCategories.map((cat) => [cat.id, cat])
);

// Get category by ID
export function getCategory(categoryId: string): UnitCategory | undefined {
  return categoryMap.get(categoryId);
}

// Get unit by ID within a category
export function getUnit(categoryId: string, unitId: string): Unit | undefined {
  const category = getCategory(categoryId);
  if (!category) return undefined;
  return category.units.find((u) => u.id === unitId);
}

// Convert value from one unit to another
export function convert(
  value: number,
  categoryId: string,
  fromUnitId: string,
  toUnitId: string
): ConversionResult | null {
  const category = getCategory(categoryId);
  if (!category) return null;

  const fromUnit = category.units.find((u) => u.id === fromUnitId);
  const toUnit = category.units.find((u) => u.id === toUnitId);

  if (!fromUnit || !toUnit) return null;

  // Convert to base unit first
  let baseValue: number;
  if (typeof fromUnit.toBase === 'function') {
    baseValue = fromUnit.toBase(value);
  } else {
    baseValue = value * fromUnit.toBase;
  }

  // Convert from base unit to target unit
  let result: number;
  if (typeof toUnit.fromBase === 'function') {
    result = toUnit.fromBase(baseValue);
  } else {
    result = baseValue * toUnit.fromBase;
  }

  // Generate formula string
  const formula = generateFormula(value, fromUnit, toUnit, result, category);

  return {
    from: { value, unit: fromUnit },
    to: { value: result, unit: toUnit },
    formula,
  };
}

// Generate human-readable formula
function generateFormula(
  inputValue: number,
  fromUnit: Unit,
  toUnit: Unit,
  result: number,
  category: UnitCategory
): string {
  // For temperature, show the actual formula
  if (category.id === 'temperature') {
    return getTemperatureFormula(fromUnit.id, toUnit.id);
  }

  // For simple conversions, show the multiplier
  if (typeof fromUnit.toBase === 'number' && typeof toUnit.fromBase === 'number') {
    const factor = fromUnit.toBase * toUnit.fromBase;
    return `${inputValue} ${fromUnit.symbol} × ${formatNumber(factor)} = ${formatNumber(result)} ${toUnit.symbol}`;
  }

  return `${inputValue} ${fromUnit.symbol} = ${formatNumber(result)} ${toUnit.symbol}`;
}

// Temperature-specific formula strings
function getTemperatureFormula(fromId: string, toId: string): string {
  const formulas: Record<string, Record<string, string>> = {
    celsius: {
      fahrenheit: '°F = (°C × 9/5) + 32',
      kelvin: 'K = °C + 273.15',
      rankine: '°R = (°C + 273.15) × 9/5',
    },
    fahrenheit: {
      celsius: '°C = (°F - 32) × 5/9',
      kelvin: 'K = (°F + 459.67) × 5/9',
      rankine: '°R = °F + 459.67',
    },
    kelvin: {
      celsius: '°C = K - 273.15',
      fahrenheit: '°F = K × 9/5 - 459.67',
      rankine: '°R = K × 9/5',
    },
    rankine: {
      kelvin: 'K = °R × 5/9',
      celsius: '°C = (°R × 5/9) - 273.15',
      fahrenheit: '°F = °R - 459.67',
    },
  };

  return formulas[fromId]?.[toId] || 'Direct conversion';
}

// Format number for display
export function formatNumber(num: number): string {
  if (num === 0) return '0';

  const absNum = Math.abs(num);

  // Very small or very large numbers use scientific notation
  if (absNum < 0.0001 || absNum >= 1e10) {
    return num.toExponential(6);
  }

  // For regular numbers, show appropriate precision
  if (Number.isInteger(num)) {
    return num.toLocaleString();
  }

  // Determine decimal places based on magnitude
  const magnitude = Math.floor(Math.log10(absNum));
  const decimalPlaces = Math.max(0, 6 - magnitude);

  return parseFloat(num.toFixed(decimalPlaces)).toString();
}

// Search for units across all categories
export function searchUnits(query: string): Array<{ category: UnitCategory; unit: Unit }> {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  const results: Array<{ category: UnitCategory; unit: Unit }> = [];

  for (const category of allCategories) {
    for (const unit of category.units) {
      if (
        unit.name.toLowerCase().includes(normalizedQuery) ||
        unit.symbol.toLowerCase().includes(normalizedQuery) ||
        unit.id.toLowerCase().includes(normalizedQuery)
      ) {
        results.push({ category, unit });
      }
    }
  }

  return results;
}

// Get popular conversions for a category
export function getPopularConversions(categoryId: string): Array<{ from: string; to: string }> {
  const popularConversions: Record<string, Array<{ from: string; to: string }>> = {
    length: [
      { from: 'centimeter', to: 'inch' },
      { from: 'meter', to: 'foot' },
      { from: 'kilometer', to: 'mile' },
      { from: 'millimeter', to: 'inch' },
      { from: 'inch', to: 'centimeter' },
      { from: 'foot', to: 'meter' },
    ],
    weight: [
      { from: 'kilogram', to: 'pound' },
      { from: 'pound', to: 'kilogram' },
      { from: 'gram', to: 'ounce' },
      { from: 'ounce', to: 'gram' },
    ],
    temperature: [
      { from: 'celsius', to: 'fahrenheit' },
      { from: 'fahrenheit', to: 'celsius' },
      { from: 'kelvin', to: 'celsius' },
    ],
    volume: [
      { from: 'liter', to: 'gallon-us' },
      { from: 'gallon-us', to: 'liter' },
      { from: 'milliliter', to: 'cup-us' },
      { from: 'fluid-ounce-us', to: 'milliliter' },
    ],
    area: [
      { from: 'square-meter', to: 'square-foot' },
      { from: 'acre', to: 'square-foot' },
      { from: 'hectare', to: 'acre' },
    ],
    speed: [
      { from: 'kilometer-per-hour', to: 'mile-per-hour' },
      { from: 'mile-per-hour', to: 'kilometer-per-hour' },
      { from: 'meter-per-second', to: 'kilometer-per-hour' },
    ],
    'data-storage': [
      { from: 'gigabyte', to: 'megabyte' },
      { from: 'terabyte', to: 'gigabyte' },
      { from: 'megabyte', to: 'kilobyte' },
    ],
  };

  return popularConversions[categoryId] || [];
}

// Export types
export * from './types';
