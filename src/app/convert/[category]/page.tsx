import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { UnitConverter } from '@/components/converter/unit-converter';
import { UnitsShowcase } from '@/components/seo/units-showcase';
import { ConverterSEOContent } from '@/components/seo/converter-seo-content';
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

  const title = `${category.name} Converter - Convert ${category.units.slice(0, 3).map(u => u.name).join(', ')} & More | Convert2`;
  const description = `Free online ${category.name.toLowerCase()} converter. Convert between ${category.units.length}+ units including ${category.units.slice(0, 5).map(u => u.name).join(', ')}. Instant, accurate results with formula display. Perfect for students, engineers, and professionals.`;

  return {
    title,
    description,
    keywords: [
      `${category.name.toLowerCase()} converter`,
      `convert ${category.name.toLowerCase()}`,
      `${category.name.toLowerCase()} calculator`,
      `${category.name.toLowerCase()} conversion tool`,
      `online ${category.name.toLowerCase()} converter`,
      `free ${category.name.toLowerCase()} converter`,
      ...category.units.slice(0, 10).map(u => `${u.name.toLowerCase()} conversion`),
      ...category.units.slice(0, 10).map(u => u.symbol),
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'Convert2',
    },
    twitter: {
      card: 'summary_large_image',
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

  // Find related categories from same group and other groups
  const currentGroup = categoryGroups.find(g =>
    g.categories.some(c => c.id === categoryId)
  );
  const relatedFromGroup = currentGroup?.categories.filter(c => c.id !== categoryId).slice(0, 5) || [];

  // Get some from other groups too
  const otherCategories = allCategories
    .filter(c => c.id !== categoryId && !relatedFromGroup.find(r => r.id === c.id))
    .slice(0, 5);

  const relatedCategories = [...relatedFromGroup, ...otherCategories].slice(0, 10);

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${category.name} Converter - Convert2`,
    description: category.description,
    url: `https://convert2.vercel.app/convert/${categoryId}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: category.units.map(u => `Convert ${u.name}`),
    author: {
      '@type': 'Organization',
      name: 'Darthwares',
      url: 'https://darthwares.com',
    },
  };

  // FAQ structured data for AEO (Answer Engine Optimization)
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How do I convert ${category.units[0]?.name} to ${category.units[1]?.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `To convert ${category.units[0]?.name} to ${category.units[1]?.name}, enter your value in the converter above and select the appropriate units. The conversion is calculated instantly using precise conversion factors.`,
        },
      },
      {
        '@type': 'Question',
        name: `What ${category.name.toLowerCase()} units can I convert?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Convert2 supports ${category.units.length} different ${category.name.toLowerCase()} units including ${category.units.slice(0, 5).map(u => u.name).join(', ')}, and more. All conversions are calculated using internationally recognized standards.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is the ${category.name.toLowerCase()} converter free to use?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, Convert2's ${category.name.toLowerCase()} converter is completely free with no registration required. You can perform unlimited conversions with instant, accurate results.`,
        },
      },
      {
        '@type': 'Question',
        name: `How accurate is the ${category.name.toLowerCase()} converter?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Our ${category.name.toLowerCase()} converter uses precise conversion factors based on international measurement standards. Results are calculated to high precision, suitable for professional, scientific, and everyday use.`,
        },
      },
    ],
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://convert2.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Converters',
        item: 'https://convert2.vercel.app/converters',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${category.name} Converter`,
        item: `https://convert2.vercel.app/convert/${categoryId}`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/converters" className="hover:text-foreground transition-colors">Converters</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{category.name}</span>
        </nav>

        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{category.name} Converter</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {category.description} Convert between {category.units.length} different units instantly with our free online tool.
          </p>
        </header>

        {/* Main Converter Tool */}
        <section aria-label="Unit Converter Tool">
          <UnitConverter categoryId={categoryId} />
        </section>

        {/* Units Showcase - Elegant grid display */}
        <section className="mt-12" aria-label="Available Units">
          <UnitsShowcase
            units={category.units.map(u => ({ id: u.id, name: u.name, symbol: u.symbol }))}
            categoryName={category.name}
          />
        </section>

        {/* Comprehensive SEO Content */}
        <section className="mt-12" aria-label="About This Converter">
          <ConverterSEOContent
            category={{
              id: category.id,
              name: category.name,
              description: category.description,
              units: category.units.map(u => ({ id: u.id, name: u.name, symbol: u.symbol })),
            }}
            relatedCategories={relatedCategories}
          />
        </section>
      </div>
    </>
  );
}
