// Core types for the conversion engine

export interface Unit {
  id: string;
  name: string;
  symbol: string;
  // Conversion factor to base unit (multiply to convert to base)
  toBase: number | ((value: number) => number);
  // Conversion from base unit (multiply to convert from base)
  fromBase: number | ((value: number) => number);
}

export interface UnitCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  baseUnit: string; // The base unit ID for conversions
  units: Unit[];
}

export interface ConversionResult {
  from: {
    value: number;
    unit: Unit;
  };
  to: {
    value: number;
    unit: Unit;
  };
  formula: string;
}

export interface CategoryGroup {
  name: string;
  categories: UnitCategory[];
}

export type ConversionFunction = (value: number) => number;
