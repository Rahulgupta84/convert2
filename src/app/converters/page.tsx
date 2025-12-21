import { Metadata } from 'next';
import Link from 'next/link';
import { categoryGroups, allCategories } from '@/lib/converters';

export const metadata: Metadata = {
  title: 'All Unit Converters - Browse 79+ Conversion Categories',
  description: `Browse all ${allCategories.length}+ unit converter categories. Convert length, weight, temperature, volume, area, speed, pressure, energy, and many more units online for free.`,
  keywords: [
    'unit converters',
    'conversion tools',
    'metric converter',
    'imperial converter',
    'measurement converter',
    'online calculators',
  ],
  alternates: {
    canonical: '/converters',
  },
};

export default function ConvertersPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">All Unit Converters</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Browse our complete collection of {allCategories.length}+ unit conversion tools.
        Each converter provides accurate, instant results.
      </p>

      <div className="grid gap-10">
        {categoryGroups.map((group) => (
          <section key={group.name}>
            <h2 className="text-2xl font-semibold mb-4">{group.name}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/convert/${cat.id}`}
                  className="group p-4 border rounded-lg hover:border-primary hover:bg-muted/50 transition-all"
                >
                  <h3 className="font-medium group-hover:text-primary transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {cat.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {cat.units.length} units
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* SEO Content */}
      <section className="mt-16 prose prose-gray dark:prose-invert max-w-none">
        <h2>About Our Unit Converters</h2>
        <p>
          UnitConvert provides a comprehensive suite of {allCategories.length}+ unit conversion
          tools organized into {categoryGroups.length} categories. Our converters cover everything
          from everyday measurements like length, weight, and temperature to specialized
          engineering and scientific units.
        </p>

        <h3>Converter Categories</h3>
        <ul>
          {categoryGroups.map((group) => (
            <li key={group.name}>
              <strong>{group.name}</strong>: {group.categories.map(c => c.name).join(', ')}
            </li>
          ))}
        </ul>

        <h3>API Access</h3>
        <p>
          All our converters are also available via a free API. You can integrate unit
          conversion into your own applications, or use our MCP server to enable AI
          assistants to perform conversions directly. See our{' '}
          <Link href="/api-docs">API documentation</Link> for details.
        </p>
      </section>
    </div>
  );
}
