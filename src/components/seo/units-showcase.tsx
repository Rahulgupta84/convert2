'use client';

import { motion } from 'framer-motion';
import { Scale, Ruler, Thermometer, Droplets, Zap, Clock, Gauge, Box } from 'lucide-react';

interface Unit {
  id: string;
  name: string;
  symbol: string;
}

interface UnitsShowcaseProps {
  units: Unit[];
  categoryName: string;
}

// Get an icon based on category name
function getCategoryIcon(categoryName: string) {
  const name = categoryName.toLowerCase();
  if (name.includes('weight') || name.includes('mass')) return Scale;
  if (name.includes('length') || name.includes('distance')) return Ruler;
  if (name.includes('temperature')) return Thermometer;
  if (name.includes('volume') || name.includes('liquid')) return Droplets;
  if (name.includes('energy') || name.includes('power')) return Zap;
  if (name.includes('time')) return Clock;
  if (name.includes('pressure') || name.includes('speed')) return Gauge;
  return Box;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
};

export function UnitsShowcase({ units, categoryName }: UnitsShowcaseProps) {
  const Icon = getCategoryIcon(categoryName);

  return (
    <div className="rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Available {categoryName} Units
          </h3>
          <p className="text-sm text-muted-foreground">
            {units.length} units supported for instant conversion
          </p>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {units.map((unit) => (
          <motion.div
            key={unit.id}
            variants={itemVariants}
            className="group relative p-4 rounded-xl bg-white border border-gray-200 hover:border-primary hover:shadow-md transition-all cursor-default"
            whileHover={{ y: -2 }}
          >
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {unit.name}
              </span>
              <span className="text-sm text-muted-foreground font-mono">
                {unit.symbol}
              </span>
            </div>
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
