import { describe, it, expect } from 'vitest';
import { convert, getCategory, allCategories, formatNumber } from '@/lib/converters';

describe('Conversion Engine', () => {
  describe('convert function', () => {
    it('should convert meters to feet correctly', () => {
      const result = convert(1, 'length', 'meter', 'foot');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(3.28084, 4);
    });

    it('should convert feet to meters correctly', () => {
      const result = convert(1, 'length', 'foot', 'meter');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(0.3048, 4);
    });

    it('should convert kilometers to miles correctly', () => {
      const result = convert(1, 'length', 'kilometer', 'mile');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(0.621371, 4);
    });

    it('should convert centimeters to inches correctly', () => {
      const result = convert(2.54, 'length', 'centimeter', 'inch');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(1, 4);
    });
  });

  describe('weight conversions', () => {
    it('should convert kilograms to pounds correctly', () => {
      const result = convert(1, 'weight', 'kilogram', 'pound');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(2.20462, 4);
    });

    it('should convert pounds to kilograms correctly', () => {
      const result = convert(1, 'weight', 'pound', 'kilogram');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(0.453592, 4);
    });

    it('should convert grams to ounces correctly', () => {
      const result = convert(28.3495, 'weight', 'gram', 'ounce');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(1, 3);
    });
  });

  describe('temperature conversions', () => {
    it('should convert Celsius to Fahrenheit correctly', () => {
      const result = convert(0, 'temperature', 'celsius', 'fahrenheit');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(32, 4);
    });

    it('should convert Fahrenheit to Celsius correctly', () => {
      const result = convert(32, 'temperature', 'fahrenheit', 'celsius');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(0, 4);
    });

    it('should convert Celsius 100 to Fahrenheit correctly', () => {
      const result = convert(100, 'temperature', 'celsius', 'fahrenheit');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(212, 4);
    });

    it('should convert Kelvin to Celsius correctly', () => {
      const result = convert(273.15, 'temperature', 'kelvin', 'celsius');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(0, 4);
    });

    it('should convert negative temperatures correctly', () => {
      const result = convert(-40, 'temperature', 'celsius', 'fahrenheit');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(-40, 4);
    });
  });

  describe('volume conversions', () => {
    it('should convert liters to gallons (US) correctly', () => {
      const result = convert(3.78541, 'volume', 'liter', 'gallon-us');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(1, 3);
    });

    it('should convert milliliters to cups correctly', () => {
      const result = convert(236.588, 'volume', 'milliliter', 'cup-us');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(1, 3);
    });
  });

  describe('area conversions', () => {
    it('should convert square meters to square feet correctly', () => {
      const result = convert(1, 'area', 'square-meter', 'square-foot');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(10.7639, 3);
    });

    it('should convert acres to hectares correctly', () => {
      const result = convert(1, 'area', 'acre', 'hectare');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(0.404686, 4);
    });
  });

  describe('speed conversions', () => {
    it('should convert km/h to mph correctly', () => {
      const result = convert(100, 'speed', 'kilometer-per-hour', 'mile-per-hour');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(62.1371, 3);
    });

    it('should convert m/s to km/h correctly', () => {
      const result = convert(1, 'speed', 'meter-per-second', 'kilometer-per-hour');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(3.6, 4);
    });
  });

  describe('pressure conversions', () => {
    it('should convert PSI to bar correctly', () => {
      const result = convert(14.5038, 'pressure', 'psi', 'bar');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(1, 3);
    });

    it('should convert atmospheres to pascals correctly', () => {
      const result = convert(1, 'pressure', 'atmosphere', 'pascal');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(101325, 0);
    });
  });

  describe('energy conversions', () => {
    it('should convert joules to calories correctly', () => {
      const result = convert(4.184, 'energy', 'joule', 'calorie');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(1, 3);
    });

    it('should convert kWh to joules correctly', () => {
      const result = convert(1, 'energy', 'kilowatt-hour', 'joule');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(3600000, 0);
    });
  });

  describe('data storage conversions', () => {
    it('should convert gigabytes to megabytes correctly', () => {
      const result = convert(1, 'data-storage', 'gigabyte', 'megabyte');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(1000, 0);
    });

    it('should convert gibibytes to mebibytes correctly', () => {
      const result = convert(1, 'data-storage', 'gibibyte', 'mebibyte');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(1024, 0);
    });
  });

  describe('angle conversions', () => {
    it('should convert degrees to radians correctly', () => {
      const result = convert(180, 'angle', 'degree', 'radian');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(Math.PI, 4);
    });

    it('should convert radians to degrees correctly', () => {
      const result = convert(Math.PI, 'angle', 'radian', 'degree');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBeCloseTo(180, 4);
    });
  });

  describe('error handling', () => {
    it('should return null for unknown category', () => {
      const result = convert(1, 'unknown', 'meter', 'foot');
      expect(result).toBeNull();
    });

    it('should return null for unknown from unit', () => {
      const result = convert(1, 'length', 'unknown', 'foot');
      expect(result).toBeNull();
    });

    it('should return null for unknown to unit', () => {
      const result = convert(1, 'length', 'meter', 'unknown');
      expect(result).toBeNull();
    });
  });

  describe('same unit conversion', () => {
    it('should return same value when converting to same unit', () => {
      const result = convert(100, 'length', 'meter', 'meter');
      expect(result).not.toBeNull();
      expect(result!.to.value).toBe(100);
    });
  });
});

describe('getCategory function', () => {
  it('should return category for valid ID', () => {
    const category = getCategory('length');
    expect(category).not.toBeUndefined();
    expect(category!.name).toBe('Length');
  });

  it('should return undefined for invalid ID', () => {
    const category = getCategory('invalid');
    expect(category).toBeUndefined();
  });
});

describe('allCategories', () => {
  it('should have more than 50 categories', () => {
    expect(allCategories.length).toBeGreaterThan(50);
  });

  it('should have length category with multiple units', () => {
    const lengthCat = allCategories.find((c) => c.id === 'length');
    expect(lengthCat).toBeDefined();
    expect(lengthCat!.units.length).toBeGreaterThan(10);
  });

  it('should have unique category IDs', () => {
    const ids = allCategories.map((c) => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

describe('formatNumber function', () => {
  it('should format integers correctly', () => {
    expect(formatNumber(1000)).toBe('1,000');
  });

  it('should format decimals correctly', () => {
    const result = formatNumber(3.14159265);
    expect(result).toContain('3.14');
  });

  it('should use scientific notation for very large numbers', () => {
    const result = formatNumber(1e15);
    expect(result).toContain('e');
  });

  it('should use scientific notation for very small numbers', () => {
    const result = formatNumber(1e-10);
    expect(result).toContain('e');
  });

  it('should handle zero', () => {
    expect(formatNumber(0)).toBe('0');
  });
});
