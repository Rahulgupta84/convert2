import { test, expect } from '@playwright/test';

test.describe('API Documentation Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/api-docs');
  });

  test('should display the page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /API Documentation/i })).toBeVisible();
  });

  test('should show REST API section', async ({ page }) => {
    await expect(page.getByText(/REST API/i)).toBeVisible();
    await expect(page.getByText(/\/api\/convert/i)).toBeVisible();
  });

  test('should show MCP Server section', async ({ page }) => {
    await expect(page.getByText(/MCP Server/i)).toBeVisible();
    await expect(page.getByText(/convert_units/i)).toBeVisible();
  });

  test('should display available categories', async ({ page }) => {
    await expect(page.getByText(/Available Categories/i)).toBeVisible();
    await expect(page.getByText(/length/i).first()).toBeVisible();
  });

  test('should show rate limits info', async ({ page }) => {
    await expect(page.getByText(/Rate Limits/i)).toBeVisible();
    await expect(page.getByText(/Free Tier/i)).toBeVisible();
  });
});
