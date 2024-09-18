const {expect,test}  = require('@playwright/test');

test('Input Box', async ({page})=>{

await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

await page.fill('#name',"test");

await page.check('#checkBoxOption1');
await expect(page.locator('#checkBoxOption1')).toBeChecked();
await page.uncheck('#checkBoxOption1');
await expect(page.locator('#checkBoxOption1')).not.toBeChecked();
await page.waitForSelector('#checkBoxOption2');
 //console.log(page.locator('#checkBoxOption2').isChecked());
 await expect(await page.locator('#checkBoxOption2').check()).toBeTruthy();
 await expect(await page.locator('#checkBoxOption3').isChecked()).toBeFalsy();


await page.waitForTimeout(3000)

})

