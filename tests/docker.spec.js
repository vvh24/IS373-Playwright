const { test, expect } = require('@playwright/test');

test.describe('Docker Article Tests', () => {

  // Test for Feature 1: Bookmark the Docker article
  test('Bookmark Docker article', async ({ page }) => {
    await page.goto('http://localhost:3000/docker'); // Adjust the URL as needed

    // Check for the presence of the Bookmark button
    const bookmarkButton = await page.locator('button >> text=Bookmark');
    await expect(bookmarkButton).toBeVisible();
  });

  // Test for Feature 2: Display "Last Updated" section in Docker article
  test('Last updated section in Docker article', async ({ page }) => {
    await page.goto('http://localhost:3000/docker'); // Adjust the URL as needed

    // Check for the presence of the Last Updated section
    const lastUpdated = await page.locator('text=Last Updated');
    await expect(lastUpdated).toBeVisible();

    // Verify that the date appears (adjust for expected date format)
    const dateText = await lastUpdated.locator('text=October 2024');
    await expect(dateText).toBeVisible();
  });
});