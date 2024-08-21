const {test,expect}=require('@playwright/test');

test('First TC',async ({page})=>{

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');


})