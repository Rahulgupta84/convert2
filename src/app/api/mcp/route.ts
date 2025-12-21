import { NextRequest, NextResponse } from 'next/server';
import { convert, getCategory, allCategories, formatNumber, searchUnits } from '@/lib/converters';

// MCP Server Implementation
// This provides a Model Context Protocol compatible API for AI assistants

interface MCPRequest {
  jsonrpc: '2.0';
  id: string | number;
  method: string;
  params?: Record<string, unknown>;
}

interface MCPResponse {
  jsonrpc: '2.0';
  id: string | number;
  result?: unknown;
  error?: {
    code: number;
    message: string;
    data?: unknown;
  };
}

// Tool definitions for MCP
const tools = [
  {
    name: 'convert_units',
    description: 'Convert a value from one unit to another. Supports 79+ categories including length, weight, temperature, volume, area, speed, pressure, energy, and many more.',
    inputSchema: {
      type: 'object',
      properties: {
        value: {
          type: 'number',
          description: 'The numeric value to convert',
        },
        category: {
          type: 'string',
          description: 'The category of conversion (e.g., "length", "weight", "temperature")',
        },
        fromUnit: {
          type: 'string',
          description: 'The source unit ID (e.g., "meter", "kilogram", "celsius")',
        },
        toUnit: {
          type: 'string',
          description: 'The target unit ID (e.g., "foot", "pound", "fahrenheit")',
        },
      },
      required: ['value', 'category', 'fromUnit', 'toUnit'],
    },
  },
  {
    name: 'list_categories',
    description: 'List all available conversion categories',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'list_units',
    description: 'List all units available in a specific category',
    inputSchema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          description: 'The category ID to list units for',
        },
      },
      required: ['category'],
    },
  },
  {
    name: 'search_units',
    description: 'Search for units by name or symbol across all categories',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'The search query',
        },
      },
      required: ['query'],
    },
  },
];

function handleToolCall(name: string, args: Record<string, unknown>): unknown {
  switch (name) {
    case 'convert_units': {
      const { value, category, fromUnit, toUnit } = args as {
        value: number;
        category: string;
        fromUnit: string;
        toUnit: string;
      };

      const result = convert(value, category, fromUnit, toUnit);
      if (!result) {
        throw new Error(`Conversion failed. Check that the category "${category}" and units "${fromUnit}", "${toUnit}" exist.`);
      }

      return {
        result: `${result.from.value} ${result.from.unit.symbol} = ${formatNumber(result.to.value)} ${result.to.unit.symbol}`,
        value: result.to.value,
        formula: result.formula,
        from: {
          value: result.from.value,
          unit: result.from.unit.name,
          symbol: result.from.unit.symbol,
        },
        to: {
          value: result.to.value,
          unit: result.to.unit.name,
          symbol: result.to.unit.symbol,
        },
      };
    }

    case 'list_categories': {
      return {
        categories: allCategories.map((cat) => ({
          id: cat.id,
          name: cat.name,
          description: cat.description,
          unitCount: cat.units.length,
        })),
        totalCategories: allCategories.length,
      };
    }

    case 'list_units': {
      const { category } = args as { category: string };
      const cat = getCategory(category);
      if (!cat) {
        throw new Error(`Unknown category: ${category}`);
      }

      return {
        category: cat.name,
        units: cat.units.map((u) => ({
          id: u.id,
          name: u.name,
          symbol: u.symbol,
        })),
      };
    }

    case 'search_units': {
      const { query } = args as { query: string };
      const results = searchUnits(query);

      return {
        query,
        results: results.slice(0, 20).map((r) => ({
          category: r.category.id,
          categoryName: r.category.name,
          unit: {
            id: r.unit.id,
            name: r.unit.name,
            symbol: r.unit.symbol,
          },
        })),
        totalResults: results.length,
      };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as MCPRequest;

    const response: MCPResponse = {
      jsonrpc: '2.0',
      id: body.id,
    };

    switch (body.method) {
      case 'initialize':
        response.result = {
          protocolVersion: '2024-11-05',
          serverInfo: {
            name: 'unitconvert-mcp',
            version: '1.0.0',
          },
          capabilities: {
            tools: {},
          },
        };
        break;

      case 'tools/list':
        response.result = { tools };
        break;

      case 'tools/call': {
        const params = body.params as { name: string; arguments: Record<string, unknown> };
        try {
          const result = handleToolCall(params.name, params.arguments || {});
          response.result = {
            content: [
              {
                type: 'text',
                text: JSON.stringify(result, null, 2),
              },
            ],
          };
        } catch (error) {
          response.result = {
            content: [
              {
                type: 'text',
                text: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
              },
            ],
            isError: true,
          };
        }
        break;
      }

      default:
        response.error = {
          code: -32601,
          message: `Method not found: ${body.method}`,
        };
    }

    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      {
        jsonrpc: '2.0',
        id: null,
        error: {
          code: -32700,
          message: 'Parse error',
        },
      },
      { status: 400 }
    );
  }
}

// GET endpoint for discovery
export async function GET() {
  return NextResponse.json({
    name: 'UnitConvert MCP Server',
    version: '1.0.0',
    description: 'Model Context Protocol server for unit conversions. Supports 79+ categories and 1000+ units.',
    protocol: 'MCP',
    protocolVersion: '2024-11-05',
    endpoint: '/api/mcp',
    documentation: '/api-docs',
    tools: tools.map(t => ({
      name: t.name,
      description: t.description,
    })),
    capabilities: {
      tools: true,
      resources: false,
      prompts: false,
    },
    usage: {
      example: {
        method: 'tools/call',
        params: {
          name: 'convert_units',
          arguments: {
            value: 100,
            category: 'length',
            fromUnit: 'meter',
            toUnit: 'foot',
          },
        },
      },
    },
  });
}
