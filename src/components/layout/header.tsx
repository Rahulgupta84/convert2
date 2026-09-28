import Link from 'next/link';
import { Menu, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { SiteSearch } from '@/components/layout/site-search';
import { categoryGroups } from '@/lib/converters';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav className="flex flex-col gap-6 p-4">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                  <Calculator className="h-5 w-5 text-primary" />
                  Unit Converter
                </Link>
                <div className="flex flex-col gap-2 text-sm font-medium">
                  <Link href="/converters" className="hover:text-primary">All Converters</Link>
                  <Link href="/api-docs" className="hover:text-primary">API</Link>
                </div>
                {categoryGroups.map((group) => (
                  <div key={group.name} className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {group.name}
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      {group.categories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/convert/${cat.id}`}
                          className="text-sm hover:text-primary"
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
            <Calculator className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline">Unit Converter</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-4">
            <Link href="/converters" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              All Converters
            </Link>
            <Link href="/api-docs" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              API
            </Link>
          </nav>
        </div>

        <SiteSearch />
      </div>
    </header>
  );
}
