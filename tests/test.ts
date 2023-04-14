import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'How did we do?' })).toBeVisible();
});

test('index page has submit button', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('button', { name: 'SUBMIT' })).toBeVisible();
});
