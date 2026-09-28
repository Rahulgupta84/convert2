'use client';

import { useState, useMemo } from 'react';
import { ArrowRightLeft, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { convert, formatNumber, getPopularConversions, getCategory } from '@/lib/converters';
import type { Unit } from '@/lib/converters/types';

interface UnitConverterProps {
  categoryId: string;
  initialFromUnit?: string;
  initialToUnit?: string;
  compact?: boolean;
}

function UnitSelect({
  id,
  label,
  value,
  onChange,
  units,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  units: Unit[];
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger id={id} aria-label={label} className="w-full h-11 bg-background">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {units.map((unit) => (
          <SelectItem key={unit.id} value={unit.id}>
            {unit.name} ({unit.symbol})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function UnitConverter({
  categoryId,
  initialFromUnit,
  initialToUnit,
  compact = false,
}: UnitConverterProps) {
  const category = useMemo(() => getCategory(categoryId), [categoryId]);

  const [fromUnit, setFromUnit] = useState<string>(
    initialFromUnit || category?.units[0]?.id || ''
  );
  const [toUnit, setToUnit] = useState<string>(
    initialToUnit || category?.units[1]?.id || ''
  );
  const [inputValue, setInputValue] = useState<string>('1');
  const [copied, setCopied] = useState(false);

  const numericValue = parseFloat(inputValue.replace(',', '.'));
  const result = Number.isNaN(numericValue)
    ? null
    : convert(numericValue, categoryId, fromUnit, toUnit);

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const copyResult = () => {
    if (!result) return;
    navigator.clipboard.writeText(formatNumber(result.to.value));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!category) {
    return <p className="text-destructive">Category not found</p>;
  }

  const fromUnitData = category.units.find((u) => u.id === fromUnit);
  const toUnitData = category.units.find((u) => u.id === toUnit);
  const popularConversions = compact ? [] : getPopularConversions(categoryId);

  const converterBody = (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3 md:items-end">
        <div className="flex-1 space-y-2">
          <Label htmlFor={`${categoryId}-from-value`} className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            From
          </Label>
          <Input
            id={`${categoryId}-from-value`}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="h-12 text-lg font-medium bg-background"
            placeholder="Enter value"
          />
          <UnitSelect
            id={`${categoryId}-from-unit`}
            label="From unit"
            value={fromUnit}
            onChange={setFromUnit}
            units={category.units}
          />
        </div>

        <div className="flex justify-center md:pb-1">
          <Button
            variant="outline"
            size="icon"
            onClick={swapUnits}
            className="h-10 w-10 rounded-full rotate-90 md:rotate-0"
          >
            <ArrowRightLeft className="h-4 w-4" />
            <span className="sr-only">Swap units</span>
          </Button>
        </div>

        <div className="flex-1 space-y-2">
          <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            To
          </span>
          <UnitSelect
            id={`${categoryId}-to-unit`}
            label="To unit"
            value={toUnit}
            onChange={setToUnit}
            units={category.units}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-lg bg-primary/5 border border-primary/20 px-4 py-4">
        <output
          aria-live="polite"
          className="flex-1 min-w-0 break-words"
          htmlFor={`${categoryId}-from-value ${categoryId}-from-unit ${categoryId}-to-unit`}
        >
          {result ? (
            <>
              <span className="text-sm text-muted-foreground">
                {formatNumber(result.from.value)} {fromUnitData?.symbol} =
              </span>
              <span className="block text-3xl md:text-4xl font-bold text-primary tabular-nums">
                {formatNumber(result.to.value)}{' '}
                <span className="text-xl md:text-2xl font-semibold">{toUnitData?.symbol}</span>
              </span>
            </>
          ) : (
            <span className="text-muted-foreground">Enter a number to convert</span>
          )}
        </output>
        <Button variant="outline" size="icon" onClick={copyResult} disabled={!result} className="shrink-0">
          {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">{copied ? 'Copied' : 'Copy result'}</span>
        </Button>
      </div>

      {result && (
        <p className="text-sm text-muted-foreground font-mono">
          <span className="sr-only">Formula: </span>
          {result.formula}
        </p>
      )}
    </div>
  );

  if (compact) return converterBody;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{category.name} Converter</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent>{converterBody}</CardContent>
      </Card>

      {popularConversions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Popular Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {popularConversions.map(({ from, to }) => {
                const f = category.units.find((u) => u.id === from);
                const t = category.units.find((u) => u.id === to);
                if (!f || !t) return null;
                return (
                  <Button
                    key={`${from}-${to}`}
                    variant="outline"
                    className="justify-start"
                    onClick={() => {
                      setFromUnit(from);
                      setToUnit(to);
                    }}
                  >
                    {f.name} → {t.name}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            1 {fromUnitData?.name} in all {category.name} units
          </CardTitle>
          <CardDescription>Click a unit to convert to it.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.units.map((unit) => {
              const ref = convert(1, categoryId, fromUnit, unit.id);
              const isActive = unit.id === toUnit;
              return (
                <li key={unit.id}>
                  <button
                    type="button"
                    onClick={() => setToUnit(unit.id)}
                    aria-pressed={isActive}
                    className={`w-full text-left p-3 border rounded-lg transition-colors hover:border-primary hover:bg-primary/5 ${
                      isActive ? 'border-primary bg-primary/5' : ''
                    }`}
                  >
                    <span className="block font-medium">{unit.name}</span>
                    <span className="block text-sm text-muted-foreground tabular-nums truncate">
                      {ref ? formatNumber(ref.to.value) : '—'} {unit.symbol}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
