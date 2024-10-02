<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Playwright and Hexo Documentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.6;
        }
        h1, h2, h3 {
            color: #333;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
            font-size: 1.1em;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

    <h1>Playwright and Hexo Documentation</h1>

    <h2>1. What is Playwright?</h2>
    <p>Playwright is a tool that automates web browsers. This means it can open a website, interact with it (like clicking on buttons, filling out forms), take screenshots, and verify if certain text appears on the page.</p>
    <p>With Playwright, you can automate repetitive tasks and test your website without manually doing it. This saves time and ensures that your website behaves correctly every time you make changes.</p>

    <h2>2. How to Set Up Playwright</h2>

    <h3>Step 1: Install Node.js</h3>
    <p>Before setting up Playwright, you need to have Node.js installed. Download it from <a href="https://nodejs.org/">here</a>.</p>

    <h3>Step 2: Create a Folder for Playwright</h3>
    <pre>
<code>
mkdir my-playwright-tests
cd my-playwright-tests
</code>
    </pre>

    <h3>Step 3: Install Playwright</h3>
    <p>Inside the folder, install Playwright by running these commands:</p>
    <pre>
<code>
npm init -y  # Initialize a Node.js project
npm install playwright  # Install Playwright
</code>
    </pre>

    <h2>3. How Playwright Works</h2>
    <p>Playwright allows you to control a browser using JavaScript. You write scripts that tell the browser to do things like:</p>
    <ul>
        <li>Open a website.</li>
        <li>Click on buttons or links.</li>
        <li>Take a screenshot of the page.</li>
        <li>Verify if text or an element exists on the page.</li>
    </ul>
    <p>Here's a simple Playwright script:</p>

    <pre>
<code>
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();  // Launch the browser
    const page = await browser.newPage();  // Open a new tab
    await page.goto('http://example.com');  // Go to the website
    await page.screenshot({ path: 'screenshot.png' });  // Take a screenshot
    await browser.close();  // Close the browser
})();
</code>
    </pre>

    <p>This script will open a browser, go to the website <code>http://example.com</code>, take a screenshot, and then close the browser.</p>

    <h2>4. Why is Playwright Useful?</h2>
    <p>Playwright is useful for automating tests on websites. Instead of manually checking if your website is working correctly, Playwright can automatically perform tests and tell you if something is broken.</p>
    <p>It's also helpful because it:</p>
    <ul>
        <li>Saves time when testing websites.</li>
        <li>Can simulate real user actions (like clicking and filling forms).</li>
        <li>Works across multiple browsers like Chrome, Firefox, and Safari.</li>
    </ul>

    <h2>5. Important Keywords and Commands in Playwright</h2>
    <ul>
        <li><strong>Launch</strong>: Starts the browser (Chrome, Firefox, etc.).</li>
        <li><strong>Goto</strong>: Navigates to a specific URL.</li>
        <li><strong>Click</strong>: Simulates a user clicking on an element.</li>
        <li><strong>Screenshot</strong>: Takes a screenshot of the page.</li>
        <li><strong>Close</strong>: Closes the browser when done.</li>
    </ul>

    <h2>6. How Playwright Works with Different Applications and Systems</h2>
    <p>Playwright can work with any web application or system that runs in a browser. It can:</p>
    <ul>
        <li>Test different types of websites (blogs, stores, business apps).</li>
        <li>Run on different operating systems (Windows, macOS, Linux).</li>
        <li>Simulate user behavior on multiple browsers like Chrome, Firefox, and Safari.</li>
    </ul>

    <h2>7. How Playwright Works with Hexo</h2>
    <p>Hexo is a tool that generates static websites from markdown files. After you generate the website and run it locally using the command:</p>
    <pre>
<code>hexo server</code>
    </pre>
    <p>Playwright can then open the Hexo site (usually running on <code>http://localhost:4000</code>) and test it. For example, you can use Playwright to:</p>
    <ul>
        <li>Check if your blog posts are loading correctly.</li>
        <li>Verify that links work.</li>
        <li>Ensure that the website layout is correct.</li>
    </ul>
    <p>Here’s how Playwright can interact with a Hexo site:</p>

    <pre>
<code>
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();  // Launch the browser
    const page = await browser.newPage();  // Open a new tab
    await page.goto('http://localhost:4000');  // Visit the Hexo website
    await page.screenshot({ path: 'hexo-screenshot.png' });  // Take a screenshot of the Hexo site
    await browser.close();  // Close the browser
})();
</code>
    </pre>

    <p>In this example, Playwright opens your Hexo site (running locally), takes a screenshot, and closes the browser.</p>

    <h2>8. How Playwright Works on Your Computer</h2>
    <p>Playwright runs through Node.js. When you run a Playwright script:</p>
    <ol>
        <li><strong>You write a script</strong> that tells the browser what to do.</li>
        <li><strong>You run the script</strong> using Node.js (<code>node script.js</code>).</li>
        <li>Playwright <strong>opens the browser</strong> and follows the instructions in your script (e.g., visit a website, take a screenshot).</li>
        <li><strong>Playwright closes the browser</strong> once all the tasks are done.</li>
    </ol>

    <p>Playwright uses "headless browsers" by default (which means no graphical interface), but you can also run it with real browsers (like the ones you normally use).</p>

</body>
</html>
