import { UnitCategory } from '../types';

export const thermalConductivityCategory: UnitCategory = {
  id: 'thermal-conductivity',
  name: 'Thermal Conductivity',
  description: 'Convert between different units of thermal conductivity',
  icon: 'Flame',
  baseUnit: 'watt-per-meter-kelvin',
  units: [
    { id: 'watt-per-meter-kelvin', name: 'Watt per Meter Kelvin', symbol: 'W/(m·K)', toBase: 1, fromBase: 1 },
    { id: 'watt-per-centimeter-celsius', name: 'Watt per Centimeter Celsius', symbol: 'W/(cm·°C)', toBase: 100, fromBase: 0.01 },
    { id: 'kilowatt-per-meter-kelvin', name: 'Kilowatt per Meter Kelvin', symbol: 'kW/(m·K)', toBase: 1000, fromBase: 0.001 },
    { id: 'calorie-per-second-centimeter-celsius', name: 'Calorie per Second Centimeter Celsius', symbol: 'cal/(s·cm·°C)', toBase: 418.68, fromBase: 1 / 418.68 },
    { id: 'calorie-per-hour-centimeter-celsius', name: 'Calorie per Hour Centimeter Celsius', symbol: 'cal/(h·cm·°C)', toBase: 0.1163, fromBase: 1 / 0.1163 },
    { id: 'btu-per-hour-foot-fahrenheit', name: 'BTU per Hour Foot Fahrenheit', symbol: 'BTU/(h·ft·°F)', toBase: 1.73073, fromBase: 1 / 1.73073 },
    { id: 'btu-inch-per-hour-square-foot-fahrenheit', name: 'BTU Inch per Hour Square Foot Fahrenheit', symbol: 'BTU·in/(h·ft²·°F)', toBase: 0.144228, fromBase: 1 / 0.144228 },
  ],
};

export const thermalResistanceCategory: UnitCategory = {
  id: 'thermal-resistance',
  name: 'Thermal Resistance',
  description: 'Convert between different units of thermal resistance',
  icon: 'Shield',
  baseUnit: 'kelvin-per-watt',
  units: [
    { id: 'kelvin-per-watt', name: 'Kelvin per Watt', symbol: 'K/W', toBase: 1, fromBase: 1 },
    { id: 'degree-celsius-per-watt', name: 'Degree Celsius per Watt', symbol: '°C/W', toBase: 1, fromBase: 1 },
    { id: 'degree-fahrenheit-hour-per-btu', name: 'Degree Fahrenheit Hour per BTU', symbol: '°F·h/BTU', toBase: 1.895634, fromBase: 1 / 1.895634 },
    { id: 'degree-fahrenheit-second-per-btu', name: 'Degree Fahrenheit Second per BTU', symbol: '°F·s/BTU', toBase: 0.000527, fromBase: 1 / 0.000527 },
  ],
};

export const heatCapacityCategory: UnitCategory = {
  id: 'heat-capacity',
  name: 'Specific Heat Capacity',
  description: 'Convert between different units of specific heat capacity',
  icon: 'Thermometer',
  baseUnit: 'joule-per-kilogram-kelvin',
  units: [
    { id: 'joule-per-kilogram-kelvin', name: 'Joule per Kilogram Kelvin', symbol: 'J/(kg·K)', toBase: 1, fromBase: 1 },
    { id: 'joule-per-kilogram-celsius', name: 'Joule per Kilogram Celsius', symbol: 'J/(kg·°C)', toBase: 1, fromBase: 1 },
    { id: 'joule-per-gram-celsius', name: 'Joule per Gram Celsius', symbol: 'J/(g·°C)', toBase: 1000, fromBase: 0.001 },
    { id: 'kilojoule-per-kilogram-kelvin', name: 'Kilojoule per Kilogram Kelvin', symbol: 'kJ/(kg·K)', toBase: 1000, fromBase: 0.001 },
    { id: 'kilojoule-per-kilogram-celsius', name: 'Kilojoule per Kilogram Celsius', symbol: 'kJ/(kg·°C)', toBase: 1000, fromBase: 0.001 },
    { id: 'calorie-per-gram-celsius', name: 'Calorie per Gram Celsius', symbol: 'cal/(g·°C)', toBase: 4184, fromBase: 1 / 4184 },
    { id: 'kilocalorie-per-kilogram-celsius', name: 'Kilocalorie per Kilogram Celsius', symbol: 'kcal/(kg·°C)', toBase: 4184, fromBase: 1 / 4184 },
    { id: 'btu-per-pound-fahrenheit', name: 'BTU per Pound Fahrenheit', symbol: 'BTU/(lb·°F)', toBase: 4186.8, fromBase: 1 / 4186.8 },
  ],
};

export const heatFluxDensityCategory: UnitCategory = {
  id: 'heat-flux-density',
  name: 'Heat Flux Density',
  description: 'Convert between different units of heat flux density',
  icon: 'Flame',
  baseUnit: 'watt-per-square-meter',
  units: [
    { id: 'watt-per-square-meter', name: 'Watt per Square Meter', symbol: 'W/m²', toBase: 1, fromBase: 1 },
    { id: 'kilowatt-per-square-meter', name: 'Kilowatt per Square Meter', symbol: 'kW/m²', toBase: 1000, fromBase: 0.001 },
    { id: 'watt-per-square-centimeter', name: 'Watt per Square Centimeter', symbol: 'W/cm²', toBase: 10000, fromBase: 0.0001 },
    { id: 'watt-per-square-inch', name: 'Watt per Square Inch', symbol: 'W/in²', toBase: 1550.0031, fromBase: 1 / 1550.0031 },
    { id: 'joule-per-second-square-meter', name: 'Joule per Second Square Meter', symbol: 'J/(s·m²)', toBase: 1, fromBase: 1 },
    { id: 'kilocalorie-per-hour-square-meter', name: 'Kilocalorie per Hour Square Meter', symbol: 'kcal/(h·m²)', toBase: 1.163, fromBase: 1 / 1.163 },
    { id: 'calorie-per-second-square-centimeter', name: 'Calorie per Second Square Centimeter', symbol: 'cal/(s·cm²)', toBase: 41840, fromBase: 1 / 41840 },
    { id: 'btu-per-hour-square-foot', name: 'BTU per Hour Square Foot', symbol: 'BTU/(h·ft²)', toBase: 3.15459, fromBase: 1 / 3.15459 },
    { id: 'btu-per-second-square-foot', name: 'BTU per Second Square Foot', symbol: 'BTU/(s·ft²)', toBase: 11356.5267, fromBase: 1 / 11356.5267 },
    { id: 'langley', name: 'Langley', symbol: 'Ly', toBase: 697.8, fromBase: 1 / 697.8 },
  ],
};

export const thermalExpansionCategory: UnitCategory = {
  id: 'thermal-expansion',
  name: 'Thermal Expansion',
  description: 'Convert between different units of thermal expansion coefficient',
  icon: 'Expand',
  baseUnit: 'per-kelvin',
  units: [
    { id: 'per-kelvin', name: 'Per Kelvin', symbol: '1/K', toBase: 1, fromBase: 1 },
    { id: 'per-celsius', name: 'Per Celsius', symbol: '1/°C', toBase: 1, fromBase: 1 },
    { id: 'per-fahrenheit', name: 'Per Fahrenheit', symbol: '1/°F', toBase: 1.8, fromBase: 1 / 1.8 },
    { id: 'per-rankine', name: 'Per Rankine', symbol: '1/°R', toBase: 1.8, fromBase: 1 / 1.8 },
  ],
};

export const heatTransferCoefficientCategory: UnitCategory = {
  id: 'heat-transfer-coefficient',
  name: 'Heat Transfer Coefficient',
  description: 'Convert between different units of heat transfer coefficient',
  icon: 'ArrowRightLeft',
  baseUnit: 'watt-per-square-meter-kelvin',
  units: [
    { id: 'watt-per-square-meter-kelvin', name: 'Watt per Square Meter Kelvin', symbol: 'W/(m²·K)', toBase: 1, fromBase: 1 },
    { id: 'watt-per-square-meter-celsius', name: 'Watt per Square Meter Celsius', symbol: 'W/(m²·°C)', toBase: 1, fromBase: 1 },
    { id: 'joule-per-second-square-meter-kelvin', name: 'Joule per Second Square Meter Kelvin', symbol: 'J/(s·m²·K)', toBase: 1, fromBase: 1 },
    { id: 'kilocalorie-per-hour-square-meter-celsius', name: 'Kilocalorie per Hour Square Meter Celsius', symbol: 'kcal/(h·m²·°C)', toBase: 1.163, fromBase: 1 / 1.163 },
    { id: 'calorie-per-second-square-centimeter-celsius', name: 'Calorie per Second Square Centimeter Celsius', symbol: 'cal/(s·cm²·°C)', toBase: 41840, fromBase: 1 / 41840 },
    { id: 'btu-per-hour-square-foot-fahrenheit', name: 'BTU per Hour Square Foot Fahrenheit', symbol: 'BTU/(h·ft²·°F)', toBase: 5.67826, fromBase: 1 / 5.67826 },
  ],
};

export const heatDensityCategory: UnitCategory = {
  id: 'heat-density',
  name: 'Heat Density',
  description: 'Convert between different units of heat density (energy per volume)',
  icon: 'Container',
  baseUnit: 'joule-per-cubic-meter',
  units: [
    { id: 'joule-per-cubic-meter', name: 'Joule per Cubic Meter', symbol: 'J/m³', toBase: 1, fromBase: 1 },
    { id: 'joule-per-liter', name: 'Joule per Liter', symbol: 'J/L', toBase: 1000, fromBase: 0.001 },
    { id: 'kilojoule-per-cubic-meter', name: 'Kilojoule per Cubic Meter', symbol: 'kJ/m³', toBase: 1000, fromBase: 0.001 },
    { id: 'megajoule-per-cubic-meter', name: 'Megajoule per Cubic Meter', symbol: 'MJ/m³', toBase: 1000000, fromBase: 0.000001 },
    { id: 'calorie-per-cubic-centimeter', name: 'Calorie per Cubic Centimeter', symbol: 'cal/cm³', toBase: 4184000, fromBase: 1 / 4184000 },
    { id: 'btu-per-cubic-foot', name: 'BTU per Cubic Foot', symbol: 'BTU/ft³', toBase: 37258.9, fromBase: 1 / 37258.9 },
    { id: 'therm-per-cubic-foot', name: 'Therm per Cubic Foot', symbol: 'thm/ft³', toBase: 3725890000, fromBase: 1 / 3725890000 },
  ],
};
