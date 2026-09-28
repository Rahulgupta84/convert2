import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { categoryGroups, allCategories, totalUnitCount } from '@/lib/converters';
import { HeroConverter } from '@/components/converter/hero-converter';

const popularConverters = [
  { id: 'length', name: 'Length', example: 'cm to inches' },
  { id: 'weight', name: 'Weight', example: 'kg to lbs' },
  { id: 'temperature', name: 'Temperature', example: '°C to °F' },
  { id: 'volume', name: 'Volume', example: 'liters to gallons' },
  { id: 'area', name: 'Area', example: 'm² to ft²' },
  { id: 'speed', name: 'Speed', example: 'km/h to mph' },
  { id: 'pressure', name: 'Pressure', example: 'psi to bar' },
  { id: 'energy', name: 'Energy', example: 'joules to calories' },
];

const unitCount = totalUnitCount.toLocaleString('en-US');

const faqs = [
  {
    q: 'Is this unit converter free to use?',
    a: 'Yes. No registration, no limits.',
  },
  {
    q: 'How accurate are the conversions?',
    a: 'Conversion factors follow international measurement standards (SI and NIST definitions), and every result shows the formula used.',
  },
  {
    q: 'Which units are supported?',
    a: `${unitCount} units across ${allCategories.length} categories, from everyday length and weight to engineering, science and computing.`,
  },
  {
    q: 'Can I use it from my own app or AI assistant?',
    a: 'Yes. There is a REST API and an MCP server. See the API documentation for details.',
  },
];

export default function HomePage() {
  return (
    <div className="container py-8 md:py-12 space-y-14 md:space-y-20">
      <section className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">
            Convert any unit, <span className="text-primary">instantly</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl text-pretty mb-6">
            {allCategories.length} categories and {unitCount} units, with the formula
            shown for every result. Free, fast and available as an API.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <Link href="/converters" className="inline-flex items-center gap-1 text-primary hover:underline">
              Browse all converters <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/api-docs" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
              API documentation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <HeroConverter />
      </section>

      <section aria-labelledby="popular-heading">
        <h2 id="popular-heading" className="text-2xl font-bold mb-5">Popular converters</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {popularConverters.map((item) => (
            <li key={item.id}>
              <Link
                href={`/convert/${item.id}`}
                className="group flex h-full flex-col rounded-lg border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="font-semibold group-hover:text-primary">{item.name}</span>
                <span className="text-sm text-muted-foreground">{item.example}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="all-heading">
        <h2 id="all-heading" className="text-2xl font-bold mb-5">All converters</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categoryGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                {group.name}
              </h3>
              <ul className="space-y-1.5">
                {group.categories.map((cat) => (
                  <li key={cat.id}>
                    <Link href={`/convert/${cat.id}`} className="text-sm hover:text-primary hover:underline">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="max-w-3xl">
        <h2 id="faq-heading" className="text-2xl font-bold mb-5">Frequently asked questions</h2>
        <dl className="divide-y border-y">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-4">
              <dt className="font-semibold mb-1">{faq.q}</dt>
              <dd className="text-sm text-muted-foreground leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
