const { test, expect } = require('@playwright/test');

test.skip('DropDown', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#dropdown-class-example').selectOption('Option1');
    const options = await page.$$('#dropdown-class-example option');
    //console.log(options.textContent())
    const options1 = await page.locator('#dropdown-class-example option');
    expect(options1).toHaveCount(4);
    expect(options.length).toBe(4);
    for (let option of options) {

        console.log(await option.textContent());


    }

})

test.only('AutoSuggestions', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.waitForSelector('input#autocomplete');
    /// await page.waitForTimeout(5000);
    // await page.locator('input#autocomplete').click();
    await page.fill('input#autocomplete', "Ind");

    await page.waitForSelector('ul#ui-id-1>li>div')
    const allValue = await page.$$('ul#ui-id-1>li>div');
    console.log(allValue.length)
    for (let o of allValue) {
        let value = await o.textContent();
        console.log(value);
        if (value == 'India') {
            await o.click();
            break;
        }
    }

    await page.waitForTimeout(2000);

})