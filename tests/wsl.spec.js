const { test, expect } = require('@playwright/test');

test.describe('WSL Article Tests', () => {

  // Test for Feature 1: WSL article accessible from a categorized list of topics
  test('WSL article can be accessed from a categorized topics list', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust the URL as needed

    // Check for the Topics or Categories section
    const topicsLink = await page.locator('text=Topics');
    await topicsLink.click();

    // In the Topics section, check that the WSL article is listed
    const wslLink = await page.locator('text=WSL');
    await expect(wslLink).toHaveAttribute('href', '/wsl');

    // Click the link and verify the WSL article page is displayed
    await wslLink.click();
    const header = await page.locator('h1');
    await expect(header).toHaveText('WSL');
  });

  // Test for Feature 2: Download PDF version of the WSL article
  test('Download PDF button is available on the WSL article', async ({ page }) => {
    await page.goto('http://localhost:3000/wsl'); // Adjust the URL for the WSL article

    // Check for the presence of the Download PDF button
    const downloadButton = await page.locator('button >> text=Download PDF');
    await expect(downloadButton).toBeVisible();
  });
});