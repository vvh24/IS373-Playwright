const { test, expect } = require('@playwright/test');

test.describe('VMs vs Baremetal Article Tests', () => {

  // Test for Feature 1: Visual aids in the article
  test('VMs vs Baremetal article contains visual aids', async ({ page }) => {
    await page.goto('http://localhost:3000/vms-vs-baremetal'); // Adjust the URL as needed

    // Check that the article contains visual aids (images, diagrams, etc.)
    const images = await page.locator('img');
    await expect(images.count()).toBeGreaterThan(0);

    const diagrams = await page.locator('figure');
    await expect(diagrams.count()).toBeGreaterThan(0);
  });

  // Test for Feature 2: Share the article on social media
  test('Share button is present on the VMs vs Baremetal article', async ({ page }) => {
    await page.goto('http://localhost:3000/vms-vs-baremetal'); // Adjust the URL as needed

    // Check that the share button is available
    const shareButton = await page.locator('button >> text=Share');
    await expect(shareButton).toBeVisible();
  });
});