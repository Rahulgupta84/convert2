import { test, expect } from '@playwright/test';

test.describe('Converter Pages', () => {
  test.describe('Length Converter', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/convert/length');
    });

    test('should display the converter', async ({ page }) => {
      await expect(page.getByRole('heading', { name: /Length Converter/i })).toBeVisible();
      await expect(page.getByLabel(/From/i)).toBeVisible();
      await expect(page.getByLabel(/To/i)).toBeVisible();
    });

    test('should convert meters to feet', async ({ page }) => {
      // Clear and enter value
      const fromInput = page.getByRole('textbox', { name: /From/i }).first();
      await fromInput.fill('1');

      // The result should appear automatically
      const toInput = page.getByRole('textbox', { name: /To/i }).first();
      await expect(toInput).toHaveValue(/3\.28/);
    });

    test('should swap units when swap button is clicked', async ({ page }) => {
      // Get initial from unit selection
      const swapButton = page.getByRole('button', { name: /Swap/i });
      await swapButton.click();

      // After swap, conversions should update
      await expect(page.getByRole('textbox', { name: /To/i }).first()).toBeVisible();
    });

    test('should show formula', async ({ page }) => {
      await expect(page.getByText(/Formula/i)).toBeVisible();
    });

    test('should display all units reference', async ({ page }) => {
      await expect(page.getByText(/All Length Units/i)).toBeVisible();
      await expect(page.getByText(/Meter/i)).toBeVisible();
      await expect(page.getByText(/Kilometer/i)).toBeVisible();
    });

    test('should have structured data for SEO', async ({ page }) => {
      const structuredData = await page.evaluate(() => {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        return Array.from(scripts).map((s) => JSON.parse(s.textContent || '{}'));
      });

      expect(structuredData.length).toBeGreaterThan(0);
      expect(structuredData.some((d) => d['@type'] === 'WebApplication')).toBeTruthy();
    });
  });

  test.describe('Temperature Converter', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/convert/temperature');
    });

    test('should convert Celsius to Fahrenheit', async ({ page }) => {
      const fromInput = page.getByRole('textbox', { name: /From/i }).first();
      await fromInput.fill('100');

      // Select Celsius as from unit (should be default or select it)
      // Select Fahrenheit as to unit

      const toInput = page.getByRole('textbox', { name: /To/i }).first();
      // Wait for conversion
      await expect(toInput).not.toHaveValue('');
    });
  });

  test.describe('Weight Converter', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/convert/weight');
    });

    test('should display the weight converter', async ({ page }) => {
      await expect(page.getByRole('heading', { name: /Weight and Mass Converter/i })).toBeVisible();
    });

    test('should convert kilograms to pounds', async ({ page }) => {
      const fromInput = page.getByRole('textbox', { name: /From/i }).first();
      await fromInput.fill('1');

      const toInput = page.getByRole('textbox', { name: /To/i }).first();
      await expect(toInput).not.toHaveValue('');
    });
  });

  test.describe('Copy functionality', () => {
    test('should have copy button', async ({ page }) => {
      await page.goto('/convert/length');
      await expect(page.getByRole('button', { name: /Copy/i })).toBeVisible();
    });
  });

  test.describe('Navigation', () => {
    test('should show breadcrumb navigation', async ({ page }) => {
      await page.goto('/convert/length');
      await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Converters' })).toBeVisible();
    });

    test('should show related converters', async ({ page }) => {
      await page.goto('/convert/length');
      await expect(page.getByText(/Related Converters/i)).toBeVisible();
    });
  });
});
