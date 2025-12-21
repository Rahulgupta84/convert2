import { NextResponse } from 'next/server';
import { allCategories, categoryGroups } from '@/lib/converters';

// GET /api/categories - List all categories
export async function GET() {
  const categories = allCategories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    description: cat.description,
    unitCount: cat.units.length,
    units: cat.units.map((u) => ({
      id: u.id,
      name: u.name,
      symbol: u.symbol,
    })),
  }));

  return NextResponse.json({
    success: true,
    totalCategories: allCategories.length,
    totalUnits: allCategories.reduce((acc, cat) => acc + cat.units.length, 0),
    groups: categoryGroups.map((g) => ({
      name: g.name,
      categories: g.categories.map((c) => c.id),
    })),
    categories,
  });
}
