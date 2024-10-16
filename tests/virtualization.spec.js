const { test, expect } = require('@playwright/test');

test.describe('Virtualization Article Tests', () => {

  // Test for Feature 1: Virtualization article link in the footer
  test('Virtualization article link in the footer', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust the URL as needed

    // Check that the footer contains a link to Virtualization
    const footerLink = await page.locator('footer >> text=Virtualization');
    await expect(footerLink).toHaveAttribute('href', '/virtualization');

    // Click the link and verify the Virtualization page is displayed
    await footerLink.click();
    const header = await page.locator('h1');
    await expect(header).toHaveText('Virtualization');
  });

  // Test for Feature 2: Search functionality to find the Virtualization article
  test('Search for Virtualization article', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust the URL as needed

    // Type in the search bar to search for Virtualization
    const searchInput = await page.locator('input[type="search"]');
    await searchInput.fill('Virtualization');

    // Check that the search results contain the Virtualization article
    const searchResult = await page.locator('text=Virtualization');
    await expect(searchResult).toBeVisible();

    // Click the search result and verify the Virtualization page is displayed
    await searchResult.click();
    const header = await page.locator('h1');
    await expect(header).toHaveText('Virtualization');
  });
});