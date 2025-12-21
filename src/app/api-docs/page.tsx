import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { allCategories } from '@/lib/converters';

export const metadata: Metadata = {
  title: 'API Documentation - Unit Converter API & MCP Server',
  description: 'Free unit conversion API with MCP (Model Context Protocol) support. Integrate unit conversions into your applications or AI assistants.',
  alternates: {
    canonical: '/api-docs',
  },
};

export default function ApiDocsPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">API Documentation</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Integrate unit conversions into your applications with our free API.
        We also provide an MCP server for AI assistant integration.
      </p>

      <div className="grid gap-8">
        {/* REST API Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              REST API
              <Badge>Free</Badge>
            </CardTitle>
            <CardDescription>
              Simple REST endpoints for unit conversion
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Convert Units</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-green-600 dark:text-green-400">GET</div>
                <div>/api/convert?category=length&from=meter&to=foot&value=100</div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Parameters</h4>
                <ul className="text-sm space-y-1">
                  <li><code className="bg-muted px-1 rounded">category</code> - The conversion category (e.g., &quot;length&quot;, &quot;weight&quot;)</li>
                  <li><code className="bg-muted px-1 rounded">from</code> - The source unit ID (e.g., &quot;meter&quot;)</li>
                  <li><code className="bg-muted px-1 rounded">to</code> - The target unit ID (e.g., &quot;foot&quot;)</li>
                  <li><code className="bg-muted px-1 rounded">value</code> - The numeric value to convert</li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Response</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "success": true,
  "conversion": {
    "from": { "value": 100, "unit": { "id": "meter", "name": "Meter", "symbol": "m" } },
    "to": { "value": 328.084, "valueFormatted": "328.084", "unit": { "id": "foot", "name": "Foot", "symbol": "ft" } },
    "formula": "100 m × 3.28084 = 328.084 ft"
  },
  "result": "100 m = 328.084 ft"
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Batch Conversions</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-blue-600 dark:text-blue-400">POST</div>
                <div>/api/convert</div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Request Body</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`[
  { "category": "length", "from": "meter", "to": "foot", "value": 100 },
  { "category": "weight", "from": "kilogram", "to": "pound", "value": 50 }
]`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">List Categories</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-green-600 dark:text-green-400">GET</div>
                <div>/api/categories</div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Returns all {allCategories.length} categories with their available units.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* MCP Server Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              MCP Server
              <Badge variant="secondary">AI Integration</Badge>
            </CardTitle>
            <CardDescription>
              Model Context Protocol server for AI assistants like Claude and ChatGPT
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Endpoint</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                POST /api/mcp
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Available Tools</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">convert_units</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Convert a value from one unit to another
                  </p>
                  <pre className="bg-muted p-3 rounded-lg text-xs mt-2 overflow-x-auto">
{`{
  "name": "convert_units",
  "arguments": {
    "value": 100,
    "category": "length",
    "fromUnit": "meter",
    "toUnit": "foot"
  }
}`}
                  </pre>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">list_categories</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    List all available conversion categories
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">list_units</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    List all units in a specific category
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">search_units</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Search for units by name or symbol
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">MCP Configuration</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Add this to your MCP client configuration:
              </p>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "mcpServers": {
    "unitconvert": {
      "url": "https://your-domain.com/api/mcp",
      "transport": "http"
    }
  }
}`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Categories Reference */}
        <Card>
          <CardHeader>
            <CardTitle>Available Categories</CardTitle>
            <CardDescription>
              All {allCategories.length} conversion categories supported by the API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {allCategories.map((cat) => (
                <div key={cat.id} className="p-2 bg-muted rounded text-sm">
                  <code>{cat.id}</code>
                  <span className="text-muted-foreground ml-2">({cat.units.length} units)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Rate Limits */}
        <Card>
          <CardHeader>
            <CardTitle>Rate Limits & Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Badge variant="outline">Free Tier</Badge>
                <span>Unlimited requests (fair use policy)</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline">No API Key Required</Badge>
                <span>Open API for public use</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline">CORS Enabled</Badge>
                <span>Can be called from any domain</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
