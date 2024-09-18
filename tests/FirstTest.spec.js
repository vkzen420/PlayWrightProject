const {test,expect}=require('@playwright/test');

test.skip('First TC',async ({page})=>{

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  
       
})