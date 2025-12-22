import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allCategories } from '@/lib/converters';

export const metadata: Metadata = {
  title: 'API Documentation - Convert2 API & MCP Server for AI',
  description: 'Free unit conversion API with MCP (Model Context Protocol) support. Enable AI assistants like Claude, ChatGPT, Cursor, and VS Code Copilot to perform unit conversions.',
  alternates: {
    canonical: '/api-docs',
  },
};

export default function ApiDocsPage() {
  return (
    <div className="container py-8 md:py-12 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">API Documentation</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Integrate unit conversions into your applications with our free API.
          Enable AI assistants to perform conversions using our MCP server.
        </p>
      </div>

      <div className="grid gap-8">
        {/* AI Integration Hero */}
        <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              AI-Powered Unit Conversion
              <Badge variant="secondary">MCP</Badge>
            </CardTitle>
            <CardDescription className="text-base">
              Convert2 provides a Model Context Protocol (MCP) server that allows AI assistants
              to perform accurate unit conversions directly. Compatible with Claude Desktop,
              Cursor IDE, VS Code Copilot, and any MCP-compatible client.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">{allCategories.length}+</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">700+</div>
                <div className="text-sm text-muted-foreground">Units</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-sm text-muted-foreground">No API Key</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">MCP</div>
                <div className="text-sm text-muted-foreground">Protocol v2024-11-05</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MCP Server Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              MCP Server Configuration
              <Badge variant="secondary">AI Integration</Badge>
            </CardTitle>
            <CardDescription>
              Connect your AI assistant to Convert2 for seamless unit conversions.
              Choose your platform below for specific configuration instructions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="claude" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6">
                <TabsTrigger value="claude">Claude Desktop</TabsTrigger>
                <TabsTrigger value="cursor">Cursor IDE</TabsTrigger>
                <TabsTrigger value="vscode">VS Code</TabsTrigger>
                <TabsTrigger value="custom">Custom Client</TabsTrigger>
              </TabsList>

              <TabsContent value="claude" className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Claude Desktop Configuration</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add Convert2 to your Claude Desktop MCP configuration file at{' '}
                    <code className="bg-muted px-1 rounded">~/.claude/mcp.json</code>
                  </p>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "mcpServers": {
    "convert2": {
      "url": "https://convert2.example.com/api/mcp",
      "transport": "http",
      "enabled_tools": ["convert_units", "list_categories", "list_units", "search_units"],
      "tool_timeout_sec": 30
    }
  }
}`}
                  </pre>
                  <p className="text-sm text-muted-foreground mt-4">
                    After saving, restart Claude Desktop. You can then ask Claude to convert units naturally,
                    e.g., &quot;Convert 100 meters to feet&quot;.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="cursor" className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Cursor IDE Configuration</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add to your Cursor MCP settings at{' '}
                    <code className="bg-muted px-1 rounded">~/.cursor/mcp.json</code>
                  </p>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "servers": {
    "convert2": {
      "type": "http",
      "url": "https://convert2.example.com/api/mcp",
      "enabled": true
    }
  }
}`}
                  </pre>
                  <p className="text-sm text-muted-foreground mt-4">
                    Or use the CLI: <code className="bg-muted px-1 rounded">cursor mcp add convert2 --url https://convert2.example.com/api/mcp</code>
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="vscode" className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">VS Code / GitHub Copilot Configuration</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add to your VS Code settings or workspace{' '}
                    <code className="bg-muted px-1 rounded">.vscode/mcp.toml</code>
                  </p>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`[mcp_servers.convert2]
url = "https://convert2.example.com/api/mcp"
enabled_tools = ["convert_units", "list_units", "search_units"]
tool_timeout_sec = 30
enabled = true`}
                  </pre>
                  <p className="text-sm text-muted-foreground mt-4">
                    Access via Copilot chat: <code className="bg-muted px-1 rounded">@mcp convert2</code>
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="custom" className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Custom MCP Client (TypeScript)</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Use the official MCP SDK to connect programmatically:
                  </p>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`import { Client } from '@modelcontextprotocol/sdk/client';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse';

const client = new Client({ name: "my-app", version: "1.0" });
const transport = new SSEClientTransport(
  new URL("https://convert2.example.com/api/mcp")
);

await client.connect(transport);
await client.initialize();

// Convert 100 meters to feet
const result = await client.callTool("convert_units", {
  value: 100,
  category: "length",
  fromUnit: "meter",
  toUnit: "foot"
});

console.log(result); // { result: "100 m = 328.084 ft", ... }`}
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Python MCP Client</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`import asyncio
from mcp.client.sse import sse_client
from mcp import ClientSession

async def convert_units():
    async with sse_client("https://convert2.example.com/api/mcp") as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            # List available tools
            tools = await session.list_tools()
            print(f"Tools: {[t.name for t in tools.tools]}")

            # Perform conversion
            result = await session.call_tool("convert_units", {
                "value": 100,
                "category": "length",
                "fromUnit": "meter",
                "toUnit": "foot"
            })
            print(result)

asyncio.run(convert_units())`}
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Available MCP Tools */}
        <Card>
          <CardHeader>
            <CardTitle>Available MCP Tools</CardTitle>
            <CardDescription>
              Four tools are available for AI assistants to perform unit conversions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium flex items-center gap-2">
                  convert_units
                  <Badge variant="outline" className="text-xs">Primary</Badge>
                </h4>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  Convert a value from one unit to another
                </p>
                <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
{`{
  "value": 100,
  "category": "length",
  "fromUnit": "meter",
  "toUnit": "foot"
}`}
                </pre>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-medium">list_categories</h4>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  List all {allCategories.length} conversion categories
                </p>
                <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
{`// No parameters required
// Returns: categories[], totalCategories`}
                </pre>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-medium">list_units</h4>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  List all units in a specific category
                </p>
                <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
{`{
  "category": "temperature"
}`}
                </pre>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-medium">search_units</h4>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  Search for units by name or symbol
                </p>
                <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
{`{
  "query": "gallon"
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* REST API Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              REST API
              <Badge>Free</Badge>
            </CardTitle>
            <CardDescription>
              Simple REST endpoints for direct integration into any application
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Convert Units</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <span className="text-green-600 dark:text-green-400 font-semibold">GET</span>
                <span className="ml-2">/api/convert?category=length&amp;from=meter&amp;to=foot&amp;value=100</span>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Parameters</h4>
                <div className="grid gap-2 text-sm">
                  <div className="flex gap-2">
                    <code className="bg-muted px-2 py-1 rounded min-w-[80px]">category</code>
                    <span className="text-muted-foreground">The conversion category (e.g., &quot;length&quot;, &quot;weight&quot;)</span>
                  </div>
                  <div className="flex gap-2">
                    <code className="bg-muted px-2 py-1 rounded min-w-[80px]">from</code>
                    <span className="text-muted-foreground">The source unit ID (e.g., &quot;meter&quot;)</span>
                  </div>
                  <div className="flex gap-2">
                    <code className="bg-muted px-2 py-1 rounded min-w-[80px]">to</code>
                    <span className="text-muted-foreground">The target unit ID (e.g., &quot;foot&quot;)</span>
                  </div>
                  <div className="flex gap-2">
                    <code className="bg-muted px-2 py-1 rounded min-w-[80px]">value</code>
                    <span className="text-muted-foreground">The numeric value to convert</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Batch Conversions</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">POST</span>
                <span className="ml-2">/api/convert</span>
              </div>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto mt-4">
{`[
  { "category": "length", "from": "meter", "to": "foot", "value": 100 },
  { "category": "weight", "from": "kilogram", "to": "pound", "value": 50 }
]`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">List Categories</h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <span className="text-green-600 dark:text-green-400 font-semibold">GET</span>
                <span className="ml-2">/api/categories</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Returns all {allCategories.length} categories with their available units.
              </p>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {allCategories.map((cat) => (
                <div key={cat.id} className="p-2 bg-muted rounded text-sm text-center">
                  <code className="text-xs">{cat.id}</code>
                  <div className="text-muted-foreground text-xs">{cat.units.length} units</div>
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
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Badge variant="outline" className="shrink-0">Free Tier</Badge>
                <span className="text-sm">Unlimited requests (fair use)</span>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Badge variant="outline" className="shrink-0">No API Key</Badge>
                <span className="text-sm">Open API for public use</span>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Badge variant="outline" className="shrink-0">CORS Enabled</Badge>
                <span className="text-sm">Call from any domain</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
