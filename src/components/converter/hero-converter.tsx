'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { UnitConverter } from '@/components/converter/unit-converter';
import { getCategory } from '@/lib/converters';

const quickCategories = ['length', 'weight', 'temperature', 'volume', 'area', 'speed'];

export function HeroConverter() {
  const [categoryId, setCategoryId] = useState(quickCategories[0]);
  const category = getCategory(categoryId);

  return (
    <div className="rounded-xl border bg-card p-4 md:p-6 shadow-sm">
      <div role="tablist" aria-label="Converter category" className="flex flex-wrap gap-2 mb-5">
        {quickCategories.map((id) => {
          const cat = getCategory(id);
          const selected = id === categoryId;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setCategoryId(id)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium border transition-colors ${
                selected
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {cat?.name}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" aria-label={`${category?.name} converter`}>
        <UnitConverter key={categoryId} categoryId={categoryId} compact />
      </div>

      <Link
        href={`/convert/${categoryId}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        Full {category?.name.toLowerCase()} converter and reference table
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
