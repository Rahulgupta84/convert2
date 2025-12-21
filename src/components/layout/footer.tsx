import Link from 'next/link';
import { Calculator } from 'lucide-react';
import { categoryGroups } from '@/lib/converters';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Calculator className="h-6 w-6" />
              <span className="font-bold">UnitConvert</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free online unit converter with 79+ categories and 1000+ units.
              Accurate, fast, and easy to use.
            </p>
          </div>

          {categoryGroups.slice(0, 4).map((group) => (
            <div key={group.name}>
              <h3 className="font-medium mb-3">{group.name}</h3>
              <ul className="space-y-2">
                {group.categories.slice(0, 6).map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/convert/${cat.id}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} UnitConvert. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="/api-docs"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              API Documentation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
