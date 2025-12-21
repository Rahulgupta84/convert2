import { UnitCategory } from '../types';

// Temperature uses special conversion functions
export const temperatureCategory: UnitCategory = {
  id: 'temperature',
  name: 'Temperature',
  description: 'Convert between different temperature scales',
  icon: 'Thermometer',
  baseUnit: 'kelvin',
  units: [
    {
      id: 'kelvin',
      name: 'Kelvin',
      symbol: 'K',
      toBase: (v: number) => v,
      fromBase: (v: number) => v
    },
    {
      id: 'celsius',
      name: 'Celsius',
      symbol: '°C',
      toBase: (v: number) => v + 273.15,
      fromBase: (v: number) => v - 273.15
    },
    {
      id: 'fahrenheit',
      name: 'Fahrenheit',
      symbol: '°F',
      toBase: (v: number) => (v + 459.67) * 5 / 9,
      fromBase: (v: number) => v * 9 / 5 - 459.67
    },
    {
      id: 'rankine',
      name: 'Rankine',
      symbol: '°R',
      toBase: (v: number) => v * 5 / 9,
      fromBase: (v: number) => v * 9 / 5
    },
    {
      id: 'reaumur',
      name: 'Réaumur',
      symbol: '°Ré',
      toBase: (v: number) => v * 1.25 + 273.15,
      fromBase: (v: number) => (v - 273.15) * 0.8
    },
    {
      id: 'delisle',
      name: 'Delisle',
      symbol: '°De',
      toBase: (v: number) => 373.15 - v * 2 / 3,
      fromBase: (v: number) => (373.15 - v) * 3 / 2
    },
    {
      id: 'newton',
      name: 'Newton',
      symbol: '°N',
      toBase: (v: number) => v * 100 / 33 + 273.15,
      fromBase: (v: number) => (v - 273.15) * 33 / 100
    },
    {
      id: 'romer',
      name: 'Rømer',
      symbol: '°Rø',
      toBase: (v: number) => (v - 7.5) * 40 / 21 + 273.15,
      fromBase: (v: number) => (v - 273.15) * 21 / 40 + 7.5
    },
  ],
};
