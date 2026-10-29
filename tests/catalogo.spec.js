
const { test, expect } = require('@playwright/test');

test.setTimeout(90000);

test('CP-001: Visualizar catálogo de productos', async ({ page }) => {
  try {
    const response = await page.goto(
      'https://practicesoftwaretesting.com/',
      { waitUntil: 'domcontentloaded', timeout: 60000 }
    );

    console.log('HTTP:', response?.status());
    console.log('URL:', page.url());
    console.log('Título:', await page.title());

    await expect(page.locator('body')).toBeVisible();

    const productos = page.locator(
      '[data-test="product-name"], .card-title'
    );

    await expect(productos.first()).toBeVisible({
      timeout: 30000
    });

    console.log('CP-001 APROBADO');
  } finally {
    await page.screenshot({
      path: 'diagnostico-catalogo.png',
      fullPage: true,
      timeout: 10000
    }).catch(error => {
      console.log('No se pudo capturar pantalla:', error.message);
    });
  }
});
