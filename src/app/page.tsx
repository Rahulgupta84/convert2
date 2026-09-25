import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, Globe, Bot, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categoryGroups, allCategories } from '@/lib/converters';
import { HeroShader } from '@/components/shaders/hero-shader';
import {
  AnimatedCardGrid,
  AnimatedFeatureCard,
  AnimatedConverterCard,
  AnimatedCategoryLink,
} from '@/components/animations/animated-cards';

const features = [
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'Lightning Fast',
    description: 'Instant conversions with no page reloads. Calculate on the fly as you type.',
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Accurate Results',
    description: 'Precision-engineered formulas based on international standards.',
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: 'All Units',
    description: 'From everyday conversions to specialized engineering units.',
  },
  {
    icon: <Bot className="h-10 w-10" />,
    title: 'AI Ready',
    description: 'MCP server integration allows AI assistants to use our converters directly.',
  },
];

const popularConverters = [
  { id: 'length', name: 'Length Converter', example: 'cm to inches' },
  { id: 'weight', name: 'Weight Converter', example: 'kg to lbs' },
  { id: 'temperature', name: 'Temperature Converter', example: '°C to °F' },
  { id: 'volume', name: 'Volume Converter', example: 'liters to gallons' },
  { id: 'area', name: 'Area Converter', example: 'm² to ft²' },
  { id: 'speed', name: 'Speed Converter', example: 'km/h to mph' },
  { id: 'pressure', name: 'Pressure Converter', example: 'psi to bar' },
  { id: 'energy', name: 'Energy Converter', example: 'joules to calories' },
];

const useCases = [
  {
    image: '/images/use-cases/students-educators.png',
    title: 'Students & Educators',
    description: 'Perfect for homework, science projects, and teaching unit conversions.',
  },
  {
    image: '/images/use-cases/engineers-scientists.png',
    title: 'Engineers & Scientists',
    description: 'Precise calculations for professional and scientific applications.',
  },
  {
    image: '/images/use-cases/international-business.png',
    title: 'International Business',
    description: 'Convert between metric and imperial for global operations.',
  },
  {
    image: '/images/use-cases/everyday-use.png',
    title: 'Everyday Use',
    description: 'Quick conversions for cooking, travel, fitness, and more.',
  },
];

// Calculate total units
const totalUnits = allCategories.reduce((acc, cat) => acc + cat.units.length, 0);

export default function HomePage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section with Shader Background */}
      <section className="relative text-center mb-12 md:mb-16 py-16 md:py-24 px-6 rounded-2xl overflow-hidden">
        {/* Shader background */}
        <HeroShader />

        {/* Content overlay with glass effect */}
        <div className="relative z-10 bg-white/60 backdrop-blur-lg rounded-xl p-8 md:p-12 max-w-3xl mx-auto shadow-sm">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-gray-900">
            Convert Any Unit
            <span className="text-primary block">Instantly</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Free online unit converter with {allCategories.length}+ categories and {totalUnits.toLocaleString()}+ units.
            Accurate, fast, and optimized for AI assistants.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/converters">
                Browse All Converters
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/api-docs">API Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16">
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{allCategories.length}+</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{totalUnits.toLocaleString()}+</div>
          <div className="text-sm text-muted-foreground">Units</div>
        </div>
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
          <div className="text-sm text-muted-foreground">Free</div>
        </div>
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-1">0ms</div>
          <div className="text-sm text-muted-foreground">Instant Results</div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Why Choose Convert2?</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          The most comprehensive and developer-friendly unit conversion tool on the web.
        </p>
        <AnimatedCardGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <AnimatedFeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </AnimatedCardGrid>
      </section>

      {/* Quick Access Popular Converters */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Popular Converters</h2>
        <p className="text-muted-foreground mb-6">
          Quick access to our most frequently used unit converters.
        </p>
        <AnimatedCardGrid className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularConverters.map((item) => (
            <AnimatedConverterCard
              key={item.id}
              href={`/convert/${item.id}`}
              name={item.name}
              example={item.example}
            />
          ))}
        </AnimatedCardGrid>
      </section>

      {/* Use Cases Section */}
      <section className="mb-12 md:mb-16 rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Who Uses Convert2?</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Our converter is designed for everyone, from students to professionals.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* All Categories by Group */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">All Unit Converters</h2>
        <p className="text-muted-foreground mb-6">
          Browse all {allCategories.length} converter categories organized by type.
        </p>
        <div className="grid gap-8">
          {categoryGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground flex items-center gap-2">
                {group.name}
                <span className="text-sm font-normal">({group.categories.length} converters)</span>
              </h3>
              <AnimatedCardGrid className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {group.categories.map((cat) => (
                  <AnimatedCategoryLink
                    key={cat.id}
                    href={`/convert/${cat.id}`}
                    name={cat.name}
                  />
                ))}
              </AnimatedCardGrid>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="rounded-2xl border bg-card p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">About Convert2 - Free Online Unit Converter</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Convert2 is a comprehensive online unit conversion tool designed to help you
              convert between different units of measurement quickly and accurately. Whether
              you need to convert length measurements like centimeters to inches, weight
              measurements like kilograms to pounds, or temperature from Celsius to Fahrenheit,
              our converter has you covered.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Built with precision and speed in mind, Convert2 provides instant results as you type,
              with no page reloads or waiting. Our conversion formulas are based on internationally
              recognized standards, ensuring accuracy for both everyday use and professional applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3">
              {[
                `${allCategories.length}+ conversion categories covering all measurement types`,
                `${totalUnits.toLocaleString()}+ individual units including metric, imperial, and scientific`,
                'Real-time conversion that calculates results instantly',
                'Mobile-friendly responsive design for any device',
                'AI-ready API with MCP support for Claude and ChatGPT',
                'Formula display showing exactly how conversions are calculated',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold mb-4">How to Use Convert2</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Choose Category', desc: 'Select the type of unit you want to convert' },
              { step: '2', title: 'Enter Value', desc: 'Type the number you want to convert' },
              { step: '3', title: 'Select Units', desc: 'Choose your source and target units' },
              { step: '4', title: 'Get Results', desc: 'See instant conversion with formula' },
            ].map((item) => (
              <div key={item.step} className="relative p-4 rounded-xl bg-muted/50">
                <div className="absolute -top-3 left-4 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <h4 className="font-semibold mt-2 mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-8 mt-8">
          <h3 className="text-xl font-semibold mb-4">For Developers</h3>
          <p className="text-muted-foreground mb-4">
            Convert2 provides a powerful API and MCP (Model Context Protocol) server for seamless
            integration with AI assistants and applications. Use our API to add unit conversion
            capabilities to your projects, or configure your AI assistant to use Convert2 directly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/api-docs">
                View API Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/Chibionos/convert2" target="_blank" rel="noopener">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              q: 'Is Convert2 free to use?',
              a: 'Yes, Convert2 is completely free with no registration required. Use our converter as many times as you need with no limitations.',
            },
            {
              q: 'How accurate are the conversions?',
              a: 'Our conversions use precise factors based on international measurement standards. Results are suitable for professional, scientific, and everyday use.',
            },
            {
              q: 'Can I use Convert2 on my phone?',
              a: 'Absolutely! Convert2 is fully responsive and works perfectly on smartphones, tablets, and desktop computers.',
            },
            {
              q: 'Does Convert2 work offline?',
              a: 'Convert2 is a web application that requires an internet connection. However, results are calculated instantly with minimal data usage.',
            },
            {
              q: 'Can I integrate Convert2 into my application?',
              a: 'Yes! We provide a REST API and MCP server for integration. Check our API documentation for details on programmatic access.',
            },
            {
              q: 'What units does Convert2 support?',
              a: `We support ${totalUnits.toLocaleString()}+ units across ${allCategories.length}+ categories including length, weight, temperature, volume, and many more.`,
            },
          ].map((faq, i) => (
            <div key={i} className="p-5 rounded-xl border bg-card">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
