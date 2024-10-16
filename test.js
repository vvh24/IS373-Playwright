//Playwright Tests for Agile Docs 

//User Story 1 - Kernerl Article in Recent Posts 
const { test, expect } = require('@playwright/test');

test('Kernel article appears in recent posts and links to the article', async ({ page }) => {
  await page.goto('http://localhost:4000'); // Adjust the URL to match your site

  // Locate the 'recent posts' sidebar and find the Kernel article link
  const recentPosts = await page.locator('.recent-posts');
  const kernelLink = await recentPosts.locator('text=Kernel');
  
  // Verify the link exists and redirects to the Kernel article
  await expect(kernelLink).toHaveAttribute('href', '/kernel');
  await kernelLink.click();
  const header = await page.locator('h1');
  await expect(header).toHaveText('Kernel');
});

//User Story 2 - Last and Upcoming Article Navigation
test('Next article link at the end of the Kernel article', async ({ page }) => {
    await page.goto('http://localhost:4000'); // Adjust the URL to match your site
  
    // Verify that the next article link is visible at the bottom of the page
    const nextArticleLink = await page.locator('a.next-article');
    await expect(nextArticleLink).toBeVisible();
    
    // Check that the next article is either "Containerization" or "Virtualization"
    const nextArticleText = await nextArticleLink.textContent();
    await expect(['Containerization', 'Virtualization']).toContain(nextArticleText);
  
    // Click the link and verify redirection to the next article
    await nextArticleLink.click();
    const header = await page.locator('h1');
    await expect(header).toHaveText(nextArticleText);
  });

  //Containerization
  //Share link for social media

   //Headings for Content structure
   test('Containerization article has properly structured headings', async ({ page }) => {
    await page.goto('http://localhost:4000'); // Adjust the URL
  
    // Check for H2 and H3 headings in the article
    const h2Headings = await page.locator('h2');
    const h3Headings = await page.locator('h3');
  
    await expect(h2Headings).toHaveCount(2); // Adjust count based on your content
    await expect(h3Headings).toHaveCount(3); // Adjust count based on your content
  
    // Verify that the headings are visible and readable
    await expect(h2Headings.first()).toBeVisible();
    await expect(h3Headings.first()).toBeVisible();
  });

  //click heading to go to specific article 
  test('Heading links redirect to correct articles', async ({ page }) => {
    await page.goto('http://localhost:4000'); // Adjust the URL to match your site
  
    // Check that the headings in the article have correct href attributes
    const headingLink = await page.locator('h1 >> a[href="/virtualization"]');
    await expect(headingLink).toBeVisible();
  
    // Click the heading link and verify it redirects to the correct article
    await headingLink.click();
    await expect(page).toHaveURL('/virtualization');
  });

  //proper h1 headings 
  test('Main topics have proper H1 headings for better visualization', async ({ page }) => {
    await page.goto('http://localhost:4000'); // Adjust the URL
  
    // Check that the main topics are using H1 headings
    const h1Headings = await page.locator('h1');
    await expect(h1Headings).toHaveCount(1); // Adjust count based on your content
  
    // Verify the visibility and correctness of the H1 heading
    await expect(h1Headings.first()).toBeVisible();
    await expect(h1Headings.first()).toHaveText('Virtualization');
  });

  //date displayed at the top of each article 
  test('Today’s date is displayed at the top of each article', async ({ page }) => {
    await page.goto('http://localhost:4000'); // Adjust the URL
  
    // Locate the date section at the top of the page
    const dateElement = await page.locator('.article-date');
    await expect(dateElement).toBeVisible();
  
    // Verify that the date is today's date
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    await expect(dateElement).toHaveText(today);
  });