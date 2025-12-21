import { test, expect } from '@playwright/test';

test.describe('API Endpoints', () => {
  test.describe('GET /api/convert', () => {
    test('should convert length units successfully', async ({ request }) => {
      const response = await request.get('/api/convert?category=length&from=meter&to=foot&value=1');
      expect(response.ok()).toBeTruthy();

      const data = await response.json();
      expect(data.success).toBeTruthy();
      expect(data.conversion.to.value).toBeCloseTo(3.28084, 3);
      expect(data.result).toContain('m');
      expect(data.result).toContain('ft');
    });

    test('should convert temperature correctly', async ({ request }) => {
      const response = await request.get('/api/convert?category=temperature&from=celsius&to=fahrenheit&value=0');
      expect(response.ok()).toBeTruthy();

      const data = await response.json();
      expect(data.success).toBeTruthy();
      expect(data.conversion.to.value).toBeCloseTo(32, 2);
    });

    test('should return error for missing parameters', async ({ request }) => {
      const response = await request.get('/api/convert?category=length&from=meter');
      expect(response.status()).toBe(400);

      const data = await response.json();
      expect(data.error).toBeTruthy();
    });

    test('should return error for unknown category', async ({ request }) => {
      const response = await request.get('/api/convert?category=unknown&from=meter&to=foot&value=1');
      expect(response.status()).toBe(400);

      const data = await response.json();
      expect(data.error).toContain('Unknown category');
    });

    test('should return error for unknown unit', async ({ request }) => {
      const response = await request.get('/api/convert?category=length&from=unknown&to=foot&value=1');
      expect(response.status()).toBe(400);

      const data = await response.json();
      expect(data.error).toContain('Unknown unit');
    });
  });

  test.describe('POST /api/convert', () => {
    test('should handle single conversion', async ({ request }) => {
      const response = await request.post('/api/convert', {
        data: {
          category: 'weight',
          from: 'kilogram',
          to: 'pound',
          value: 1,
        },
      });
      expect(response.ok()).toBeTruthy();

      const data = await response.json();
      expect(data.success).toBeTruthy();
      expect(data.value).toBeCloseTo(2.20462, 3);
    });

    test('should handle batch conversions', async ({ request }) => {
      const response = await request.post('/api/convert', {
        data: [
          { category: 'length', from: 'meter', to: 'foot', value: 1 },
          { category: 'weight', from: 'kilogram', to: 'pound', value: 1 },
        ],
      });
      expect(response.ok()).toBeTruthy();

      const data = await response.json();
      expect(data.success).toBeTruthy();
      expect(data.results.length).toBe(2);
    });
  });

  test.describe('GET /api/categories', () => {
    test('should return all categories', async ({ request }) => {
      const response = await request.get('/api/categories');
      expect(response.ok()).toBeTruthy();

      const data = await response.json();
      expect(data.success).toBeTruthy();
      expect(data.totalCategories).toBeGreaterThan(50);
      expect(data.categories.length).toBeGreaterThan(50);
    });

    test('should include units for each category', async ({ request }) => {
      const response = await request.get('/api/categories');
      const data = await response.json();

      const lengthCategory = data.categories.find((c: { id: string }) => c.id === 'length');
      expect(lengthCategory).toBeTruthy();
      expect(lengthCategory.units.length).toBeGreaterThan(10);
    });
  });

  test.describe('MCP Endpoint', () => {
    test('should return server info on GET', async ({ request }) => {
      const response = await request.get('/api/mcp');
      expect(response.ok()).toBeTruthy();

      const data = await response.json();
      expect(data.name).toBe('UnitConvert MCP Server');
      expect(data.tools.length).toBeGreaterThan(0);
    });

    test('should handle initialize request', async ({ request }) => {
      const response = await request.post('/api/mcp', {
        data: {
          jsonrpc: '2.0',
          id: 1,
          method: 'initialize',
        },
      });
      expect(response.ok()).toBeTruthy();

      const data = await response.json();
      expect(data.jsonrpc).toBe('2.0');
      expect(data.result.serverInfo.name).toBe('unitconvert-mcp');
    });

    test('should list available tools', async ({ request }) => {
      const response = await request.post('/api/mcp', {
        data: {
          jsonrpc: '2.0',
          id: 2,
          method: 'tools/list',
        },
      });
      expect(response.ok()).toBeTruthy();

      const data = await response.json();
      expect(data.result.tools.length).toBe(4);
      expect(data.result.tools.map((t: { name: string }) => t.name)).toContain('convert_units');
    });

    test('should execute convert_units tool', async ({ request }) => {
      const response = await request.post('/api/mcp', {
        data: {
          jsonrpc: '2.0',
          id: 3,
          method: 'tools/call',
          params: {
            name: 'convert_units',
            arguments: {
              value: 100,
              category: 'length',
              fromUnit: 'centimeter',
              toUnit: 'inch',
            },
          },
        },
      });
      expect(response.ok()).toBeTruthy();

      const data = await response.json();
      expect(data.result.content[0].type).toBe('text');

      const result = JSON.parse(data.result.content[0].text);
      expect(result.to.value).toBeCloseTo(39.37, 1);
    });
  });
});
