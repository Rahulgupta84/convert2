import { test, expect } from '@playwright/test';

test.describe('Converters List Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/converters');
  });

  test('should display the page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /All Unit Converters/i })).toBeVisible();
  });

  test('should display all category groups', async ({ page }) => {
    await expect(page.getByRole('main').getByRole('heading', { name: /Common Converters/i })).toBeVisible();
    await expect(page.getByRole('main').getByRole('heading', { name: /Engineering Converters/i })).toBeVisible();
    await expect(page.getByRole('main').getByRole('heading', { name: /Electricity Converters/i })).toBeVisible();
  });

  test('should have links to individual converters', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Length/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Temperature/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Weight/i }).first()).toBeVisible();
  });

  test('should navigate to converter page when clicked', async ({ page }) => {
    await page.getByRole('link', { name: /Temperature/i }).first().click();
    await expect(page).toHaveURL(/\/convert\/temperature/);
  });

  test('should display unit count for each category', async ({ page }) => {
    // Each category card should show number of units
    await expect(page.getByText(/units/i).first()).toBeVisible();
  });

  test('should have proper page title', async ({ page }) => {
    const title = await page.title();
    expect(title).toContain('All Unit Converters');
  });
});
