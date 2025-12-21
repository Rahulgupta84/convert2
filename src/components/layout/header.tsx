'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { categoryGroups } from '@/lib/converters';

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                  <Calculator className="h-5 w-5" />
                  UnitConvert
                </Link>
                {categoryGroups.map((group) => (
                  <div key={group.name} className="space-y-2">
                    <h3 className="font-medium text-sm text-muted-foreground">
                      {group.name}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {group.categories.slice(0, 5).map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/convert/${cat.id}`}
                          className="text-sm hover:underline"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            <span className="font-bold text-xl hidden sm:inline">UnitConvert</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link href="/converters" className="text-sm font-medium hover:underline">
              All Converters
            </Link>
            <Link href="/api-docs" className="text-sm font-medium hover:underline">
              API
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {searchOpen ? (
            <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder="Search units..."
                className="w-48 sm:w-64"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
