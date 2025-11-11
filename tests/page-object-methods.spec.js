import { test } from "@playwright/test";

test('Getting the title of the page', async ({ page }) => {
    await page.goto('https://practice.cydeo.com/');
    //await page.waitForTimeout(2000);
    let actualTitle= await page.title();
    console.log(actualTitle);

});

test('Set th window size', async ({ page }) => {
    await page.goto('https://practice.cydeo.com/');
    await page.waitForTimeout(3000);
    // await page.setViewportSize({width: 1850, height:1000}); // can be config on config.js file gollably
    // await page.waitForTimeout(3000); 
});

