import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByPlaceholder('Titre').click();
    await page.getByPlaceholder('Titre').fill('es1');
    await page.getByPlaceholder('Note').click();
    await page.getByPlaceholder('Note').fill('1');
    await page.getByPlaceholder('Commentaire').click();
    await page.getByPlaceholder('Commentaire').fill('nul');
    await page.getByRole('button', { name: 'Add Task' }).click();
    const backgroundColor = await page.$eval('li', (el) => getComputedStyle(el).backgroundColor);

  expect(backgroundColor).toBe('rgb(255, 0, 0)'); 

  });