const {test,expect}=require('@playwright/test');

test('datepicker',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
//await page.locator('input#datepicker').fill('08/16/2023');
//await page.keyboard.press('Enter');


await page.locator('input#datepicker').click();

const Year = "2023";
const Month = "March";
const Date = "25";

while(true)
{

   const acyear = await page.locator('.ui-datepicker-year').textContent();
   const acmonth = await page.locator('.ui-datepicker-month').textContent();

   if(acyear ===Year && acmonth===Month)
   {
       break;
   } 
  
   await page.locator('//a[@title = "Prev"]').click();
   /*if(Year>=acyear)
    {
       await page.locator('//a[@title = "Next"]').click();
    }
   else
    {
      await page.locator('//a[@title = "Prev"]').click();
    }*/

  //date selection
  

}
await page.locator(`//a[@class= 'ui-state-default'][text()='${Date}']`).click();    

await page.waitForTimeout(10000)



})