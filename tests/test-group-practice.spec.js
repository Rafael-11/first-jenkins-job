import { test } from "@playwright/test";

test.describe("Practice.cydeo", ()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://practice.cydeo.com/");
    });

    test.afterEach(async({page})=>{
        await page.waitForTimeout(3000)
    });

    test("title of the page",async ({page})=>{
        console.log(await page.title());
        //await page.waitForTimeout(3000)
    })
     test("url of page",async ({page})=>{
        console.log( page.url());
       // await page.waitForTimeout(3000)
    })



})