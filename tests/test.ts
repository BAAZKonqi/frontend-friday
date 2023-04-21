import { expect, test } from '@playwright/test';

const ratingButtons = [1, 2, 3, 4, 5];

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
	for (const n of ratingButtons) {
		await expect(page.getByRole('button', { name: n.toString() })).toBeVisible();
	}
});

test('button 1 is selectable',async ({page}) => {
	await page.goto('/');
	await page.getByRole('button', { name: '1' }).click();
	await expect(page.getByRole('button', { name: '1' })).toBeFocused();
});

test('button 1 is orange if focused',async ({page}) => {
	await page.goto('/');
	await page.getByRole('button', { name: '1' }).focus();
	expect(await page.$eval('#rating-button-1', e => getComputedStyle(e).backgroundColor)).toBe('rgb(249, 115, 22)');
});

test('submit button is inactive if none of buttons 1 to 5 is focused', async ({page}) => {
	await page.goto('/');
	expect(page.getByRole('button', {name: 'SUBMIT'})).toBeDisabled;
});

for (const n of ratingButtons) {
	test(`submit button is active if button ${n} is focused`, async ({page}) => {
		await page.goto('/');
		await page.getByRole('button', { name: n.toString() }).focus();
		expect(page.getByRole('button', {name: 'SUBMIT'})).toBeEnabled;
	});
}
