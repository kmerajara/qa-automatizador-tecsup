const { test, expect } = require('@playwright/test');

test('CP-001: Visualizar catálogo de productos', async ({ page }) => {

  await page.goto('https://practicesoftwaretesting.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page.locator('body')).toBeVisible();

  const productos = page.locator('[data-test="product-name"]');

  await expect(productos.first()).toBeVisible({
    timeout: 30000
  });

  console.log('CP-001: Catálogo de productos visible');
});
