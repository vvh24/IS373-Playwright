const { test, expect } = require('@playwright/test');

test.describe('Kernel Article Tests', () => {

  // Test for Feature 1: Kernel article link from the homepage
  test('Kernel article link from the homepage', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust the URL as needed

    // Check that the Kernel link exists in the navigation
    const kernelLink = await page.locator('text=Kernel');
    await expect(kernelLink).toHaveAttribute('href', '/kernel');

    // Click the link and check the Kernel page is displayed
    await kernelLink.click();
    const header = await page.locator('h1');
    await expect(header).toHaveText('Kernel');
  });

  // Test for Feature 2: Related articles section at the end of the Kernel article
  test('Related articles section in Kernel article', async ({ page }) => {
    await page.goto('http://localhost:3000/kernel'); // Adjust the URL for Kernel article

    // Check for the related articles section
    const relatedSection = await page.locator('text=Related Articles');
    await expect(relatedSection).toBeVisible();

    // Check that there are links to Containerization and Virtualization articles
    const containerizationLink = await page.locator('text=Containerization');
    await expect(containerizationLink).toHaveAttribute('href', '/containerization');

    const virtualizationLink = await page.locator('text=Virtualization');
    await expect(virtualizationLink).toHaveAttribute('href', '/virtualization');
  });
});