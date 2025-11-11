import { test } from '@playwright/test';



  test('@env-test Testing environment variables', async ({ page }) => {

  console.log(`Username: ${process.env.PRACTICE_USERNAME}`);
  console.log(`Password: ${process.env.PRACTICE_PASSWORD}`);
    
  });

    test('Bypass authentication by embeddingthe credentials in the URL', async ({ page }) => {
    //https://admin:admin@practice.cydeo.com/basic_auth  embded the credentials not recommended.
    await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
  });
 
  test('Bypass authentication by encoding credentials base64 format', async ({ page }) => {
    // await page.goto("https://practice.cydeo.com/basic_auth");
    let encodedCredential = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredential}`})

    await page.goto("https://practice.cydeo.com/basic_auth");


  });