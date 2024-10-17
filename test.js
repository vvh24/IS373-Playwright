//Playwright Tests for Agile Docs 

test('Verify homepage link, title, and article heading', async ({ page }) => {
  // Go to the homepage
  await page.goto('https://tomasgonz67.github.io/is373hexo/');

  // Check the homepage URL
  await expect(page).toHaveURL('https://tomasgonz67.github.io/is373hexo/');

  // Verify the page title
  await expect(page).toHaveTitle(/Hexo/); // Assuming "Hexo" is part of the title

  // Verify the article heading (e.g., Table of Contents)
  const articleHeading = page.locator('h1:has-text("Table of Contents")');
  await expect(articleHeading).toBeVisible();
});

//kernel tests
test('Kernel article can be accessed from the recent posts', async ({ page }) => {
  await page.goto('https://tomasgonz67.github.io/is373hexo/2024/10/16/2-Kernel/');
  const kernelLink = page.locator('text=Kernel');
  await expect(kernelLink).toBeVisible();
  await kernelLink.click();
  await expect(page).toHaveURL(/.*kernel/);
});

test('Navigate between Kernel and other articles', async ({ page }) => {
  await page.goto('https://tomasgonz67.github.io/is373hexo/2024/10/16/2-Kernel/');
  const nextLink = page.locator('text=Containerization');
  const prevLink = page.locator('text=Table of Contents');
  await expect(nextLink).toBeVisible();
  await nextLink.click();
  await expect(page).toHaveURL(/.*containerization/);
  
  await page.goBack();
  await expect(prevLink).toBeVisible();
  await prevLink.click();
  await expect(page).toHaveURL(/.*table-of-contents/);
});

//containerization tests 
test('Containerization article includes "Why Containerization" section', async ({ page }) => {
  await page.goto('https://tomasgonz67.github.io/is373hexo/2024/10/16/3-Containerization/');
  const whySection = page.locator('h2:has-text("Why Containerization?")');
  await expect(whySection).toBeVisible();
});

test('Share button is visible at the bottom of the Containerization article', async ({ page }) => {
  await page.goto('https://tomasgonz67.github.io/is373hexo/2024/10/16/3-Containerization/');
  const shareButton = page.locator('text=Share');
  await expect(shareButton).toBeVisible();
});

//Virtualization tests 
test('Virtualization article includes "Importance" section', async ({ page }) => {
  await page.goto('https://tomasgonz67.github.io/is373hexo/2024/10/16/4-Virtualization/');
  const importanceSection = page.locator('h2:has-text("Importance")');
  await expect(importanceSection).toBeVisible();
});

test('Virtualization article includes "How it Works" section', async ({ page }) => {
  await page.goto('https://tomasgonz67.github.io/is373hexo/2024/10/16/4-Virtualization/');
  const howItWorksSection = page.locator('h2:has-text("How it Works")');
  await expect(howItWorksSection).toBeVisible();
});
