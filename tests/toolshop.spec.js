
const { test, expect } = require('@playwright/test');

const URL = 'https://practicesoftwaretesting.com/';

test.setTimeout(60000);

test.beforeEach(async ({ page }) => {
  const response = await page.goto(URL, {
    waitUntil: 'domcontentloaded'
  });

  if (response?.status() === 403) {
    throw new Error('Acceso bloqueado HTTP 403 por el sitio');
  }
});

test('CP-001: Visualizar catálogo', async ({ page }) => {
  await expect(page.locator('[data-test="product-name"]').first())
    .toBeVisible({ timeout: 20000 });
});

test('CP-002: Buscar productos', async ({ page }) => {
  const search = page.locator('[data-test="search-query"]');
  await search.fill('hammer');
  await page.locator('[data-test="search-submit"]').click();
  await expect(page.locator('[data-test="product-name"]').first())
    .toBeVisible();
});

test('CP-003: Búsqueda sin resultados', async ({ page }) => {
  await page.locator('[data-test="search-query"]')
    .fill('producto_inexistente_987654');
  await page.locator('[data-test="search-submit"]').click();
  await expect(page.locator('[data-test="product-name"]'))
    .toHaveCount(0);
});

test('CP-004: Ver detalle del producto', async ({ page }) => {
  await page.locator('[data-test="product-name"]').first().click();
  await expect(page).toHaveURL(/product/);
});

test('CP-005: Filtrar productos', async ({ page }) => {
  const filtro = page.locator('input[type="checkbox"]').first();
  await expect(filtro).toBeVisible();
  await filtro.check();
  await expect(filtro).toBeChecked();
});

test('CP-006: Ordenar productos', async ({ page }) => {
  const ordenar = page.locator('[data-test="sort"]');
  await expect(ordenar).toBeVisible();
  await ordenar.selectOption({ index: 1 });
  await expect(ordenar).not.toHaveValue('');
});

test('CP-007: Inicio de sesión inválido', async ({ page }) => {
  await page.goto(URL + 'auth/login');

  await page.locator('[data-test="email"]')
    .fill('usuario_invalido@example.com');
  await page.locator('[data-test="password"]')
    .fill('ClaveIncorrecta123!');
  await page.locator('[data-test="login-submit"]').click();

  await expect(page).toHaveURL(/auth\/login/);
});

test('CP-008: Validar campos obligatorios', async ({ page }) => {
  await page.goto(URL + 'auth/login');

  await page.locator('[data-test="login-submit"]').click();

  await expect(page.locator('[data-test="email"]'))
    .toBeVisible();
  await expect(page.locator('[data-test="password"]'))
    .toBeVisible();
});
