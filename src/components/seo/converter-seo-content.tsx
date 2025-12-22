import { Calculator, Zap, Globe, Shield, Bot, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Unit {
  id: string;
  name: string;
  symbol: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  units: Unit[];
}

interface ConverterSEOContentProps {
  category: Category;
  relatedCategories: { id: string; name: string }[];
}

// Generate common conversion examples
function getConversionExamples(units: Unit[]): string[] {
  const examples: string[] = [];
  const popularUnits = units.slice(0, 6);

  for (let i = 0; i < Math.min(3, popularUnits.length - 1); i++) {
    examples.push(`${popularUnits[i].name} to ${popularUnits[i + 1].name}`);
  }

  return examples;
}

export function ConverterSEOContent({ category, relatedCategories }: ConverterSEOContentProps) {
  const conversionExamples = getConversionExamples(category.units);

  return (
    <div className="space-y-12">
      {/* About Section */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">About {category.name} Conversion</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our free online {category.name.toLowerCase()} converter is designed to help you quickly and
          accurately convert between {category.units.length} different units of {category.name.toLowerCase()}.
          Whether you&apos;re a student, professional, or simply need to make everyday conversions,
          our tool provides instant, precise results with real-time calculations.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {category.description} This converter supports both metric and imperial units,
          making it ideal for international use. All conversions are calculated using
          internationally recognized standards and formulas.
        </p>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Why Use Our {category.name} Converter?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow">
            <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-3">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="font-semibold mb-2">Instant Results</h3>
            <p className="text-sm text-muted-foreground">
              Get real-time conversions as you type. No need to click buttons or wait for calculations.
            </p>
          </div>
          <div className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow">
            <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-3">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="font-semibold mb-2">High Precision</h3>
            <p className="text-sm text-muted-foreground">
              Calculations use precise conversion factors based on international measurement standards.
            </p>
          </div>
          <div className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow">
            <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-3">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="font-semibold mb-2">{category.units.length}+ Units</h3>
            <p className="text-sm text-muted-foreground">
              Convert between {category.units.length} different {category.name.toLowerCase()} units from around the world.
            </p>
          </div>
          <div className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow">
            <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-3">
              <Bot className="h-5 w-5" />
            </div>
            <h3 className="font-semibold mb-2">AI Integration</h3>
            <p className="text-sm text-muted-foreground">
              MCP server support allows AI assistants to perform conversions programmatically.
            </p>
          </div>
        </div>
      </section>

      {/* Common Conversions */}
      {conversionExamples.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Common {category.name} Conversions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {conversionExamples.map((example, index) => (
              <div key={index} className="p-4 rounded-xl border bg-muted/30 flex items-center gap-3">
                <Calculator className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium">{example}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* How to Use */}
      <section>
        <h2 className="text-2xl font-bold mb-6">How to Use This {category.name} Converter</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: '1', title: 'Enter Value', desc: 'Type the number you want to convert' },
            { step: '2', title: 'Select From Unit', desc: 'Choose your starting unit' },
            { step: '3', title: 'Select To Unit', desc: 'Pick your target unit' },
            { step: '4', title: 'View Result', desc: 'See instant conversion' },
            { step: '5', title: 'Copy Result', desc: 'Click to copy to clipboard' },
          ].map((item) => (
            <div key={item.step} className="relative p-4 rounded-xl border bg-card text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {item.step}
              </div>
              <h3 className="font-semibold mt-2 mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-5 rounded-xl border bg-card">
            <h3 className="font-semibold mb-2">
              How accurate is this {category.name.toLowerCase()} converter?
            </h3>
            <p className="text-muted-foreground">
              Our converter uses precise conversion factors based on international standards.
              Results are calculated to high precision and suitable for professional use,
              scientific calculations, and everyday conversions.
            </p>
          </div>
          <div className="p-5 rounded-xl border bg-card">
            <h3 className="font-semibold mb-2">
              Is this {category.name.toLowerCase()} converter free to use?
            </h3>
            <p className="text-muted-foreground">
              Yes, Convert2 is completely free to use. There are no hidden fees, no registration
              required, and no limits on the number of conversions you can perform.
            </p>
          </div>
          <div className="p-5 rounded-xl border bg-card">
            <h3 className="font-semibold mb-2">
              Can I use this converter on mobile devices?
            </h3>
            <p className="text-muted-foreground">
              Absolutely! Our converter is fully responsive and works perfectly on smartphones,
              tablets, and desktop computers. The interface automatically adapts to your screen size.
            </p>
          </div>
          <div className="p-5 rounded-xl border bg-card">
            <h3 className="font-semibold mb-2">
              How do I integrate this converter with AI assistants?
            </h3>
            <p className="text-muted-foreground">
              Convert2 provides an MCP (Model Context Protocol) server that allows AI assistants
              like Claude and ChatGPT to perform conversions programmatically. Check our{' '}
              <Link href="/api-docs" className="text-primary hover:underline">
                API documentation
              </Link>{' '}
              for integration details.
            </p>
          </div>
        </div>
      </section>

      {/* Related Converters */}
      {relatedCategories.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Explore More Converters</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/convert/${cat.id}`}
                className="group p-4 rounded-xl border bg-card hover:border-primary hover:shadow-md transition-all flex items-center justify-between"
              >
                <span className="font-medium group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
