const { test, expect } = require('@playwright/test');

test.describe('Containerization vs Virtualization Article Tests', () => {

  // Test for Feature 1: Interactive quiz at the end of the article
  test('Quiz is present at the end of the Containerization vs Virtualization article', async ({ page }) => {
    await page.goto('http://localhost:3000/containerization-vs-virtualization'); // Adjust the URL as needed

    // Check for the presence of a quiz
    const quiz = await page.locator('form.quiz');
    await expect(quiz).toBeVisible();
  });

  // Test for Feature 2: Article summary before clicking the full content
  test('Article summary is displayed in search results and homepage', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust the URL as needed

    // Check that the summary is visible on the homepage or in search results
    const summary = await page.locator('text=Containerization vs Virtualization (2-3 line summary)');
    await expect(summary).toBeVisible();

    // Clicking the summary should lead to the full article
    await summary.click();
    const header = await page.locator('h1');
    await expect(header).toHaveText('Containerization vs Virtualization');
  });
});