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
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
            {/* From Unit */}
            <div className="flex-1 rounded-xl border-2 border-gray-200 bg-gray-50/50 p-4 space-y-3 focus-within:border-primary focus-within:bg-white transition-colors">
              <Label htmlFor="from-value" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                From
              </Label>
              <Input
                id="from-value"
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full text-lg font-medium border-2 border-gray-300 focus:border-primary bg-white h-12"
                placeholder="Enter value"
                tabIndex={1}
              />
              <Select value={fromUnit} onValueChange={setFromUnit}>
                <SelectTrigger className="w-full border-2 border-gray-300 focus:border-primary bg-white h-11" tabIndex={2}>
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
            <div className="flex items-center justify-center py-2 lg:py-0 shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={swapUnits}
                className="h-10 w-10 rounded-full border-2 border-gray-300 hover:border-primary hover:bg-primary/5"
                tabIndex={5}
              >
                <ArrowRightLeft className="h-4 w-4" />
                <span className="sr-only">Swap units</span>
              </Button>
            </div>

            {/* To Unit */}
            <div className="flex-1 rounded-xl border-2 border-gray-200 bg-gray-50/50 p-4 space-y-3 focus-within:border-primary focus-within:bg-white transition-colors">
              <Label htmlFor="to-value" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                To
              </Label>
              <div className="flex gap-2">
                <Input
                  id="to-value"
                  type="text"
                  value={result ? formatNumber(result.to.value) : ''}
                  readOnly
                  className="flex-1 text-lg font-medium border-2 border-gray-300 bg-white h-12 text-primary"
                  placeholder="Result"
                  tabIndex={-1}
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyResult}
                  disabled={!result}
                  className="h-12 w-12 border-2 border-gray-300 hover:border-primary shrink-0"
                  tabIndex={4}
                >
                  {copied ? (
                    <Check className="h-5 w-5 text-green-600" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                  <span className="sr-only">Copy result</span>
                </Button>
              </div>
              <Select value={toUnit} onValueChange={setToUnit}>
                <SelectTrigger className="w-full border-2 border-gray-300 focus:border-primary bg-white h-11" tabIndex={3}>
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
