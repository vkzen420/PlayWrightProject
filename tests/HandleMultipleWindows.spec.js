import {test,expect,chromium} from '@playwright/test';

test('Create own Pages', async ()=>{

const browser =  await chromium.launch();
const context =  await browser.newContext();
const page1 = await context.newPage();
const page2  = await context.newPage();
const page3  = await context.newPage();

await page1.goto('https://www.google.co.in/');
await page2.goto('https://www.google.co.in/');
await page3.goto('https://www.google.co.in/');

})

test('Handle Multiple pages', async ({page,context})=>{

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   const title =await page.title();
   console.log(title);
   await expect(page).toHaveTitle(title);

    const pagePromise =  context.waitForEvent('page');
    await page.locator("a[href='http://www.orangehrm.com']").click();
   
   const newPage = await pagePromise; 
   const newpagetitle = await newPage.title();
   console.log(newpagetitle);
   await expect(newPage).toHaveTitle(newpagetitle);
   await expect(page).toHaveTitle(title);
})