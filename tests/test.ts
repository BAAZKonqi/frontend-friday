import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'How did we do?' })).toBeVisible();
});

test('index page has submit button', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('button', { name: 'SUBMIT' })).toBeVisible();
});

test('index page has 5 numbered buttons', async ({ page }) => {
	await page.goto('/');
	for (const n of [1, 2, 3, 4, 5]) {
		await expect(page.getByRole('button', { name: n.toString() })).toBeVisible();
	}
});

test('button 1 is selectable',async ({page}) => {
	await page.goto('/');
	await page.getByRole('button', { name: '1' }).click();
	await expect(page.getByRole('button', { name: '1' })).toBeFocused();
})

test('button 1 is orange if focused',async ({page}) => {
	await page.goto('/');
	await page.getByRole('button', { name: '1' }).focus();
	expect(await page.$eval('#rating-button-1', e => getComputedStyle(e).backgroundColor)).toBe('rgb(249, 115, 22)');
})
