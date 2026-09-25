import Link from 'next/link';
import { Calculator, ExternalLink, Heart } from 'lucide-react';
import { categoryGroups, allCategories } from '@/lib/converters';

// Partner sites for backlinks
const partnerSites = [
  {
    name: 'Darthwares',
    url: 'https://darthwares.com',
    description: 'Software Development Studio',
  },
  {
    name: 'LeetCV',
    url: 'https://leetcv.com',
    description: 'AI-Powered Resume Builder',
  },
  {
    name: 'LeetCampus',
    url: 'https://leetcampus.com',
    description: 'Tech Interview Preparation',
  },
  {
    name: 'Idea2.work',
    url: 'https://idea2.work',
    description: 'Turn Ideas into Products',
  },
];

// Popular converters for quick access
const popularConverters = [
  'length',
  'weight',
  'temperature',
  'volume',
  'area',
  'speed',
  'pressure',
  'energy',
  'time',
  'data-storage',
];

export function Footer() {
  const popularCategories = allCategories.filter((cat) =>
    popularConverters.includes(cat.id)
  );

  return (
    <footer className="border-t bg-gradient-to-b from-muted/30 to-muted/60">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Calculator className="h-7 w-7 text-primary" />
              <span className="font-bold text-xl">Convert2</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Free online unit converter with {allCategories.length}+ categories and 1000+ units.
              Accurate, fast, and optimized for both humans and AI assistants.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with precision for students, professionals, engineers, and developers.
              All conversions use internationally recognized standards.
            </p>
          </div>

          {/* Popular Converters */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Popular Converters
            </h3>
            <ul className="space-y-2.5">
              {popularCategories.slice(0, 8).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/convert/${cat.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Converters */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              More Categories
            </h3>
            <ul className="space-y-2.5">
              {categoryGroups.map((group) => (
                <li key={group.name}>
                  <span className="text-sm text-muted-foreground">
                    {group.name} ({group.categories.length})
                  </span>
                </li>
              ))}
              <li>
                <Link
                  href="/converters"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  View All Converters
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Resources
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/api-docs"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  API Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/converters"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  All Converters
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner Sites / Backlinks */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Our Products
            </h3>
            <ul className="space-y-3">
              {partnerSites.map((site) => (
                <li key={site.name}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener"
                    className="group block"
                  >
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                      {site.name}
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </span>
                    <span className="text-xs text-muted-foreground/70">
                      {site.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Converter Categories Grid */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider text-muted-foreground">
            All Converter Categories
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2">
            {allCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/convert/${cat.id}`}
                className="text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 py-1.5 rounded transition-colors truncate"
                title={cat.name}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-muted/50">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
              <span>&copy; {new Date().getFullYear()} Convert2. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> by{' '}
                <a
                  href="https://darthwares.com"
                  target="_blank"
                  rel="noopener"
                  className="text-primary hover:underline"
                >
                  Darthwares
                </a>
              </span>
              <span>Created by Rahul Gupta</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Chibionos/convert2"
                target="_blank"
                rel="noopener"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <Link
                href="/api-docs"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                API
              </Link>
              <a
                href="mailto:support@darthwares.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
