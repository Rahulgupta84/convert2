import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { UnitConverter } from '@/components/converter/unit-converter';
import { getCategory, allCategories, categoryGroups } from '@/lib/converters';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return allCategories.map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = getCategory(categoryId);

  if (!category) {
    return {
      title: 'Converter Not Found',
    };
  }

  const title = `${category.name} Converter - Convert ${category.units.slice(0, 3).map(u => u.name).join(', ')} & More`;
  const description = `Free online ${category.name.toLowerCase()} converter. Convert between ${category.units.length}+ units including ${category.units.slice(0, 5).map(u => u.name).join(', ')}. Fast, accurate, and easy to use.`;

  return {
    title,
    description,
    keywords: [
      `${category.name.toLowerCase()} converter`,
      `convert ${category.name.toLowerCase()}`,
      ...category.units.slice(0, 10).map(u => u.name.toLowerCase()),
      ...category.units.slice(0, 10).map(u => u.symbol),
    ],
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: `/convert/${categoryId}`,
    },
  };
}

export default async function ConverterPage({ params }: PageProps) {
  const { category: categoryId } = await params;
  const category = getCategory(categoryId);

  if (!category) {
    notFound();
  }

  // Find related categories
  const currentGroup = categoryGroups.find(g =>
    g.categories.some(c => c.id === categoryId)
  );
  const relatedCategories = currentGroup?.categories.filter(c => c.id !== categoryId).slice(0, 5) || [];

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${category.name} Converter`,
    description: category.description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: category.units.map(u => `Convert ${u.name}`),
  };

  // FAQ structured data for AEO
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How do I convert ${category.units[0]?.name} to ${category.units[1]?.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `To convert ${category.units[0]?.name} to ${category.units[1]?.name}, enter your value in the converter above and select the appropriate units. The conversion is calculated instantly.`,
        },
      },
      {
        '@type': 'Question',
        name: `What ${category.name.toLowerCase()} units can I convert?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You can convert between ${category.units.length} different ${category.name.toLowerCase()} units including ${category.units.slice(0, 5).map(u => u.name).join(', ')}, and more.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/converters" className="hover:text-foreground">Converters</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{category.name}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name} Converter</h1>
        <p className="text-lg text-muted-foreground mb-8">{category.description}</p>

        <UnitConverter categoryId={categoryId} />

        {/* Related Converters */}
        {relatedCategories.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Related Converters</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {relatedCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/convert/${cat.id}`}
                  className="p-3 border rounded-lg hover:border-primary hover:bg-muted/50 transition-all"
                >
                  <span className="font-medium">{cat.name}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* SEO Content */}
        <section className="mt-12 prose prose-gray dark:prose-invert max-w-none">
          <h2>About {category.name} Conversion</h2>
          <p>
            This free online {category.name.toLowerCase()} converter helps you convert between
            {category.units.length} different units of {category.name.toLowerCase()}. Whether you
            need to convert {category.units[0]?.name} to {category.units[1]?.name} or any other
            combination, our calculator provides instant, accurate results.
          </p>

          <h3>Available {category.name} Units</h3>
          <p>
            Our {category.name.toLowerCase()} converter supports the following units:
          </p>
          <ul>
            {category.units.map((unit) => (
              <li key={unit.id}>
                <strong>{unit.name}</strong> ({unit.symbol})
              </li>
            ))}
          </ul>

          <h3>How to Use This Converter</h3>
          <ol>
            <li>Enter the value you want to convert in the &quot;From&quot; field</li>
            <li>Select the unit you&apos;re converting from using the dropdown</li>
            <li>Select the unit you want to convert to</li>
            <li>The result is calculated instantly</li>
            <li>Click the copy button to copy the result to your clipboard</li>
          </ol>
        </section>
      </div>
    </>
  );
}
