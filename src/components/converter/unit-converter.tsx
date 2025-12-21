'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
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
import { ConversionResult } from '@/lib/converters/types';
import { convert, formatNumber, getPopularConversions, getCategory } from '@/lib/converters';

interface UnitConverterProps {
  categoryId: string;
  initialFromUnit?: string;
  initialToUnit?: string;
}

export function UnitConverter({
  categoryId,
  initialFromUnit,
  initialToUnit,
}: UnitConverterProps) {
  // Get category on the client side
  const category = useMemo(() => getCategory(categoryId), [categoryId]);

  const [fromUnit, setFromUnit] = useState<string>(
    initialFromUnit || category?.units[0]?.id || ''
  );
  const [toUnit, setToUnit] = useState<string>(
    initialToUnit || category?.units[1]?.id || ''
  );
  const [inputValue, setInputValue] = useState<string>('1');
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [copied, setCopied] = useState(false);

  const performConversion = useCallback(() => {
    if (!category) return;

    const numValue = parseFloat(inputValue);
    if (isNaN(numValue)) {
      setResult(null);
      return;
    }

    const conversionResult = convert(numValue, categoryId, fromUnit, toUnit);
    setResult(conversionResult);
  }, [inputValue, categoryId, fromUnit, toUnit, category]);

  useEffect(() => {
    performConversion();
  }, [performConversion]);

  // Update units when category changes
  useEffect(() => {
    if (category && !initialFromUnit) {
      setFromUnit(category.units[0]?.id || '');
    }
    if (category && !initialToUnit) {
      setToUnit(category.units[1]?.id || '');
    }
  }, [category, initialFromUnit, initialToUnit]);

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const copyResult = () => {
    if (result) {
      navigator.clipboard.writeText(formatNumber(result.to.value));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!category) {
    return <div>Category not found</div>;
  }

  const popularConversions = getPopularConversions(categoryId);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{category.name} Converter</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-[1fr,auto,1fr]">
            {/* From Unit */}
            <div className="space-y-2">
              <Label htmlFor="from-value">From</Label>
              <div className="flex gap-2">
                <Input
                  id="from-value"
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1"
                  placeholder="Enter value"
                />
              </div>
              <Select value={fromUnit} onValueChange={setFromUnit}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {category.units.map((unit) => (
                    <SelectItem key={unit.id} value={unit.id}>
                      {unit.name} ({unit.symbol})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Swap Button */}
            <div className="flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                onClick={swapUnits}
                className="mt-6"
              >
                <ArrowRightLeft className="h-4 w-4" />
                <span className="sr-only">Swap units</span>
              </Button>
            </div>

            {/* To Unit */}
            <div className="space-y-2">
              <Label htmlFor="to-value">To</Label>
              <div className="flex gap-2">
                <Input
                  id="to-value"
                  type="text"
                  value={result ? formatNumber(result.to.value) : ''}
                  readOnly
                  className="flex-1 bg-muted"
                  placeholder="Result"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyResult}
                  disabled={!result}
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="sr-only">Copy result</span>
                </Button>
              </div>
              <Select value={toUnit} onValueChange={setToUnit}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {category.units.map((unit) => (
                    <SelectItem key={unit.id} value={unit.id}>
                      {unit.name} ({unit.symbol})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Formula Display */}
          {result && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">Formula</p>
              <p className="text-sm text-muted-foreground font-mono">
                {result.formula}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Popular Conversions */}
      {popularConversions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Popular Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {popularConversions.map(({ from, to }) => {
                const fromUnitData = category.units.find((u) => u.id === from);
                const toUnitData = category.units.find((u) => u.id === to);
                if (!fromUnitData || !toUnitData) return null;

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
                    {fromUnitData.name} → {toUnitData.name}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Units Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">All {category.name} Units</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.units.map((unit) => (
              <div
                key={unit.id}
                className="p-3 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <p className="font-medium">{unit.name}</p>
                <p className="text-sm text-muted-foreground">{unit.symbol}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
