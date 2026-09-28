'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { allCategories, searchUnits } from '@/lib/converters';

export function SiteSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const normalized = query.trim().toLowerCase();
  const categoryMatches = useMemo(
    () =>
      normalized
        ? allCategories.filter((c) => c.name.toLowerCase().includes(normalized))
        : allCategories.slice(0, 8),
    [normalized]
  );
  const unitMatches = useMemo(
    () => (normalized.length >= 1 ? searchUnits(normalized).slice(0, 30) : []),
    [normalized]
  );

  const go = (href: string) => {
    setOpen(false);
    setQuery('');
    router.push(href);
  };

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="h-9 gap-2 text-muted-foreground font-normal sm:w-56 sm:justify-start px-2.5"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search units...</span>
        <kbd className="ml-auto hidden sm:inline rounded border bg-muted px-1.5 text-[10px] font-medium [font-family:system-ui,sans-serif]">
          {'⌘K'}
        </kbd>
        <span className="sr-only sm:hidden">Search units</span>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search converters"
        description="Search for a unit or converter category"
      >
        <CommandInput
          placeholder="Try “inch”, “psi” or “temperature”..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList className="max-h-[360px]">
          <CommandEmpty>No units found.</CommandEmpty>
          {categoryMatches.length > 0 && (
            <CommandGroup heading={normalized ? 'Categories' : 'Popular categories'}>
              {categoryMatches.map((cat) => (
                <CommandItem
                  key={cat.id}
                  value={`category-${cat.id}`}
                  onSelect={() => go(`/convert/${cat.id}`)}
                >
                  {cat.name}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          {unitMatches.length > 0 && (
            <CommandGroup heading="Units">
              {unitMatches.map(({ category, unit }) => (
                <CommandItem
                  key={`${category.id}-${unit.id}`}
                  value={`unit-${category.id}-${unit.id}`}
                  onSelect={() => go(`/convert/${category.id}`)}
                >
                  <span>
                    {unit.name} <span className="text-muted-foreground">({unit.symbol})</span>
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">{category.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
