import { NextRequest, NextResponse } from 'next/server';
import { convert, getCategory, allCategories, formatNumber } from '@/lib/converters';

// GET /api/convert?category=length&from=meter&to=foot&value=100
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const categoryId = searchParams.get('category');
  const fromUnit = searchParams.get('from');
  const toUnit = searchParams.get('to');
  const valueStr = searchParams.get('value');

  // Validate required parameters
  if (!categoryId || !fromUnit || !toUnit || !valueStr) {
    return NextResponse.json(
      {
        error: 'Missing required parameters',
        required: ['category', 'from', 'to', 'value'],
        example: '/api/convert?category=length&from=meter&to=foot&value=100',
      },
      { status: 400 }
    );
  }

  // Parse value
  const value = parseFloat(valueStr);
  if (isNaN(value)) {
    return NextResponse.json(
      { error: 'Invalid value: must be a number' },
      { status: 400 }
    );
  }

  // Check if category exists
  const category = getCategory(categoryId);
  if (!category) {
    return NextResponse.json(
      {
        error: `Unknown category: ${categoryId}`,
        availableCategories: allCategories.map(c => c.id),
      },
      { status: 400 }
    );
  }

  // Check if units exist
  const fromUnitExists = category.units.find(u => u.id === fromUnit);
  const toUnitExists = category.units.find(u => u.id === toUnit);

  if (!fromUnitExists) {
    return NextResponse.json(
      {
        error: `Unknown unit: ${fromUnit}`,
        availableUnits: category.units.map(u => ({ id: u.id, name: u.name, symbol: u.symbol })),
      },
      { status: 400 }
    );
  }

  if (!toUnitExists) {
    return NextResponse.json(
      {
        error: `Unknown unit: ${toUnit}`,
        availableUnits: category.units.map(u => ({ id: u.id, name: u.name, symbol: u.symbol })),
      },
      { status: 400 }
    );
  }

  // Perform conversion
  const result = convert(value, categoryId, fromUnit, toUnit);

  if (!result) {
    return NextResponse.json(
      { error: 'Conversion failed' },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    conversion: {
      from: {
        value: result.from.value,
        unit: {
          id: result.from.unit.id,
          name: result.from.unit.name,
          symbol: result.from.unit.symbol,
        },
      },
      to: {
        value: result.to.value,
        valueFormatted: formatNumber(result.to.value),
        unit: {
          id: result.to.unit.id,
          name: result.to.unit.name,
          symbol: result.to.unit.symbol,
        },
      },
      formula: result.formula,
    },
    // Human-readable result for AI assistants
    result: `${result.from.value} ${result.from.unit.symbol} = ${formatNumber(result.to.value)} ${result.to.unit.symbol}`,
  });
}

// POST /api/convert (for batch conversions)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Support batch conversions
    if (Array.isArray(body)) {
      const results = body.map((item: { category: string; from: string; to: string; value: number }) => {
        const result = convert(item.value, item.category, item.from, item.to);
        if (!result) {
          return { error: 'Conversion failed', input: item };
        }
        return {
          input: item,
          result: `${result.from.value} ${result.from.unit.symbol} = ${formatNumber(result.to.value)} ${result.to.unit.symbol}`,
          value: result.to.value,
        };
      });
      return NextResponse.json({ success: true, results });
    }

    // Single conversion
    const { category, from, to, value } = body;

    if (!category || !from || !to || value === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: category, from, to, value' },
        { status: 400 }
      );
    }

    const result = convert(value, category, from, to);

    if (!result) {
      return NextResponse.json(
        { error: 'Conversion failed' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      result: `${result.from.value} ${result.from.unit.symbol} = ${formatNumber(result.to.value)} ${result.to.unit.symbol}`,
      value: result.to.value,
      valueFormatted: formatNumber(result.to.value),
    });
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    );
  }
}
