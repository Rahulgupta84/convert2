import { UnitCategory } from '../types';

export const dataTransferCategory: UnitCategory = {
  id: 'data-transfer',
  name: 'Data Transfer Rate',
  description: 'Convert between different units of data transfer speed',
  icon: 'Wifi',
  baseUnit: 'bit-per-second',
  units: [
    { id: 'bit-per-second', name: 'Bit per Second', symbol: 'bps', toBase: 1, fromBase: 1 },
    { id: 'kilobit-per-second', name: 'Kilobit per Second', symbol: 'Kbps', toBase: 1000, fromBase: 0.001 },
    { id: 'kibibit-per-second', name: 'Kibibit per Second', symbol: 'Kibps', toBase: 1024, fromBase: 1 / 1024 },
    { id: 'megabit-per-second', name: 'Megabit per Second', symbol: 'Mbps', toBase: 1000000, fromBase: 0.000001 },
    { id: 'mebibit-per-second', name: 'Mebibit per Second', symbol: 'Mibps', toBase: 1048576, fromBase: 1 / 1048576 },
    { id: 'gigabit-per-second', name: 'Gigabit per Second', symbol: 'Gbps', toBase: 1e9, fromBase: 1e-9 },
    { id: 'gibibit-per-second', name: 'Gibibit per Second', symbol: 'Gibps', toBase: 1073741824, fromBase: 1 / 1073741824 },
    { id: 'terabit-per-second', name: 'Terabit per Second', symbol: 'Tbps', toBase: 1e12, fromBase: 1e-12 },
    { id: 'byte-per-second', name: 'Byte per Second', symbol: 'B/s', toBase: 8, fromBase: 0.125 },
    { id: 'kilobyte-per-second', name: 'Kilobyte per Second', symbol: 'KB/s', toBase: 8000, fromBase: 0.000125 },
    { id: 'kibibyte-per-second', name: 'Kibibyte per Second', symbol: 'KiB/s', toBase: 8192, fromBase: 1 / 8192 },
    { id: 'megabyte-per-second', name: 'Megabyte per Second', symbol: 'MB/s', toBase: 8000000, fromBase: 1.25e-7 },
    { id: 'mebibyte-per-second', name: 'Mebibyte per Second', symbol: 'MiB/s', toBase: 8388608, fromBase: 1 / 8388608 },
    { id: 'gigabyte-per-second', name: 'Gigabyte per Second', symbol: 'GB/s', toBase: 8e9, fromBase: 1.25e-10 },
    { id: 'gibibyte-per-second', name: 'Gibibyte per Second', symbol: 'GiB/s', toBase: 8589934592, fromBase: 1 / 8589934592 },
    { id: 'terabyte-per-second', name: 'Terabyte per Second', symbol: 'TB/s', toBase: 8e12, fromBase: 1.25e-13 },
  ],
};
