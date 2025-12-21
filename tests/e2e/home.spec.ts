import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Convert Any Unit/i })).toBeVisible();
  });

  test('should have navigation links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'All Converters', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'API', exact: true })).toBeVisible();
  });

  test('should display popular converters section', async ({ page }) => {
    await expect(page.getByText(/Popular Converters/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /Length Converter/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Weight Converter/i })).toBeVisible();
  });

  test('should navigate to length converter', async ({ page }) => {
    await page.getByRole('link', { name: /Length Converter/i }).first().click();
    await expect(page).toHaveURL(/\/convert\/length/);
    await expect(page.getByRole('heading', { name: /Length Converter/i })).toBeVisible();
  });

  test('should have proper SEO meta tags', async ({ page }) => {
    const title = await page.title();
    expect(title).toContain('UnitConvert');

    const description = await page.getAttribute('meta[name="description"]', 'content');
    expect(description).toBeTruthy();
    expect(description).toContain('unit converter');
  });
});
