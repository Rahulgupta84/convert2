import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe, Bot } from 'lucide-react';
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
            Free online unit converter with {allCategories.length}+ categories and 1000+ units.
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

      {/* Features */}
      <AnimatedCardGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
        {features.map((feature) => (
          <AnimatedFeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </AnimatedCardGrid>

      {/* Quick Access Popular Converters */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Popular Converters</h2>
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

      {/* All Categories by Group */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">All Unit Converters</h2>
        <div className="grid gap-8">
          {categoryGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                {group.name}
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
      <section className="mt-16 prose prose-gray dark:prose-invert max-w-none">
        <h2>About Convert2</h2>
        <p>
          Convert2 is a comprehensive online unit conversion tool designed to help you
          convert between different units of measurement quickly and accurately. Whether
          you need to convert length measurements like centimeters to inches, weight
          measurements like kilograms to pounds, or temperature from Celsius to Fahrenheit,
          our converter has you covered.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>
            <strong>{allCategories.length}+ conversion categories</strong> covering length, weight,
            temperature, volume, area, speed, pressure, energy, and many more specialized units.
          </li>
          <li>
            <strong>1000+ individual units</strong> including metric, imperial, and specialized
            scientific units.
          </li>
          <li>
            <strong>Real-time conversion</strong> that calculates results instantly as you type.
          </li>
          <li>
            <strong>Mobile-friendly design</strong> that works perfectly on any device.
          </li>
          <li>
            <strong>AI-ready API</strong> with MCP (Model Context Protocol) support for seamless
            integration with AI assistants like ChatGPT and Claude.
          </li>
        </ul>
        <h3>How to Use</h3>
        <p>
          Simply select the type of conversion you need, enter your value, and choose the
          units you want to convert between. The result is calculated instantly. You can
          also use our API to integrate unit conversion into your own applications.
        </p>
      </section>
    </div>
  );
}
