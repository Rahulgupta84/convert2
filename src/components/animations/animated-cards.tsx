'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

// Animation variants for staggered card appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

// Animated container for staggered children
export function AnimatedCardGrid({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  );
}

// Animated card wrapper
export function AnimatedCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={cardVariants}>
      {children}
    </motion.div>
  );
}

// Feature card with animated icon
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function AnimatedFeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="group rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="mb-4 text-primary"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
}

// Converter link card with better styling
interface ConverterCardProps {
  href: string;
  name: string;
  example?: string;
}

export function AnimatedConverterCard({ href, name, example }: ConverterCardProps) {
  return (
    <motion.div variants={cardVariants}>
      <Link href={href}>
        <motion.div
          className="group relative p-4 rounded-xl border-2 border-transparent bg-gradient-to-br from-white to-gray-50 shadow-sm overflow-hidden"
          whileHover={{
            scale: 1.02,
            borderColor: 'var(--primary)',
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Arrow indicator */}
          <motion.div
            className="absolute right-3 top-1/2 -translate-y-1/2 text-primary opacity-0 group-hover:opacity-100"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>

          <div className="relative">
            <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors pr-6">
              {name}
            </h3>
            {example && (
              <p className="text-sm text-muted-foreground mt-1">{example}</p>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// Simple category link for the "All Converters" section
export function AnimatedCategoryLink({ href, name }: { href: string; name: string }) {
  return (
    <motion.div variants={cardVariants}>
      <Link href={href}>
        <motion.div
          className="group p-3 rounded-lg border border-gray-200 bg-white hover:border-primary hover:bg-primary/5 transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">
            {name}
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
