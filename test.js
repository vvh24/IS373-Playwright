const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4000');  // Make sure your Hexo server is running
    await page.screenshot({ path: 'screenshot.png' });
    console.log("Screenshot taken and saved as screenshot.png");
    await browser.close();
})();
