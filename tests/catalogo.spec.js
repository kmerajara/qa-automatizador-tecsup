
const { test, expect } = require('@playwright/test');

test('CP-001: Visualizar catálogo de productos', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('[data-test="product-name"]').first())
    .toBeVisible();
});
