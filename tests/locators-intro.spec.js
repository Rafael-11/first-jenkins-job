import { test } from "@playwright/test";

test('Simple google test', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.waitForTimeout(2000);
    let searchBox=page.locator("textarea[id='APjFqb']"); // for loctors,we don't need await async
   //let searchBox= await page.$$("//textarea[@class='gLFyf']");
    await page.waitForTimeout(2000);
   //searchBox.type("Hello");// fill the words one by one
    searchBox.fill("Hello"); // it will fill the words at once
    await page.waitForTimeout(2000);
    await searchBox.press("Enter");
    await page.waitForTimeout(2000);
});

/*
<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" 
value="" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" 
autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" 
spellcheck="false" data-ved="0ahUKEwiCpdOiydGQAxV66ckDHei2HPkQ39UDCBc"></textarea>
*/

//textarea[@class="gLFyf"]